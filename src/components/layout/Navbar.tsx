'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from '@/store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Menu, X, FileText, Building2, Home, Info, Award, ShoppingBag, Mail, Share2, Edit, Star, MapPin, PlusSquare, Camera } from 'lucide-react';

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

      {/* Mobile Glassmorphism Overlay Drawer (Heavy 40px Blur Backdrop with Floating Pills matching Reference UI) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-[40px] flex flex-col justify-between p-6 text-white overflow-y-auto"
          >
            {/* Top Header Bar */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-2xl shadow-lg shadow-emerald-500/20">
                  P
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-xl text-white leading-tight">Pawnourish</span>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Wholesale NCR</span>
                </div>
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/90 px-3.5 py-1.5 rounded-full border border-emerald-700/60 shadow-inner">
                Menu
              </span>
            </div>

            {/* Floating Right-Aligned Pill Menu Items (Matching Reference Design) */}
            <div className="flex flex-col items-end space-y-3.5 py-6 my-auto max-w-xs ml-auto w-full">
              {navLinks.map((link, idx) => {
                const IconComp = link.icon;
                const isActive = pathname === link.href;

                return (
                  <motion.div
                    key={link.href}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="w-full flex justify-end"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3.5 px-5 py-3 rounded-full transition-all shadow-xl ${
                        isActive 
                          ? 'bg-amber-400 text-slate-950 font-black shadow-amber-400/20 border-2 border-amber-300' 
                          : 'bg-white text-blue-600 hover:bg-slate-50 font-bold border border-slate-100'
                      }`}
                    >
                      <span className={`text-sm sm:text-base ${isActive ? 'text-slate-950' : 'text-blue-600'}`}>{link.name}</span>
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md ${
                        isActive ? 'bg-slate-950 text-amber-400' : 'bg-blue-50 text-blue-600 border border-blue-100'
                      }`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Actions & Blue Floating Circular Close Button */}
            <div className="space-y-3.5 pt-2">
              <button
                onClick={() => { setMobileMenuOpen(false); openDealerModal(); }}
                className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl text-center text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/30"
              >
                <Building2 className="w-4 h-4" /> Become an Authorized Dealer
              </button>

              <div className="flex items-center justify-between gap-3">
                <a
                  href="tel:+919810098100"
                  className="flex-1 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl text-center text-xs flex items-center justify-center gap-2 shadow-lg"
                >
                  <Phone className="w-4 h-4 text-emerald-400" /> Call Sales Desk
                </a>

                {/* Blue Floating Circular Close Button (Matching Reference Image) */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl shadow-blue-600/50 transition-transform active:scale-95 border-2 border-white/20 shrink-0"
                  aria-label="Close menu"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
