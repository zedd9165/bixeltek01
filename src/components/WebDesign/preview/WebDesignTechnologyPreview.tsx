"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  ShoppingBag,
  Cpu,
  Network,
  FileCode2,
  Info,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiWordpress,
  SiWoo,
  SiPhp,
  SiElementor,
  SiShopify,
  SiStripe,
  SiRazorpay,
  SiStrapi,
  SiContentful,
  SiSanity,
  SiPrismic,
  SiGraphql,
  SiPostman,
  SiZapier,
  SiHubspot,
  SiSalesforce,
  SiZoho,
  SiGhost,
  SiDrupal,
  SiWebflow,
  SiFacebook,
  SiWhatsapp,
  SiN8N,
  SiNuxtdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiFrappe,
  SiSap,
  SiGoogleads,
} from "react-icons/si";
import { webTechnologyData } from "@/data/service/webdesing";

const techIcons = [
  <Code2 key="0" className="w-6 h-6 text-blue-600" />,
  <Globe key="1" className="w-6 h-6 text-indigo-600" />,
  <ShoppingBag key="2" className="w-6 h-6 text-emerald-600" />,
  <Cpu key="3" className="w-6 h-6 text-purple-600" />,
  <Network key="4" className="w-6 h-6 text-cyan-600" />,
  <FileCode2 key="5" className="w-6 h-6 text-amber-600" />,
];

const techPillBadges = [
  "Performance & React Stack",
  "Flexible CMS & WooCommerce",
  "Commerce Ecosystem",
  "Decoupled Architecture",
  "CRM, Systems & Automation",
  "Editorial & Governance",
];

const stackIcons: Record<string, { Icon: IconType; color: string }> = {
  nextjs: { Icon: SiNextdotjs, color: "#000000" },
  react: { Icon: SiReact, color: "#61DAFB" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  vercel: { Icon: SiVercel, color: "#000000" },
  wordpress: { Icon: SiWordpress, color: "#21759B" },
  woocommerce: { Icon: SiWoo, color: "#96588A" },
  php: { Icon: SiPhp, color: "#777BB4" },
  elementor: { Icon: SiElementor, color: "#92003B" },
  shopify: { Icon: SiShopify, color: "#7AB55C" },
  stripe: { Icon: SiStripe, color: "#635BFF" },
  razorpay: { Icon: SiRazorpay, color: "#0C2451" },
  strapi: { Icon: SiStrapi, color: "#4945FF" },
  contentful: { Icon: SiContentful, color: "#2478CC" },
  sanity: { Icon: SiSanity, color: "#F03E2F" },
  prismic: { Icon: SiPrismic, color: "#5163BA" },
  graphql: { Icon: SiGraphql, color: "#E10098" },
  postman: { Icon: SiPostman, color: "#FF6C37" },
  zapier: { Icon: SiZapier, color: "#FF4A00" },
  hubspot: { Icon: SiHubspot, color: "#FF7A59" },
  salesforce: { Icon: SiSalesforce, color: "#00A1E0" },
  zoho: { Icon: SiZoho, color: "#C8202B" },
  ghost: { Icon: SiGhost, color: "#15171A" },
  drupal: { Icon: SiDrupal, color: "#0678BE" },
  webflow: { Icon: SiWebflow, color: "#146EF5" },
  facebook: { Icon: SiFacebook, color: "#1877F2" },
  whatsapp: { Icon: SiWhatsapp, color: "#25D366" },
  n8n: { Icon: SiN8N, color: "#FF6C37" },
  nuxtjs: { Icon: SiNuxtdotjs, color: "#00C58E" },
  vuejs: { Icon: SiVuedotjs, color: "#42B883" },
  nodejs: { Icon: SiNodedotjs, color: "#339933" },
  frappe: { Icon: SiFrappe, color: "#00A1E0" }, 
  sap : { Icon: SiSap, color: "#0FAAFF" },
  googleAds : { Icon: SiGoogleads, color: "#4285F4" },
};

export default function WebDesignTechnologyPreview() {
  return (
    <section
      id="technology"
      className="scroll-mt-24 py-24 bg-white text-[#08080C] relative border-t border-gray-200"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Intro */}
        <div className="max-w-7xl mb-16 mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{webTechnologyData.eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
            {webTechnologyData.h2}
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed max-w-5xl mx-auto">
            {webTechnologyData.intro}
          </p>
        </div>

        {/* Structured Comparative Ledger on White */}
        <div className="border border-gray-200 rounded-2xl bg-white shadow-sm overflow-hidden">
          <div className="hidden md:grid grid-cols-12 bg-gray-50 border-b border-gray-200 px-8 py-4 text-xs font-poppins font-semibold uppercase tracking-wider text-gray-500">
            <div className="col-span-4">Platform / Architecture</div>
            <div className="col-span-5">Appropriate Application & Rationale</div>
            <div className="col-span-3 text-right">Core Fit</div>
          </div>

          <div className="divide-y divide-gray-200">
            {webTechnologyData.cards.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 sm:p-8 md:grid md:grid-cols-12 md:items-center gap-6 hover:bg-gray-50/70 transition-colors"
              >
                {/* Column 1: Platform + tech stack logos */}
                <div className="md:col-span-4 flex items-start gap-4 mb-3 md:mb-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    {techIcons[idx % techIcons.length]}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-inter text-[#08080C]">
                      {item.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.stack?.map((tech) => {
                        const entry = stackIcons[tech.icon];
                        if (!entry) return null;
                        const { Icon, color } = entry;
                        return (
                          <span
                            key={tech.name}
                            title={tech.name}
                            className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 px-2 py-1 text-[11px] font-medium font-poppins text-gray-600 shadow-sm"
                          >
                            <Icon
                              className="w-6 h-6"
                              style={{ color }}
                              aria-hidden
                            />
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Column 2: Description */}
                <div className="md:col-span-5 mb-4 md:mb-0">
                  <p className="text-sm sm:text-base text-gray-600 font-poppins leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Column 3: Badge */}
                <div className="md:col-span-3 md:text-right">
                  <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-poppins">
                    {techPillBadges[idx % techPillBadges.length]}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Supporting Paragraph Banner */}
          {webTechnologyData.supportingParagraph && (
            <div className="p-6 sm:p-8 bg-blue-50/60 border-t border-gray-200 flex items-start gap-4 text-xs sm:text-sm text-blue-900 font-poppins leading-relaxed">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-blue-950">Technology Policy: </strong>
                {webTechnologyData.supportingParagraph}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}