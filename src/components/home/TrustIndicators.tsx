'use client';

import React from 'react';
import { Users, ShieldCheck, Truck, TrendingUp } from 'lucide-react';

export default function TrustIndicators() {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Active Retailers & Vets in NCR',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Authentic Manufacturer Stock',
    },
    {
      icon: Truck,
      value: '24-Hour',
      label: 'NCR Dispatch Guarantee',
    },
    {
      icon: TrendingUp,
      value: 'Max',
      label: 'Retailer Profit Margins',
    },
  ];

  return (
    <section className="bg-emerald-900 text-white py-6 sm:py-10 border-b border-emerald-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        
        {/* Single Horizontal Row across all viewports (4 columns on sm, 3/4 columns on mobile) */}
        <div className="grid grid-cols-4 gap-2 sm:gap-6 text-center divide-x divide-emerald-800/60">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center justify-center px-1 sm:px-4 space-y-1">
                <IconComponent className="w-4 h-4 sm:w-8 sm:h-8 text-emerald-400 shrink-0" />
                <div className="text-base sm:text-3xl font-extrabold tracking-tight text-white leading-none">
                  {stat.value}
                </div>
                <div className="text-[9px] sm:text-xs font-semibold text-emerald-200 uppercase tracking-tight sm:tracking-wider leading-tight">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
