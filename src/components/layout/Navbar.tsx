'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from '@/store/useStore';
import { Phone, MessageCircle, Menu, X, FileText, Building2 } from 'lucide-react';

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
    <header className="sticky top-0 z-50 shadow-md">
      
      {/* Main Navbar in Dark Teal (#005F56) */}
      <nav className="bg-[#005F56] text-white border-b border-emerald-800">
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
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl shadow-lg text-xs sm:text-sm flex items-center gap-2 transition-all"
            >
              <FileText className="w-4 h-4" /> Request Price List
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => openDealerModal()}
              className="px-3 py-2 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs"
            >
              Price List
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-amber-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#004D46] border-t border-emerald-800 px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold py-2 border-b border-emerald-800/50 ${
                    pathname === link.href ? 'text-amber-400 font-bold' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/become-a-dealer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl text-center text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <Building2 className="w-4 h-4" /> Become an Authorized Dealer
              </Link>
              <a
                href="tel:+919810098100"
                className="w-full py-3 bg-emerald-800 text-white font-bold rounded-xl text-center text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call Sales: +91 98100 98100
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
