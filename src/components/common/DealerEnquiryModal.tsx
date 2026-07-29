'use client';

import React, { useState } from 'react';
import { useStore } from '@/store/useStore';
import { X, Send, CheckCircle2, Building2, Phone, Mail, MapPin } from 'lucide-react';

export default function DealerEnquiryModal() {
  const { isDealerModalOpen, closeDealerModal, selectedProductForInquiry } = useStore();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    businessType: 'Pet Store',
    location: 'Delhi',
    estimatedMonthlyBudget: '₹50,000 - ₹1,00,000',
    notes: ''
  });

  if (!isDealerModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={closeDealerModal}
      />

      {/* Modal Container (Bottom sheet on mobile, centered modal on desktop) */}
      <div className="relative bg-white w-full max-w-2xl max-h-[92vh] sm:max-h-[90vh] rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-200 flex flex-col">
        
        {/* Mobile Drag Indicator */}
        <div className="sm:hidden w-full flex justify-center py-2 bg-emerald-950">
          <div className="w-12 h-1.5 bg-emerald-700/60 rounded-full" />
        </div>

        {/* Modal Sticky Header */}
        <div className="bg-emerald-950 text-white px-5 py-4 sm:p-6 flex justify-between items-center shrink-0 border-b border-emerald-900">
          <div className="space-y-0.5 max-w-[85%]">
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" /> B2B Wholesale Inquiry
            </div>
            <h2 className="text-lg sm:text-2xl font-bold truncate">
              {selectedProductForInquiry 
                ? `Inquire: ${selectedProductForInquiry.title}` 
                : 'Become an Authorized Dealer'}
            </h2>
          </div>

          <button 
            onClick={closeDealerModal}
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 text-slate-900">
          {submitted ? (
            <div className="text-center py-8 sm:py-10 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Enquiry Received!</h3>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. Our Delhi NCR wholesale manager will contact you via Phone & WhatsApp within 2 hours with the official Royal Canin & Drools price list.
              </p>
              <button
                onClick={() => { setSubmitted(false); closeDealerModal(); }}
                className="mt-4 w-full sm:w-auto px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition-all text-sm"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase text-slate-700 mb-1">Business / Store Name *</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="e.g. Pet Care Plaza"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-base sm:text-sm focus:outline-none focus:border-emerald-600 min-h-[46px]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase text-slate-700 mb-1">Contact Person Name *</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Your Name"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-base sm:text-sm focus:outline-none focus:border-emerald-600 min-h-[46px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase text-slate-700 mb-1">Phone Number (WhatsApp) *</label>
                  <input 
                    required 
                    type="tel" 
                    placeholder="+91 98100 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-base sm:text-sm focus:outline-none focus:border-emerald-600 min-h-[46px]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase text-slate-700 mb-1">Business Email *</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="store@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-base sm:text-sm focus:outline-none focus:border-emerald-600 min-h-[46px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase text-slate-700 mb-1">Business Type *</label>
                  <select 
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-base sm:text-sm font-medium focus:outline-none focus:border-emerald-600 min-h-[46px]"
                  >
                    <option value="Pet Store">Pet Retail Store</option>
                    <option value="Veterinary Clinic">Veterinary Clinic</option>
                    <option value="Pet Grooming Salon">Pet Grooming Salon</option>
                    <option value="Pet Pharmacy">Pet Pharmacy</option>
                    <option value="Breeder / Kennel">Breeder / Kennel</option>
                    <option value="Distributor">Local Distributor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase text-slate-700 mb-1">NCR Region / City *</label>
                  <select 
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-base sm:text-sm font-medium focus:outline-none focus:border-emerald-600 min-h-[46px]"
                  >
                    <option value="Delhi">Delhi (All Zones)</option>
                    <option value="Gurugram">Gurugram</option>
                    <option value="Noida">Noida / Greater Noida</option>
                    <option value="Ghaziabad">Ghaziabad</option>
                    <option value="Faridabad">Faridabad</option>
                    <option value="Other NCR">Other NCR Region</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase text-slate-700 mb-1">Additional Requirements / Preferred Brands</label>
                <textarea 
                  rows={2} 
                  placeholder="Mention specific Royal Canin or Drools SKUs or order frequency..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-base sm:text-sm focus:outline-none focus:border-emerald-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-emerald-700 hover:bg-emerald-800 active:scale-[0.99] text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 text-base shadow-xl transition-all min-h-[50px] mt-2"
              >
                <Send className="w-5 h-5" /> Submit Dealer Enquiry & Get Price List
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
