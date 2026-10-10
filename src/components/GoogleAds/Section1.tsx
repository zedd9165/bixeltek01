"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaShoppingCart, FaRobot, FaRedo } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import Image from "next/image";

import metalogo from "@/assets/9805185_meta_logo_facebook_social media_icon.png";
import reacticon from "@/assets/7423888_react_react native_icon.png";
import googlelogo from "@/assets/2993685_brand_brands_google_logo_logos_icon.png";
import instagramlogo from "@/assets/6929237_instagram_icon.png";
import photoshoplogo from "@/assets/photoshop.webp";
import illustrator from "@/assets/illustrator.webp";
import Link from "next/link";
import googleanalyticslogo from "@/assets/icons8-google-analytics-24.png";
import searchengineoptimizationlogo from "@/assets/1000174561.png";
import ytlogo from "@/assets/4375133_logo_youtube_icon.png";
import semrushlogo from "@/assets/4202007_analytics_google_logo_social_social media_icon.png";
import googleadslogo from "@/assets/6929233_google ads_logo_icon.png";
import wordpresslogo from "@/assets/317716_cms_wordpress_blog_blogging_icon.png";
import shoppingads from '@/assets/645a617a7f00617222c630ee_6452937893cd84e81e81c96e_google_shopping_icon.png'

import { campaignTypes } from "@/data/googleAdsPageData";

export default function Section1() {
  const campaigns = [
    {
      title: campaignTypes[0].title,
      description: campaignTypes[0].description,
      icon: <MdSearch className="text-blue-500 text-3xl" />,
      logos: [
        googleadslogo,
        googlelogo,
        searchengineoptimizationlogo,
        googleanalyticslogo,
      ],
    },
    {
      title: campaignTypes[1].title,
      description: campaignTypes[1].description,
      icon: <FaYoutube className="text-red-500 text-3xl" />,
      logos: [ytlogo, metalogo, instagramlogo],
    },
    {
      title: campaignTypes[2].title,
      description: campaignTypes[2].description,
      icon: <FaShoppingCart className="text-green-500 text-3xl" />,
      logos: [googleadslogo, googlelogo, shoppingads],
    },
    {
      title: campaignTypes[3].title,
      description: campaignTypes[3].description,
      icon: <FaRobot className="text-purple-500 text-3xl" />,
      logos: [googlelogo, googleadslogo, googleanalyticslogo, ytlogo],
    },
    {
      title: campaignTypes[4].title,
      description: campaignTypes[4].description,
      icon: <FaRedo className="text-orange-500 text-3xl" />,
      logos: [metalogo, instagramlogo, ytlogo, googleadslogo],
    },
  ];

  // Animation Variants
const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  }),
};


  return (
    <section className="w-full mt-0 bg-black text-gray-50 pt-32 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-6xl font-inter font-bold mb-4">
            <span className="text-blue-500"> Campaigns Designed</span> for Every Business Goal
          </h2>
          <p className="text-gray-300 mb-6 font-poppins leading-relaxed">
            Not all Google Ads campaigns are created equal. Depending on your
            industry, audience, and budget, the right campaign type can make or
            break your success. At{" "}
            <span className="font-semibold">Bixeltek</span>, we design the mix
            that works best for you.
          </p>

          <div className="flex gap-4 mt-7">
            <Link href={'tel:+919100032301'}>
            <button className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Get Started
            </button>
            </Link>
            <Link href={'#form'}>
            <button className="px-6 py-3 rounded-2xl border border-gray-400 text-gray-100 font-medium hover:bg-gray-100 hover:text-black transition">
              Book A Free Audit
            </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE - 2 Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {campaigns.slice(0, 2).map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-[#181818]/90  shadow-lg hover:shadow-2xl 
                         transition flex justify-around flex-col gap-4 backdrop-blur-md will-change-transform"
              initial="hidden"
              animate="visible"
              custom={index}
              variants={cardVariants}
            >
              <div className="flex items-center gap-3">
                <h4 className="font-semibold text-lg md:text-2xl font-inter">
                  {item.title}
                </h4>
              </div>
              <p className="text-gray-400 font-poppins text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="flex gap-3 flex-wrap mt-2">
                {item.logos?.map((logo, i) => (
                  <Image
                    key={i}
                    src={logo}
                    alt="logo"
                    width={35}
                    height={35}
                    className="object-contain"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Row - 3 Cards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-10 grid md:grid-cols-3 gap-6">
        {campaigns.slice(2).map((item, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl bg-[#181818]/90  shadow-lg hover:shadow-2xl 
                       transition flex flex-col gap-4 backdrop-blur-md will-change-transform"
            initial="hidden"
            animate="visible"
            custom={index + 2}
            variants={cardVariants}
          >
            <div className="flex items-center gap-3">
          
              <h4 className="font-semibold text-lg md:text-2xl font-inter">
                {item.title}
              </h4>
            </div>
            <p className="text-gray-400 font-poppins text-sm leading-relaxed">
              {item.description}
            </p>
            <div className="flex gap-3 flex-wrap mt-2">
              {item.logos?.map((logo, i) => (
                <Image
                  key={i}
                  src={logo}
                  alt="logo"
                  width={35}
                  height={35}
                  className="object-contain"
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
