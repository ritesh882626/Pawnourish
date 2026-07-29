'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '@/store/useStore';
import { ArrowRight, FileText, Building2, MapPin } from 'lucide-react';

export default function HeroSection() {
  const { openDealerModal } = useStore();

  return (
    <section className="relative w-full bg-white text-slate-900 overflow-hidden border-b border-slate-100 min-h-[75vh]">
      
      {/* ========================================================================= */}
      {/* 1. DESKTOP HERO LAYOUT (75vh height, desktop background image enlarged +30%) */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex relative w-full min-h-[75vh] items-center">
        
        {/* Desktop Product Bags Image Container (Enlarged by +30%: max-w-[1360px] h-[85vh]) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="max-w-[1536px] mx-auto px-6 h-full relative">
            <div className="absolute left-[440px] xl:left-[480px] right-0 top-[2%] bottom-0 flex items-start justify-end pr-2">
              <div className="relative w-full h-[85vh] max-w-[1360px]">
                <Image
                  src="/images/landscape_hero_section_image.png"
                  alt="Pawnourish B2B Wholesale Hero Background Desktop"
                  fill
                  priority
                  className="object-contain object-right-top"
                  sizes="1360px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Hero Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 w-full">
          <div className="max-w-xl space-y-6 text-left">
            
            {/* Service Area Pill */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full text-xs font-bold text-emerald-800 shadow-xs">
              <MapPin className="w-4 h-4 text-emerald-700" />
              <span>Official B2B Wholesale Supplier • Delhi NCR Region</span>
            </div>

            {/* Headline */}
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
      {/* 2. MOBILE HERO LAYOUT (using new Royal Canin + Drools vertical hero image) */}
      {/* ========================================================================= */}
      <div className="block lg:hidden relative w-full bg-white overflow-hidden min-h-[90vh] flex items-center justify-center">
        
        {/* Centered Vertical Hero Image */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="relative w-full h-[90vh] max-w-md mx-auto">
            <Image
              src="/images/dalmatian_hero_mobile.png"
              alt="Pawnourish Royal Canin & Drools Mobile Hero Background"
              fill
              priority
              className="object-contain object-bottom scale-100"
              sizes="100vw"
            />
          </div>
        </div>

        {/* 0.5% Minimal Blur Layer for Pristine Text Readability */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[0.5px] pointer-events-none z-1" />

        {/* Content Container (Left Aligned over 0.5% Blur Layer) */}
        <div className="relative z-10 px-5 sm:px-6 py-10 text-left max-w-sm w-full my-auto">
          
          <div className="space-y-3">
            
            {/* 1. Subheading: Pawnourish */}
            <div className="inline-block">
              <span className="text-[#005F56] font-black text-lg sm:text-xl tracking-wider uppercase block">
                Pawnourish
              </span>
            </div>

            {/* 2. Main Heading: Royal Canin & Drools Authorized Dealer */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-[1.2]">
              Royal Canin & Drools <span className="text-emerald-700 font-extrabold">Authorized Dealer</span>
            </h1>

            {/* 3. Supporting Line (Positioned EXACTLY below main heading) */}
            <div className="pt-0.5">
              <p className="text-xs sm:text-sm font-extrabold tracking-wider text-slate-600 uppercase">
                Authorized B2B Supplier
              </p>
            </div>

            {/* 4. Action Buttons (No Icons, sized neatly to fit heading width) */}
            <div className="flex flex-row items-center gap-2 pt-2.5 max-w-full">
              
              {/* Button 1: Become partner */}
              <Link
                href="/become-a-dealer"
                className="px-3.5 py-2.5 bg-[#005F56] hover:bg-[#004D46] active:scale-[0.98] text-white font-extrabold rounded-lg sm:rounded-xl text-xs shadow-md transition-all whitespace-nowrap text-center"
              >
                Become partner
              </Link>

              {/* Button 2: Get Quote */}
              <button
                onClick={() => openDealerModal()}
                className="px-3.5 py-2.5 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-950 font-extrabold rounded-lg sm:rounded-xl border border-slate-300 shadow-xs transition-all text-xs whitespace-nowrap text-center"
              >
                Get Quote
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
