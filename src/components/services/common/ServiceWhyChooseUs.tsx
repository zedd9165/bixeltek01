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

export interface ServiceWhyChooseUsProps {
  id?: string;
  data: EcommerceWhyChooseData;
  defaultImage?: StaticImageData | string;
}



export default function ServiceWhyChooseUs({
  id = "why-bixeltek",
  data,
  defaultImage = defaultWhyChooseImg,
}: ServiceWhyChooseUsProps) {
  const imageSrc = data.image || defaultImage;
  const rawItems = data.points && data.points.length > 0 ? data.points : [];

  return (
    <section
      id={id}
      className="scroll-mt-24 relative overflow-hidden bg-white py-20 md:py-28 text-[#08080C] border-t border-gray-200/90"
    >
      <div className="relative mx-auto w-full px-4 sm:px-6 lg:max-w-[90%] lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* LEFT: Image & floating badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="relative mx-auto w-full">
              <div className="pointer-events-none absolute -bottom-5 -right-5 h-full w-full rounded-3xl border border-blue-200/70 bg-gradient-to-br from-blue-100/50 to-[#670EF7]/10 -z-10" />
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-purple-500/10 to-indigo-500/15 blur-2xl -z-10" />

              <div className="relative h-[440px] md:h-[520px] lg:h-[680px] w-full rounded-3xl overflow-hidden border border-gray-200/90 bg-gray-50 shadow-2xl shadow-blue-950/10 group">
                <Image
                  src={imageSrc}
                  alt={data.h2 || "Why Choose Bixeltek"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-gray-950/15 to-transparent pointer-events-none" />

                <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/80 shadow-lg text-xs font-poppins font-semibold text-blue-700">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span>Standard of Engineering</span>
                </div>

                <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-poppins font-medium text-white shadow-md">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>5+ Yrs Field Proof</span>
                </div>

                <div className="absolute bottom-5 left-4 right-4 md:left-5 md:right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200/90 shadow-xl shadow-gray-950/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-poppins font-semibold uppercase tracking-wider text-blue-600">
                        Production Discipline
                      </div>
                      <div className="text-sm font-poppins font-bold text-[#08080C]">
                        Commercial Delivery Standard
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-poppins font-semibold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Zero Bloat</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Header, reasons & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-start"
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
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1 mb-8 border-t border-gray-200/90">
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
                    className="flex items-center gap-4 py-4 border-b border-gray-200/90 group"
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-white text-blue-600 ring-1 ring-blue-200/80 shadow-sm group-hover:bg-blue-600 group-hover:ring-blue-600 group-hover:shadow-md group-hover:shadow-blue-600/30 transition-all duration-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[15px] sm:text-base font-semibold font-inter leading-snug text-[#08080C] group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </span>
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