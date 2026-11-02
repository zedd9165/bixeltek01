import React from 'react';
import type { Metadata } from 'next';
import { BookingModalProvider } from '@/components/Common/BookingModalContext';
import { PillarHero } from '@/components/industries/PillarHero';
import ClientTrustMarquee from '@/components/Home2/ClientLogo';
import { PillarBento } from '@/components/industries/PillarBento';
import { PillarDirectory } from '@/components/industries/PillarDirectory';
import { PillarProcess } from '@/components/industries/PillarProcess';
import ProofPointsBar from '@/components/Home2/ProofPointsBar';
import ServiceFAQ from '@/components/services/common/ServiceFAQ';
import ServiceFinalCTA, { TechStackItem } from '@/components/services/common/ServiceFinalCTA';
import { Target, ShieldCheck, PhoneCall, LineChart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries We Serve | 28+ Specialized Digital Growth Solutions | Bixeltek',
  description:
    'Explore Bixeltek’s bespoke digital marketing, local SEO, and conversion infrastructure engineered across 28+ specialized industries—from healthcare and home services to B2B, technology, and retail.',
  alternates: {
    canonical: 'https://bixeltek.com/industries',
  },
  openGraph: {
    title: 'Industries We Serve | 28+ Specialized Digital Growth Solutions | Bixeltek',
    description:
      'Bespoke SEO, Google Ads, high-converting websites, and revenue attribution engineered for 28+ specialized verticals.',
    url: 'https://bixeltek.com/industries',
    siteName: 'Bixeltek',
    type: 'website',
  },
};

const pillarFaqs = [
  {
    question: 'Why should we choose an industry-specific digital strategy over a general marketing agency?',
    answer:
      'Every vertical operates on distinct buyer psychology, regulatory boundaries, and search dynamics. A local emergency plumber requires instant mobile tap-to-call response and Google LSAs, while an orthodontic clinic needs trust-building treatment guides and HIPAA-compliant intake. Generic agency retainers deploy identical templates that fail to address the specific friction points that cause prospective clients to leave.',
  },
  {
    question: 'What if our business operates in an industry not listed among the 28 verticals?',
    answer:
      'Our underlying conversion methodology—semantic search intent mapping, friction-free landing page architecture, and closed-loop revenue attribution—applies to any B2B, high-ticket local, or considered purchase business. We conduct custom competitor and search landscape audits during our initial strategy phase to engineer a bespoke pipeline for your exact niche.',
  },
  {
    question: 'How do you handle compliance and regulatory requirements across specialized verticals?',
    answer:
      'We engineer each funnel around the compliance standards of your specific sector. This includes HIPAA-ready and private intake routing for healthcare, ethical advertising disclaimers for law firms, credential verification for engineering and contracting, and WCAG 2.1 AA accessibility standards for public sector and educational organizations.',
  },
  {
    question: 'How quickly can we expect to see results after deploying an industry growth stack?',
    answer:
      'High-intent paid search and Google Local Services Ads (LSAs) typically start generating verified inquiries within the first 14 to 30 days. Local SEO, map pack rankings, and organic authority compound significantly over 60 to 90 days as domain relevance, localized service pages, and review signals solidify.',
  },
  {
    question: 'Who owns the website code, ad accounts, creative assets, and lead data?',
    answer:
      'You do. 100%. Bixeltek operates with total transparency: you retain full administrator ownership of your Google Ads accounts, Meta Business Manager, Google Analytics 4, search console properties, and website code. We never hold your digital assets hostage.',
  },
];

const growthTools: TechStackItem[] = [
  {
    name: 'Hyper-Local Search Infrastructure',
    category: 'Organic Dominance',
    description:
      'Multi-location Google Business optimization, localized service area landing pages, and structured schema markup.',
    icon: <Target className="w-5 h-5 text-white" />,
  },
  {
    name: 'Custom Funnel & Conversion UI',
    category: 'CRO Architecture',
    description:
      'Industry-specific landing pages, interactive estimate builders, and tap-to-call mobile interfaces that convert visitors into clients.',
    icon: <PhoneCall className="w-5 h-5 text-white" />,
  },
  {
    name: 'Regulatory & Compliance Stack',
    category: 'Security & Privacy',
    description:
      'Encrypted form intake, HIPAA-compliant routing, and privacy-shielded tracking that protects sensitive customer communications.',
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
  },
  {
    name: 'Closed-Loop Attribution',
    category: 'Revenue Measurement',
    description:
      'Call recording, CRM synchronization, and pipeline revenue tracking that proves exact ROI on every dollar invested.',
    icon: <LineChart className="w-5 h-5 text-white" />,
  },
];

export default function IndustriesPage() {
  return (
    <BookingModalProvider>
      <div className="bg-white dark:bg-slate-950 font-sans antialiased text-slate-900 dark:text-slate-100">
        {/* Dynamic Glassmorphism Hero */}
        <PillarHero />

        {/* Client Trust Marquee */}
        <ClientTrustMarquee />

        {/* Category-Wise Full Image Industry Cards Directory */}
        <PillarDirectory />

        {/* 4-Stage Methodology Pipeline */}
        <PillarProcess />

        {/* Proof Points Metric Bar */}
        <ProofPointsBar />

        {/* Industry FAQs */}
        <ServiceFAQ
          id="faqs"
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          h2="Common Questions About Our Industry-Specific Growth Systems"
          faqs={pillarFaqs}
        />

        {/* Closing Final CTA */}
        <ServiceFinalCTA
          id="lead-form"
          eyebrow="READY TO SCALE YOUR VERTICAL?"
          h2="Let’s Build a Custom Growth Pipeline for Your Industry"
          intro="Schedule a strategic consultation or request a free digital audit of your local market visibility, conversion funnels, and competitor ad spend."
          sectionSubtitle="Specialized Industry Acquisition & Measurement Stack"
          tools={growthTools}
          supportingCopy="No high-pressure sales pitches. We review your actual service areas, conversion bottlenecks, and unit economics to map a realistic growth strategy."
        />
      </div>
    </BookingModalProvider>
  );
}
