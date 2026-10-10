"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  HiOutlineUserGroup,
  HiOutlineSearch,
  HiOutlineCursorClick,
  HiOutlineRefresh,
  HiOutlineTrendingUp,
  HiOutlineSupport,
} from "react-icons/hi";

import { capabilitiesHeader, technicalCapabilities } from "@/data/webDesignData";

const BenefitsSection = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[95%] mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side */}
        <div className="lg:w-[34%] flex flex-col justify-start items-start space-y-6">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold leading-snug"
          >
            {capabilitiesHeader.headingPart1}
            <span className="text-blue-500">{capabilitiesHeader.headingHighlight}</span>
            {capabilitiesHeader.headingPart2}
          </motion.h2>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-gray-300 text-lg leading-relaxed"
          >
            {capabilitiesHeader.description}
          </motion.p>

          <Link href={capabilitiesHeader.ctaHref}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
            >
              {capabilitiesHeader.ctaText}
            </motion.button>
          </Link>
        </div>

        {/* Right Side: Grid */}
        <div className="lg:w-[66%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalCapabilities.map((capability, index) => {
            const icons = [
              <HiOutlineUserGroup key="api" className="w-8 h-8 group-hover:text-white text-blue-500" />,
              <HiOutlineSearch key="crm" className="w-8 h-8 group-hover:text-white text-green-500" />,
              <HiOutlineCursorClick key="portal" className="w-8 h-8 group-hover:text-white text-yellow-500" />,
              <HiOutlineSupport key="booking" className="w-8 h-8 group-hover:text-white text-pink-500" />,
              <HiOutlineTrendingUp key="db" className="w-8 h-8 group-hover:text-white text-indigo-500" />,
              <HiOutlineRefresh key="migration" className="w-8 h-8 group-hover:text-white text-red-500" />,
            ];
            return (
              <motion.div
                key={index}
                className={`bg-[#131313] rounded-2xl group p-6 flex flex-col items-start gap-4 shadow-lg transition-colors duration-300 cursor-pointer ${capability.hoverBg}`}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-white/10 p-3 rounded-full">{icons[index % icons.length]}</div>
                <h3 className="text-xl font-semibold">{capability.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
