'use client';

import React, { useState } from 'react';
import { Building2, Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

export default function DealerEnquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    storeName: '',
    contactName: '',
    phone: '',
    email: '',
    businessType: 'Pet Store',
    location: 'Delhi',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="dealer-form" className="py-12 sm:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column Text & Contact */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-950 text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-700/50">
            <Building2 className="w-4 h-4" /> Become an Authorized Partner
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Apply for B2B Wholesale Dealership in Delhi NCR
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Fill out the enquiry form to receive our official Royal Canin and Drools wholesale price list, credit terms details, and dealer registration kit within 2 hours.
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

        {/* Right Form Card */}
        <div className="lg:col-span-6 bg-white text-slate-900 p-5 sm:p-10 rounded-2xl sm:rounded-3xl shadow-2xl space-y-4 sm:space-y-6 border border-slate-100">
          {submitted ? (
            <div className="text-center py-8 sm:py-12 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Retailer Inquiry Received!</h3>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Thank you for contacting Pawnourish. Our Delhi NCR account manager will contact you on <strong>{formData.phone}</strong> with the latest dealer price list.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-3 bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div className="text-left">
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">Dealer Registration & Rate Card Request</h3>
                <p className="text-xs text-slate-500">Quick 60-second form for pet businesses in NCR.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase text-slate-700 mb-1">Store / Business Name *</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="e.g. Royal Pet Clinic" 
                    value={formData.storeName}
                    onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-base sm:text-sm focus:outline-none focus:border-emerald-600 min-h-[46px]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase text-slate-700 mb-1">Contact Person Name *</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Owner / Manager Name" 
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
                  <label className="block text-[11px] sm:text-xs font-bold uppercase text-slate-700 mb-1">NCR Region / Location *</label>
                  <select 
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-base sm:text-sm font-medium focus:outline-none focus:border-emerald-600 min-h-[46px]"
                  >
                    <option value="Delhi">Delhi</option>
                    <option value="Gurugram">Gurugram</option>
                    <option value="Noida">Noida / Greater Noida</option>
                    <option value="Ghaziabad">Ghaziabad</option>
                    <option value="Faridabad">Faridabad</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase text-slate-700 mb-1">Business Type *</label>
                <select 
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-base sm:text-sm font-medium focus:outline-none focus:border-emerald-600 min-h-[46px]"
                >
                  <option value="Pet Store">Pet Retail Store</option>
                  <option value="Veterinary Clinic">Veterinary Clinic</option>
                  <option value="Pet Pharmacy">Pet Pharmacy</option>
                  <option value="Grooming Salon">Grooming Salon</option>
                  <option value="Breeder / Kennel">Breeder / Kennel</option>
                  <option value="Distributor">Local Distributor</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase text-slate-700 mb-1">Additional Notes / Preferred Brands</label>
                <textarea 
                  rows={2} 
                  placeholder="Royal Canin or Drools specific requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-base sm:text-sm focus:outline-none focus:border-emerald-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-emerald-700 hover:bg-emerald-800 active:scale-[0.99] text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 text-base shadow-xl transition-all min-h-[50px] mt-2"
              >
                <Send className="w-5 h-5" /> Submit Dealer Application
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
