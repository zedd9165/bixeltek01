"use client";

import { motion } from "framer-motion";


import img1 from "@/assets/rootedtreeservices.com_(hd screenshot).png";
import img2 from "@/assets/cloudupskill-full.jpg";
import img3 from "@/assets/durrat-full.jpg";
import img4 from "@/assets/blooming.jpg";
import img5 from '@/assets/omacomputers.com_home_(hd screenshot).png'
import img6 from '@/assets/MGD-Poster.jpg'
import Link from "next/link";
import { showcaseContent } from "@/data/webDesignData";

export default function WebShowcaseSection() {
    const images = [
        { src: img1, name: "Rooted Tree Services" },
        { src: img2, name: "Cloud Upskill" },
        { src: img3, name: "Durrat " },
        { src: img4, name: "Blooming " },
        { src: img5, name: "OMA Computers" },
        { src: img6, name: "Markham Dentistry" },
    ];

    return (
        <section className="w-[90%] mx-auto lg:w-full mt-5 md:mt-20 min-h-screen relative bg-black text-white gap-5 flex flex-col items-center justify-center">
            <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
            <h2 className="text-center text-4xl md:text-6xl max-w-5xl font-semibold mx-auto">
                <span className="text-blue-500">{showcaseContent.headingHighlight}</span>
                {showcaseContent.headingPart2}
            </h2>
            <p className="text-base max-w-[95%] md:max-w-5xl mx-auto text-center text-white">
                {showcaseContent.intro1}
            </p>
            <p className="text-base max-w-[95%] md:max-w-5xl mx-auto text-center text-white">
                {showcaseContent.intro2}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                {images.map((item, i) => (
                    <div
                        key={i}
                        className="relative overflow-hidden rounded-2xl pt-4 pb-0 px-2 h-[600px] bg-transparent flex flex-col"
                    >
                        <div className="flex-1 overflow-hidden">
                            <motion.img
                                src={item.src.src} // 👈 important for Next.js image imports
                                alt={item.name}
                                className="w-full h-auto object-cover"
                                initial={{ y: 0 }}
                                whileHover={{ y: "-80%" }} // moves up smoothly on hover
                                transition={{ duration: 7, ease: "easeInOut" }}
                            />
                        </div>
                        {/* name below image */}
                        <div className="p-2 text-center tracking-wider font-inter bg-transparent text-white text-lg font-medium">
                            {item.name}
                        </div>
                    </div>
                ))}

            </div>
            <div className="flex flex-col justify-center items-center gap-4 mt-4">
                <h2 className="text-2xl font-inter font-semibold text-white text-center">
                    {showcaseContent.closingHeading}
                </h2>
                <Link href={showcaseContent.ctaHref}>
                    <button className="px-7 py-3 rounded-2xl bg-blue-600 border border-blur-500 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                        {showcaseContent.ctaText}
                    </button>
                </Link>
            </div>
        </section>
    );
}
