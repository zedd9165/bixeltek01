"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  ShoppingBag,
  Briefcase,
  Zap,
  Layers,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

export interface ServiceUseCaseCardItem {
  title: string;
  description: string;
  examples?: string[];
  icon?: LucideIcon;
}

export interface ServiceUseCaseSectionProps {
  id?: string;
  eyebrow?: string;
  h2?: string;
  intro?: string;
  badgeLabel?: string;
  examplesTitle?: string;
  cards: ServiceUseCaseCardItem[];
}

const DEFAULT_ICONS: LucideIcon[] = [
  Smartphone,
  ShoppingBag,
  Briefcase,
  Zap,
  Layers,
  RefreshCw,
];

/**
 * Full class names are written out on purpose: Tailwind cannot detect
 * dynamically interpolated classes (e.g. `from-${color}-50`).
 */
const THEMES = [
  {
    card: "from-violet-50 via-white to-white border-violet-200 hover:border-violet-400 hover:shadow-violet-200/60",
    glow: "bg-violet-400/20",
    icon: "from-violet-500 to-violet-700 shadow-violet-500/30",
    pill: "bg-violet-600 text-white",
    title: "group-hover:text-violet-700",
    label: "text-violet-700/70",
    chip: "bg-violet-50 border-violet-200 text-violet-700",
    divider: "border-violet-100",
  },
  {
    card: "from-blue-50 via-white to-white border-blue-200 hover:border-blue-400 hover:shadow-blue-200/60",
    glow: "bg-blue-400/20",
    icon: "from-blue-500 to-blue-700 shadow-blue-500/30",
    pill: "bg-blue-600 text-white",
    title: "group-hover:text-blue-700",
    label: "text-blue-700/70",
    chip: "bg-blue-50 border-blue-200 text-blue-700",
    divider: "border-blue-100",
  },
  {
    card: "from-emerald-50 via-white to-white border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-200/60",
    glow: "bg-emerald-400/20",
    icon: "from-emerald-500 to-emerald-700 shadow-emerald-500/30",
    pill: "bg-emerald-600 text-white",
    title: "group-hover:text-emerald-700",
    label: "text-emerald-700/70",
    chip: "bg-emerald-50 border-emerald-200 text-emerald-700",
    divider: "border-emerald-100",
  },
  {
    card: "from-amber-50 via-white to-white border-amber-200 hover:border-amber-400 hover:shadow-amber-200/60",
    glow: "bg-amber-400/20",
    icon: "from-amber-500 to-orange-600 shadow-amber-500/30",
    pill: "bg-amber-600 text-white",
    title: "group-hover:text-amber-700",
    label: "text-amber-700/70",
    chip: "bg-amber-50 border-amber-200 text-amber-700",
    divider: "border-amber-100",
  },
  {
    card: "from-rose-50 via-white to-white border-rose-200 hover:border-rose-400 hover:shadow-rose-200/60",
    glow: "bg-rose-400/20",
    icon: "from-rose-500 to-rose-700 shadow-rose-500/30",
    pill: "bg-rose-600 text-white",
    title: "group-hover:text-rose-700",
    label: "text-rose-700/70",
    chip: "bg-rose-50 border-rose-200 text-rose-700",
    divider: "border-rose-100",
  },
  {
    card: "from-cyan-50 via-white to-white border-cyan-200 hover:border-cyan-400 hover:shadow-cyan-200/60",
    glow: "bg-cyan-400/20",
    icon: "from-cyan-500 to-cyan-700 shadow-cyan-500/30",
    pill: "bg-cyan-600 text-white",
    title: "group-hover:text-cyan-700",
    label: "text-cyan-700/70",
    chip: "bg-cyan-50 border-cyan-200 text-cyan-700",
    divider: "border-cyan-100",
  },
];

export default function ServiceUseCaseSection({
  id = "use-cases",
  eyebrow = "USE CASES",
  h2 = "Solutions Designed Around Practical Business Contexts",
  intro = "Engineered to solve clear operational challenges and deliver repeatable commercial outcomes.",
  badgeLabel = "Context",
  examplesTitle = "Common Applications",
  cards,
}: ServiceUseCaseSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 py-24 sm:py-28 bg-white text-[#08080C] relative border-t border-gray-200 overflow-hidden"
    >
      {/* Soft light-theme background accents */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(103,14,247,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-violet-200/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-blue-200/40 blur-3xl pointer-events-none" />

      <div className="relative w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
            {h2}
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed">
            {intro}
          </p>
        </div>

        {/* Dynamic Themed Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon || DEFAULT_ICONS[idx % DEFAULT_ICONS.length];
            const t = THEMES[idx % THEMES.length];
            const number = String(idx + 1).padStart(2, "0");

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`group relative overflow-hidden p-7 sm:p-8 rounded-2xl border bg-gradient-to-br ${t.card} hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
              >
                {/* Corner glow */}
                <div
                  className={`absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-150 ${t.glow}`}
                />

                <div className="relative">
                  {/* Card Header: Icon + Number pill */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.icon} shadow-lg flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      {badgeLabel && (
                        <span
                          className={`text-[11px] font-poppins font-semibold uppercase tracking-wider ${t.label}`}
                        >
                          {badgeLabel}
                        </span>
                      )}
                      <span
                        className={`min-w-[2rem] h-7 px-2 rounded-full flex items-center justify-center text-xs font-bold font-inter shadow-sm ${t.pill}`}
                      >
                        {number}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`flex items-start justify-between gap-2 text-xl font-bold font-inter text-[#08080C] mb-3 transition-colors ${t.title}`}
                  >
                    <span>{card.title}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 font-poppins leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Example chips */}
                {card.examples && card.examples.length > 0 && (
                  <div className={`relative pt-5 border-t ${t.divider}`}>
                    <div
                      className={`text-[11px] font-poppins font-semibold uppercase tracking-wider mb-2.5 ${t.label}`}
                    >
                      {examplesTitle}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {card.examples.map((example, eIdx) => (
                        <span
                          key={eIdx}
                          className={`inline-block px-2.5 py-1 rounded-md border text-[12px] font-poppins font-medium ${t.chip}`}
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

