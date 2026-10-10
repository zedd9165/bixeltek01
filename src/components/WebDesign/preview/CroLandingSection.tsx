"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Target,
  Sparkles,
} from "lucide-react";
import { croLandingPageData } from "@/data/service/webdesing";
import defaultLandingImg from "@/assets/cro-wireframe.webp";

export default function CroLandingSection() {
  const { eyebrow, h2, image, description, focusTitle, focusPoints, cta } =
    croLandingPageData;

  // Use the verified landing page asset if placeholder path is in data
  const displayImage =
    image?.src && !image.src.startsWith("/images/cro-landing-page")
      ? image.src
      : defaultLandingImg;

  // Ensure canonical target destination without broken routes
  const targetHref = cta.href || "/services/conversion-rate-optimization";

  return (
    <section
      id="cro-landing-pages"
      className="relative py-20 md:py-28 bg-[#FDFDFE] text-[#08080C] border-t border-gray-200 overflow-hidden"
    >
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-[#670EF7]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Browser Mockup & Live Funnel Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative w-full rounded-2xl bg-white border border-gray-200/90 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.12)] overflow-hidden group">
              {/* Browser Chrome Header */}
              <div className="px-4 py-3 bg-gray-50/90 border-b border-gray-200/80 flex items-center justify-between gap-3">
                {/* Window Action Dots */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/90 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90 inline-block" />
                </div>

                {/* URL Address Bar */}
                <div className="flex-1 max-w-xs mx-auto flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200/70 text-[11px] font-poppins text-gray-500 shadow-xs truncate">
                  <Lock className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">bixeltek.com/cro-landing-page</span>
                </div>

                {/* Status Indicator */}
                <div className="flex-shrink-0 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-[10px] font-poppins font-medium text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="hidden md:inline">High Intent</span>
                </div>
              </div>

              {/* Viewport & Screenshot */}
              <div className="relative h-[320px] md:h-[420px] lg:h-[600px] w-full overflow-hidden bg-gray-100">
                <Image
                  src={displayImage}
                  alt={image.alt || "CRO Landing Page Development Preview"}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"    
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-gray-950/40 via-gray-950/10 to-transparent pointer-events-none" />
              </div>

              {/* Floating Conversion Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 md:left-5 md:right-5 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-gray-200/90 shadow-lg shadow-gray-900/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider font-poppins text-blue-600">
                      Conversion Architecture
                    </div>
                    <div className="text-xs font-bold font-poppins text-[#08080C]">
                      Single Clear Goal · Zero Navigation Friction
                    </div>
                  </div>
                </div>

                <div className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-poppins font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>CRO Ready</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Content Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center self-start gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>{eyebrow}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-6">
              {h2}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-base md:text-lg text-gray-700 font-poppins leading-relaxed mb-8">
              {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Focus List */}
            <div className="mb-9">
              <div className="text-xs font-bold uppercase tracking-wider font-poppins text-gray-500 mb-4 flex items-center gap-2">
                <span className="w-2 h-0.5 bg-blue-600 rounded-full" />
                <span>{focusTitle}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {focusPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50/80 border border-gray-200/80 hover:border-blue-400 hover:bg-blue-50/40 hover:shadow-xs transition-all duration-200 group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-100/70 border border-blue-200/60 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-600">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold font-poppins text-[#08080C] leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
              <Link
                href={targetHref}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-poppins font-semibold text-sm shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 transition-all duration-300 group"
              >
                <span>{cta.label}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
