"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, TrendingUp } from "lucide-react";
import { selectedWorkPreviewData } from "@/data/googleAdsPreviewData";
import dentalImg from "@/assets/dental-clinic.jpg";
import bikeImg from "@/assets/bike-repairing-services.jpg";
import laundryImg from "@/assets/tumblewash.jpg";

const cardImages = [dentalImg, bikeImg, laundryImg];

export default function SelectedWorkPreview() {
  return (
    <section
      id="results"
      className="scroll-mt-24 py-24 bg-white text-[#08080C] relative border-t border-gray-200"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-6xl mb-16 mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{selectedWorkPreviewData.eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
            {selectedWorkPreviewData.h2}
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed max-w-4xl mx-auto">
            {selectedWorkPreviewData.intro}
          </p>
        </div>

        {/* 3 Case-Study Cards on White */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedWorkPreviewData.cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Card Image */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-gray-100">
                <Image
                  src={cardImages[idx]}
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

              {/* Card Content */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
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
          ))}
        </div>

        {/* Supporting Note */}
        <div className="mt-12 p-5 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-600 font-poppins leading-relaxed max-w-5xl mx-auto text-center">
          <strong className="text-[#08080C]">Note: </strong> 
          {selectedWorkPreviewData.supportingNote}
        </div>
      </div>
    </section>
  );
}
