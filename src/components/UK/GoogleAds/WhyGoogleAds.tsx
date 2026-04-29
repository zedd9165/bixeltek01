'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import dashboardImg from "@/assets/Google Ads Dashboard.png";
import Link from "next/link";

export default function WhyGoogleAdsUk() {
    return (
        <section className="w-full bg-black text-gray-100 py-10 overflow-hidden">
            {/* Container */}
            <div className="w-[95%] md:w-[85%] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">

                {/* LEFT IMAGE */}
                <motion.div
                    initial={{ x: -80, opacity: 0, scale: 0.95 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="flex-1 relative w-full lg:w-1/2 h-[400px] md:h-[550px] lg:h-[600px] overflow-visible"
                >
                    <Image
                        src={dashboardImg}
                        alt="Google Ads Overview"
                        fill
                        className="object-cover  rounded-r-2xl shadow-2xl"
                        priority
                    />
                </motion.div>

                {/* RIGHT CONTENT */}
                <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="flex-1 lg:w-1/2 px-4 md:px-8 lg:px-16 mt-10 lg:mt-0"
                >
                    <h2 className="text-3xl md:text-6xl font-bold font-inter leading-snug mb-6">
                        What Is Google Ads <span className="text-blue-500">and Why Does It Matter for UK & Irish Businesses?</span>
                    </h2>

                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                       Google Ads is Google&apos;s online advertising platform that puts your business at the top of search results, on YouTube, across websites, and inside Gmail. Instead of waiting months for SEO to kick in, Google Ads gets you in front of ready-to-buy customers immediately. For businesses across the UK & Ireland, that means:
                    </p>

                    <ul className="space-y-4 mb-8">
                        <li className="flex gap-3">
                            <span className="text-blue-500">✔</span>  Reaching people the exact moment they search for your services — 
                            &quot;plumber in London&quot;, &quot;accountant in Dublin&quot;, &quot;roofing company near me&quot;
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-500">✔</span> Full budget control with pay-per-click (PPC) bidding — spend only when someone clicks.
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-500">✔</span> Real-time tracking of clicks, calls, form fills, and conversions.
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-500">✔</span> Scale from a single city to nationwide UK & Ireland coverage.
                        </li>
                    </ul>

                    {/* CTA */}
                    <motion.div>
                        <Link href={"#form"}>
                            <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                                Book A Free Strategy Call
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
