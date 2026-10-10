"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import ContactFromNew from "@/components/ContactFormNew";

export interface TechStackItem {
  name: string;
  category?: string;
  description: string;
  /** A rendered icon element, e.g. <SiGoogleanalytics /> */
  icon: React.ReactNode;
}

export interface ServiceFinalCTAProps {
  id?: string;
  eyebrow: string;
  h2: string;
  intro: string;
  sectionSubtitle?: string;
  tools: TechStackItem[];
}

export default function ServiceFinalCTA({
  id = "plan-project",
  eyebrow,
  h2,
  intro,
  sectionSubtitle = "Measurement & Technology Stack",
  tools,
}: ServiceFinalCTAProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 py-24 sm:py-28 lg:py-32 bg-[#08080C] text-white relative border-t border-white/[0.08] overflow-hidden"
    >
      {/* Precision Structural Coordinate Mesh */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Ambient Purple/Blue Glow */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 20% 15%,
              rgba(139, 69, 255, 0.28) 0%,
              rgba(103, 14, 247, 0.1) 40%,
              transparent 75%
            )
          `,
        }}
      />

      {/* Top Accent Highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B45FF] to-transparent opacity-80 shadow-[0_0_20px_rgba(103,14,247,0.7)]" />

      {/* Main Content Wrapper */}
      <div className="relative w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Heading & Prop-driven Tech Items */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8C45FF]/30 bg-[#8C45FF]/10 text-neutral-200 text-xs font-poppins font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#8C45FF]" />
                <span>{eyebrow}</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-inter text-white tracking-tight leading-[1.15]">
                {h2}
              </h2>

              {/* Intro */}
              <p className="text-base md:text-lg text-neutral-300 font-poppins leading-relaxed">
                {intro}
              </p>
            </div>

            {/* Dynamic Tools / Points Grid */}
            <div className="pt-2 space-y-3">
              {sectionSubtitle && (
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-poppins flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C45FF]" />
                  <span>{sectionSubtitle}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {tools.map((tool, idx) => (
                  <div
                    key={`${tool.name}-${idx}`}
                    className="group relative p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#8C45FF]/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top: Icon + Optional Category */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="w-9 h-9 rounded-lg border border-white/20 bg-white/10 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 [&>svg]:w-5 [&>svg]:h-5">
                          {tool.icon}
                        </div>
                        {tool.category && (
                          <span className="text-[10px] font-semibold text-neutral-400 font-poppins uppercase tracking-wider">
                            {tool.category}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h4 className="text-sm font-bold font-inter text-white mb-1">
                        {tool.name}
                      </h4>

                      {/* Description */}
                      <p className="text-xs text-neutral-400 font-poppins leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-6 rounded-2xl border border-white/[0.1] bg-white/[0.03] backdrop-blur-md p-6 sm:p-8 shadow-2xl">
            <ContactFromNew />
          </div>
        </div>
      </div>
    </section>
  );
}