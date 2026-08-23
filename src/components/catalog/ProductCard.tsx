'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product, getProductImage } from '@/data/mockData';
import { useStore } from '@/store/useStore';
import { FileText, ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { openDealerModal } = useStore();

  const primaryPack = product.packagingSizes[0] || '';
  const displayImage = product.image || getProductImage(product.brand, product.species);

  // Extract life stage or formula indicator for badge
  const lifeStageBadge = product.lifeStage ? product.lifeStage.split(' ')[0].toUpperCase() : '';
  const packSizeBadge = primaryPack ? primaryPack.toUpperCase() : '';

  // Combine variant & size for top-right corner badge
  const topRightBadge = [lifeStageBadge, packSizeBadge].filter(Boolean).join(' · ') || packSizeBadge || 'STANDARD';

  return (
    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group p-4 sm:p-5 relative">
      
      {/* Product Image Container (Contains packaging cleanly) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 mb-4 flex items-center justify-center p-4">
        
        <Link href={`/products/${product.id}`} className="block w-full h-full relative">
          <Image
            src={displayImage}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
            priority={false}
          />
        </Link>
        
        {/* Top-Left Corner: Brand Badge */}
        <span className="absolute top-3 left-3 bg-slate-950 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md z-10">
          {product.brand}
        </span>
        
        {/* TOP-RIGHT CORNER: VARIANT + PACK SIZE BADGE */}
        <span className="absolute top-3 right-3 bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-full shadow-md tracking-wider uppercase z-10 max-w-[150px] truncate">
          {topRightBadge}
        </span>
      </div>

      {/* Product Information Section */}
      <div className="space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5 text-left">
          
          {/* Brand Name */}
          <div className="text-[11px] font-black uppercase text-emerald-800 tracking-wider">
            {product.brand}
          </div>

          {/* Product Title */}
          <Link href={`/products/${product.id}`} className="block group/title">
            <h3 className="font-extrabold text-slate-900 text-base group-hover/title:text-emerald-700 transition-colors leading-snug">
              {product.title}
            </h3>
          </Link>

          {/* Variant / Formula Description */}
          {product.variantName && (
            <p className="text-xs text-slate-600 font-semibold line-clamp-1">
              {product.variantName}
            </p>
          )}

          {/* Breed / Size Segment */}
          {product.breedSize && (
            <p className="text-[11px] text-slate-400 font-medium line-clamp-1">
              Segment: {product.breedSize}
            </p>
          )}
        </div>

        {/* Bottom Action Section */}
        <div className="pt-3 border-t border-slate-100 space-y-2.5">
          
          {/* List MRP / Price Info */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 font-semibold">Wholesale Rate:</span>
            <span className="font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 text-[11px]">
              {product.mrp ? `MRP ${product.mrp}` : 'Quote on Request'}
            </span>
          </div>

          {/* Primary ENQUIRE Button */}
          <div className="grid grid-cols-12 gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                openDealerModal(product, product.variantName, primaryPack);
              }}
              className="col-span-9 py-3 px-4 bg-slate-950 hover:bg-emerald-800 text-white font-extrabold rounded-2xl text-xs flex items-center justify-center gap-2 shadow-md transition-all group/btn"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>ENQUIRE</span>
            </button>

            <Link
              href={`/products/${product.id}`}
              className="col-span-3 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl flex items-center justify-center transition-colors"
              title="View Product Details"
            >
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
