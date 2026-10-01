'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Target, Layers3, ArrowUpRight } from 'lucide-react';

interface ProofPoint {
  icon: React.ElementType;
  num: string;
  value: string;
  label: string;
  badgeText: string;
  detail: string;
  phase: string;
  accent?: boolean;
}

const proofPoints: ProofPoint[] = [
  {
    icon: Award,
    num: '01',
    value: '100+',
    label: 'Practices Scaled',
    badgeText: 'PRACTICES SCALED • MULTI-MARKET • ',
    detail: 'Dental practices and businesses supported with digital infrastructure since 2021.',
    phase: 'EXPERIENCE',
    accent: false,
  },
  {
    icon: TrendingUp,
    num: '02',
    value: '$380K',
    label: 'Peak Monthly Record',
    badgeText: 'GROWTH RECORD • MONTHLY REVENUE • ',
    detail: 'Peak monthly sales documented across client acquisition and growth systems.',
    phase: 'GROWTH',
    accent: true,
  },
  {
    icon: Target,
    num: '03',
    value: '2021',
    label: 'Engineered Since',
    badgeText: 'FOUNDED • CONTINUOUS MOMENTUM • ',
    detail: 'Building high-performance conversion funnels, custom web apps, and SEO engines.',
    phase: 'SINCE',
    accent: false,
  },
  {
    icon: Layers3,
    num: '04',
    value: '6+',
    label: 'Core Capabilities',
    badgeText: 'OMNICHANNEL • DIGITAL ECOSYSTEM • ',
    detail: 'Unified digital capabilities across web, marketing, ecommerce, apps, and analytics.',
    phase: 'CAPABILITIES',
    accent: false,
  },
];

export default function ProofPointsBar() {
  return (
    <section className="relative w-full bg-[#070709] text-white py-20 sm:py-24 lg:py-28 overflow-hidden border-b border-white/[0.08]">
      
      {/* Background Volumetric Radiance */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-[#8C45FF]/[0.08]">
  {/* Primary #8C45FF High-Energy Core Radiance */}
  <div 
    className="absolute -top-32 left-1/4 w-[750px] h-[550px] rounded-full blur-[160px] pointer-events-none opacity-45"
    style={{
      background: 'radial-gradient(circle, #8C45FF 0%, rgba(140, 69, 255, 0.45) 40%, rgba(103, 14, 247, 0.15) 70%, transparent 85%)',
    }}
  />

  {/* Secondary Ambient Bloom (Bottom Right Accent) */}
  <div 
    className="absolute -bottom-28 right-10 w-[600px] h-[450px] rounded-full blur-[150px] pointer-events-none opacity-35"
    style={{
      background: 'radial-gradient(circle, rgba(140, 69, 255, 0.7) 0%, rgba(103, 14, 247, 0.25) 50%, transparent 75%)',
    }}
  />

  {/* Subtle Center Violet Beam for Depth */}
  <div 
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] rounded-full blur-[180px] pointer-events-none opacity-25"
    style={{
      background: 'radial-gradient(ellipse at center, #8C45FF 0%, transparent 70%)',
    }}
  />

</div>

      <div className="relative z-10 w-full max-w-[92%] 2xl:max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-4 xl:col-span-5 flex flex-col items-start pr-0 lg:pr-6">
            
            {/* Eyebrow Pill */}
            <div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#670EF7]/40 bg-[#0C0C14]/90 backdrop-blur-md mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#670EF7] shadow-[0_0_8px_#670EF7]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-300">
                PROVEN BENCHMARKS
              </span>
            </div>

            {/* Display Question Headline */}
            <h2 
              className="text-3xl md:text-4xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Why settle for average when you can{' '}
              <span className="bg-gradient-to-r from-white via-[#D8C5FF] to-[#8B45FF] bg-clip-text text-transparent">
                outperform your competitors easily?
              </span>
            </h2>

            {/* Explanatory Body */}
            <p 
              className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-lg mb-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              We engineer commercial grade digital experiences, paid search engines, and conversion funnels that systematically unlock market share for ambitious brands.
            </p>
          </div>
          <div className="lg:col-span-8 xl:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-4 xl:gap-6">
              {proofPoints.map((point, idx) => {
                const Icon = point.icon;
                const pathId = `circlePath-${point.num}`;

                return (
                  <motion.div
                    key={point.num}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group relative flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-white/[0.03]"
                  >
                    {/* Atmospheric Glow on Hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#670EF7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-sm" />

                    {/* Circular Dial Container */}
                    <div className="relative w-28 h-28 sm:w-40 sm:h-40 xl:w-48 xl:h-48 flex items-center justify-center mb-4">
                      
                      {/* Rotating Circular Text SVG */}
                      <svg
                        className="absolute inset-0 w-full h-full animate-[spin_24s_linear_infinite] group-hover:animate-[spin_12s_linear_infinite] transition-all duration-500 select-none pointer-events-none"
                        viewBox="0 0 160 160"
                      >
                        <defs>
                          <path
                            id={pathId}
                            d="M 80, 80 m -58, 0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
                          />
                        </defs>
                        <text
                          className="text-[9.5px] font-semibold uppercase tracking-[0.24em] fill-neutral-400 group-hover:fill-neutral-200 transition-colors"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          <textPath href={`#${pathId}`} startOffset="0%">
                            {point.badgeText}
                          </textPath>
                        </text>
                      </svg>

                      {/* Concentric Subtle Inner Orbit Line */}
                      <div className="absolute inset-2 sm:inset-3 rounded-full border border-white/[0.08] group-hover:border-[#670EF7]/40 transition-colors pointer-events-none" />

                      {/* Center Value Content */}
                      <div className="relative z-10 flex flex-col items-center justify-center">
                        <span 
                          className={`text-2xl md:text-3xl font-extrabold tracking-tight ${
                            point.accent 
                              ? 'bg-gradient-to-r from-[#D8C5FF] via-white to-[#8B45FF] bg-clip-text text-transparent'
                              : 'text-white'
                          }`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {point.value}
                        </span>
                        
                        <div className="flex items-center gap-1 mt-0.5">
                          <Icon className="w-3.5 h-3.5 text-[#8B45FF]" />
                          <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">
                            {point.phase}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Label & Detailed Context Under Circular Badge */}
                    <div className="flex flex-col items-center">
                      <h4 
                        className="text-xs sm:text-sm font-bold text-white mb-1.5 tracking-tight group-hover:text-[#D8C5FF] transition-colors"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {point.label}
                      </h4>
                      <p 
                        className="text-[11px] sm:text-xs text-neutral-400 leading-snug"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {point.detail}
                      </p>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}