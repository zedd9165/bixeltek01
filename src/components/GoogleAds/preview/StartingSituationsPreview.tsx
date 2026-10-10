"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, RefreshCw, ArrowRight } from "lucide-react";
import { startingSituationsPreviewData } from "@/data/googleAdsPreviewData";

export default function StartingSituationsPreview() {
  return (
    <section className="py-24 bg-[#F8F9FC] text-[#08080C] relative border-t border-gray-200">
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{startingSituationsPreviewData.eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15]">
            {startingSituationsPreviewData.h2}
          </h2>
        </div>

        {/* 2 Substantial Cards on Subtle Grey with White Surface */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: New */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 flex flex-col justify-between hover:border-blue-500 hover:shadow-xl transition duration-300 relative group"
          >
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-inter text-[#08080C]">
                {startingSituationsPreviewData.cards[0].title}
              </h3>
              <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed">
                {startingSituationsPreviewData.cards[0].description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link
                href={startingSituationsPreviewData.buttonHref}
                className="inline-flex items-center text-sm md:text-base font-semibold text-blue-600 group-hover:text-blue-700 transition-colors font-poppins"
              >
                <span>{startingSituationsPreviewData.buttonText}</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Existing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-purple-500 hover:shadow-xl transition duration-300 relative group"
          >
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-105 transition-transform">
                <RefreshCw className="w-7 h-7" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-inter text-[#08080C]">
                {startingSituationsPreviewData.cards[1].title}
              </h3>
              <p className="text-base sm:text-lg text-gray-700 font-poppins leading-relaxed">
                {startingSituationsPreviewData.cards[1].description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link
                href={startingSituationsPreviewData.buttonHref}
                className="inline-flex items-center text-sm sm:text-base font-semibold text-purple-600 group-hover:text-purple-700 transition-colors font-poppins"
              >
                <span>{startingSituationsPreviewData.buttonText}</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
