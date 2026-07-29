'use client';

import React from 'react';
import Link from 'next/link';
import { PRODUCTS, Product } from '@/data/mockData';
import { useStore } from '@/store/useStore';
import { FileText, ArrowRight, PackageCheck } from 'lucide-react';

export default function CataloguePreview() {
  const { openDealerModal } = useStore();

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 space-y-12">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Stock Available in Delhi NCR</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">Wholesale Product Catalogue</h2>
        </div>

        <Link
          href="/catalogue"
          className="inline-flex items-center gap-2 font-bold text-sm text-emerald-700 hover:text-emerald-800"
        >
          Explore Complete B2B Catalogue <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.slice(0, 6).map((product) => (
          <div 
            key={product.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-50 p-4">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {product.brand}
              </span>
              {product.badge && (
                <span className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-[11px] font-extrabold px-2.5 py-1 rounded-full border border-emerald-200">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">{product.category}</span>
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                  {product.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2">{product.description}</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-1.5 font-medium">
                  <PackageCheck className="w-4 h-4 text-emerald-600" /> Sizes: {product.packagingSizes.join(", ")}
                </div>
                <div className="flex items-center gap-1.5 font-medium text-slate-900">
                  <strong>Minimum Order:</strong> {product.moq}
                </div>
              </div>

              <button
                onClick={() => openDealerModal(product)}
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <FileText className="w-4 h-4" /> Enquire Pricing & Stock
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
