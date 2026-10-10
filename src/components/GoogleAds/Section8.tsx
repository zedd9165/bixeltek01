"use client";

import React from "react";
import Link from "next/link";
import { Award, ShieldCheck, Target, Users, PhoneCall, Sparkles, ArrowUpRight } from "lucide-react";
import { bixeltekAdvantages } from "@/data/googleAdsPageData";

const advantageIcons = [Award, ShieldCheck, Target, Users];

// Fallback multi-color borders and glow themes if adv.color is not already providing border utilities
const defaultBorderStyles = [
  {
    border: "border-blue-500/40 hover:border-blue-400",
    glow: "bg-blue-600/10 group-hover:bg-blue-600/20",
    iconBg: "bg-blue-950/60 border-blue-500/40 text-blue-400",
    accent: "text-blue-400",
  },
  {
    border: "border-sky-500/40 hover:border-sky-400",
    glow: "bg-sky-600/10 group-hover:bg-sky-600/20",
    iconBg: "bg-sky-950/60 border-sky-500/40 text-sky-400",
    accent: "text-sky-400",
  },
  {
    border: "border-indigo-500/40 hover:border-indigo-400",
    glow: "bg-indigo-600/10 group-hover:bg-indigo-600/20",
    iconBg: "bg-indigo-950/60 border-indigo-500/40 text-indigo-400",
    accent: "text-indigo-400",
  },
  {
    border: "border-violet-500/40 hover:border-violet-400",
    glow: "bg-violet-600/10 group-hover:bg-violet-600/20",
    iconBg: "bg-violet-950/60 border-violet-500/40 text-violet-400",
    accent: "text-violet-400",
  },
];

export default function BixeltekAdvantage() {
  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-36 bg-black text-white overflow-hidden selection:bg-blue-600 selection:text-white">
      {/* Brand Ambient Lights */}
      <div className="absolute top-1/4 -left-28 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute bottom-10 -right-28 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[190px] pointer-events-none" />

      {/* Main Container - lg:max-w-[90%] */}
      <div className="w-full lg:max-w-[90%] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Main 2-Column Split: Overview & Partner Showcase vs Advantage Bento Matrix */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Authority & Google Partner Credential (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/30 text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 font-poppins">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>WHY BIXELTEK</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-inter tracking-tight leading-[1.12] mb-6 text-white">
                The <span className="text-blue-500">Bixeltek</span> Advantage
              </h2>

              {/* Description */}
              <p className="text-gray-300 font-poppins text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
                When you choose Bixeltek, you’re not just hiring a PPC agency. You’re gaining a dedicated performance team that works directly alongside your commercial goals:
              </p>
            </div>

            {/* Google Partner Authority Card */}
            <div className="relative rounded-2xl bg-neutral-950/90 border border-blue-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-blue-400 transition-all duration-300">
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs uppercase font-mono tracking-widest text-blue-400 font-semibold">
                      Official Accreditation
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold font-inter text-white">
                    Certified Google Partner Agency
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-poppins mt-1">
                    Verified PPC ad management & certified technical standards.
                  </p>
                </div>

                <a
                  href="https://www.google.com/partners/agency?id=2188074075"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 group/badge"
                >
                  <div className="p-3 bg-white rounded-xl shadow-md transition-transform duration-300 group-hover/badge:scale-105 flex items-center justify-center">
                    <img
                      src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                      alt="Google Partners Badge"
                      className="w-36 sm:w-44 h-auto"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 2x2 Bento Matrix with Distinct Colored Borders */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {bixeltekAdvantages.map((adv, index) => {
              const Icon = advantageIcons[index % advantageIcons.length];
              const style = defaultBorderStyles[index % defaultBorderStyles.length];

              // Check if adv.color specifies border/colors, otherwise use distinct border style
              const borderClass = adv.color && adv.color.includes("border") 
                ? adv.color 
                : `${style.border} ${adv.color || ""}`;

              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl p-7 md:p-8 bg-neutral-950/80 border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl flex flex-col justify-between overflow-hidden ${borderClass}`}
                >
                  {/* Subtle corner colored aura */}
                  <div className={`absolute -top-14 -right-14 w-32 h-32 blur-2xl rounded-full transition-all duration-300 pointer-events-none ${style.glow}`} />

                  <div>
                    {/* Header Row: Colored Icon + Counter */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-sm ${style.iconBg}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-xs font-mono font-semibold transition-colors ${style.accent}`}>
                        0{index + 1}
                      </span>
                    </div>

                    {/* Advantage Title */}
                    <h3 className="text-lg sm:text-xl font-bold font-inter text-white mb-3 tracking-tight group-hover:text-gray-100 transition-colors">
                      {adv.title}
                    </h3>

                    {/* Advantage Description */}
                    <p className="text-gray-300 font-poppins text-sm leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* BOTTOM SECTION: Full-Width Integrated ROI Banner Bar */}
        <div className="mt-14 sm:mt-20 rounded-3xl bg-gradient-to-r from-neutral-950 via-blue-950/20 to-neutral-950 border border-blue-500/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute left-1/3 top-0 w-80 h-full bg-blue-500/5 blur-3xl pointer-events-none" />

          <div className="text-center md:text-left relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold block mb-2">
              Measurable Growth
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-inter text-white">
              Work With a Google Partner Agency That Puts ROI First
            </h3>
            <p className="text-sm text-gray-400 font-poppins mt-1">
              Direct access to dedicated, certified PPC specialists who prioritize revenue over vanity metrics.
            </p>
          </div>

          <Link href="tel:+919100032301" className="shrink-0 relative z-10">
            <button className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-[0_10px_25px_rgba(37,99,235,0.35)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
              <PhoneCall className="w-4 h-4" />
              <span>Talk To Our Certified PPC Specialist</span>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}