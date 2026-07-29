'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Send, CheckCircle2, Phone, Mail, MapPin, ArrowLeft, ArrowRight, Store, User, FileText } from 'lucide-react';

export default function DealerEnquirySection() {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    storeName: '',
    contactName: '',
    phone: '',
    email: '',
    businessType: 'Pet Store',
    location: 'Delhi',
    notes: ''
  });

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

  return (
    <section id="dealer-form" className="py-12 sm:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column Text & Contact Info */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-950 text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-700/50">
            <Building2 className="w-4 h-4" /> Become an Authorized Partner
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Apply for B2B Wholesale Dealership in Delhi NCR
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Fill out our quick 3-step enquiry wizard to receive official Royal Canin and Drools wholesale rate cards, credit terms, and dealer onboarding details within 2 hours.
          </p>

          <div className="space-y-3 pt-3 sm:pt-4 text-xs sm:text-sm text-slate-300 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
              <span>Direct Wholesale Desk: +91 98100 98100 (Mon - Sat, 9 AM - 7 PM)</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
              <span>Dealer Email: b2b@pawnourish.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
              <span>Serving All Zones in Delhi, Gurugram, Noida, Ghaziabad & Faridabad</span>
            </div>
          </div>
        </div>

        {/* Right Column: Step-Wise Slide-Up Form Card */}
        <div className="lg:col-span-6 bg-amber-500 rounded-3xl p-1 shadow-2xl overflow-hidden border border-amber-400">
          
          {/* Header Banner */}
          <div className="px-6 py-4 flex items-center justify-between text-slate-950">
            <div className="flex items-center gap-3">
              {step > 1 && !submitted && (
                <button 
                  onClick={handleBack}
                  className="w-8 h-8 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center text-slate-950 transition-colors"
                  aria-label="Back"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-950/80 block">
                  {!submitted ? `Step 0${step} of 03` : "Completed"}
                </span>
                <h3 className="text-lg font-black tracking-tight text-slate-950">
                  Dealer Registration Rate Card
                </h3>
              </div>
            </div>
          </div>

          {/* Progress Line */}
          {!submitted && (
            <div className="w-full bg-slate-950/10 h-1.5">
              <motion.div 
                className="bg-slate-950 h-full"
                initial={{ width: "33%" }}
                animate={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          {/* Slide-Up White Form Container */}
          <div className="bg-white rounded-t-[2rem] rounded-b-2xl p-6 sm:p-8 text-slate-900 min-h-[380px] flex flex-col justify-between">
            {submitted ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8 space-y-4 my-auto"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-slate-900">Application Submitted!</h4>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for applying. Our Delhi NCR account manager will contact you on <strong>{formData.phone || "WhatsApp"}</strong> with the latest dealer price list.
                </p>
                <button 
                  onClick={() => { setSubmitted(false); setStep(1); }}
                  className="mt-4 px-6 py-3 bg-slate-950 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md"
                >
                  Submit Another Application
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleNext} className="flex flex-col justify-between flex-1 min-h-[300px]">
                
                <AnimatePresence mode="wait">
                  
                  {/* STEP 1: Store Details */}
                  {step === 1 && (
                    <motion.div
                      key="section-step1"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div className="space-y-1 mb-2">
                        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1.5">
                          <Store className="w-4 h-4" /> Store Details
                        </span>
                        <h4 className="text-base font-extrabold text-slate-900">What is your store / business name?</h4>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Store / Business Name *</label>
                        <input 
                          required 
                          type="text" 
                          placeholder="e.g. Royal Pet Clinic" 
                          value={formData.storeName}
                          onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
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
                          <option value="Pet Pharmacy">Pet Pharmacy</option>
                          <option value="Grooming Salon">Grooming Salon</option>
                          <option value="Breeder / Kennel">Breeder / Kennel</option>
                          <option value="Distributor">Local Distributor</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: Contact Info */}
                  {step === 2 && (
                    <motion.div
                      key="section-step2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div className="space-y-1 mb-2">
                        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1.5">
                          <User className="w-4 h-4" /> Contact & Location
                        </span>
                        <h4 className="text-base font-extrabold text-slate-900">Your phone number & NCR city</h4>
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
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">NCR Region / Location *</label>
                        <select 
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-base sm:text-sm font-medium focus:outline-none focus:border-amber-500 min-h-[48px]"
                        >
                          <option value="Delhi">Delhi</option>
                          <option value="Gurugram">Gurugram</option>
                          <option value="Noida">Noida / Greater Noida</option>
                          <option value="Ghaziabad">Ghaziabad</option>
                          <option value="Faridabad">Faridabad</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: Email & Submit */}
                  {step === 3 && (
                    <motion.div
                      key="section-step3"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div className="space-y-1 mb-2">
                        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1.5">
                          <FileText className="w-4 h-4" /> Preferences & Submit
                        </span>
                        <h4 className="text-base font-extrabold text-slate-900">Final step to receive dealer pricing</h4>
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
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Additional Notes / Preferred Brands</label>
                        <textarea 
                          rows={2} 
                          placeholder="Royal Canin or Drools specific requirements..."
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-base sm:text-sm focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full py-4 bg-slate-950 hover:bg-slate-900 active:scale-[0.98] text-white font-black rounded-2xl flex items-center justify-center gap-2 text-base shadow-xl transition-all min-h-[52px]"
                  >
                    {step === 3 ? (
                      <>
                        <Send className="w-5 h-5 text-amber-400" />
                        <span>Submit Dealer Application</span>
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

        </div>

      </div>
    </section>
  );
}
