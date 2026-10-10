"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    HiOutlineDeviceMobile,
    HiOutlineSearch,
    HiOutlineLightningBolt,
    HiOutlineShieldCheck,
    HiOutlineCog,
    HiOutlineTrendingUp,
    HiOutlineCollection,
    HiOutlineChartBar,
} from "react-icons/hi";
import Image from "next/image";
import shape1 from "@/assets/testi-shape1.png";
import dashboard2 from "@/assets/user-interface-design-website-template.png";

import { engineeringFeatures, featuresHeader } from "@/data/webDesignData";

const FeaturesSection = () => {

    return (
        <section className="w-full py-10 lg:py-0 bg-[#f5f7fd] text-black relative overflow-hidden">
            <Image src={shape1} alt="shape1" className="absolute bottom-0 left-0" />

            <div className="max-w-full mx-auto flex flex-col-reverse lg:flex-row items-center gap-5">
                {/* Left: Text + Features Grid */}
                <div className="flex-1 flex flex-col gap-8 pl-4 pr-4 md:pl-32 md:pr-16">
                    <h2 className=" mt-10 text-center md:text-left text-4xl md:text-6xl font-bold font-inter leading-snug mb-2">
                        <span className="text-blue-500">{featuresHeader.headingHighlight}</span>
                        {featuresHeader.headingPart2}
                    </h2>
                    <p className="text-gray-800 text-center md:text-left text-base md:text-lg mb-4">
                        {featuresHeader.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        {engineeringFeatures.map((feature, index) => {
                            const featureIcons = [
                                <HiOutlineDeviceMobile key="mobile" className="text-blue-700 w-6 h-6" />,
                                <HiOutlineSearch key="search" className="text-blue-700 w-6 h-6" />,
                                <HiOutlineLightningBolt key="speed" className="text-blue-700 w-6 h-6" />,
                                <HiOutlineShieldCheck key="shield" className="text-blue-700 w-6 h-6" />,
                                <HiOutlineCollection key="integrate" className="text-blue-700 w-6 h-6" />,
                                <HiOutlineChartBar key="analytics" className="text-blue-700 w-6 h-6" />,
                            ];
                            return (
                                <motion.div
                                    key={index}
                                    className="relative bg-transparent rounded-xl p-6 flex items-start gap-4 overflow-hidden"
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
                                    <div className="relative z-10 bg-blue-100 p-4 rounded-full shadow-md flex items-center justify-center flex-shrink-0">
                                        {featureIcons[index % featureIcons.length]}
                                    </div>

                                    {/* Text */}
                                    <div className="relative z-10 flex flex-col text-left">
                                        <h3 className="text-xl font-bold text-black mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-950 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Closing line */}
                    <p className="text-gray-900 mt-6 font-medium leading-relaxed">
                        {featuresHeader.closing}
                    </p>
                </div>

                {/* Right: Image */}
                <motion.div
                    initial={{ x: 80, opacity: 0, scale: 0.95 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="relative lg:flex-1 w-full md:w-2/3 lg:w-1/2 h-[400px] md:h-[500px] lg:h-[1030px] px-6 lg:px-0"
                >
                    <Image
                        src={dashboard2}
                        alt="Website Features Preview"
                        fill
                        className="object-cover object-left rounded-r-2xl my-auto"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;
