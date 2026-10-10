"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

// Local badge image assets from src/assets
import searchBadge from "@/assets/google-ads-search-professional-badge.png";
import displayBadge from "@/assets/google-ads-display-badge.png";
import shoppingBadge from "@/assets/google-ads-shopping-badge.png";
import analyticsBadge from "@/assets/google-analytics-badge.png";

export interface CertificateBadgeItem {
  title: string;
  image?: StaticImageData | string;
}

export interface GoogleAdsCertificatesProps {
  id?: string;
  eyebrow?: string;
  h2?: string;
  intro?: string;
  badges?: CertificateBadgeItem[];
}

// 4 official certification badges with local images and clean titles
const DEFAULT_BADGES: CertificateBadgeItem[] = [
  {
    title: "Google Ads Search Certification",
    image: searchBadge,
  },
  {
    title: "Google Ads Display Certification",
    image: displayBadge,
  },
  {
    title: "Google Ads Shopping Certification",
    image: shoppingBadge,
  },
  {
    title: "Google Analytics Certification",
    image: analyticsBadge,
  },
];

export default function GoogleAdsCertificates({
  id = "our-certificates",
  eyebrow = "OFFICIAL GOOGLE CERTIFICATIONS",
  h2 = "Our Certificates",
  intro = "Our team holds verified Google certifications across search, shopping, display advertising, and web measurement.",
  badges = DEFAULT_BADGES,
}: GoogleAdsCertificatesProps) {
  const displayBadges = badges && badges.length > 0 ? badges : DEFAULT_BADGES;

  return (
    <section
      id={id}
      className="scroll-mt-24 py-20 md:py-28 bg-[#F8F9FC] text-[#08080C] relative border-t border-gray-200 overflow-hidden"
    >
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-violet-100/40 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
            {h2}
          </h2>

          {intro && (
            <p className="text-base sm:text-lg text-gray-700 font-poppins leading-relaxed max-w-2xl mx-auto">
              {intro}
            </p>
          )}
        </div>

        {/* Dynamic Responsive Grid: auto-adjusts based on badge count */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {displayBadges.map((badge, idx) => {
            const badgeImg = badge.image || searchBadge;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                className="group relative flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image container: clean wrapper holding the badge */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl flex items-center justify-center p-3 mb-6 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={badgeImg}
                    alt={badge.title}
                    fill
                    sizes="(max-width: 640px) 176px, 192px"
                    className="object-contain bg-black rounded-xl p-2.5 shadow-md shadow-black/20"
                  />
                </div>

                {/* Badge Title Only */}
                <h3 className="text-base sm:text-lg font-bold font-inter text-[#08080C] group-hover:text-blue-600 transition-colors leading-snug">
                  {badge.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
