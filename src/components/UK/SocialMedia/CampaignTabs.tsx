"use client";

import React, { useState } from "react";
import Image from "next/image";
import image1 from '@/assets/SSMM.jpg'
import orggrowth from '@/assets/dm_new.webp'
import leadgen from '@/assets/online-lead-generation.png'
import brand from '@/assets/1-increase-brand-awareness.webp'
import Link from "next/link";
export default function CampaignTabsSocialMissUk() {
    const campaigns = [
        {
            title: "Organic Growth Campaigns",
            description:
                "Build brand presence and credibility with consistent posting to engage your audience and strengthen your online identity.",
            image: orggrowth, 
        },
        {
            title: "Lead Generation Campaigns",
            description:
                "Drive calls, form fills, and bookings directly from social ads targeting the right audience for measurable results.",
            image: leadgen,
        },
        {
            title: "Remarketing Campaigns",
            description:
                "Re-engage past visitors and warm audiences with targeted ads, turning interest into conversions.",
            image: image1,
        },
        {
            title: "Brand Awareness Campaigns",
            description:
                "Create visibility and recognition across Uk & Ireland with multi-platform campaigns tailored to your audience.",
            image: brand,
        },
        {
            title: "Product Launch Campaigns",
            description:
                "Showcase new products or services with strategic multi-platform reach for maximum exposure and impact.",
            image: image1,
        },
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-24 px-8 md:px-20 bg-black text-white">
            {/* Heading */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                    Social Campaigns Tailored to <span className="text-blue-500">Your Business Goals</span>
                </h2>
                <p className="text-gray-300 text-lg md:text-xl">
                    Not all campaigns are the same. We design strategies that align with your business goals — whether it’s awareness, leads, or sales.
                </p>
            </div>

            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {campaigns.map((campaign, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`px-5 py-2 rounded-full font-semibold transition ${activeTab === index
                            ? "bg-blue-500 text-white"
                            : "bg-transparent border border-white text-gray-300 hover:bg-gray-900"
                            }`}
                    >
                        {campaign.title}
                    </button>
                ))}
            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Left - Image */}
                <div className="w-full md:w-1/2">
                    <Image
                        src={campaigns[activeTab].image}
                        alt={campaigns[activeTab].title}
                        width={500}     
                        height={400}      // slightly less height
                        className="w-full h-[400px] md:h-[500px] rounded-xl object-cover"
                    />
                </div>

                {/* Right - Text and Buttons */}
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
                    <h3 className="text-3xl font-bold">{campaigns[activeTab].title}</h3>
                    <p className="text-gray-300 text-lg">{campaigns[activeTab].description}</p>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-4">
                        <Link href={'/contact-us'}>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Closing Line */}
            <p className="mt-12 text-center text-gray-300 text-lg md:text-xl font-medium">
                Every campaign is designed with a clear ROI focus — no vanity metrics, just measurable results.
            </p>
        </section>
    );
}
