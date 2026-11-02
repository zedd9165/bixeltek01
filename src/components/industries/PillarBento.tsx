'use client';

import React, { useState } from 'react';
import {
  Target,
  ShieldCheck,
  Zap,
  LineChart,
  Sparkles,
  CheckCircle2,
  XCircle,
  Stethoscope,
  Wrench,
  Scale,
  Cpu,
  Phone,
  Lock,
} from 'lucide-react';

type Mode = 'generic' | 'vertical';

interface Variant {
  query: string;
  adTitle: string;
  adDesc: string;
  pageHeadline: string;
  cta: string;
  trust: string[];
  intake: string;
  tracking: string;
}

interface Scenario {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  generic: Variant;
  vertical: Variant;
}

const scenarios: Scenario[] = [
  {
    id: 'dental',
    label: 'Dental & Orthodontics',
    icon: Stethoscope,
    generic: {
      query: 'dentist',
      adTitle: 'Best Dentist | Affordable Dental Care',
      adDesc: 'Quality dental services for the whole family. Contact us today.',
      pageHeadline: 'Welcome to our dental practice',
      cta: 'Contact Us',
      trust: ['Stock smiles', '"Family owned"'],
      intake: '8-field contact form, no privacy notice',
      tracking: 'Form fills counted as "leads"',
    },
    vertical: {
      query: 'invisalign consultation near me financing',
      adTitle: 'Invisalign Consult • Same-Week Openings',
      adDesc: 'Meet the provider, see your treatment plan, and review payment options.',
      pageHeadline: 'See your straighter smile plan in one visit',
      cta: 'Book My Consultation',
      trust: ['Provider credentials', 'Real patient results', 'Insurance & financing'],
      intake: '3-step private intake with secure routing',
      tracking: 'Calls + bookings tied to treatment revenue',
    },
  },
  {
    id: 'home',
    label: 'Home & Field Services',
    icon: Wrench,
    generic: {
      query: 'plumber',
      adTitle: 'Plumbing Services | Call For A Quote',
      adDesc: 'We do all types of plumbing. Great prices.',
      pageHeadline: 'Your trusted local plumbing company',
      cta: 'Submit Request',
      trust: ['Generic badges', 'No service-area proof'],
      intake: 'Form on a slow, desktop-first page',
      tracking: 'No idea which ad produced the job',
    },
    vertical: {
      query: '24/7 burst pipe repair near me licensed',
      adTitle: 'Burst Pipe? Tech On The Way In 60 Min',
      adDesc: 'Licensed & insured. Upfront pricing. Call now, a real person answers.',
      pageHeadline: 'Emergency plumbers dispatched to your suburb',
      cta: 'Tap To Call Now',
      trust: ['Licence number', 'Live service-area map', 'Google reviews'],
      intake: 'Sticky 1-tap call bar + call recording',
      tracking: 'Each call matched to a booked, paid job',
    },
  },
  {
    id: 'legal',
    label: 'Legal & Professional',
    icon: Scale,
    generic: {
      query: 'lawyer',
      adTitle: 'Experienced Attorneys | Call Today',
      adDesc: 'Our lawyers fight for you. Results guaranteed.',
      pageHeadline: 'Aggressive legal representation',
      cta: 'Get Help',
      trust: ['Claims that break ad rules', 'No case-type pages'],
      intake: 'Open form collecting sensitive details',
      tracking: 'Leads mixed with spam and wrong case types',
    },
    vertical: {
      query: 'car accident lawyer free case review',
      adTitle: 'Car Accident Case Review • No Fee Unless You Win',
      adDesc: 'Speak to an attorney about your claim. Confidential and compliant.',
      pageHeadline: 'What your car accident claim could be worth',
      cta: 'Start Free Case Review',
      trust: ['Bar-compliant disclaimers', 'Practice-area proof', 'Attorney bios'],
      intake: 'Screened intake that qualifies the case type',
      tracking: 'Signed retainers traced to the source keyword',
    },
  },
  {
    id: 'saas',
    label: 'Technology & SaaS',
    icon: Cpu,
    generic: {
      query: 'software',
      adTitle: 'Powerful Software For Your Business',
      adDesc: 'Boost productivity with our platform. Learn more.',
      pageHeadline: 'The all-in-one platform for modern teams',
      cta: 'Learn More',
      trust: ['Logo wall of unknowns', 'Feature dump'],
      intake: 'Single "contact sales" form for everyone',
      tracking: 'MQLs counted, pipeline unknown',
    },
    vertical: {
      query: 'alternative to [competitor] for agencies',
      adTitle: 'The [Competitor] Alternative Built For Agencies',
      adDesc: 'Migrate in a day. See pricing, integrations and a live demo.',
      pageHeadline: 'Switch from [Competitor] without losing a week',
      cta: 'Book A Tailored Demo',
      trust: ['Comparison pages', 'Integration proof', 'Security docs'],
      intake: 'Role-based demo routing + trial path',
      tracking: 'CRM stages from demo to closed-won',
    },
  },
];

const meters: { label: string; generic: number; vertical: number; flip?: boolean }[] = [
  { label: 'Buyer-intent match', generic: 22, vertical: 92 },
  { label: 'Trust proof', generic: 30, vertical: 88 },
  { label: 'Funnel friction', generic: 78, vertical: 18, flip: true },
  { label: 'Revenue visibility', generic: 12, vertical: 95 },
];

const pillars = [
  { icon: Target, title: 'Vertical Intent Mapping', copy: 'We map the exact terms, urgencies and procurement criteria your buyers use, and cut vanity keywords.' },
  { icon: ShieldCheck, title: 'Built-In Compliance', copy: 'HIPAA-ready intake, legal ad disclaimers, licensing checks and WCAG 2.1 AA, built into each funnel.' },
  { icon: Zap, title: 'Tailored Conversion Flow', copy: 'Tap-to-call bars, live calendar sync and short forms shaped around how urgent your buyer is.' },
  { icon: LineChart, title: 'Closed-Loop Attribution', copy: 'CRM, practice-management and call tracking that ties spend to booked, paid revenue.' },
];

export const PillarBento = () => {
  const [sid, setSid] = useState(scenarios[0].id);
  const [mode, setMode] = useState<Mode>('vertical');

  const scenario = scenarios.find((s) => s.id === sid) ?? scenarios[0];
  const v = scenario[mode];
  const isV = mode === 'vertical';

  return (
    <section className="relative py-20 md:py-28 bg-white dark:bg-slate-950 font-['Poppins',sans-serif] border-t border-slate-100 dark:border-slate-900 overflow-hidden">
      <style>{`
        @keyframes bx-swap { from { opacity: 0; transform: translateY(8px);} to { opacity: 1; transform: none;} }
        .bx-swap { animation: bx-swap .45s cubic-bezier(.2,.8,.2,1) both; }
        @media (prefers-reduced-motion: reduce) { .bx-swap { animation: none !important; } }
      `}</style>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-purple-500/5 dark:bg-purple-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-semibold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>See The Difference</span>
          </div>
          <h2 className="font-['Inter',sans-serif] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Same Search. Same Budget. <br className="hidden sm:inline" />
            <span className="text-indigo-600 dark:text-indigo-400">Very Different Outcome.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Pick an industry and flip the switch to see how a generic agency setup compares to a vertical-first one.
          </p>
        </div>

        {/* Industry tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {scenarios.map((s) => {
            const Icon = s.icon;
            const on = s.id === sid;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSid(s.id)}
                aria-pressed={on}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                  on
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-purple-400'
                }`}
              >
                <Icon className="w-4 h-4" />
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Mode switch */}
        <div className="flex justify-center mb-10">
          <div
            role="tablist"
            aria-label="Compare approach"
            className="relative inline-grid grid-cols-2 p-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
          >
            <span
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-white dark:bg-slate-800 shadow-md transition-all duration-300 ${
                isV ? 'left-[calc(50%+2px)]' : 'left-1'
              }`}
            />
            {(['generic', 'vertical'] as Mode[]).map((m) => (
              <button
                key={m}
                role="tab"
                aria-selected={mode === m}
                type="button"
                onClick={() => setMode(m)}
                className={`relative z-10 px-5 sm:px-8 py-2.5 text-xs sm:text-sm font-semibold rounded-full transition-colors cursor-pointer ${
                  mode === m
                    ? m === 'vertical'
                      ? 'text-indigo-600 dark:text-indigo-300'
                      : 'text-rose-600 dark:text-rose-400'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {m === 'generic' ? 'Generic Agency' : 'Bixeltek Vertical System'}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison stage */}
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-6 lg:gap-8">
          {/* Mock browser */}
          <div
            key={`${sid}-${mode}`}
            className={`bx-swap rounded-3xl overflow-hidden border shadow-xl bg-slate-50 dark:bg-slate-900/80 transition-colors ${
              isV ? 'border-indigo-300/60 dark:border-indigo-500/30' : 'border-rose-300/50 dark:border-rose-500/20'
            }`}
          >
            <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="ml-3 flex-1 truncate px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                search: <span className="font-semibold text-slate-700 dark:text-slate-200">{v.query}</span>
              </span>
            </div>

            <div className="p-5 sm:p-7 space-y-5">
              {/* Ad */}
              <div className="rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-white/5 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Sponsored</p>
                <p className="text-base sm:text-lg font-semibold text-indigo-700 dark:text-indigo-300 leading-snug">{v.adTitle}</p>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">{v.adDesc}</p>
              </div>

              {/* Landing */}
              <div className="rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-white/5 p-5 sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Landing page</p>
                <h3 className="font-['Inter',sans-serif] text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {v.pageHeadline}
                </h3>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white ${
                      isV ? 'bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg' : 'bg-slate-400 dark:bg-slate-600'
                    }`}
                  >
                    {isV && sid === 'home' && <Phone className="w-4 h-4" />}
                    {v.cta}
                  </span>
                  {v.trust.map((t) => (
                    <span
                      key={t}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border ${
                        isV
                          ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-300'
                          : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 line-through decoration-rose-400/70'
                      }`}
                    >
                      {isV ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3 text-rose-400" />}
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Intake + tracking */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-2xl p-4 bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-white/5">
                  <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    <Lock className="w-3 h-3" /> Intake
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">{v.intake}</p>
                </div>
                <div className="rounded-2xl p-4 bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-white/5">
                  <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    <LineChart className="w-3 h-3" /> Tracking
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">{v.tracking}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Meters */}
          <div className="rounded-3xl p-6 sm:p-8 bg-slate-950 text-white border border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-purple-600/25 blur-3xl pointer-events-none" />
            <div className="relative">
              <p className="text-[11px] font-bold uppercase tracking-wider text-purple-300">What changes</p>
              <h3 className="mt-1 font-['Inter',sans-serif] text-2xl font-extrabold tracking-tight">
                {isV ? 'Built around the buyer' : 'One template for everyone'}
              </h3>

              <div className="mt-7 space-y-5">
                {meters.map((m) => {
                  const val = isV ? m.vertical : m.generic;
                  const good = isV;
                  return (
                    <div key={m.label}>
                      <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                        <span className="text-white/80">{m.label}</span>
                        <span className={good ? 'text-emerald-300' : 'text-rose-300'}>
                          {val > 50 ? 'High' : 'Low'}
                        </span>
                      </div>
                      <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ease-out ${
                            good ? 'bg-gradient-to-r from-purple-500 to-indigo-400' : 'bg-gradient-to-r from-rose-500 to-orange-400'
                          }`}
                          style={{ width: `${val}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="relative mt-8 text-[11px] text-white/40">Qualitative illustration of typical setups, not a measured benchmark.</p>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 hover:border-purple-500/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-300 mb-4 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-indigo-600 group-hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-['Inter',sans-serif] text-base font-bold text-slate-900 dark:text-white">{p.title}</h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{p.copy}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};