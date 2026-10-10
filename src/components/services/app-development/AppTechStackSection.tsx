"use client";

import React from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

export interface TechStackEntry {
  name: string;
  category: string;
  description: string;
  icon: IconType;
}

export interface AppTechStackSectionProps {
  id?: string;
  eyebrow?: string;
  h2?: string;
  intro?: string;
  stack: TechStackEntry[];
  closingNote?: string;
}

export default function AppTechStackSection({
  id = "technology",
  eyebrow = "TECHNOLOGY & PLATFORM CHOICES",
  h2 = "Platform Decisions Guided by Product Requirements, Not Presupposition",
  intro = "React Native, Expo, Flutter or native iOS/Android development are selected according to your product workflows, device capabilities, integration needs, and long-term maintenance resources.",
  stack,
  closingNote = "We evaluate your functional requirements, targeted operating system features, performance expectations and team capabilities before finalizing the application architecture.",
}: AppTechStackSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 py-24 sm:py-28 bg-white text-[#08080C] relative border-t border-gray-200"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* 6-Card Architecture Choice Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {stack.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-900 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-poppins font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-inter text-[#08080C] mb-2 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-600 font-poppins leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Supporting Note */}
        {closingNote && (
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-600 font-poppins leading-relaxed max-w-4xl">
            <strong className="text-[#08080C]">Platform Strategy Principle: </strong>
            {closingNote}
          </div>
        )}
      </div>
    </section>
  );
}

