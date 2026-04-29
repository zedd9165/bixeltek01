"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import webDesignImg from "@/assets/laptop dentist 2.png"; // replace with your actual image
import Link from "next/link";
import { Check } from "lucide-react";

export default function WebDesignUk2() {
  return (
    <section className="w-[95%] mx-auto mt-0 bg-black text-gray-100 py-10 md:py-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ x: -80, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex justify-center items-center relative w-full lg:w-1/2 h-[300px] md:h-[500px] lg:h-[430px]"
        >
          <Image
            src={webDesignImg}
            alt="Toronto Web Design"
            fill
            className="object-contain object-center rounded-2xl"
            priority
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex-1  justify-center items-center lg:w-1/2 px-8 lg:px-16 mt-0 lg:mt-0"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold font-inter leading-snug mb-6">
            What Web Design Really Means for{" "}
            <span className="text-blue-500">UK & Irish Businesses Businesses</span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-300 mb-8 font-poppins leading-relaxed max-w-2xl">
           Web design is the process of creating a website that not only looks compelling but also functions as a growth engine for your business. For UK & Irish businesses, effective web design blends aesthetics, user experience, speed, and SEO — ensuring customers trust your brand and find it easy to take action.
          </p>

          {/* Optional CTA */}
          <motion.div>
            <Link href={"#form"}>
              <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                Get a Free Website Audit
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
