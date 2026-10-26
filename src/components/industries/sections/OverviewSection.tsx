'use client';

import React from 'react';
import Image from 'next/image';
import { OverviewData } from '@/types/industry';

export const OverviewSection = ({ data }: { data: OverviewData }) => {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden font-['Poppins',sans-serif]">
      {/* Subtle background decorations */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10">
        {/* Soft grid matrix with subtle radial fade */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />

        {/* Ambient top-left soft purple glow */}
        <div className="absolute -top-24 -left-20 w-[480px] h-[480px] bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-transparent rounded-full blur-[110px]" />

        {/* Ambient bottom-right soft indigo glow */}
        <div className="absolute -bottom-28 right-0 w-[420px] h-[420px] bg-gradient-to-tl from-indigo-500/8 via-purple-400/5 to-transparent rounded-full blur-[100px]" />

        {/* Subtle geometric concentric accent arcs behind the left column */}
        <div className="absolute top-1/2 left-8 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-purple-200/30 -z-10" />
        <div className="absolute top-1/2 left-14 -translate-y-1/2 w-[260px] h-[260px] rounded-full border border-dashed border-indigo-200/25 -z-10" />
      </div>

      <div className="md:max-w-[90%] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Container with Frosted Glass Metric Pill */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative halo ring */}
              <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-tr from-purple-500/20 via-indigo-500/10 to-transparent blur-xl -z-10" />

              {/* Main Image Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-[28px] overflow-hidden border border-slate-200/80 shadow-2xl bg-slate-100">
                <Image
                  src={data.imageSrc}
                  alt={data.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Frosted Glass Floating Metric Badge */}
              {data.highlightMetric && (
                <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/80 shadow-[0_20px_40px_-15px_rgba(79,70,229,0.18)] flex items-center gap-3.5 z-10 transition-transform duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-purple-500/25">
                    ✓
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                      {data.highlightMetric.value}
                    </div>
                    <div className="text-xs font-semibold text-slate-700 mt-1">
                      {data.highlightMetric.label}
                    </div>
                    {data.highlightMetric.sublabel && (
                      <div className="text-[11px] text-slate-400">
                        {data.highlightMetric.sublabel}
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right Column: Narrative & Key Value Props */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-semibold tracking-wide uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
              {data.badge}
            </div>

            {/* Heading (Font Inter) with whitespace-pre-line */}
            <h2 className="font-['Inter',sans-serif] text-3xl md:text-6xl font-extrabold tracking-[-0.03em] text-slate-900 leading-[1.15] whitespace-pre-line">
              {data.title}
              {data.highlightedTitle ? (
                <>
                  {' '}
                  <span className="text-indigo-600">
                    {data.highlightedTitle}
                  </span>
                </>
              ) : null}
            </h2>

            {/* Narrative Paragraphs (Font Poppins) */}
            <p className="mt-5 text-sm md:text-lg text-slate-600 leading-relaxed whitespace-pre-line">
              {data.description}
            </p>

            {data.secondaryDescription && (
              <p className="mt-3 text-sm md:text-lg text-slate-500 leading-relaxed whitespace-pre-line">
                {data.secondaryDescription}
              </p>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};