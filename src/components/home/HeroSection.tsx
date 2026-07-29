'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '@/store/useStore';
import { ArrowRight, FileText, Building2, MapPin } from 'lucide-react';

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

            {/* Headline (No wavy red/amber lines) */}
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
      {/* 2. MOBILE HERO LAYOUT (Stunning Left-Aligned Mobile Layout with Dalmatian) */}
      {/* ========================================================================= */}
      <div className="block lg:hidden relative w-full bg-white overflow-hidden min-h-[500px]">
        
        {/* Dalmatian Hero Dog Image on Mobile Right Background */}
        <div className="absolute right-[-10px] sm:right-0 bottom-0 z-0 w-[55%] sm:w-[45%] h-[90%] pointer-events-none">
          <Image
            src="/images/dalmatian_hero_mobile.png"
            alt="Pawnourish Dalmatian Mobile Hero Background"
            fill
            priority
            className="object-contain object-bottom object-right"
            sizes="(max-width: 1024px) 60vw, 40vw"
          />
        </div>

        {/* Left Gradient Overlay to keep text 100% readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent w-[80%] pointer-events-none z-1" />

        {/* Content Container (Left Aligned) */}
        <div className="relative z-10 px-6 py-12 sm:py-16 text-left max-w-sm">
          
          <div className="space-y-4">
            
            {/* Subheading: Pawnourish */}
            <div className="inline-block">
              <span className="text-[#005F56] font-black text-xl sm:text-2xl tracking-wider uppercase block">
                Pawnourish
              </span>
            </div>

            {/* Main Heading: Royal Canin & Drools Authorized Dealer */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-[1.2]">
              Royal Canin & Drools <span className="text-emerald-700 font-extrabold">Authorized Dealer</span>
            </h1>

            {/* Action Links (Normal Texts with Provided Bold Arrow Icon) */}
            <div className="pt-4 space-y-3.5">
              
              {/* Button 1: Become partner */}
              <div>
                <Link
                  href="/become-a-dealer"
                  className="inline-flex items-center gap-2 text-slate-950 font-extrabold text-lg sm:text-xl hover:text-emerald-700 transition-colors group"
                >
                  <span className="underline underline-offset-4 decoration-2 decoration-emerald-500">Become partner</span>
                  <div className="w-5 h-5 relative shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <Image
                      src="/images/bold_arrow_up_right.png"
                      alt="Arrow Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
              </div>

              {/* Button 2: Get Quote */}
              <div>
                <button
                  onClick={() => openDealerModal()}
                  className="inline-flex items-center gap-2 text-slate-950 font-extrabold text-lg sm:text-xl hover:text-emerald-700 transition-colors group"
                >
                  <span className="underline underline-offset-4 decoration-2 decoration-amber-500">Get Quote</span>
                  <div className="w-5 h-5 relative shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <Image
                      src="/images/bold_arrow_up_right.png"
                      alt="Arrow Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </button>
              </div>

            </div>

            {/* Supporting Line Below Buttons */}
            <div className="pt-6 border-t border-slate-200/60 max-w-[220px]">
              <p className="text-xs font-bold tracking-wider text-slate-400 uppercase leading-snug">
                Authorized B2B Supplier
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
