"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiOutlineEye,
  HiOutlineShieldCheck,
  HiOutlineDeviceMobile,
  HiOutlineTrendingUp,
} from "react-icons/hi";
import Image from "next/image";
import shape2 from "@/assets/chaka-rounded-two.png";
import { architectureChoices, architectureHeader } from "@/data/webDesignData";

const WebDesignSection = () => {
  return (
    <section className="overflow-hidden relative w-full py-20 md:py-32 bg-black text-white selection:bg-blue-600 selection:text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Rotating Background Shape */}
      <motion.div
        className="absolute -bottom-20 -right-24 pointer-events-none opacity-40 md:opacity-60"
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Image src={shape2} alt="shape" className="brightness-[2]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-inter leading-tight mb-8 tracking-tight">
          {architectureHeader.headingPart1}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            {architectureHeader.headingHighlight}
          </span>
        </h2>

        {/* First Paragraph */}
        <p className="text-gray-300 mb-20 font-poppins leading-relaxed max-w-4xl mx-auto text-lg md:text-xl font-normal">
          {architectureHeader.description}
        </p>

        {/* Redesigned Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 mb-20">
          {architectureChoices.map((choice, index) => {
            const icons = [
              <HiOutlineDeviceMobile key="cms" className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />,
              <HiOutlineTrendingUp key="code" className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />,
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col justify-between text-left p-8 md:p-10 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-blue-500/50 backdrop-blur-xl shadow-xl hover:shadow-[0_20px_50px_rgba(37,99,235,0.18)] transition-all duration-300 overflow-hidden"
              >
                {/* Subtle top spotlight on card hover */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-blue-400 transition-all duration-300 shadow-inner">
                    {icons[index % icons.length]}
                  </div>

                  {/* Title (Bigger font & clear separation) */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors tracking-tight">
                    {choice.title}
                  </h3>

                  {/* Description (Increased text size & line height) */}
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed font-normal mb-8">
                    {choice.description}
                  </p>
                </div>

                {/* CTA Link */}
                <div className="pt-4 border-t border-white/10 mt-auto">
                  <Link
                    href={choice.href}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-base tracking-wide transition-all group-hover:translate-x-1"
                  >
                    <span>{choice.ctaText}</span>
                    <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Paragraph */}
        <p className="text-gray-300 mb-10 font-poppins leading-relaxed max-w-4xl mx-auto text-lg md:text-xl">
          {architectureHeader.closing}
        </p>

        {/* Primary CTA */}
        <a href="tel:+919100032301" className="inline-block">
          <button className="px-10 py-4 rounded-xl bg-blue-600 text-white font-semibold text-lg shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:bg-blue-500 hover:shadow-[0_15px_40px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
            Talk to Our Web Design Experts
          </button>
        </a>
      </div>
    </section>
  );
};

export default WebDesignSection;