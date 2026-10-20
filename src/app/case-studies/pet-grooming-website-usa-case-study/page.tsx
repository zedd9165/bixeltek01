import type { Metadata } from 'next';
import React from 'react';
import USPetGroomingCaseStudy from '@/components/CasestudyMain/USPetGroomingCaseStudy';
import petGroomingHeroImg from '@/assets/pet-grooming-case-study.jpg';

const canonicalUrl = 'https://bixeltek.com/case-studies/pet-grooming-website-usa-case-study';

export const metadata: Metadata = {
  title: 'Pet Grooming SEO & Nuxt 4 Migration Case Study | Bixeltek',
  description:
    'How Bixeltek improved local search visibility for a US pet grooming business with city-specific pages and CRO, then migrated its website from Nuxt 2 to Nuxt 4.',
  keywords: [
    'pet grooming SEO case study',
    'pet grooming SEO USA',
    'local SEO for pet grooming businesses',
    'pet grooming city landing pages',
    'Nuxt 2 to Nuxt 4 migration',
    'Nuxt migration services',
    'website migration case study',
    'conversion rate optimization',
    'CRO for local businesses',
    'Bixeltek case study',
  ],
  openGraph: {
    title: 'Local SEO and Nuxt 4 Migration for a US Pet Grooming Business | Bixeltek',
    description:
      'A case study in city-specific local SEO, CRO, reusable page components and migrating a live website from Nuxt 2 to Nuxt 4.',
    type: 'article',
    url: canonicalUrl,
    images: [
      {
        url: 'https://bixeltek.com/BIXELTEKLOGO.png',
        width: 1200,
        height: 630,
        alt: 'US Pet Grooming Local SEO and Nuxt Migration Case Study — Bixeltek',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Grooming SEO & Nuxt 4 Migration Case Study | Bixeltek',
    description:
      'How local SEO, CRO and a Nuxt 2 to Nuxt 4 migration strengthened the digital foundation of a US pet grooming business.',
    images: ['https://bixeltek.com/BIXELTEKLOGO.png'],
  },
  alternates: {
    canonical: canonicalUrl,
  },
};

export default function PetGroomingWebsiteSeoNuxtMigrationCaseStudyPage() {
  return (
    <>
      <section
        className="relative mx-auto flex min-h-[70vh] w-full items-center bg-[#111827] bg-cover bg-center md:min-h-[85vh]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5, 7, 15, 0.90) 0%, rgba(5, 7, 15, 0.72) 52%, rgba(5, 7, 15, 0.42) 100%), url(${petGroomingHeroImg.src})`,
        }}
      >
        <div className="relative z-10 flex h-full w-full flex-col items-start justify-center px-5 py-20 md:max-w-[78%] md:pl-20 md:pr-0">
          <p className="mb-5 text-left text-sm font-semibold uppercase tracking-widest text-white font-poppins">
            Case Study · Local SEO, CRO & Nuxt Migration
          </p>
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl font-sofiasanscondensed">
            From Local SEO to a Nuxt 4 Migration for a US Pet Grooming Business
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed tracking-wide text-white/90 md:text-xl font-poppins">
            How Bixeltek built city-specific landing pages, applied CRO principles and migrated a live Nuxt 2 website to Nuxt 4 while addressing hydration issues and coordinating frontend changes with the backend team.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <USPetGroomingCaseStudy />
      </section>
    </>
  );
}
