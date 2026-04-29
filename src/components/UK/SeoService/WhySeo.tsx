"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dashboardImg from "@/assets/a-full-suite-of-SEO-tools.webp"; // keep same or replace with SEO-related image
import Link from "next/link";
import { Check } from "lucide-react"; // ✅ React check icon

export default function WhySEOUk() {
    return (
        <section className="w-[95%] mx-auto mt-0 bg-black text-gray-100 py-10 md:py-20 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
                {/* LEFT IMAGE */}
                <motion.div
                    initial={{ x: -80, opacity: 0, scale: 0.95 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="flex justify-center items-center relative w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[530px]"
                >
                    <Image
                        src={dashboardImg}
                        alt="SEO Tools Overview"
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
                    className="flex-1 lg:w-1/2 px-8 lg:px-16 mt-0 lg:mt-0"
                >
                    {/* Heading */}
                    <h2 className="text-3xl md:text-6xl font-bold font-inter leading-snug mb-6">
                        What SEO Really Means for{" "}
                        <span className="text-blue-500">UK & Irish  Businesses</span>
                    </h2>

                    {/* Intro */}
                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        SEO — Search Engine Optimisation — is the foundation of digital competitiveness. It ensures your brand is visible when customers search with intent. In the UK & Ireland&apos;s highly competitive markets, SEO provides a compounding advantage — securing visibility, building credibility, and reducing reliance on expensive paid advertising.
                    </p>

                    {/* Copy Points */}
                    <ul className="space-y-4 mb-8">
                        <li className="flex gap-3">
                            <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                            Capture demand at the exact moment customers are searching for what you offer.
                        </li>
                        <li className="flex gap-3">
                            <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                            Build long-term trust and authority by ranking organically on Google.
                        </li>
                        <li className="flex gap-3">
                            <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                            Generate predictable, qualified leads 24 hours a day, 7 days a week.
                        </li>
                        <li className="flex gap-3">
                            <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                            Future-proof your visibility for both traditional Google Search and AI-driven platforms.
                        </li>
                    </ul>

                    {/* CTA */}
                    <motion.div>
                        <Link href={"#form"}>
                            <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                                Book a Free Strategy Call
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
