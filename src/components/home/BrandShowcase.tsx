'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '@/store/useStore';
import { CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export default function BrandShowcase() {
  const { openDealerModal } = useStore();

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Official Wholesale Lines</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Our Premium Brand Portfolio</h2>
        <p className="text-slate-600 text-base">
          We distribute complete product ranges for Royal Canin and Drools across Delhi, Gurugram, Noida, Ghaziabad, and Faridabad.
        </p>
      </div>

      {/* Side by Side Brand Cards Grid on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Brand Card 1: Royal Canin */}
        <div className="bg-white rounded-3xl border-2 border-red-100 shadow-xl overflow-hidden flex flex-col justify-between hover:border-red-400 transition-all duration-300">
          
          <div className="p-6 sm:p-8 grid grid-cols-12 gap-6 items-center">
            
            {/* Left Side: Content */}
            <div className="col-span-12 sm:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <div className="bg-red-600 text-white font-black text-lg tracking-tight px-3.5 py-1 rounded-xl shadow-sm">
                  ROYAL CANIN
                </div>
                <span className="bg-red-50 text-red-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-red-200">
                  Authorized Supplier
                </span>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Precision health nutrition formulated for specific sizes, breeds, ages, and medical conditions. High consumer demand across pet parents.
              </p>

              <div className="space-y-1.5 text-xs text-slate-800 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" /> Size Health Nutrition
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" /> Breed Health Nutrition
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" /> Prescription Diets
                </div>
              </div>
            </div>

            {/* Right Side: Royal Canin Packaging Image */}
            <div className="col-span-12 sm:col-span-5 flex items-center justify-center relative aspect-[3/4] h-[275px] max-h-[275px] w-full mx-auto">
              <Image
                src="/images/royal_canin_packaging.png"
                alt="Royal Canin Packaging"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 300px"
              />
            </div>

          </div>

          {/* Card Footer Actions */}
          <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-row gap-3">
            <Link
              href="/brands#royal-canin"
              className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs text-center flex items-center justify-center gap-1.5 shadow-sm transition-all"
            >
              <span>Explore Range</span> <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => openDealerModal()}
              className="flex-1 px-4 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-xl border border-slate-300 text-xs flex items-center justify-center gap-1.5 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-amber-600" /> Rate Card
            </button>
          </div>

        </div>


        {/* Brand Card 2: Drools */}
        <div className="bg-white rounded-3xl border-2 border-amber-100 shadow-xl overflow-hidden flex flex-col justify-between hover:border-amber-400 transition-all duration-300">
          
          <div className="p-6 sm:p-8 grid grid-cols-12 gap-6 items-center">
            
            {/* Left Side: Content */}
            <div className="col-span-12 sm:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <div className="bg-amber-600 text-white font-black text-xl tracking-tight px-3.5 py-1 rounded-xl shadow-sm">
                  Drools
                </div>
                <span className="bg-amber-50 text-amber-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-amber-200">
                  Authorized Supplier
                </span>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                India's leading pet food brand offering real chicken and egg formulations. High profit margins for pet store retailers.
              </p>

              <div className="space-y-1.5 text-xs text-slate-800 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Drools Focus Series
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" /> VetPro Clinical Range
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Real Chicken & Rice
                </div>
              </div>
            </div>

            {/* Right Side: Drools Packaging Image */}
            <div className="col-span-12 sm:col-span-5 flex items-center justify-center relative aspect-[3/4] h-[275px] max-h-[275px] w-full mx-auto">
              <Image
                src="/images/drools_packaging.png"
                alt="Drools Packaging"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 300px"
              />
            </div>

          </div>

          {/* Card Footer Actions */}
          <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-row gap-3">
            <Link
              href="/brands#drools"
              className="flex-1 px-4 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs text-center flex items-center justify-center gap-1.5 shadow-sm transition-all"
            >
              <span>Explore Range</span> <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => openDealerModal()}
              className="flex-1 px-4 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-xl border border-slate-300 text-xs flex items-center justify-center gap-1.5 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-amber-600" /> Rate Card
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
