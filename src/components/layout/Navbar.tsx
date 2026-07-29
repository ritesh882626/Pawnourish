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
      
      {/* Blurry Glassmorphism Navbar in Emerald (#005F56/90 + backdrop-blur-xl) */}
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

          {/* Mobile Blurry Toggle Controls */}
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

        {/* Mobile Glassmorphism Overlay Drawer (Frosted Glass Blur Effect like Reference Image) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-2xl flex flex-col justify-between p-6 text-white"
            >
              {/* Top Header inside overlay */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-xl shadow-lg">
                    P
                  </div>
                  <span className="font-extrabold text-xl text-white">Pawnourish</span>
                </div>

                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-700/50">
                  Navigation
                </span>
              </div>

              {/* Floating Menu Action Items (Right Aligned Pills like Reference Image) */}
              <div className="flex flex-col items-end space-y-3.5 py-6 my-auto max-w-sm ml-auto w-full">
                {navLinks.map((link, idx) => {
                  const IconComp = link.icon;
                  const isActive = pathname === link.href;

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="w-full flex justify-end"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl backdrop-blur-xl border transition-all ${
                          isActive 
                            ? 'bg-amber-500 text-slate-950 border-amber-400 font-extrabold shadow-lg shadow-amber-500/20' 
                            : 'bg-white/10 hover:bg-white/20 border-white/10 text-white font-semibold shadow-md'
                        }`}
                      >
                        <span className="text-sm">{link.name}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? 'bg-slate-950 text-amber-400' : 'bg-white/20 text-white'}`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Floating Action Buttons & Close Floating Pill at bottom right */}
              <div className="space-y-3 pb-4">
                <button
                  onClick={() => { setMobileMenuOpen(false); openDealerModal(); }}
                  className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl text-center text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30"
                >
                  <Building2 className="w-4 h-4" /> Become an Authorized Dealer
                </button>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <a
                    href="tel:+919810098100"
                    className="flex-1 py-3 bg-white/10 backdrop-blur-md border border-white/15 text-white font-bold rounded-2xl text-center text-xs flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" /> Call Sales
                  </a>

                  {/* Floating Circular Close Button (as in reference image) */}
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:bg-emerald-500 transition-transform active:scale-95 border border-emerald-400/30 shrink-0"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
}
