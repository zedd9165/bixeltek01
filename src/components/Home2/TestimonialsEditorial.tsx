'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  id: string;
  client: string;
  role: string;
  organization: string;
  sector: string;
  quote: string;
  metricHighlight: {
    primary: string;
    label: string;
  };
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'tumblewash',
    client: 'Operations Leadership',
    role: 'Managing Director',
    organization: 'TumbleWash Franchise',
    sector: 'Multi-Location Service',
    quote: 'Bixeltek transformed our digital customer acquisition. By rebuilding the search journey, landing experience and conversion path, our campaign efficiency and inbound enquiry volume improved dramatically within 90 days.',
    metricHighlight: {
      primary: '89.7%',
      label: 'Acquisition Cost Reduction'
    },
    initials: 'TW'
  },
  {
    id: 'healthcare',
    client: 'Managing Partner',
    role: 'Clinical Operations Lead',
    organization: 'Multi-Location Healthcare Practice',
    sector: 'Dental & Healthcare',
    quote: 'The difference with Bixeltek is they understand unit economics. They don’t report vanity clicks or impressions—they report actual booked patient consultations, show-up rates, and bottom-line revenue attribution.',
    metricHighlight: {
      primary: '210+ Calls',
      label: 'Monthly Booked Patient Inbound'
    },
    initials: 'HP'
  },
  {
    id: 'b2b',
    client: 'Founder & CEO',
    role: 'Executive Director',
    organization: 'Commercial B2B Engineering Group',
    sector: 'Enterprise Services',
    quote: 'Having engineering, modern web speed, and paid media managed under one roof eliminated months of contractor finger-pointing. Our site speed increased threefold and conversion rates doubled across high-intent campaigns.',
    metricHighlight: {
      primary: '< 1.1s',
      label: 'Core Web Vitals & 2x Conv. Rate'
    },
    initials: 'BE'
  }
];

export default function TestimonialsDeck() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const active = testimonials[current];

  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FFFFFF] text-[#08080C] border-b border-neutral-200/90 overflow-hidden">
      
      {/* Subtle Restrained Ambient Purple Glow Behind Deck */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#670EF7]/[0.035] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative w-full lg:max-w-[90%] mx-auto px-6 md:px-12 lg:px-16 z-10">
        
        {/* Centered Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#670EF7]/30 bg-[#670EF7]/10 text-[#670EF7] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>CLIENT PERSPECTIVES</span>
          </div>

          <h3 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#08080C] tracking-tight leading-[1.12] mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Built Around Their Business.{' '}
            <span className="bg-gradient-to-r from-[#670EF7] to-[#8B45FF] bg-clip-text text-transparent">
              Proven Through Real Work.
            </span>
          </h3>

          <p 
            className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Hear from the businesses we&apos;ve worked with and the teams who trusted us
            to improve their digital presence, systems, and growth.
          </p>
        </div>

        {/* --- STACKED CARD DECK WITH SIDE ARROWS --- */}
        <div className="relative max-w-4xl mx-auto px-2 md:px-12 md:px-16">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous Testimonial"
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white border border-neutral-200/90 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_25px_rgba(103,14,247,0.15)] hover:border-[#670EF7]/50 text-neutral-700 hover:text-[#670EF7] flex items-center justify-center transition-all duration-200 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => paginate(1)}
            aria-label="Next Testimonial"
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-13 md:h-13 rounded-full bg-white border border-neutral-200/90 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_25px_rgba(103,14,247,0.15)] hover:border-[#670EF7]/50 text-neutral-700 hover:text-[#670EF7] flex items-center justify-center transition-all duration-200 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Deck Container with Layered Background Cards */}
          <div className="relative min-h-[360px] md:min-h-[320px] flex items-center justify-center">
            
            {/* Background Deck Card 2 (Deepest) */}
            <div 
              className="absolute inset-x-8 md:inset-x-12 -top-4 bottom-4 rounded-3xl bg-neutral-100/70 border border-neutral-200/60 scale-[0.92] opacity-50 pointer-events-none transform -rotate-1 shadow-xs" 
            />

            {/* Background Deck Card 1 (Middle Layer) */}
            <div 
              className="absolute inset-x-4 md:inset-x-6 -top-2 bottom-2 rounded-3xl bg-neutral-50 border border-neutral-200/80 scale-[0.96] opacity-80 pointer-events-none transform rotate-1 shadow-sm" 
            />

            {/* Active Foreground Card */}
            <div className="relative w-full z-20">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={active.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full rounded-3xl border border-neutral-200/90 bg-white p-7 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden"
                >
                  {/* Subtle Top Purple Accent */}
                  <div className="absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#670EF7] to-transparent opacity-80" />

                  {/* Header Row: Sector Tag + Metric Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-neutral-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#670EF7]" />
                      <span 
                        className="text-xs font-semibold uppercase tracking-wider text-neutral-500"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {active.sector}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#670EF7]/10 border border-[#670EF7]/20">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#670EF7]" />
                      <span 
                        className="text-xs font-bold text-[#670EF7]"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {active.metricHighlight.primary} — {active.metricHighlight.label}
                      </span>
                    </div>
                  </div>

                  {/* Quote Body */}
                  <blockquote 
                    className="text-base sm:text-lg md:text-xl text-[#08080C] font-normal leading-relaxed mb-8 italic"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    &ldquo;{active.quote}&rdquo;
                  </blockquote>

                  {/* Footer Attribution */}
                  <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-[#670EF7]/10 border border-[#670EF7]/20 flex items-center justify-center text-[#670EF7] font-bold text-sm shrink-0">
                        {active.initials}
                      </div>
                      <div>
                        <div 
                          className="text-sm font-bold text-[#08080C]"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {active.client}
                        </div>
                        <div 
                          className="text-xs text-neutral-500 font-normal"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {active.role} · {active.organization}
                        </div>
                      </div>
                    </div>

                    {/* Deck Index Indicator */}
                    <div 
                      className="text-xs font-mono font-bold text-neutral-400"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {current + 1} / {testimonials.length}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}