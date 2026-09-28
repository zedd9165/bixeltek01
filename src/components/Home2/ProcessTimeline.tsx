'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, Compass, Rocket, BarChart3, Sparkles, ArrowRight } from 'lucide-react';

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  position: 'top' | 'bottom';
}

const steps: ProcessStep[] = [
  {
    num: '1',
    title: 'Understand',
    desc: 'We learn how your business works, who your customers are, where you are today, and what you want to achieve next.',
    icon: Search,
    position: 'top',
  },
  {
    num: '2',
    title: 'Plan',
    desc: 'We turn what we learn into a clear roadmap — identifying what needs to be built, improved, connected, or changed first.',
    icon: Compass,
    position: 'bottom',
  },
  {
    num: '3',
    title: 'Build',
    desc: 'We bring the plan to life across the right digital touchpoints, from websites and ecommerce to applications, marketing systems, and automation.',
    icon: Rocket,
    position: 'top',
  },
  {
    num: '4',
    title: 'Improve',
    desc: 'We measure what is happening, learn from real-world data, and continuously improve the systems so they become more effective over time.',
    icon: BarChart3,
    position: 'bottom',
  },
];

export default function CleanProcessCurve() {
  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#FFFFFF] text-[#08080C] border-b border-neutral-200/90 overflow-hidden">
      
      {/* Subtle Restrained Ambient Light Glow Behind Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#670EF7]/[0.03] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative w-full lg:max-w-[90%] mx-auto px-6 md:px-12 lg:px-16 z-10">
        
        {/* Centered Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#670EF7]/30 bg-[#670EF7]/10 text-[#670EF7] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>How We Work</span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#08080C] tracking-tight leading-[1.12] mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
             From First Conversation to Continuous Improvement.
          </h2>

          <p 
            className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl mx-auto mb-8"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Every engagement starts with understanding the business and ends with
            building something that can keep improving as the business grows.
          </p>
        </div>

        {/* --- DESKTOP / TABLET CURVED WAVE PIPELINE (md & lg) --- */}
        <div className="relative hidden md:block w-full">
          
          {/* 
            MATH BREAKDOWN:
            4 Columns centered at:
            - Col 1: 12.5% (X = 150) -> Valley (Y = 190) -> Icon at Bottom, Text at Top
            - Col 2: 37.5% (X = 450) -> Crest  (Y = 60)  -> Icon at Top, Text at Bottom
            - Col 3: 62.5% (X = 750) -> Valley (Y = 190) -> Icon at Bottom, Text at Top
            - Col 4: 87.5% (X = 1050)-> Crest  (Y = 60)  -> Icon at Top, Text at Bottom
          */}
          <div className="absolute top-[180px] left-0 right-0 h-[250px] pointer-events-none z-0">
            <svg 
              className="w-full h-full overflow-visible" 
              viewBox="0 0 1200 250" 
              fill="none" 
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="purpleWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B45FF" stopOpacity="0.3" />
                  <stop offset="25%" stopColor="#670EF7" stopOpacity="0.85" />
                  <stop offset="75%" stopColor="#670EF7" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#8B45FF" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                d="M 10 170 C 60 175, 95 190, 150 190 C 240 190, 360 60, 450 60 C 540 60, 660 190, 750 190 C 840 190, 960 60, 1050 60 C 1105 60, 1145 75, 1190 85"
                stroke="url(#purpleWaveGradient)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* 4 Steps Columns: Perfectly centered at 12.5%, 37.5%, 62.5%, 87.5% */}
          <div className="relative z-10 grid grid-cols-4 gap-6 lg:gap-8 items-start">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isTop = step.position === 'top';

              return (
                <div key={step.num} className="flex flex-col items-center">
                  
                  {/* TOP ROW (Height 170px) - Text for Steps 1 & 3 */}
                  <div className="w-full h-[170px] flex flex-col justify-end pb-4">
                    {isTop && (
                      <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="w-full"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 
                            className="text-lg lg:text-2xl font-extrabold text-[#08080C] tracking-tight leading-snug"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {step.title}
                          </h3>
                          <span 
                            className="text-5xl lg:text-6xl font-black text-neutral-200 select-none leading-none -mt-2"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {step.num}
                          </span>
                        </div>
                        <p 
                          className="text-xs lg:text-lg text-neutral-600 leading-relaxed font-normal"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {step.desc}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* MIDDLE ROW (Height 250px) - Curve & Node Area */}
                  <div className="w-full h-[250px] relative flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: idx * 0.15 + 0.2, type: 'spring' }}
                      className={`absolute z-20 ${
                        isTop ? 'bottom-[25px]' : 'top-[35px]'
                      }`}
                    >
                      <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white border border-neutral-200/90 shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_36px_rgba(103,14,247,0.25)] hover:border-[#670EF7]/60 flex items-center justify-center text-[#670EF7] hover:text-[#8B45FF] transition-all duration-300 group cursor-default">
                        <Icon className="w-6 h-6 lg:w-7 lg:h-7 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </motion.div>
                  </div>

                  {/* BOTTOM ROW (Height 170px) - Text for Steps 2 & 4 */}
                  <div className="w-full h-[170px] flex flex-col justify-start pt-4">
                    {!isTop && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="w-full"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 
                            className="text-lg lg:text-2xl font-extrabold text-[#08080C] tracking-tight leading-snug"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {step.title}
                          </h3>
                          <span 
                            className="text-5xl lg:text-6xl font-black text-neutral-200 select-none leading-none -mt-2"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {step.num}
                          </span>
                        </div>
                        <p 
                          className="text-xs lg:text-lg text-neutral-600 leading-relaxed font-normal"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {step.desc}
                        </p>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* --- MOBILE VERTICAL STEP PIPELINE (< md:) --- */}
        <div className="relative md:hidden flex flex-col gap-12 pl-6 border-l-2 border-[#670EF7]/30 ml-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col"
              >
                {/* Floating Node on Left Border Axis */}
                <div className="absolute -left-[45px] top-0 w-10 h-10 rounded-xl bg-white border border-neutral-200 shadow-md flex items-center justify-center text-[#670EF7]">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 
                    className="text-lg font-bold text-[#08080C]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <span 
                    className="text-4xl font-black text-neutral-200 select-none leading-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {step.num}
                  </span>
                </div>

                <p 
                  className="text-sm text-neutral-600 leading-relaxed font-normal"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}