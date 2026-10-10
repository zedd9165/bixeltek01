import React from "react";
import Image from "next/image";
import Eyebrow from "./Eyebrow";

export interface PillarOverviewProps {
  id?: string;
  eyebrow: string;
  h2: string;
  intro: string;
  paragraphs: string[];
  /** Path in /public. Without it a purple gradient panel is shown. */
  image?: any;
  imageAlt?: string;
  /** Small glass card on the photo */
  imageBadge?: { title: string; text: string };
}

/** Image on the left (sticky), story on the right. */
export default function PillarOverview({
  id = "overview",
  eyebrow,
  h2,
  intro,
  paragraphs,
  image,
  imageAlt = "",
  imageBadge,
}: PillarOverviewProps) {
  return (
    <section id={id} className="scroll-mt-32 border-t border-gray-200 bg-[#F6F7FA] py-24 md:py-32">
      <div className="mx-auto grid w-full items-start gap-14 px-4 sm:px-6 lg:max-w-[90%] lg:grid-cols-12 lg:gap-20 lg:px-8">
        {/* Image */}
        <div className="lg:col-span-5">
          <div className="relative lg:sticky lg:top-32">
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[32px] bg-[#670EF7]/15" />
            <div className="relative h-[360px] md:h-[600px] overflow-hidden rounded-[32px] border border-gray-200 bg-gradient-to-br from-[#8B45FF] via-[#670EF7] to-[#08080C]">
              {image && (
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080C]/55 via-transparent to-transparent" />
              {imageBadge && (
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/25 bg-white/15 p-5 text-white backdrop-blur-md">
                  <div className="text-base font-bold font-inter">{imageBadge.title}</div>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-100 font-poppins">
                    {imageBadge.text}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="lg:col-span-7">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-[#08080C] font-inter md:text-4xl lg:text-5xl">
            {h2}
          </h2>

          <p className="mt-8 border-l-[3px] border-[#670EF7] pl-6 text-sm md:text-xl font-medium leading-snug text-[#08080C] font-inter">
            {intro}
          </p>

          <div className="mt-10 space-y-7">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-gray-600 font-poppins md:text-lg"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}