'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useStore } from '@/store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Menu, X, FileText, Building2, ChevronRight, Home, Info, Award, ShoppingBag, Mail } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openDealerModal } = useStore();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Brands', href: '/brands' },
    { name: 'Product Catalogue', href: '/catalogue' },
    { name: 'Become a Dealer', href: '/become-a-dealer' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50">
      
      {/* Sticky Header Bar in Emerald (#005F56) */}
      <nav className="bg-[#005F56] text-white border-b border-emerald-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-extrabold text-2xl shadow-lg group-hover:scale-105 transition-transform">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white leading-tight">
                Pawnourish
              </span>
              <span className="text-[10px] font-bold tracking-wider text-emerald-200 uppercase">
                B2B Pet Wholesale • Delhi NCR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors duration-150 py-1 ${
                    isActive 
                      ? 'text-amber-400 font-bold border-b-2 border-amber-400' 
                      : 'text-emerald-100 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Header Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="https://wa.me/919810098100" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white transition-colors flex items-center justify-center"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#005F56]" />
            </a>

            <button
              onClick={() => openDealerModal()}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl shadow-lg text-xs sm:text-sm flex items-center gap-2 transition-all hover:scale-105"
            >
              <FileText className="w-4 h-4" /> Request Price List
            </button>
          </div>

          {/* Mobile Off-Canvas Menu Toggle (Minimalist 2-line = icon) */}
          <div className="lg:hidden flex items-center gap-2.5">
            <button
              onClick={() => openDealerModal()}
              className="px-3.5 py-2 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs shadow-md active:scale-95"
            >
              Price List
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-10 h-10 rounded-xl bg-slate-900/40 hover:bg-slate-900/60 text-white flex items-center justify-center focus:outline-none border border-emerald-400/20"
              aria-label="Toggle menu"
            >
              {/* Minimalist 2-line = Icon matching Reference Image */}
              <div className="space-y-1.5 w-5">
                <span className="block w-full h-0.5 bg-white rounded-full" />
                <span className="block w-full h-0.5 bg-white rounded-full" />
              </div>
            </button>
          </div>

        </div>
      </nav>

      {/* Off-Canvas Side Drawer Navigation (Matching Reference UI Image Exactly) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] flex">
            
            {/* Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Sliding White Side Panel */}
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-[82%] sm:w-[380px] h-full bg-[#FAFAFA] text-slate-900 z-[110] shadow-[25px_0_60px_rgba(0,0,0,0.2)] flex flex-col justify-between p-8 sm:p-10 overflow-y-auto"
            >

              {/* Top Left Stacked Brand Logo & Close Button */}
              <div className="flex items-start justify-between">
                <div className="flex flex-col tracking-tighter leading-none font-black text-2xl text-slate-900">
                  <span>PAWN</span>
                  <span>OUR</span>
                  <span>ISH<sup>®</sup></span>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Typography Links Stack (Matching Reference Image) */}
              <div className="py-10 space-y-4 sm:space-y-5 my-auto">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors ${
                          isActive 
                            ? 'text-emerald-700 font-black' 
                            : 'text-slate-800 hover:text-emerald-600'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Secondary Links & Bottom Sales Representative Badge */}
              <div className="space-y-6 pt-6 border-t border-slate-200">
                
                <div className="space-y-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <button 
                    onClick={() => { setMobileMenuOpen(false); openDealerModal(); }}
                    className="block hover:text-slate-900 transition-colors"
                  >
                    Request Rate Card
                  </button>
                  <a 
                    href="https://wa.me/919810098100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-slate-900 transition-colors"
                  >
                    WhatsApp Desk
                  </a>
                </div>

                {/* Bottom Profile Badge (Matching Reference UI Avatar Footer) */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-9 h-9 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shadow-md shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-extrabold text-slate-900 leading-tight">
                      Pawnourish NCR Sales
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      +91 98100 98100
                    </span>
                  </div>
                </div>

              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </header>
  );
}
