"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Info, ArrowRight } from "lucide-react";

/**
 * Scope layouts (same data shape for every one: title + description cards)
 *
 * - ledger : original 2-column numbered ledger (light). Default look.
 * - rows   : full-width editorial rows, huge titles, hairline rules (light, no hover arrow).
 * - bento  : clean light-mode asymmetrical modular grid with hero card.
 * - stack  : cards that pin and stack on top of each other while scrolling (light).
 */
export type ServiceScopeVariant = "ledger" | "rows" | "bento" | "stack";

export interface ScopeCardItem {
  title: string;
  description: string;
}

export interface ServiceScopeCTA {
  text?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
}

export interface ServiceScopeSectionProps {
  variant?: ServiceScopeVariant; // optional, defaults to "ledger"
  id?: string;
  eyebrow: string;
  h2: string;
  intro: string;
  cards: ScopeCardItem[];
  scopeNote?: string;
  cta?: ServiceScopeCTA | boolean;
  ctaText?: string;
  ctaHref?: string;
  ctaVariant?: "blue" | "purple" | "dark";
  onCtaClick?: () => void;
}

const ease = [0.22, 1, 0.36, 1] as const;
const num = (i: number) => String(i + 1).padStart(2, "0");

/* ------------------------------------------------------------------ */
/* Shared building blocks                                             */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({
  eyebrow,
  h2,
  intro,
  tone = "light",
  className = "mb-14 md:mb-16",
  cta,
  ctaText,
  ctaHref,
  ctaVariant = "blue",
  onCtaClick,
}: {
  eyebrow: string;
  h2: string;
  intro: string;
  tone?: "light" | "dark";
  className?: string;
  cta?: ServiceScopeCTA | boolean;
  ctaText?: string;
  ctaHref?: string;
  ctaVariant?: "blue" | "purple" | "dark";
  onCtaClick?: () => void;
}) {
  const dark = tone === "dark";

  const resolvedCta =
    typeof cta === "object" && cta !== null
      ? {
          text: cta.text || "Book a Free Consultation",
          href: cta.href,
          target: cta.target,
          onClick: cta.onClick || onCtaClick,
        }
      : cta === true
      ? {
          text: ctaText || "Book a Free Consultation",
          href: ctaHref,
          onClick: onCtaClick,
        }
      : ctaText || onCtaClick
      ? {
          text: ctaText || "Book a Free Consultation",
          href: ctaHref,
          onClick: onCtaClick,
        }
      : null;

  return (
    <div
      className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10 ${className}`}
    >
      <div className="max-w-3xl">
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-poppins font-semibold uppercase tracking-wider mb-4 ${
            dark
              ? "bg-blue-950/50 border-blue-500/30 text-blue-400"
              : "bg-blue-50 border-blue-200 text-blue-600"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-blue-400" : "bg-blue-600"}`}
          />
          <span>{eyebrow}</span>
        </div>
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold font-inter tracking-tight leading-[1.15] mb-5 ${
            dark ? "text-white" : "text-[#08080C]"
          }`}
        >
          {h2}
        </h2>
        <p
          className={`text-base md:text-lg font-poppins leading-relaxed ${
            dark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {intro}
        </p>
      </div>

      {resolvedCta && (
        <div className="flex-shrink-0 lg:mb-2">
          {resolvedCta.onClick ? (
            <button
              type="button"
              onClick={resolvedCta.onClick}
              className={`group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-poppins font-medium text-sm sm:text-base shadow-lg transition duration-300 shrink-0 cursor-pointer ${
                ctaVariant === "purple"
                  ? "bg-[#670EF7] hover:bg-[#5a0bd9] text-white shadow-purple-600/25 hover:shadow-purple-500/35"
                  : ctaVariant === "dark"
                  ? "bg-neutral-900 hover:bg-neutral-800 text-white shadow-neutral-900/20"
                  : "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/25 hover:shadow-blue-500/35"
              }`}
            >
              <span>{resolvedCta.text}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          ) : (
            <Link
              href={resolvedCta.href || "/contact-us"}
              target={resolvedCta.target}
              className={`group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-poppins font-medium text-sm sm:text-base shadow-lg transition duration-300 shrink-0 ${
                ctaVariant === "purple"
                  ? "bg-[#670EF7] hover:bg-[#5a0bd9] text-white shadow-purple-600/25 hover:shadow-purple-500/35"
                  : ctaVariant === "dark"
                  ? "bg-neutral-900 hover:bg-neutral-800 text-white shadow-neutral-900/20"
                  : "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/25 hover:shadow-blue-500/35"
              }`}
            >
              <span>{resolvedCta.text}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

function ScopeNote({
  text,
  tone = "light",
  className = "",
}: {
  text: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`flex items-start gap-3.5 text-xs sm:text-sm font-poppins leading-relaxed ${
        dark ? "text-blue-100/90" : "text-blue-900"
      } ${className}`}
    >
      <Info
        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
          dark ? "text-blue-400" : "text-blue-600"
        }`}
      />
      <div>
        <strong className={dark ? "text-white" : "text-blue-950"}>
          Capability Scope Note:{" "}
        </strong>
        {text}
      </div>
    </div>
  );
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative">
    {children}
  </div>
);

/* ------------------------------------------------------------------ */
/* 1. ledger (original design)                                        */
/* ------------------------------------------------------------------ */

function LedgerScope(p: ServiceScopeSectionProps) {
  const half = Math.ceil(p.cards.length / 2);
  const cols = [p.cards.slice(0, half), p.cards.slice(half)];

  return (
    <section
      id={p.id}
      className="scroll-mt-24 py-24 sm:py-28 bg-white text-[#08080C] relative border-t border-gray-200"
    >
      <Container>
        <SectionHeader {...p} tone="light" />

        <div className="border border-gray-200 rounded-3xl bg-gray-50/50 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {cols.map((col, c) => (
              <div key={c} className="divide-y divide-gray-200 bg-white">
                {col.map((item, idx) => {
                  const n = c === 0 ? idx : idx + half;
                  return (
                    <div
                      key={n}
                      className="p-8 sm:p-10 hover:bg-gray-50/80 transition-colors flex items-start gap-6 group"
                    >
                      <span className="font-poppins text-xs font-bold px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-blue-700 flex-shrink-0 mt-1">
                        {num(n)}
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-lg sm:text-xl font-bold font-inter text-[#08080C] group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 font-poppins leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {p.scopeNote && (
            <ScopeNote
              text={p.scopeNote}
              tone="light"
              className="p-6 sm:p-8 bg-blue-50/70 border-t border-gray-200"
            />
          )}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2. rows (editorial list, hover arrow removed)                      */
/* ------------------------------------------------------------------ */

function RowsScope(p: ServiceScopeSectionProps) {
  return (
    <section
      id={p.id}
      className="scroll-mt-24 py-24 sm:py-28 bg-white text-[#08080C] border-t border-gray-200"
    >
      <Container>
        <SectionHeader {...p} tone="light" />

        <ol className="border-t-2 border-[#08080C]">
          {p.cards.map((item, i) => (
            <li key={i} className="group border-b border-gray-200">
              <Reveal delay={Math.min(i * 0.04, 0.2)}>
                <div className="relative grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start py-8 md:py-11 px-1 md:px-4 transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-50/80 group-hover:to-transparent">
                  <span className="md:col-span-1 font-inter text-sm font-bold text-blue-600 tabular-nums md:pt-3">
                    {num(i)}
                  </span>
                  <h3 className="md:col-span-5 text-2xl md:text-3xl lg:text-4xl font-bold font-inter tracking-tight leading-tight transition-transform duration-300 group-hover:translate-x-1">
                    {item.title}
                  </h3>
                  <p className="md:col-span-6 text-sm md:text-base text-gray-600 font-poppins leading-relaxed md:pt-2">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        {p.scopeNote && (
          <ScopeNote
            text={p.scopeNote}
            tone="light"
            className="mt-10 p-5 sm:p-6 rounded-2xl bg-blue-50/70 border border-blue-100"
          />
        )}
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. bento (converted to clean white background)                     */
/* ------------------------------------------------------------------ */

const LG_SPAN: Record<number, string> = {
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  8: "lg:col-span-8",
  12: "lg:col-span-12",
};

/** Column spans on a 12-col grid. Card 0 is 2 rows tall; cards 1-2 sit beside it. */
function bentoSpans(n: number): number[] {
  if (n <= 2) return Array(n).fill(6);
  const pattern = [7, 5, 5, 4, 4, 4, 7, 5];
  const spans: number[] = [];
  let rowSum = 0;
  for (let i = 0; i < n; i++) {
    const s = i < pattern.length ? pattern[i] : 4;
    spans.push(s);
    if (i >= 3) {
      rowSum += s;
      if (rowSum >= 12) rowSum = 0;
    }
  }
  // stretch the last card so the final row is always complete
  if (n > 3 && rowSum > 0) spans[n - 1] += 12 - rowSum;
  return spans;
}

function BentoScope(p: ServiceScopeSectionProps) {
  const spans = bentoSpans(p.cards.length);

  return (
    <section
      id={p.id}
      className="scroll-mt-24 py-24 sm:py-28 bg-[#FAFAFC] text-[#08080C] relative overflow-hidden border-t border-gray-200"
    >
      {/* Subtle light mesh accent */}
      <div className="absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_55%_50%_at_15%_0%,rgba(103,14,247,0.06),transparent),radial-gradient(ellipse_45%_50%_at_90%_10%,rgba(37,99,235,0.05),transparent)] pointer-events-none" />

      <Container>
        <SectionHeader {...p} tone="light" />

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 grid-flow-dense">
          {p.cards.map((item, i) => {
            const hero = i === 0 && p.cards.length > 2;
            const span = LG_SPAN[spans[i]] ?? "lg:col-span-4";
            return (
              <Reveal
                key={i}
                delay={Math.min(i * 0.05, 0.25)}
                className={`${i === 0 ? "md:col-span-6" : "md:col-span-3"} ${span} ${
                  hero ? "lg:row-span-2" : ""
                }`}
              >
                <article
                  className={`group relative h-full overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 ${
                    hero ? "p-8 sm:p-10 lg:p-12 min-h-[320px]" : "p-6 sm:p-8"
                  }`}
                >
                  {/* Subtle hover gradient glow */}
                  <div
                    className={`absolute rounded-full bg-blue-100/60 blur-[80px] pointer-events-none transition-opacity duration-500 ${
                      hero
                        ? "-top-24 -left-24 w-72 h-72 opacity-100"
                        : "-bottom-20 -right-20 w-52 h-52 opacity-0 group-hover:opacity-100"
                    }`}
                  />

                  {/* Watermark number in light gray */}
                  <span
                    aria-hidden
                    className={`absolute right-4 bottom-1 font-black font-inter leading-none text-gray-100 select-none pointer-events-none ${
                      hero ? "text-[160px] lg:text-[190px]" : "text-[96px]"
                    }`}
                  >
                    {num(i)}
                  </span>

                  <div className="relative flex h-full flex-col">
                    <span className="inline-flex w-fit items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] font-poppins font-bold tracking-wider text-blue-700">
                      {num(i)}
                    </span>

                    <div className={`mt-auto space-y-3 ${hero ? "pt-20 sm:pt-28" : "pt-8"}`}>
                      <h3
                        className={`font-bold font-inter text-[#08080C] group-hover:text-blue-600 transition-colors ${
                          hero
                            ? "text-2xl sm:text-3xl lg:text-4xl leading-tight"
                            : "text-lg sm:text-xl"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`font-poppins leading-relaxed text-gray-600 ${
                          hero ? "text-base max-w-md" : "text-sm"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {p.scopeNote && (
          <ScopeNote
            text={p.scopeNote}
            tone="light"
            className="mt-6 p-5 sm:p-6 rounded-2xl bg-blue-50/70 border border-blue-100"
          />
        )}
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4. stack (pinned cards that stack while scrolling)                 */
/* ------------------------------------------------------------------ */

const STACK_TONES = [
  {
    card: "bg-white border border-gray-200 text-[#08080C]",
    num: "text-blue-600/15",
    body: "text-gray-600",
  },
  {
    card: "bg-[#08080C] border border-white/10 text-white",
    num: "text-white/10",
    body: "text-gray-400",
  },
  {
    card: "bg-gradient-to-br from-[#670EF7] to-[#3b0f9e] border border-white/10 text-white",
    num: "text-white/15",
    body: "text-purple-100/90",
  },
  {
    card: "bg-blue-600 border border-blue-400/30 text-white",
    num: "text-white/15",
    body: "text-blue-50/90",
  },
];

function StackScope(p: ServiceScopeSectionProps) {
  return (
    <section
      id={p.id}
      className="scroll-mt-24 py-24 sm:py-28 bg-gray-50 text-[#08080C] border-t border-gray-200"
    >
      <Container>
        <SectionHeader {...p} tone="light" />

        <div className="relative">
          {p.cards.map((item, i) => {
            const t = STACK_TONES[i % STACK_TONES.length];
            return (
              <div
                key={i}
                className="sticky mb-6 md:mb-10"
                style={{ top: `calc(6rem + ${i * 18}px)` }}
              >
                <article
                  className={`relative overflow-hidden rounded-3xl p-7 sm:p-10 md:p-14 min-h-[220px] md:min-h-[280px] shadow-[0_20px_50px_-20px_rgba(8,8,12,0.35)] ${t.card}`}
                >
                  <span
                    aria-hidden
                    className={`absolute -right-2 -bottom-8 text-[160px] md:text-[240px] leading-none font-black font-inter select-none ${t.num}`}
                  >
                    {num(i)}
                  </span>
                  <div className="relative grid md:grid-cols-12 gap-4 md:gap-10 items-end h-full">
                    <h3 className="md:col-span-5 text-2xl md:text-4xl font-bold font-inter leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    <p
                      className={`md:col-span-6 md:col-start-7 text-sm md:text-lg font-poppins leading-relaxed ${t.body}`}
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {p.scopeNote && (
          <ScopeNote
            text={p.scopeNote}
            tone="light"
            className="mt-6 p-5 sm:p-6 rounded-2xl bg-blue-50/70 border border-blue-100"
          />
        )}
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Entry point                                                        */
/* ------------------------------------------------------------------ */

export default function ServiceScopeSection({
  variant = "ledger",
  id = "services",
  ...rest
}: ServiceScopeSectionProps) {
  const props = { ...rest, id };

  switch (variant) {
    case "rows":
      return <RowsScope {...props} />;
    case "bento":
      return <BentoScope {...props} />;
    case "stack":
      return <StackScope {...props} />;
    case "ledger":
    default:
      return <LedgerScope {...props} />;
  }
}