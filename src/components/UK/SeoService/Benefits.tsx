"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image2 from '@/assets/Hosting-Hero.png'

export default function SEO_BenefitsUk() {
    const benefits = [
        { title: "Consistent, Qualified Leads", description: "Attract customers who are ready to take action and convert, ensuring a steady flow of high-quality inquiries through SEO." },
        { title: "Reduced Dependence on Ads", description: "Build a sustainable inbound marketing channel that drives organic traffic, reducing the need for expensive paid advertising campaigns." },
        { title: "Stronger Local Visibility", description: "Dominate Uk & Ireland's map pack and service-area searches, ensuring local customers can easily find your business when searching for services." },
        { title: "AI SEO Readiness", description: "Optimize for AI-driven platforms like Gemini, ChatGPT, and other emerging search engines to future-proof your online visibility." },
        { title: "Measurable ROI", description: "Transparent SEO reporting that directly connects search performance to leads, sales, and overall business growth metrics." },
        { title: "Long-Term Advantage", description: "SEO compounds over time, making it increasingly difficult for competitors to catch up while solidifying your market position." },
        { title: "Enhanced User Experience", description: "SEO best practices improve site speed, mobile responsiveness, and navigation, creating a smoother experience that keeps visitors engaged." },
        { title: "Competitive Edge", description: "Outrank competitors by owning top positions on search engines, positioning your brand as the go-to choice for customers in your niche." },
    ];

    const googleColors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#FF6D01", "#AB47BC"];
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <section className="w-full relative mx-auto pt-24 bg-transparent text-gray-100">
            <div className="hidden lg:absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

            {/* Section Heading */}
            <div className="text-center max-w-4xl mx-auto mb-12 px-4 md:px-0">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
                    What Our Clients Gain From{" "}
                    <span className="text-blue-500">SEO With Bixeltek</span>
                </h2>
                <p className="text-gray-300 text-base sm:text-lg md:text-xl">
                    We go beyond rankings. Our SEO strategies deliver business outcomes that
                    impact revenue, efficiency, and long-term market positioning.
                </p>
            </div>

            {/* DESKTOP: Expanding horizontal cards */}
            <div className="hidden lg:flex justify-center gap-4 h-96 overflow-visible mb-16 px-4 sm:px-8">
                {benefits.map((benefit, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                        <motion.div
                            key={idx}
                            layout
                            onMouseEnter={() => setActiveIndex(idx)}
                            className={`relative flex-shrink-0 cursor-pointer overflow-hidden border border-gray-200 bg-white p-4 ${isActive ? "rounded-3xl" : "rounded-full"}`}
                            initial={{ width: "60px" }}
                            animate={{ width: isActive ? "300px" : "60px" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <motion.div
                                className="font-semibold absolute left-6 bottom-0 font-inter transition-all duration-300 ease-in-out whitespace-nowrap"
                                style={{ color: googleColors[idx % googleColors.length] }}
                                animate={{
                                    rotate: isActive ? 0 : -90,
                                    top: isActive ? 16 : "95%",
                                    x: isActive ? 0 : -10,
                                    y: isActive ? 0 : -10,
                                    fontSize: isActive ? "1.5rem" : "1.2rem",
                                    transformOrigin: "top left",
                                    textWrap: isActive ? "wrap" : "nowrap",
                                }}
                            >
                                {benefit.title}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isActive ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute bottom-20 left-4 right-4 text-gray-700 text-sm sm:text-base font-poppins"
                                style={{ display: isActive ? "block" : "none" }}
                            >
                                {benefit.description}
                            </motion.div>

                            {isActive && (
                                <div className="absolute bottom-4 left-4">
                                    <a href="#form">
                                    <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-blue-600 text-white font-semibold text-xs sm:text-sm shadow-lg hover:bg-blue-700 transition">
                                        Book a Free Strategy Call
                                    </button>
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* MOBILE/TABLET: Vertical static cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4 mb-16 px-6">
                {benefits.map((benefit, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-3xl bg-white p-6">
                        <h3 className="font-semibold text-xl" style={{ color: googleColors[idx % googleColors.length] }}>
                            {benefit.title}
                        </h3>
                        <p className="text-gray-700 text-sm mt-2">{benefit.description}</p>

                    </div>
                ))}
                <a href="#form">
                    <button className="mt-4 px-4 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                        Book a Free Strategy Call
                    </button>
                </a>
            </div>

            {/* Image */}
            <div className=" hidden lg:flex justify-center px-4 sm:px-0">
                <Image
                    src={image2}
                    alt="SEO Growth"
                    className="max-w-full w-full sm:w-[90%] rounded-3xl"
                />
            </div>
        </section>
    );
}
