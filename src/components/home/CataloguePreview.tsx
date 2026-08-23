'use client';

import React from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/mockData';
import ProductCard from '@/components/catalog/ProductCard';
import { ArrowRight } from 'lucide-react';

export default function CataloguePreview() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 space-y-12">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Stock Available in Delhi NCR</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">Wholesale Product Portfolio</h2>
        </div>

        <Link
          href="/products"
          className="inline-flex items-center gap-2 font-bold text-sm text-emerald-700 hover:text-emerald-800"
        >
          Explore Complete B2B Portfolio <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
}
