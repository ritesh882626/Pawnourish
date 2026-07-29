'use client';

import React from 'react';
import { Users, ShieldCheck, Truck, TrendingUp } from 'lucide-react';

export default function TrustIndicators() {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'NCR Retailers & Vets',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Authentic Stock',
    },
    {
      icon: Truck,
      value: '24-Hour',
      label: 'NCR Dispatch',
    },
    {
      icon: TrendingUp,
      value: 'Max',
      label: 'Retailer Margins',
    },
  ];

  return (
    <section className="relative bg-emerald-950 text-white py-2.5 sm:py-3.5 border-b border-emerald-900 shadow-inner">
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        
        {/* Thin Informative Strip across all screen sizes */}
        <div className="grid grid-cols-4 gap-1 sm:gap-4 text-center divide-x divide-emerald-800/50">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-1 sm:px-3">
                <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-1 text-left sm:text-center">
                  <span className="font-extrabold text-xs sm:text-sm text-emerald-300 leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-[9px] sm:text-xs text-slate-300 font-medium leading-tight">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
