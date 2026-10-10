"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layout, Activity, GitFork, ArrowDown } from "lucide-react";
import { conversionJourneyPreviewData } from "@/data/googleAdsPreviewData";

const panelIcons = [
  <Layout key="0" className="w-6 h-6 text-blue-600" />,
  <Activity key="1" className="w-6 h-6 text-emerald-600" />,
  <GitFork key="2" className="w-6 h-6 text-purple-600" />,
];

export default function ConversionJourneyPreview() {
  return (
    <section className="py-24 bg-[#F8F9FC] text-[#08080C] relative border-t border-gray-200 overflow-hidden">
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Intro */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{conversionJourneyPreviewData.eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
            {conversionJourneyPreviewData.h2}
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed">
            {conversionJourneyPreviewData.intro}
          </p>
        </div>

        {/* Connected Horizontal Pipeline Flow on Grey/Light Slate */}
        <div className="relative">
          {/* Connecting Track Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 -translate-y-8 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {conversionJourneyPreviewData.panels.map((panel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between group hover:border-blue-500 hover:shadow-lg transition-all duration-300"
              >
                {/* Stage Indicator Node */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {panelIcons[idx]}
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                    Phase 0{idx + 1}
                  </span>
                </div>

                <div className="space-y-3 flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold font-inter text-[#08080C] group-hover:text-blue-600 transition-colors">
                    {panel.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-poppins leading-relaxed">
                    {panel.description}
                  </p>
                </div>

                {/* Flow indicator on mobile */}
                {idx < 2 && (
                  <div className="lg:hidden mt-6 pt-4 flex justify-center text-gray-400">
                    <ArrowDown className="w-5 h-5 animate-bounce" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Supporting Link Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
          <p className="text-sm text-gray-700 font-poppins">
            Connecting Google Ads traffic to performant, custom-engineered landing environments.
          </p>
          <Link
            href={conversionJourneyPreviewData.supportingLink.destination}
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 font-poppins transition-colors group flex-shrink-0"
          >
            <span>{conversionJourneyPreviewData.supportingLink.text}</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
