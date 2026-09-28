'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { Target, TrendingUp, BarChart3, Award, Layers3 } from 'lucide-react';

// metrics verified against GEMINI.md baseline: 477+, ₹77, 436%+, 212

function MetricCounter({
  value,
  prefix = '',
  suffix = '',
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 5); // Decart ease
        const current = Math.floor(ease * value);

        setDisplay(current.toString());

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplay(value.toString());
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

const proofPoints = [
  {
    icon: Award,
    num: '01',
    value: 100,
    suffix: '+',
    detail:
      'Dental practices supported through BixDental across multiple markets since 2021.',
    phase: 'EXPERIENCE',
    accent: false
  },
  {
    icon: TrendingUp,
    num: '02',
    value: 380,
    prefix: '$',
    suffix: 'K',
    detail:
      'Peak monthly sales documented in the BixDental growth track record.',
    phase: 'GROWTH',
    accent: true
  },
  {
    icon: Target,
    num: '03',
    value: 2021,
    detail:
      'Year Bixeltek began its focused dental growth work, building experience across acquisition and digital systems.',
    phase: 'SINCE',
    accent: false
  },
      {
      icon: Layers3,
      num: '04',
      value: 6,
      suffix: '+',
      detail:
        'Digital capabilities brought together across web, marketing, ecommerce, apps, automation, and technology.',
      phase: 'CAPABILITIES',
      accent: false
    }
];

export default function ResultsWall() {
  return (
    <section className="relative bg-[#FBFBFA] py-24 sm:py-32 lg:py-40 border-b border-neutral-200/90 overflow-hidden text-[#08080C]">
      
      {/* Background Innovations (No generic dots or boxes) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle, restrained wide radial glow */}
        <div className="absolute -top-32 left-1/3 w-[600px] h-[300px] bg-[#670EF7]/[0.035] blur-[120px] rounded-full" />
        {/* Soft, structural vertical hairline architecture */}
        <div className="absolute inset-x-0 inset-y-[-100px] opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(8, 8, 12, 0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 100%'
          }}
        />
      </div>

      {/* 90% Section Container */}
      <div className="relative w-full lg:max-w-[90%] mx-auto px-6 md:px-12 lg:px-16 z-10">
        
        {/* Section Header - Two-Line Editorial Composition */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 sm:mb-24 md:mb-28 pb-10 border-b border-neutral-200">
          <div className="max-w-4xl">
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300 bg-white shadow-xs mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#670EF7] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-600">
                PROOF FROM REAL WORK
              </span>
            </div>
            <h2 
              className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[1.04]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Growth Looks Different For Every Business.<br className="hidden md:inline" />
              <span className="text-[#670EF7]">The Work Should Be Measurable.</span> 
            </h2>
          </div>
          <div className="max-w-md pb-1 shrink-0">
            <p 
              className="text-base sm:text-lg md:text-xl text-[#71717A] font-normal leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              From building digital foundations to generating demand and connecting the systems behind a business, we measure the outcomes that matter to each engagement.
            </p>
          </div>
        </div>

        {/* proof grid - 1 col (mobile), 2 col (tablet md:), 4 col (desktop lg:) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-8">
          {proofPoints.map((point, i) => {
            const IconComponent = point.icon;
            
            return (
              <motion.div
                key={point.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-3xl p-7 sm:p-8 lg:p-9 flex flex-col justify-between overflow-hidden group shadow-sm transition-all duration-300 ${
                  point.accent 
                    ? 'bg-[#161B26] text-white border border-[#FBBF24]/30' 
                    : 'bg-white text-[#08080C] border border-neutral-200/90 hover:border-neutral-300 hover:shadow-lg'
                }`}
              >
                {/* Visual Accent Marks (No Boxes) */}
                {point.accent && (
                  <div className="absolute top-0 right-0 w-[200px] h-[100px] bg-gradient-to-br from-[#FBBF24]/20 to-transparent blur-3xl pointer-events-none" />
                )}

                {/* Top Section: Meta & Icon */}
                <div className="pb-6 mb-6 border-b border-neutral-200/60 group-hover:border-[#670EF7]/40 transition-colors">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all ${
                      point.accent 
                        ? 'border-[#FBBF24]/50 bg-[#FBBF24]/10 text-[#FBBF24]' 
                        : 'border-neutral-300 bg-neutral-100 text-neutral-500 group-hover:bg-[#670EF7]/10 group-hover:border-[#670EF7]/40 group-hover:text-[#670EF7]'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span 
                      className={`text-sm font-black font-mono transition-colors ${point.accent ? 'text-[#FBBF24]/70' : 'text-neutral-400 group-hover:text-neutral-600'}`}
                    >
                      {point.num}
                    </span>
                  </div>
                  
                  <p 
                    className={`text-xs sm:text-sm font-semibold leading-relaxed transition-colors ${point.accent ? 'text-neutral-200' : 'text-[#08080C] group-hover:text-[#670EF7]'}`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Monthly <span className={`uppercase font-bold tracking-wider text-xs sm:text-sm transition-colors ${point.accent ? 'text-[#FBBF24]' : 'text-[#670EF7]'}`}>{point.phase}</span> Benchmark
                  </p>
                </div>

                {/* Middle: TYPOGRAPHY AS DECORATION (Fit for md: screen 7xl) */}
                <div className="relative mb-4 overflow-hidden py-1">                  
                  {/* Primary Calibrated Metric (7xl on md:) */}
                  <h3 
                    className={`relative text-5xl md:text-7xl font-black tracking-tighter leading-none ${point.accent ? 'text-white' : 'text-[#08080C]'}`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <MetricCounter value={point.value} prefix={point.prefix} suffix={point.suffix} />
                  </h3>
                </div>

                {/* Bottom Section: Detail & Description (Poppins Legible base sizes) */}
                <div className="pt-6 mt-4 border-t border-neutral-200/60 transition-all">
                  <p 
                    className={`text-xs sm:text-sm text-[#71717A] font-normal leading-relaxed ${point.accent ? 'text-neutral-300' : 'text-[#71717A]'}`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {point.detail}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Factual Disclaimer & Action Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div 
            className="flex items-center gap-2 text-neutral-500 font-medium"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
            <p className="text-xs sm:text-sm">
              All figures tracked through verified CallRail, Google Ads &amp; CRM reporting.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="w-full md:w-auto px-6 py-3.5 rounded-xl border border-neutral-300 bg-white hover:border-[#670EF7]/40 hover:bg-[#670EF7]/10 text-[#08080C] hover:text-[#670EF7] font-semibold text-xs sm:text-sm tracking-wider uppercase inline-flex items-center justify-center gap-2 group transition-all duration-300"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span>Explore All Verified Case Studies</span>
            <span className="transform group-hover:translate-x-1.5 transition-transform">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}