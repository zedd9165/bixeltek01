"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineBadgeCheck,
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlineChartSquareBar,
  HiOutlineClipboardCheck,
  HiOutlineCog,
} from "react-icons/hi";
import Link from "next/link";

const benefits = [
  {
    icon: <HiOutlineBadgeCheck className="w-8 h-8 text-blue-600" />,
    title: "Credibility & Trust",
    description:
      "A professional, brand-aligned website that inspires confidence from the first visit — enhancing your reputation and making customers choose you over competitors.",
    hoverBg: "hover:bg-blue-600 hover:text-white",
  },
  {
    icon: <HiOutlineSparkles className="w-8 h-8 text-green-600" />,
    title: "More Leads & Sales",
    description:
      "Conversion-focused structures and clear calls-to-action designed to maximise enquiries, bookings, and sales — turning your website into your best-performing sales tool.",
    hoverBg: "hover:bg-green-600 hover:text-white",
  },
  {
    icon: <HiOutlineLightBulb className="w-8 h-8 text-yellow-600" />,
    title: "SEO Visibility",
    description:
      "Optimised frameworks for Google and AI-powered search engines — ensuring your website ranks higher and consistently attracts the right customers across the UK & Ireland.",
    hoverBg: "hover:bg-yellow-500 hover:text-white",
  },
  {
    icon: <HiOutlineChartSquareBar className="w-8 h-8 text-pink-600" />,
    title: "Future-Proof Technology",
    description:
      "Built on scalable technologies including Next.js, WordPress, and Shopify — ensuring your website grows seamlessly with your business over the long term.",
    hoverBg: "hover:bg-pink-600 hover:text-white",
  },
  {
    icon: <HiOutlineCog className="w-8 h-8 text-indigo-600" />,
    title: "Seamless Integrations",
    description:
      "Connect your website with CRMs, booking systems, payment gateways, and analytics tools — streamlining your operations and enhancing the customer journey.",
    hoverBg: "hover:bg-indigo-600 hover:text-white",
  },
  {
    icon: <HiOutlineClipboardCheck className="w-8 h-8 text-red-600" />,
    title: "Peace of Mind",
    description:
      "Post-launch support, regular updates, and performance optimisations ensure your website stays reliable, secure, and effective — so you never have to worry about it.",
    hoverBg: "hover:bg-red-600 hover:text-white",
  },
];

const BenefitsSectionWebDesignUk = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[95%] mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side */}
        <div className="lg:w-[34%] flex flex-col justify-start items-start space-y-6">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-6xl font-bold leading-snug"
          >
            What You Gain When You{" "}
            <span className="text-blue-600">Work With Bixeltek</span>
          </motion.h2>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Partnering with Bixeltek means solving your website problems while gaining a scalable, high-performing platform that grows alongside your business across the UK & Ireland.
          </motion.p>
          <Link href="/contact-us">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
            >
              Get Your Free Website Audit
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

export default BenefitsSectionWebDesignUk;
