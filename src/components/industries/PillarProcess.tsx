'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Search, Compass, Target, LineChart, Sparkles } from 'lucide-react';

const steps = [
  {
    step: '01',
    badge: 'Phase 1 • Audit',
    title: 'Vertical Market & Competitor Mapping',
    description:
      'We audit your niche’s local map packs, high-intent buyer query volumes, competitor ad spend, and conversion gaps to identify the highest-margin growth opportunities.',
    icon: Search,
    points: ['High-Intent Search Audit', 'Local Competitor Gap Analysis', 'Margin & LTV Prioritization'],
  },
  {
    step: '02',
    badge: 'Phase 2 • Architecture',
    title: 'Custom Conversion & Funnel Architecture',
    description:
      'We engineer high-trust landing pages, specialty service funnels, verified portfolio showcases, and frictionless inquiry workflows tailored to your specific buyers.',
    icon: Compass,
    points: ['Niche-Specific Trust Markers', 'Frictionless Mobile Booking / RFQ', 'HIPAA & Regulatory Compliance'],
  },
  {
    step: '03',
    badge: 'Phase 3 • Acquisition',
    title: 'High-Intent Multi-Channel Acquisition',
    description:
      'We launch hyper-local SEO, Google Ads, and targeted multi-channel campaigns with geofencing and zero ad spend wasted on broad, unqualified traffic.',
    icon: Target,
    points: ['Geofenced Local Map Pack SEO', 'High-Converting Google Ads', 'Negative Keyword Shielding'],
  },
  {
    step: '04',
    badge: 'Phase 4 • Scale',
    title: 'Revenue Attribution & Continuous Tuning',
    description:
      'Real-time CRM and call tracking connect every marketing dollar to verified client revenue, driving continuous weekly optimizations for lower CAC and higher ROI.',
    icon: LineChart,
    points: ['Closed-Loop Pipeline Attribution', 'Call Recording & Front-Desk Insights', 'Continuous Conversion Tuning'],
  },
];

/* Reveal-on-scroll wrapper */
const Reveal = ({ children, className = '', right }: { children: React.ReactNode; className?: string; right: boolean }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        seen ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 translate-y-6 ${right ? 'md:translate-x-10' : 'md:-translate-x-10'}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export const PillarProcess = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#f6f4ff] dark:bg-slate-950 font-['Poppins',sans-serif] overflow-hidden border-t border-slate-200/60 dark:border-white/5">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-300/30 dark:bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/10 border border-purple-200 dark:border-white/15 text-purple-700 dark:text-purple-300 text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Proven Deployment Methodology
          </div>
          <h2 className="font-['Inter',sans-serif] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            See how <span className="text-purple-600 dark:text-purple-400">easy</span> it is to build
            <br className="hidden sm:inline" /> your industry growth engine
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Four phases take your vertical&apos;s search demand to consultations, booked contracts and verified revenue.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* mobile spine */}
          <div className="md:hidden absolute left-[26px] top-6 bottom-6 border-l-2 border-dashed border-purple-300 dark:border-purple-500/40" />

          {steps.map((s, i) => {
            const Icon = s.icon;
            const right = i % 2 === 1;
            const last = i === steps.length - 1;

            return (
              <Reveal
                key={s.step}
                right={right}
                className={`relative pl-16 md:pl-0 ${i > 0 ? 'mt-10 md:mt-14' : ''}`}
              >
                <div className={`relative md:w-[58%] ${right ? 'md:ml-auto' : ''}`}>
                  {/* Icon with halo rings */}
                  <div
                    className={`absolute z-10 -left-16 top-4 md:top-0 md:-translate-y-1/2 ${
                      right ? 'md:left-auto md:-right-8' : 'md:-left-8'
                    }`}
                  >
                    <span className="absolute -inset-5 rounded-full bg-purple-300/20 dark:bg-purple-500/10" />
                    <span className="absolute -inset-2.5 rounded-full bg-purple-300/35 dark:bg-purple-500/20" />
                    <span className="relative flex w-[52px] h-[52px] md:w-16 md:h-16 items-center justify-center rounded-full bg-white dark:bg-slate-900 shadow-[0_8px_24px_rgba(124,58,237,0.25)] ring-1 ring-purple-100 dark:ring-purple-500/30 text-purple-600 dark:text-purple-300">
                      <Icon className="w-6 h-6 md:w-7 md:h-7" />
                    </span>
                  </div>

                  {/* Card */}
                  <div className="relative rounded-3xl bg-white dark:bg-slate-900 border border-white dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(76,29,149,0.25)] p-6 sm:p-8 md:pl-12 md:pr-10">
                    <span className="absolute top-5 right-6 font-['Inter',sans-serif] text-5xl font-black text-purple-100 dark:text-white/10 select-none">
                      {s.step}
                    </span>

                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-50 dark:bg-white/[0.06] text-purple-600 dark:text-purple-300 border border-purple-100 dark:border-white/10">
                      {s.badge}
                    </span>
                    <h3 className="mt-3 font-['Inter',sans-serif] text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white pr-12">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-300 leading-relaxed">{s.description}</p>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="px-3 py-1 rounded-full text-[11px] font-medium bg-slate-50 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dashed connector to the next card (desktop) */}
                  {!last && (
                    <div
                      aria-hidden
                      className={`hidden md:block absolute top-1/2 w-[22%] border-t-2 border-dashed border-purple-400/60 dark:border-purple-400/40 ${
                        right
                          ? 'right-full border-l-2 rounded-tl-3xl'
                          : 'left-full border-r-2 rounded-tr-3xl'
                      }`}
                      style={{ height: 'calc(50% + 3.5rem)' }}
                    >
                      <span
                        className={`absolute bottom-0 w-2.5 h-2.5 translate-y-1/2 rounded-full bg-purple-500 ${
                          right ? '-left-[6px]' : '-right-[6px]'
                        }`}
                      />
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};