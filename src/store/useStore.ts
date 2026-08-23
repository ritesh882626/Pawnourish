import { create } from 'zustand';
import { Product } from '@/data/mockData';

interface AppStore {
  isDealerModalOpen: boolean;
  openDealerModal: (product?: Product, variant?: string, packSize?: string) => void;
  closeDealerModal: () => void;
  selectedProductForInquiry: Product | null;
  selectedVariantForInquiry: string | null;
  selectedPackSizeForInquiry: string | null;
}

export const useStore = create<AppStore>((set) => ({
  isDealerModalOpen: false,
  selectedProductForInquiry: null,
  selectedVariantForInquiry: null,
  selectedPackSizeForInquiry: null,
  
  openDealerModal: (product, variant, packSize) => set({ 
    isDealerModalOpen: true, 
    selectedProductForInquiry: product || null,
    selectedVariantForInquiry: variant || null,
    selectedPackSizeForInquiry: packSize || null,
  }),
  
  closeDealerModal: () => set({ 
    isDealerModalOpen: false, 
    selectedProductForInquiry: null,
    selectedVariantForInquiry: null,
    selectedPackSizeForInquiry: null,
  }),
}));

