import type { Metadata } from 'next';
import React from 'react';
import InnovwayzCaseStudy from '@/components/CasestudyMain/Innovwayz';
import innovwayzImg from '@/assets/innovwayz-case-study.png';

const canonicalUrl = 'https://bixeltek.com/case-studies/innovwayz-website-case-study';

export const metadata = {
  title: "Enterprise Website Rebuild in Saudi Arabia | InnovWayz Case Study",
  description:
    "How Bixeltek rebuilt InnovWayz’s enterprise website in Saudi Arabia using Next.js and Tailwind CSS, with reusable service pages, automated enquiry emails and SEO improvements that helped its PDPL page get indexed.",
  keywords: [
    "enterprise website rebuild Saudi Arabia",
    "enterprise website development Saudi Arabia",
    "corporate website development Saudi Arabia",
    "Next.js development Saudi Arabia",
    "InnovWayz website rebuild",
    "Bixeltek case study",
  ],

  openGraph: {
    title: 'Rebuilding InnovWayz for a Clearer, More Discoverable Digital Presence | Bixeltek',
    description:
      'A website rebuild combining Next.js, Tailwind CSS, reusable service-page components, Nodemailer enquiry handling and a focused PDPL indexation fix.',
    type: 'article',
    url: canonicalUrl,
    images: [
      {
        url: 'https://bixeltek.com/BIXELTEKLOGO.png',
        width: 1200,
        height: 630,
        alt: 'InnovWayz Website Revamp Case Study | Bixeltek',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InnovWayz Website Revamp Case Study | Bixeltek',
    description:
      'A Next.js rebuild with reusable service pages, enquiry email handling and improved search discoverability for InnovWayz.',
    images: ['https://bixeltek.com/BIXELTEKLOGO.png'],
  },
  alternates: {
    canonical: canonicalUrl,
  },
};

export default function InnovwayzWebsiteRevampCaseStudyPage() {
  return (
    <>
      <section
        className="relative mx-auto flex min-h-[70vh] w-full items-center bg-[#111827] bg-cover bg-center md:min-h-[85vh]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5, 7, 15, 0.90) 0%, rgba(5, 7, 15, 0.72) 52%, rgba(5, 7, 15, 0.42) 100%), url(${innovwayzImg.src})`,
        }}
      >
        <div className="relative z-10 flex h-full w-full flex-col items-start justify-center px-5 py-20 md:max-w-[78%] md:pl-20 md:pr-0">
          <p className="mb-5 text-left text-sm font-semibold uppercase tracking-widest text-white font-poppins">
            Case Study
          </p>
          <h1 className="font-sofiasanscondensed text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl max-w-5xl">
            Rebuilding InnovWayz for a Clearer, More Discoverable Digital Presence
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed tracking-wide text-white/90 md:text-xl font-poppins">
            How Bixeltek rebuilt the website with Next.js and Tailwind CSS, created reusable service pages, connected enquiry forms with Nodemailer, and resolved an indexing issue affecting the PDPL page.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <InnovwayzCaseStudy />
      </section>
    </>
  );
}
