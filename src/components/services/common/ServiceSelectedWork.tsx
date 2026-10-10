"use client";

import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import defaultWorkImg from "@/assets/tumblewash.jpg";
import guerrImg from "@/assets/guerr-case-study-1.jpeg";
import tumbleImg from "@/assets/tumblewash.jpg";
import dmcImg from "@/assets/Flowers Shop Ecommerce Website.png";

const defaultImages = [guerrImg, tumbleImg, dmcImg];

export interface CaseStudyCardItem {
  title: string;
  description: string;
  periodLabel?: string;
  linkText: string;
  destination: string;
  metricHighlight?: string;
  image?: StaticImageData | string;
}

export interface ServiceSelectedWorkProps {
  id?: string;
  eyebrow: string;
  h2: string;
  intro: string;
  cards?: CaseStudyCardItem[];
  supportingNote?: string;
  emptyStateCtaText?: string;
  emptyStateCtaHref?: string;
}

export default function ServiceSelectedWork({
  id = "selected-work",
  eyebrow,
  h2,
  intro,
  cards = [],
  supportingNote,
  emptyStateCtaText = "Plan My Ecommerce Project",
  emptyStateCtaHref = "#plan-project",
}: ServiceSelectedWorkProps) {
  const hasCards = cards && cards.length > 0;

  return (
    <section
      id={id}
      className="scroll-mt-24 py-24 sm:py-28 bg-white text-[#08080C] relative border-t border-gray-200"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {hasCards ? (
          <>
            {/* Header */}
            <div className="max-w-6xl mb-16 mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>{eyebrow}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
                {h2}
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed max-w-4xl mx-auto">
                {intro}
              </p>
            </div>

            {/* Grid matching Google Ads & Web Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cards.map((card, idx) => {
                const cardImg = card.image || defaultImages[idx % defaultImages.length] || defaultWorkImg;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex flex-col bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-gray-100">
                      <Image
                        src={cardImg}
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                      {card.metricHighlight && (
                        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold font-poppins shadow-md">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>{card.metricHighlight}</span>
                        </div>
                      )}
                    </div>

                    <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        {card.periodLabel && (
                          <div className="inline-flex items-center gap-1.5 text-xs text-blue-600 font-poppins font-medium">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{card.periodLabel}</span>
                          </div>
                        )}
                        <h3 className="text-xl sm:text-2xl font-bold font-inter text-[#08080C] group-hover:text-blue-600 transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 font-poppins leading-relaxed">
                          {card.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <Link
                          href={card.destination}
                          className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors font-poppins"
                        >
                          <span>{card.linkText}</span>
                          <ArrowUpRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {supportingNote && (
              <div className="mt-12 p-5 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-600 font-poppins leading-relaxed max-w-5xl mx-auto text-center">
                <strong className="text-[#08080C]">Note: </strong>
                {supportingNote}
              </div>
            )}
          </>
        ) : (
          /* Fallback when empty */
          <div className="relative rounded-3xl bg-gradient-to-b from-gray-50/80 to-white border border-gray-200/90 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-sm">
            <div className="max-w-4xl mx-auto space-y-8 text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>{eyebrow}</span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.12]">
                {h2}
              </h2>

              <p className="text-base md:text-xl text-gray-600 font-poppins leading-relaxed max-w-3xl mx-auto">
                {intro}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={emptyStateCtaHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-poppins font-medium text-base shadow-lg shadow-blue-600/25 transition duration-300"
                >
                  <span>{emptyStateCtaText}</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/case-studies"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-full border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-[#08080C] font-poppins font-medium text-base transition duration-300"
                >
                  <span>Explore Bixeltek Case Studies</span>
                  <ArrowUpRight className="ml-2 w-4 h-4 text-gray-500" />
                </Link>
              </div>

              {supportingNote && (
                <div className="pt-8 border-t border-gray-200/80 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 font-poppins">
                  <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>{supportingNote}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
