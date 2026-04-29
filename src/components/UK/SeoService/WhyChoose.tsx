"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineBadgeCheck,
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlineChartSquareBar,
  HiOutlineClipboardCheck,
} from "react-icons/hi";
import Link from "next/link";

const benefits = [
  {
    icon: <HiOutlineBadgeCheck className="w-8 h-8 text-blue-600 " />,
    title: "Google Partner Agency",
    description:
      "Certified expertise across Google and digital channels — ensuring every campaign follows proven, up-to-date best practices.",
    hoverBg: "hover:bg-blue-600 hover:text-white",
  },
  {
    icon: <HiOutlineSparkles className="w-8 h-8 text-green-600 " />,
    title: "AI SEO Specialists",
    description:
      "Early adopters of entity-based SEO, optimised for Gemini, ChatGPT, and LLM-powered search platforms — keeping you ahead of where search is heading.",
    hoverBg: "hover:bg-green-600 hover:text-white",
  },
  {
    icon: <HiOutlineLightBulb className="w-8 h-8 text-yellow-600" />,
    title: "Proven Frameworks",
    description:
      "Strategies built on semantic SEO methodologies designed to scale authority and traffic in competitive UK & Irish markets.",
    hoverBg: "hover:bg-yellow-500 hover:text-white",
  },
  {
    icon: <HiOutlineChartSquareBar className="w-8 h-8 text-pink-600 " />,
    title: "Transparent Reporting",
    description:
      "Clear dashboards and KPIs that tie directly to leads, sales, and ROI — never obscured by jargon or irrelevant metrics.",
    hoverBg: "hover:bg-pink-600 hover:text-white",
  },
  {
    icon: <HiOutlineClipboardCheck className="w-8 h-8 text-indigo-600 " />,
    title: "Full Ownership",
    description:
      "You retain complete ownership of your data, accounts, and long-term SEO assets — always, without exception.",
    hoverBg: "hover:bg-indigo-600 hover:text-white",
  },
];

const BenefitsSectionUkSeo = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[95%] mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side */}
        <div className="lg:w-[34%] flex flex-col justify-start items-start space-y-6">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold leading-snug"
          >
            Why Leading Canadian Brands{" "}
            <span className="text-blue-600">Choose Bixeltek</span>
          </motion.h2>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Most agencies focus on vanity metrics like traffic. We focus on
            building SEO systems that scale authority, leads, and market share.
          </motion.p>


          <Link href="#form">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
          >
            Get Your Free SEO Audit
          </motion.button>
          </Link>
        </div>

        {/* Right Side: Grid */}
        <div className="lg:w-[66%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`bg-gray-50 border border-gray-200 rounded-2xl group p-6 flex flex-col items-start gap-4 shadow-sm transition-colors duration-300 cursor-pointer ${benefit.hoverBg}`}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="bg-white p-3 rounded-full shadow">{benefit.icon}</div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-gray-900 text-sm leading-relaxed group-hover:text-white">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSectionUkSeo;
