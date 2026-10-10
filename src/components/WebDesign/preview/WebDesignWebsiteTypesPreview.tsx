"use client";

import React, { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  ShoppingBag,
  Building2,
  MapPin,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { websiteTypesData, type WebsiteTypeCardItem } from "@/data/service/webdesing";

const websiteTypeIcons = [
  <Briefcase key="0" className="w-5 h-5" />,
  <ShoppingBag key="1" className="w-5 h-5" />,
  <Building2 key="2" className="w-5 h-5" />,
  <MapPin key="3" className="w-5 h-5" />,
  <Layers key="4" className="w-5 h-5" />,
  <Sparkles key="5" className="w-5 h-5" />,
];

const websiteTypeColors = [
  "text-blue-600",
  "text-emerald-600",
  "text-purple-600",
  "text-amber-600",
  "text-cyan-600",
  "text-rose-600",
];

const defaultBadges = [
  "Lead Generation & Trust",
  "Catalog & Checkout Systems",
  "Enterprise Evaluation",
  "Multi-Unit Scalability",
  "High-Conversion Campaigns",
  "Bespoke Workflows & APIs",
];

export default function WebDesignWebsiteTypesPreview() {
  const [activeTab, setActiveTab] = useState(0);
  const current: WebsiteTypeCardItem = websiteTypesData.cards[activeTab];

  return (
    <section
      id="website-types"
      className="scroll-mt-24 py-24 bg-white text-[#08080C] relative border-t border-gray-200"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{websiteTypesData.eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
            {websiteTypesData.h2}
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed">
            {websiteTypesData.intro}
          </p>
        </div>

        {/* Tabbed Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Website Type Selector Bar (Tabs) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5 justify-between">
            {websiteTypesData.cards.map((card, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? "bg-blue-50 border-blue-500 text-blue-900 shadow-sm"
                      : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                          : `bg-white border border-gray-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 ${websiteTypeColors[idx % websiteTypeColors.length]}`
                      }`}
                    >
                      {websiteTypeIcons[idx % websiteTypeIcons.length]}
                    </div>
                    <div>
                      <div className="font-inter font-bold text-base sm:text-lg text-[#08080C]">
                        {card.title}
                      </div>
                      <div className="text-xs text-gray-500 font-poppins">
                        {card.badge || defaultBadges[idx % defaultBadges.length]}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive
                        ? "translate-x-0 text-blue-600 opacity-100"
                        : "-translate-x-2 opacity-0 group-hover:opacity-60"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual Card with Persistent Image Layers */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[520px] rounded-3xl overflow-hidden border border-gray-200/80 shadow-[0_16px_45px_rgba(0,0,0,0.08)] bg-slate-950 isolate">
              
              {/* Stacked Persistent Image Layers */}
              <div className="absolute inset-0 z-0">
                {websiteTypesData.cards.map((card, idx) => {
                  const isSelected = activeTab === idx;
                  const imageSource = card.image;

                  if (!imageSource) return null;

                  return (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        isSelected ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={imageSource}
                        alt={card.title}
                        fill
                        priority
                        placeholder={typeof imageSource !== "string" ? "blur" : undefined}
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover scale-105"
                      />
                    </div>
                  );
                })}
              </div>

              {/* Persistent Vignette Overlay (z-20 sits on top of images) */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-gray-950/20 z-20 pointer-events-none" />

              {/* Dynamic Content Overlay (z-30 sits on top of overlay) */}
              <div className="relative z-30 h-full flex flex-col justify-between p-8 md:p-12 overflow-hidden pointer-events-auto">
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-blue-600/90 text-white text-xs font-semibold font-poppins shadow-md backdrop-blur-md">
                    {current.badge || defaultBadges[activeTab % defaultBadges.length]}
                  </span>
                  <span className="text-xs font-mono font-medium text-gray-300 bg-black/40 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                    0{activeTab + 1} / 0{websiteTypesData.cards.length}
                  </span>
                </div>

                {/* Bottom Description with Smooth Text Transition */}
                <div className="relative space-y-4 max-w-xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="space-y-3"
                    >
                      <h3 className="text-2xl sm:text-3xl font-bold font-inter text-white leading-tight">
                        {current.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 font-poppins leading-relaxed">
                        {current.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}