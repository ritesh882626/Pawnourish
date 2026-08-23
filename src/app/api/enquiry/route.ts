import { NextRequest, NextResponse } from 'next/server';

// Server-side in-memory deduplication cache (prevents duplicate submissions from retries/double-clicks)
const recentSubmissions = new Map<string, number>();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      productSku,
      brand,
      productName,
      variant,
      packSize,
      species,
      foodType,
      lifeStage,
      name,
      businessName,
      phone,
      email,
      city,
      businessType,
      quantity,
      message
    } = body;

    // 1. Basic validation
    if (!name || !phone || !businessName || !city) {
      return NextResponse.json(
        { success: false, error: 'Required fields missing: Name, Business Name, Phone, and City are required.' },
        { status: 400 }
      );
    }

    // 2. Server-side Deduplication (Hash Key from phone + product + timestamp window)
    const dedupeKey = `${phone}_${productSku || productName || 'general'}_${businessName}`.toLowerCase().replace(/\s+/g, '');
    const now = Date.now();
    const lastSubmitted = recentSubmissions.get(dedupeKey);

    // Prevent duplicate submission within 10 seconds
    if (lastSubmitted && now - lastSubmitted < 10000) {
      return NextResponse.json({
        success: true,
        message: 'Enquiry already received (deduplicated).'
      });
    }

    recentSubmissions.set(dedupeKey, now);

    // Cleanup old keys after 5 minutes
    if (recentSubmissions.size > 100) {
      for (const [key, time] of recentSubmissions.entries()) {
        if (now - time > 300000) {
          recentSubmissions.delete(key);
        }
      }
    }

    // 3. Format India Timezone Timestamp
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'medium'
    });

    // 4. Secure Server-Side Google Sheet / Google Form Submission
    const googleFormUrl = process.env.GOOGLE_FORM_URL || process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (googleFormUrl && googleFormUrl.trim() !== '') {
      const formData = new URLSearchParams();

      // Standard Google Form / Webhook mapping
      if (process.env.GOOGLE_FIELD_TIMESTAMP) formData.append(process.env.GOOGLE_FIELD_TIMESTAMP, timestamp);
      if (process.env.GOOGLE_FIELD_NAME) formData.append(process.env.GOOGLE_FIELD_NAME, name);
      if (process.env.GOOGLE_FIELD_BUSINESS_NAME) formData.append(process.env.GOOGLE_FIELD_BUSINESS_NAME, businessName);
      if (process.env.GOOGLE_FIELD_PHONE) formData.append(process.env.GOOGLE_FIELD_PHONE, phone);
      if (process.env.GOOGLE_FIELD_EMAIL && email) formData.append(process.env.GOOGLE_FIELD_EMAIL, email);
      if (process.env.GOOGLE_FIELD_CITY) formData.append(process.env.GOOGLE_FIELD_CITY, city);
      if (process.env.GOOGLE_FIELD_BUSINESS_TYPE) formData.append(process.env.GOOGLE_FIELD_BUSINESS_TYPE, businessType || 'Retailer');
      if (process.env.GOOGLE_FIELD_BRAND && brand) formData.append(process.env.GOOGLE_FIELD_BRAND, brand);
      if (process.env.GOOGLE_FIELD_PRODUCT_NAME && productName) formData.append(process.env.GOOGLE_FIELD_PRODUCT_NAME, productName);
      if (process.env.GOOGLE_FIELD_VARIANT && variant) formData.append(process.env.GOOGLE_FIELD_VARIANT, variant);
      if (process.env.GOOGLE_FIELD_PACK_SIZE && packSize) formData.append(process.env.GOOGLE_FIELD_PACK_SIZE, packSize);
      if (process.env.GOOGLE_FIELD_SKU && productSku) formData.append(process.env.GOOGLE_FIELD_SKU, productSku);
      if (process.env.GOOGLE_FIELD_QUANTITY && quantity) formData.append(process.env.GOOGLE_FIELD_QUANTITY, quantity);
      if (process.env.GOOGLE_FIELD_MESSAGE && message) formData.append(process.env.GOOGLE_FIELD_MESSAGE, message);

      try {
        await fetch(googleFormUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: formData.toString()
        });
      } catch (postErr) {
        console.warn('Server-side Google Form push warning:', postErr);
      }
    }

    return NextResponse.json({
      success: true,
      timestamp,
      message: 'Enquiry submitted successfully and recorded.'
    });
  } catch (error: any) {
    console.error('API /api/enquiry Error:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Server error processing enquiry' },
      { status: 500 }
    );
  }
}
