'use client';

import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Award, TrendingUp, Target, Layers3 } from 'lucide-react';
import { IndustryPageData } from '@/types/industry';

/* -------------------------------------------------------------------------- */
/*  Optional extras: pass only what you need, everything else is skipped.     */
/*  Existing fields (headline, items[].value, label, subtext) work as before. */
/* -------------------------------------------------------------------------- */
interface MetricItemExtras {
  ringText?: string; // text that circles the dial. Defaults to the label, repeated
  tag?: string; // small word under the value, e.g. "GROWTH"
  icon?: string; // emoji override for the small icon. Defaults to a line icon
  accent?: boolean; // gives the value a violet gradient (auto on the 2nd item if none set)
}

interface MetricsExtras {
  badge?: string; // pill above the headline
  subheadline?: string;
}

type Base = NonNullable<IndustryPageData['metrics']>;
type MetricItem = Base['items'][number] & MetricItemExtras;
type MetricsData = Omit<Base, 'items'> & MetricsExtras & { items: MetricItem[] };

const ICONS = [Award, TrendingUp, Target, Layers3];

const useInView = (threshold = 0.3) => {
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

/* Build text that fills the circle, from whatever label was passed */
const buildRing = (text: string) => {
  const clean = (text || '').trim().toUpperCase();
  if (!clean) return '';
  let unit = `${clean} • `;
  if (unit.length > 44) unit = `${clean.slice(0, 40).trim()} • `;
  let out = unit;
  while (out.length < 36) out += unit;
  return out;
};

/* Count-up for values like "$380K", "100+", "< 5 min". Years and unparseable values stay static. */
const useCountUp = (value: string, start: boolean) => {
  const parsed = useMemo(() => {
    const m = value.match(/^(\D*?)(\d[\d,]*\.?\d*)(.*)$/);
    if (!m) return null;
    const numStr = m[2];
    const num = parseFloat(numStr.replace(/,/g, ''));
    if (Number.isNaN(num)) return null;
    if (!numStr.includes(',') && !numStr.includes('.') && numStr.length === 4 && num >= 1900 && num <= 2100) return null;
    return {
      prefix: m[1],
      suffix: m[3],
      num,
      decimals: numStr.includes('.') ? numStr.split('.')[1].length : 0,
      comma: numStr.includes(','),
    };
  }, [value]);

  const [display, setDisplay] = useState(value);

  useEffect(() => {
    setDisplay(value);
    if (!start || !parsed) return;
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const t0 = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = parsed.num * eased;
      const txt = parsed.comma
        ? cur.toLocaleString('en-US', { minimumFractionDigits: parsed.decimals, maximumFractionDigits: parsed.decimals })
        : cur.toFixed(parsed.decimals);
      setDisplay(p < 1 ? parsed.prefix + txt + parsed.suffix : value);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value, parsed]);

  return display;
};

/* -------------------------------------------------------------------------- */
/*  One dial                                                                  */
/* -------------------------------------------------------------------------- */
const Dial = ({ item, idx, uid }: { item: MetricItem; idx: number; uid: string }) => {
  const { ref, seen } = useInView();
  const Icon = ICONS[idx % ICONS.length];
  const id = `${uid}-${idx}`;
  const value = item.value ?? '';
  const shown = useCountUp(value, seen);
  const ring = buildRing(item.ringText ?? item.label ?? '');
  const accent = item.accent ?? idx === 1;
  const long = value.length > 6;
  const R = 58;
  const CIRC = 2 * Math.PI * R;
  const ARC_R = 49;
  const ARC = 2 * Math.PI * ARC_R;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${idx * 100}ms` }}
      className={`group relative flex flex-col items-center rounded-2xl p-3 text-center transition-all duration-700 hover:bg-white/[0.03] sm:p-4 ${
        seen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-[#670EF7]/10 to-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />

      {/* Dial */}
      <div className="relative mb-4 flex h-28 w-28 items-center justify-center sm:h-40 sm:w-40 xl:h-48 xl:w-48">
        {/* rotating text */}
        {ring && (
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full select-none animate-[spin_24s_linear_infinite] transition-all duration-500 group-hover:animate-[spin_12s_linear_infinite]"
            viewBox="0 0 160 160"
            aria-hidden="true"
          >
            <defs>
              <path id={id} d={`M 80, 80 m -${R}, 0 a ${R},${R} 0 1,1 ${R * 2},0 a ${R},${R} 0 1,1 -${R * 2},0`} />
            </defs>
            <text
              className="fill-neutral-400 text-[9.5px] font-semibold uppercase transition-colors group-hover:fill-neutral-200"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              textLength={CIRC}
              lengthAdjust="spacing"
            >
              <textPath href={`#${id}`} startOffset="0%" textLength={CIRC} lengthAdjust="spacing">
                {ring}
              </textPath>
            </text>
          </svg>
        )}

        {/* faint outer orbit */}
        <div className="pointer-events-none absolute inset-2 rounded-full border border-white/[0.08] transition-colors group-hover:border-[#670EF7]/40 sm:inset-3" />

        {/* orbiting dot */}
        <div className="pointer-events-none absolute inset-2 animate-[spin_9s_linear_infinite] sm:inset-3">
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8C45FF] shadow-[0_0_12px_#8C45FF]" />
        </div>

        {/* arc that draws itself on scroll */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 160 160" aria-hidden="true">
          <defs>
            <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D8C5FF" />
              <stop offset="100%" stopColor="#8C45FF" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r={ARC_R} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
          <circle
            cx="80"
            cy="80"
            r={ARC_R}
            fill="none"
            stroke={`url(#${id}-g)`}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray={ARC}
            strokeDashoffset={seen ? ARC * 0.18 : ARC}
            style={{ transition: 'stroke-dashoffset 1.8s cubic-bezier(.22,.8,.3,1)', transitionDelay: `${idx * 100 + 200}ms` }}
          />
        </svg>

        {/* center */}
        <div className="relative z-10 flex max-w-[62%] flex-col items-center justify-center">
          <span
            className={`font-['Inter',sans-serif] font-extrabold tabular-nums tracking-tight ${
              long ? 'text-lg md:text-xl' : 'text-2xl md:text-3xl'
            } ${
              accent
                ? 'bg-gradient-to-r from-[#D8C5FF] via-white to-[#8B45FF] bg-clip-text text-transparent'
                : 'text-white'
            }`}
          >
            {shown}
          </span>
          <div className="mt-0.5 flex items-center gap-1">
            {item.icon ? (
              <span className="text-[11px]">{item.icon}</span>
            ) : (
              <Icon className="h-3.5 w-3.5 text-[#8B45FF]" />
            )}
            {item.tag && (
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">{item.tag}</span>
            )}
          </div>
        </div>
      </div>

      {/* Label + context */}
      <div className="flex flex-col items-center">
        {item.label && (
          <h4 className="mb-1.5 font-['Inter',sans-serif] text-xs font-bold tracking-tight text-white transition-colors group-hover:text-[#D8C5FF] sm:text-sm">
            {item.label}
          </h4>
        )}
        {item.subtext && (
          <p className="max-w-[200px] text-[11px] leading-snug text-neutral-400 sm:text-xs">{item.subtext}</p>
        )}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */
export const MetricStats = ({ data }: { data?: MetricsData }) => {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  if (!data || !data.items || data.items.length === 0) return null;

  const count = data.items.length;
  const hasHeader = !!(data.badge || data.headline || data.subheadline);

  const cols =
    count === 1
      ? 'grid-cols-1 place-items-center'
      : count === 2
      ? 'grid-cols-2'
      : count === 3
      ? 'grid-cols-1 sm:grid-cols-3'
      : count === 4
      ? 'grid-cols-2 lg:grid-cols-4'
      : 'grid-cols-2 lg:grid-cols-3';

  return (
    <section className="relative w-full overflow-hidden border-b border-white/[0.08] bg-[#070709] py-20 font-['Poppins',sans-serif] text-white sm:py-24 lg:py-28">
      {/* Volumetric violet radiance */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden bg-[#8C45FF]/[0.08]">
        <div
          className="absolute -top-32 left-1/4 h-[550px] w-[750px] rounded-full opacity-45 blur-[160px]"
          style={{
            background:
              'radial-gradient(circle, #8C45FF 0%, rgba(140,69,255,0.45) 40%, rgba(103,14,247,0.15) 70%, transparent 85%)',
          }}
        />
        <div
          className="absolute -bottom-28 right-10 h-[450px] w-[600px] rounded-full opacity-35 blur-[150px]"
          style={{
            background: 'radial-gradient(circle, rgba(140,69,255,0.7) 0%, rgba(103,14,247,0.25) 50%, transparent 75%)',
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[300px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[180px]"
          style={{ background: 'radial-gradient(ellipse at center, #8C45FF 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 md:max-w-[90%]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {hasHeader && (
            <div className="flex flex-col items-start lg:col-span-4 lg:pr-6 xl:col-span-5">
              {data.badge && (
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#670EF7]/40 bg-[#0C0C14]/90 px-3 py-1.5 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#670EF7] shadow-[0_0_8px_#670EF7]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-300">
                    {data.badge}
                  </span>
                </div>
              )}
              {data.headline && (
                <h2 className="mb-6 font-['Inter',sans-serif] text-3xl font-extrabold leading-[1.12] tracking-tight md:text-4xl xl:text-6xl whitespace-pre-line">
                  <span className="bg-gradient-to-r from-white via-[#D8C5FF] to-[#8B45FF] bg-clip-text text-transparent">
                    {data.headline}
                  </span>
                </h2>
              )}
              {data.subheadline && (
                <p className="max-w-lg text-sm font-normal leading-relaxed text-neutral-400 sm:text-base">
                  {data.subheadline}
                </p>
              )}
            </div>
          )}

          <div className={hasHeader ? 'lg:col-span-8 xl:col-span-7' : 'lg:col-span-12'}>
            <div className={`grid gap-6 lg:gap-4 xl:gap-6 ${cols}`}>
              {data.items.map((item, idx) => (
                <Dial key={idx} item={item} idx={idx} uid={uid} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};