import React from "react";

import react from '@/assets/reactlogo.png'
import wordpress from '@/assets/WordPress-Logo-2008-present.jpg'
import elementor from '@/assets/elementor.png'
import nextjsicon from '@/assets/nextjsicon.jpg'
import tailwindcsslogo from '@/assets/tailwindcss_logo_icon_170649.webp'
import jslogo from '@/assets/Node.js_logo.svg.png'
import html from '@/assets/html5-emblem-orange-shield-and-white-text-vector.jpg'
import mongo from '@/assets/Mongodb.png'
import mongoose from '@/assets/mongoose2.png'
import redis from '@/assets/redis-icon.webp'
import frappe from '@/assets/technologies/frappe.png'
import vue from '@/assets/technologies/vuejs_logo_icon_169247.webp'
import python from '@/assets/technologies/python-logo-png_seeklogo-207405.png'
import nuxt from '@/assets/technologies/nuxt-logo.png'
import razorpay from '@/assets/technologies/logo_razorpay.webp'
import zapier from '@/assets/zapier-icon-svgrepo-com.png'
import docker from "@/assets/queesdocker1-768x432-1.webp";
import drupel from "@/assets/Wordmark2_blue_RGB.png";
import hostinger from '@/assets/Hostinger-logo.png'
import shopify from '@/assets/technologies/Shopify_logo_2018.svg.png'
import stripe from "@/assets/Stripe_Logo,_revised_2016.svg.png";
import linux from '@/assets/technologies/linux.png'
import googleadslogo from "@/assets/googleads-logo.png";
import shopifylogo from "@/assets/shopifylogo.png";
import slack from "@/assets/Slack_icon_2019.svg.png";
import woo from "@/assets/woocommerce.png";
import magento from "@/assets/magento-2-logo-svgrepo-com.png";
import reactnative from '@/assets/react-native.png'
import Image from "next/image";

const icons = [
  { src: googleadslogo, alt: "Google Ads", className: "h-16" },
  { src: shopifylogo, alt: "Shopify", className: "h-20" },
  { src: react, alt: "React", className: "h-16" },
  { src: slack, alt: "Slack", className: "h-16" },
  { src: woo, alt: "WooCommerce", className: "h-16" },
  { src: magento, alt: "Magento", className: "h-20" },
  { src: jslogo, alt: "Node.js", className: "h-16" },
  { src: mongo, alt: "MongoDB", className: "h-16" },
  { src: wordpress, alt: "WordPress", className: "h-20" },
  { src: elementor, alt: "Elementor", className: "h-14" },
  { src: redis, alt: "Redis", className: "h-24" },
  { src: tailwindcsslogo, alt: "Tailwind CSS", className: "h-full" },
  { src: reactnative, alt: "React Native", className: "h-16" },
  { src: html, alt: "HTML5", className: "h-16" },
  { src: nextjsicon, alt: "Next.js", className: "h-16" },
  { src: mongoose, alt: "Mongoose", className: "h-24" },
  { src: frappe, alt: "Frappe", className: "h-24" },
  { src: python, alt: "Python", className: "h-28" },
  { src: vue, alt: "Vue.js", className: "h-24" },
  { src: nuxt, alt: "Nuxt.js", className: "h-24" },
  { src: razorpay, alt: "Razorpay", className: "h-24" },
  { src: zapier, alt: "Zapier", className: "h-12" },
  { src: docker, alt: "Docker", className: "h-24" },
  { src: drupel, alt: "Drupal", className: "h-24" },
  { src: hostinger, alt: "Hostinger", className: "h-24" },
  { src: shopify, alt: "Shopify", className: "h-24" },
  { src: stripe, alt: "Stripe", className: "h-12" },
  { src: linux, alt: "Linux", className: "h-12" },
];


const TechGrid = () =>{
    return(
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                  {icons.map((icon, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center bg-white border border-gray-200 shadow-sm h-24 rounded-2xl p-4 hover:shadow-md transition"
                    >
                      <Image src={icon.src} alt={icon.alt} className={`${icon.className} object-contain`} />
                    </div>
                  ))}
                </div>
    )
}

export default TechGrid;