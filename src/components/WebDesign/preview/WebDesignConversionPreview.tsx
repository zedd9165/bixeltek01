"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HelpCircle,
  Zap,
  CheckCircle,
  Smartphone,
  ArrowRightLeft,
  ArrowDown,
} from "lucide-react";
import { websiteConversionData } from "@/data/service/webdesing";

const panelIcons = [
  <HelpCircle key="0" className="w-6 h-6 text-blue-600" />,
  <Zap key="1" className="w-6 h-6 text-amber-600" />,
  <CheckCircle key="2" className="w-6 h-6 text-emerald-600" />,
  <Smartphone key="3" className="w-6 h-6 text-purple-600" />,
  <ArrowRightLeft key="4" className="w-6 h-6 text-cyan-600" />,
];

export default function WebDesignConversionPreview() {
  return (
    <section
      id="conversion"
      className="py-24 bg-[#F8F9FC] text-[#08080C] relative border-t border-gray-200 overflow-hidden"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Intro */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{websiteConversionData.eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
            {websiteConversionData.h2}
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed">
            {websiteConversionData.intro}
          </p>
        </div>

        {/* Connected Horizontal Flow / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {websiteConversionData.panels.map((panel, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between group hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              {/* Stage Indicator Node */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {panelIcons[idx % panelIcons.length]}
                </div>
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
              {idx < websiteConversionData.panels.length - 1 && (
                <div className="lg:hidden mt-6 pt-4 flex justify-center text-gray-400">
                  <ArrowDown className="w-5 h-5 animate-bounce" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Supporting Link Bar */}
        {websiteConversionData.supportingLink && (
          <div className="mt-14 p-6 rounded-2xl bg-white border border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
            <p className="text-sm text-gray-700 font-poppins">
              Connecting visitor intent to performant, conversion-focused user journeys.
            </p>
            {/* <Link
              href={websiteConversionData.supportingLink.destination}
              className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 font-poppins transition-colors group flex-shrink-0"
            >
              <span>{websiteConversionData.supportingLink.text}</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link> */}
          </div>
        )}
      </div>
    </section>
  );
}
