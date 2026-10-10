'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  MousePointerClick,
  Layers,
  LineChart,
  Sparkles,
} from 'lucide-react';
import {
  beyondTheClickContent,
  BeyondTheClickData,
} from '@/data/googleAdsPageData';

const stepIcons: Record<string, React.ElementType> = {
  '01': Search,
  '02': MousePointerClick,
  '03': Layers,
  '04': LineChart,
};

interface BeyondTheClickProps {
  data?: BeyondTheClickData;
}

export default function BeyondTheClick({
  data = beyondTheClickContent,
}: BeyondTheClickProps) {
  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-black text-gray-100 overflow-hidden selection:bg-blue-600 selection:text-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-10 -left-20 w-[450px] h-[450px] bg-blue-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative w-full lg:max-w-[92%] xl:max-w-7xl mx-auto px-6 md:px-12 z-10">
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/20 text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 font-poppins">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{data.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 font-inter">
            {data.headingPart1}
            <span className="text-blue-500">{data.headingHighlight}</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-3xl mx-auto font-poppins">
            {data.description}
          </p>
        </div>

        <div className="relative hidden md:block w-full">
          <div className="absolute top-[180px] left-0 right-0 h-[250px] pointer-events-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1200 250"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="blueWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.25" />
                  <stop offset="25%" stopColor="#3b82f6" stopOpacity="0.9" />
                  <stop offset="75%" stopColor="#3b82f6" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.25" />
                </linearGradient>

                <filter id="blueWaveGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                d="M 10 170 C 60 175, 95 190, 150 190 C 240 190, 360 60, 450 60 C 540 60, 660 190, 750 190 C 840 190, 960 60, 1050 60 C 1105 60, 1145 75, 1190 85"
                stroke="url(#blueWaveGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#blueWaveGlow)"
              />
            </svg>
          </div>

          {/* 4 Steps Columns */}
          <div className="relative z-10 grid grid-cols-4 gap-6 lg:gap-8 items-start">
            {data.steps.map((step, idx) => {
              const Icon = stepIcons[step.num] || Search;
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
                          <h3 className="text-lg lg:text-xl font-bold font-inter text-white tracking-tight leading-snug">
                            {step.title}
                          </h3>
                          <span className="text-4xl lg:text-5xl font-black font-inter text-neutral-800 select-none leading-none -mt-1">
                            {step.num}
                          </span>
                        </div>
                        <p className="text-xs lg:text-sm text-gray-300 leading-relaxed font-normal font-poppins">
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
                      transition={{
                        duration: 0.45,
                        delay: idx * 0.15 + 0.2,
                        type: 'spring',
                      }}
                      className={`absolute z-20 ${
                        isTop ? 'bottom-[25px]' : 'top-[35px]'
                      }`}
                    >
                      <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-[0_12px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:border-blue-500/70 flex items-center justify-center text-blue-500 hover:text-blue-400 transition-all duration-300 group cursor-default">
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
                          <h3 className="text-lg lg:text-xl font-bold font-inter text-white tracking-tight leading-snug">
                            {step.title}
                          </h3>
                          <span className="text-4xl lg:text-5xl font-black font-inter text-neutral-800 select-none leading-none -mt-1">
                            {step.num}
                          </span>
                        </div>
                        <p className="text-xs lg:text-sm text-gray-300 leading-relaxed font-normal font-poppins">
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
        <div className="relative md:hidden flex flex-col gap-12 pl-6 border-l-2 border-blue-500/30 ml-4 my-8">
          {data.steps.map((step, idx) => {
            const Icon = stepIcons[step.num] || Search;

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
                <div className="absolute -left-[45px] top-0 w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center justify-center text-blue-500">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold font-inter text-white">
                    {step.title}
                  </h3>
                  <span className="text-4xl font-black font-inter text-neutral-800 select-none leading-none">
                    {step.num}
                  </span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed font-normal font-poppins">
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