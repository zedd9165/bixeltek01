import type { Metadata } from 'next';
import React from 'react';
import PromenadeDentalCaseStudy from '@/components/CasestudyMain/PromenadeDental';
import promenadeHeroImg from '@/assets/promenade-casestudy.png';

const canonicalUrl = 'https://bixeltek.com/case-studies/promenade-dental-website-rebuild-case-study';

export const metadata: Metadata = {
  title: 'Promenade Dental Website Rebuild Case Study | Bixeltek',
  description:
    'How Bixeltek rebuilt Promenade Dental’s website with Next.js, Tailwind CSS, scalable service pages and CRO-focused patient journeys.',
  keywords: [
    'dental website rebuild case study',
    'dental website development',
    'dental website design',
    'dental practice website rebuild',
    'Next.js dental website',
    'Tailwind CSS website development',
    'dental website CRO',
    'dental website development USA',
    'dental website development Canada',
    'Promenade Dental website rebuild',
    'Bixeltek case study',
  ],
  openGraph: {
    title: 'Rebuilding Promenade Dental’s Website for a Better Patient Journey | Bixeltek',
    description:
      'A dental website rebuild using Next.js, Tailwind CSS, scalable service-page patterns and conversion-focused improvements.',
    type: 'article',
    url: canonicalUrl,
    images: [
      {
        url: 'https://bixeltek.com/BIXELTEKLOGO.png',
        width: 1200,
        height: 630,
        alt: 'Promenade Dental Website Rebuild Case Study — Bixeltek',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promenade Dental Website Rebuild Case Study | Bixeltek',
    description:
      'How Bixeltek rebuilt a dental practice website with Next.js, Tailwind CSS, scalable service pages and CRO principles.',
    images: ['https://bixeltek.com/BIXELTEKLOGO.png'],
  },
  alternates: {
    canonical: canonicalUrl,
  },
};

export default function PromenadeDentalWebsiteRebuildCaseStudyPage() {
  return (
    <>
      <section
        className="relative mx-auto flex min-h-[70vh] w-full items-center bg-[#111827] bg-cover bg-center md:min-h-[85vh]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5, 7, 15, 0.90) 0%, rgba(5, 7, 15, 0.72) 52%, rgba(5, 7, 15, 0.42) 100%), url(${promenadeHeroImg.src})`,
        }}
      >
        <div className="relative z-10 flex h-full w-full flex-col items-start justify-center px-5 py-20 md:max-w-[78%] md:pl-20 md:pr-0">
          <p className="mb-5 text-left text-sm font-semibold uppercase tracking-widest text-white font-poppins">
            Case Study · Dental Website Rebuild & CRO
          </p>
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl font-sofiasanscondensed">
            Rebuilding Promenade Dental’s Website for a Better Patient Journey
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed tracking-wide text-white/90 md:text-xl font-poppins">
            How Bixeltek moved Promenade Dental to a modern Next.js and Tailwind CSS foundation, created a scalable service-page system, and applied conversion-focused thinking to help patients find care and take the next step.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <PromenadeDentalCaseStudy />
      </section>
    </>
  );
}
