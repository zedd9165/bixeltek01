"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Search,
  Eye,
  SlidersHorizontal,
  Lightbulb,
  FlaskConical,
  BarChart3,
  RotateCw,
  ArrowRight,
  Sparkles,
  Layers,
  TrendingUp,
} from "lucide-react";
import type { CROOpportunityStep } from "@/data/service/conversionRateOptimization";

export interface CROOpportunityFrameworkProps {
  id?: string;
  eyebrow?: string;
  h2?: string;
  intro?: string;
  steps: CROOpportunityStep[];
}

const STEP_ICONS = [
  LineChart,
  Search,
  Eye,
  SlidersHorizontal,
  Lightbulb,
  FlaskConical,
  BarChart3,
  RotateCw,
];

const PHASE_LABELS: Record<number, { tag: string; label: string; accent: string }> = {
  0: { tag: "Phase I", label: "Diagnostic Foundation", accent: "from-blue-500/20 to-cyan-500/0" },
  1: { tag: "Phase I", label: "Diagnostic Foundation", accent: "from-blue-500/20 to-cyan-500/0" },
  2: { tag: "Phase II", label: "Behavioral Discovery", accent: "from-indigo-500/20 to-purple-500/0" },
  3: { tag: "Phase II", label: "Strategic Prioritization", accent: "from-indigo-500/20 to-purple-500/0" },
  4: { tag: "Phase III", label: "Hypothesis Design", accent: "from-purple-500/20 to-pink-500/0" },
  5: { tag: "Phase III", label: "Controlled Execution", accent: "from-purple-500/20 to-pink-500/0" },
  6: { tag: "Phase IV", label: "Impact Analysis", accent: "from-emerald-500/20 to-blue-500/0" },
  7: { tag: "Phase IV", label: "Iterative Compounding", accent: "from-emerald-500/20 to-blue-500/0" },
};

export default function CROOpportunityFramework({
  id = "cro-opportunities",
  eyebrow = "HOW WE FIND CONVERSION OPPORTUNITIES",
  h2 = "A Systematic Diagnostic Framework, Not Guesswork or Arbitrary Tests",
  intro = "Real conversion optimization is a diagnostic science. We follow a structured opportunity framework that connects analytics, user behaviour and evidence-backed hypotheses before making or testing any changes.",
  steps,
}: CROOpportunityFrameworkProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section
      id={id}
      className="scroll-mt-24 py-24 sm:py-32 bg-[#060609] text-white relative border-t border-gray-800/80 overflow-hidden"
    >
      {/* Background Matrix & Subtle Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with KPI Indicator */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-poppins font-semibold uppercase tracking-wider mb-5 shadow-inner shadow-blue-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>{eyebrow}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-inter tracking-tight leading-[1.12] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
            {h2}
          </h2>

          <p className="text-base md:text-lg text-slate-300 font-poppins leading-relaxed max-w-3xl mx-auto">
            {intro}
          </p>
        </div>

        {/* The 8-Step Interactive Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = STEP_ICONS[idx % STEP_ICONS.length];
            const phase = PHASE_LABELS[idx] || { tag: "Step", label: "Cycle", accent: "" };
            const isLast = idx === steps.length - 1;
            const isHovered = activeStep === idx;

            return (
              <motion.div
                key={step.number || idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
                className={`group relative rounded-2xl p-6 md:p-7 border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isLast
                    ? "bg-gradient-to-b from-blue-950/40 via-[#0d1222]/80 to-[#080a12] border-white/30 shadow-xl shadow-blue-950/30 hover:border-blue-400"
                    : "bg-[#0b0c13]/90 border-white/30 hover:border-blue-500/40 hover:bg-[#0e1019]"
                }`}
              >
                {/* Dynamic Subtle Hover Beam */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${phase.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Ghost Step Number Backdrop */}
                <div className="absolute top-2 right-4 text-7xl font-extrabold font-inter text-white/20 select-none pointer-events-none tracking-tighter group-hover:text-white/30 transition-colors">
                  {step.number}
                </div>

                <div className="relative z-10">
                  {/* Top Bar: Icon + Phase Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                        isLast
                          ? "bg-blue-600 text-white border-blue-400/50 shadow-lg shadow-blue-600/30"
                          : "bg-slate-900/90 border-slate-700/60 text-blue-400 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold font-inter text-white group-hover:text-blue-300 transition-colors duration-200 mb-2.5">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 font-poppins leading-relaxed line-clamp-4 group-hover:text-slate-300 transition-colors">
                    {step.description}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner: Interactive KPI / Takeaway Summary */}
        <div className="mt-14 relative rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-[#0c0d16] border border-blue-500/30 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-start sm:items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center flex-shrink-0 text-blue-400">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 font-poppins">
                  Continuous Compounding
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-blue-500/20 text-blue-300 rounded border border-blue-400/20">
                  Data-Driven
                </span>
              </div>
              <p className="text-sm text-slate-300 font-poppins leading-relaxed max-w-2xl">
                Every iteration generates definitive behavioral data. We eliminate vanity metrics and validate decisions directly against bottom-line conversion lifts.
              </p>
            </div>
          </div>

          <a
            href="#final-cta"
            className="relative z-10 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-poppins font-semibold text-xs sm:text-sm transition duration-300 flex-shrink-0 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            <span>Audit Your Conversion Funnel</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}