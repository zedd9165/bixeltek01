"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Network, ArrowUpRight } from "lucide-react";
import Eyebrow from "./Eyebrow";

export interface PillarConnectedProps {
  id?: string;
  eyebrow: string;
  h2: string;
  intro: string;
  points: { title: string; description: string }[];
  centerLabel?: string;
  centerSub?: string;
}

export default function PillarConnected({
  id = "connected",
  eyebrow,
  h2,
  intro,
  points,
  centerLabel = "Your Business",
  centerSub = "Unified Engine",
}: PillarConnectedProps) {
  const reduce = useReducedMotion();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const n = points.length;

  // Calculate orbital node coordinates around an ellipse
  const pos = points.map((_, i) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2 + Math.PI / n;
    return {
      x: 50 + 40 * Math.cos(a),
      y: 50 + 36 * Math.sin(a),
    };
  });

  return (
    <section
      id={id}
      className="relative scroll-mt-32 overflow-hidden bg-[#FAFBFF] py-24 text-[#08080C] md:py-32 border-t border-slate-200/80"
    >
      {/* Background Precision Grid & Ambient Aura */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-60" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[750px] w-[750px] rounded-full bg-gradient-to-tr from-blue-200/40 via-indigo-100/30 to-purple-200/40 blur-[130px]" />

      <div className="relative mx-auto w-full px-4 sm:px-6 lg:max-w-[90%] lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-10">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight font-inter text-[#08080C] md:text-4xl lg:text-5xl">
            {h2}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 font-poppins md:text-lg max-w-2xl mx-auto">
            {intro}
          </p>
        </div>

        {/* ================= DESKTOP ORBITAL RADAR SYSTEM ================= */}
        <div className="relative mx-auto hidden h-[680px] w-full max-w-6xl lg:block select-none">
          
          {/* Concentric Architectural Radar Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-[260px] w-[260px] rounded-full border border-indigo-200/70" />
            <div className="absolute h-[460px] w-[460px] rounded-full border border-indigo-200/50 border-dashed" />
            <div className="absolute h-[620px] w-[620px] rounded-full border border-slate-200/60" />

            {/* Rotating Radar Scanner Sweep */}
            {!reduce && (
              <motion.div
                className="absolute h-[560px] w-[560px] rounded-full bg-gradient-to-tr from-transparent via-transparent to-blue-500/10 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
            )}
          </div>

          {/* SVG Vector Connection Tracks */}
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {pos.map((p, i) => {
              const isHovered = hoveredIdx === i;
              return (
                <g key={i}>
                  {/* Base Track */}
                  <line
                    x1={50}
                    y1={50}
                    x2={p.x}
                    y2={p.y}
                    stroke={isHovered ? "#4F46E5" : "#CBD5E1"}
                    strokeWidth={isHovered ? 1.8 : 1.2}
                    strokeDasharray={isHovered ? "none" : "3 3"}
                    vectorEffect="non-scaling-stroke"
                    className="transition-colors duration-300"
                  />

                </g>
              );
            })}
          </svg>

          {/* Core Central Hub */}
          <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex h-48 w-48 items-center justify-center">
              
              {/* Outer Pulse Rings */}
              {!reduce &&
                [0, 1].map((i) => (
                  <motion.span
                    key={i}
                    className="absolute inset-0 rounded-full border border-blue-400/40 pointer-events-none"
                    animate={{ scale: [1, 1.45], opacity: [0.6, 0] }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      delay: i * 1.6,
                      ease: "easeOut",
                    }}
                  />
                ))}

              {/* Main Hub Body */}
              <div className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full bg-gradient-to-br from-white via-indigo-50/70 to-blue-50 border-2 border-indigo-200/80 shadow-[0_12px_40px_rgba(79,70,229,0.18)] p-4 text-center transition-transform hover:scale-105 duration-300">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/30 mb-1.5">
                  <Network className="h-4 w-4" />
                </span>
                <div className="text-sm font-bold font-inter text-[#08080C] leading-tight">
                  {centerLabel}
                </div>
                <div className="mt-0.5 text-[10px] font-semibold text-blue-600 uppercase tracking-wider font-poppins">
                  {centerSub}
                </div>
              </div>
            </div>
          </div>

          {/* Orbital Satellite Nodes */}
          {points.map((pt, i) => {
            const isHovered = hoveredIdx === i;
            const nodeNum = String(i + 1).padStart(2, "0");

            return (
              <div
                key={pt.title}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="absolute z-20 w-[290px] -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-300"
                style={{
                  left: `${pos[i].x}%`,
                  top: `${pos[i].y}%`,
                  transform: isHovered
                    ? "translate(-50%, -50%) scale(1.04)"
                    : "translate(-50%, -50%) scale(1)",
                }}
              >
                <div
                  className={`relative rounded-2xl p-5 backdrop-blur-xl border transition-all duration-300 shadow-[0_6px_25px_rgba(0,0,0,0.04)] ${
                    isHovered
                      ? "bg-white border-blue-500 shadow-[0_12px_32px_rgba(37,99,235,0.12)]"
                      : "bg-white/90 border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  {/* Top Bar with Number Pill & Anchor Indicator */}
                  <div className="flex items-center justify-between gap-2 mb-2">

                    <span
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${
                        isHovered
                          ? "bg-blue-600 ring-4 ring-blue-100 scale-125"
                          : "bg-emerald-500"
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-base font-bold font-inter leading-snug transition-colors ${
                      isHovered ? "text-blue-600" : "text-[#08080C]"
                    }`}
                  >
                    {pt.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-poppins">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= MOBILE / TABLET CONTINUOUS RAIL ================= */}
        <div className="mt-12 lg:hidden space-y-6">
          {/* Mobile Center Hub Pill */}
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-500/25 font-inter">
            <Network className="h-4 w-4" />
            <span>{centerLabel} • {centerSub}</span>
          </div>

          <ol className="relative ml-4 space-y-4 border-l-2 border-indigo-200 pl-6 pt-4">
            {points.map((pt, idx) => (
              <li key={pt.title} className="relative">
                {/* Milestone Node */}
                <span className="absolute -left-[31px] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-white border-2 border-blue-600 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                </span>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 font-poppins block mb-1">
                    System Node 0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold font-inter text-[#08080C]">
                    {pt.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600 font-poppins">
                    {pt.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
}