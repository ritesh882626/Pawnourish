'use client';

import React, { useState, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { submitDealerEnquiry } from '@/services/enquiryService';
import { getProductImage } from '@/data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Building2, 
  MessageCircle, 
  AlertCircle,
  PackageCheck,
  Tag,
  ShieldCheck,
  Send
} from 'lucide-react';

export default function DealerEnquiryModal() {
  const { 
    isDealerModalOpen, 
    selectedProductForInquiry: selectedProduct, 
    selectedVariantForInquiry: prefilledVariant, 
    closeDealerModal 
  } = useStore();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1); // 1: Product, 2: Retailer Details, 3: Success, 4: Error
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Form Fields
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Delhi NCR');
  const [businessType, setBusinessType] = useState('Pet Store');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isDealerModalOpen) {
      setStep(1);
      setLoading(false);
      setErrorMessage('');
    }
  }, [isDealerModalOpen]);

  if (!isDealerModalOpen) return null;

  const handleStep1Continue = () => {
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const payload = {
      formSource: 'Product Catalogue Modal',
      productSku: selectedProduct?.code || 'GENERAL-CATALOG',
      brand: selectedProduct?.brand || 'All Brands',
      productName: selectedProduct?.title || 'Wholesale Price List',
      variant: prefilledVariant || selectedProduct?.variantName || '',
      species: selectedProduct?.species || '',
      foodType: selectedProduct?.subCategory || '',
      lifeStage: selectedProduct?.lifeStage || '',

      name,
      businessName,
      phone,
      email,
      city,
      businessType,
      quantity,
      message
    };

    const res = await submitDealerEnquiry(payload);
    setLoading(false);

    if (res.success) {
      setStep(3); // Success
    } else {
      setErrorMessage(res.error || 'Submission failed');
      setStep(4); // Error
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeDealerModal}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
      />

      {/* Modal Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", damping: 25, stiffness: 280 }}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 text-slate-900 border border-slate-100 my-auto"
      >

        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black">
              P
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-lg leading-none">Wholesale Request</h3>
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Pawnourish B2B Desk</p>
            </div>
          </div>

          <button
            onClick={closeDealerModal}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Indicator (Step 1 -> Step 2) */}
        {(step === 1 || step === 2) && (
          <div className="px-6 pt-4 pb-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-emerald-700 font-black' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step >= 1 ? 'bg-emerald-700 text-white' : 'bg-slate-200'}`}>1</span>
              <span>Product Request</span>
            </div>
            <div className="w-12 h-0.5 bg-slate-200 rounded-full" />
            <div className={`flex items-center gap-2 ${step === 2 ? 'text-emerald-700 font-black' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step === 2 ? 'bg-emerald-700 text-white' : 'bg-slate-200'}`}>2</span>
              <span>Your Details</span>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8">

          {/* STEP 1: PRODUCT CONFIRMATION */}
          {step === 1 && (
            <div className="space-y-6">
              
              <div className="space-y-1">
                <h4 className="text-xl font-black text-slate-900">Confirm Product Selection</h4>
                <p className="text-xs text-slate-500 font-medium">
                  Review the product details you are enquiring about before providing your contact information.
                </p>
              </div>

              {selectedProduct ? (
                /* Selected Product Card Summary */
                <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex gap-4 items-center">
                  <div className="w-20 h-20 rounded-xl bg-white p-2 border border-emerald-100 shrink-0 overflow-hidden shadow-sm flex items-center justify-center">
                    <img 
                      src={selectedProduct.image || getProductImage(selectedProduct.brand, selectedProduct.species)} 
                      alt={selectedProduct.title} 
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>

                  <div className="space-y-1 min-w-0 flex-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                        {selectedProduct.brand}
                      </span>
                      {prefilledVariant && (
                        <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                          {prefilledVariant}
                        </span>
                      )}
                    </div>
                    
                    <h5 className="font-extrabold text-slate-900 text-base leading-snug truncate">
                      {selectedProduct.title}
                    </h5>

                    <p className="text-xs text-emerald-800 font-bold">
                      {selectedProduct.species} • {selectedProduct.lifeStage} • {selectedProduct.subCategory}
                    </p>

                    <div className="text-[11px] text-slate-500 font-mono pt-0.5 flex items-center gap-3">
                      <span>SKU: <strong className="text-slate-800">{selectedProduct.code}</strong></span>
                      {selectedProduct.packagingSizes[0] && (
                        <span>Pack: <strong className="text-slate-800">{selectedProduct.packagingSizes[0]}</strong></span>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                /* General Catalog Selection */
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-left">
                  <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-sm">
                    <PackageCheck className="w-4 h-4" />
                    <span>Complete B2B Wholesale Rate Card</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">
                    You are requesting the complete 2026 Wholesale Dealer Price List for Royal Canin & Drools products in Delhi NCR.
                  </p>
                </div>
              )}

              {/* Continue Button */}
              <button
                onClick={handleStep1Continue}
                className="w-full py-4 bg-slate-950 hover:bg-emerald-800 text-white font-black rounded-2xl shadow-xl text-sm flex items-center justify-center gap-2 transition-all"
              >
                <span>CONTINUE TO DETAILS</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

            </div>
          )}

          {/* STEP 2: BUSINESS & CONTACT DETAILS */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              <div className="flex items-center justify-between pb-1">
                <div>
                  <h4 className="text-xl font-black text-slate-900">Tell us about yourself</h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Share your details and our team will get back to you with availability and pricing.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-bold text-slate-400 hover:text-slate-900 flex items-center gap-1 shrink-0"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold uppercase text-slate-600">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-600 bg-slate-50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold uppercase text-slate-600">Business Name *</label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Paws & Tails Clinic"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-600 bg-slate-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold uppercase text-slate-600">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 97116 XXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-600 bg-slate-50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold uppercase text-slate-600">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="retailer@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-600 bg-slate-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold uppercase text-slate-600">City / Region *</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Delhi, Gurugram, Noida, etc."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-600 bg-slate-50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold uppercase text-slate-600">Business Type *</label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-600 bg-slate-50"
                  >
                    <option value="Pet Store">Pet Store</option>
                    <option value="Distributor">Distributor</option>
                    <option value="Veterinary Clinic">Veterinary Clinic</option>
                    <option value="Retailer">Retailer</option>
                    <option value="Reseller">Reseller</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold uppercase text-slate-600">Required Quantity</label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 10 bags / 5 boxes"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-600 bg-slate-50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold uppercase text-slate-600">Message / Notes</label>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Special requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:border-emerald-600 bg-slate-50"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-black rounded-2xl shadow-xl text-sm flex items-center justify-center gap-2 transition-all pt-3 mt-2 disabled:opacity-50"
              >
                {loading ? (
                  <span>SUBMITTING...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>SUBMIT ENQUIRY</span>
                  </>
                )}
              </button>

            </form>
          )}

          {/* STEP 3: SUCCESS STATE */}
          {step === 3 && (
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-black text-slate-900">Enquiry Received</h4>
                <p className="text-xs text-slate-600 font-medium max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="font-extrabold text-slate-900">{name || 'Dealer'}</span>. We&apos;ve received your enquiry for{' '}
                  <span className="font-extrabold text-emerald-800">{selectedProduct?.title || 'our Wholesale Product Portfolio'}</span>.
                </p>
                <p className="text-xs text-slate-500">
                  Our B2B account team will contact you shortly with availability and wholesale pricing.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <button
                  onClick={closeDealerModal}
                  className="w-full py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-black rounded-2xl text-xs tracking-wider"
                >
                  BACK TO PRODUCTS
                </button>

                <a
                  href="https://wa.me/919711633094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-700 text-white" />
                  <span>Instant WhatsApp Support: +91 97116 33094</span>
                </a>
              </div>
            </div>
          )}

          {/* STEP 4: ERROR STATE */}
          {step === 4 && (
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto shadow-md">
                <AlertCircle className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-black text-slate-900">Submission Error</h4>
                <p className="text-xs text-slate-600 font-medium max-w-sm mx-auto leading-relaxed">
                  We couldn&apos;t submit your enquiry right now. Please try again or contact us directly on WhatsApp.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setStep(2)}
                  className="py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-black rounded-2xl text-xs"
                >
                  TRY AGAIN
                </button>

                <a
                  href="https://wa.me/919711633094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-black rounded-2xl text-xs flex items-center justify-center gap-1.5 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WHATSAPP US</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </motion.div>

    </div>
  );
}
