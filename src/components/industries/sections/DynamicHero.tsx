'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeroData } from '@/types/industry';
import heroBgImg from '@/assets/industry-hero.jpg';
import { useOptionalBookingModal } from '@/components/Common/BookingModalContext';

export const DynamicHero = ({ data }: { data: HeroData }) => {
  const booking = useOptionalBookingModal();
  const openBooking = booking?.openBooking;

  const handlePrimaryClick = (e: React.MouseEvent) => {
    if (openBooking && (!data.primaryCtaLink || data.primaryCtaLink === '#booking' || data.primaryCtaLink === '#lead-form' || data.primaryCtaLink.startsWith('#'))) {
      e.preventDefault();
      openBooking();
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center px-6 pt-32 pb-20 md:py-32 bg-slate-950 overflow-hidden font-['Poppins',sans-serif]">
      {/* 1. Background Image with Softening Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <Image
          src={data.backgroundImage || heroBgImg}
          alt={typeof data.title === 'string' ? data.title : 'Industry Hero Background'}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlay so the background image doesn't dominate */}
        <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[1px]" />
      </div>

      {/* 2. Main Glassmorphism Card Container */}
      <div className="relative w-full max-w-6xl rounded-[36px] sm:rounded-[48px] overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.08),inset_0_1px_1px_rgba(255,255,255,0.2)] py-16 md:py-24 px-4 md:px-12 text-center flex flex-col items-center justify-center">

        {/* Concentric subtle orbital rings */}
        <div className="hidden  absolute inset-0 md:flex items-center justify-center pointer-events-none select-none -z-10">
          <div className="w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] rounded-full border border-white/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]" />
          <div className="absolute w-[480px] h-[480px] sm:w-[660px] sm:h-[660px] rounded-full border border-white/10" />
          <div className="absolute w-[660px] h-[660px] sm:w-[900px] sm:h-[900px] rounded-full border border-white/5" />
        </div>

        {/* Bold Clean Heading in White */}
        <h1 className="font-['Inter',sans-serif] text-4xl md:text-7xl font-extrabold tracking-[-0.035em] text-white max-w-4xl mx-auto leading-[1.08] whitespace-pre-line">
          {data.title}{data.highlightedTitle ? <> {data.highlightedTitle}</> : null}
        </h1>

        {/* Subtitle / Description in White */}
        <p className="mt-6 text-sm sm:text-base text-white/85 font-normal max-w-xl mx-auto leading-relaxed">
          {data.description}
        </p>

        {/* Purple Glowing Call-to-Action Group */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {data.primaryCtaLink && !data.primaryCtaLink.startsWith('#') ? (
            <Link
              href={data.primaryCtaLink}
              className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-300 shadow-[0_10px_30px_rgba(147,51,234,0.45)] hover:shadow-[0_14px_38px_rgba(147,51,234,0.65)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              <span>{data.primaryCtaText}</span>
            </Link>
          ) : (
            <button
              type="button"
              onClick={handlePrimaryClick}
              className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-300 shadow-[0_10px_30px_rgba(147,51,234,0.45)] hover:shadow-[0_14px_38px_rgba(147,51,234,0.65)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
            >
              <span>{data.primaryCtaText}</span>
            </button>
          )}

          {data.secondaryCtaText && data.secondaryCtaLink && (
            <Link
              href={data.secondaryCtaLink}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-medium text-sm text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all duration-200"
            >
              <span>{data.secondaryCtaText}</span>
            </Link>
          )}
        </div>

      </div>
    </section>
  );
};