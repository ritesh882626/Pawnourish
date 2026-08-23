import { Product } from '@/data/mockData';

export interface DealerEnquiryData {
  // Product context (prefilled automatically)
  productSku?: string;
  brand?: string;
  productName?: string;
  variant?: string;
  species?: string;
  foodType?: string;
  lifeStage?: string;

  // Retailer details
  name: string;
  businessName: string;
  phone: string;
  email?: string;
  city: string;
  businessType: string;
  quantity?: string;
  message?: string;
}

export async function submitDealerEnquiry(data: DealerEnquiryData): Promise<{ success: boolean; error?: string }> {
  try {
    const googleFormUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL;

    if (googleFormUrl && googleFormUrl.trim() !== '') {
      // Map fields dynamically if Google Form entry IDs are provided in environment
      const formData = new FormData();

      if (process.env.NEXT_PUBLIC_PRODUCT_SKU_FIELD && data.productSku) {
        formData.append(process.env.NEXT_PUBLIC_PRODUCT_SKU_FIELD, data.productSku);
      }
      if (process.env.NEXT_PUBLIC_BRAND_FIELD && data.brand) {
        formData.append(process.env.NEXT_PUBLIC_BRAND_FIELD, data.brand);
      }
      if (process.env.NEXT_PUBLIC_PRODUCT_NAME_FIELD && data.productName) {
        formData.append(process.env.NEXT_PUBLIC_PRODUCT_NAME_FIELD, data.productName);
      }
      if (process.env.NEXT_PUBLIC_VARIANT_FIELD && data.variant) {
        formData.append(process.env.NEXT_PUBLIC_VARIANT_FIELD, data.variant);
      }
      if (process.env.NEXT_PUBLIC_SPECIES_FIELD && data.species) {
        formData.append(process.env.NEXT_PUBLIC_SPECIES_FIELD, data.species);
      }
      if (process.env.NEXT_PUBLIC_FOOD_TYPE_FIELD && data.foodType) {
        formData.append(process.env.NEXT_PUBLIC_FOOD_TYPE_FIELD, data.foodType);
      }
      if (process.env.NEXT_PUBLIC_LIFE_STAGE_FIELD && data.lifeStage) {
        formData.append(process.env.NEXT_PUBLIC_LIFE_STAGE_FIELD, data.lifeStage);
      }
      if (process.env.NEXT_PUBLIC_NAME_FIELD) {
        formData.append(process.env.NEXT_PUBLIC_NAME_FIELD, data.name);
      }
      if (process.env.NEXT_PUBLIC_BUSINESS_NAME_FIELD) {
        formData.append(process.env.NEXT_PUBLIC_BUSINESS_NAME_FIELD, data.businessName);
      }
      if (process.env.NEXT_PUBLIC_PHONE_FIELD) {
        formData.append(process.env.NEXT_PUBLIC_PHONE_FIELD, data.phone);
      }
      if (process.env.NEXT_PUBLIC_EMAIL_FIELD && data.email) {
        formData.append(process.env.NEXT_PUBLIC_EMAIL_FIELD, data.email);
      }
      if (process.env.NEXT_PUBLIC_CITY_FIELD) {
        formData.append(process.env.NEXT_PUBLIC_CITY_FIELD, data.city);
      }
      if (process.env.NEXT_PUBLIC_BUSINESS_TYPE_FIELD) {
        formData.append(process.env.NEXT_PUBLIC_BUSINESS_TYPE_FIELD, data.businessType);
      }
      if (process.env.NEXT_PUBLIC_QUANTITY_FIELD && data.quantity) {
        formData.append(process.env.NEXT_PUBLIC_QUANTITY_FIELD, data.quantity);
      }
      if (process.env.NEXT_PUBLIC_MESSAGE_FIELD && data.message) {
        formData.append(process.env.NEXT_PUBLIC_MESSAGE_FIELD, data.message);
      }

      await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors', // standard mode for Google Form submissions
        body: formData
      });
    } else {
      // Simulate network request delay when URL is empty
      await new Promise((resolve) => setTimeout(resolve, 800));
    }

    return { success: true };
  } catch (err: any) {
    console.error('Enquiry submission error:', err);
    return { success: false, error: err?.message || 'Submission failed' };
  }
}
