import { Product } from '@/data/mockData';

export interface DealerEnquiryData {
  formSource?: string;
  // Product context (prefilled automatically)
  productSku?: string;
  brand?: string;
  productName?: string;
  variant?: string;
  packSize?: string;
  species?: string;
  foodType?: string;
  lifeStage?: string;

  // Retailer details
  name: string;
  businessName?: string;
  phone: string;
  email?: string;
  city?: string;
  businessType?: string;
  quantity?: string;
  message?: string;
}

export async function submitDealerEnquiry(data: DealerEnquiryData): Promise<{ success: boolean; error?: string }> {
  try {
    // 1. Client-Side Validation
    if (!data.name || !data.phone) {
      return { success: false, error: 'Please fill in required fields (Name and Phone Number).' };
    }

    // 2. Post to secure server-side Next.js API route
    const res = await fetch('/api/enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok || !result.success) {
      return { success: false, error: result.error || 'Failed to submit enquiry. Please try again.' };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Enquiry submission error:', err);
    return { success: false, error: err?.message || 'Network error. Please try again or contact via WhatsApp.' };
  }
}
