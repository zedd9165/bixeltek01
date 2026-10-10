"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUpRight, HiCheck } from "react-icons/hi2";
import {
  googleAdsTargetAudienceItems as defaultItems,
  googleAdsTargetAudienceHeader as defaultHeader,
  TargetAudienceItem,
} from "@/data/googleAdsPageData";

interface TargetAudienceSectionProps {
  header?: {
    headingPart1: string;
    headingHighlight: string;
    description: string;
    closing?: string;
    ctaText?: string;
    ctaHref?: string;
  };
  items?: TargetAudienceItem[];
}

export default function TargetAudienceSection({
  header = defaultHeader,
  items = defaultItems,
}: TargetAudienceSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeItem = items[selectedIndex] || items[0];

  return (
    <section className="relative w-full py-20 md:py-32 bg-white text-slate-900 overflow-hidden">
      {/* Brand Ambient Glows - Subtle and clean for light theme */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-100/70 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-sky-100/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="md:max-w-[90%] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-6xl mb-16 md:mb-20 mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold font-inter leading-tight mb-6 text-slate-900"
          >
            {header.headingPart1}{" "}
            <span className="text-blue-600">{header.headingHighlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-slate-600 font-poppins text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            {header.description}
          </motion.p>
        </div>

        {/* Dynamic Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Vertical Segment Selectors (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {items.map((item, index) => {
              const isSelected = selectedIndex === index;

              return (
                <button
                  key={item.number}
                  onClick={() => setSelectedIndex(index)}
                  className={`group relative text-left p-5 md:p-6 rounded-2xl transition-all duration-300 border flex items-center justify-between gap-4 ${
                    isSelected
                      ? "bg-blue-50/70 border-blue-500 shadow-[0_4px_20px_rgba(37,99,235,0.12)]"
                      : "bg-slate-50/80 border-slate-200/80 hover:border-slate-300 hover:bg-slate-100/70"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-sm md:text-base font-mono font-bold transition-colors ${
                        isSelected ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      {item.number}
                    </span>
                    <h3
                      className={`text-base md:text-lg font-bold font-inter transition-colors ${
                        isSelected ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Active Indicator Pip */}
                  <div
                    className={`w-2.5 h-2.5 rounded-full shrink-0 transition-all ${
                      isSelected
                        ? "bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)] scale-110"
                        : "bg-slate-300 group-hover:bg-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Feature Showcase Canvas (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative h-full min-h-[420px] rounded-3xl bg-white border border-slate-200/90 p-8 md:p-12 flex flex-col justify-between overflow-hidden shadow-[0_10px_35px_rgba(15,23,42,0.06)]">
              {/* Backlit Stage Accent */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.number}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative z-10 flex flex-col h-full justify-between"
                >
                  <div>
                    {/* Top Row: Tag & Number Watermark */}
                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold uppercase tracking-wider">
                        <HiCheck className="w-3.5 h-3.5" />
                        <span>Tailored Scenario</span>
                      </div>
                      <span className="text-4xl md:text-5xl font-mono font-black text-slate-200 select-none">
                        {activeItem.number}
                      </span>
                    </div>

                    {/* Item Title */}
                    <h3 className="text-2xl md:text-4xl font-bold font-inter text-slate-900 leading-snug mb-6">
                      {activeItem.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 font-poppins text-lg md:text-xl leading-relaxed">
                      {activeItem.description}
                    </p>
                  </div>

                  {/* Bottom Footer Details Inside Showcase */}
                  <div className="pt-10 mt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {header.ctaHref && header.ctaText && (
                      <Link
                        href={header.ctaHref}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition group"
                      >
                        <span>Discuss this scenario</span>
                        <HiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Section Closing CTA Footer */}
        {(header.closing || (header.ctaHref && header.ctaText)) && (
          <div className="mt-16 pt-12 border-t border-slate-900/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {header.closing && (
              <p className="text-slate-600 font-poppins text-base max-w-2xl leading-relaxed">
                {header.closing}
              </p>
            )}
            {header.ctaHref && header.ctaText && (
              <Link href={header.ctaHref} className="shrink-0">
                <button className="px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm md:text-base shadow-[0_10px_25px_rgba(37,99,235,0.25)] transition-all duration-200 hover:-translate-y-0.5">
                  {header.ctaText}
                </button>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}