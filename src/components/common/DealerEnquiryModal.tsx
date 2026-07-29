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
      
      {/* Dark Blur Overlay Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl transition-opacity"
        onClick={handleClose}
      />

      {/* Main Slide-Up Glassmorphism Green Container */}
      <motion.div 
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 220 }}
        className="relative bg-emerald-950/90 backdrop-blur-2xl text-white w-full max-w-xl max-h-[92vh] sm:max-h-[90vh] rounded-t-[2.5rem] sm:rounded-[2.5rem] shadow-2xl shadow-emerald-950/50 overflow-hidden z-10 border border-emerald-500/30 flex flex-col"
      >

        {/* Top Header & Step Navigation */}
        <div className="px-6 py-5 flex items-center justify-between text-white shrink-0 border-b border-emerald-800/40">
          <div className="flex items-center gap-3">
            {step > 1 && !submitted && (
              <button 
                onClick={handleBack}
                className="w-10 h-10 rounded-2xl bg-emerald-900/60 hover:bg-emerald-800/80 border border-emerald-500/30 flex items-center justify-center text-white transition-colors"
                aria-label="Back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block">
                {!submitted ? `Step 0${step} of 03` : "Complete"}
              </span>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                {selectedProductForInquiry ? "Inquire Rate Card" : "Dealer Application"}
              </h2>
            </div>
          </div>

          <button 
            onClick={handleClose}
            className="w-10 h-10 rounded-2xl bg-emerald-900/60 hover:bg-emerald-800/80 border border-emerald-500/30 flex items-center justify-center text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Line */}
        {!submitted && (
          <div className="w-full bg-emerald-950/60 h-1.5 shrink-0">
            <motion.div 
              className="bg-emerald-400 shadow-[0_0_12px_#34d399] h-full"
              initial={{ width: "33%" }}
              animate={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}

        {/* Scrollable Glassmorphism Green Form Body with Generous Spacing */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-white space-y-6">
          
          {submitted ? (
            /* Success Step */
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8 space-y-5 my-auto"
            >
              <div className="w-20 h-20 bg-emerald-900/80 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400 shadow-inner">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-black text-white">Application Submitted!</h3>
              <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
                Thank you for applying. Our Delhi NCR wholesale manager will contact you on <strong>{formData.phone || "WhatsApp"}</strong> within 2 hours with the official Royal Canin & Drools price list.
              </p>
              <button
                onClick={handleClose}
                className="mt-6 w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl shadow-xl transition-all text-sm min-h-[52px]"
              >
                Close & Continue Browsing
              </button>
            </motion.div>
          ) : (
            /* Step Wise Glassmorphism Form with Spacing */
            <form onSubmit={handleNext} className="flex flex-col justify-between flex-1 min-h-[320px] space-y-6">
              
              <AnimatePresence mode="wait">
                
                {/* STEP 1: Business Profile */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -25, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Store className="w-4 h-4" /> Store Profile
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-white">Tell us about your business</h3>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200">Store / Business Name *</label>
                      <input 
                        required
                        type="text"
                        placeholder="e.g. Royal Pet Care Plaza"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-emerald-900/60 backdrop-blur-md border border-emerald-500/30 p-4 rounded-2xl text-base sm:text-sm text-white placeholder-emerald-300/40 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 min-h-[52px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200">Business Type *</label>
                      <select 
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full bg-emerald-900/60 backdrop-blur-md border border-emerald-500/30 p-4 rounded-2xl text-base sm:text-sm font-medium text-white focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 min-h-[52px]"
                      >
                        <option value="Pet Store" className="bg-emerald-950 text-white">Pet Retail Store</option>
                        <option value="Veterinary Clinic" className="bg-emerald-950 text-white">Veterinary Clinic</option>
                        <option value="Grooming Salon" className="bg-emerald-950 text-white">Pet Grooming Salon</option>
                        <option value="Pet Pharmacy" className="bg-emerald-950 text-white">Pet Pharmacy</option>
                        <option value="Breeder / Kennel" className="bg-emerald-950 text-white">Breeder / Kennel</option>
                        <option value="Distributor" className="bg-emerald-950 text-white">Local Distributor</option>
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
                    className="space-y-5"
                  >
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <User className="w-4 h-4" /> Contact & Location
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-white">How can our team reach you?</h3>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200">Contact Person Name *</label>
                      <input 
                        required
                        type="text"
                        placeholder="Owner / Manager Name"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full bg-emerald-900/60 backdrop-blur-md border border-emerald-500/30 p-4 rounded-2xl text-base sm:text-sm text-white placeholder-emerald-300/40 focus:outline-none focus:border-emerald-400 min-h-[52px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200">Phone Number (WhatsApp) *</label>
                      <input 
                        required
                        type="tel"
                        placeholder="+91 98100 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-emerald-900/60 backdrop-blur-md border border-emerald-500/30 p-4 rounded-2xl text-base sm:text-sm text-white placeholder-emerald-300/40 focus:outline-none focus:border-emerald-400 min-h-[52px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200">NCR Location / City *</label>
                      <select 
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-emerald-900/60 backdrop-blur-md border border-emerald-500/30 p-4 rounded-2xl text-base sm:text-sm font-medium text-white focus:outline-none focus:border-emerald-400 min-h-[52px]"
                      >
                        <option value="Delhi" className="bg-emerald-950 text-white">Delhi (All Zones)</option>
                        <option value="Gurugram" className="bg-emerald-950 text-white">Gurugram</option>
                        <option value="Noida" className="bg-emerald-950 text-white">Noida / Greater Noida</option>
                        <option value="Ghaziabad" className="bg-emerald-950 text-white">Ghaziabad</option>
                        <option value="Faridabad" className="bg-emerald-950 text-white">Faridabad</option>
                        <option value="Other NCR" className="bg-emerald-950 text-white">Other NCR Region</option>
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
                    className="space-y-5"
                  >
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <FileText className="w-4 h-4" /> Preferences & Submit
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-white">Final step to get your rate card</h3>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200">Business Email *</label>
                      <input 
                        required
                        type="email"
                        placeholder="store@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-emerald-900/60 backdrop-blur-md border border-emerald-500/30 p-4 rounded-2xl text-base sm:text-sm text-white placeholder-emerald-300/40 focus:outline-none focus:border-emerald-400 min-h-[52px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200">Preferred Brands / SKUs Notes</label>
                      <textarea 
                        rows={2}
                        placeholder="Mention Royal Canin or Drools requirements..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-emerald-900/60 backdrop-blur-md border border-emerald-500/30 p-4 rounded-2xl text-base sm:text-sm text-white placeholder-emerald-300/40 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Bottom Action Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-slate-950 font-black rounded-2xl flex items-center justify-center gap-2 text-base shadow-xl shadow-emerald-500/30 transition-all min-h-[52px]"
                >
                  {step === 3 ? (
                    <>
                      <Send className="w-5 h-5 text-slate-950" />
                      <span>Submit & Get Price List</span>
                    </>
                  ) : (
                    <>
                      <span>Continue</span>
                      <ArrowRight className="w-5 h-5 text-slate-950" />
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
