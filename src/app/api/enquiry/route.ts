import { NextRequest, NextResponse } from 'next/server';

// Server-side in-memory deduplication cache (prevents duplicate submissions from retries/double-clicks)
const recentSubmissions = new Map<string, number>();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      formSource,
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
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Required fields missing: Name and Phone are required.' },
        { status: 400 }
      );
    }

    // 2. Server-side Deduplication (Hash Key from phone + product + timestamp window)
    const dedupeKey = `${phone}_${productSku || productName || 'general'}_${businessName || 'lead'}`.toLowerCase().replace(/\s+/g, '');
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

    // 4. Send to Google Sheets Webhook (Apps Script)
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;

    if (webhookUrl && webhookUrl.trim() !== '') {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({
            timestamp,
            formSource: formSource || 'Website Lead',
            name,
            businessName: businessName || 'N/A',
            businessType: businessType || 'Pet Retailer',
            phone,
            email: email || '',
            city: city || 'Delhi NCR',
            productName: productName || (brand ? `${brand} ${variant || ''}` : ''),
            productSku: productSku || '',
            variant: variant || '',
            packSize: packSize || '',
            quantity: quantity || '',
            message: message || ''
          }),
          redirect: 'follow'
        });
      } catch (postErr) {
        console.warn('Google Sheet Webhook push warning:', postErr);
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

