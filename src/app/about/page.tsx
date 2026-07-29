import React from 'react';
import { ShieldCheck, Truck, Building2, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="py-12 max-w-5xl mx-auto px-6 space-y-12">
      
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Delhi NCR Wholesale Distribution</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">About Pawnourish</h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Empowering independent pet retailers, veterinary clinics, and pet professionals with authentic Royal Canin and Drools products.
        </p>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-6 text-slate-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-slate-900">Our Mission in Delhi NCR</h2>
        <p>
          Pawnourish was established to bridge the gap between global pet food manufacturers and independent pet retailers in the Delhi National Capital Region. We recognized that small-to-medium pet stores and veterinary clinics often faced supply chain delays, stockouts of critical prescription diets, and unpredictable wholesale pricing.
        </p>
        <p>
          Today, Pawnourish serves as a premier wholesale distribution partner for <strong>Royal Canin</strong> and <strong>Drools</strong>, operating dedicated warehouse facilities that ensure same-day or 24-hour dispatch across Delhi, Gurugram, Noida, Ghaziabad, and Faridabad.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="text-3xl font-extrabold text-emerald-700">500+</div>
          <div className="text-xs font-bold uppercase text-slate-500">Retail Partners</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="text-3xl font-extrabold text-emerald-700">100%</div>
          <div className="text-xs font-bold uppercase text-slate-500">Genuine Guarantee</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="text-3xl font-extrabold text-emerald-700">24-Hour</div>
          <div className="text-xs font-bold uppercase text-slate-500">NCR Delivery</div>
        </div>
      </div>

      <div className="text-center pt-4">
        <Link 
          href="/become-a-dealer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-2xl shadow-lg transition-all"
        >
          Become a Registered Retail Partner
        </Link>
      </div>

    </div>
  );
}
