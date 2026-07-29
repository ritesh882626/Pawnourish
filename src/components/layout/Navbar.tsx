'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from '@/store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Menu, X, FileText, Building2, ChevronRight, Home, Info, Award, ShoppingBag, Mail } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openDealerModal } = useStore();

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Brands', href: '/brands', icon: Award },
    { name: 'Product Catalogue', href: '/catalogue', icon: ShoppingBag },
    { name: 'Become a Dealer', href: '/become-a-dealer', icon: Building2 },
    { name: 'Contact Us', href: '/contact', icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50">
      
      {/* Navbar in Emerald (#005F56/90 + backdrop-blur-xl) */}
      <nav className="bg-[#005F56]/90 backdrop-blur-xl text-white border-b border-emerald-500/20 shadow-lg transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-extrabold text-2xl shadow-lg shadow-emerald-950/40 group-hover:scale-105 transition-transform">
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
              className="p-2.5 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white transition-colors flex items-center justify-center backdrop-blur-md"
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

          {/* Mobile Toggle Controls */}
          <div className="lg:hidden flex items-center gap-2.5">
            <button
              onClick={() => openDealerModal()}
              className="px-3.5 py-2 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs shadow-md active:scale-95"
            >
              Price List
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white focus:outline-none backdrop-blur-md border border-white/10"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Glassmorphism Overlay Drawer (Heavy Dark Blur Covering 100% Screen) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-3xl flex flex-col justify-between p-6 text-white overflow-y-auto"
          >
            {/* Top Header */}
            <div className="flex items-center justify-between pt-2 pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-2xl shadow-lg shadow-emerald-500/20">
                  P
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-xl text-white leading-tight">Pawnourish</span>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Navigation Menu</span>
                </div>
              </div>

              {/* Close Button at top right */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white flex items-center justify-center shadow-lg active:scale-95 transition-all"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items Stack (High Contrast Solid Glass Pill Cards) */}
            <div className="flex flex-col space-y-3 py-6 my-auto max-w-md mx-auto w-full">
              {navLinks.map((link, idx) => {
                const IconComp = link.icon;
                const isActive = pathname === link.href;

                return (
                  <motion.div
                    key={link.href}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.04 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                        isActive 
                          ? 'bg-amber-500 text-slate-950 border-amber-400 font-black shadow-lg shadow-amber-500/25' 
                          : 'bg-[#004D46]/90 hover:bg-[#005F56] border-emerald-500/40 text-white font-extrabold shadow-md'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isActive 
                            ? 'bg-slate-950 text-amber-400' 
                            : 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                        }`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-base sm:text-lg tracking-tight">{link.name}</span>
                      </div>

                      <ChevronRight className={`w-5 h-5 ${isActive ? 'text-slate-950' : 'text-emerald-400'}`} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Floating Action Buttons & Close Circular Pill at Bottom */}
            <div className="space-y-3 pt-4 border-t border-slate-800/80">
              <button
                onClick={() => { setMobileMenuOpen(false); openDealerModal(); }}
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl text-center text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/30 min-h-[52px]"
              >
                <Building2 className="w-5 h-5" /> Become an Authorized Dealer
              </button>

              <div className="flex items-center justify-between gap-3 pt-1">
                <a
                  href="tel:+919810098100"
                  className="flex-1 py-3.5 bg-slate-900 border border-slate-700/80 text-white font-bold rounded-2xl text-center text-sm flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <Phone className="w-4 h-4 text-emerald-400" /> Call Sales Desk
                </a>

                {/* Circular Floating Close Button (matching reference image) */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:bg-emerald-500 transition-transform active:scale-95 border border-emerald-400/40 shrink-0"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
