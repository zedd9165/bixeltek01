"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ShoppingBag,
  Sparkles,
  Youtube,
  RotateCcw,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { campaignSelectionPreviewData } from "@/data/googleAdsPreviewData";

// Local campaign visual assets from src/assets
import googleAdsCampaignImg from "@/assets/google-ads-campiagn.png";
import shoppingAdsCampaignImg from "@/assets/shopping-ads-campiagn.png";
import performanceAdsCampaignImg from "@/assets/performance-ads-campiagn.png";
import youtubeAdsCampaignImg from "@/assets/youtube-ads-campiagn.jpg";
import displayAdsCampaignImg from "@/assets/display-ads-campiagn.jpg";

// Visual imagery for each campaign type mapped to local assets
const campaignImages = [
  googleAdsCampaignImg, // 01 Google Search Ads
  shoppingAdsCampaignImg, // 02 Shopping Ads
  performanceAdsCampaignImg, // 03 Performance Max
  youtubeAdsCampaignImg, // 04 Display & YouTube Advertising
  displayAdsCampaignImg, // 05 Remarketing / Display
];

const campaignIcons = [
  <Search key="0" className="w-5 h-5" />,
  <ShoppingBag key="1" className="w-5 h-5" />,
  <Sparkles key="2" className="w-5 h-5" />,
  <Youtube key="3" className="w-5 h-5" />,
  <RotateCcw key="4" className="w-5 h-5" />,
];

const campaignIconColors = [
  "text-blue-600",
  "text-emerald-600",
  "text-purple-600",
  "text-red-600",
  "text-amber-600",
];

const channelBadges = [
  "High Search Intent",
  "Product Discovery & Ecommerce",
  "Full Google Inventory",
  "Visual Consideration",
  "Audience Retention",
];

export default function CampaignSelectionPreview() {
  const [activeTab, setActiveTab] = useState(0);
  const current = campaignSelectionPreviewData.cards[activeTab];

  return (
    <section
      id="campaign-types"
      className="scroll-mt-24 py-24 bg-white text-[#08080C] relative border-t border-gray-200"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{campaignSelectionPreviewData.eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
            {campaignSelectionPreviewData.h2}
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed">
            {campaignSelectionPreviewData.intro}
          </p>
        </div>

        {/* Tabbed Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Channel Selector Bar (Tabs) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5 justify-between">
            {campaignSelectionPreviewData.cards.map((card, idx) => {
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
                          : `bg-white border border-gray-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 ${campaignIconColors[idx]}`
                      }`}
                    >
                      {campaignIcons[idx]}
                    </div>
                    <div>
                      <div className="font-inter font-bold text-base sm:text-lg text-[#08080C]">
                        {card.title}
                      </div>
                      <div className="text-xs text-gray-500 font-poppins">
                        {channelBadges[idx]}
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

          {/* Right Column: Fixed-size Image Card with Text Overlay */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[520px] rounded-3xl overflow-hidden border border-gray-200/80 shadow-[0_16px_45px_rgba(0,0,0,0.08)] bg-slate-950">
              {/* Pre-rendered background images with clean crossfade */}
              {campaignSelectionPreviewData.cards.map((card, idx) => {
                const imgUrl =
                  (card as any).image ||
                  campaignImages[idx % campaignImages.length];
                const isSelected = activeTab === idx;

                return (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out pointer-events-none ${
                      isSelected ? "opacity-100 z-0" : "opacity-0 -z-10"
                    }`}
                  >
                    <Image
                      src={imgUrl}
                      alt={card.title}
                      fill
                      priority={idx === 0}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover scale-105"
                    />
                  </div>
                );
              })}

              {/* Persistent Background Overlays (prevent flash of black/empty space) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40 pointer-events-none z-[1]" />
              <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply pointer-events-none z-[1]" />

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 overflow-hidden z-[2]">
                {/* Top Row: Channel Badge & Watermark */}
                <div className="relative flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-poppins font-medium">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span>CHANNEL 0{activeTab + 1}</span>
                  </div>

                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-600/90 backdrop-blur-md text-white border border-blue-400/30 font-poppins">
                    {channelBadges[activeTab % channelBadges.length]}
                  </span>
                </div>

                {/* Bottom Overlay: Animated Text & Content */}
                <div className="relative space-y-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg">
                          {campaignIcons[activeTab % campaignIcons.length]}
                        </div>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-inter text-white tracking-tight drop-shadow-md">
                          {current.title}
                        </h3>
                      </div>

                      <p className="text-base md:text-lg text-slate-200 font-poppins leading-relaxed max-w-2xl drop-shadow-sm">
                        {current.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {/* Static Footer Note */}
                  <div className="pt-4 flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-poppins border-t border-white/15">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>
                      Evaluated during Strategy & Account Assessment based on buying economics.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}