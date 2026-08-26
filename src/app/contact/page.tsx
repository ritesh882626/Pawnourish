'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { NCR_LOCATIONS } from '@/data/mockData';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-6 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Direct Wholesale Desk</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">Contact Pawnourish Sales Team</h1>
        <p className="text-slate-600 text-base">
          Our wholesale team is available Monday through Saturday to assist pet retailers, veterinary clinics, and distributors across Delhi NCR.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Left Contact Information Box */}
        <div className="md:col-span-5 bg-slate-900 text-white p-8 sm:p-10 rounded-3xl space-y-8 shadow-xl">
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold">NCR Sales Headquarters</h3>
            <p className="text-xs text-slate-400">Official distributor for Royal Canin & Drools.</p>
          </div>

          <div className="space-y-5 text-sm">
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-emerald-950 text-emerald-400 rounded-xl">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-semibold">Wholesale Phone Line</span>
                <a href="tel:+919711633094" className="font-bold text-white hover:text-emerald-400 text-base">
                  +91 97116 33094
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-emerald-950 text-emerald-400 rounded-xl">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-semibold">WhatsApp Instant Inquiry</span>
                <a 
                  href="https://wa.me/919711633094" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold text-[#25D366] hover:underline text-base"
                >
                  +91 97116 33094
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-emerald-950 text-emerald-400 rounded-xl">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-semibold">Email Sales Desk</span>
                <a href="mailto:enquiry@pawnaurish.in" className="font-bold text-white hover:text-emerald-400 text-base transition-colors">
                  enquiry@pawnaurish.in
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-emerald-950 text-emerald-400 rounded-xl">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-semibold">Regional Warehouse & Distribution</span>
                <span className="font-bold text-white">Delhi NCR Wholesale Hub, India</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-xs space-y-2">
            <div className="font-bold text-emerald-400">Delhi NCR Express Delivery Zones:</div>
            <p className="text-slate-400 leading-relaxed">
              Delhi (South, North, West, East, Central), Gurugram, Noida, Greater Noida, Ghaziabad, Faridabad.
            </p>
          </div>
        </div>

        {/* Right Contact Lead Form */}
        <div className="md:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
          {submitted ? (
            <div className="text-center py-16 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
              <h3 className="text-2xl font-bold text-slate-900">Message Delivered!</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you for contacting Pawnourish. Our Delhi NCR account manager will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">Send Direct Message to Sales</h3>
                <p className="text-xs text-slate-500">We will respond with price list and stock details.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Your Name *</label>
                  <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Phone Number (WhatsApp) *</label>
                  <input required type="tel" placeholder="+91 97116 XXXXX" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Store / Business Name *</label>
                <input required type="text" placeholder="Pet Store / Clinic Name" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Message / Requirements</label>
                <textarea required rows={4} placeholder="Mention required Royal Canin or Drools SKUs..." className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm" />
              </div>

              <button type="submit" className="w-full py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-2xl flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Submit Sales Enquiry
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
