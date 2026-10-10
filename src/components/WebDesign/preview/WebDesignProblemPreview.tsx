"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HelpCircle,
  TrendingDown,
  Compass,
  Layers,
  Palette,
  Wrench,
} from "lucide-react";
import { websiteProblemData } from "@/data/service/webdesing";

const problemCardThemes = [
  {
    icon: <HelpCircle className="w-6 h-6 text-red-600" />,
    badgeText: "Unclear Positioning",
    badgeBg: "bg-red-50 text-red-700 border-red-200",
    iconBg: "bg-red-50 border-red-200 text-red-600",
    glowGradient: "from-red-500/10 via-rose-500/5 to-transparent",
    topAccent: "from-transparent via-red-500/40 to-transparent",
    borderColor: "border-red-100 hover:border-red-300",
  },
  {
    icon: <TrendingDown className="w-6 h-6 text-amber-600" />,
    badgeText: "Conversion Friction",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
    iconBg: "bg-amber-50 border-amber-200 text-amber-600",
    glowGradient: "from-amber-500/10 via-yellow-500/5 to-transparent",
    topAccent: "from-transparent via-amber-500/40 to-transparent",
    borderColor: "border-amber-100 hover:border-amber-300",
  },
  {
    icon: <Compass className="w-6 h-6 text-blue-600" />,
    badgeText: "Architecture Chaos",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    iconBg: "bg-blue-50 border-blue-200 text-blue-600",
    glowGradient: "from-blue-500/10 via-sky-500/5 to-transparent",
    topAccent: "from-transparent via-blue-500/40 to-transparent",
    borderColor: "border-blue-100 hover:border-blue-300",
  },
  {
    icon: <Layers className="w-6 h-6 text-purple-600" />,
    badgeText: "Scalability Limit",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
    iconBg: "bg-purple-50 border-purple-200 text-purple-600",
    glowGradient: "from-purple-500/10 via-indigo-500/5 to-transparent",
    topAccent: "from-transparent via-purple-500/40 to-transparent",
    borderColor: "border-purple-100 hover:border-purple-300",
  },
  {
    icon: <Palette className="w-6 h-6 text-emerald-600" />,
    badgeText: "Brand Disconnect",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconBg: "bg-emerald-50 border-emerald-200 text-emerald-600",
    glowGradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    topAccent: "from-transparent via-emerald-500/40 to-transparent",
    borderColor: "border-emerald-100 hover:border-emerald-300",
  },
  {
    icon: <Wrench className="w-6 h-6 text-cyan-600" />,
    badgeText: "Audit Uncertainty",
    badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
    iconBg: "bg-cyan-50 border-cyan-200 text-cyan-600",
    glowGradient: "from-cyan-500/10 via-sky-500/5 to-transparent",
    topAccent: "from-transparent via-cyan-500/40 to-transparent",
    borderColor: "border-cyan-100 hover:border-cyan-300",
  },
];

export default function WebDesignProblemPreview() {
  return (
    <section
      id="problems"
      className="py-24 sm:py-32 bg-white text-[#08080C] relative border-t border-gray-200/80 overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-red-100/40 via-amber-100/30 to-blue-100/40 blur-[140px] pointer-events-none rounded-full" />

      <div className="w-full lg:max-w-[90%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Centered Section Header */}
        <div className="max-w-6xl mx-auto text-center space-y-6 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50/80 border border-red-200 text-red-600 text-xs font-poppins font-semibold uppercase tracking-wider shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span>{websiteProblemData.eyebrow}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.12]"
          >
            {websiteProblemData.h2}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-gray-600 font-poppins leading-relaxed max-w-5xl mx-auto"
          >
            {websiteProblemData.intro}
          </motion.p>
        </div>

        {/* Dynamic Glassmorphism Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {websiteProblemData.cards.map((item, idx) => {
            const theme = problemCardThemes[idx % problemCardThemes.length];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className={`group relative rounded-[28px] bg-white/70 backdrop-blur-xl border ${theme.borderColor} p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Subtle Card Ambient Glow & Top Specular Highlight */}
                <div
                  className={`absolute -top-24 -right-24 w-56 h-56 bg-gradient-to-br ${theme.glowGradient} rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}
                />
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${theme.topAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10 space-y-6">
                  {/* Top Bar: Icon */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 shadow-sm ${theme.iconBg}`}
                    >
                      {theme.icon}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold font-inter text-[#08080C] leading-snug tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 font-poppins leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Metric/Badge */}
                <div className="relative z-10 pt-8 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-poppins font-semibold border ${theme.badgeBg}`}
                  >
                    {theme.badgeText}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
