"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lock,
  Target,
  Sparkles,
  TrendingUp,
  ShoppingBag,
  BarChart3,
  Search,
  Megaphone,
  Layers,
  type LucideIcon,
} from "lucide-react";
import defaultEcommerceImg from "@/assets/omacomputers.com_home_(hd screenshot).png";

export interface PostLaunchItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ServicePostLaunchSectionProps {
  id?: string;
  eyebrow: string;
  h2: string;
  intro?: string;
  description?: string | string[];
  image?:
    | StaticImageData
    | string
    | {
        src?: string | StaticImageData | any;
        alt?: string;
        width?: number;
        height?: number;
      };
  items: PostLaunchItem[];
  ctaText?: string;
  ctaHref?: string;
  browserUrl?: string;
  statusText?: string;
  badgeSubtitle?: string;
  badgeTitle?: string;
}

const defaultIcons: LucideIcon[] = [
  TrendingUp,
  ShoppingBag,
  BarChart3,
  Search,
  Megaphone,
  Layers,
];

export default function ServicePostLaunchSection({
  id = "beyond-launch",
  eyebrow,
  h2,
  intro,
  description,
  image,
  items = [],
  ctaText = "Plan Store Optimization",
  ctaHref = "#plan-project",
  browserUrl = "store.bixeltek.com/growth-analytics",
  statusText = "Post-Launch Active",
  badgeSubtitle = "Continuous Store Evolution",
  badgeTitle = "Behaviour-Led Decisions · Zero Guesswork",
}: ServicePostLaunchSectionProps) {
  const resolveDisplayImage = () => {
    if (!image) return defaultEcommerceImg;
    if (typeof image === "string") return image;
    if (typeof image === "object" && "src" in image && image.src) {
      if (typeof image.src === "string" && image.src.startsWith("/images/services/ecommerce/post-launch")) {
        return defaultEcommerceImg;
      }
      return image.src;
    }
    return image as StaticImageData;
  };

  const displayImage = resolveDisplayImage();
  const imageAlt =
    (typeof image === "object" && "alt" in image && image.alt) ||
    h2 ||
    "Service growth preview";

  return (
    <section
      id={id}
      className="relative py-20 md:py-28 bg-[#FDFDFE] text-[#08080C] border-t border-gray-200 overflow-hidden"
    >
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-[#670EF7]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center self-start gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>{eyebrow}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-6">
              {h2}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-base md:text-lg text-gray-700 font-poppins leading-relaxed mb-8">
              {intro && <p>{intro}</p>}
              {Array.isArray(description) ? (
                description.map((paragraph, index) => (
                  <p key={index} className="text-gray-600">
                    {paragraph}
                  </p>
                ))
              ) : (
                description && <p className="text-gray-600">{description}</p>
              )}
            </div>

            {/* Focus List / Growth Cards */}
            <div className="mb-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {items.map((item, index) => {
                  const IconComponent =
                    defaultIcons[index % defaultIcons.length];

                  return (
                    <div
                      key={index}
                      className="p-3.5 rounded-xl bg-gray-50/80 border border-gray-200/80 hover:border-blue-400 hover:bg-blue-50/40 hover:shadow-xs transition-all duration-200 group flex flex-col justify-start"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="w-7 h-7 rounded-lg bg-blue-100/70 border border-blue-200/60 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-600">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h3 className="text-md font-semibold font-poppins text-[#08080C] leading-snug">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 font-poppins leading-relaxed pl-9.5">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            {/* {ctaText && (
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-poppins font-semibold text-sm shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 transition-all duration-300 group"
                >
                  <span>{ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            )} */}
          </motion.div> 
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative w-full rounded-2xl bg-white border border-gray-200/90 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.12)] overflow-hidden group">
              {/* Browser Chrome Header */}
              <div className="px-4 py-3 bg-gray-50/90 border-b border-gray-200/80 flex items-center justify-between gap-3">
                {/* Window Action Dots */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/90 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90 inline-block" />
                </div>

                {/* URL Address Bar */}
                <div className="flex-1 max-w-xs mx-auto flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200/70 text-[11px] font-poppins text-gray-500 shadow-xs truncate">
                  <Lock className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">{browserUrl}</span>
                </div>

                {/* Status Indicator */}
                <div className="flex-shrink-0 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-[10px] font-poppins font-medium text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="hidden md:inline">{statusText}</span>
                </div>
              </div>

              {/* Viewport & Screenshot */}
              <div className="relative h-[320px] md:h-[420px] lg:h-[700px] w-full overflow-hidden bg-gray-100">
                <Image
                  src={displayImage}
                  alt={imageAlt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-gray-950/40 via-gray-950/10 to-transparent pointer-events-none" />
              </div>

              {/* Floating Conversion Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 md:left-5 md:right-5 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-gray-200/90 shadow-lg shadow-gray-900/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider font-poppins text-blue-600">
                      {badgeSubtitle}
                    </div>
                    <div className="text-xs font-bold font-poppins text-[#08080C]">
                      {badgeTitle}
                    </div>
                  </div>
                </div>

                <div className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-poppins font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>Iterative Growth</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}