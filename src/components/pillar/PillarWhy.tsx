"use client";

import React from "react";
import { Compass, Layers, Network, PenTool, Target, TrendingUp, LucideIcon } from "lucide-react";
import Eyebrow from "./Eyebrow";

export interface PillarWhyProps {
  id?: string;
  eyebrow?: string;
  h2?: string;
  intro?: string;
  points: { title: string; description: string }[];
}

/** 
 * Bento Grid Column Spans:
 * Row 1: 4 cols / 2 cols
 * Row 2: 3 cols / 3 cols
 * Row 3: 2 cols / 4 cols
 */
const SPANS = [
  "lg:col-span-4",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-4",
];

const ICONS: LucideIcon[] = [Target, Layers, Network, TrendingUp, PenTool, Compass];

export default function PillarWhy({
  id = "why-bixeltek",
  eyebrow = "WHY BIXELTEK",
  h2 = "What You Get From Working With Us",
  intro,
  points,
}: PillarWhyProps) {
  return (
    <section
      id={id}
      className="relative scroll-mt-32 overflow-hidden bg-[#06070B] py-24 text-white md:py-32 border-t border-white/[0.08]"
    >
      {/* Background Deep Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#670EF7]/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[130px]" />

      {/* Subtle Coordinate Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:max-w-[90%] lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-5xl">
          <Eyebrow dark>{eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight font-inter md:text-4xl lg:text-5xl text-white">
            {h2}
          </h2>
          {intro && (
            <p className="mt-5 text-base leading-relaxed text-neutral-400 font-poppins md:text-lg">
              {intro}
            </p>
          )}
        </div>

        {/* Glass Bento Grid */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {points.map((p, i) => {
            const Icon = ICONS[i % ICONS.length];
            const featured = i === 0;
            const stepNum = String(i + 1).padStart(2, "0");

            return (
              <div
                key={p.title}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.3] p-7 backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:-translate-y-1 lg:p-9 ${
                  SPANS[i % SPANS.length]
                } ${
                  featured
                    ? "min-h-[320px] bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-[#670EF7]/10"
                    : "min-h-[270px] bg-white/[0.025] hover:bg-white/[0.045]"
                }`}
              >
                {/* Subtle Ambient Hover Glow on each Card */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/[0.03] blur-2xl transition-all duration-500 group-hover:bg-[#670EF7]/20 group-hover:scale-125" />

                {/* Top: Icon + Stage Counter */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-neutral-200 shadow-inner backdrop-blur-md transition-all duration-300 group-hover:border-[#670EF7]/50 group-hover:bg-[#670EF7]/20 group-hover:text-white group-hover:scale-105">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>

                  <span className="font-poppins text-xs font-semibold tracking-wider text-neutral-500 group-hover:text-neutral-300 transition-colors">
                    {stepNum}
                  </span>
                </div>

                {/* Bottom: Copy */}
                <div className="relative z-10 mt-8">
                  <h3
                    className={`font-bold leading-tight tracking-tight font-inter text-white transition-colors duration-200 group-hover:text-neutral-100 ${
                      featured ? "text-2xl lg:text-3xl" : "text-lg lg:text-xl"
                    }`}
                  >
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-400 font-poppins group-hover:text-neutral-300 transition-colors">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}