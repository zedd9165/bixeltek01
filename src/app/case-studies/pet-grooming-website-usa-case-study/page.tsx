
import type { Metadata } from 'next';
import React from 'react';
import USPetGroomingCaseStudy from '@/components/CasestudyMain/USPetGroomingCaseStudy';
import petGroomingHeroImg from '@/assets/pet-grooming-case-study.jpg';

const canonicalUrl =
  'https://bixeltek.com/case-studies/pet-grooming-website-usa-case-study';

export const metadata: Metadata = {
  title: 'Pet Grooming SEO, CRO & Nuxt 4 Migration Case Study | Bixeltek',
  description:
    'Explore how we addressed SEO issues for a US pet grooming business, improved its website UX and conversion journey, built city- and state-specific pages, and migrated its website from Nuxt 2 to Nuxt 4.',
  keywords: [
    'pet grooming SEO case study',
    'pet grooming SEO USA',
    'local SEO for pet grooming businesses',
    'city-specific SEO landing pages',
    'state-specific SEO pages',
    'conversion rate optimization case study',
    'CRO for local businesses',
    'Nuxt 2 to Nuxt 4 migration',
    'Nuxt migration services',
    'website migration case study',
    'Bixeltek case study',
  ],
  openGraph: {
    title: 'Pet Grooming SEO, CRO & Nuxt 4 Migration | Bixeltek Case Study',
    description:
      'How we improved the SEO foundation, customer journey and location-page strategy of a US pet grooming website before migrating it from Nuxt 2 to Nuxt 4.',
    type: 'article',
    url: canonicalUrl,
    images: [
      {
        url: 'https://bixeltek.com/BIXELTEKLOGO.png',
        width: 1200,
        height: 630,
        alt: 'US Pet Grooming Website SEO, CRO and Nuxt Migration Case Study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Grooming SEO, CRO & Nuxt 4 Migration | Bixeltek',
    description:
      'See how we approached local SEO, shorter conversion forms, UX improvements and a Nuxt 2 to Nuxt 4 migration for a US pet grooming business.',
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
          <p className="mb-5 text-left font-poppins text-sm font-semibold uppercase tracking-widest text-white">
            Case Study · Local SEO, CRO & Nuxt Migration
          </p>

          <h1 className="font-sofiasanscondensed text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl max-w-5xl">
            Improving Local SEO and Website Conversions for a US Pet Grooming Business
          </h1>

          <p className="mt-5 max-w-3xl font-poppins text-base leading-relaxed tracking-wide text-white/90 md:text-xl">
            We addressed SEO issues on the existing website, improved the customer
            journey with a simpler enquiry form, developed city- and state-specific
            pages, and later migrated the live website from Nuxt 2 to Nuxt 4.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <USPetGroomingCaseStudy />
      </section>
    </>
  );
}
