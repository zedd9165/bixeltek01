"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Code2,
  CreditCard,
  Database,
  MousePointerClick,
  Network,
  Palette,
  Rocket,
  Search,
  Target,
  Users,
  Users2,
  MessageSquare,
} from "lucide-react";
import { webProcessData } from "@/data/service/webdesing";

// One icon per stage (cycles if you add more stages)
const stageIcons = [Search, Network, MousePointerClick, Palette, Code2, Rocket];
const AUTOPLAY_MS = 7000;

/* -------------------------------------------------------------------------- */
/*  Website mockup that "gets ready" as the stage advances                    */
/*  0 discovery → 1 structure → 2 experience → 3 design → 4 build → 5 launch  */
/* -------------------------------------------------------------------------- */

const discoveryNotes = [
  { icon: Target, label: "Business goals" },
  { icon: Users, label: "Target audience" },
  { icon: BarChart3, label: "Analytics & search data" },
  { icon: Search, label: "Competitor examples" },
];

const buildItems = [
  { icon: Database, label: "CMS" },
  { icon: CreditCard, label: "Payments" },
  { icon: Activity, label: "Analytics" },
  { icon: Code2, label: "APIs" },
];

const launchItems = ["Mobile", "Forms", "Tracking", "Speed"];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-indigo-100 px-1.5 py-0.5 text-[9px] font-bold text-indigo-700 font-poppins">
      {children}
    </span>
  );
}

function SiteMockup({ stage }: { stage: number }) {
  const styled = stage >= 3;
  const pick = (wire: string, final: string) => (styled ? final : wire);

  const status =
    stage === 5
      ? { text: "Live", cls: "bg-emerald-100 text-emerald-700" }
      : stage === 4
      ? { text: "Staging", cls: "bg-amber-100 text-amber-700" }
      : { text: "Draft", cls: "bg-gray-100 text-gray-500" };

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 border-b border-gray-200">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex items-center justify-between rounded-md bg-white border border-gray-200 px-3 py-1 text-xs text-gray-500 font-poppins">
          <span>yourbrand.com</span>
          <span
            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold transition-colors duration-500 ${status.cls}`}
          >
            {status.text}
          </span>
        </div>
      </div>

      {/* Canvas */}
      <div
        className="relative h-[340px] sm:h-[380px] bg-slate-50 overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      >
        {/* Stage 1: discovery board */}
        <AnimatePresence>
          {stage === 0 && (
            <motion.div
              key="discovery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 p-5 flex flex-col items-center justify-center gap-5"
            >
              <p className="text-[11px] font-poppins font-semibold uppercase tracking-wider text-gray-500">
                Discovery board
              </p>
              <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                {discoveryNotes.map((n, i) => (
                  <motion.div
                    key={n.label}
                    initial={{ opacity: 0, y: 12, rotate: 0 }}
                    animate={{ opacity: 1, y: 0, rotate: i % 2 ? 1.5 : -1.5 }}
                    transition={{ delay: 0.12 * i, duration: 0.4 }}
                    className="flex items-center gap-2 rounded-xl bg-white border border-gray-200 shadow-md p-3"
                  >
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <n.icon className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-poppins font-medium text-gray-700 leading-tight">
                      {n.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stages 2–6: the page itself */}
        <div
          className={`absolute inset-0 p-4 sm:p-5 pb-16 transition-opacity duration-500 ${
            stage >= 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-full flex flex-col gap-3 rounded-xl bg-white border border-gray-200 shadow-sm p-3 sm:p-4">
            {/* Nav */}
            <div className="flex items-center justify-between gap-3">
              <div
                className={`h-5 w-16 rounded transition-colors duration-500 ${pick(
                  "bg-gray-200",
                  "bg-blue-600"
                )}`}
              />
              <div className="hidden sm:flex items-center gap-4">
                {["Home", "Services", "Work", "Contact"].map((l) => (
                  <span
                    key={l}
                    className={`text-[11px] font-poppins transition-colors duration-500 ${pick(
                      "text-gray-400",
                      "text-gray-700"
                    )}`}
                  >
                    {l}
                  </span>
                ))}
              </div>
              <div
                className={`h-5 w-14 rounded-md transition-colors duration-500 ${pick(
                  "bg-gray-200",
                  "bg-blue-600"
                )}`}
              />
            </div>

            {/* Hero */}
            <div className="grid grid-cols-5 gap-3 flex-1 min-h-0">
              <div className="col-span-3 flex flex-col justify-center gap-2.5">
                {styled ? (
                  <>
                    <p className="text-sm sm:text-lg font-bold font-inter leading-tight text-[#08080C]">
                      Websites built around{" "}
                      <span className="text-blue-600">your customers</span>
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-500 font-poppins leading-snug">
                      Clear structure, fast pages and a path to every sale.
                    </p>
                    <span className="self-start rounded-md bg-blue-600 px-3 py-1.5 text-[10px] sm:text-xs font-semibold text-white font-poppins">
                      Get started
                    </span>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 space-y-1.5">
                        <div className="h-3 w-5/6 rounded bg-gray-300" />
                        <div className="h-3 w-3/5 rounded bg-gray-300" />
                      </div>
                      {stage === 2 && <Tag>H1</Tag>}
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 w-full rounded bg-gray-200" />
                      <div className="h-2 w-4/5 rounded bg-gray-200" />
                    </div>
                    <div className="flex items-center gap-2">
                      {stage >= 2 ? (
                        <span className="rounded-md border-2 border-dashed border-blue-400 px-3 py-1 text-[10px] font-semibold text-blue-500 font-poppins">
                          Call to action
                        </span>
                      ) : (
                        <div className="h-6 w-16 rounded-md bg-gray-200" />
                      )}
                      {stage === 2 && <Tag>CTA</Tag>}
                    </div>
                  </>
                )}
              </div>

              <div
                className={`relative col-span-2 rounded-lg flex items-center justify-center overflow-hidden transition-all duration-500 ${pick(
                  "bg-gray-100 border border-dashed border-gray-300",
                  "bg-gradient-to-br from-blue-500 to-indigo-500"
                )}`}
              >
                {!styled && (
                  <span className="text-[10px] font-poppins text-gray-400">
                    Image
                  </span>
                )}
                {stage >= 4 && (
                  <span className="absolute w-14 h-14 rounded-full bg-white/25" />
                )}
                {stage === 3 && (
                  <div className="rounded-lg bg-white p-2 shadow-lg flex items-center gap-2">
                    <div className="flex gap-1">
                      {["bg-blue-600", "bg-indigo-500", "bg-sky-400", "bg-slate-900"].map(
                        (c) => (
                          <span key={c} className={`w-3 h-3 rounded-full ${c}`} />
                        )
                      )}
                    </div>
                    <span className="text-xs font-bold font-inter text-gray-800">
                      Aa
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Section cards */}
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`h-[68px] rounded-lg p-2 space-y-1.5 transition-all duration-500 ${pick(
                    "bg-gray-100 border border-dashed border-gray-300",
                    "bg-white border border-gray-200 shadow-md"
                  )}`}
                >
                  <div
                    className={`h-5 w-5 rounded-md transition-colors duration-500 ${pick(
                      "bg-gray-300",
                      "bg-blue-100"
                    )}`}
                  />
                  <div className="h-1.5 w-4/5 rounded bg-gray-300" />
                  <div className="h-1.5 w-3/5 rounded bg-gray-200" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stages 5–6: build and launch bar */}
        <AnimatePresence mode="wait">
          {stage >= 4 && (
            <motion.div
              key={stage}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.4 }}
              className={`absolute inset-x-0 bottom-0 px-4 py-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] font-poppins font-medium text-white ${
                stage === 5 ? "bg-emerald-600" : "bg-slate-900"
              }`}
            >
              <span className="inline-flex items-center gap-1.5 font-semibold">
                {stage === 5 ? (
                  <>
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                    </span>
                    Live
                  </>
                ) : (
                  "Integrating"
                )}
              </span>
              {stage === 4
                ? buildItems.map((b) => (
                    <span key={b.label} className="inline-flex items-center gap-1.5">
                      <b.icon className="w-3.5 h-3.5 text-blue-300" />
                      {b.label}
                    </span>
                  ))
                : launchItems.map((l) => (
                    <span key={l} className="inline-flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      {l}
                    </span>
                  ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */

export default function WebDesignProcessPreview() {
  const stages = webProcessData.stages;
  const total = stages.length;

  const [stage, setStage] = useState(0);
  const [paused, setPaused] = useState(false);

  const areaRef = useRef<HTMLDivElement>(null);
  const inView = useInView(areaRef, { amount: 0.4 });
  const reduceMotion = useReducedMotion();

  // Auto-advance while visible; pause on hover/focus; skip if user prefers reduced motion
  useEffect(() => {
    if (!inView || paused || reduceMotion) return;
    const t = setTimeout(() => setStage((s) => (s + 1) % total), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [stage, inView, paused, reduceMotion, total]);

  const current = stages[stage];
  const CurrentIcon = stageIcons[stage % stageIcons.length];

  return (
    <section
      id="process"
      className="scroll-mt-24 py-20 sm:py-24 bg-white text-[#08080C] relative border-t border-gray-200 overflow-hidden"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Intro */}
        <div className="max-w-4xl mb-12 mx-auto md:text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{webProcessData.eyebrow}</span>
          </div>

          {/* Cursive handwritten callout right before H2 */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] ">
            {webProcessData.h2}
          </h2>
              <div className="block select-none my-2">
            <span
              className="text-3xl md:text-4xl font-medium italic tracking-wide"
              style={{
                fontFamily: "var(--font-caveat), 'Playfair Display', cursive, sans-serif",
                color: "#FEBC2E",
              }}
            >
              have you got yours?
            </span>
          </div>  
          <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed max-w-4xl mx-auto">
            {webProcessData.intro}
          </p>
        </div>

        <div
          ref={areaRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Arrow-led stepper */}
          <div className="flex items-start mb-10 max-w-5xl mx-auto">
            {stages.map((s, i) => {
              const Icon = stageIcons[i % stageIcons.length];
              const done = i < stage;
              const active = i === stage;
              return (
                <React.Fragment key={i}>
                  <button
                    type="button"
                    onClick={() => setStage(i)}
                    aria-label={`${s.stageNumber}: ${s.title}`}
                    aria-current={active ? "step" : undefined}
                    className="group flex flex-col items-center gap-2 lg:w-28 flex-shrink-0 focus:outline-none"
                  >
                    <span
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-blue-400 ${
                        active
                          ? "bg-blue-600 border-blue-600 text-white scale-110 shadow-lg shadow-blue-600/30"
                          : done
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "bg-white border-gray-300 text-gray-400 group-hover:border-blue-400 group-hover:text-blue-500"
                      }`}
                    >
                      {done ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Icon className="w-4 h-4" />
                      )}
                    </span>
                    <span
                      className={`hidden lg:block text-[11px] leading-tight text-center font-poppins font-semibold transition-colors ${
                        active ? "text-blue-600" : "text-gray-500"
                      }`}
                    >
                      {s.title}
                    </span>
                  </button>

                  {i < total - 1 && (
                    <div className="relative flex-1 mx-1 sm:mx-2 mt-[19px] h-0.5 min-w-3">
                      <div className="absolute inset-0 border-t-2 border-dashed border-gray-300" />
                      <motion.div
                        className="absolute inset-y-0 left-0 w-full origin-left bg-blue-600"
                        initial={false}
                        animate={{ scaleX: done ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-0.5">
                        <ChevronRight
                          className={`w-4 h-4 transition-colors ${
                            done ? "text-blue-600" : "text-gray-400"
                          }`}
                        />
                      </span>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Mockup + active stage */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="">
              <SiteMockup stage={stage} />
            </div>

            <div className="">
              <div className="min-h-[220px]" aria-live="polite">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stage}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                        <CurrentIcon className="w-5 h-5" />
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-poppins uppercase tracking-wider">
                        {current.stageNumber}
                        <span className="text-blue-400"> / {total}</span>
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-inter text-[#08080C] tracking-tight mb-3">
                      {current.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 font-poppins leading-relaxed">
                      {current.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStage((s) => (s - 1 + total) % total)}
                  aria-label="Previous stage"
                  className="w-11 h-11 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setStage((s) => (s + 1) % total)}
                  aria-label="Next stage"
                  className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting note, lightweight instead of a boxed banner */}
        {webProcessData.supportingParagraph && (
          <div className="mt-10 md:mt-20 flex flex-col items-start md:items-center justify-center gap-5 max-w-4xl mx-auto text-left md:text-center">
            <div className="flex flex-col items-start md:items-center justify-center gap-3">
              <Users2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 sm:mt-0" />
              <p className="text-sm text-gray-600 font-poppins leading-relaxed">
                {webProcessData.supportingParagraph}
              </p>
            </div>

            {/* CTA Button right after supporting paragraph */}
            <div className="pt-2">
              <Link
                href="#website-project"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-poppins font-medium text-sm sm:text-base shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35 transition-all duration-300 group"
              >
                <span>If you don&apos;t have a plan, speak to our experts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}