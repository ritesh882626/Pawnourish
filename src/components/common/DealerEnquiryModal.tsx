'use client';

import React, { useState } from 'react';
import { useStore } from '@/store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Building2, ArrowLeft, ArrowRight, Sparkles, Store, MapPin, User, Phone, Mail, FileText } from 'lucide-react';

export default function DealerEnquiryModal() {
  const { isDealerModalOpen, closeDealerModal, selectedProductForInquiry } = useStore();
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    businessType: 'Pet Store',
    location: 'Delhi',
    notes: ''
  });

  if (!isDealerModalOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep((prev) => prev + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleClose = () => {
    setStep(1);
    setSubmitted(false);
    closeDealerModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      
      {/* Dark Overlay Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />

      {/* Main Slide-Up Sheet Container */}
      <motion.div 
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 220 }}
        className="relative bg-amber-500 w-full max-w-xl max-h-[92vh] sm:max-h-[90vh] rounded-t-[2.5rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden z-10 border border-amber-400 flex flex-col"
      >

        {/* Top Header & Navigation */}
        <div className="px-6 pt-5 pb-4 flex items-center justify-between text-slate-950 shrink-0">
          <div className="flex items-center gap-3">
            {step > 1 && !submitted && (
              <button 
                onClick={handleBack}
                className="w-9 h-9 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center text-slate-950 transition-colors"
                aria-label="Back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-900/80 block">
                {!submitted ? `Step 0${step} of 03` : "Complete"}
              </span>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950">
                {selectedProductForInquiry ? "Inquire Rate Card" : "Dealer Application"}
              </h2>
            </div>
          </div>

          <button 
            onClick={handleClose}
            className="w-9 h-9 rounded-full bg-slate-950/10 hover:bg-slate-950/20 flex items-center justify-center text-slate-950 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Line */}
        {!submitted && (
          <div className="w-full bg-slate-950/10 h-1.5 shrink-0">
            <motion.div 
              className="bg-slate-950 h-full"
              initial={{ width: "33%" }}
              animate={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}

        {/* Slide-Up White Form Card Container */}
        <div className="bg-white rounded-t-[2rem] p-6 sm:p-8 flex-1 overflow-y-auto shadow-2xl flex flex-col justify-between">
          
          {submitted ? (
            /* Success Step */
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8 space-y-4 my-auto"
            >
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-inner">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Application Submitted!</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
                Thank you for applying. Our Delhi NCR wholesale manager will contact you on <strong>{formData.phone || "WhatsApp"}</strong> within 2 hours with the official Royal Canin & Drools price list.
              </p>
              <button
                onClick={handleClose}
                className="mt-6 w-full py-4 bg-slate-950 hover:bg-slate-900 text-white font-extrabold rounded-2xl shadow-xl transition-all text-sm"
              >
                Close & Continue Browsing
              </button>
            </motion.div>
          ) : (
            /* Step Wise Wizard Form */
            <form onSubmit={handleNext} className="flex flex-col justify-between flex-1 min-h-[300px]">
              
              <AnimatePresence mode="wait">
                
                {/* STEP 1: Business Info */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -25, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="space-y-1 mb-2">
                      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1.5">
                        <Store className="w-4 h-4" /> Store Profile
                      </span>
                      <h3 className="text-lg font-extrabold text-slate-900">Tell us about your business</h3>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Store / Business Name *</label>
                      <input 
                        required
                        type="text"
                        placeholder="e.g. Royal Pet Care Plaza"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-base sm:text-sm focus:outline-none focus:border-amber-500 min-h-[48px]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Business Type *</label>
                      <select 
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-base sm:text-sm font-medium focus:outline-none focus:border-amber-500 min-h-[48px]"
                      >
                        <option value="Pet Store">Pet Retail Store</option>
                        <option value="Veterinary Clinic">Veterinary Clinic</option>
                        <option value="Grooming Salon">Pet Grooming Salon</option>
                        <option value="Pet Pharmacy">Pet Pharmacy</option>
                        <option value="Breeder / Kennel">Breeder / Kennel</option>
                        <option value="Distributor">Local Distributor</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Contact Details */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -25, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="space-y-1 mb-2">
                      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1.5">
                        <User className="w-4 h-4" /> Contact & Location
                      </span>
                      <h3 className="text-lg font-extrabold text-slate-900">How can our team reach you?</h3>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Contact Person Name *</label>
                      <input 
                        required
                        type="text"
                        placeholder="Owner / Manager Name"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-base sm:text-sm focus:outline-none focus:border-amber-500 min-h-[48px]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Phone Number (WhatsApp) *</label>
                      <input 
                        required
                        type="tel"
                        placeholder="+91 98100 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-base sm:text-sm focus:outline-none focus:border-amber-500 min-h-[48px]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">NCR Location / City *</label>
                      <select 
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-base sm:text-sm font-medium focus:outline-none focus:border-amber-500 min-h-[48px]"
                      >
                        <option value="Delhi">Delhi (All Zones)</option>
                        <option value="Gurugram">Gurugram</option>
                        <option value="Noida">Noida / Greater Noida</option>
                        <option value="Ghaziabad">Ghaziabad</option>
                        <option value="Faridabad">Faridabad</option>
                        <option value="Other NCR">Other NCR Region</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Email & Final Submit */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -25, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="space-y-1 mb-2">
                      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1.5">
                        <FileText className="w-4 h-4" /> Preferences & Submit
                      </span>
                      <h3 className="text-lg font-extrabold text-slate-900">Final step to get your rate card</h3>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Business Email *</label>
                      <input 
                        required
                        type="email"
                        placeholder="store@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-base sm:text-sm focus:outline-none focus:border-amber-500 min-h-[48px]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Preferred Brands / SKUs Notes</label>
                      <textarea 
                        rows={2}
                        placeholder="Mention Royal Canin or Drools requirements..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-base sm:text-sm focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Bottom Action Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full py-4 bg-slate-950 hover:bg-slate-900 active:scale-[0.98] text-white font-black rounded-2xl flex items-center justify-center gap-2 text-base shadow-xl transition-all min-h-[52px]"
                >
                  {step === 3 ? (
                    <>
                      <Send className="w-5 h-5 text-amber-400" />
                      <span>Submit & Get Price List</span>
                    </>
                  ) : (
                    <>
                      <span>Continue</span>
                      <ArrowRight className="w-5 h-5 text-amber-400" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </motion.div>
    </div>
  );
}
