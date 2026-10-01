'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

import tumblewashImg from '@/assets/bixeltek-team-3.jpeg';
import tumblewashLogo from '@/assets/TumbleWash-Logo.webp';
import guerr from '@/assets/guerr_logo_black.png'
import revitaLogo from '@/assets/Revita-Logo-without-background-02-Colored-Font-01.png';


interface ClientCard {
  id: string;
  client: string;
  logo: StaticImageData | null;
  logoText?: string;
  description: string;
  scale?:any;
  verified: boolean;
}

const clientCards: ClientCard[] = [
  {
    id: 'tumblewash',
    client: 'TumbleWash',
    logo: tumblewashLogo,
    description:
      'Multi-location franchise business looking to build a more efficient digital acquisition system.',
    verified: false,
  },
  {
    id: 'guerr-clothing',
    client: 'Guerr Clothing',
    logo: guerr,  
    scale:1.8,
    description:
      'Direct-to-consumer fashion brand requiring headless architecture, custom drops, and high-conversion checkout.',
    verified: false,
  },
  {
    id: 'revita-dentistry',
    client: 'Revita Dentistry',
    scale:1.2,
    logo: revitaLogo,
    description:
      'Full-service dental clinic focused on scaling high-value patient appointments and local search visibility.',
    verified: false,
  },
  {
    id: 'eazy-bike-repairs',
    client: 'Eazy Bike Repairs',
    logo: null,
    logoText: 'EAZY BIKE REPAIRS',
    description:
      'Doorstep two-wheeler servicing brand scaling customer enquiries through high-intent local search.',
    verified: false,
  },
];

export default function FeaturedCaseStudy() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % clientCards.length);
  }, []);

  const handleSelect = useCallback(
    (index: number) => {
      if (index === currentIndex) return;

      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  // Auto-advance every 6 seconds.
  // Pauses on hover/focus and respects reduced-motion preferences.
  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;

    const timer = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, shouldReduceMotion, handleNext]);

  const activeClient = clientCards[currentIndex];

  const cardContentVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : dir > 0 ? 10 : -10,
    }),

    center: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },

    exit: (dir: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : dir > 0 ? -10 : 10,
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      id="case-studies"
      className="relative overflow-hidden border-b border-neutral-200/90 bg-[#FAF9F6] py-20 text-[#08080C] sm:py-28 lg:py-36"
    >
      {/* Subtle Background Structural Hairlines & Soft Radial Hue */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-100px] top-1/3 h-[500px] w-[500px] rounded-full bg-[#670EF7]/[0.03] blur-[150px]" />

        <div
          className="absolute inset-x-0 inset-y-[-100px] opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(8, 8, 12, 0.08) 1px, transparent 1px)',
            backgroundSize: '80px 100%',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 md:px-12 lg:max-w-[90%] lg:px-16">

        <div className="grid grid-cols-1 items-stretch gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-18">
        <div>
        <div className="mb-12 max-w-3xl sm:mb-14 lg:mb-16">
          {/* Eyebrow */}
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#670EF7]/20 bg-[#670EF7]/10 px-3 py-1"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <Sparkles className="h-3.5 w-3.5 text-[#670EF7]" />

            <span className="text-xs font-semibold uppercase tracking-widest text-[#670EF7] sm:text-sm">
              OUR CASE STUDIES
            </span>
          </div>

          {/* Primary Section Heading */}
          <h2
            className="mb-4 text-3xl font-extrabold leading-[1.08] tracking-tight text-[#08080C] sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Real Work. Real Businesses.
            <br />
            Real Outcomes.
          </h2>

          {/* Section Description */}
          <p
            className="max-w-2xl text-base font-normal leading-relaxed text-neutral-600 sm:text-lg"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Explore a selection of businesses we&apos;ve worked with across
            digital growth, websites, ecommerce, acquisition and connected
            digital systems.
          </p>
        </div>
        <div className="flex flex-col justify-between py-1">
            <div>
              {/* Small Editorial Lead-In
                  NOT another major heading */}
              <p
                className="mb-3 text-base font-semibold leading-snug tracking-tight text-[#08080C] sm:text-lg"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Every business comes with a different challenge.
              </p>

              {/* Supporting Paragraph */}
              <p
                className="mb-8 max-w-2xl text-base font-normal leading-relaxed text-neutral-600 sm:text-lg"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                From acquisition and ecommerce to local search and digital
                infrastructure, we focus on understanding what is holding
                growth back — then build the right solution around it.
              </p>

              {/* Challenge / Solution */}
              <div className="mb-8 grid grid-cols-1 gap-6 border-t border-neutral-200 pt-6 sm:mb-10 sm:gap-8 md:grid-cols-2">
                {/* Challenge */}
                <div>
                  <h3
                    className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#08080C] sm:text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                    THE CHALLENGE
                  </h3>

                  <p
                    className="text-xs font-normal leading-relaxed text-neutral-600 sm:text-sm"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Businesses can have strong products, existing demand or an
                    established customer base — but disconnected marketing,
                    technology and digital experiences can prevent that
                    potential from turning into consistent growth.
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h3
                    className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#08080C] sm:text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#670EF7]" />
                    THE SOLUTION
                  </h3>

                  <p
                    className="text-xs font-normal leading-relaxed text-neutral-600 sm:text-sm"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    We bring strategy, technology and digital growth
                    capabilities together around the specific problem —
                    improving acquisition, strengthening search visibility,
                    rebuilding ecommerce infrastructure or creating better
                    digital systems.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-neutral-200 pt-6">
              <Link
                href="/case-studies"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#08080C] px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-md transition-all duration-300 hover:bg-[#670EF7] hover:shadow-lg hover:shadow-[#670EF7]/20 sm:w-auto sm:text-base"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span>Explore All Case Studies</span>

                <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
          </div>
          <div className="group relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded-3xl border border-neutral-300 shadow-xl sm:min-h-[520px] md:min-h-[580px] lg:min-h-[640px]">
            {/* Background Image */}
            <Image
              src={tumblewashImg}
              alt="Bixeltek team working on digital growth projects"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />

            {/* Photographic Gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08080C]/90 via-[#08080C]/35 to-transparent" />

            {/* =====================================================
                CAROUSEL OVERLAY CARD
            ====================================================== */}
            <div
              className="relative z-10 m-5 rounded-2xl border border-white/60 bg-white/95 p-5 shadow-2xl backdrop-blur-xl sm:m-7 sm:p-6 lg:m-8"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeClient.id}
                  custom={direction}
                  variants={cardContentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {/* Client Logo / Wordmark */}
                  <div className="mb-2.5 flex min-h-[36px] items-center justify-between gap-3">
                    {activeClient.logo ? (
                      <Image
                        src={activeClient.logo}
                        alt={`${activeClient.client} Logo`}
                        width={140}
                        height={40}
                        className="h-7 w-auto object-contain sm:h-8"
                        style={{
                          scale:`${activeClient.scale}`
                        }}
                      />
                    ) : (
                      <span
                        className="text-base font-black uppercase tracking-wider text-[#08080C] sm:text-lg"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {activeClient.logoText}
                      </span>
                    )}

                    {/* Verified Badge */}
                    {activeClient.verified && (
                      <span
                        className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-100/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-800"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Verified Client
                      </span>
                    )}
                  </div>

                  {/* Client Description */}
                  <p
                    className="mb-4 min-h-[36px] text-left text-xs font-normal leading-relaxed text-neutral-600 sm:text-sm"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {activeClient.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* ===================================================
                  SIMPLE PAGINATION ONLY
              ==================================================== */}
              <div className="flex items-center justify-center border-t border-neutral-200/80 pt-4">
                <div
                  className="flex items-center justify-center gap-1.5"
                  role="tablist"
                  aria-label="Case study client cards"
                >
                  {clientCards.map((client, idx) => {
                    const isActive = currentIndex === idx;

                    return (
                      <button
                        key={client.id}
                        type="button"
                        onClick={() => handleSelect(idx)}
                        aria-label={`View ${client.client} case study`}
                        aria-selected={isActive}
                        role="tab"
                        className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#670EF7]/30 focus:ring-offset-2 ${
                          isActive
                            ? 'w-5 bg-[#670EF7]'
                            : 'w-1.5 bg-neutral-300 hover:bg-neutral-400'
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}