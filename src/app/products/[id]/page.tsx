'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PRODUCTS, Product } from '@/data/mockData';
import { useStore } from '@/store/useStore';
import ProductCard from '@/components/catalog/ProductCard';
import { 
  ArrowLeft, 
  ChevronRight, 
  ShieldCheck, 
  Check, 
  FileText, 
  MessageCircle, 
  PackageCheck, 
  Sparkles,
  Info,
  Layers,
  Thermometer,
  Apple
} from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const { openDealerModal } = useStore();

  const product = PRODUCTS.find((p) => p.id === id || p.code.toLowerCase() === id?.toLowerCase());

  const [selectedPackSize, setSelectedPackSize] = useState<string>(
    product?.packagingSizes[0] || ''
  );

  if (!product) {
    return (
      <div className="py-24 max-w-4xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-3xl font-black text-slate-900">Product Not Found</h1>
        <p className="text-slate-600">The product SKU you are looking for does not exist in our catalog database.</p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white font-bold rounded-2xl text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Product Portfolio
        </Link>
      </div>
    );
  }

  const isDog = product.species === 'Dog';
  const backLink = isDog ? '/products/dog-food' : '/products/cat-food';
  const backLabel = isDog ? 'Back to Dog Food' : 'Back to Cat Food';

  // Related products logic (4 items matching species & brand)
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.species === product.species && p.brand === product.brand
  ).slice(0, 4);

  const whatsappMessage = encodeURIComponent(
    `Hello Pawnourish Sales Team, I would like to enquire about wholesale supply for ${product.title} (SKU: ${product.code}).`
  );

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/products" className="hover:text-slate-900 transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href={backLink} className="hover:text-slate-900 transition-colors">{product.species} Food</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-900 font-extrabold truncate max-w-[200px] sm:max-w-xs">{product.title}</span>
        </nav>

        <Link
          href={backLink}
          className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-700 hover:text-emerald-800 transition-colors bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{backLabel}</span>
        </Link>
      </div>

      {/* SECTION 1 — PRODUCT HERO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
        
        {/* LEFT COLUMN: Gallery & Main Image */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative aspect-[4/3] bg-slate-50 rounded-2xl overflow-hidden p-6 border border-slate-100 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover rounded-xl"
            />
            <span className="absolute top-4 left-4 bg-slate-900 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
              {product.brand}
            </span>
            {product.mrp && (
              <span className="absolute top-4 right-4 bg-amber-400 text-slate-950 text-xs font-black px-3 py-1.5 rounded-full shadow-md">
                MRP {product.mrp}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-2xl border border-emerald-100 text-xs text-emerald-900 font-medium">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
            <span>Guaranteed 100% Genuine Direct Factory Fresh Batch Stock</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Product Essentials */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
          
          <div className="space-y-4">
            <div className="space-y-1.5">
              <span className="text-xs font-black uppercase text-emerald-700 tracking-wider">
                {product.brand} · {product.productType}
              </span>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                {product.title}
              </h1>
              <p className="text-xs text-slate-500 font-mono">SKU Code: <strong className="text-slate-800">{product.code}</strong></p>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              {product.description}
            </p>

            {/* Key Attribute Pills */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="px-3 py-1 rounded-xl bg-slate-100 font-bold text-slate-700">
                Species: {product.species}
              </span>
              <span className="px-3 py-1 rounded-xl bg-slate-100 font-bold text-slate-700">
                Life Stage: {product.lifeStage}
              </span>
              <span className="px-3 py-1 rounded-xl bg-slate-100 font-bold text-slate-700">
                Sub-Category: {product.subCategory}
              </span>
              <span className="px-3 py-1 rounded-xl bg-slate-100 font-bold text-slate-700">
                Segment: {product.breedSize}
              </span>
            </div>

            {/* Packaging Sizes */}
            {product.packagingSizes.length > 0 && (
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <label className="block text-xs font-black uppercase text-slate-900 tracking-wider">
                  Packaging Options
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.packagingSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedPackSize(size)}
                      className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all border ${
                        selectedPackSize === size
                          ? 'bg-emerald-700 text-white border-emerald-700 shadow-md'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Minimum Order Quantity */}
            {product.moq && (
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 pt-1">
                <PackageCheck className="w-4 h-4 text-emerald-600" />
                <span>Minimum Order Quantity (MOQ): <strong className="text-slate-900">{product.moq} {product.moqUnit || ''}</strong></span>
              </div>
            )}
          </div>

          {/* B2B CTA AREA */}
          <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-4 shadow-xl border border-slate-800">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest block">Wholesale Dealer Supply Inquiry</span>
              <h3 className="text-lg font-black text-white">Request Wholesale Pricing & Stock</h3>
              <p className="text-xs text-slate-300 font-medium">
                Get pricing and availability for your retail store, clinic or distribution business.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => openDealerModal(product, product.variantName, selectedPackSize)}
                className="py-3.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-2xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <FileText className="w-4 h-4 text-slate-950" />
                <span>REQUEST WHOLESALE PRICE</span>
              </button>

              <a
                href={`https://wa.me/919711633094?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-2xl text-xs flex items-center justify-center gap-2 transition-all border border-emerald-500/30"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WHATSAPP US</span>
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* SECTION 2 — KEY BENEFITS & SELLING POINT */}
      {(product.keyBenefits.length > 0 || product.sellingPoint) && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {product.keyBenefits.length > 0 && (
            <div className={`space-y-4 ${product.sellingPoint ? 'md:col-span-7' : 'md:col-span-12'}`}>
              <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-700" />
                <span>Key Product Benefits</span>
              </h3>

              <div className="space-y-3">
                {product.keyBenefits.map((b, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-snug">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {product.sellingPoint && (
            <div className={`space-y-4 ${product.keyBenefits.length > 0 ? 'md:col-span-5' : 'md:col-span-12'}`}>
              <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <Apple className="w-5 h-5 text-amber-600" />
                <span>Key Selling Point</span>
              </h3>

              <div className="p-6 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-slate-900 space-y-3 shadow-sm h-full flex flex-col justify-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 bg-amber-200/60 px-3 py-1 rounded-full self-start">
                  Retailer Advantage
                </span>
                <p className="text-sm font-bold leading-relaxed text-slate-900">
                  {product.sellingPoint}
                </p>
              </div>
            </div>
          )}

        </div>
      )}

      {/* SECTION 3 — TECHNICAL SPECIFICATIONS & INGREDIENTS */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-8 shadow-sm">
        
        <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-4">
          <Info className="w-5 h-5 text-emerald-700" />
          <span>Product Specifications & Details</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Specifications Table */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Specifications Table</h4>
            <div className="rounded-2xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs">
              <div className="grid grid-cols-2 p-3 bg-slate-50">
                <span className="font-bold text-slate-500">Brand</span>
                <span className="font-extrabold text-slate-900">{product.brand}</span>
              </div>
              <div className="grid grid-cols-2 p-3">
                <span className="font-bold text-slate-500">SKU / Code</span>
                <span className="font-mono font-bold text-slate-900">{product.code}</span>
              </div>
              <div className="grid grid-cols-2 p-3 bg-slate-50">
                <span className="font-bold text-slate-500">Species</span>
                <span className="font-bold text-slate-900">{product.species}</span>
              </div>
              <div className="grid grid-cols-2 p-3">
                <span className="font-bold text-slate-500">Life Stage</span>
                <span className="font-bold text-slate-900">{product.lifeStage}</span>
              </div>
              <div className="grid grid-cols-2 p-3 bg-slate-50">
                <span className="font-bold text-slate-500">Sub-Category</span>
                <span className="font-bold text-slate-900">{product.subCategory}</span>
              </div>
              <div className="grid grid-cols-2 p-3">
                <span className="font-bold text-slate-500">Segment / Size</span>
                <span className="font-bold text-slate-900">{product.breedSize}</span>
              </div>
              <div className="grid grid-cols-2 p-3 bg-slate-50">
                <span className="font-bold text-slate-500">Product Range</span>
                <span className="font-bold text-slate-900">{product.productType}</span>
              </div>
              {product.mrp && (
                <div className="grid grid-cols-2 p-3">
                  <span className="font-bold text-slate-500">List MRP</span>
                  <span className="font-extrabold text-emerald-800">{product.mrp}</span>
                </div>
              )}
            </div>
          </div>

          {/* Dynamic Information Sections */}
          <div className="space-y-6">
            
            {product.ingredients && (
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-emerald-700" />
                  <span>Ingredients & Composition</span>
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed font-medium bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  {product.ingredients}
                </p>
              </div>
            )}

            {product.nutritionalInfo && (
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Nutritional Information</h4>
                <p className="text-xs text-slate-700 leading-relaxed font-medium bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  {product.nutritionalInfo}
                </p>
              </div>
            )}

            {product.feedingInfo && (
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Feeding Instructions</h4>
                <p className="text-xs text-slate-700 leading-relaxed font-medium bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  {product.feedingInfo}
                </p>
              </div>
            )}

            {product.storageInstructions && (
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Thermometer className="w-4 h-4 text-emerald-700" />
                  <span>Storage Instructions</span>
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed font-medium bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  {product.storageInstructions}
                </p>
              </div>
            )}

            {product.additionalInfo && (
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Additional Information</h4>
                <p className="text-xs text-slate-700 leading-relaxed font-medium bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  {product.additionalInfo}
                </p>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* SECTION 4 — RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black text-slate-900">Similar {product.brand} Products</h3>
            <Link href={backLink} className="text-xs font-extrabold text-emerald-700 hover:underline">
              View All {product.species} Foods →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </div>
      )}

      {/* CONTINUATION CTA BUTTON AT BOTTOM */}
      <div className="pt-8 text-center border-t border-slate-200">
        <Link
          href={backLink}
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-950 hover:bg-slate-900 text-white font-black rounded-2xl text-xs uppercase tracking-wider shadow-lg transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-amber-400" />
          <span>Continue Browsing {backLabel}</span>
        </Link>
      </div>

    </div>
  );
}
