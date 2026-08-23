import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Truck, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { NCR_LOCATIONS } from '@/data/mockData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      
      {/* Top B2B Trust Guarantee Bar */}
      <div className="max-w-7xl mx-auto px-6 mb-16 pb-12 border-b border-slate-800 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-950 text-emerald-400 rounded-2xl">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-bold text-white text-base">100% Genuine Guaranteed</h4>
            <p className="text-xs text-slate-400">Direct brand authorization</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-950 text-emerald-400 rounded-2xl">
            <Truck className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-bold text-white text-base">24-Hour NCR Delivery</h4>
            <p className="text-xs text-slate-400">Delhi, Gurugram, Noida & more</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-950 text-emerald-400 rounded-2xl">
            <Phone className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-bold text-white text-base">Dedicated Account Exec</h4>
            <p className="text-xs text-slate-400">Personal B2B support line</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-950 text-emerald-400 rounded-2xl">
            <MessageCircle className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-bold text-white text-base">WhatsApp Instant Quotes</h4>
            <p className="text-xs text-slate-400">Quick rate card sharing</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
        
        {/* Brand & Overview Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-black text-xl">
              P
            </div>
            <span className="font-display font-extrabold text-2xl text-white">
              Pawnourish
            </span>
          </div>
          
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            Pawnourish is a leading B2B wholesale distribution partner specializing in Royal Canin and Drools pet food products for pet stores, veterinary clinics, and grooming salons across Delhi NCR.
          </p>

          <div className="pt-2 text-xs text-slate-400 space-y-1.5">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Regional Wholesale Warehouse: Delhi NCR, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Sales Desk: +91 97116 33094</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>b2b@pawnourish.com</span>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="space-y-3 text-sm">
          <h5 className="font-bold text-white uppercase tracking-wider text-xs">Quick Links</h5>
          <ul className="space-y-2 text-slate-400">
            <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Pawnourish</Link></li>
            <li><Link href="/brands" className="hover:text-emerald-400 transition-colors">Authorized Brands</Link></li>
            <li><Link href="/products" className="hover:text-emerald-400 transition-colors">Products Portfolio</Link></li>
            <li><Link href="/products/dog-food" className="hover:text-emerald-400 transition-colors">Dog Food</Link></li>
            <li><Link href="/products/cat-food" className="hover:text-emerald-400 transition-colors">Cat Food</Link></li>
            <li><Link href="/become-a-dealer" className="hover:text-emerald-400 font-semibold text-emerald-400 transition-colors">Become a Dealer</Link></li>
            <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Sales</Link></li>
          </ul>
        </div>

        {/* Column 3: Authorized Brands */}
        <div className="space-y-3 text-sm">
          <h5 className="font-bold text-white uppercase tracking-wider text-xs">Brands Distributed</h5>
          <ul className="space-y-2 text-slate-400">
            <li><Link href="/brands#royal-canin" className="hover:text-emerald-400 transition-colors">Royal Canin Size Health</Link></li>
            <li><Link href="/brands#royal-canin" className="hover:text-emerald-400 transition-colors">Royal Canin Breed Health</Link></li>
            <li><Link href="/brands#royal-canin" className="hover:text-emerald-400 transition-colors">Royal Canin Veterinary Diets</Link></li>
            <li><Link href="/brands#drools" className="hover:text-emerald-400 transition-colors">Drools Focus Series</Link></li>
            <li><Link href="/brands#drools" className="hover:text-emerald-400 transition-colors">Drools VetPro Clinical Diets</Link></li>
            <li><Link href="/brands#drools" className="hover:text-emerald-400 transition-colors">Drools Real Chicken & Rice</Link></li>
          </ul>
        </div>

        {/* Column 4: Service Region */}
        <div className="space-y-3 text-sm">
          <h5 className="font-bold text-white uppercase tracking-wider text-xs">Delhi NCR Coverage</h5>
          <ul className="space-y-1.5 text-slate-400 text-xs">
            {NCR_LOCATIONS.map((loc, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {loc}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <div>
          © 2026 Pawnourish. All rights reserved. B2B Wholesale Distribution.
        </div>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-slate-300 transition-colors">Dealer Terms & Conditions</Link>
          <Link href="/faq" className="hover:text-slate-300 transition-colors">B2B FAQs</Link>
        </div>
      </div>

    </footer>
  );
}
