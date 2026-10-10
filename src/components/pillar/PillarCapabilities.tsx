"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Sparkles } from "lucide-react";
import Eyebrow from "./Eyebrow";
import { usePillarModal } from "./PillarModalProvider";

export interface PillarCapability {
  number?: string;
  label: string;
  title: string;
  description: string;
  items: string[];
  links?: { label: string; href: string }[];
  ctaText: string;
  ctaHref: string;
  onCtaClick?: () => void;
  bestFor?: string;
}

export interface PillarCapabilitiesProps {
  id?: string;
  eyebrow?: string;
  h2?: string;
  intro?: string;
  capabilities: PillarCapability[];
  onCapabilityCtaClick?: (capability: PillarCapability) => void;
}

const THEMES = [
  {
    panel: "bg-gradient-to-b from-blue-50/70 via-white to-blue-50/30 border-blue-200/80 hover:border-blue-300",
    activePanel: "ring-2 ring-blue-500/20 shadow-xl shadow-blue-500/5",
    chip: "bg-blue-600 text-white shadow-sm shadow-blue-500/20",
    badge: "bg-blue-100 text-blue-800 border-blue-200",
    tick: "border-blue-200 bg-blue-50 text-blue-600",
    btn: "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/25",
    watermark: "text-blue-900/5",
    vertText: "text-blue-950 hover:text-blue-600",
    note: "bg-white border-blue-200/80 text-blue-950",
    link: "hover:border-blue-500 hover:text-blue-700",
  },
  {
    panel: "bg-gradient-to-b from-purple-50/70 via-white to-purple-50/30 border-purple-200/80 hover:border-purple-300",
    activePanel: "ring-2 ring-purple-500/20 shadow-xl shadow-purple-500/5",
    chip: "bg-purple-600 text-white shadow-sm shadow-purple-500/20",
    badge: "bg-purple-100 text-purple-800 border-purple-200",
    tick: "border-purple-200 bg-purple-50 text-purple-600",
    btn: "bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-600/25",
    watermark: "text-purple-900/5",
    vertText: "text-purple-950 hover:text-purple-600",
    note: "bg-white border-purple-200/80 text-purple-950",
    link: "hover:border-purple-500 hover:text-purple-700",
  },
  {
    panel: "bg-gradient-to-b from-emerald-50/70 via-white to-emerald-50/30 border-emerald-200/80 hover:border-emerald-300",
    activePanel: "ring-2 ring-emerald-500/20 shadow-xl shadow-emerald-500/5",
    chip: "bg-emerald-600 text-white shadow-sm shadow-emerald-500/20",
    badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
    tick: "border-emerald-200 bg-emerald-50 text-emerald-600",
    btn: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/25",
    watermark: "text-emerald-900/5",
    vertText: "text-emerald-950 hover:text-emerald-600",
    note: "bg-white border-emerald-200/80 text-emerald-950",
    link: "hover:border-emerald-500 hover:text-emerald-700",
  },
  {
    panel: "bg-gradient-to-b from-amber-50/70 via-white to-amber-50/30 border-amber-200/80 hover:border-amber-300",
    activePanel: "ring-2 ring-amber-500/20 shadow-xl shadow-amber-500/5",
    chip: "bg-amber-600 text-white shadow-sm shadow-amber-500/20",
    badge: "bg-amber-100 text-amber-800 border-amber-200",
    tick: "border-amber-200 bg-amber-50 text-amber-600",
    btn: "bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-600/25",
    watermark: "text-amber-900/5",
    vertText: "text-amber-950 hover:text-amber-600",
    note: "bg-white border-amber-200/80 text-amber-950",
    link: "hover:border-amber-500 hover:text-amber-700",
  },
  {
    panel: "bg-gradient-to-b from-rose-50/70 via-white to-rose-50/30 border-rose-200/80 hover:border-rose-300",
    activePanel: "ring-2 ring-rose-500/20 shadow-xl shadow-rose-500/5",
    chip: "bg-rose-600 text-white shadow-sm shadow-rose-500/20",
    badge: "bg-rose-100 text-rose-800 border-rose-200",
    tick: "border-rose-200 bg-rose-50 text-rose-600",
    btn: "bg-rose-600 hover:bg-rose-700 text-white shadow-md shadow-rose-600/25",
    watermark: "text-rose-900/5",
    vertText: "text-rose-950 hover:text-rose-600",
    note: "bg-white border-rose-200/80 text-rose-950",
    link: "hover:border-rose-500 hover:text-rose-700",
  },
];

export default function PillarCapabilities({
  id = "capabilities",
  eyebrow = "WHAT WE BUILD",
  h2 = "Four Areas of Work, One Connected Foundation",
  intro,
  capabilities,
  onCapabilityCtaClick,
}: PillarCapabilitiesProps) {
  const [active, setActive] = useState(0);
  const { openContactModal } = usePillarModal();

  return (
    <section id={id} className="scroll-mt-32 border-t border-gray-200 bg-[#FAFAFC] py-24 md:py-32">
      <div className="mx-auto w-full px-4 sm:px-6 lg:max-w-[90%] lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-[#08080C] font-inter md:text-4xl lg:text-5xl">
            {h2}
          </h2>
          {intro && (
            <p className="mt-5 text-base leading-relaxed text-gray-600 font-poppins md:text-lg">
              {intro}
            </p>
          )}
        </div>

        {/* Dynamic Expandable Cards Canvas */}
        <div className="mt-14 flex flex-col gap-4 lg:flex-row lg:items-stretch lg:h-[620px]">
          {capabilities.map((c, i) => {
            const on = i === active;
            const t = THEMES[i % THEMES.length];
            const numStr = c.number || String(i + 1).padStart(2, "0");

            return (
              <motion.div
                key={c.title}
                layout
                transition={{
                  layout: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                }}
                onClick={() => setActive(i)}
                onMouseEnter={() => {
                  // Only switch if this isn't already active to prevent layout thrashing
                  if (active !== i) setActive(i);
                }}
                className={`relative min-w-0 cursor-pointer overflow-hidden rounded-3xl border transition-colors duration-300 ${
                  t.panel
                } ${
                  on
                    ? `lg:flex-[3.5] ${t.activePanel}`
                    : "lg:flex-[0.8] hover:bg-white"
                }`}
              >
                {/* Background Watermark Number */}
                <span
                  className={`pointer-events-none absolute bottom-3 md:-bottom-6 right-3 md:-right-3 select-none text-8xl md:text-9xl font-black font-inter tracking-tighter transition-colors duration-300 ${t.watermark}`}
                  aria-hidden
                >
                  {numStr}
                </span>

                {/* ---------------- Desktop: Closed Card (Vertical Title) ---------------- */}
                {!on && (
                  <div className="hidden h-full w-full flex-col items-center justify-between py-8 px-4 lg:flex select-none">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-xs font-bold font-poppins shadow-sm ${t.chip}`}
                    >
                      {numStr}
                    </span>

                    <div className="my-auto flex items-center justify-center py-6">
                      <span
                        className={`text-xl font-bold font-inter tracking-tight whitespace-nowrap [writing-mode:vertical-rl] rotate-180 transition-colors duration-300 ${t.vertText}`}
                      >
                        {c.title}
                      </span>
                    </div>

                    <span
                      className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold font-poppins max-w-[85px] truncate text-center ${t.badge}`}
                    >
                      {c.label}
                    </span>
                  </div>
                )}

                {/* ---------------- Mobile: Collapsible Accordion Header ---------------- */}
                <div
                  className={`flex w-full items-center justify-between gap-4 p-6 text-left lg:hidden ${
                    on ? "border-b border-gray-200/60 pb-5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-xl text-xs font-bold font-poppins ${t.chip}`}>
                      {numStr}
                    </span>
                    <div>
                      <span className={`inline-block rounded px-2 py-0.5 text-[10px] font-semibold font-poppins ${t.badge}`}>
                        {c.label}
                      </span>
                      <h3 className="text-lg font-bold tracking-tight text-[#08080C] font-inter">
                        {c.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 ${
                      on ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* ---------------- Desktop + Mobile: Open Card (Horizontal Layout) ---------------- */}
                <AnimatePresence mode="wait">
                  {on && (
                    <motion.div
                      key={`content-${c.title}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="relative z-10 flex h-full flex-col justify-between overflow-y-auto p-6 sm:p-9 lg:p-10"
                    >
                      <div>
                        {/* Top Meta Line */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                          <div className="flex items-center gap-2.5">
                            <span className={`flex h-8 w-8 items-center justify-center rounded-xl text-xs font-bold font-poppins ${t.chip}`}>
                              {numStr}
                            </span>
                            <span className={`rounded-md px-2.5 py-1 text-xs font-semibold font-poppins ${t.chip}`}>
                              {c.label}
                            </span>
                          </div>
                          <span className="hidden items-center gap-1.5 text-xs font-semibold font-poppins text-gray-400 sm:inline-flex">
                            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                            Full Architecture
                          </span>
                        </div>

                        {/* Main Title */}
                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#08080C] font-inter lg:text-3xl">
                          {c.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-3.5 max-w-2xl text-base leading-relaxed text-gray-600 font-poppins">
                          {c.description}
                        </p>

                        {/* Deliverables / What's Included */}
                        <div className="mt-8">
                          <div className="text-xs font-bold uppercase tracking-wider text-gray-500 font-poppins mb-3.5">
                            What&apos;s Included
                          </div>
                          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                            {c.items.map((it) => (
                              <li key={it} className="flex items-start gap-3 text-sm sm:text-[15px] text-gray-800 font-poppins">
                                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${t.tick}`}>
                                  <Check className="h-3 w-3" />
                                </span>
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Best When Callout */}
                        {c.bestFor && (
                          <p className={`mt-7 rounded-2xl border px-5 py-3.5 text-sm leading-relaxed font-poppins shadow-sm ${t.note}`}>
                            <span className="font-bold">Best when: </span>
                            {c.bestFor.replace(/^Best when:?\s*/i, "")}
                          </p>
                        )}
                      </div>

                      {/* Bottom CTA & Sub-links */}
                      <div className="mt-8 pt-6 border-t border-gray-200/60 flex flex-wrap items-center justify-between gap-4">
                        {c.onCtaClick || onCapabilityCtaClick || c.ctaHref === "#growth-project" || c.ctaHref === "#build-project" || c.ctaHref === "#automation-project" ? (
                          <button
                            type="button"
                            onClick={() => {
                              if (c.onCtaClick) {
                                c.onCtaClick();
                              } else if (onCapabilityCtaClick) {
                                onCapabilityCtaClick(c);
                              } else {
                                openContactModal();
                              }
                            }}
                            className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all font-poppins cursor-pointer ${t.btn}`}
                          >
                            <span>{c.ctaText}</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </button>
                        ) : (
                          <Link
                            href={c.ctaHref}
                            className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all font-poppins ${t.btn}`}
                          >
                            <span>{c.ctaText}</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}