'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/data/mockData';
import { useStore } from '@/store/useStore';
import { FileText, ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { openDealerModal } = useStore();

  const primaryPack = product.packagingSizes[0] || '';

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group p-4 sm:p-5">
      
      {/* Product Visual Container (Image Hero) */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-50 border border-slate-100/80 mb-4 flex items-center justify-center p-3">
        <Link href={`/products/${product.id}`} className="block w-full h-full relative">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        
        {/* Brand Badge */}
        <span className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
          {product.brand}
        </span>
        
        {/* MRP Badge if present */}
        {product.mrp && (
          <span className="absolute top-3 right-3 bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-full shadow-md">
            MRP {product.mrp}
          </span>
        )}
      </div>

      {/* Product Information Section */}
      <div className="space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          
          {/* Metadata pill line */}
          <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5 flex-wrap">
            <span>{product.species}</span>
            <span>•</span>
            <span>{product.lifeStage}</span>
            <span>•</span>
            <span>{product.subCategory.includes('Dry') ? 'Dry Food' : 'Wet Food'}</span>
          </div>

          {/* Product Title */}
          <Link href={`/products/${product.id}`} className="block group/title">
            <h3 className="font-black text-slate-900 text-base sm:text-lg group-hover/title:text-emerald-700 transition-colors leading-snug">
              {product.title}
            </h3>
          </Link>

          {/* Variant Name & Breed Segment */}
          <div className="text-xs text-slate-500 font-medium space-y-0.5">
            {product.variantName && (
              <p className="line-clamp-1">
                Variant: <span className="font-bold text-slate-800">{product.variantName}</span>
              </p>
            )}
            {product.breedSize && (
              <p className="line-clamp-1 text-[11px] text-slate-400">
                Segment: {product.breedSize}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Action Section */}
        <div className="pt-3 border-t border-slate-100 space-y-2.5">
          
          {/* List MRP / Price Info */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 font-semibold">Wholesale Rate:</span>
            <span className="font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 text-[11px]">
              {product.mrp ? `List ${product.mrp}` : 'Quote on Request'}
            </span>
          </div>

          {/* Primary ENQUIRE CTA (Pre-fills SKU & product automatically) */}
          <div className="grid grid-cols-12 gap-2">
            <button
              onClick={() => openDealerModal(product, product.variantName, primaryPack)}
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
