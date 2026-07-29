'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '@/store/useStore';
import { ArrowRight, FileText, Building2, MapPin, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  const { openDealerModal } = useStore();

  return (
    <section className="relative w-full bg-white text-slate-900 overflow-hidden border-b border-slate-100">
      
      {/* ========================================================================= */}
      {/* 1. DESKTOP HERO LAYOUT (hidden on mobile, visible on lg screens)           */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex relative w-full min-h-[620px] items-center">
        
        {/* Desktop Background Image (Brought down by 30px on desktop per user request) */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full translate-y-[30px]">
            <Image
              src="/images/landscape_hero_section_image.png"
              alt="Pawnourish B2B Wholesale Hero Background Desktop"
              fill
              priority
              className="object-cover object-bottom"
              sizes="100vw"
            />
          </div>
          {/* Gradient Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent w-3/4 pointer-events-none z-1" />
        </div>

        {/* Desktop Hero Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-2xl space-y-6 text-left">
            
            {/* Service Area Pill */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full text-xs font-bold text-emerald-800 shadow-xs">
              <MapPin className="w-4 h-4 text-emerald-700" />
              <span>Official B2B Wholesale Supplier • Delhi NCR Region</span>
            </div>

            {/* Headline (Removed red wavy underlines per user request) */}
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.18] text-slate-900">
              Authorized Wholesale Distributor of{' '}
              <span className="text-emerald-700 font-extrabold">
                Royal Canin & Drools
              </span>
            </h1>

            {/* Shortened Direct Subheading */}
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
              Official wholesale supplier of 100% genuine Royal Canin & Drools in Delhi NCR. Guaranteed factory stock with 24-hour dispatch.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-row items-center gap-4 pt-2">
              <Link
                href="/become-a-dealer"
                className="px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 shadow-lg text-base transition-all group whitespace-nowrap"
              >
                <Building2 className="w-5 h-5 shrink-0" /> 
                <span>Become a Dealer</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>

              <button
                onClick={() => openDealerModal()}
                className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-2xl border border-slate-300 shadow-md transition-all text-base flex items-center gap-2 whitespace-nowrap"
              >
                <FileText className="w-5 h-5 text-amber-600 shrink-0" /> 
                <span>Rate Card</span>
              </button>
            </div>

          </div>
        </div>

      </div>


      {/* ========================================================================= */}
      {/* 2. MOBILE HERO LAYOUT (Matching 2nd Reference UI Image Exactly)           */}
      {/* ========================================================================= */}
      <div className="block lg:hidden bg-white px-6 py-10 sm:py-14 text-center">
        <div className="max-w-sm mx-auto space-y-6">
          
          {/* Centered Dog Hero Portrait (Matching Dalmatian Dog Reference Image) */}
          <div className="relative w-[220px] sm:w-[260px] h-[220px] sm:h-[260px] mx-auto filter drop-shadow-md">
            <Image
              src="/images/dog_avatar.jpg"
              alt="Pawnourish Hero Dog"
              fill
              priority
              className="object-contain rounded-3xl"
              sizes="260px"
            />
          </div>

          {/* Clean Brand Title (Matching Petsbay Typography Style in 2nd Reference) */}
          <div className="space-y-1.5 pt-2">
            <h1 className="text-4xl font-black text-slate-950 tracking-tight leading-none">
              pawnourish<span className="text-emerald-600">.</span>
            </h1>
            
            {/* Short Direct Subheading */}
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xs mx-auto leading-relaxed pt-1">
              Official wholesale supplier of 100% genuine Royal Canin & Drools in Delhi NCR.
            </p>
          </div>

          {/* Stacked Clean Action Buttons (Matching Reference UI Pills) */}
          <div className="space-y-3 pt-2">
            <Link
              href="/become-a-dealer"
              className="w-full py-4 bg-[#005F56] hover:bg-[#004D46] active:scale-[0.98] text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 text-base shadow-lg shadow-emerald-900/20 transition-all min-h-[52px]"
            >
              <Building2 className="w-5 h-5" />
              <span>Become an Authorized Dealer</span>
            </Link>

            <button
              onClick={() => openDealerModal()}
              className="w-full py-4 bg-slate-100 hover:bg-slate-200 active:scale-[0.98] text-slate-900 font-extrabold rounded-2xl flex items-center justify-center gap-1.5 text-base border border-slate-200/80 shadow-xs transition-all min-h-[52px]"
            >
              <span>Request Price List</span>
              <ArrowUpRight className="w-5 h-5 text-amber-600 stroke-[2.5]" />
            </button>
          </div>

          {/* Footer Subtext */}
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pt-2">
            Delhi NCR B2B Wholesale Partner • Direct Factory Dispatch
          </p>

        </div>
      </div>

    </section>
  );
}
