import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { showcaseContent } from "@/data/service/webdesing";

import img1 from "@/assets/rootedtreeservices.com_(hd screenshot).png";
import img2 from "@/assets/cloudupskill-full.png";
import img3 from "@/assets/omacomputers.com_home_(hd screenshot).png";
import img6 from "@/assets/innovwayz-full.png";
import img5 from "@/assets/revita-full.png";
import img4 from "@/assets/promenade-full.png";
import img7 from "@/assets/binhindi-full.png";
import img8 from "@/assets/pawgo-full.png";

const images = [
  { src: img4, name: "Promenade", url: "https://www.promenadedds.com/" },
  { src: img6, name: "Innovwayz", url: "https://innovwayz.com" },
  { src: img5, name: "Revita", url: "https://revitadentistry.ca/" },
  { src: img1, name: "Rooted Tree Services", url: "https://rootedtreeservices.com/" },
  { src: img2, name: "Cloud Upskill", url: "https://cloudupskills.com/" },
  { src: img3, name: "OMA Computers", url: "https://omacomputers.com/" },
  { src: img8, name: "Pawgo", url: "https://pawgo.com/" },
  { src: img7, name: "Binhindi", url: "https://www.binhindilaw.sa/en" },
];

export default function WebDesignShowcaseSection() {
  return (
    <section className="mx-auto w-full py-5 md:py-20 min-h-screen relative bg-white text-[#08080C] gap-5 flex flex-col items-center justify-center overflow-hidden">
      {/* Cheap radial gradient instead of a 500px element with blur-[190px] (that blur is costly to paint) */}
      <div
        className="absolute top-32 -left-20 w-[600px] h-[600px] pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(219,234,254,0.9) 0%, rgba(219,234,254,0) 70%)",
        }}
      />

      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
        <span>Websites We Build</span>
      </div>

      <h2 className="text-center text-4xl md:text-6xl font-bold font-inter mx-auto text-[#08080C]">
        <span className="text-purple-500">{showcaseContent.headingHighlight}</span>
        {showcaseContent.headingPart2}
      </h2>

      <p className="text-base md:text-lg max-w-[95%] md:max-w-5xl mx-auto text-center font-poppins text-gray-700">
        {showcaseContent.intro1}
      </p>

      <p className="text-base md:text-lg max-w-[95%] md:max-w-5xl mx-auto text-center font-poppins text-gray-700">
        {showcaseContent.intro2}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[90%] pt-6">
        {images.map((item, i) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-white border border-gray-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.4)] hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-[600px] cursor-pointer"
          >
            {/* Scrollable image viewport */}
            <div className="flex-1 overflow-hidden bg-gray-100 relative">
              {/*
                - next/image resizes + converts to WebP/AVIF, so the browser decodes a
                  ~600px image instead of a multi-thousand-px PNG.
                - placeholder="blur" shows an instant blurred preview (works automatically
                  with static imports), so there is never an empty/black box.
                - Pure CSS transform runs on the GPU; slow scroll on hover, quick return on leave.
              */}
              <Image
                src={item.src}
                alt={item.name}
                placeholder="blur"
                quality={75}
                sizes="(min-width: 1024px) 22vw, (min-width: 768px) 45vw, 90vw"
                priority={i < 4}
                className="w-full h-auto object-cover will-change-transform transition-transform duration-500 ease-out group-hover:-translate-y-[80%] group-hover:duration-[7000ms] group-hover:ease-in-out"
              />

              {/* Hover indicator pill */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/95 backdrop-blur-sm text-blue-600 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-sm border border-blue-100">
                <span>Visit site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Bottom bar with site name */}
            <div className="py-4 px-5 flex items-center justify-between border-t border-gray-100 bg-white group-hover:bg-blue-50/40 transition-colors">
              <span className="tracking-wide font-inter text-[#08080C] text-lg font-semibold group-hover:text-blue-600 transition-colors">
                {item.name}
              </span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
            </div>
          </a>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center gap-4 mt-8">
        <h2 className="text-2xl font-inter font-semibold text-[#08080C] text-center">
          {showcaseContent.closingHeading}
        </h2>
        <Link href={showcaseContent.ctaHref}>
          <button className="px-7 py-3 rounded-2xl bg-blue-600 border border-blue-500 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
            {showcaseContent.ctaText}
          </button>
        </Link>
      </div>
    </section>
  );
}