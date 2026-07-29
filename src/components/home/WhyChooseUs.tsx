'use client';

import React from 'react';
import { ShieldCheck, Truck, Percent, Award, Clock, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: ShieldCheck,
      title: '100% Genuine Guaranteed',
      description: 'Sourced directly from Royal Canin & Drools authorized manufacturer facilities with full batch GST invoicing.',
    },
    {
      icon: Truck,
      title: '24-Hour Dispatch Fleet',
      description: 'Dedicated warehouse inventory in Delhi NCR ensuring same-day or 24-hour store delivery.',
    },
    {
      icon: Percent,
      title: 'Maximum Retailer Margins',
      description: 'Competitive wholesale slab discounts designed to maximize profit margins for pet shop owners.',
    },
    {
      icon: Award,
      title: 'Prescription Diets in Stock',
      description: 'Ready inventory of specialized veterinary clinical diets (Gastrointestinal, Renal, Hypoallergenic).',
    },
    {
      icon: Clock,
      title: 'Fresh Manufacturing Dates',
      description: 'High stock turnover guarantees long remaining shelf life on all kibble and wet food products.',
    },
    {
      icon: HeartHandshake,
      title: 'Flexible Retailer Credit',
      description: 'Custom payment credit cycles and Net payment terms available for verified registered dealer accounts.',
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Wholesale Advantage</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why 500+ Pet Retailers Partner With Pawnourish</h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Built from the ground up to solve supply chain delays, stockouts, and margin compression in Delhi NCR.
          </p>
        </div>

        {/* Advantage Cards Grid (2 Cards per row on Mobile, 3 on Tablet, 6 on Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
          {advantages.map((adv, idx) => {
            const IconComp = adv.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-800/80 p-4 sm:p-6 rounded-2xl border border-slate-700/80 flex flex-col justify-between space-y-3 hover:border-emerald-500 transition-all group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all shrink-0">
                  <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-bold text-white text-xs sm:text-base leading-tight">
                    {adv.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-normal">
                    {adv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
