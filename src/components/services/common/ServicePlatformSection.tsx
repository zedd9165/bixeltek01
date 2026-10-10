"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Globe,
  Code2,
  Cpu,
  Layers,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export interface PlatformOptionCardItem {
  title: string;
  description: string;
  linkText?: string;
  destination?: string;
  image?: StaticImageData | string;
  badge?: string;
}

export interface ServicePlatformSectionProps {
  id?: string;
  eyebrow: string;
  h2: string;
  intro: string;
  cards: PlatformOptionCardItem[];
}

const platformIcons = [
  <ShoppingBag key="0" className="w-5 h-5" />,
  <Globe key="1" className="w-5 h-5" />,
  <Code2 key="2" className="w-5 h-5" />,
  <Cpu key="3" className="w-5 h-5" />,
  <Layers key="4" className="w-5 h-5" />,
];

const platformColors = [
  "text-emerald-600",
  "text-blue-600",
  "text-purple-600",
  "text-amber-600",
  "text-indigo-600",
];

const platformBadges = [
  "Turnkey & Scalable Ecosystem",
  "WordPress & Content Commerce",
  "Bespoke Operations & Workflows",
  "Decoupled Frontend Performance",
  "Omnichannel Growth Engine",
];

export default function ServicePlatformSection({
  id = "platforms",
  eyebrow,
  h2,
  intro,
  cards,
}: ServicePlatformSectionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const current = cards[activeTab];

  return (
    <section
      id={id}
      className="scroll-mt-24 py-24 bg-white text-[#08080C] relative border-t border-gray-200"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
            {h2}
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed">
            {intro}
          </p>
        </div>

        {/* Tabbed Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Selector Bar (Tabs) */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-between">
            {cards.map((card, idx) => {
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
                          : `bg-white border border-gray-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 ${platformColors[idx % platformColors.length]}`
                      }`}
                    >
                      {platformIcons[idx % platformIcons.length]}
                    </div>
                    <div>
                      <div className="font-inter font-bold text-base sm:text-lg text-[#08080C]">
                        {card.title}
                      </div>
                      <div className="text-xs text-gray-500 font-poppins">
                        {card.badge || platformBadges[idx % platformBadges.length]}
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

          {/* Right Column: Visual Card with Content Overlay */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[520px] rounded-3xl overflow-hidden border border-gray-200/80 shadow-[0_16px_45px_rgba(0,0,0,0.08)] bg-slate-950">
              
              {/* Stacked Persistent Image Layers (No unmounting = No flickering) */}
              <div className="absolute inset-0 pointer-events-none">
                {cards.map((card, idx) => {
                  if (!card.image) return null;
                  const isCurrent = activeTab === idx;
                  return (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                        isCurrent ? "opacity-100 z-0" : "opacity-0 -z-10"
                      }`}
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover scale-105"
                      />
                    </div>
                  );
                })}
              </div>

              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-gray-950/20 z-[1] pointer-events-none" />

              {/* Animated Text & Interactive Overlay */}
              <AnimatePresence mode="wait">
                {current && (
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 overflow-hidden"
                  >
                    {/* Top Badge */}
                    <div className="flex items-center justify-between">
                      <span className="px-3.5 py-1.5 rounded-full bg-blue-600/90 text-white text-xs font-semibold font-poppins shadow-md backdrop-blur-md">
                        {current.badge || platformBadges[activeTab % platformBadges.length]}
                      </span>
                      <span className="text-xs font-poppins font-medium text-gray-300 bg-black/40 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                        0{activeTab + 1} / 0{cards.length}
                      </span>
                    </div>

                    {/* Bottom Description & Destination */}
                    <div className="space-y-4 max-w-xl">
                      <h3 className="text-2xl sm:text-3xl font-bold font-inter text-white leading-tight">
                        {current.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 font-poppins leading-relaxed">
                        {current.description}
                      </p>

                      {current.linkText && current.destination && (
                        <div className="pt-2">
                          <Link
                            href={current.destination}
                            className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors font-poppins"
                          >
                            <span>{current.linkText}</span>
                            <ArrowUpRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}