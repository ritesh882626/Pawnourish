'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '@/store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MessageCircle, 
  FileText, 
  ChevronDown, 
  ShieldCheck, 
  Truck, 
  Building2 
} from 'lucide-react';

export default function Footer() {
  const { openDealerModal } = useStore();

  // Mobile accordion state
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* ========================================================= */}
        {/* 1. TOP BRAND AREA */}
        {/* ========================================================= */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
              <Image
                src="/images/pawnourish_logo.png"
                alt="Pawnourish Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-2xl tracking-tight text-white lowercase leading-none">
                pawnourish
              </span>
              <span className="text-[11px] font-bold tracking-widest text-amber-400 uppercase mt-0.5">
                All Things Pets
              </span>
            </div>
          </Link>

          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            Trusted Pet Food Wholesale Distribution across Delhi NCR.
          </p>
        </div>


        {/* ========================================================= */}
        {/* 2. PRIMARY FOOTER NAVIGATION (DESKTOP & TABLET ROW) */}
        {/* ========================================================= */}
        <div className="hidden md:flex items-center justify-center gap-8 text-sm font-bold border-y border-slate-800/80 py-6 text-slate-300">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span className="text-slate-700">•</span>
          <Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link>
          <span className="text-slate-700">•</span>
          <Link href="/brands" className="hover:text-amber-400 transition-colors">Brands</Link>
          <span className="text-slate-700">•</span>
          <Link href="/products" className="hover:text-amber-400 transition-colors">Products</Link>
          <span className="text-slate-700">•</span>
          <Link href="/become-a-dealer" className="hover:text-amber-400 transition-colors">Become a Dealer</Link>
          <span className="text-slate-700">•</span>
          <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link>
        </div>


        {/* ========================================================= */}
        {/* 3. DESKTOP GRID: PRODUCTS, BRANDS, CONTACT */}
        {/* ========================================================= */}
        <div className="hidden md:grid grid-cols-3 gap-12 text-sm text-left max-w-4xl mx-auto pt-4">
          
          {/* Products Column */}
          <div className="space-y-3">
            <h5 className="font-extrabold text-white text-xs uppercase tracking-wider text-emerald-400">Products</h5>
            <div className="space-y-3 text-xs text-slate-400 font-medium">
              <div>
                <strong className="text-slate-200 block mb-1">Dog Food</strong>
                <ul className="space-y-1 pl-2 border-l border-slate-800">
                  <li><Link href="/products/dog-food" className="hover:text-white transition-colors">Dry Food (Kibble)</Link></li>
                  <li><Link href="/products/dog-food" className="hover:text-white transition-colors">Wet Food (Gravy & Chunks)</Link></li>
                </ul>
              </div>

              <div>
                <strong className="text-slate-200 block mb-1">Cat Food</strong>
                <ul className="space-y-1 pl-2 border-l border-slate-800">
                  <li><Link href="/products/cat-food" className="hover:text-white transition-colors">Dry Food (Kibble)</Link></li>
                  <li><Link href="/products/cat-food" className="hover:text-white transition-colors">Wet Food (Mousse & Pouches)</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Brands Column */}
          <div className="space-y-3">
            <h5 className="font-extrabold text-white text-xs uppercase tracking-wider text-emerald-400">Brands</h5>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><Link href="/brands#royal-canin" className="hover:text-white transition-colors">Royal Canin (25 SKUs)</Link></li>
              <li><Link href="/brands#drools" className="hover:text-white transition-colors">Drools (36 SKUs)</Link></li>
            </ul>
          </div>

          {/* Contact & Support Column */}
          <div className="space-y-3">
            <h5 className="font-extrabold text-white text-xs uppercase tracking-wider text-emerald-400">Direct Contact</h5>
            <div className="space-y-2 text-xs text-slate-400 font-medium">
              <a 
                href="tel:+919711633094" 
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 97116 33094</span>
              </a>

              <a 
                href="https://wa.me/919711633094" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp Sales Desk</span>
              </a>

              <div className="text-[11px] text-slate-500 pt-1">
                Regional Hub: Delhi NCR, India
              </div>
            </div>
          </div>

        </div>


        {/* ========================================================= */}
        {/* 4. MOBILE EXPANDABLE ACCORDION FOOTER (< md) */}
        {/* ========================================================= */}
        <div className="md:hidden space-y-4 text-left border-y border-slate-800 py-6">
          
          {/* Products Accordion */}
          <div className="border-b border-slate-800/60 pb-3">
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="w-full flex items-center justify-between font-bold text-white text-base py-1"
            >
              <span>Products</span>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180 text-amber-400' : ''}`} />
            </button>

            <AnimatePresence>
              {mobileProductsOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-3 pt-2 space-y-3 text-xs text-slate-400 overflow-hidden"
                >
                  <div>
                    <strong className="text-emerald-400 block mb-1">Dog Food</strong>
                    <div className="pl-2 space-y-1">
                      <Link href="/products/dog-food" className="block hover:text-white py-0.5">Dry Food (Kibble)</Link>
                      <Link href="/products/dog-food" className="block hover:text-white py-0.5">Wet Food (Gravy)</Link>
                    </div>
                  </div>
                  <div>
                    <strong className="text-amber-400 block mb-1">Cat Food</strong>
                    <div className="pl-2 space-y-1">
                      <Link href="/products/cat-food" className="block hover:text-white py-0.5">Dry Food (Kibble)</Link>
                      <Link href="/products/cat-food" className="block hover:text-white py-0.5">Wet Food (Mousse)</Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Brands Accordion */}
          <div className="border-b border-slate-800/60 pb-3">
            <button
              onClick={() => setMobileBrandsOpen(!mobileBrandsOpen)}
              className="w-full flex items-center justify-between font-bold text-white text-base py-1"
            >
              <span>Brands</span>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${mobileBrandsOpen ? 'rotate-180 text-amber-400' : ''}`} />
            </button>

            <AnimatePresence>
              {mobileBrandsOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-3 pt-2 space-y-2 text-xs text-slate-400 overflow-hidden"
                >
                  <Link href="/brands#royal-canin" className="block hover:text-white py-0.5">Royal Canin</Link>
                  <Link href="/brands#drools" className="block hover:text-white py-0.5">Drools</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Company Accordion */}
          <div>
            <button
              onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              className="w-full flex items-center justify-between font-bold text-white text-base py-1"
            >
              <span>Company</span>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${mobileCompanyOpen ? 'rotate-180 text-amber-400' : ''}`} />
            </button>

            <AnimatePresence>
              {mobileCompanyOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-3 pt-2 space-y-2 text-xs text-slate-400 overflow-hidden"
                >
                  <Link href="/" className="block hover:text-white py-0.5">Home</Link>
                  <Link href="/about" className="block hover:text-white py-0.5">About Us</Link>
                  <Link href="/become-a-dealer" className="block hover:text-white py-0.5">Become a Dealer</Link>
                  <Link href="/contact" className="block hover:text-white py-0.5">Contact Us</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>


        {/* ========================================================= */}
        {/* 5. B2B CONVERSION CTA BLOCK */}
        {/* ========================================================= */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-4 max-w-2xl mx-auto shadow-xl">
          <div className="space-y-1">
            <h4 className="text-xl sm:text-2xl font-black text-white">Looking for Wholesale Pet Food?</h4>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Get wholesale pricing and product availability for your business across Delhi NCR.
            </p>
          </div>

          <div>
            <button
              onClick={() => openDealerModal()}
              className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-2xl text-xs sm:text-sm shadow-xl inline-flex items-center gap-2 transition-all hover:scale-105 uppercase tracking-wider"
            >
              <FileText className="w-4 h-4 text-slate-950" />
              <span>REQUEST PRICE</span>
            </button>
          </div>
        </div>


        {/* ========================================================= */}
        {/* 6. LEGAL NAVIGATION & COPYRIGHT */}
        {/* ========================================================= */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          
          <div className="flex flex-wrap justify-center gap-6 font-medium">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <span className="text-slate-800 hidden md:inline">|</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms & Conditions</Link>
            <span className="text-slate-800 hidden md:inline">|</span>
            <Link href="/terms#shipping" className="hover:text-slate-300 transition-colors">Shipping Policy</Link>
            <span className="text-slate-800 hidden md:inline">|</span>
            <Link href="/terms#disclaimer" className="hover:text-slate-300 transition-colors">Disclaimer</Link>
          </div>

          <div className="text-slate-500 font-medium">
            © 2026 Pawnourish. All rights reserved.
          </div>

        </div>

      </div>

    </footer>
  );
}
