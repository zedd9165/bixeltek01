"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Stethoscope, MapPin, ShoppingBag, Building2, Globe2, ArrowUpRight } from "lucide-react";
import { businessMarketsPreviewData } from "@/data/googleAdsPreviewData";

const industryIcons = [
  <Stethoscope key="0" className="w-6 h-6 text-blue-600" />,
  <MapPin key="1" className="w-6 h-6 text-emerald-600" />,
  <ShoppingBag key="2" className="w-6 h-6 text-amber-600" />,
  <Building2 key="3" className="w-6 h-6 text-purple-600" />,
];

export default function BusinessMarketsPreview() {
  return (
    <section className="py-24 bg-white text-[#08080C] relative border-t border-gray-200">
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split-Screen Layout on White Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Eyebrow, H2, and 4 Vertical Industry Rows */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>{businessMarketsPreviewData.eyebrow}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-4">
                {businessMarketsPreviewData.h2}
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed">
                {businessMarketsPreviewData.intro}
              </p>
            </div>

            {/* 4 Industry Rows */}
            <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {businessMarketsPreviewData.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="py-6 sm:py-7 flex items-start gap-4 sm:gap-5 group hover:bg-gray-50/70 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    {industryIcons[idx]}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold font-inter text-[#08080C] group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 font-poppins leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: International Geographic Terminal on Subtle Light Background */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="p-8 md:p-10 rounded-3xl bg-gray-50 border border-gray-200 space-y-6 relative overflow-hidden shadow-sm">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-blue-600 uppercase tracking-wider font-poppins">
                <Globe2 className="w-4 h-4" />
                <span>Regional Capabilities</span>
              </div>

              <h3 className="text-2xl font-bold font-inter text-[#08080C] leading-snug">
                Cross-Border Campaign Experience
              </h3>

              <p className="text-sm sm:text-base text-gray-600 font-poppins leading-relaxed">
                {businessMarketsPreviewData.regionalIntro}
              </p>

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                  Target Market Destinations
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {businessMarketsPreviewData.regionalLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.destination}
                      className="p-3.5 rounded-xl bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-400 flex items-center justify-between group transition-all shadow-sm"
                    >
                      <span className="text-sm font-medium font-poppins text-gray-700 group-hover:text-blue-600">
                        {link.label}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
