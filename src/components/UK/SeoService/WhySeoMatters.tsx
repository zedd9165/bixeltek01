"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import seoImage from "@/assets/SEO-SERVICESToronto-1.webp"; // replace with your image
import Link from "next/link";
import { Check } from "lucide-react";

export default function WhySEOMattersUk() {
    const points = [
        "Over 90% of customer journeys begin with a search engine.",
        "Businesses ranking on page one capture the vast majority of clicks, traffic, and leads.",
        'Local "near me" searches are growing year on year across every UK & Irish city.',
        "AI-driven search platforms are already shaping how customers discover businesses — and SEO positions you to be found there too.",
    ];

    return (
        <section className="w-[96%] md:w-[90%] mx-auto mt-0 bg-black text-gray-100 pb-0  pt-20 md:pb-20  overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="flex-1 px-8 lg:px-16"
                >
                    {/* Heading */}
                    <h2 className="text-3xl md:text-6xl font-bold font-inter leading-snug mb-6">
                        Why <span className="text-blue-500">Local SEO Is Critical</span> for Your Business
                    </h2>

                    {/* Intro */}
                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        The UK and Ireland are among Europe&apos;s most competitive digital markets. With rising ad costs and increasingly fragmented consumer attention, SEO ensures your brand is present where customers look first — on Google.
                    </p>

                    {/* Copy Points */}
                    <ul className="space-y-4 mb-8">
                        {points.map((point, idx) => (
                            <li key={idx} className="flex gap-3">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                {point}
                            </li>
                        ))}
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

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ x: 80, opacity: 0, scale: 0.95 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="flex-1 flex justify-center items-center relative w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[530px]"
                >
                    {/* Inner wrapper to scale image */}
                    <div className="relative w-[100%] h-[100%]">
                        <Image
                            src={seoImage}
                            alt="Why SEO Matters in Toronto"
                            fill
                            className="object-contain object-center rounded-2xl"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
