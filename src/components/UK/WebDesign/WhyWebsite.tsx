"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dashboardImg from "@/assets/laptop dentist 2.png"; // you can replace with a "web design" related image
import Link from "next/link";
import { Check } from "lucide-react"; // ✅ React check icon
import { ArrowRight } from "lucide-react";

export default function WhyWebsiteUk() {
    return (
        <section className="w-[95%] mx-auto mt-0 bg-black text-gray-100 py-10 md:py-20 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
                {/* LEFT IMAGE */}
                <motion.div
                    initial={{ x: -80, opacity: 0, scale: 0.95 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="flex justify-center items-center  relative w-full lg:w-1/2 h-[300px] md:h-[500px] lg:h-[630px]"
                >
                    <Image
                        src={dashboardImg}
                        alt="Website Issues Overview"
                        fill
                        className="object-contain object-center  rounded-2xl"
                        priority
                    />
                </motion.div>

                {/* RIGHT CONTENT */}
                <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="flex-1 lg:w-1/2 px-8 lg:px-16 mt-0  lg:mt-0"
                >
                    {/* Heading */}
                    <h2 className="text-3xl md:text-6xl font-bold font-inter leading-snug mb-6">
                        Why Your Website Might Be{" "}
                        <span className="text-blue-500">Costing You Customers</span>
                    </h2>

                    {/* Intro */}
                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        Think about your current website. Does it load slowly? Look outdated on mobile? Fail to generate enquiries? You&apos;re not alone — many businesses across the UK & Ireland face the exact same problems:
                    </p>

                    {/* Pain Points */}
                    <ul className="space-y-4 mb-8">
                        <li className="flex gap-3">
                            <ArrowRight className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                            Outdated visuals make your brand look less credible.
                        </li>
                        <li className="flex gap-3">
                            <ArrowRight className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                            Slow performance drives visitors away before they engage.
                        </li>
                        <li className="flex gap-3">
                            <ArrowRight className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                            No SEO foundation means you don’t show up in Google searches.
                        </li>
                        <li className="flex gap-3">
                            <ArrowRight className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                            Poor mobile responsiveness frustrates potential customers.
                        </li>
                        <li className="flex gap-3">
                            <ArrowRight className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                            Weak calls-to-action result in visitors not converting.
                        </li>
                    </ul>

                    {/* Closing Line */}
                    <p className="text-gray-300 mb-8 font-poppins leading-relaxed max-w-2xl">
                        Every day these problems persist, you&apos;re losing business to competitors with a stronger digital presence.
                    </p>

                    {/* CTA */}
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
