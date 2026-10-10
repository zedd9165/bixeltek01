"use client";

import React from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { webDesignFinalOfferData } from "@/data/service/webdesing";
import ContactFromNew from "@/components/ContactFormNew";

export default function WebDesignFinalOfferPreview() {
  return (
    <section
      id="website-project"
      className="scroll-mt-24 py-24 sm:py-28 lg:py-32 bg-[#08080C] text-white relative border-t border-white/[0.08] overflow-hidden"
    >
      {/* Precision Structural Coordinate Mesh */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Ambient Purple Glow */}
      <div
        aria-hidden
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 20% 15%,
              rgba(139, 69, 255, 0.3) 0%,
              rgba(103, 14, 247, 0.12) 40%,
              transparent 75%
            )
          `,
        }}
      />

      {/* Top Accent Highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B45FF] to-transparent opacity-80 shadow-[0_0_20px_rgba(103,14,247,0.7)]" />

      {/* Main Container */}
      <div className="relative w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Offer Copy & Glass Feature Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8C45FF]/40 bg-[#8C45FF]/10 text-xs font-poppins font-semibold uppercase tracking-wider text-[#D8C5FF] mb-5 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#8C45FF]" />
                <span>{webDesignFinalOfferData.eyebrow}</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-inter text-white tracking-tight leading-[1.12] mb-5">
                {webDesignFinalOfferData.h2}{" "}
                <span className="block bg-gradient-to-r from-white via-[#D8C5FF] to-[#8B45FF] bg-clip-text text-transparent">
                  Tailored to your targets.
                </span>
              </h2>

              {/* Intro */}
              <p className="text-base md:text-lg text-neutral-300 font-poppins leading-relaxed font-normal">
                {webDesignFinalOfferData.intro}
              </p>
            </div>

            {/* Glassmorphic Value Points */}
            <div className="space-y-4 pt-2">
              {webDesignFinalOfferData.points.map((point, idx) => (
                <div
                  key={idx}
                  className="group relative p-5 rounded-2xl border border-white/[0.1] bg-white/[0.03] hover:bg-[#670EF7]/[0.08] hover:border-[#8C45FF]/40 backdrop-blur-xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] overflow-hidden"
                >
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#8B45FF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <h3 className="text-base sm:text-lg font-bold font-inter text-white flex items-center gap-2.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#8C45FF] shadow-[0_0_10px_#8C45FF]" />
                    <span>{point.title}</span>
                  </h3>
                  <p className="text-sm text-neutral-400 font-poppins leading-relaxed pl-4.5">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Reassurance Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 border-t border-white/[0.08] text-xs text-neutral-400 font-poppins">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8C45FF]" /> No high-pressure sales
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8C45FF]" /> Custom architecture plan
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8C45FF]" /> 24h response guarantee
              </span>
            </div>
          </div>

          {/* Right Column: Glassmorphic Frame for Contact Form */}
          <div className="lg:col-span-7">
            <div className="md:p-10 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden">
              <div className="relative z-10">
                <ContactFromNew />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}