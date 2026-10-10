"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import storeJourneyImg from "@/assets/Flowers Shop Ecommerce Website.png";

export interface ContentPanelItem {
  title: string;
  description: string;
}

export interface ServiceContentPanelsProps {
  id?: string;
  eyebrow: string;
  h2: string;
  intro: string;
  panels: ContentPanelItem[];
  image?: StaticImageData | string;
  imageAlt?: string;
  direction?: "left" | "right";
  supportingLink?: {
    text: string;
    destination: string;
  };
  supportingNote?: string;
}

export default function ServiceContentPanels({
  id = "experience",
  eyebrow,
  h2,
  intro,
  panels,
  image,
  imageAlt,
  direction = "left",
  supportingLink,
  supportingNote,
}: ServiceContentPanelsProps) {
  const displayImage = image || storeJourneyImg;
  const isImageLeft = direction === "left";

  return (
    <section
      id={id}
      className="scroll-mt-24 py-20 md:py-28 bg-[#08080C] text-white relative border-t border-gray-800/80 overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#670EF7]/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header: title and intro */}
        <div className="flex flex-col gap-3 mb-12 lg:mb-16 max-w-6xl mx-auto text-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>{eyebrow}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-white tracking-tight leading-[1.15]">
              {h2}
            </h2>
          </div>
          <div>
            <p className="text-base md:text-lg text-gray-300 font-poppins leading-relaxed max-w-5xl mx-auto">
              {intro}
            </p>
          </div>
        </div>

        {/* Visual + journey steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Storefront / Preview Image shown in browser mockup frame */}
          <div
            className={`lg:col-span-6 lg:sticky lg:top-28 ${
              isImageLeft ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/90 shadow-2xl shadow-black/80">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0D0E12] border-b border-gray-800">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <Image
                src={displayImage}
                alt={imageAlt || "Customer journey preview"}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="w-full h-[320px] md:h-[500px] block object-cover"
                {...(typeof displayImage === "object" ? { placeholder: "blur" } : {})}
              />
            </div>
          </div>

          {/* Steps as an open list */}
          <div
            className={`lg:col-span-6 ${
              isImageLeft ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <ol className="divide-y divide-gray-800 border-y border-gray-800">
              {panels.map((panel, idx) => (
                <li key={idx} className="py-7 flex items-start gap-5 group">
                  <span className="w-10 h-10 rounded-full bg-blue-950/60 border border-blue-500/30 flex items-center justify-center font-poppins font-bold text-sm text-blue-400 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-xl font-bold font-inter text-white group-hover:text-blue-400 transition-colors">
                      {panel.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 font-poppins leading-relaxed">
                      {panel.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {supportingLink && (
              <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <p className="text-sm text-gray-400 font-poppins max-w-md">
                  {supportingNote ||
                    "Designed to connect customer intent to seamless checkout."}
                </p>
                <Link
                  href={supportingLink.destination}
                  className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 font-poppins transition-colors group flex-shrink-0"
                >
                  <span>{supportingLink.text}</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}