'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function WhatsAppButton() {
  const [showBark, setShowBark] = useState(false);
  const [barkText, setBarkText] = useState<'bhaw' | 'bhaw!'>('bhaw');

  useEffect(() => {
    // Initial bark after 2 seconds
    const initialTimer = setTimeout(() => {
      triggerBarkAnimation();
    }, 2000);

    // Recurring bark animation every 7 seconds
    const interval = setInterval(() => {
      triggerBarkAnimation();
    }, 7000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const triggerBarkAnimation = () => {
    setBarkText('bhaw');
    setShowBark(true);

    // After 600ms, change to "bhaw!"
    setTimeout(() => {
      setBarkText('bhaw!');
    }, 600);

    // Hide speech bubble after 3.2 seconds
    setTimeout(() => {
      setShowBark(false);
    }, 3200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      
      {/* Animated Speech Bubble */}
      {showBark && (
        <div className="animate-bounce bg-emerald-700 text-white font-extrabold text-xs px-3.5 py-2 rounded-2xl shadow-xl border-2 border-white flex items-center gap-1.5 relative">
          <span className="text-amber-300 text-sm">🐶</span>
          <span className="tracking-wide capitalize text-sm">{barkText}</span>
          
          {/* Speech Bubble Arrow */}
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-6 border-t-transparent border-b-6 border-b-transparent border-l-8 border-l-emerald-700" />
        </div>
      )}

      {/* Floating Dog Face Button */}
      <a
        href="https://wa.me/919810098100?text=Hi%20Pawnourish%20Team%2C%20I%20am%20a%20pet%20retailer%2Fvet%20in%20Delhi%20NCR.%20I%20want%20to%20inquire%20about%20Royal%20Canin%20%26%20Drools%20wholesale%20rates."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-emerald-600 to-amber-400 shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
        title="Chat on WhatsApp"
        aria-label="Contact Pawnourish Sales on WhatsApp"
      >
        {/* Golden Retriever Dog Face Image */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white bg-amber-50">
          <Image
            src="/images/dog_avatar.jpg"
            alt="Pawnourish Golden Retriever Support Dog"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* WhatsApp Badge Overlay at Bottom Right */}
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#25D366] border-2 border-white flex items-center justify-center shadow-md">
          <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
        </div>

        {/* Tooltip on Hover */}
        <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
          Chat on WhatsApp 💬
        </span>
      </a>

    </div>
  );
}
