"use client";

import React, { useState } from "react";
import BookingRegionModal from "@/components/Home2/BookingRegionModal";
import { MicrosoftBooking } from "@/components/DentalMarketing/Variant_C/Microsoft_Booking";
import {
  ServiceHero,
  ServiceProblemSection,
  ServiceOverviewSection,
  ServiceWhyChooseUs,
  ServiceScopeSection,
  ServiceTechnologySection,
  ServiceUseCaseSection,
  ServiceConversionJourney,
  ServiceProcess,
  ServiceStartingSituations,
  ServiceBusinessMarkets,
  ServiceRelatedServices,
  ServiceFAQ,
  ServiceFinalCTA,
} from "@/components/services/common";
import { Header } from "@/sections/Header";
import ClientTrustMarquee from "@/components/Home2/ClientLogo";
import { Footer } from "@/sections/Footer";

import type { TechStackItem } from "@/components/services/common/ServiceFinalCTA";
import type { TechnologyItem } from "@/components/services/common/ServiceTechnologySection";
import type { ScopeCardItem } from "@/components/services/common/ServiceScopeSection";

interface SeoServicesClientViewProps {
  hero: any;
  overview: any;
  problems: any;
  whyChoose: any;
  scope: ScopeCardItem[];
  technologies: TechnologyItem[];
  useCases: any[];
  conversionJourneyData: any;
  process: any[];
  startingSituationsData: any;
  businessMarketsData: any;
  relatedServices: any[];
  faqs: any[];
  finalCta: any;
  measurementTools: TechStackItem[];
  heroVisualImg: any;
  overviewVisualImg: any;
  whyChooseVisualImg: any;
}

export default function SeoServicesClientView({
  hero,
  overview,
  problems,
  whyChoose,
  scope,
  technologies,
  useCases,
  conversionJourneyData,
  process,
  startingSituationsData,
  businessMarketsData,
  relatedServices,
  faqs,
  finalCta,
  measurementTools,
  heroVisualImg,
  overviewVisualImg,
  whyChooseVisualImg,
}: SeoServicesClientViewProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeBookingUrl, setActiveBookingUrl] = useState<string | null>(null);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  const handleSelectBookingUrl = (calendarUrl: string) => {
    setIsBookingModalOpen(false);
    setActiveBookingUrl(calendarUrl);
  };

  return (
    <>
      <main className="bg-[#08080C] min-h-screen">
        {/* 01 Global Header */}
        <Header />

        {/* @ts-ignore */}
        <ServiceHero
          variant="immersive"
          eyebrow={hero.eyebrow}
          h1={hero.h1}
          p1={hero.p1}
          primaryButtonText={hero.primaryButtonText}
          primaryButtonHref={hero.primaryButtonHref}
          microcopy={hero.microcopy}
          visualImage={heroVisualImg}
        />

        {/* 03 Client Trust Marquee */}
        <ClientTrustMarquee />

        {/* 04 SEO Overview */}
        <ServiceOverviewSection
          id="seo-overview"
          eyebrow={overview.eyebrow}
          h2={overview.h2}
          intro={overview.intro}
          body={overview.body}
          closingCopy={overview.closingCopy}
          imageSrc={overviewVisualImg}
          imageAlt="SEO Strategy and organic search architecture overview"
          direction="left"
        />

        {/* 05 Problem & Challenge Section */}
        <ServiceProblemSection
          id="seo-challenges"
          eyebrow="COMMON SEO CHALLENGES"
          h2="Why Many SEO Efforts Fail to Drive Business Results"
          intro="Without clear search-intent alignment, technical accessibility, and thoughtful landing-page journeys, websites struggle to convert organic visibility into qualified customer enquiries."
          cards={problems}
          gridCols={3}
        />

        {/* 06 Why Choose Us */}
        <ServiceWhyChooseUs
          id="why-bixeltek"
          data={{
            eyebrow: whyChoose.eyebrow,
            h2: whyChoose.h2,
            intro: whyChoose.intro,
            points: whyChoose.points,
            closingCopy: whyChoose.closingCopy,
          }}
          defaultImage={whyChooseVisualImg}
          direction="right"
        />

        {/* 07 SEO Service Scope with Dynamic Booking Calendar CTA */}
        <ServiceScopeSection
          id="seo-scope"
          eyebrow="SEO SERVICE SCOPE"
          h2="Comprehensive Search Optimization Across Technical, Content & Strategic Priorities"
          intro="From technical audits and crawl diagnostics to intent-mapped content architecture, local visibility, and search analytics, our SEO deliverables address the full spectrum of organic discovery."
          cards={scope}
          scopeNote="Every SEO scope is planned around your market, current website condition, and commercial priorities—prioritizing changes that deliver consequential organic visibility."
          ctaText="Book a 1-on-1 Consultation"
          ctaVariant="purple"
          onCtaClick={handleOpenBooking}
        />

        {/* 08 Search & Diagnostic Ecosystem */}
        <ServiceTechnologySection
          id="technologies"
          eyebrow="SEARCH & DIAGNOSTIC ECOSYSTEM"
          h2="Tools & Platforms Engineered for Technical Precision & Crawl Clarity"
          intro="From crawl analysis and search console telemetry to intent mapping, server-side tracking and live ranking analytics, we deploy enterprise SEO tools to guide every optimization decision."
          technologies={technologies}
          ctaText="Need custom crawl analysis, Schema integration, or technical site migration audits?"
          ctaButtonText="Get in Touch"
          ctaHref="#final-cta"
        />

        {/* 09 Practical SEO Use Cases */}
        <ServiceUseCaseSection
          id="seo-use-cases"
          eyebrow="PRACTICAL SEO USE CASES"
          h2="How We Address Common Organic Search Scenarios"
          intro="Different business models, website structures, and growth stages face distinct organic search challenges. Here is how we evaluate and approach each situation."
          cards={useCases.map((uc: any) => ({
            title: uc.title,
            description: `${uc.situation} ${uc.approach}`,
          }))}
        />

        {/* 10 Conversion Journey */}
        <ServiceConversionJourney
          id="conversion-journey"
          data={conversionJourneyData}
          supportingText="Connecting organic search visibility with high-performing, conversion-focused landing experiences."
        />

        {/* 11 How Bixeltek Approaches SEO (Delivery Process) */}
        <ServiceProcess
          id="seo-process"
          eyebrow="OUR DELIVERY PROCESS"
          h2="A Methodical SEO Process Designed Around Real Search Opportunities"
          intro="From understanding your business context and auditing technical foundations to intent mapping, implementation, and iterative measurement, our process ensures steady organic progress."
          stages={process.map((p: any) => ({
            stageNumber: p.number,
            title: p.title,
            description: p.description,
          }))}
          supportingParagraph="We validate indexation, search performance indicators, and enquiry tracking at each stage, refining priorities based on observed results."
        />

        {/* 12 Starting Situations */}
        <ServiceStartingSituations
          id="starting-situations"
          data={startingSituationsData}
        />

        {/* 13 Business Types and Markets */}
        <ServiceBusinessMarkets
          id="business-markets"
          data={businessMarketsData}
          regionalBadgeText="Regional Capabilities"
          regionalHeading="Local & International Search Capabilities"
        />

        {/* 14 Related Services */}
        <ServiceRelatedServices
          id="related-services"
          eyebrow="RELATED SERVICES"
          h2="Connected Digital Capabilities That Complement Your SEO Strategy"
          intro="Explore connected services across technical SEO, local search visibility, on-page optimization, paid advertising, web design, and conversion rate optimization."
          cards={relatedServices}
          gridCols={3}
        />

        {/* 15 FAQs */}
        <ServiceFAQ
          id="faqs"
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          h2="Everything You Need to Know About SEO Services With Bixeltek"
          faqs={faqs}
        />

        {/* 16 Final CTA & Lead Form */}
        <ServiceFinalCTA
          id="final-cta"
          eyebrow={finalCta.eyebrow}
          h2={finalCta.h2}
          intro={finalCta.description}
          supportingCopy={finalCta.supportingCopy}
          sectionSubtitle="Search Diagnostics & Measurement Stack"
          tools={measurementTools}
        />

        {/* 17 Global Footer */}
        <Footer />
      </main>

      {/* Reusable Booking Region Selector Modal */}
      <BookingRegionModal
        open={isBookingModalOpen}
        onClose={handleCloseBooking}
        onSelectBookingUrl={handleSelectBookingUrl}
      />

      {/* Dynamic Microsoft Booking Iframe Modal */}
      <MicrosoftBooking
        showBooking={Boolean(activeBookingUrl)}
        setShowBooking={(show: boolean) => {
          if (!show) setActiveBookingUrl(null);
        }}
        bookingUrl={activeBookingUrl || undefined}
        title="Schedule a 1-on-1 Consultation"
      />
    </>
  );
}

