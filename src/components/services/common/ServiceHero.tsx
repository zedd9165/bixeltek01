"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import defaultHeroImg from "@/assets/10883229_4575268.jpg";

export interface ServiceHeroProps {
  eyebrow: string;
  h1: string;
  p1: string;
  p2: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryLinkText?: string;
  secondaryLinkHref?: string;
  microcopy?: string;
  trustStrip?: string[];
  visualImage?: StaticImageData | string;
  visualTagSubtitle?: string;
  visualTagTitle?: string;
  visualBadgeText?: string;
}

export default function ServiceHero({
  eyebrow,
  h1,
  p1,
  p2,
  primaryButtonText,
  primaryButtonHref,
  secondaryLinkText,
  secondaryLinkHref,
  microcopy,
  trustStrip,
  visualImage,
  visualTagSubtitle = "Technical Delivery",
  visualTagTitle = "Strategy · Design · Engineering",
  visualBadgeText = "Production Ready",
}: ServiceHeroProps) {
  const imgSrc = visualImage || defaultHeroImg;

  return (
    <section className="relative w-full bg-[#08080C] text-white pt-12 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute -top-24 left-1/4 w-[400px] h-[400px] rounded-full bg-[#670EF7]/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 text-[10px] md:text-sm font-poppins font-medium tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>{eyebrow}</span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter tracking-tight leading-[1.12] text-white">
              {h1}
            </h1>

            {/* Body Copy */}
            <div className="space-y-4 text-base md:text-lg text-gray-300 font-poppins leading-relaxed">
              <p>{p1}</p>
              <p className="text-gray-400">{p2}</p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col md:flex-row items-stretch md:items-center gap-4">
              <Link
                href={primaryButtonHref}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-poppins font-medium text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition duration-300"
              >
                <span>{primaryButtonText}</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              {secondaryLinkText && secondaryLinkHref && (
                <Link
                  href={secondaryLinkHref}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-gray-700 hover:border-gray-500 bg-gray-900/40 hover:bg-gray-800/60 text-gray-200 font-poppins font-medium text-base transition duration-300"
                >
                  <span>{secondaryLinkText}</span>
                </Link>
              )}
            </div>

            {/* Microcopy */}
            {microcopy && (
              <p className="text-xs md:text-sm text-gray-400 font-poppins">
                {microcopy}
              </p>
            )}

            {/* Trust Strip */}
            {trustStrip && trustStrip.length > 0 && (
              <div className="pt-6 border-t border-gray-800/80">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {trustStrip.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs md:text-sm text-gray-300 font-poppins"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column: Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl p-2 bg-gradient-to-b from-gray-700/50 via-gray-800/20 to-transparent border border-gray-800/80 shadow-2xl overflow-hidden backdrop-blur-sm">
              <div className="relative rounded-xl overflow-hidden bg-black aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src={imgSrc}
                  alt={h1}
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Status / Capability Banner */}
              <div className="mt-3 p-4 rounded-xl bg-gray-900/90 border border-gray-800 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400 font-poppins">
                    {visualTagSubtitle}
                  </div>
                  <div className="text-sm font-semibold text-white font-inter">
                    {visualTagTitle}
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-poppins">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                  <span>{visualBadgeText}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
