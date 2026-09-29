'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

interface HeroGrowthSystemProps {
  onOpenAudit: () => void;
}

const capabilities = [
  { name: 'Web Design & Development', link: '/services/web-design' },
  { name: 'Ecommerce Development', link: '/ecommerce-websites' },
  { name: 'Google Ads Management', link: '/services/google-ads' },
  { name: 'SEO Services', link: '/services/seo-services' },
  { name: 'Application Development', link: '/services/app-development' },
  { name: 'Automation & Analytics', link: '/analytics-and-cro-services' },
];

export default function HeroGrowthSystem({ onOpenAudit }: HeroGrowthSystemProps) {
  const shouldReduceMotion = useReducedMotion();
  const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };
  const staggerDelay = 0.08;
  const yOffset = shouldReduceMotion ? 0 : 18;

  return (
    <section className="relative w-full bg-[#08080C] text-white overflow-hidden pt-36 sm:pt-40 md:pt-44 pb-20 sm:pb-28 lg:pb-32 border-b border-white/[0.08]">
      
      {/* ============================================================
          RIGHT-CONCENTRATED DIGITAL TRANSFORMATION VISUAL BACKGROUND
          ============================================================ */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none"
        aria-hidden="true"
      >
        {/* Deep Left Vignette to Ensure 100% Typography Readability */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, #08080C 0%, #08080C 42%, rgba(8, 8, 12, 0.85) 55%, rgba(8, 8, 12, 0.35) 75%, transparent 100%)',
          }}
        />

        {/* Top & Bottom Atmospheric Vignettes */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, #08080C 0%, transparent 15%, transparent 85%, #08080C 100%)',
          }}
        />

        {/* Right 55% Digital Transformation Visual Composition */}
        <div className="absolute top-0 right-0 bottom-0 w-full sm:w-[75%] lg:w-[60%] xl:w-[56%] h-full pointer-events-none overflow-hidden">
          
          {/* 1. Cinematic Flowing Optical Light Streams */}
          <div 
            className="absolute inset-0 w-full h-full opacity-55 sm:opacity-70 lg:opacity-85 mix-blend-screen"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 25%, black 60%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 25%, black 60%, black 100%)',
            }}
          >
            <Image
              src="/abstract-flowing-neon-wave-background.jpg"
              alt=""
              fill
              priority
              className="object-cover object-[70%_center] scale-105"
            />
          </div>

          {/* 2. Concentrated Volumetric Violet/Purple Energy Bloom */}
          <div 
            className="absolute top-1/4 right-[10%] sm:right-[15%] w-[450px] sm:w-[600px] lg:w-[750px] h-[450px] sm:h-[600px] lg:h-[750px] rounded-full blur-[130px] sm:blur-[160px] pointer-events-none opacity-60 lg:opacity-80"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(103, 14, 247, 0.42) 0%, rgba(139, 69, 255, 0.18) 45%, rgba(8, 8, 12, 0) 75%)',
            }}
          />

          {/* 3. Restrained Cyan/RGB Micro-Refraction for Depth */}
          <div 
            className="absolute top-1/3 right-[30%] w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full blur-[110px] pointer-events-none opacity-30 sm:opacity-45"
            style={{
              background: 'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(103, 14, 247, 0.08) 50%, transparent 75%)',
            }}
          />

          {/* 4. Fine Connected Architecture Mesh & Nodes (Vector SVG) */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none opacity-45 sm:opacity-65 overflow-visible"
            viewBox="0 0 800 700"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            <defs>
              <linearGradient id="heroStreamConduit1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#670EF7" stopOpacity="0.2" />
                <stop offset="35%" stopColor="#8B45FF" stopOpacity="0.8" />
                <stop offset="75%" stopColor="#38BDF8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.95" />
              </linearGradient>

              <linearGradient id="heroStreamConduit2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8B45FF" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#670EF7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#08080C" stopOpacity="0" />
              </linearGradient>

              <radialGradient id="systemPulseNode" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="30%" stopColor="#D8C5FF" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#8B45FF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#670EF7" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* System Coordinate Grid Lines (Right Side) */}
            <g stroke="rgba(139, 69, 255, 0.16)" strokeWidth="1" strokeDasharray="3 6">
              <line x1="180" y1="140" x2="760" y2="140" />
              <line x1="140" y1="300" x2="780" y2="300" />
              <line x1="170" y1="460" x2="740" y2="460" />
              <line x1="300" y1="80" x2="300" y2="620" />
              <line x1="500" y1="60" x2="500" y2="640" />
              <line x1="680" y1="100" x2="680" y2="600" />
            </g>

            {/* Optical Stream Flow Paths */}
            <path 
              d="M 120 440 C 260 400, 360 230, 500 290 C 620 340, 680 200, 780 230"
              stroke="url(#heroStreamConduit1)"
              strokeWidth="2"
            />
            <path 
              d="M 170 520 C 310 470, 430 370, 560 420 C 660 460, 720 390, 800 430"
              stroke="url(#heroStreamConduit2)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
            />
            <path 
              d="M 210 250 C 330 190, 470 270, 610 190 C 690 140, 750 170, 810 130"
              stroke="url(#heroStreamConduit1)"
              strokeWidth="1.25"
              strokeOpacity="0.5"
            />

            {/* Connected System Nodes */}
            <circle cx="500" cy="290" r="22" fill="url(#systemPulseNode)" opacity="0.8" />
            <circle cx="500" cy="290" r="4.5" fill="#FFFFFF" />
            <circle cx="500" cy="290" r="11" stroke="#8B45FF" strokeWidth="1" strokeOpacity="0.6" />

            <circle cx="360" cy="230" r="16" fill="url(#systemPulseNode)" opacity="0.65" />
            <circle cx="360" cy="230" r="3.5" fill="#D8C5FF" />

            <circle cx="620" cy="340" r="18" fill="url(#systemPulseNode)" opacity="0.7" />
            <circle cx="620" cy="340" r="4" fill="#FFFFFF" />

            <circle cx="560" cy="420" r="14" fill="url(#systemPulseNode)" opacity="0.55" />
            <circle cx="560" cy="420" r="3" fill="#38BDF8" />

            {/* Precision Micro-Labels */}
            <text x="515" y="285" fill="#A1A1AA" fontSize="10" fontFamily="'Poppins', sans-serif" letterSpacing="0.1em" opacity="0.65">SYS.CORE // 01</text>
            <text x="375" y="225" fill="#A1A1AA" fontSize="10" fontFamily="'Poppins', sans-serif" letterSpacing="0.1em" opacity="0.55">DATA.INGEST</text>
            <text x="635" y="335" fill="#A1A1AA" fontSize="10" fontFamily="'Poppins', sans-serif" letterSpacing="0.1em" opacity="0.65">NETWORK.ROAS</text>

            {/* Node-to-Node Interconnect Fine Lines */}
            <line x1="500" y1="290" x2="620" y2="340" stroke="#8B45FF" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="360" y1="230" x2="500" y2="290" stroke="#670EF7" strokeWidth="1" strokeOpacity="0.35" />
            <line x1="500" y1="290" x2="560" y2="420" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 3" />
          </svg>
        </div>

        {/* Global Micro-Grid Coordinate Dots for Structural Texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 sm:opacity-30"
          style={{
            backgroundImage: 'radial-gradient(rgba(139, 69, 255, 0.3) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 75% 50%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 75% 50%, black 20%, transparent 80%)',
          }}
        />
      </div>

      {/* ============================================================
          HERO CONTENT CONTAINER (Left-Anchored 45-50%, 90% Fluid Container)
          ============================================================ */}
      <div className="relative lg:max-w-[90%] mx-auto z-10 px-6">
        <div className="max-w-2xl lg:max-w-[54%] xl:max-w-[50%] flex flex-col items-start">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: yOffset }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#670EF7]/30 bg-[#0C0C14]/80 backdrop-blur-md mb-7 shadow-xs"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#670EF7] shadow-[0_0_8px_#670EF7]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-300">
              WEB DESIGN, DEVELOPMENT & DIGITAL GROWTH
            </span>
          </motion.div>

          {/* Display H1 Heading */}
          <motion.h1
            initial={{ opacity: 0, y: yOffset }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: staggerDelay }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.06] mb-7 drop-shadow-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Build a business people can find, trust and{' '}
            <span className="bg-gradient-to-r from-white via-[#D8C5FF] to-[#8B45FF] bg-clip-text text-transparent">
              choose online.
            </span>
          </motion.h1>

          {/* Supporting Body Copy */}
          <motion.p
            initial={{ opacity: 0, y: yOffset }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: staggerDelay * 2 }}
            className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed mb-9 max-w-2xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Bixeltek designs and develops websites, ecommerce stores, web and mobile applications, and the digital systems behind them. We help businesses attract the right customers through Google Ads management, SEO, Meta Ads and conversion-focused marketing. Whether you are launching a new business or moving an established one forward, we build around the commercial result you need next.
          </motion.p>

          {/* Conversion CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: yOffset }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: staggerDelay * 3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-10 w-full sm:w-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-8 py-4 bg-[#670EF7] hover:bg-[#8B45FF] text-white rounded-full font-bold text-sm sm:text-base shadow-[0_8px_25px_rgba(103,14,247,0.35)] hover:shadow-[0_12px_32px_rgba(139,69,255,0.45)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Discuss Your Project</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link 
              href="/case-studies"
              className="w-full sm:w-auto px-7 py-4 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold text-sm sm:text-base transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4 text-[#8C45FF]" />
            </Link>
          </motion.div>

          {/* Core Capabilities Links */}
          <motion.div
            initial={{ opacity: 0, y: yOffset }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: staggerDelay * 4 }}
            className="w-full pt-6 border-t border-white/[0.08]"
          >
            <p 
              className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2.5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Core Capabilities
            </p>
            <div 
              className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs sm:text-sm text-neutral-400"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {capabilities.map((cap, idx) => (
                <React.Fragment key={cap.name}>
                  <Link
                    href={cap.link}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {cap.name}
                  </Link>
                  {idx < capabilities.length - 1 && (
                    <span className="text-neutral-600 select-none">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}