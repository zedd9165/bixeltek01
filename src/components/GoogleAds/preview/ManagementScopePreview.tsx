"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Layers,
  Crosshair,
  TrendingUp,
  LayoutTemplate,
  LineChart,
  Info,
} from "lucide-react";
import { managementScopePreviewData } from "@/data/googleAdsPreviewData";

const scopeIcons = [
  <Compass key="0" className="w-5 h-5 text-blue-600" />,
  <Layers key="1" className="w-5 h-5 text-indigo-600" />,
  <Crosshair key="2" className="w-5 h-5 text-cyan-600" />,
  <TrendingUp key="3" className="w-5 h-5 text-emerald-600" />,
  <LayoutTemplate key="4" className="w-5 h-5 text-purple-600" />,
  <LineChart key="5" className="w-5 h-5 text-sky-600" />,
];

export default function ManagementScopePreview() {
  return (
    <section
      id="included"
      className="scroll-mt-24 py-24 bg-[#F8F9FC] text-[#08080C] relative border-t border-gray-200"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{managementScopePreviewData.eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
            {managementScopePreviewData.h2}
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed">
            {managementScopePreviewData.intro}
          </p>
        </div>

        {/* Structured Scope Matrix on White/Light Slate Box */}
        <div className="border border-gray-200 rounded-2xl bg-white shadow-sm overflow-hidden divide-y divide-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Left Column: Scope Items 01 to 03 */}
            <div className="divide-y divide-gray-200">
              {managementScopePreviewData.cards.slice(0, 3).map((item, idx) => (
                <div
                  key={idx}
                  className="p-7 sm:p-8 hover:bg-gray-50/70 transition-colors flex items-start gap-5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    {scopeIcons[idx]}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">

                      <h3 className="text-lg sm:text-xl font-bold font-inter text-[#08080C] group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 font-poppins leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Scope Items 04 to 06 */}
            <div className="divide-y divide-gray-200">
              {managementScopePreviewData.cards.slice(3, 6).map((item, idx) => (
                <div
                  key={idx + 3}
                  className="p-7 sm:p-8 hover:bg-gray-50/70 transition-colors flex items-start gap-5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    {scopeIcons[idx + 3]}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg sm:text-xl font-bold font-inter text-[#08080C] group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 font-poppins leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Proposal Scope Note */}
          <div className="p-6 sm:p-8 bg-blue-50/50 flex items-start gap-3.5 text-xs sm:text-sm text-blue-900 font-poppins leading-relaxed">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-blue-950">Proposal Scope Note: </strong>
              {managementScopePreviewData.scopeNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
