'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const sectors = [
  'Healthcare & Dental',
  'Ecommerce',
  'Local Businesses',
  'Professional Services',
  'Franchises',
  'B2B Companies',
  'Technology Companies',
  'Growing Businesses',
];

export default function ProofStrip() {
  return (
    <section className="relative w-full bg-[#F7F7F5] py-16 sm:py-20 lg:py-24 border-b border-neutral-200/90 overflow-hidden">
      {/* Subtle architectural background grid line texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#08080C 1px, transparent 1px),
            linear-gradient(90deg, #08080C 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Soft restrained ambient light bleed */}
      <div className="absolute -top-16 left-1/3 w-[500px] h-[200px] bg-[#670EF7]/[0.04] blur-[100px] pointer-events-none rounded-full" />

      {/* Scoped marquee keyframes with paused-on-hover */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes proofMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-proof-marquee {
          animation: proofMarquee 42s linear infinite;
        }
        .animate-proof-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* 90% Container on Large Screens */}
      <div className="relative lg:max-w-[90%] mx-auto mb-10 sm:mb-12 z-10 px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-neutral-200">
          
          {/* Left Column: Heading & Value Context */}
          <div className="max-w-4xl">
            <div 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-300/80 shadow-xs mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#670EF7]" />
              <span className="text-xs uppercase tracking-widest font-semibold text-neutral-600">
                ACROSS INDUSTRIES
              </span>
            </div>

            <h2 
              className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#08080C] tracking-tight leading-[1.18]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Different businesses. Different challenges. {' '}
              <span className="bg-gradient-to-r from-[#670EF7] to-[#8B45FF] bg-clip-text text-transparent">
                One goal moving forward.
              </span>
            </h2>
          </div>

          {/* Right Column: Statement & CTA */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 sm:gap-6 shrink-0">
            <p 
              className="text-lg font-medium text-neutral-500 leading-snug max-w-xs"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              We work with businesses at different stages of their digital journey — from establishing a stronger online presence to building systems that support growth.
            </p>

            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#08080C] hover:bg-[#670EF7] text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#670EF7]/20 group self-start sm:self-auto"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span>View Case Studies</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </div>

      {/* Infinite Seamless Marquee Strip */}
      <div 
        className="relative w-full flex overflow-hidden py-3"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div className="flex animate-proof-marquee whitespace-nowrap gap-5 shrink-0 will-change-transform">
          {[...sectors, ...sectors].map((sector, i) => (
            <div
              key={`sector-${i}`}
              className="group relative px-6 py-3.5 rounded-2xl border border-neutral-300/80 bg-white/95 hover:bg-white text-neutral-800 hover:text-black text-sm sm:text-base font-semibold tracking-normal shadow-xs hover:shadow-md hover:border-[#670EF7]/40 transition-all duration-200 flex items-center gap-3.5 shrink-0 cursor-default select-none"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {/* Active Purple Indicator Pulse on Hover */}
              <span className="relative flex h-2 w-2">
                <span className="group-hover:animate-ping absolute inline-flex h-full w-full rounded-full bg-[#670EF7] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#670EF7]" />
              </span>
              <span>{sector}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}