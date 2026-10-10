"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiOutlineTemplate,
  HiOutlineServer,
  HiOutlinePuzzle,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiArrowRight,
} from "react-icons/hi";
import { FiTarget } from "react-icons/fi";
import {
  projectScopeFactors,
  projectScopeHeader,
} from "@/data/webDesignData"; // update path if different

const factorIcons = [
  FiTarget,
  HiOutlineTemplate,
  HiOutlineServer,
  HiOutlinePuzzle,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
];

const ProjectScopeSection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#05070f] text-white overflow-hidden selection:bg-blue-600 selection:text-white">
      {/* Background radial gradient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-b from-blue-600/15 via-cyan-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[90%] mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Top Tag / Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/20 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#34d399] animate-pulse" />
          <span className="text-xs uppercase tracking-widest font-semibold text-blue-400">
            Cost & Scope Factors
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-6xl font-semibold text-center tracking-tight leading-[1.15] max-w-4xl mb-6"
        >
          {projectScopeHeader.headingPart1}
          <span className="text-blue-500">
            {projectScopeHeader.headingHighlight}
          </span>
        </motion.h2>

        {/* Header Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-center max-w-3xl text-base md:text-lg leading-relaxed mb-16"
        >
          {projectScopeHeader.description}
        </motion.p>

        {/* 6 Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mb-16">
          {projectScopeFactors.map((factor, index) => {
            const Icon = factorIcons[index % factorIcons.length];

            return (
              <motion.div
                key={factor.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-7 md:p-8 flex flex-col justify-between bg-[#0b101b]/80 border border-white/60 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-300 shadow-2xl overflow-hidden"
              >
                {/* Ambient Top Glow in Card */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-44 h-32 bg-cyan-500/10 group-hover:bg-cyan-500/20 blur-3xl rounded-full transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Header inside Card: Icon Badge & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Factor Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors tracking-tight">
                    {factor.title}
                  </h3>

                  {/* Factor Description */}
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {factor.description}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Closing Note */}
        <p className="text-slate-400 text-center max-w-2xl text-sm md:text-base leading-relaxed mb-8">
          {projectScopeHeader.closing}
        </p>
      </div>
    </section>
  );
};

export default ProjectScopeSection;