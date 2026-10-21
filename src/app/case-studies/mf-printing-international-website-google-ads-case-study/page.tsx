import type { Metadata } from "next";
import React from "react";
import MFPrintingInternationalCaseStudy from "@/components/CasestudyMain/MFPrintingInternationalCaseStudy";
import mfPrintHeroImg from "@/assets/mf-print-casestudy.webp";

const pageUrl =
  "https://bixeltek.com/case-studies/mf-printing-international-website-google-ads-case-study";

export const metadata: Metadata = {
  title:
    "MF Printing International Case Study | Website Development & Google Ads",
  description:
    "See how we built a custom website for MF Printing International and launched Google Ads, helping the business start getting customers within the first 2–3 days.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    siteName: "Bixeltek",
    title:
      "From No Online Presence to Getting Customers Through Google Ads | MF Printing International",
    description:
      "Discover how we helped MF Printing International establish its online presence with a custom website and Google Ads campaigns that began bringing in customers within days.",
    images: [
      {
        url: "https://bixeltek.com/BIXELTEKLOGO.png",
        width: 1200,
        height: 630,
        alt: "MF Printing International Website and Google Ads Case Study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MF Printing International Case Study | Bixeltek",
    description:
      "A custom website and Google Ads helped MF Printing International establish an online presence and start getting customers within the first 2–3 days.",
    images: ["https://bixeltek.com/BIXELTEKLOGO.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MFPrintingInternationalCaseStudyPage() {
  return (
    <>
      <section
        className="relative mx-auto flex min-h-[70vh] w-full items-center bg-[#111827] bg-cover bg-center md:min-h-[85vh]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5, 7, 15, 0.90) 0%, rgba(5, 7, 15, 0.72) 52%, rgba(5, 7, 15, 0.42) 100%), url(${mfPrintHeroImg.src})`,
        }}
      >
        <div className="relative z-10 flex h-full w-full flex-col items-start justify-center px-5 py-20 md:max-w-[78%] md:pl-20 md:pr-0">
          <p className="mb-5 text-left font-poppins text-sm font-semibold uppercase tracking-widest text-white">
            Case Study · Website Development &amp; Google Ads
          </p>

          <h1 className="font-sofiasanscondensed text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl max-w-5xl">
            From No Online Presence to Getting Customers Through Google Ads
          </h1>

          <p className="mt-5 max-w-3xl font-poppins text-base leading-relaxed tracking-wide text-white/90 md:text-xl">
            We built a custom website for MF Printing International and launched Google Ads to help the business reach customers online. Within the first two to three days of the campaign launch, the business had started getting customers through Google Ads.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <MFPrintingInternationalCaseStudy />
      </section>
    </>
  );
}
