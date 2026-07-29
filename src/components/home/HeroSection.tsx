'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '@/store/useStore';
import { ArrowRight, FileText, Building2, MapPin } from 'lucide-react';

export default function HeroSection() {
  const { openDealerModal } = useStore();

  return (
    <section className="relative w-full bg-white text-slate-900 overflow-hidden min-h-[420px] sm:min-h-[560px] lg:min-h-[620px] flex items-center border-b border-slate-100">
      
      {/* 1. Desktop Background Image (Hidden on mobile per user request) */}
      <div className="hidden sm:block absolute inset-0 z-0">
        <Image
          src="/images/landscape_hero_section_image.png"
          alt="Pawnourish B2B Wholesale Hero Background Desktop"
          fill
          priority
          className="object-cover object-bottom"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent w-full lg:w-3/4 pointer-events-none" />
      </div>

      {/* 2. Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-10 sm:py-16 lg:py-20 w-full">
        <div className="max-w-2xl space-y-5 sm:space-y-6 text-center lg:text-left">
          
          {/* Service Area Pill (Hidden on mobile) */}
          <div className="hidden sm:inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full text-xs font-bold text-emerald-800 mx-auto lg:mx-0 shadow-xs">
            <MapPin className="w-4 h-4 text-emerald-700" />
            <span>Official B2B Wholesale Supplier • Delhi NCR Region</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.2] text-slate-900">
            Authorized Wholesale Distributor of{' '}
            <span className="text-emerald-700 underline decoration-amber-500/60 decoration-wavy decoration-2">
              Royal Canin & Drools
            </span>
          </h1>

          {/* Subheadline (Readjusted for mobile spacing & legibility) */}
          <p className="text-sm sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Empowering 500+ Pet Stores, Veterinary Clinics, and Retailers across Delhi, Gurugram, Noida & NCR with guaranteed authentic stock, competitive wholesale pricing, and 24-hour dispatch.
          </p>

          {/* Call to Action Buttons (Single Horizontal Row on Mobile) */}
          <div className="flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 pt-2">
            <Link
              href="/become-a-dealer"
              className="flex-1 sm:flex-none px-4 sm:px-8 py-3.5 sm:py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold sm:font-extrabold rounded-xl sm:rounded-2xl flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg text-xs sm:text-base transition-all group whitespace-nowrap"
            >
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" /> 
              <span>Become a Dealer</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform shrink-0 hidden sm:inline-block" />
            </Link>

            <button
              onClick={() => openDealerModal()}
              className="flex-1 sm:flex-none px-4 sm:px-8 py-3.5 sm:py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl sm:rounded-2xl border border-slate-300 shadow-md transition-all text-xs sm:text-base flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap"
            >
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0" /> 
              <span>Rate Card</span>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
