'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function GrowthJourney() {
  return (
    <section className="relative w-full py-20 sm:py-24 md:py-28 lg:py-36 bg-[#FFFFFF] text-[#08080C] overflow-hidden border-b border-neutral-200">
  
      {/* Standard Section Container */}
      <div className="relative w-full lg:max-w-[90%] mx-auto px-6 md:px-12 lg:px-16 z-10">
  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Architectural Visual Asset */}
          <div className="lg:col-span-5 relative w-full h-[360px] sm:h-[440px] lg:h-[500px] rounded-3xl overflow-hidden border border-neutral-200 shadow-xl group">
            <Image
              src="/traditional-to-digital.png" 
              alt="From Traditional to Digital Scale"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080C]/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* RIGHT: Editorial Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#670EF7]" />
              <span className="text-xs uppercase tracking-widest font-semibold text-neutral-600">
                WHO WE ARE
              </span>
            </div>

            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#08080C] leading-[1.1] mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Every stage of business creates a{' '}
              <span className="bg-gradient-to-r from-[#670EF7] to-[#8B45FF] bg-clip-text text-transparent">
                new digital challenge.
              </span>
            </h2>

            <div 
              className="space-y-4 text-base sm:text-lg text-[#71717A] font-normal leading-relaxed mb-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <p>
                A new business needs to establish itself and win its first customers. A growing business needs a website and marketing system that can keep up with demand. An established company may have a strong reputation offline but an online experience that no longer reflects the quality of its work. The challenge changes, but the need is the same: digital investment should make the business easier to discover, easier to buy from and easier to operate.
              </p>
              <p>
                That is where Bixeltek works. We bring web design and development, ecommerce, applications, performance marketing and search together around the business objective. Sometimes the right answer is a focused website rebuild or a better Google Ads campaign. Sometimes it is a connected platform, new customer journey or application. We define the work by the problem it must solve, then build and improve it with you.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-200 flex items-center gap-3 w-full">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#08080C] hover:text-[#670EF7] transition-colors group"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span>Get to Know Bixeltek</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#670EF7]" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
} 