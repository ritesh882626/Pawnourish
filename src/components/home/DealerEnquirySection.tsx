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
    <section id="dealer-form" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Glassmorphism Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-emerald-500/[0.08] rounded-full blur-[150px]" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-emerald-400/[0.05] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        
        {/* Left Column Text & Contact Info */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-950/80 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-700/50 backdrop-blur-md">
            <Building2 className="w-4 h-4 text-emerald-400" /> Become an Authorized Partner
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
            Apply for B2B Wholesale Dealership in Delhi NCR
          </h2>

          <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
            Fill out our quick 3-step enquiry wizard to receive official Royal Canin and Drools wholesale rate cards, credit terms, and dealer onboarding details within 2 hours.
          </p>

          <div className="space-y-4 pt-4 text-xs sm:text-sm text-emerald-100/80 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
              <span>Direct Wholesale Desk: +91 97116 33094 (Mon - Sat, 9 AM - 7 PM)</span>
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

        {/* Right Column: Emerald Green Glassmorphism Form Card */}
        <div className="lg:col-span-6 bg-emerald-950/90 backdrop-blur-2xl rounded-3xl p-1 shadow-2xl shadow-emerald-950/60 overflow-hidden border border-emerald-500/30">
          
          {/* Header Banner */}
          <div className="px-6 py-5 flex items-center justify-between text-white border-b border-emerald-800/40">
            <div className="flex items-center gap-3">
              {step > 1 && !submitted && (
                <button 
                  onClick={handleBack}
                  className="w-9 h-9 rounded-2xl bg-emerald-900/60 hover:bg-emerald-800/80 border border-emerald-500/30 flex items-center justify-center text-white transition-colors"
                  aria-label="Back"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block">
                  {!submitted ? `Step 0${step} of 03` : "Completed"}
                </span>
                <h3 className="text-lg font-black tracking-tight text-white">
                  Dealer Registration Rate Card
                </h3>
              </div>
            </div>
          </div>

          {/* Progress Line */}
          {!submitted && (
            <div className="w-full bg-emerald-950/60 h-1.5">
              <motion.div 
                className="bg-emerald-400 shadow-[0_0_12px_#34d399] h-full"
                initial={{ width: "33%" }}
                animate={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          {/* Glassmorphism Green Form Body with Spacing */}
          <div className="bg-emerald-950/70 backdrop-blur-xl p-6 sm:p-8 text-white min-h-[380px] flex flex-col justify-between space-y-6">
            {submitted ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8 space-y-4 my-auto"
              >
                <div className="w-16 h-16 bg-emerald-900/80 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400 shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white">Application Submitted!</h4>
                <p className="text-emerald-100 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for applying. Our Delhi NCR account manager will contact you on <strong>{formData.phone || "WhatsApp"}</strong> with the latest dealer price list.
                </p>
                <button 
                  onClick={() => { setSubmitted(false); setStep(1); }}
                  className="mt-4 px-8 py-3.5 bg-emerald-500 text-slate-950 font-black rounded-2xl text-xs sm:text-sm shadow-xl"
                >
                  Submit Another Application
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleNext} className="flex flex-col justify-between flex-1 min-h-[320px] space-y-6">
                
                <AnimatePresence mode="wait">
                  
                  {/* STEP 1: Store Details */}
                  {step === 1 && (
                    <motion.div
                      key="section-step1"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Store className="w-4 h-4" /> Store Details
                        </span>
                        <h4 className="text-base sm:text-lg font-extrabold text-white">What is your store / business name?</h4>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200">Store / Business Name *</label>
                        <input 
                          required 
                          type="text" 
                          placeholder="e.g. Royal Pet Clinic" 
                          value={formData.storeName}
                          onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                          className="w-full bg-emerald-900/60 backdrop-blur-md border border-emerald-500/30 p-4 rounded-2xl text-base sm:text-sm text-white placeholder-emerald-300/40 focus:outline-none focus:border-emerald-400 min-h-[52px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200">Business Type *</label>
                        <select 
                          value={formData.businessType}
                          onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                          className="w-full bg-emerald-900/60 backdrop-blur-md border border-emerald-500/30 p-4 rounded-2xl text-base sm:text-sm font-medium text-white focus:outline-none focus:border-emerald-400 min-h-[52px]"
                        >
                          <option value="Pet Store" className="bg-emerald-950 text-white">Pet Retail Store</option>
                          <option value="Veterinary Clinic" className="bg-emerald-950 text-white">Veterinary Clinic</option>
                          <option value="Pet Pharmacy" className="bg-emerald-950 text-white">Pet Pharmacy</option>
                          <option value="Grooming Salon" className="bg-emerald-950 text-white">Grooming Salon</option>
                          <option value="Breeder / Kennel" className="bg-emerald-950 text-white">Breeder / Kennel</option>
                          <option value="Distributor" className="bg-emerald-950 text-white">Local Distributor</option>
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
                      className="space-y-5"
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                          <User className="w-4 h-4" /> Contact & Location
                        </span>
                        <h4 className="text-base sm:text-lg font-extrabold text-white">Your phone number & NCR city</h4>
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
                          placeholder="+91 97116 XXXXX" 
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-emerald-900/60 backdrop-blur-md border border-emerald-500/30 p-4 rounded-2xl text-base sm:text-sm text-white placeholder-emerald-300/40 focus:outline-none focus:border-emerald-400 min-h-[52px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200">NCR Region / Location *</label>
                        <select 
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full bg-emerald-900/60 backdrop-blur-md border border-emerald-500/30 p-4 rounded-2xl text-base sm:text-sm font-medium text-white focus:outline-none focus:border-emerald-400 min-h-[52px]"
                        >
                          <option value="Delhi" className="bg-emerald-950 text-white">Delhi</option>
                          <option value="Gurugram" className="bg-emerald-950 text-white">Gurugram</option>
                          <option value="Noida" className="bg-emerald-950 text-white">Noida / Greater Noida</option>
                          <option value="Ghaziabad" className="bg-emerald-950 text-white">Ghaziabad</option>
                          <option value="Faridabad" className="bg-emerald-950 text-white">Faridabad</option>
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
                      className="space-y-5"
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                          <FileText className="w-4 h-4" /> Preferences & Submit
                        </span>
                        <h4 className="text-base sm:text-lg font-extrabold text-white">Final step to receive dealer pricing</h4>
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
                        <label className="block text-xs font-bold uppercase tracking-wider text-emerald-200">Additional Notes / Preferred Brands</label>
                        <textarea 
                          rows={2} 
                          placeholder="Royal Canin or Drools specific requirements..."
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full bg-emerald-900/60 backdrop-blur-md border border-emerald-500/30 p-4 rounded-2xl text-base sm:text-sm text-white placeholder-emerald-300/40 focus:outline-none focus:border-emerald-400"
                        />
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-slate-950 font-black rounded-2xl flex items-center justify-center gap-2 text-base shadow-xl shadow-emerald-500/30 transition-all min-h-[52px]"
                  >
                    {step === 3 ? (
                      <>
                        <Send className="w-5 h-5 text-slate-950" />
                        <span>Submit Dealer Application</span>
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

        </div>

      </div>
    </section>
  );
}
