"use client";

import React from "react";
import { motion } from "framer-motion";

const GoogleAdsMarquee: React.FC = () => {
  const blueTexts = [
    "Data-Driven Optimization",
    "Track Every Conversion",
    "Remarketing That Works",
    "Landing Pages That Convert",
    "Reduce Wasted Spend",
    "Increased Phone Calls",
    "Dominate Google Search Results",
    "Google Partner Certified"
  ];

  return (
    <div className="flex mt-10 flex-col">
      {/* Blue Marquee */}
      <section className="bg-blue-600 py-7 overflow-hidden">
        <motion.div
          className="flex w-max gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {blueTexts.map((text, idx) => (
            <span
              key={idx}
              className="text-white font-inter text-2xl md:text-5xl font-semibold"
            >
            {text} &nbsp;  •
            </span>
          ))}
          {blueTexts.map((text, idx) => (
            <span
              key={idx + blueTexts.length}
              className="text-white font-inter text-2xl md:text-5xl font-semibold"
            >
              {text} &nbsp; •
            </span>
          ))}
        </motion.div>
      </section>

      {/* White Marquee (Opposite Direction) */}
     
    </div>
  );
};

export default GoogleAdsMarquee;
