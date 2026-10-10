"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Sparkles,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { webGrowthConnectionData } from "@/data/service/webdesing";

/* ----------------------------- Brand Vector Icons ---------------------------- */

function GoogleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

function GoogleAdsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M3.88 13.06l5.77-10a3.33 3.33 0 0 1 4.56-1.22l.06.03a3.33 3.33 0 0 1 1.22 4.55l-5.77 10a3.33 3.33 0 0 1-4.56 1.22l-.06-.03a3.33 3.33 0 0 1-1.22-4.55z"
        fill="#FBBC04"
      />
      <path
        d="M20.12 19.94a3.33 3.33 0 1 1-5.77-3.33 3.33 3.33 0 0 1 5.77 3.33z"
        fill="#4285F4"
      />
      <path
        d="M3.88 13.06a3.33 3.33 0 0 0 4.56 1.22l5.77-3.33-4.56-2.64-5.77 4.75z"
        fill="#34A853"
      />
    </svg>
  );
}

function MetaAdsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M16.92 5.5c-1.8 0-3.36.96-4.92 2.76C10.44 6.46 8.88 5.5 7.08 5.5 3.65 5.5 1 8.28 1 12c0 3.72 2.65 6.5 6.08 6.5 2.16 0 3.96-1.12 5.34-3.1 1.2 1.9 3.08 3.1 5.08 3.1 3.2 0 5.5-2.58 5.5-6.5 0-3.92-2.3-6.5-6.08-6.5zm.38 10.3c-1.74 0-3.08-1.58-4.22-3.7 1.2-2.18 2.38-3.9 4.14-3.9 2.18 0 3.4 1.76 3.4 3.8 0 2.04-1.22 3.8-3.32 3.8zm-10.22 0c-2.1 0-3.4-1.76-3.4-3.8 0-2.04 1.3-3.8 3.4-3.8 1.76 0 2.94 1.72 4.14 3.9-1.14 2.12-2.48 3.7-4.14 3.7z"
        fill="#0866FF"
      />
    </svg>
  );
}

function GoogleAnalyticsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="14" width="4.5" height="7" rx="1.5" fill="#F9AB00" />
      <rect x="9.5" y="8" width="4.5" height="13" rx="1.5" fill="#E37400" />
      <rect x="17" y="3" width="4.5" height="18" rx="1.5" fill="#EA4335" />
    </svg>
  );
}

/* ---------------------------------- Config --------------------------------- */

interface BrandConfig {
  icon: React.ComponentType<{ className?: string }>;
  tags: { name: string; icon: React.ComponentType<{ className?: string }> }[];
}

const channelBrands: BrandConfig[] = [
  // 1. SEO
  {
    icon: GoogleIcon,
    tags: [
      { name: "Google Search", icon: GoogleIcon },
      { name: "Core Web Vitals", icon: GoogleIcon },
    ],
  },
  // 2. Paid Traffic
  {
    icon: GoogleAdsIcon,
    tags: [
      { name: "Google Ads", icon: GoogleAdsIcon },
      { name: "Meta Ads", icon: MetaAdsIcon },
    ],
  },
  // 3. Content
  {
    icon: MetaAdsIcon,
    tags: [
      { name: "Meta Network", icon: MetaAdsIcon },
      { name: "Organic Social", icon: MetaAdsIcon },
    ],
  },
  // 4. Analytics
  {
    icon: GoogleAnalyticsIcon,
    tags: [
      { name: "Google Analytics 4", icon: GoogleAnalyticsIcon },
      { name: "Google Tag Manager", icon: GoogleIcon },
    ],
  },
];

const channelThemes = [
  {
    name: "blue",
    stroke: "#2563eb",
    fill: "rgb(37, 99, 235)",
    text: "text-blue-600",
    border: "border-blue-300/80",
    bgSoft: "bg-blue-50/80",
    badge: "border-blue-200 bg-blue-50 text-blue-700",
    activeGlow: "shadow-[0_12px_32px_-6px_rgba(37,99,235,0.28)]",
    mesh: "from-blue-500/15 via-indigo-500/10 to-transparent",
    iconBox: "bg-white border border-blue-200 shadow-md shadow-blue-500/10",
  },
  {
    name: "amber",
    stroke: "#d97706",
    fill: "rgb(217, 119, 6)",
    text: "text-amber-600",
    border: "border-amber-300/80",
    bgSoft: "bg-amber-50/80",
    badge: "border-amber-200 bg-amber-50 text-amber-700",
    activeGlow: "shadow-[0_12px_32px_-6px_rgba(217,119,6,0.28)]",
    mesh: "from-amber-500/15 via-orange-500/10 to-transparent",
    iconBox: "bg-white border border-amber-200 shadow-md shadow-amber-500/10",
  },
  {
    name: "indigo",
    stroke: "#4f46e5",
    fill: "rgb(79, 70, 229)",
    text: "text-indigo-600",
    border: "border-indigo-300/80",
    bgSoft: "bg-indigo-50/80",
    badge: "border-indigo-200 bg-indigo-50 text-indigo-700",
    activeGlow: "shadow-[0_12px_32px_-6px_rgba(79,70,229,0.28)]",
    mesh: "from-indigo-500/15 via-purple-500/10 to-transparent",
    iconBox: "bg-white border border-indigo-200 shadow-md shadow-indigo-500/10",
  },
  {
    name: "emerald",
    stroke: "#059669",
    fill: "rgb(5, 150, 105)",
    text: "text-emerald-600",
    border: "border-emerald-300/80",
    bgSoft: "bg-emerald-50/80",
    badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
    activeGlow: "shadow-[0_12px_32px_-6px_rgba(5,150,105,0.28)]",
    mesh: "from-emerald-500/15 via-teal-500/10 to-transparent",
    iconBox: "bg-white border border-emerald-200 shadow-md shadow-emerald-500/10",
  },
];

const nodePositions = [
  { x: 50, y: 12 }, // top
  { x: 86, y: 50 }, // right
  { x: 50, y: 88 }, // bottom
  { x: 14, y: 50 }, // left
];

type Panel = { title: string; description: string; label?: string };

const AUTOPLAY_MS = 5000;

/* -------------------------------- Component -------------------------------- */

export default function WebDesignGrowthConnectionPreview() {
  const panels = webGrowthConnectionData.panels as Panel[];
  const total = panels.length;

  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  const next = useCallback(() => {
    setActive((current) => (current + 1) % total);
  }, [total]);

  useEffect(() => {
    if (reduceMotion || total <= 1) return;

    const timer = window.setInterval(() => {
      next();
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [next, reduceMotion, total]);

  const panel = panels[active];
  const theme = channelThemes[active % channelThemes.length];
  const brand = channelBrands[active % channelBrands.length];
  const ActiveBrandIcon = brand.icon;

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 text-slate-900 selection:bg-blue-100">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-[350px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-blue-50/70 via-indigo-50/30 to-transparent blur-3xl sm:h-[550px] sm:w-[950px]" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-purple-50/40 blur-3xl sm:h-96 sm:w-96" />
      </div>

      <div className="mx-auto w-full px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Header Section */}
        <div className="mx-auto mb-10 max-w-5xl text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/60 px-3.5 py-1.5 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span className="font-poppins text-xs font-semibold uppercase tracking-wider text-blue-700">
              {webGrowthConnectionData.eyebrow}
            </span>
          </div>

          <h2 className="mb-4 font-inter text-2xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {webGrowthConnectionData.h2}
          </h2>

          <p className="font-poppins text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
            {webGrowthConnectionData.intro}
          </p>
        </div>

        {/* Hub Architecture Display */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
          {/* Left Diagram */}
          <div className="flex w-full flex-col items-center justify-center lg:col-span-6">
            
            {/* 1. Mobile-friendly interactive layout (< md) */}
            <div className="flex w-full flex-col items-center gap-4 md:hidden">
              <div className="flex items-center gap-3 rounded-full border border-slate-200/80 bg-slate-950 px-5 py-2.5 text-white shadow-lg">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-blue-400">
                  <Globe className="h-4 w-4" />
                </div>
                <span className="font-poppins text-xs font-bold uppercase tracking-wider text-slate-200">
                  Central Website Core
                </span>
              </div>

              {/* Mobile Channel Cards Grid */}
              <div className="grid w-full grid-cols-2 gap-2.5">
                {panels.map((p, i) => {
                  const itemTheme = channelThemes[i % channelThemes.length];
                  const itemBrand = channelBrands[i % channelBrands.length];
                  const ItemIcon = itemBrand.icon;
                  const isActive = i === active;

                  return (
                    <button
                      key={p.title}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-current={isActive}
                      className={`flex items-center gap-2.5 rounded-xl border p-3 text-left transition-all ${
                        isActive
                          ? `${itemTheme.border} ${itemTheme.bgSoft}${itemTheme.text} shadow-sm ring-1 ring-blue-500/20`
                          : "border-slate-200 bg-white/80 text-slate-600 hover:border-slate-300 hover:bg-white"
                      }`}
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          isActive
                            ? "bg-white shadow-xs border border-slate-200/60"
                            : "bg-slate-100"
                        }`}
                      >
                        <ItemIcon className="h-4 w-4" />
                      </div>
                      <span className="line-clamp-1 font-poppins text-xs font-semibold">
                        {p.label ?? p.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Desktop Circular Hub (>= md) */}
            <div className="relative hidden aspect-square w-full max-w-[480px] p-2 md:block">
              {/* Dotted Radial Texture */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(#cbd5e1 1.25px, transparent 1.25px)",
                  backgroundSize: "20px 20px",
                  WebkitMaskImage:
                    "radial-gradient(circle at center, black 40%, transparent 75%)",
                  maskImage:
                    "radial-gradient(circle at center, black 40%, transparent 75%)",
                }}
              />

              {/* Concentric Orbit Rings */}
              <div className="pointer-events-none absolute inset-6 rounded-full border border-slate-200/80" />
              <div className="pointer-events-none absolute inset-16 rounded-full border border-dashed border-slate-200" />

              {/* Dynamic SVG Vector Connectors */}
              <svg
                viewBox="0 0 100 100"
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden
              >
                {nodePositions.map((pos, i) => {
                  const isActive = i === active;
                  const itemTheme = channelThemes[i % channelThemes.length];

                  return (
                    <g key={`connector-${i}`}>
                      <line
                        x1="50"
                        y1="50"
                        x2={pos.x}
                        y2={pos.y}
                        stroke={isActive ? itemTheme.stroke : "#e2e8f0"}
                        strokeWidth={isActive ? "1" : "0.5"}
                        strokeDasharray={isActive ? "none" : "2 2"}
                        className="transition-colors duration-500"
                      />

                      {isActive && !reduceMotion && (
                        <motion.circle
                          r="1.8"
                          fill={itemTheme.fill}
                          initial={{ cx: 50, cy: 50 }}
                          animate={{ cx: [50, pos.x], cy: [50, pos.y] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.4,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Centre: The Core "Website" Glass Pillar */}
              <div className="absolute left-1/2 top-1/2 aspect-square w-28 -translate-x-1/2 -translate-y-1/2 sm:w-32 lg:w-36">
                {!reduceMotion && (
                  <>
                    <motion.div
                      aria-hidden
                      className="absolute -inset-3 rounded-full bg-blue-500/10 blur-md"
                      animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.2, 0.5] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    />
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 rounded-full border border-blue-400/40"
                      animate={{ scale: [1, 1.55], opacity: [0.6, 0] }}
                      transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut" }}
                    />
                  </>
                )}

                <div className="relative flex h-full w-full flex-col items-center justify-center rounded-full border border-white/80 bg-gradient-to-b from-slate-900 to-slate-950 p-2 text-white shadow-2xl">
                  <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-md sm:h-9 sm:w-9">
                    <Globe className="h-4 w-4 text-blue-400 sm:h-5 sm:w-5" />
                  </div>
                  <span className="text-center font-poppins text-[9px] font-bold uppercase leading-tight tracking-wider text-slate-200 sm:text-[10px]">
                    Your Central
                    <br />
                    <span className="text-blue-400">Website</span>
                  </span>
                </div>
              </div>

              {/* Floating Orbit Nodes (Channels with Brand Icons) */}
              {panels.map((p, i) => {
                const pos = nodePositions[i % nodePositions.length];
                const itemTheme = channelThemes[i % channelThemes.length];
                const itemBrand = channelBrands[i % channelBrands.length];
                const NodeBrandIcon = itemBrand.icon;
                const isActive = i === active;

                return (
                  <button
                    key={p.title}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`View channel: ${p.title}`}
                    aria-current={isActive}
                    style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                    className={`group absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-2xl border px-3 py-2 backdrop-blur-xl transition-all duration-300 sm:gap-2.5 sm:px-3.5 sm:py-2.5 ${
                      isActive
                        ? `scale-105 ${itemTheme.border} bg-white/95 ${itemTheme.activeGlow}${itemTheme.text} z-20 ring-1 ring-black/5`
                        : "border-slate-200/90 bg-white/80 text-slate-600 shadow-sm hover:scale-102 hover:border-slate-300 hover:bg-white z-10"
                    }`}
                  >
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-xl bg-white transition-all shadow-xs border border-slate-100 ${
                        isActive ? "scale-105" : "grayscale-30 group-hover:grayscale-0"
                      }`}
                    >
                      <NodeBrandIcon className="h-4 w-4" />
                    </div>
                    <span className="font-poppins text-xs font-semibold whitespace-nowrap">
                      {p.label ?? p.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Featured Glass Showcase & Detail */}
          <div className="flex w-full flex-col justify-center lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur-2xl shadow-xl shadow-slate-900/5 sm:p-7 md:p-8">
              {/* Dynamic Theme Glow Behind Content */}
              <div
                aria-hidden
                className={`pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-gradient-to-br ${theme.mesh} blur-3xl transition-all duration-700`}
              />

              <div className="relative z-10 min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    {/* Channel Tag Badge & Main Brand Icon */}
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-md ${theme.iconBox}`}
                        >
                          <ActiveBrandIcon className="h-6 w-6" />
                        </div>
                        <span
                          className={`inline-block rounded-full border px-2.5 py-0.5 font-poppins text-[10px] font-bold tracking-wider uppercase sm:text-[11px] ${theme.badge}`}
                        >
                          Channel Architecture 0{active + 1}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
                        <Zap className="h-3 w-3 text-amber-500" />
                        <span>Interactive Node</span>
                      </div>
                    </div>

                    <h3 className="mb-2 font-inter text-xl font-bold leading-tight text-slate-900 sm:text-2xl lg:text-3xl">
                      {panel.title}
                    </h3>

                    <p className="font-poppins text-xs leading-relaxed text-slate-600 sm:text-sm md:text-base mb-5">
                      {panel.description}
                    </p>

                    {/* Integrated Platform Ecosystem Badges */}
                    <div className="border-t border-slate-200/70 pt-4">
                      <span className="mb-2 block font-poppins text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Integrated Ecosystem Connectors
                      </span>
                      <div className="flex flex-wrap items-center gap-2">
                        {brand.tags.map((tag) => {
                          const TagIcon = tag.icon;
                          return (
                            <div
                              key={tag.name}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white/90 px-2.5 py-1 shadow-2xs backdrop-blur-sm"
                            >
                              <TagIcon className="h-3.5 w-3.5" />
                              <span className="font-poppins text-xs font-medium text-slate-700">
                                {tag.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Support Banner */}
        {webGrowthConnectionData.supportingLink && (
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 backdrop-blur-md sm:mt-14 md:flex-row sm:items-center md:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <p className="font-poppins text-xs font-medium text-slate-700 md:text-sm">
                Connecting website architecture with organic search visibility and scalable acquisition.
              </p>
            </div>
            <Link
              href={webGrowthConnectionData.supportingLink.destination}
              className="group inline-flex shrink-0 items-center gap-2 font-poppins text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700 md:text-sm"
            >
              <span>{webGrowthConnectionData.supportingLink.text}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}