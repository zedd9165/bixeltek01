"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineCog,
  HiOutlineDocumentText,
  HiOutlineLocationMarker,
  HiOutlineLibrary,
  HiOutlineLink,
  HiOutlineSparkles,
} from "react-icons/hi";
import Image from "next/image";
import shape1 from "@/assets/testi-shape1.png";
import dashboard2 from "@/assets/Traffic-Dashboard.png";

const SEOGridSection = () => {
  const pillars = [
  {
    title: "Technical SEO",
    description: "Fast, secure, mobile-friendly, and crawlable websites that meet Google's core ranking requirements.",
    icon: <HiOutlineCog className="text-blue-700 w-6 h-6" />,
  },
  {
    title: "On-Page SEO",
    description: "Optimised metadata, titles, headings, schema markup, and structured content built for relevance and ranking.",
    icon: <HiOutlineDocumentText className="text-blue-700 w-6 h-6" />,
  },
  {
    title: "Local SEO UK & Ireland",
    description: "Google Business Profile optimisation, local citations, review management, and maps ranking for your city or region.",
    icon: <HiOutlineLocationMarker className="text-blue-700 w-6 h-6" />,
  },
  {
    title: "AI SEO",
    description: "Entity-driven optimisation so your brand is recognised and recommended by Google Gemini, ChatGPT, and other AI-powered search platforms.",
    icon: <HiOutlineSparkles className="text-blue-700 w-6 h-6" />,
  },
  {
    title: "Content Systems",
    description: "Blogs, service pages, and topical clusters designed to establish authority and attract the right audience consistently.",
    icon: <HiOutlineLibrary className="text-blue-700 w-6 h-6" />,
  },
  {
    title: "Authority Building",
    description: "Safe, white-hat link building and digital PR that builds credibility and strengthens your domain's standing in competitive niches.",
    icon: <HiOutlineLink className="text-blue-700 w-6 h-6" />,
  },
];

  return (
    <section className="w-full py-14 md:py-24 bg-[#f5f7fd] text-black relative overflow-hidden">
      <Image src={shape1} alt="shape1" className="absolute bottom-0 left-0" />

      <div className="w-[90%] lg:max-w-full mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Grid of Pillars */}
        <div className="flex-1 pl-4 pr-4 lg:pl-20 lg:pr-16">
          <h2 className="text-4xl md:text-6xl font-bold font-inter leading-snug mb-4">
            The Mechanics of <span className="text-blue-500">Modern SEO</span>
          </h2>
          <p className="text-gray-800 mb-10 text-lg leading-relaxed">
            SEO today requires an integrated strategy. Search engines no longer reward keyword stuffing — they evaluate technical health, content depth, and authority signals across every element of your site.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="relative bg-transparent rounded-xl p-6 flex flex-col items-start gap-4 overflow-hidden"
                whileHover={{ scale: 1.03 }}
              >
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-blue-700"
                  animate={{
                    borderColor: [
                      "rgba(29, 78, 216, 0.2)",
                      "rgba(29, 78, 216, 0.6)",
                      "rgba(29, 78, 216, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Icon */}
                <div className="relative z-10 bg-blue-100 p-4 rounded-full shadow-md flex items-center justify-center">
                  {pillar.icon}
                </div>

                {/* Text */}
                <div className="relative z-10 flex flex-col text-left">
                  <h3 className={`text-2xl font-inter font-bold mb-1 ${pillar.title === "AI SEO" ? "text-[#A50E0E]" : "text-black"}`}>
                    {pillar.title}
                  </h3>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Full-height image */}
        <motion.div
          initial={{ x: 80, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative flex-1 w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[630px]"
        >
          <Image
            src={dashboard2}
            alt="SEO Dashboard"
            fill
            className=" object-cover bg-coverrounded-r-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SEOGridSection;
