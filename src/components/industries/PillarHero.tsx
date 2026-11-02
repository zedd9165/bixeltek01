'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import heroBgImg from '@/assets/industry-hero.jpg';
import { useOptionalBookingModal } from '@/components/Common/BookingModalContext';
import { industryCategoryGroups } from '@/data/industries/categories';
import { ArrowDownRight, ArrowUpRight, TrendingUp } from 'lucide-react';

const stats = [
  { value: '28+', label: 'Specialized verticals' },
  { value: '3.4x', label: 'Avg qualified lead lift' },
  { value: '100%', label: 'Direct asset ownership' },
];

const Sparkle = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M12 0C12.8 7 17 11.2 24 12C17 12.8 12.8 17 12 24C11.2 17 7 12.8 0 12C7 11.2 11.2 7 12 0Z" />
  </svg>
);

export const PillarHero = () => {
  const booking = useOptionalBookingModal();
  const openBooking = booking?.openBooking;

  const handleBookingClick = (e: React.MouseEvent) => {
    if (openBooking) {
      e.preventDefault();
      openBooking();
    }
  };

  // Pick one real industry from three different categories for the collage
  const pickFrom = (gi: number) => {
    const g = industryCategoryGroups[gi % Math.max(industryCategoryGroups.length, 1)];
    return g?.industries[0];
  };
  const tiles = [pickFrom(0), pickFrom(1), pickFrom(2)];

  const Photo = ({
    idx,
    className,
    tint = '',
    chipClass = 'left-3 bottom-3',
  }: {
    idx: number;
    className: string;
    tint?: string;
    chipClass?: string;
  }) => {
    const item = tiles[idx];
    const body = (
      <>
        <Image
          src={item?.image ?? heroBgImg}
          alt={item ? `${item.name} marketing` : 'Industry marketing'}
          fill
          priority
          sizes="(max-width: 1024px) 60vw, 28vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
        {item && (
          <span
            className={`absolute ${chipClass} inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 dark:bg-slate-900/90 backdrop-blur-md text-[10px] md:text-[11px] font-semibold text-slate-900 dark:text-white shadow-sm border border-black/5 dark:border-white/10`}
          >
            <span className="truncate max-w-[130px] md:max-w-[160px]">{item.name}</span>
            <ArrowUpRight className="w-3 h-3 text-purple-600 dark:text-purple-400 flex-shrink-0" />
          </span>
        )}
      </>
    );
    const cls = `group absolute overflow-hidden ${tint} ${className}`;
    return item ? (
      <Link href={item.link} className={cls}>
        {body}
      </Link>
    ) : (
      <div className={cls}>{body}</div>
    );
  };

  return (
    <section className="relative font-['Poppins',sans-serif] bg-gradient-to-b from-purple-100 via-indigo-50/50 to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 px-3 md:px-6 pt-32 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      <style>{`
        @keyframes bx-bob { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-6px);} }
        @keyframes bx-twinkle { 0%,100% { transform: scale(1) rotate(0); opacity: 1;} 50% { transform: scale(.75) rotate(15deg); opacity: .7;} }
        @keyframes bx-up { from { opacity: 0; transform: translateY(18px);} to { opacity: 1; transform: none;} }
        .bx-bob { animation: bx-bob 5s ease-in-out infinite; }
        .bx-twinkle { animation: bx-twinkle 3.5s ease-in-out infinite; }
        .bx-up { animation: bx-up .8s cubic-bezier(.2,.8,.2,1) both; }
        @media (prefers-reduced-motion: reduce) { .bx-bob,.bx-twinkle,.bx-up { animation: none !important; } }
      `}</style>

      {/* Main Glass/White Card */}
      <div className="relative max-w-7xl mx-auto rounded-[32px] md:rounded-[44px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-[0_20px_70px_-20px_rgba(76,29,149,0.22)] px-6 md:px-10 lg:px-14 py-10 md:py-14 lg:py-16">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-10 items-center">
          
          {/* ---------- Left Copy Column ---------- */}
          <div className="bx-up">
            <h1 className="font-['Inter',sans-serif] text-[40px] md:text-5xl xl:text-[62px] font-extrabold tracking-[-0.035em] text-slate-900 dark:text-white leading-[1.05]">
              Digital growth built for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600">
                your industry
              </span>
            </h1>

            <p className="mt-5 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
              Bixeltek builds search authority, conversion funnels and revenue tracking for 28+ specialized industries, tailored to how your customers actually decide.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleBookingClick}
                className="px-7 py-3.5 rounded-full text-sm font-semibold text-purple-950 dark:text-purple-100 bg-purple-200 hover:bg-purple-300 dark:bg-purple-600 dark:hover:bg-purple-500 transition-colors shadow-sm cursor-pointer"
              >
                Book a Consultation
              </button>
              <Link
                href="#directory"
                className="px-7 py-3.5 rounded-full text-sm font-semibold text-slate-900 dark:text-white border border-slate-900 dark:border-slate-400 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors"
              >
                Browse Industries
              </Link>
            </div>

            {/* Stats Row */}
            <div className="mt-10 md:mt-14 flex items-center">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col ${
                    i > 0 ? 'pl-4 md:pl-7 border-l border-slate-200 dark:border-slate-800' : ''
                  } ${i < stats.length - 1 ? 'pr-4 md:pr-7' : ''}`}
                >
                  <p className="font-['Inter',sans-serif] text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-[11px] md:text-xs text-slate-500 dark:text-slate-400 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- Right Collage Column ---------- */}
          <div className="relative mx-auto w-full max-w-[530px] aspect-[1.14] bx-up" style={{ animationDelay: '120ms' }}>
            
            {/* Photo A, Top-Left (Dental Clinics) */}
            <Photo
              idx={0}
              className="left-[3%] top-[4%] w-[42%] h-[50%] rounded-[24px] md:rounded-[32px] shadow-md z-[1]"
              chipClass="left-3 bottom-3"
            />

            {/* Floating Arrow Badge on Photo A */}
            <div className="bx-bob absolute left-[34%] -top-[1%] w-10 h-10 md:w-12 md:h-12 rounded-full bg-sky-200 dark:bg-sky-900/90 border-4 md:border-[5px] border-white dark:border-slate-900 flex items-center justify-center text-sky-700 dark:text-sky-200 shadow-md z-10">
              <ArrowDownRight className="w-4 h-4 md:w-5 md:h-5" />
            </div>

            {/* Photo B, Right (Roofing Contractors) */}
            <Photo
              idx={1}
              className="right-0 md:right-[2%] md:top-[18%] w-[45%] h-[50%] rounded-[24px] md:rounded-[32px] shadow-md z-[1]"
              chipClass="right-3 bottom-3"
            />

            {/* Photo C, Bottom-Left/Center (Real Estate) - Cleanly layered */}
            <Photo
              idx={2}
              className="left-[2%] bottom-[2%] w-[90%] md:w-[58%] h-[40%] rounded-[24px] md:rounded-[32px] shadow-xl z-[2] border-2 border-white/60 dark:border-slate-800"
              chipClass="left-3 bottom-3"
            />

            {/* Replaced Audi Logo with High-Converting Growth Metric Pill */}
            <div className="bx-bob absolute left-[40%] md:left-[42%] top-[50%] z-20 flex items-center gap-1.5 px-3.5 py-1.5 md:py-2 rounded-full bg-purple-200 dark:bg-purple-900/95 backdrop-blur-md border-4 md:border-[5px] border-white dark:border-slate-900 shadow-lg text-purple-950 dark:text-purple-100">
              <TrendingUp className="w-3.5 h-3.5 text-purple-700 dark:text-purple-300 flex-shrink-0" />
              <span className="text-[10px] md:text-xs font-bold tracking-tight whitespace-nowrap">
                3.4x Lead Lift
              </span>
            </div>

            {/* Decorative Floating Sparkles & Dots */}
            <Sparkle className="bx-twinkle absolute -left-2 top-[34%] w-5 h-5 text-indigo-400" />
            <Sparkle className="bx-twinkle absolute right-3 bottom-[20%] w-5 h-5 text-purple-400" />
            <span className="absolute right-[8%] top-[8%] w-3 h-3 rounded-full bg-purple-300 dark:bg-purple-700" />
            <span className="absolute right-[6%] bottom-[5%] w-4 h-4 rounded-full bg-sky-200 dark:bg-sky-700" />
          </div>

        </div>
      </div>
    </section>
  );
};
