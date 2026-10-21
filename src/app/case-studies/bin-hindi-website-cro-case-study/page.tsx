import type { Metadata } from "next";
import React from "react";
import BinHindiCaseStudy from "@/components/CasestudyMain/BinHindiCaseStudy";
import binHindiHeroImg from "@/assets/binhindi-casestudy.png";

const pageUrl =
  "https://bixeltek.com/case-studies/bin-hindi-website-cro-case-study";

export const metadata: Metadata = {
  title: "Bin Hindi Website Redesign & CRO Case Study | Bixeltek",
  description:
    "See how we analysed Bin Hindi's website, identified UX friction and ineffective CTA placement, and rebuilt the experience with conversion rate optimization in mind.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    siteName: "Bixeltek",
    title:
      "Bin Hindi Case Study: Rebuilding a Website Around Conversion",
    description:
      "We analysed Bin Hindi's existing website and rebuilt it with a focus on user experience, navigation, CTA placement and conversion rate optimization.",
    images: [
      {
        url: "https://bixeltek.com/BIXELTEKLOGO.png",
        width: 1200,
        height: 630,
        alt: "Bin Hindi Website Redesign and CRO Case Study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bin Hindi Website Redesign & CRO Case Study | Bixeltek",
    description:
      "How we approached Bin Hindi's website rebuild by identifying UX friction and making conversion a central design consideration.",
    images: ["https://bixeltek.com/BIXELTEKLOGO.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BinHindiCaseStudyPage() {
  return (
    <>
      <section
        className="relative mx-auto flex min-h-[70vh] w-full items-center bg-[#111827] bg-cover bg-center md:min-h-[85vh]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5, 7, 15, 0.90) 0%, rgba(5, 7, 15, 0.72) 52%, rgba(5, 7, 15, 0.42) 100%), url(${binHindiHeroImg.src})`,
        }}
      >
        <div className="relative z-10 flex h-full w-full flex-col items-start justify-center px-5 py-20 md:max-w-[78%] md:pl-20 md:pr-0">
          <p className="mb-5 text-left font-poppins text-sm font-semibold uppercase tracking-widest text-white">
            Case Study · Website Redesign &amp; CRO
          </p>

          <h1 className="font-sofiasanscondensed text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl max-w-5xl">
            Turning Website Friction Into a Clearer Path to Conversion
          </h1>

          <p className="mt-5 max-w-3xl font-poppins text-base leading-relaxed tracking-wide text-white/90 md:text-xl">
            We analysed Bin Hindi&apos;s existing website, identified UX problems and ineffective call-to-action placement, and rebuilt the experience with conversion rate optimization at its core.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <BinHindiCaseStudy />
      </section>
    </>
  );
}
