"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import webImg from "@/assets/Internet-Website-No-Background.png"; // Replace with your actual image
import statIcon1 from "@/assets/seo-mobile-setting-gear-cog-07-svgrepo-com.png";
import statIcon2 from "@/assets/speed-svgrepo-com.png";
import statIcon3 from "@/assets/heart-shine-svgrepo-com.png";

const stats = [
  {
    icon: statIcon1,
    title: "1-Second Delay Costs Conversions",
    desc: "A 1-second delay in page load can reduce conversions by 7%.",
    bg: "transparent",
  },
  {
    icon: statIcon2,
    title: "Fast Loading Keeps Visitors",
    desc: "53% of visitors leave websites that take longer than 3 seconds to load.",
    bg: "white",
  },
  {
    icon: statIcon3,
    title: "Mobile-First Boosts Trust",
    desc: "Mobile-first websites improve both Google rankings and user trust.",
    bg: "transparent",
  },
];

export default function WebsiteMattersSectionUk() {
  return (
    <section className="w-[85%] mx-auto py-20 bg-black text-gray-100 overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* LEFT TEXT CONTENT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex-1 lg:w-1/2 px-4 lg:px-0"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-6">
            Why Your <span className="text-blue-500">Website Matters More</span> Than You Think
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl leading-relaxed">
            Your website is often the very first impression potential customers have of your business. In competitive markets across the UK & Ireland, that impression decides whether they stay or leave — and studies show 70% of users judge credibility based on design alone.
          </p>

          {/* Stats / Icon Boxes */}
          <div className="flex flex-col gap-6">
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-start gap-4 p-4 rounded-2xl ${item.bg === "white" ? "bg-white text-black" : "bg-transparent text-gray-100"} shadow-md`}
              >
                <div className="w-12 h-12 flex-shrink-0">
                  <Image src={item.icon} alt={item.title} width={48} height={48} />
                </div>
                <div>
                  <h4 className={`font-semibold text-2xl text-wrap ${item.bg === "white" ? "text-black" : "text-white"} mb-1`}>
                    {item.title}
                  </h4>
                  <p className={`text-base font-poppins ${item.bg === "white" ? "text-gray-600" : "text-gray-300"}`}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ x: 80, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 h-[300px] md:h-[500px] lg:h-[630px]"
        >
          <Image
            src={webImg}
            alt="Website Image"
            fill
            className="object-contain rounded-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
