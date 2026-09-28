'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

const stages = [
  {
    num: '01',
    phase: 'BUILD',
    title: 'Digital Foundation',
    desc: 'Build the digital presence and experiences your business needs to compete and grow online.',
    items: ['Websites & Ecommerce', 'Digital Products', 'Mobile Applications', 'User Experience'],
    isPurple: false,
  },
  {
    num: '02',
    phase: 'REACH',
    title: 'Get Discovered',
    desc: 'Put your business in front of the right people through the channels that matter.',
    items: ['SEO', 'Google & Meta Ads', 'Local Search', 'Content & Digital Presence'],
    isPurple: true, // Reference style featured purple card
  },
  {
    num: '03',
    phase: 'CONNECT',
    title: 'Make Everything Work Together',
    desc: 'Connect your website, marketing, customer journeys and business operations into one connected system.',
    items: ['CRM & Lead Management', 'Automation', 'Integrations', 'Customer Workflows'],
    isPurple: false,
  },
  {
    num: '04',
    phase: 'GROW',
    title: 'Improve & Scale',
    desc: 'Use data, technology and continuous improvement to turn digital investment into sustainable business growth.',
    items: ['Analytics & Insights', 'Conversion Optimization', 'AI & Automation', 'Continuous Improvement'],
    isPurple: true,
  },
];

export default function GrowthJourney() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full py-20 sm:py-24 md:py-28 lg:py-36 bg-[#FFFFFF] text-[#08080C] overflow-hidden border-b border-neutral-200">
  
      {/* Standard Section Container */}
      <div className="relative w-full lg:max-w-[90%] mx-auto px-6 md:px-12 lg:px-16 z-10">
  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center pb-16 md:pb-24 border-b border-neutral-200">
          
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
                FROM TRADITIONAL TO DIGITAL
              </span>
            </div>

            <h2 
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-[#08080C] leading-[1.1] mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Your business has already grown.{' '}
              <span className="bg-gradient-to-r from-[#670EF7] to-[#8B45FF] bg-clip-text text-transparent">
                Now your digital presence needs to grow with it.
              </span>
            </h2>

            <div 
              className="space-y-4 text-base sm:text-lg text-[#71717A] font-normal leading-relaxed mb-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <p>
                Many businesses have strong products, loyal customers, and years of experience — but their digital presence, technology, and growth systems haven&apos;t kept up.
              </p>
              <p>
                Bixeltek helps businesses close that gap. We bring strategy, digital experiences, marketing, and technology together to build a stronger foundation for growth.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-200 flex items-center gap-3 w-full">
              <span className="w-8 h-[2px] bg-[#670EF7]" />
              <p
                className="text-sm font-semibold uppercase tracking-wider text-[#08080C]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                From digital presence to connected business growth.
              </p>
            </div>
          </div>

        </div>

        {/* PART 2: THE 4 CONNECTED GROWTH STAGES */}
        <div className="pt-16 md:pt-20 lg:pt-28">
          
          <div className="flex flex-col md:flex-row md:items-center justify-center mb-12 md:mb-16 gap-6 text-center">
            <div>
              <span 
                className="text-xs uppercase tracking-[0.2em] text-[#8B45FF] font-bold block mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                HOW WE HELP BUSINESSES MOVE FORWARD
              </span>
              <h3 
                className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#08080C] tracking-tight"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Four parts of a stronger digital business
              </h3>
            </div>
          </div>

          {/* 4 CARDS WITH ALTERNATING PURPLE/WHITE COLORING (NO TRACKER BAR) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-stretch">
            {stages.map((stage, idx) => {
              const isPurple = stage.isPurple;

              return (
                <div
                  key={stage.num}
                  className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl ${
                    isPurple
                      ? 'bg-[#670EF7] text-white border border-white shadow-[0_20px_45px_rgba(103,14,247,0.25)]'
                      : 'bg-[#FFFFFF] text-[#08080C] border border-[#670EF7]/80 hover:border-[#670EF7]'
                  }`}
                >
                  <div>
                    {/* Top Row: Phase Tag & Number */}
                    <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.15] border-neutral-200/80">
                      <span 
                        className={`text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full font-bold ${
                          isPurple 
                            ? 'bg-white/15 text-white border border-white/20' 
                            : 'bg-neutral-100 text-neutral-600 border border-neutral-200/60'
                        }`}
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {stage.phase}
                      </span>

                      <span 
                        className={`text-4xl sm:text-5xl font-black font-mono tracking-tight ${
                          isPurple ? 'text-white/80' : 'text-neutral-300'
                        }`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {stage.num}
                      </span>
                    </div>

                    {/* Stage Title */}
                    <h4 
                      className={`text-xl sm:text-2xl font-black tracking-tight mb-2 uppercase ${
                        isPurple ? 'text-white' : 'text-[#08080C]'
                      }`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {stage.title}
                    </h4>


                    <p 
                      className={`text-sm sm:text-base leading-relaxed mb-6 font-normal ${
                        isPurple ? 'text-white/80' : 'text-[#71717A]'
                      }`}
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {stage.desc}
                    </p>
                  </div>

                  <div>
                    {/* Deliverable Bullet Points */}
                    <div className={`pt-6 border-t space-y-3 mb-8 ${
                      isPurple ? 'border-white/15' : 'border-neutral-100'
                    }`}>
                      {stage.items.map((item) => (
                        <div 
                          key={item} 
                          className={`flex items-start gap-2.5 text-xs sm:text-sm font-medium ${
                            isPurple ? 'text-white/90' : 'text-neutral-700'
                          }`}
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          <Check className={`w-4 h-4 mt-0.5 shrink-0 ${
                            isPurple ? 'text-white' : 'text-[#670EF7]'
                          }`} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
} 