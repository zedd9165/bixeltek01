"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { protectionsData } from "@/data/googleAdsPageData";

export default function ProtectAds() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="w-full bg-[#131313] text-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-6xl max-w-6xl mx-auto font-bold font-inter mb-6">
                    Protecting Your <span className="text-blue-500">Google Ads</span> Investment
                </h2>
                <p className="text-gray-300 max-w-4xl mx-auto mb-12 font-poppins leading-relaxed">
                    Account performance can be disrupted by policy reviews, advertiser verification deadlines, or invalid traffic. We implement disciplined compliance standards and proactive monitoring to safeguard your ad investment.
                </p>

                {/* Tabs */}
                <div className="grid grid-cols-2 lg:grid-cols-4 flex-wrap justify-center gap-4 mb-12">
                    {protectionsData.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-7 py-3 rounded-xl font-medium text-sm transition ${activeTab === index
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                }`}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="relative min-h-[350px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="grid lg:grid-cols-2 md:gap-10 items-center text-left"
                        >
                            {/* LEFT IMAGE */}
                            <div className="relative w-full h-72 md:h-96 bg-transparent rounded-2xl overflow-hidden">
                                <Image
                                    src={protectionsData[activeTab].image}
                                    alt={protectionsData[activeTab].title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* RIGHT TEXT */}
                            <div>
                                <h3 className="text-2xl md:text-3xl text-center md:text-left font-semibold mb-4">
                                    {protectionsData[activeTab].title}
                                </h3>
                                <p className="text-gray-300 text-center md:text-left leading-relaxed">
                                    {protectionsData[activeTab].description}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* CTA */}
                <motion.div
                    className="mt-14"
                >
                    <Link href={'#form'}>
                        <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                            Secure Your Account and Maximize ROI.
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
