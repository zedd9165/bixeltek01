"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Layers,
  Palette,
  Cpu,
  FileText,
  Network,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { webInvestmentData } from "@/data/service/webdesing";

const investmentIcons = [
  <Layers key="0" className="w-6 h-6 text-blue-600" />,
  <Palette key="1" className="w-6 h-6 text-purple-600" />,
  <Cpu key="2" className="w-6 h-6 text-indigo-600" />,
  <FileText key="3" className="w-6 h-6 text-amber-600" />,
  <Network key="4" className="w-6 h-6 text-cyan-600" />,
  <TrendingUp key="5" className="w-6 h-6 text-emerald-600" />,
];

export default function WebDesignInvestmentPreview() {
  return (
    <section
      id="investment"
      className="scroll-mt-24 py-24 bg-white text-[#08080C] relative border-t border-gray-200"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Intro */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{webInvestmentData.eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
            {webInvestmentData.h2}
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed">
            {webInvestmentData.intro}
          </p>
        </div>

        {/* 6-Card Investment Drivers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webInvestmentData.cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col justify-between hover:border-blue-400 hover:shadow-lg transition duration-300 group relative"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                    {investmentIcons[idx % investmentIcons.length]}
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-white border border-gray-200 text-gray-500">
                    Factor 0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-inter text-[#08080C] group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-gray-600 font-poppins leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commercial Proposal Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-blue-50/70 border border-blue-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-4xl">
            <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-800 font-poppins">
                Clear Scope & Transparent Proposals
              </div>
              <p className="text-sm sm:text-base text-gray-700 font-poppins leading-relaxed">
                {webInvestmentData.supportingParagraph}
              </p>
            </div>
          </div>

          <Link
            href={webInvestmentData.buttonHref}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-poppins font-medium text-sm md:text-base shadow-lg shadow-blue-600/20 transition duration-300 flex-shrink-0"
          >
            <span>{webInvestmentData.buttonText}</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
