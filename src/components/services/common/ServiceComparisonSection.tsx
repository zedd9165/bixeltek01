"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Clock,
  Gauge,
  Layers,
  Plug,
  ShieldCheck,
  SlidersHorizontal,
  Wallet,
  Wrench,
} from "lucide-react";

export interface ComparisonRow {
  factor: string;
  platformText: string;
  customCodedText: string;
}

export interface ServiceComparisonSectionProps {
  id?: string;
  eyebrow?: string;
  h2: string;
  intro: string;
  platformLabel: string;
  customCodedLabel?: string;
  rows: {
    factor: string;
    platform?: string;
    woocommerce?: string;
    customCoded: string;
  }[];
  platformBestFor: string;
  customCodedBestFor: string;
  closingNote?: string;
  pillarHref?: string;
  pillarText?: string;
  customEcommerceHref?: string;
  customEcommerceText?: string;
}

// One icon per decision factor (cycles if more rows are added)
const factorIcons = [
  Layers,
  Clock,
  SlidersHorizontal,
  Plug,
  Wrench,
  Wallet,
  Boxes,
  Gauge,
];

// Shared 3-part layout: platform | spine | custom-coded
const TRACK = "lg:grid-cols-[1fr_168px_1fr]";

export default function ServiceComparisonSection({
  id = "platform-comparison",
  eyebrow = "CHOOSING YOUR COMMERCE ARCHITECTURE",
  h2,
  intro,
  platformLabel,
  customCodedLabel = "Custom-Coded Ecommerce",
  rows,
  platformBestFor,
  customCodedBestFor,
  closingNote,
  pillarHref = "/services/ecommerce-development",
  pillarText = "Explore Ecommerce Architecture",
  customEcommerceHref,
  customEcommerceText = "Explore Custom Coded Websites",
}: ServiceComparisonSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 py-20 md:py-28 bg-white text-[#08080C] relative border-t border-gray-200 overflow-hidden"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{eyebrow}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
            {h2.includes(":") ? (
              <>
                <span className="text-[#08080C]">{h2.split(":")[0]}: </span>
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {h2.split(":").slice(1).join(":")}
                </span>
              </>
            ) : (
              <span className="bg-gradient-to-r from-gray-950 via-blue-700 to-purple-600 bg-clip-text text-transparent">
                {h2}
              </span>
            )}
          </h2>

          <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed">
            {intro}
          </p>
        </div>

        {/* Mobile legend (desktop uses the big header cards below) */}
        <div className="flex flex-wrap gap-3 mb-8 lg:hidden">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1.5 text-xs font-poppins font-semibold text-blue-700">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            {platformLabel}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 border border-gray-300 px-3.5 py-1.5 text-xs font-poppins font-semibold text-gray-800">
            <span className="w-2 h-2 rounded-full bg-[#08080C]" />
            {customCodedLabel}
          </span>
        </div>

        {/* Desktop versus header */}
        <div className={`hidden lg:grid ${TRACK} gap-4 items-center mb-8`}>
          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-white shadow-xl shadow-blue-600/20">
            <span className="inline-block mb-2 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-poppins font-semibold uppercase tracking-wider">
              Platform route
            </span>
            <h3 className="text-2xl font-bold font-inter tracking-tight">
              {platformLabel}
            </h3>
          </div>

          <div className="flex justify-center">
            <span className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 shadow-md flex items-center justify-center text-sm font-extrabold font-inter text-[#08080C]">
              VS
            </span>
          </div>

          <div className="rounded-2xl bg-[#08080C] p-6 text-white shadow-xl shadow-black/20">
            <span className="inline-block mb-2 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-poppins font-semibold uppercase tracking-wider">
              Custom route
            </span>
            <h3 className="text-2xl font-bold font-inter tracking-tight">
              {customCodedLabel}
            </h3>
          </div>
        </div>

        {/* Comparison rows along a central spine */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-2 bottom-2 border-l-2 border-dashed border-gray-200"
          />

          <div className="space-y-8 lg:space-y-5 relative">
            {rows.map((row, idx) => {
              const platformVal = row.platform ?? row.woocommerce ?? "";
              const Icon = factorIcons[idx % factorIcons.length];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: Math.min(idx, 3) * 0.05 }}
                  className={`group grid grid-cols-1 ${TRACK} gap-3 lg:gap-4 items-stretch`}
                >
                  {/* Platform cell */}
                  <div className="order-2 lg:order-1 rounded-2xl border border-blue-200 border-r-4 border-r-blue-600 bg-gradient-to-br from-blue-50 to-white p-5 sm:p-6 transition-all duration-300 group-hover:border-blue-400 group-hover:border-r-blue-600 group-hover:shadow-lg group-hover:shadow-blue-600/10">
                    <span className="lg:hidden inline-block mb-2 text-[11px] font-bold uppercase tracking-wider text-blue-700 font-poppins">
                      {platformLabel}
                    </span>
                    <p className="text-sm sm:text-[15px] text-gray-700 font-poppins leading-relaxed">
                      {platformVal}
                    </p>
                  </div>

                  {/* Factor on the spine */}
                  <div className="order-1 lg:order-2 relative z-10 flex lg:flex-col items-center lg:justify-center gap-3 lg:gap-2 lg:text-center">
                    <span className="w-11 h-11 rounded-full bg-white border-2 border-gray-200 text-gray-600 flex items-center justify-center shadow-sm flex-shrink-0 transition-colors duration-300 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="bg-white lg:px-1.5 lg:py-0.5 text-sm font-semibold font-inter text-[#08080C] leading-snug">
                      {row.factor}
                    </span>
                  </div>

                  {/* Custom-coded cell */}
                  <div className="order-3 rounded-2xl border border-gray-200 border-l-4 border-l-[#08080C] bg-slate-50 p-5 sm:p-6 transition-all duration-300 group-hover:border-slate-400 group-hover:border-l-[#08080C] group-hover:shadow-lg group-hover:shadow-slate-900/10">
                    <span className="lg:hidden inline-block mb-2 text-[11px] font-bold uppercase tracking-wider text-gray-800 font-poppins">
                      {customCodedLabel}
                    </span>
                    <p className="text-sm sm:text-[15px] text-gray-700 font-poppins leading-relaxed">
                      {row.customCoded}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Verdict: best-for, aligned under each side */}
        <div className={`grid grid-cols-1 ${TRACK} gap-4 mt-12 items-stretch`}>
          <div className="order-2 lg:order-1 p-7 rounded-2xl bg-white border border-blue-200 border-t-4 border-t-blue-600 shadow-sm">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 font-poppins mb-3">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>When {platformLabel} Is Best</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold font-inter text-[#08080C] mb-2">
              Managed Platform & Speed to Market
            </h4>
            <p className="text-sm text-gray-600 font-poppins leading-relaxed">
              {platformBestFor}
            </p>
          </div>

          <div className="order-1 lg:order-2 flex items-center justify-center">
            <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 font-poppins shadow-sm">
              Best for
            </span>
          </div>

          <div className="order-3 p-7 rounded-2xl bg-white border border-gray-200 border-t-4 border-t-[#08080C] shadow-sm">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 font-poppins mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>When {customCodedLabel} Is Best</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold font-inter text-[#08080C] mb-2">
              Architectural Autonomy & Bespoke Logic
            </h4>
            <p className="text-sm text-gray-600 font-poppins leading-relaxed">
              {customCodedBestFor}
            </p>
          </div>
        </div>

        {/* Closing Note & Links */}
        <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-3.5 max-w-3xl">
            <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700 font-poppins leading-relaxed">
              {closingNote ||
                "The right architecture depends on your operational requirements, integration surface, and maintenance team."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {pillarHref && (
              <Link
                href={pillarHref}
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 font-poppins transition-colors group"
              >
                <span>{pillarText}</span>
                <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
            {customEcommerceHref && (
              <Link
                href={customEcommerceHref}
                className="inline-flex items-center text-sm font-semibold text-gray-700 hover:text-gray-900 font-poppins transition-colors group"
              >
                <span>{customEcommerceText}</span>
                <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}