'use client';
import React from 'react';
import { IndustryPageData } from '@/types/industry';
import { DynamicHero } from './sections/DynamicHero';
import { ValueBento } from './sections/ValueBento';
import { ComparisonSection } from './sections/ComparisonSection';
import { ProcessAccordion } from './sections/ProcessAccordion';
import { MetricStats } from './sections/MetricStats';
import ClientTrustMarquee from '@/components/Home2/ClientLogo';
import { OverviewSection } from './sections/OverviewSection';
import ServiceFAQ from '@/components/services/common/ServiceFAQ';
import ServiceFinalCTA, { TechStackItem } from '@/components/services/common/ServiceFinalCTA';
import { MapPin, ShieldCheck, PhoneCall, Stethoscope } from 'lucide-react';
import { BookingModalProvider } from '@/components/Common/BookingModalContext';
import ProofPointsBar from '../Home2/ProofPointsBar';

const clinicGrowthTools: TechStackItem[] = [
  {
    name: "Local Search & Map Pack",
    category: "High-Intent Discovery",
    description: "Targeted Google Business positioning and localized medical service pages tuned to high-intent patient queries.",
    icon: <MapPin className="w-5 h-5 text-white" />,
  },
  {
    name: "Specialty Service Pages",
    category: "CRO Architecture",
    description: "Dedicated treatment funnels presenting clinical credentials, location details, and frictionless enquiry paths.",
    icon: <Stethoscope className="w-5 h-5 text-white" />,
  },
  {
    name: "Call & Enquiry Attribution",
    category: "Measurement Stack",
    description: "HIPAA-ready call and form tracking connecting marketing investment directly to verified patient consultations.",
    icon: <PhoneCall className="w-5 h-5 text-white" />,
  },
  {
    name: "Protected Patient Routing",
    category: "Privacy & PMS Sync",
    description: "Encrypted enquiry delivery straight to your front-desk reception with zero third-party data tracking.",
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
  },
];

export function IndustryPage({ data }: { data: IndustryPageData }) {
  return (
    <BookingModalProvider>
      <main className="min-h-screen bg-white dark:bg-slate-950 font-sans antialiased text-slate-900 dark:text-slate-100">
        <DynamicHero data={data.hero} />
        <ClientTrustMarquee />
        {data.overviewData && <OverviewSection data={data.overviewData} />}
        <ValueBento data={data.bentoGrid} />
        <ComparisonSection data={data.comparison} />
        <ProcessAccordion data={data.process} />
        <ProofPointsBar/>
        {data.faqs && (
          <ServiceFAQ
            id="faqs"
            eyebrow={data.faqs.badge || "FREQUENTLY ASKED QUESTIONS"}
            h2={data.faqs.headline || "Frequently Asked Questions"}
            faqs={data.faqs.items}
          />
        )}
        {data.finalCta && (
          <ServiceFinalCTA
            id="lead-form"
            eyebrow={data.finalCta.eyebrow || "FOR YOUR CLINIC"}
            h2={data.finalCta.headline}
            intro={data.finalCta.subheadline}
            sectionSubtitle={data.finalCta.sectionSubtitle || "Healthcare Acquisition & Measurement Stack"}
            tools={data.finalCta.tools && data.finalCta.tools.length > 0 ? data.finalCta.tools : clinicGrowthTools}
            supportingCopy={data.finalCta.supportingCopy}
          />
        )}
      </main>
    </BookingModalProvider>
  );
}

export const IndustryV2Page = IndustryPage;
