'use client';

import React from 'react';
import { BentoGridData, BentoItem } from '@/types/industry';

type Accent = 'navy' | 'orange' | 'teal' | 'cyan' | 'violet' | 'rose';

/* Full class strings so Tailwind can detect them at build time */
const ACCENTS: Record<
  Accent,
  { note: string; text: string; soft: string; border: string; bar: string; glow: string; clip: string }
> = {
  navy: {
    note: 'bg-[#0f2540]',
    text: 'text-[#0f2540]',
    soft: 'bg-[#0f2540]/[0.05]',
    border: 'border-[#0f2540]/15',
    bar: 'bg-[#0f2540]',
    glow: 'hover:shadow-[0_40px_70px_-25px_rgba(15,37,64,0.35)]',
    clip: 'bg-[#0f2540]/10',
  },
  orange: {
    note: 'bg-[#f59e1b]',
    text: 'text-[#d97f00]',
    soft: 'bg-[#f59e1b]/[0.09]',
    border: 'border-[#f59e1b]/25',
    bar: 'bg-[#f59e1b]',
    glow: 'hover:shadow-[0_40px_70px_-25px_rgba(245,158,27,0.45)]',
    clip: 'bg-[#f59e1b]/15',
  },
  teal: {
    note: 'bg-[#1f6f8b]',
    text: 'text-[#1f6f8b]',
    soft: 'bg-[#1f6f8b]/[0.07]',
    border: 'border-[#1f6f8b]/20',
    bar: 'bg-[#1f6f8b]',
    glow: 'hover:shadow-[0_40px_70px_-25px_rgba(31,111,139,0.4)]',
    clip: 'bg-[#1f6f8b]/10',
  },
  cyan: {
    note: 'bg-[#2ec4c4]',
    text: 'text-[#12a0a0]',
    soft: 'bg-[#2ec4c4]/[0.1]',
    border: 'border-[#2ec4c4]/30',
    bar: 'bg-[#2ec4c4]',
    glow: 'hover:shadow-[0_40px_70px_-25px_rgba(46,196,196,0.45)]',
    clip: 'bg-[#2ec4c4]/15',
  },
  violet: {
    note: 'bg-[#7c3aed]',
    text: 'text-[#7c3aed]',
    soft: 'bg-[#7c3aed]/[0.07]',
    border: 'border-[#7c3aed]/20',
    bar: 'bg-[#7c3aed]',
    glow: 'hover:shadow-[0_40px_70px_-25px_rgba(124,58,237,0.4)]',
    clip: 'bg-[#7c3aed]/10',
  },
  rose: {
    note: 'bg-[#e11d62]',
    text: 'text-[#e11d62]',
    soft: 'bg-[#e11d62]/[0.07]',
    border: 'border-[#e11d62]/20',
    bar: 'bg-[#e11d62]',
    glow: 'hover:shadow-[0_40px_70px_-25px_rgba(225,29,98,0.4)]',
    clip: 'bg-[#e11d62]/10',
  },
};

const ACCENT_ORDER: Accent[] = ['navy', 'orange', 'teal', 'cyan', 'violet', 'rose'];

/*
  Forced layout for exactly 7 cards (3-column grid):
    [ 1 wide ][ 2 ]
    [ 3 ][ 4 wide ]
    [ 5 ][ 6 ][ 7 ]   <- last three share one row
  Full class strings so Tailwind can detect them at build time.
*/
const SEVEN_LAYOUT = [
  'md:col-span-2',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-2',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-1',
];

const Paperclip = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 48" fill="none" className={className} aria-hidden="true">
    <path
      d="M17 14v22a6 6 0 0 1-12 0V9a4 4 0 0 1 8 0v25a2 2 0 0 1-4 0V14"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* -------------------------------------------------------------------------- */
/*  Card                                                                      */
/* -------------------------------------------------------------------------- */
const BentoCard = ({
  item,
  idx,
  forcedSpan,
}: {
  item: BentoItem;
  idx: number;
  forcedSpan?: string;
}) => {
  const rawAccent = item.accent;
  const accentKey = (rawAccent && rawAccent in ACCENTS ? rawAccent : ACCENT_ORDER[idx % ACCENT_ORDER.length]) as Accent;
  const a = ACCENTS[accentKey];
  const featured = item.variant === 'featured';

  const isCol3 = (item.colSpan as string) === 'col-span-3';
  const isCol2 = item.colSpan === 'col-span-2' || (!item.colSpan && (idx === 0 || idx === 3));
  const spanClass =
    forcedSpan ?? (isCol3 ? 'md:col-span-3' : isCol2 ? 'md:col-span-2' : 'md:col-span-1');
  const rowClass = item.rowSpan === 2 ? 'md:row-span-2' : '';

  const label = item.icon ?? item.number ?? String(idx + 1).padStart(2, '0');
  const tilt = idx % 2 === 0 ? '-rotate-6' : 'rotate-[5deg]';

  const title = featured ? 'text-white' : 'text-slate-900';
  const body = featured ? 'text-white/80' : 'text-slate-500';
  const hasVisual =
    !!item.image || !!item.chips?.length || !!item.checklist?.length || !!item.stats?.length || !!item.progress;

  return (
    <div className={`${spanClass} ${rowClass} pt-8`}>
      <div
        className={`group relative flex h-full flex-col rounded-[28px] border p-7 pt-10 sm:rounded-[34px] sm:p-9 sm:pt-11 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.28)] ${a.glow} ${
          featured ? `${a.note} border-transparent` : 'bg-white border-slate-100'
        }`}
      >
        {/* Clipped decoration layer */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
          <div
            className={`absolute -bottom-20 -right-20 h-56 w-56 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity ${
              featured ? 'bg-white/20' : a.clip
            }`}
          />
          <span
            className={`absolute -bottom-8 right-5 select-none font-['Inter',sans-serif] text-[150px] font-black leading-none tracking-tighter ${
              featured ? 'text-white/[0.07]' : 'text-slate-900/[0.035]'
            }`}
          >
            {String(idx + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Sticky note with paperclip */}
        <div className={`absolute -top-8 left-7 sm:left-9 transition-transform duration-500 group-hover:rotate-0 ${tilt}`}>
          <div className="absolute inset-0 translate-x-2 translate-y-3 rounded-lg bg-slate-900/15 blur-md" />
          <div
            className={`relative flex h-[68px] w-[68px] items-center justify-center rounded-lg font-['Inter',sans-serif] text-2xl font-extrabold shadow-md sm:h-[76px] sm:w-[76px] sm:text-[28px] ${
              featured ? 'bg-white ' + a.text : a.note + ' text-white'
            }`}
          >
            {label}
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-tl-md bg-black/10" />
          </div>
          <Paperclip
            className={`absolute -top-4 left-1/2 h-9 w-5 -translate-x-1/2 drop-shadow-sm ${
              featured ? 'text-white/90' : 'text-slate-400'
            }`}
          />
        </div>

        {/* Tag + pill */}
        <div className="relative flex flex-col md:flex-row min-h-[40px] md:items-center justify-between gap-3 mt-4 md:mt-0 md:pl-[96px]">
          {item.tag ? (
            <span
              className={`text-[11px] font-bold uppercase tracking-[0.16em] ${featured ? 'text-white/90' : a.text}`}
            >
              {item.tag}
            </span>
          ) : (
            <span />
          )}
          {item.pill && (
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
                featured ? 'border-white/30 bg-white/10 text-white' : `${a.border} ${a.soft} ${a.text}`
              }`}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className={`absolute h-full w-full animate-ping rounded-full opacity-70 ${featured ? 'bg-white' : a.bar}`} />
                <span className={`relative h-1.5 w-1.5 rounded-full ${featured ? 'bg-white' : a.bar}`} />
              </span>
              {item.pill}
            </span>
          )}
        </div>

        {/* Title + description */}
        <div className="relative mt-5">
          {item.title && (
            <h3 className={`font-['Inter',sans-serif] text-2xl font-extrabold leading-[1.15] tracking-[-0.03em] sm:text-[28px] ${title}`}>
              {item.title}
            </h3>
          )}
          {item.description && (
            <p className={`mt-3 max-w-xl text-sm leading-relaxed sm:text-[15px] ${body}`}>{item.description}</p>
          )}
        </div>

        {/* Visuals: built only from what is passed */}
        {hasVisual && (
          <div className="relative mt-6 flex flex-col gap-4">
            {item.image && (
              <div className="overflow-hidden rounded-2xl border border-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.imageAlt ?? (typeof item.title === 'string' ? item.title : '')}
                  loading="lazy"
                  className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}

            {item.stats && item.stats.length > 0 && (
  <div
    className={`grid grid-cols-1 gap-3 ${
      item.stats.length === 1
        ? 'md:grid-cols-1'
        : item.stats.length === 2
        ? 'md:grid-cols-2'
        : 'md:grid-cols-3'
    }`}
  >
    {item.stats.map((s: { label: string; value: string }, i: number) => (
      <div
        key={i}
        className={`rounded-2xl border p-3.5 ${
          featured ? 'border-white/20 bg-white/10' : `${a.border} ${a.soft}`
        }`}
      >
        <div className={`text-[10px] font-semibold uppercase tracking-wider ${featured ? 'text-white/60' : 'text-slate-400'}`}>
          {s.label}
        </div>
        <div className={`mt-1 font-['Inter',sans-serif] text-lg font-bold ${featured ? 'text-white' : 'text-slate-900'}`}>
          {s.value}
        </div>
      </div>
    ))}
  </div>
)}
            {item.progress && (
              <div className={`rounded-2xl border p-4 ${featured ? 'border-white/20 bg-white/10' : `${a.border} ${a.soft}`}`}>
                <div className="mb-2.5 flex items-center justify-between text-xs">
                  <span className={featured ? 'text-white/70' : 'text-slate-500'}>{item.progress.label}</span>
                  <span className={`font-bold ${featured ? 'text-white' : a.text}`}>
                    {item.progress.valueLabel ?? `${item.progress.value}%`}
                  </span>
                </div>
                <div className={`h-2 w-full overflow-hidden rounded-full ${featured ? 'bg-white/20' : 'bg-slate-200/70'}`}>
                  <div
                    className={`h-full rounded-full ${featured ? 'bg-white' : a.bar}`}
                    style={{ width: `${Math.max(0, Math.min(100, item.progress.value))}%` }}
                  />
                </div>
              </div>
            )}

            {item.checklist && item.checklist.length > 0 && (
              <ul className="space-y-2.5">
                {item.checklist.map((c: string, i: number) => (
                  <li key={i} className={`flex items-start gap-3 text-sm ${featured ? 'text-white/90' : 'text-slate-700'}`}>
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                        featured ? 'bg-white text-slate-900' : `${a.note} text-white`
                      }`}
                    >
                      ✓
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            )}

            {item.chips && item.chips.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {item.chips.map((c: string, i: number) => (
                  <span
                    key={i}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-transform hover:-translate-y-0.5 ${
                      featured ? 'border-white/25 bg-white/10 text-white' : `${a.border} ${a.soft} ${a.text}`
                    }`}
                  >
                    {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Metric + CTA */}
        {(item.metric || item.cta) && (
          <div
            className={`relative mt-auto flex items-end justify-between gap-4 border-t border-dashed pt-6 ${
              hasVisual ? 'mt-7' : 'mt-8'
            } ${featured ? 'border-white/25' : 'border-slate-200'}`}
          >
            {item.metric ? (
              <div>
                <div
                  className={`font-['Inter',sans-serif] text-4xl font-black leading-none tracking-[-0.04em] sm:text-5xl ${
                    featured ? 'text-white' : a.text
                  }`}
                >
                  {item.metric}
                </div>
                {item.metricLabel && (
                  <div className={`mt-2 max-w-[240px] text-xs font-medium ${featured ? 'text-white/70' : 'text-slate-500'}`}>
                    {item.metricLabel}
                  </div>
                )}
              </div>
            ) : (
              <span />
            )}
            {item.cta &&
              (item.cta.href ? (
                <a
                  href={item.cta.href}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all group-hover:gap-3 ${
                    featured ? 'bg-white text-slate-900' : `${a.note} text-white`
                  }`}
                >
                  {item.cta.label} <span>→</span>
                </a>
              ) : (
                <span
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold ${
                    featured ? 'bg-white text-slate-900' : `${a.note} text-white`
                  }`}
                >
                  {item.cta.label} <span>→</span>
                </span>
              ))}
          </div>
        )}

        {/* Signature bottom pill, like the infographic */}
        <div className="relative mt-7 flex justify-center">
          <span
            className={`h-2 w-16 rounded-full transition-all duration-500 group-hover:w-28 ${
              featured ? 'bg-white' : a.bar
            }`}
          />
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */
export const ValueBento = ({ data }: { data?: BentoGridData }) => {
  if (!data || !data.items || data.items.length === 0) return null;

  const hasHeader = data.badge || data.headline || data.subheadline;
  const isSeven = data.items.length === 7;

  return (
    <section className="relative isolate overflow-hidden bg-white py-20 sm:py-28 font-['Poppins',sans-serif]">
      {/* Very faint dot texture, keeps the background white */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(rgba(15,23,42,0.07) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 35%, transparent 80%)',
        }}
      />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 md:max-w-[90%]">
        {hasHeader && (
          <div className="mx-auto mb-14 max-w-6xl text-center sm:mb-16">
            {data.badge && (
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-slate-700 shadow-[0_6px_20px_-8px_rgba(15,23,42,0.25)]">
                <span className="flex gap-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0f2540]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f59e1b]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1f6f8b]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2ec4c4]" />
                </span>
                {data.badge}
              </div>
            )}
            {data.headline && (
              <h2 className="font-['Inter',sans-serif] text-3xl font-black leading-[1.07] tracking-[-0.045em] text-slate-900 md:text-6xl whitespace-pre-line">
                {data.headline}
              </h2>
            )}
            {data.subheadline && (
              <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-500 sm:text-base">
                {data.subheadline}
              </p>
            )}
          </div>
        )}

        <div className="grid auto-rows-auto grid-flow-dense grid-cols-1 gap-x-6 gap-y-8 md:gap-x-8 md:grid-cols-3">
          {data.items.map((item, idx) => (
            <BentoCard
              key={idx}
              item={item}
              idx={idx}
              forcedSpan={isSeven ? SEVEN_LAYOUT[idx] : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};