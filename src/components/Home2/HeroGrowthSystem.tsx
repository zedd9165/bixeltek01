'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, ChevronRight, Layers } from 'lucide-react';

interface HeroGrowthSystemProps {
  onOpenAudit: () => void;
}

const capabilities = [
  { name: 'SEO & Search', link: '#' },
  { name: 'Google Ads', link: '/services/google-ads' },
  { name: 'Websites development & Ecommerce', link: '#' },
  { name: 'Mobile Applications', link: '#' },
  { name: 'AI & Automation', link: '#' },
  { name: 'Digital Strategy', link: '#' },
  { name: 'Business Consulting', link: '#' },
  { name: 'Graphic Design', link: '#' },
  { name: 'Content Creation', link: '#' },
];

const stages = [
  {
    step: '01',
    badge: 'Understand',
    title: 'Strategy Before Execution',
    desc: 'Understand the business, customers, market and opportunities before deciding what needs to be built.',
  },
  {
    step: '02',
    badge: 'Build',
    title: 'Create the Digital Foundation',
    desc: 'Websites, ecommerce, apps and digital systems that give the business a stronger digital presence.',
  },
  {
    step: '03',
    badge: 'Grow',
    title: 'Turn Digital Into Demand',
    desc: 'SEO, Google Ads, Meta Ads and content that put the business in front of the right customers.',
  },
  {
    step: '04',
    badge: 'Scale',
    title: 'Connect, Optimize & Grow',
    desc: 'Use technology, data and better systems to make growth more efficient and sustainable.',
  },
];

export default function HeroGrowthSystem({ onOpenAudit }: HeroGrowthSystemProps) {
  const shouldReduceMotion = useReducedMotion();
  const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };
  const staggerDelay = 0.08;
  const yOffset = shouldReduceMotion ? 0 : 20;

  const [activeStage, setActiveStage] = useState(2); // Stage 03 highlighted by default

  return (
    <section className="relative w-full bg-[#08080C] text-white overflow-hidden pt-36 sm:pt-40 md:pt-44 pb-20 sm:pb-28 lg:pb-32 border-b border-white/[0.08]">
      {/* Background Architectural Precision Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.22]"
        style={{
          backgroundImage: `
            radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 80px 80px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 100%)'
        }}
      />

      {/* Controlled, Subtle Purple Light Accents (Restrained, not neon/rainbow) */}
      <div className="absolute -top-24 right-1/4 w-[540px] h-[540px] bg-[#670EF7]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-[-160px] w-[460px] h-[460px] bg-[#8B45FF]/[0.06] blur-[160px] rounded-full pointer-events-none" />

      {/* 90% Fluid Container on Large Screens */}
      <div className="relative lg:max-w-[90%] mx-auto z-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          
          {/* LEFT COLUMN: HERO VALUE PROP (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Meta Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: yOffset }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#670EF7]/30 bg-[#0C0C14]/80 backdrop-blur-md mb-8 shadow-sm"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#670EF7]" />
              <span className="text-sm font-semibold tracking-wider uppercase text-[#A1A1AA]">
                BIXELTEK — DIGITAL TRANSFORMATION & GROWTH
              </span>
            </motion.div>

            {/* Display H1 Heading */}
            <motion.h1
              initial={{ opacity: 0, y: yOffset }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: staggerDelay }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.06] mb-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Digital Transformation,{' '}
              <span className="bg-gradient-to-r from-[#670EF7] to-[#8B45FF] bg-clip-text text-transparent">
                Built to Drive Business Growth.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: yOffset }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: staggerDelay * 2 }}
              className="text-base sm:text-lg md:text-xl text-[#A1A1AA] font-normal leading-relaxed mb-10 max-w-2xl"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              We help businesses modernize how they attract customers, sell online and operate digitally — bringing strategy, marketing and technology together to create a digital business that keeps moving forward.
            </motion.p>

            {/* Conversion CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: yOffset }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: staggerDelay * 3 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12 w-full sm:w-auto"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto px-8 py-4 bg-[#670EF7] hover:bg-[#8B45FF] text-white rounded-xl font-semibold text-base shadow-[0_8px_25px_rgba(103,14,247,0.3)] hover:shadow-[0_10px_35px_rgba(139,69,255,0.4)] transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Reach Out to Us</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link 
                href="#case-study"
                className="w-full sm:w-auto px-6 py-4 rounded-xl border border-white/15 hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.06] text-white font-medium text-base transition-all duration-200 text-center inline-flex items-center justify-center gap-2"
              >
                <span>Schedule a 1 on 1 Meeting</span>
                <ArrowUpRight className="w-4 h-4 text-[#A1A1AA]" />
              </Link>
            </motion.div>

            {/* Capability Strip */}
            <motion.div
              initial={{ opacity: 0, y: yOffset }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: staggerDelay * 4 }}
              className="w-full pt-8 border-t border-white/[0.08]"
            >
              <div 
                className="text-sm uppercase tracking-wider text-[#71717A] font-semibold mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                EXPLORE OUR CAPABILITIES
              </div>
              <div className="flex flex-wrap gap-2.5">
                {capabilities.map((cap) => (
                  <Link
                    key={cap.name}
                    href={cap.link}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/10 bg-[#0C0C14]/70 backdrop-blur-sm text-[#A1A1AA] text-sm font-medium hover:border-[#670EF7]/50 hover:bg-[#670EF7]/10 hover:text-white transition-all duration-200"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <span>{cap.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A]" />
                  </Link>
                ))}
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: ARCHITECTURE CONSOLE (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: yOffset }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ ...transition, delay: staggerDelay * 3 }}
            className="lg:col-span-5 relative w-full"
          >
            {/* Outer Glass Card */}
            <div className="relative w-full rounded-3xl border border-white/[0.1] bg-[#0C0C14]/90 backdrop-blur-2xl p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
              
              {/* Subtle top edge accent line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#670EF7] to-transparent opacity-80" />

              {/* Panel Top Bar */}
              <div className="flex items-center justify-between pb-6 mb-7 border-b border-white/[0.08]">
                <div>
                  <div 
                    className="text-sm uppercase tracking-widest text-[#8B45FF] font-semibold flex items-center gap-1.5 mb-1"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <Layers className="w-4 h-4 text-[#670EF7]" />
                    Growth Framework
                  </div>
                  <div 
                    className="text-xl sm:text-2xl font-bold tracking-tight text-white"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    The Growth System
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full border border-[#670EF7]/25 bg-[#670EF7]/10 text-xs text-[#8B45FF] font-mono tracking-wider">
                  System Architecture
                </div>
              </div>

              {/* 4 Interactive Connected Stages */}
              <div className="relative space-y-4">
                {/* Connecting Axis Line */}
                <div className="absolute left-[35px] top-6 bottom-6 w-px bg-white/[0.1]" />

                {stages.map((stage, idx) => {
                  const isSelected = activeStage === idx;
                  return (
                    <div
                      key={stage.step}
                      onClick={() => setActiveStage(idx)}
                      className={`relative flex items-start gap-4 p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        isSelected 
                          ? 'bg-[#141422] border-[#670EF7]/40 shadow-lg shadow-[#670EF7]/5' 
                          : 'bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/5'
                      }`}
                    >
                      {/* Step Circle */}
                      <div 
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 z-10 text-xs font-mono font-bold transition-all duration-200 ${
                          isSelected 
                            ? 'bg-[#670EF7] text-white shadow-[0_0_16px_rgba(103,14,247,0.35)]' 
                            : 'border border-white/10 bg-[#08080C] text-[#71717A]'
                        }`}
                      >
                        {stage.step}
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 
                            className={`text-sm sm:text-base font-bold tracking-tight transition-colors ${
                              isSelected ? 'text-white' : 'text-[#A1A1AA]'
                            }`}
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {stage.title}
                          </h3>
                          <span 
                            className={`text-xs font-mono uppercase px-2 py-0.5 rounded ${
                              isSelected ? 'bg-[#670EF7]/20 text-[#8B45FF]' : 'text-[#71717A] bg-white/[0.03]'
                            }`}
                          >
                            {stage.badge}
                          </span>
                        </div>
                        <p 
                          className="text-sm text-[#A1A1AA] font-normal leading-relaxed"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {stage.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Console Factual Status Area (No invented metrics) */}
              <div 
                className="mt-7 pt-5 border-t border-white/[0.08] flex items-center justify-between"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#A1A1AA] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#670EF7]" />
                  <span>Strategy • Build • Grow • Scale</span>
                </div>
                <div className="text-xs sm:text-sm text-[#71717A] font-medium">
                  Built around measurable business outcomes
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}