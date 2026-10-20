import type { Metadata } from 'next';
import React from 'react';
import ScorpionArabiaCaseStudy from '@/components/CasestudyMain/ScorpionArabia';
import sacHeroImg from '@/assets/sac-casestudy.png';

const canonicalUrl = 'https://bixeltek.com/case-studies/scorpion-arabia-enterprise-website-case-study';

export const metadata: Metadata = {
  title: 'Enterprise WordPress Website Case Study | Scorpion Arabia',
  description:
    'How Bixeltek built an enterprise WordPress website for Scorpion Arabia, clarified its specialist infrastructure services and improved the path from service discovery to project enquiries.',
  keywords: [
    'enterprise WordPress website Saudi Arabia',
    'WordPress website development Saudi Arabia',
    'industrial website development Saudi Arabia',
    'B2B website design Saudi Arabia',
    'contracting company website development',
    'infrastructure company website',
    'conversion rate optimization B2B website',
    'lead generation website Saudi Arabia',
    'Scorpion Arabia website case study',
    'Bixeltek case study',
  ],
  openGraph: {
    title: 'Building an Enterprise WordPress Website for Scorpion Arabia | Bixeltek',
    description:
      'A WordPress website project focused on specialist service architecture, project credibility and clearer conversion paths for a Saudi Arabia-based infrastructure contractor.',
    type: 'article',
    url: canonicalUrl,
    images: [
      {
        url: 'https://bixeltek.com/BIXELTEKLOGO.png',
        width: 1200,
        height: 630,
        alt: 'Scorpion Arabia Enterprise WordPress Website Case Study | Bixeltek',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise WordPress Website Case Study | Scorpion Arabia',
    description:
      'How Bixeltek built a clearer, conversion-focused WordPress website for Scorpion Arabia’s specialist infrastructure services.',
    images: ['https://bixeltek.com/BIXELTEKLOGO.png'],
  },
  alternates: {
    canonical: canonicalUrl,
  },
};

export default function ScorpionArabiaEnterpriseWordPressWebsiteCaseStudyPage() {
  return (
    <>
      <section
        className="relative mx-auto flex min-h-[70vh] w-full items-center bg-[#111827] bg-cover bg-center md:min-h-[85vh]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5, 7, 15, 0.90) 0%, rgba(5, 7, 15, 0.72) 52%, rgba(5, 7, 15, 0.42) 100%), url(${sacHeroImg.src})`,
        }}
      >
        <div className="relative z-10 flex h-full w-full flex-col items-start justify-center px-5 py-20 md:max-w-[78%] md:pl-20 md:pr-0">
          <p className="mb-5 text-left text-sm font-semibold uppercase tracking-widest text-white font-poppins">
            Case Study · Enterprise WordPress Website & CRO
          </p>
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl font-sofiasanscondensed">
            Building an Enterprise Website That Turns Infrastructure Expertise into Project Enquiries
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed tracking-wide text-white/90 md:text-xl font-poppins">
            How Bixeltek built a WordPress website for Scorpion Arabia with clearer specialist service pages, stronger project and capability information, and conversion-focused paths to technical proposals and enquiries.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <ScorpionArabiaCaseStudy />
      </section>
    </>
  );
}
