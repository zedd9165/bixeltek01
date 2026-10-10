"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { CheckCircle2 } from "lucide-react";

export interface ServiceOverviewSectionProps {
  id?: string;
  eyebrow: string;
  h2: string;
  intro: string;
  body?: string | string[];
  closingCopy?: string;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  direction?: "left" | "right";
}

export default function ServiceOverviewSection({
  id = "overview",
  eyebrow,
  h2,
  intro,
  body,
  closingCopy,
  imageSrc,
  imageAlt = "Service overview image",
  direction = "right",
}: ServiceOverviewSectionProps) {
  const isImageLeft = direction === "left";

  return (
    <section
      id={id}
      className="scroll-mt-24 py-20 md:py-28 bg-white text-[#08080C] relative border-t border-gray-200"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 ${
            imageSrc ? "lg:grid-cols-2 gap-12 lg:gap-16 items-center" : ""
          }`}
        >
          {/* Text Content */}
          <div
            className={`max-w-4xl ${
              imageSrc && isImageLeft ? "lg:order-2" : "lg:order-1"
            }`}
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>{eyebrow}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-6">
              {h2}
            </h2>

            {/* Intro Paragraph */}
            <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed mb-6">
              {intro}
            </p>

            {/* Body Paragraph(s) */}
            {body && (
              <div className="space-y-4 text-base md:text-lg text-gray-600 font-poppins leading-relaxed mb-8">
                {Array.isArray(body) ? (
                  body.map((para, idx) => <p key={idx}>{para}</p>)
                ) : (
                  <p>{body}</p>
                )}
              </div>
            )}

            {/* Closing Highlight Callout */}
            {closingCopy && (
              <div className="p-6 sm:p-7 rounded-2xl bg-blue-50/60 border border-blue-200/80 flex items-start sm:items-center gap-4 text-xs sm:text-sm text-blue-950 font-poppins leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span>{closingCopy}</span>
              </div>
            )}
          </div>

          {/* Image Container */}
          {imageSrc && (
            <div
              className={`w-full ${
                isImageLeft ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}