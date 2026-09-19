"use client";

import Link from "next/link";
import Image from "next/image";
import type { FeaturedCardData } from "@/data/navigation/types";

interface FeaturedCardProps {
  data: FeaturedCardData;
  /** pass a next/image import (StaticImageData) if you have artwork; otherwise a gradient placeholder is used */
}

export const FeaturedCard = ({ data }: FeaturedCardProps) => {
  return (
    <div className="h-full rounded-xl bg-gradient-to-br from-[#f5f0ff] to-[#eef2ff] p-5 flex flex-col justify-between">
      <div>
        {data.badge && (
          <span className="inline-block text-[10px] font-semibold tracking-wide text-[#670ef7] bg-white rounded-full px-2.5 py-1 mb-3">
            {data.badge}
          </span>
        )}
        <div className="flex items-start gap-2 mb-2">
          {data.icon && <span className="text-[#670ef7] mt-0.5">{data.icon}</span>}
          <h4 className="font-semibold text-black text-sm leading-snug">{data.title}</h4>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed">{data.desc}</p>
      </div>

      <div className="mt-4">
        {data.image ? (
          <div className="relative w-full h-24 mb-3 rounded-lg overflow-hidden">
            <Image src={data.image} alt={data.title} fill className="object-cover" />
          </div>
        ) : null}
        <Link
          href={data.ctaLink}
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#670ef7] hover:text-black transition"
        >
          {data.ctaLabel} →
        </Link>
      </div>
    </div>
  );
};