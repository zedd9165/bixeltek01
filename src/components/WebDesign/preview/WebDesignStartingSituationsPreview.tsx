"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Rocket,
  Paintbrush,
  TrendingDown,
  Sparkles,
  Search,
  Maximize2,
  ArrowRight,
} from "lucide-react";
import { webStartingSituationsData } from "@/data/service/webdesing";

const situationIcons = [
  <Rocket key="0" className="w-6 h-6 text-blue-600" />,
  <Paintbrush key="1" className="w-6 h-6 text-purple-600" />,
  <TrendingDown key="2" className="w-6 h-6 text-amber-600" />,
  <Sparkles key="3" className="w-6 h-6 text-emerald-600" />,
  <Search key="4" className="w-6 h-6 text-cyan-600" />,
  <Maximize2 key="5" className="w-6 h-6 text-rose-600" />,
];

export default function WebDesignStartingSituationsPreview() {
  return (
    <section className="py-24 bg-[#F8F9FC] text-[#08080C] relative border-t border-gray-200">
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{webStartingSituationsData.eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
            {webStartingSituationsData.h2}
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed">
            {webStartingSituationsData.intro}
          </p>
        </div>

        {/* 6 Situation Cards in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webStartingSituationsData.cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between hover:border-blue-500 hover:shadow-xl transition duration-300 relative group"
            >
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {situationIcons[idx % situationIcons.length]}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-inter text-[#08080C] group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-poppins leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* <div className="mt-8 pt-6 border-t border-gray-100">
                <Link
                  href={webStartingSituationsData.buttonHref}
                  className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors font-poppins"
                >
                  <span>{webStartingSituationsData.buttonText}</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div> */}
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
