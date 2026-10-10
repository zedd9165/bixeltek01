"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dashboardImg from "@/assets/UI Screen.jpg"; 
import Link from "next/link";// replace with your image path
import { whyGoogleAdsData } from "@/data/googleAdsPageData";

export default function WhyGoogleAds() {
  return (
    <section className="w-full mt-0 bg-black text-gray-100 py-20 md:py-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start md:gap-10 lg:gap-0">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ x: -80, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex-1 relative w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] px-8 md:px-0"
        >
          <Image
            src={dashboardImg}
            alt="Google Ads Dashboard"
            className="object-cover object-center rounded-r-2xl shadow-2xl"
            priority
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex-1 lg:w-1/2 px-8 lg:px-16 mt-8 lg:mt-0"
        >
          <h2 className="text-3xl md:text-6xl font-bold font-inter leading-snug mb-6">
            <span className="text-blue-500">{whyGoogleAdsData.headingHighlight}</span>
            {whyGoogleAdsData.headingPart2}
          </h2>

          <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-xl">
            {whyGoogleAdsData.intro}
          </p>

          <ul className="space-y-4 mb-8">
            {whyGoogleAdsData.bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-0.5">✔</span>
                <span className="text-gray-200">
                  <strong className="text-white">{point.title}:</strong> {point.text}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-xl">
            {whyGoogleAdsData.closing}
          </p>

          {/* CTA */}
          <motion.div>
            <Link href={whyGoogleAdsData.ctaHref}>
              <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                {whyGoogleAdsData.ctaText}
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
