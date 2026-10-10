import Image from "next/image";

import React from "react";
import wordpress from "@/assets/WordPress-logotype-wordmark-white.png";
import drupel from "@/assets/Wordmark2_blue_RGB.png";
import elementor from "@/assets/Elementor-Logo-Full-Pink.png";
import nextjsicon from "@/assets/Logo.png";
import tailwindcsslogo from "@/assets/queesdocker1-768x432-1.webp";
import jslogo from "@/assets/nodejs-white-web-story.png";
import html from "@/assets/Stripe_Logo,_revised_2016.svg.png";
import mongo from "@/assets/NewMongo_logo_White-2000x503.png";
import hostinder from '@/assets/Hostinger-logo.png'
import shopify from '@/assets/shopify_logo_white.png'
import mongoose from "@/assets/razorpay.png";
import redis from "@/assets/redis-icon.webp";
import TechGrid from "../Common/TechGrid";

const logos = [
  { src: wordpress, alt: "WordPress" },
  { src: elementor, alt: "Elementor" },
  { src: nextjsicon, alt: "Next.js" },
  { src: tailwindcsslogo, alt: "TailwindCSS" },
  { src: jslogo, alt: "Node.js" },
  { src: html, alt: "HTML5" },
  { src: mongo, alt: "MongoDB" },
  { src: mongoose, alt: "Mongoose" },
  { src: redis, alt: "Redis" },
  { src: drupel, alt: "WordPress" },
  { src: hostinder, alt: "Hostinger" },
  { src: shopify, alt: "Shopify" },
];


export default function WebTech() {
  return (
    <section className="w-full py-20 mt-10 md:mt-20 bg-black">
      <div className="max-w-[90%] mx-auto flex flex-col gap-8">
        {/* Left text */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center items-center lg:items-start text-center mx-auto ">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-50 mb-4">
            Technology Selected Around <span className="text-blue-500">Business Logic</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            We do not force a single framework. Our team selects platforms, languages, and integrations based on your performance, team editorial workflow, and scaling requirements.
          </p>
        </div>
        
        {/* Right side logos */}
        <div className="w-full">
          <TechGrid cols={10} />
        </div>
      </div>
    </section>
  )
}
