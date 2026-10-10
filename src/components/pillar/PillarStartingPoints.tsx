"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Eyebrow from "./Eyebrow";

export interface PillarStartingPoint {
  title: string;
  description: string;
  recommendedServices: { label: string; href: string }[];
  ctaText: string;
  ctaHref: string;
  onCtaClick?: () => void;
  /** What we would do first. 3 short steps work best. Optional but recommended. */
  nextSteps?: string[];
}

export interface PillarStartingPointsProps {
  id?: string;
  eyebrow?: string;
  h2?: string;
  intro?: string;
  points: PillarStartingPoint[];
  onPointCtaClick?: (point: PillarStartingPoint) => void;
}

/**
 * Mini diagnostic: the visitor picks the sentence closest to their situation,
 * and the black panel answers with what we would do first and where to go.
 */
export default function PillarStartingPoints({
  id = "starting-point",
  eyebrow = "FIND YOUR STARTING POINT",
  h2 = "Which of These Sounds Like Your Business Right Now?",
  intro = "Pick the sentence closest to your situation. You do not need to know the technology yet.",
  points,
  onPointCtaClick,
}: PillarStartingPointsProps) {
  const [active, setActive] = useState(0);
  const p = points[active];

  return (
    <section id={id} className="scroll-mt-32 border-t border-gray-200 bg-[#F6F7FA] py-24 sm:py-32">
      <div className="mx-auto w-full px-4 sm:px-6 lg:max-w-[90%] lg:px-8">
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

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Choices */}
          <div role="radiogroup" aria-label="Your situation" className="space-y-3 lg:col-span-5">
            {points.map((pt, i) => {
              const on = i === active;
              return (
                <button
                  key={pt.title}
                  role="radio"
                  aria-checked={on}
                  onClick={() => setActive(i)}
                  className={`flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition-all ${
                    on
                      ? "border-[#670EF7] bg-white shadow-[0_12px_30px_-12px_rgba(103,14,247,0.35)]"
                      : "border-gray-200 bg-white/60 hover:border-gray-400 hover:bg-white"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                      on ? "border-[#670EF7]" : "border-gray-300"
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full transition-transform ${
                        on ? "scale-100 bg-[#670EF7]" : "scale-0"
                      }`}
                    />
                  </span>
                  <span className="text-lg font-bold leading-snug text-[#08080C] font-inter">
                    &ldquo;{pt.title}&rdquo;
                  </span>
                </button>
              );
            })}
          </div>

          {/* Answer */}
          <div className="lg:col-span-7">
            <div className="relative h-full overflow-hidden rounded-[28px] bg-[#08080C] p-8 text-white lg:p-10">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 100% 0%, rgba(139,69,255,0.45) 0%, transparent 55%)",
                }}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="relative"
                >
                  <div className="text-sm font-semibold text-violet-300 font-poppins">
                    Here&apos;s where we&apos;d begin
                  </div>
                  <p className="mt-3 text-xl font-medium leading-snug font-inter lg:text-2xl">
                    {p.description}
                  </p>

                  {p.nextSteps && p.nextSteps.length > 0 && (
                    <>
                      <div className="mt-8 text-sm font-semibold text-neutral-400 font-poppins">
                        First steps
                      </div>
                      <ol className="mt-3 space-y-3">
                        {p.nextSteps.map((s, i) => (
                          <li key={s} className="flex items-start gap-3 text-[15px] text-neutral-200 font-poppins">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8C45FF] text-xs font-bold text-white">
                              {i + 1}
                            </span>
                            <span className="pt-0.5">{s}</span>
                          </li>
                        ))}
                      </ol>
                    </>
                  )}

                  <div className="mt-8 text-sm font-semibold text-neutral-400 font-poppins">
                    Related services
                  </div>
                  <div className="mt-3 divide-y divide-white/10 border-y border-white/10">
                    {p.recommendedServices.map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        className="group flex items-center justify-between py-3.5 text-[15px] font-semibold font-poppins transition-colors hover:text-violet-300"
                      >
                        {s.label}
                        <ArrowUpRight className="h-4 w-4 text-white/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet-300" />
                      </Link>
                    ))}
                  </div>

                  {p.onCtaClick || onPointCtaClick || p.ctaHref === "#growth-project" || p.ctaHref === "#build-project" || p.ctaHref === "#automation-project" ? (
                    <button
                      type="button"
                      onClick={() => {
                        if (p.onCtaClick) {
                          p.onCtaClick();
                        } else if (onPointCtaClick) {
                          onPointCtaClick(p);
                        }
                      }}
                      className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white py-3 pl-6 pr-2.5 text-sm font-bold text-[#08080C] transition-shadow hover:shadow-[0_4px_30px_rgba(139,69,255,0.6)] font-poppins cursor-pointer"
                    >
                      {p.ctaText}
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#08080C] text-white transition-transform group-hover:translate-x-1">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={p.ctaHref}
                      className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white py-3 pl-6 pr-2.5 text-sm font-bold text-[#08080C] transition-shadow hover:shadow-[0_4px_30px_rgba(139,69,255,0.6)] font-poppins"
                    >
                      {p.ctaText}
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#08080C] text-white transition-transform group-hover:translate-x-1">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}