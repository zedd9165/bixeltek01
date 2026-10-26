'use client';

import React, { useEffect, useRef, useState } from 'react';
import { IndustryPageData } from '@/types/industry';
import { useOptionalBookingModal } from '@/components/Common/BookingModalContext';

/* -------------------------------------------------------------------------- */
/*  Optional extras: pass only what you need, everything else is skipped.     */
/*  Existing fields (badge, headline, subheadline, items[].feature,           */
/*  industryStandard, ourApproach) work exactly as before.                    */
/* -------------------------------------------------------------------------- */
interface ComparisonItemExtras {
  metric?: string; // small proof chip on the "ours" side, e.g. "3x"
  metricLabel?: string;
}

interface ComparisonExtras {
  featureLabel?: string; // tiny label under the VS badge (hidden if not passed)
  leftLabel?: string; // default: "Traditional Agencies"
  rightLabel?: string; // default: "Our Industry Engine"
  cta?: { label: string; href?: string }; // button under the face-off
}

type Base = NonNullable<IndustryPageData['comparison']>;
type ComparisonItem = Base['items'][number] & ComparisonItemExtras;
type ComparisonData = Omit<Base, 'items'> & ComparisonExtras & { items: ComparisonItem[] };

const useInView = (threshold = 0.25) => {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, seen };
};

const GRID = 'md:grid-cols-[1fr_var(--mid)_1fr]';

/* -------------------------------------------------------------------------- */
/*  One face-off row: [ old way ] [ feature ] [ our way ]                      */
/* -------------------------------------------------------------------------- */
const Row = ({
  item,
  idx,
  leftLabel,
  rightLabel,
}: {
  item: ComparisonItem;
  idx: number;
  leftLabel: string;
  rightLabel: string;
}) => {
  const { ref, seen } = useInView();
  const delay = `${Math.min(idx, 6) * 80}ms`;
  const n = String(idx + 1).padStart(2, '0');

  return (
    <div ref={ref} className={`group relative z-10 grid gap-3 ${GRID} md:gap-0`}>
      {/* OLD WAY, slides in from the left */}
      <div
        style={{ transitionDelay: delay }}
        className={`rounded-2xl bg-slate-100 p-4 transition-all duration-700 md:rounded-none md:border-t md:border-slate-300/60 md:bg-transparent md:px-8 md:py-6 md:group-first:border-t-0 md:group-hover:bg-black/[0.035] ${
          seen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
        }`}
      >
        <span className="mb-2 block font-poppins text-[10px] font-bold uppercase tracking-[0.16em] text-black/60 md:hidden">
          {leftLabel}
        </span>
        {item.industryStandard && (
          <div className="flex flex-row-reverse items-start gap-3 md:h-full md:flex-row md:items-center md:justify-start">
            <span
              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-[11px] font-black text-red-400 ring-1 ring-red-100 transition-transform duration-500 md:mt-0 ${
                seen ? 'scale-100' : 'scale-0'
              }`}
              style={{ transitionDelay: `calc(${delay} + 400ms)` }}
            >
              ✕
            </span>
            <p
              className="min-w-0 text-sm leading-relaxed text-black/60 duration-700 md:text-[16px]"
              style={{
                textDecorationColor: seen ? 'rgba(248,113,113,0.55)' : 'transparent',
                transitionDelay: `calc(${delay} + 600ms)`,
              }}
            >
              {item.industryStandard}
            </p>
          </div>
        )}
      </div>

      {/* FEATURE, the thing being compared, sits on the spine */}
      <div className="order-first flex items-center justify-center md:order-none md:px-3">
        <div
          style={{ transitionDelay: delay }}
          className={`relative z-10 flex max-w-full items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center shadow-[0_14px_34px_-14px_rgba(15,23,42,0.45)] transition-all duration-700 group-hover:scale-105 group-hover:border-violet-300 group-hover:shadow-[0_18px_40px_-12px_rgba(124,58,237,0.5)] ${
            seen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}
        >
          <span className="font-poppins text-[11px] font-bold text-violet-600">{n}</span>
          {item.feature && (
            <h3 className="font-['Inter',sans-serif] text-[13px] font-bold leading-snug tracking-[-0.01em] text-slate-900 sm:text-sm">
              {item.feature}
            </h3>
          )}
        </div>
      </div>

      {/* VS divider, mobile only */}
      <div className="relative z-10 -my-1 flex justify-center md:hidden">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-[10px] font-black text-white ring-4 ring-white">
          VS
        </span>
      </div>

      {/* OUR WAY, slides in from the right */}
      <div
        style={{ transitionDelay: delay }}
        className={`rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 p-4 text-white shadow-lg shadow-violet-500/20 transition-all duration-700 md:rounded-none md:border-t md:border-white/15 md:bg-none md:bg-transparent md:px-8 md:py-6 md:shadow-none md:group-first:border-t-0 md:group-hover:bg-white/10 ${
          seen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
        }`}
      >
        <span className="mb-2 block font-poppins text-[10px] font-bold uppercase tracking-[0.16em] text-violet-200 md:hidden">
          {rightLabel}
        </span>
        {item.ourApproach && (
          <div className="flex items-start gap-3 md:h-full md:items-center">
            <span
              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-black text-violet-700 shadow-[0_0_0_4px_rgba(255,255,255,0.2)] transition-transform duration-500 md:mt-0 ${
                seen ? 'scale-100' : 'scale-0'
              }`}
              style={{ transitionDelay: `calc(${delay} + 700ms)` }}
            >
              ✓
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-relaxed text-white md:text-[16px]">{item.ourApproach}</p>
              {item.metric && (
                <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-bold text-white">
                  {item.metric}
                  {item.metricLabel && <span className="font-medium text-white/75">{item.metricLabel}</span>}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */
export const ComparisonSection = ({ data }: { data?: ComparisonData }) => {
  // hooks first, early returns after
  const booking = useOptionalBookingModal();
  const openBooking = booking?.openBooking;

  if (!data || !data.items || data.items.length === 0) return null;

  const handleCtaClick = (e: React.MouseEvent) => {
    if (openBooking && (!data.cta?.href || data.cta.href.startsWith('#'))) {
      e.preventDefault();
      openBooking();
    }
  };

  const leftLabel = data.leftLabel ?? 'Traditional Agencies';
  const rightLabel = data.rightLabel ?? 'Our Industry Engine';
  const hasHeader = data.badge || data.headline || data.subheadline;

  return (
    <section className="relative isolate overflow-hidden bg-white py-20 font-['Poppins',sans-serif] sm:py-28">
      <style>{`
        @keyframes cmp-scan{from{transform:translateY(-120%)}to{transform:translateY(1100%)}}
        @media (prefers-reduced-motion: reduce){.cmp-anim{animation:none!important}}
      `}</style>

      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[360px] w-[700px] -translate-x-1/2 rounded-full bg-violet-500/[0.07] blur-[120px]" />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 md:max-w-[90%]">
        {hasHeader && (
          <div className="mx-auto mb-14 max-w-5xl text-center sm:mb-20">
            {data.badge && (
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-600" />
                {data.badge}
              </div>
            )}
            {data.headline && (
              <h2 className="whitespace-pre-line font-['Inter',sans-serif] text-3xl font-black leading-[1.05] tracking-[-0.045em] text-slate-900  md:text-6xl">
                {data.headline}
              </h2>
            )}
            {data.subheadline && (
              <p className="mx-auto mt-5 max-w-4xl text-sm leading-relaxed text-slate-500 sm:text-base">
                {data.subheadline}
              </p>
            )}
          </div>
        )}

        {/* Face-off */}
        <div className="relative [--mid:190px] md:my-4 lg:[--mid:240px]">
          {/* Background panels (desktop) */}
          <div aria-hidden="true" className={`pointer-events-none absolute inset-0 hidden md:grid ${GRID}`}>
            {/* Old way: flat, muted, slightly smaller */}
            <div
              className="my-3 rounded-[28px] border border-slate-200 bg-slate-100"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(135deg, rgba(100,116,139,0.08) 0, rgba(100,116,139,0.08) 1px, transparent 1px, transparent 12px)',
              }}
            />
            {/* Spine */}
            <div className="relative">
              <span className="absolute inset-y-6 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-slate-300" />
            </div>
            {/* Our way: vivid, raised, bigger */}
            <div className="relative -my-4 overflow-hidden rounded-[28px] bg-gradient-to-b from-violet-600 via-violet-700 to-indigo-800 shadow-[0_50px_100px_-30px_rgba(91,33,182,0.75)]">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-[100px]" />
              <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-indigo-400/30 blur-[100px]" />
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)',
                  backgroundSize: '36px 36px',
                }}
              />
              <div
                className="cmp-anim absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                style={{ animation: 'cmp-scan 7s linear infinite' }}
              />
            </div>
          </div>

          {/* Header row (desktop) */}
          <div className={`relative z-10 hidden md:grid ${GRID}`}>
            <div className="flex items-center gap-3 border-b border-slate-300/60 px-8 py-8 font-['Inter',sans-serif] text-lg font-bold text-black/70 lg:text-xl">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-xs font-black text-red-400 ring-1 ring-red-100">
                ✕
              </span>
              {leftLabel}
              
            </div>

            <div className="flex flex-col items-center justify-center gap-1.5 py-4">
              <div className="relative">
                <span className="absolute inset-0 animate-ping rounded-full bg-violet-500/30" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 font-['Inter',sans-serif] text-lg font-black tracking-wider text-white shadow-xl ring-[6px] ring-white">
                  VS
                </div>
              </div>
              {data.featureLabel && (
                <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  {data.featureLabel}
                </span>
              )}
            </div>

            <div className="flex items-center gap-3 border-b border-white/15 px-8 py-8 font-['Inter',sans-serif] text-lg font-extrabold text-white lg:text-xl">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-black text-violet-700 shadow-[0_0_0_4px_rgba(255,255,255,0.25)]">
                ✓
              </span>
              {rightLabel}
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-10 md:gap-0">
            {data.items.map((item, idx) => (
              <Row key={idx} item={item} idx={idx} leftLabel={leftLabel} rightLabel={rightLabel} />
            ))}
          </div>
        </div>

        {/* CTA */}
        {data.cta && (
          <div className="mt-16 flex justify-center">
            {data.cta.href && !data.cta.href.startsWith('#') ? (
              <a
                href={data.cta.href}
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-purple-500/25 transition-all hover:gap-3.5 hover:from-purple-500 hover:to-indigo-500"
              >
                <span>{data.cta.label}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={handleCtaClick}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-purple-500/25 transition-all hover:gap-3.5 hover:from-purple-500 hover:to-indigo-500"
              >
                <span>{data.cta.label}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};