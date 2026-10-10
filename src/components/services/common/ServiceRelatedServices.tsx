"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  ShoppingBag,
  CreditCard,
  Code2,
  Target,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export interface RelatedServiceCardItem {
  title: string;
  description: string;
  linkText: string;
  destination: string;
}

export interface ServiceRelatedServicesProps {
  id?: string;
  eyebrow: string;
  h2: string;
  intro: string;
  cards: RelatedServiceCardItem[];
  /** Optional custom grid columns, e.g. 2, 3, 4, 5, 6, or custom Tailwind classes string */
  gridCols?: 2 | 3 | 4 | 5 | 6 | string;
  mdGridCols?: 2 | 3 | 4 | string;
  lgGridCols?: 2 | 3 | 4 | 5 | 6 | string;
}

const serviceIcons = [
  <Globe key="0" className="w-6 h-6 text-blue-400" />,
  <ShoppingBag key="1" className="w-6 h-6 text-emerald-400" />,
  <Code2 key="2" className="w-6 h-6 text-indigo-400" />,
  <CreditCard key="3" className="w-6 h-6 text-cyan-400" />,
  <Target key="4" className="w-6 h-6 text-purple-400" />,
  <Sparkles key="5" className="w-6 h-6 text-amber-400" />,
];

export default function ServiceRelatedServices({
  id = "related-services",
  eyebrow,
  h2,
  intro,
  cards,
  gridCols,
  mdGridCols,
  lgGridCols,
}: ServiceRelatedServicesProps) {
  // Determine responsive grid columns (defaults to 1 mobile, 2 tablet, 4 desktop)
  const getGridClasses = () => {
    if (typeof gridCols === "string" && gridCols.includes("grid-cols")) {
      return gridCols;
    }

    const mdClass =
      typeof mdGridCols === "number" || typeof mdGridCols === "string"
        ? mdGridCols === 2 || mdGridCols === "2"
          ? "md:grid-cols-2"
          : mdGridCols === 3 || mdGridCols === "3"
          ? "md:grid-cols-3"
          : mdGridCols === 4 || mdGridCols === "4"
          ? "md:grid-cols-4"
          : `md:grid-cols-[repeat(${mdGridCols},minmax(0,1fr))]`
        : "md:grid-cols-2";

    const targetLg = lgGridCols || gridCols || 4;
    let lgClass = "lg:grid-cols-4";
    if (targetLg === 2 || targetLg === "2") lgClass = "lg:grid-cols-2";
    else if (targetLg === 3 || targetLg === "3") lgClass = "lg:grid-cols-3";
    else if (targetLg === 4 || targetLg === "4") lgClass = "lg:grid-cols-4";
    else if (targetLg === 5 || targetLg === "5") lgClass = "lg:grid-cols-5";
    else if (targetLg === 6 || targetLg === "6") lgClass = "lg:grid-cols-3 xl:grid-cols-6";

    return `grid-cols-1 ${mdClass} ${lgClass}`;
  };

  const gridClass = getGridClasses();

  return (
    <section
      id={id}
      className="relative w-full bg-[#08080C] text-white py-24 border-t border-gray-800/80 overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#670EF7]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-white tracking-tight leading-[1.15] mb-5">
            {h2}
          </h2>
          <p className="text-base md:text-lg text-gray-300 font-poppins leading-relaxed">
            {intro}
          </p>
        </div>

        {/* Dynamic Dark Cards Grid */}
        <div className={`grid ${gridClass} gap-8`}>
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 flex flex-col justify-between hover:border-blue-500/60 hover:bg-gray-900/90 hover:shadow-xl hover:shadow-blue-950/20 transition duration-300 group relative backdrop-blur-sm"
            >
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {serviceIcons[idx % serviceIcons.length]}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-inter text-white group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 font-poppins leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800">
                <Link
                  href={card.destination}
                  className="inline-flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors font-poppins"
                >
                  <span>{card.linkText}</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
