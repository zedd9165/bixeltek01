"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  FileCode2,
  ShoppingBag,
  Target,
  CreditCard,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import { relatedWebServicesData } from "@/data/service/webdesing";

const relatedIcons = [
  <Code2 key="0" className="w-6 h-6 text-blue-400" />,
  <FileCode2 key="1" className="w-6 h-6 text-indigo-400" />,
  <ShoppingBag key="2" className="w-6 h-6 text-emerald-400" />,
  <Target key="3" className="w-6 h-6 text-purple-400" />,
  <CreditCard key="4" className="w-6 h-6 text-cyan-400" />,
  <RefreshCw key="5" className="w-6 h-6 text-amber-400" />,
];

export default function WebDesignRelatedServicesPreview() {
  return (
    <section className="relative w-full bg-[#08080C] text-white py-24 border-t border-gray-800/80 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#670EF7]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 mx-auto text-center ">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>{relatedWebServicesData.eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-white tracking-tight leading-[1.15] mb-5">
            {relatedWebServicesData.h2}
          </h2>
          <p className="text-base md:text-lg text-gray-300 font-poppins leading-relaxed">
            {relatedWebServicesData.intro}
          </p>
        </div>

        {/* 6 Cards Dark Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedWebServicesData.cards.map((card, idx) => (
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
                  {relatedIcons[idx % relatedIcons.length]}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-inter text-white group-hover:text-blue-400 transition-colors">
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
