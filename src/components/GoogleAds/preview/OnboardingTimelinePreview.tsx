"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users2 } from "lucide-react";
import { onboardingTimelinePreviewData } from "@/data/googleAdsPreviewData";

export default function OnboardingTimelinePreview() {
  return (
    <section
      id="process"
      className="scroll-mt-24 py-24 bg-white text-[#08080C] relative border-t border-gray-200 overflow-hidden"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Intro */}
        <div className="max-w-6xl mb-16 mx-auto md:text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{onboardingTimelinePreviewData.eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
            {onboardingTimelinePreviewData.h2}
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed max-w-4xl mx-auto">
            {onboardingTimelinePreviewData.intro}
          </p>
        </div>

        {/* Horizontal Process Stepper on White */}
        <div className="relative">
          {/* Continuous Timeline Track Line on Desktop */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 z-0 pointer-events-none opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {onboardingTimelinePreviewData.stages.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-4 group"
              >
                {/* Stepper Node */}
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white border-2 border-blue-500 flex items-center justify-center font-poppins font-bold text-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-md">
                    0{idx + 1}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-poppins uppercase tracking-wider">
                    {stage.stageNumber}
                  </span>
                </div>

                {/* Stage Description */}
                <div className="pt-2 space-y-2 border-l-2 md:border-l-0 pl-4 md:pl-0 border-gray-200">
                  <h3 className="text-xl font-bold font-inter text-[#08080C] group-hover:text-blue-600 transition-colors">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-poppins leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Collaborative Expectations Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col text-center items-center gap-4 max-w-4xl mx-auto shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
            <Users2 className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-500 font-poppins">
              Partnership & Feedback Alignment
            </div>
            <p className="text-sm sm:text-base text-gray-700 font-poppins leading-relaxed">
              {onboardingTimelinePreviewData.supportingParagraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
