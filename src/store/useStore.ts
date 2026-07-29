import { create } from 'zustand';
import { Product } from '@/data/mockData';

interface AppStore {
  isDealerModalOpen: boolean;
  openDealerModal: (product?: Product) => void;
  closeDealerModal: () => void;
  selectedProductForInquiry: Product | null;
}

export const useStore = create<AppStore>((set) => ({
  isDealerModalOpen: false,
  selectedProductForInquiry: null,
  
  openDealerModal: (product) => set({ 
    isDealerModalOpen: true, 
    selectedProductForInquiry: product || null 
  }),
  
  closeDealerModal: () => set({ 
    isDealerModalOpen: false, 
    selectedProductForInquiry: null 
  }),
}));
