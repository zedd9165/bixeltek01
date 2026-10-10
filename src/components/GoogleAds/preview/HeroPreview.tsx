"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { heroPreviewData } from "@/data/googleAdsPreviewData";
import reportingImg from "@/assets/google-ads-dentists-reporting-dashboard.webp";
import googlePartnerBadge from "@/assets/2993685_brand_brands_google_logo_logos_icon.png";

export default function HeroPreview() {
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
              <span>{heroPreviewData.eyebrow}</span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter tracking-tight leading-[1.12] text-white">
              {heroPreviewData.h1}
            </h1>

            {/* Body Copy */}
            <div className="space-y-4 text-base md:text-lg text-gray-300 font-poppins leading-relaxed">
              <p>{heroPreviewData.p1}</p>
              <p className="text-gray-400">{heroPreviewData.p2}</p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col md:flex-row items-stretch md:items-center gap-4">
              <Link
                href={heroPreviewData.primaryButtonHref}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-poppins font-medium text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition duration-300"
              >
                <span>{heroPreviewData.primaryButtonText}</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href={heroPreviewData.secondaryLinkHref}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-gray-700 hover:border-gray-500 bg-gray-900/40 hover:bg-gray-800/60 text-gray-200 font-poppins font-medium text-base transition duration-300"
              >
                <span>{heroPreviewData.secondaryLinkText}</span>
              </Link>
            </div>

            {/* Microcopy */}
            {"microcopy" in heroPreviewData && (heroPreviewData as any).microcopy && (
              <p className="text-xs md:text-sm text-gray-400 font-poppins">
                {(heroPreviewData as any).microcopy}
              </p>
            )}

            {/* Trust Strip */}
            <div className="pt-6 border-t border-gray-800/80">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {heroPreviewData.trustStrip.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs md:text-sm text-gray-300 font-poppins"
                  >
                    <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Reporting Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl p-2 bg-gradient-to-b from-gray-700/50 via-gray-800/20 to-transparent border border-gray-800/80 shadow-2xl overflow-hidden backdrop-blur-sm">
              <div className="relative rounded-xl overflow-hidden bg-black aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src={reportingImg}
                  alt="Verified Google Ads reporting dashboard performance snapshot"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating verified badge */}
              <div className="mt-3 px-4 py-3 bg-[#131318]/90 border border-gray-800 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 relative flex-shrink-0">
                    <Image
                      src={googlePartnerBadge}
                      alt="Google Partner"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white font-poppins">
                      Google Partner Agency
                    </div>
                    <div className="text-[11px] text-gray-400 font-poppins">
                      Verified Campaign Reporting & Management
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

