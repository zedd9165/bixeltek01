"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { DollarSign, Sliders, Wrench, ArrowRight, ShieldCheck } from "lucide-react";
import { budgetFeesPreviewData } from "@/data/googleAdsPreviewData";

const feeIcons = [
  <DollarSign key="0" className="w-6 h-6 text-blue-600" />,
  <Sliders key="1" className="w-6 h-6 text-purple-600" />,
  <Wrench key="2" className="w-6 h-6 text-emerald-600" />,
];

const feeTiers = [
  { recipient: "Direct to Google", billing: "Direct Ad Spend" },
  { recipient: "Direct to Bixeltek", billing: "Agreed Scope" },
  { recipient: "Optional / Milestone", billing: "Scoped Separately" },
];

export default function BudgetFeesPreview() {
  return (
    <section
      id="fees-budget"
      className="scroll-mt-24 py-24 bg-white text-[#08080C] relative border-t border-gray-200"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Intro */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{budgetFeesPreviewData.eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
            {budgetFeesPreviewData.h2}
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed">
            {budgetFeesPreviewData.intro}
          </p>
        </div>

        {/* 3-Column Structured Investment Framework (Clean White Ledger / Card Display) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {budgetFeesPreviewData.cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col justify-between hover:border-blue-400 hover:shadow-lg transition duration-300 group relative"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                    {feeIcons[idx]}
                  </div>
                  <span className="text-xs font-poppins font-semibold px-2.5 py-1 rounded bg-white border border-gray-200 text-gray-600">
                    {feeTiers[idx].billing}
                  </span>
                </div>

                <div>
                  <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider font-poppins mb-1">
                    {feeTiers[idx].recipient}
                  </div>
                  <h3 className="text-2xl font-bold font-inter text-[#08080C] group-hover:text-blue-600 transition-colors">
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

        {/* Commercial Terms & Ownership Safeguard Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-blue-50/70 border border-blue-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-4xl">
            <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-800 font-poppins">
                Account Ownership & Governance
              </div>
              <p className="text-sm sm:text-base text-gray-700 font-poppins leading-relaxed">
                {budgetFeesPreviewData.supportingParagraph}
              </p>
            </div>
          </div>

          <Link
            href={budgetFeesPreviewData.buttonHref}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-poppins font-medium text-sm md:text-base shadow-lg shadow-blue-600/20 transition duration-300 flex-shrink-0"
          >
            <span>{budgetFeesPreviewData.buttonText}</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
