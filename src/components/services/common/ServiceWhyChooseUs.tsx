"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Award,
  Layers,
  Target,
  MousePointerClick,
  BarChart3,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import type { EcommerceWhyChooseData } from "@/data/service/ecom";
import defaultWhyChooseImg from "@/assets/guerr-case-study-1.jpeg";

const POINT_ICONS: LucideIcon[] = [
  Award,
  Layers,
  Target,
  MousePointerClick,
  BarChart3,
  Rocket,
];

export interface WhyChoosePointItem {
  title: string;
  description?: string;
}

export interface GenericWhyChooseData {
  eyebrow: string;
  h2: string;
  intro: string;
  image?: StaticImageData | string;
  points: WhyChoosePointItem[];
  closingCopy?: string;
  ctaText?: string;
  ctaHref?: string;
  direction?: "left" | "right";
}

export interface ServiceWhyChooseUsProps {
  id?: string;
  data: GenericWhyChooseData | EcommerceWhyChooseData;
  defaultImage?: StaticImageData | string;
  direction?: "left" | "right";
}

export default function ServiceWhyChooseUs({
  id = "why-bixeltek",
  data,
  defaultImage = defaultWhyChooseImg,
  direction = "left",
}: ServiceWhyChooseUsProps) {
  const resolvedDirection =
    direction ||
    ("direction" in data && data.direction ? data.direction : "left");
  const isImageLeft = resolvedDirection === "left";

  const imageSrc = data.image || defaultImage;
  const rawItems = data.points && data.points.length > 0 ? data.points : [];

  return (
    <section
      id={id}
      className="scroll-mt-24 relative overflow-hidden bg-white py-20 md:py-28 text-[#08080C] border-t border-gray-200/90"
    >
      <div className="relative mx-auto w-full px-4 sm:px-6 lg:max-w-[90%] lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Image & floating badges */}
          <motion.div
            initial={{ opacity: 0, x: isImageLeft ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`lg:col-span-5 lg:sticky lg:top-28 ${
              isImageLeft ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="relative mx-auto w-full">
            

              <div className="relative h-[440px] md:h-[520px] lg:h-[680px] w-full rounded-3xl overflow-hidden border border-gray-200/90 bg-gray-50 shadow-2xl shadow-blue-950/10 group">
                <Image
                  src={imageSrc}
                  alt={data.h2 || "Why Choose Bixeltek"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />


                <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-poppins font-medium text-white shadow-md">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>5+ Yrs Field Proof</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column: Header, reasons & CTA */}
          <motion.div
            initial={{ opacity: 0, x: isImageLeft ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`lg:col-span-7 flex flex-col justify-start ${
              isImageLeft ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="inline-flex items-center self-start gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>{data.eyebrow}</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
              {data.h2}
            </h2>

            <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed mb-8">
              {data.intro}
            </p>

            {/* Points: plain icon + text list, 2 columns */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1 mb-8 border-t border-gray-200/90">
              {rawItems.map((item, idx) => {
                const Icon = POINT_ICONS[idx % POINT_ICONS.length];

                return (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.05 * idx,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-start gap-4 py-4 border-b border-gray-200/90 group"
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-white text-blue-600 ring-1 ring-blue-200/80 shadow-sm group-hover:bg-blue-600 group-hover:ring-blue-600 group-hover:shadow-md group-hover:shadow-blue-600/30 transition-all duration-300 mt-0.5">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="space-y-1 flex-1">
                      <span className="text-[15px] sm:text-base font-semibold font-inter leading-snug text-[#08080C] group-hover:text-blue-600 transition-colors block">
                        {item.title}
                      </span>
                      {"description" in item && typeof (item as WhyChoosePointItem).description === "string" && (
                        <p className="text-xs sm:text-sm text-gray-600 font-poppins leading-relaxed">
                          {(item as WhyChoosePointItem).description}
                        </p>
                      )}
                    </div>
                  </motion.li>
                );
              })}
            </ul>

            {data.closingCopy && (
              <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-blue-100 text-xs sm:text-sm text-gray-700 font-poppins leading-relaxed flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>{data.closingCopy}</span>
              </div>
            )}

            {data.ctaText && (
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href={data.ctaHref || "#plan-project"}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-poppins font-semibold text-sm shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 transition-all duration-300 group"
                >
                  <span>{data.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}