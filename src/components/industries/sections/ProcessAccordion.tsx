'use client';

import React, { useEffect, useRef, useState } from 'react';
import { IndustryPageData } from '@/types/industry';

/* -------------------------------------------------------------------------- */
/*  Optional extras: pass only what you need, everything else is skipped.     */
/*  Existing fields (badge, headline, subheadline, steps[].step, title,       */
/*  summary, details) work exactly as before.                                 */
/* -------------------------------------------------------------------------- */
interface ProcessStepExtras {
  duration?: string; // text on the vertical pill, e.g. "Days 1-3". Falls back to "Step 01"
  icon?: string; // emoji override for the round icon
  tone?: 'purple' | 'lime' | 'dark'; // card colour. Alternates automatically if omitted
}

interface ProcessExtras {
  timeline?: { start: string; end: string }; // the two date blocks in the header
  footerNote?: string; // small purple pill under the flow
  cta?: { label: string; href?: string };
}

type Base = NonNullable<IndustryPageData['process']>;
type ProcessStep = Base['steps'][number] & ProcessStepExtras;
type ProcessData = Omit<Base, 'steps'> & ProcessExtras & { steps: ProcessStep[] };

const useInView = (threshold = 0.2) => {
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

/* Small line icons, cycled by step index when no emoji icon is passed */
const ICONS: React.ReactNode[] = [
  <g key="s"><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></g>,
  <g key="l"><rect x="3.5" y="4.5" width="17" height="15" rx="3" /><path d="M3.5 10h17M9.5 10v9.5" /></g>,
  <g key="t"><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="0.8" /></g>,
  <g key="c"><path d="M5 20v-8M12 20V5M19 20v-5" /></g>,
  <g key="k"><path d="m5 12.5 4.5 4.5L19 7.5" /></g>,
];

const TONES = {
  purple: {
    card: 'bg-[#faf5ff] border-[#e9d5ff]',
    pill: 'bg-gradient-to-b from-[#6b21a8] to-[#4c1d95] text-[#f3e8ff]',
    icon: 'bg-[#f3e8ff] text-[#6b21a8] border border-[#e9d5ff]',
    check: 'bg-[#6b21a8] text-[#f3e8ff]',
    hover: 'hover:shadow-[0_30px_60px_-30px_rgba(107,33,168,0.4)]',
  },
  lime: {
    card: 'bg-[#faf5ff] border-[#e9d5ff]',
    pill: 'bg-gradient-to-b from-[#6b21a8] to-[#4c1d95] text-[#f3e8ff]',
    icon: 'bg-[#f3e8ff] text-[#6b21a8] border border-[#e9d5ff]',
    check: 'bg-[#6b21a8] text-[#f3e8ff]',
    hover: 'hover:shadow-[0_30px_60px_-30px_rgba(107,33,168,0.4)]',
  },
  dark: {
    card: 'bg-[#f7f7f5] border-slate-200/70',
    pill: 'bg-[#1f1f1f] text-white',
    icon: 'bg-white text-[#1f1f1f] border border-slate-200',
    check: 'bg-[#1f1f1f] text-white',
    hover: 'hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.4)]',
  },
};

/* -------------------------------------------------------------------------- */
/*  Dashed connector between two cards                                        */
/* -------------------------------------------------------------------------- */
const Connector = ({ ltr }: { ltr: boolean }) => {
  const { ref, seen } = useInView(0.4);
  return (
    <>
      {/* Desktop: S-curve from one card's centre to the next */}
      <div ref={ref} className="relative hidden h-24 lg:block" aria-hidden="true">
        <span
          className={`absolute top-0 h-1/2 w-[21%] origin-top border-b-2 border-dashed border-purple-600/40 transition-transform duration-500 ${
            ltr ? 'left-[29%] rounded-bl-[28px] border-l-2' : 'right-[29%] rounded-br-[28px] border-r-2'
          } ${seen ? 'scale-y-100' : 'scale-y-0'}`}
        />
        <span
          className={`absolute top-1/2 h-1/2 w-[21%] border-t-2 border-dashed border-purple-600/40 transition-transform delay-500 duration-500 ${
            ltr ? 'left-1/2 origin-left rounded-tr-[28px] border-r-2' : 'right-1/2 origin-right rounded-tl-[28px] border-l-2'
          } ${seen ? 'scale-100' : 'scale-0'}`}
        />
        <span
          className={`absolute bottom-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-0.5 rotate-45 border-b-2 border-r-2 border-purple-700 transition-opacity delay-[1000ms] duration-300 ${
            seen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ left: ltr ? '71%' : '29%' }}
        />
      </div>

      {/* Mobile: short vertical dashed line */}
      <div className="relative ml-10 h-10 border-l-2 border-dashed border-purple-600/40 lg:hidden" aria-hidden="true">
        <span className="absolute -left-[6px] bottom-0 h-2.5 w-2.5 -translate-y-0.5 rotate-45 border-b-2 border-r-2 border-purple-700" />
      </div>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*  One step card                                                             */
/* -------------------------------------------------------------------------- */
const StepCard = ({ s, idx }: { s: ProcessStep; idx: number }) => {
  const { ref, seen } = useInView(0.15);
  const left = idx % 2 === 0;
  const t = TONES[s.tone ?? (idx % 2 === 0 ? 'purple' : 'dark')];
  const stepLabel = s.step ?? String(idx + 1).padStart(2, '0');
  const pillText = s.duration ?? `Step ${stepLabel}`;

  return (
    <div ref={ref} className={`flex ${left ? 'lg:justify-start' : 'lg:justify-end'}`}>
      <div
        className={`group relative flex w-full gap-4 rounded-[28px] border p-4 transition-all duration-700 ease-out hover:-translate-y-1 sm:gap-5 sm:rounded-[32px] sm:p-5 lg:w-[58%] ${t.card} ${t.hover} ${
          seen ? 'translate-x-0 opacity-100' : `opacity-0 ${left ? '-translate-x-10' : 'translate-x-10'}`
        }`}
      >
        {/* Vertical pill */}
        <div
          className={`flex w-11 shrink-0 items-center justify-center rounded-full py-6 transition-all duration-500 group-hover:w-12 sm:w-12 sm:group-hover:w-14 ${t.pill}`}
        >
          <span className="whitespace-nowrap text-xs font-semibold tracking-wide [writing-mode:vertical-rl] rotate-180 sm:text-[13px]">
            {pillText}
          </span>
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1 py-1 sm:py-2">
          <div className="flex items-center gap-3">
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110 ${t.icon}`}
            >
              {s.icon ? (
                s.icon
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {ICONS[idx % ICONS.length]}
                </svg>
              )}
            </span>
            {s.title && (
              <h3 className="font-['Inter',sans-serif] text-xl font-medium leading-snug tracking-[-0.02em] text-[#161616] md:text-2xl">
                {s.title}
              </h3>
            )}
          </div>

          {s.summary && <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-700">{s.summary}</p>}

          {s.details && s.details.length > 0 && (
            <ul className="mt-4 space-y-2">
              {s.details.map((d, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm leading-snug text-slate-600">
                  <span
                    className={`mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${t.check}`}
                  >
                    ✓
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */
export const ProcessAccordion = ({ data }: { data?: ProcessData }) => {
  if (!data || !data.steps || data.steps.length === 0) return null;

  const hasHeader = data.badge || data.headline || data.subheadline || data.timeline;

  return (
    <section className="relative isolate overflow-hidden bg-white py-20 font-['Poppins',sans-serif] sm:py-28">
      <div className="pointer-events-none absolute -right-32 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-purple-500/15 blur-[130px]" />
      <div className="pointer-events-none absolute -left-32 bottom-20 -z-10 h-[360px] w-[360px] rounded-full bg-indigo-500/12 blur-[130px]" />

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 md:max-w-[90%]">
        {hasHeader && (
          <div className="mb-14 grid gap-10 sm:mb-20 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className='mx-auto text-center'>
              {data.badge && (
                <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 border border-purple-200/80 px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide uppercase text-purple-700 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
                  {data.badge}
                </span>
              )}
              {data.headline && (
                <h2 className="mt-8 max-w-4xl font-['Inter',sans-serif] text-3xl font-extrabold leading-[1.1] tracking-[-0.035em] text-[#161616] lg:text-6xl whitespace-pre-line">
                  {data.headline}
                </h2>
              )}
              {data.subheadline && (
                <p className="mt-6 max-w-2xl text-sm md:text-lg leading-relaxed text-slate-600 sm:text-[15px] mx-auto">{data.subheadline}</p>
              )}
            </div>

            {data.timeline && (
              <div className="flex items-end">
                <div className="flex h-14 w-28 items-end bg-slate-100 px-4 pb-3.5 text-sm text-slate-500 sm:w-32">
                  {data.timeline.start}
                </div>
                <div className="flex h-[72px] w-28 items-end bg-gradient-to-tr from-purple-600 to-indigo-600 px-4 pb-3.5 text-sm font-semibold text-white sm:w-32 rounded-r-xl shadow-md shadow-purple-500/20">
                  {data.timeline.end}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Cascade */}
        <div className="flex flex-col">
          {data.steps.map((s, idx) => (
            <React.Fragment key={idx}>
              <StepCard s={s} idx={idx} />
              {idx < data.steps.length - 1 && <Connector ltr={idx % 2 === 0} />}
            </React.Fragment>
          ))}
        </div>

        {(data.footerNote || data.cta) && (
          <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {data.footerNote && (
              <span className="inline-flex items-center gap-2.5 rounded-full bg-purple-50 px-5 py-2.5 text-sm font-medium text-purple-900 ring-1 ring-purple-200/80">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-purple-600 opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-purple-600" />
                </span>
                {data.footerNote}
              </span>
            )}
            {data.cta &&
              (data.cta.href ? (
                <a
                  href={data.cta.href}
                  className="group inline-flex items-center gap-3 rounded-full bg-[#161616] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:gap-4 hover:bg-purple-700"
                >
                  {data.cta.label} <span>→</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-3 rounded-full bg-[#161616] px-7 py-3.5 text-sm font-semibold text-white">
                  {data.cta.label} <span>→</span>
                </span>
              ))}
          </div>
        )}
      </div>
    </section>
  );
};