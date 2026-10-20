"use client";

import React, { useState } from "react";
import BookingRegionModal from "@/components/Home2/BookingRegionModal";
import { MicrosoftBooking } from "@/components/DentalMarketing/Variant_C/Microsoft_Booking";

// Generic Reusable Service Components
import {
  ServiceHero,
  ServiceOverviewSection,
  ServiceProblemSection,
  ServiceScopeSection,
  ServiceContentPanels,
  ServiceUseCaseSection,
  ServiceProcess,
  ServiceWhyChooseUs,
  ServiceRelatedServices,
  ServiceFAQ,
  ServiceFinalCTA,
} from "@/components/services/common";

import type { TechStackItem } from "@/components/services/common/ServiceFinalCTA";

// Global Layout & Trust Shell Components
import { Header } from "@/sections/Header";
import ClientTrustMarquee from "@/components/Home2/ClientLogo";
import { Footer } from "@/sections/Footer";

interface GraphicDesignClientViewProps {
  hero: any;
  overview: any;
  problems: any[];
  scope: any[];
  decisions: any[];
  useCases: any[];
  process: any[];
  whyBixeltek: any;
  relatedServices: any[];
  faqs: any[];
  finalCta: any;
  stackTools: TechStackItem[];
  heroImg: any;
  overviewImg: any;
  decisionsImg: any;
  whyChooseImg: any;
}

export default function GraphicDesignClientView({
  hero,
  overview,
  problems,
  scope,
  decisions,
  useCases,
  process,
  whyBixeltek,
  relatedServices,
  faqs,
  finalCta,
  stackTools,
  heroImg,
  overviewImg,
  decisionsImg,
  whyChooseImg,
}: GraphicDesignClientViewProps) {
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

        {/* 02 Hero */}
        <ServiceHero
          variant="vivid"
          eyebrow={hero.eyebrow}
          h1={hero.h1}
          p1={hero.p1}
          p2={hero.p2}
          primaryButtonText={hero.primaryButtonText}
          primaryButtonHref={hero.primaryButtonHref}
          microcopy={hero.microcopy}
          visualTagSubtitle="Brand Assets · Marketing Creative"
          visualTagTitle="Identity · Print · Digital"
          visualBadgeText="Production-Ready Design"
          visualImage={heroImg}
        />

        {/* 03 Client Trust Marquee */}
        <ClientTrustMarquee />

        {/* 04 Overview / Purpose-Led Design */}
        <ServiceOverviewSection
          id="graphic-design-overview"
          eyebrow={overview.eyebrow}
          h2={overview.h2}
          intro={overview.intro}
          body={overview.body}
          points={overview.points}
          closingCopy={overview.closingCopy}
          imageSrc={overviewImg}
          imageAlt="Purpose-built graphic design and cohesive visual brand systems"
          direction="left"
        />

        {/* 05 Problems / Recognized Friction */}
        <ServiceProblemSection
          id="graphic-design-problems"
          eyebrow="COMMON DESIGN CHALLENGES"
          h2="Where Marketing Assets & Brand Visuals Break Down"
          intro="Without a clear visual system and production-ready handoff, marketing teams face visual drift, unreadable ad variations, and files that fail on print."
          cards={problems}
          gridCols={3}
        />

        {/* 07 Scope / Deliverable Families with Dynamic Booking Calendar CTA */}
        <ServiceScopeSection
          id="graphic-design-scope"
          eyebrow="GRAPHIC DESIGN SCOPE"
          h2="Comprehensive Design Work Across Digital, Sales & Print"
          intro="We design purposeful assets structured around where each file will live, ensuring brand consistency across web, social, packaging, and sales collateral."
          cards={scope}
          scopeNote="Every engagement is scoped around your target touchpoints, supplied copy, image rights, and printer or vendor specifications."
          ctaText="Book a 1-on-1 Consultation"
          ctaVariant="purple"
          onCtaClick={handleOpenBooking}
        />

        {/* 08 Key Architectural & Design Decisions */}
        <ServiceContentPanels
          id="graphic-design-decisions"
          eyebrow="DESIGN & PRODUCTION DECISIONS"
          h2="Key Choices to Resolve Before Layout Begins"
          intro="A durable visual design requires early choices around identity equity, bespoke vs template formats, digital vs print requirements, and campaign variation depth."
          panels={decisions.map((item: any) => ({
            title: item.title,
            description: `${item.context} ${item.consideration}`,
          }))}
          image={decisionsImg}
          imageAlt="Evaluating design hierarchy, campaign adaptations, and production specifications"
          direction="right"
          supportingNote="We resolve these questions during discovery so that artwork production proceeds with clear creative and technical boundaries."
          supportingLink={{
            text: "Get in Touch",
            destination: "#final-cta",
          }}
        />

        {/* 09 Practical Use Cases */}
        <ServiceUseCaseSection
          id="graphic-design-use-cases"
          eyebrow="GRAPHIC DESIGN USE CASES"
          h2="Design Tailored to Real Business Situations"
          intro="From new brand launches and campaign creative variations to product packaging and B2B sales decks, design delivers value when it solves a specific communication problem."
          cards={useCases.map((uc: any) => ({
            title: uc.title,
            description: `${uc.situation} ${uc.designApproach}`,
            examples: uc.deliverables,
          }))}
          badgeLabel="Design Scenario"
          examplesTitle="Deliverables"
        />

        {/* 10 How We Work (Delivery Process) */}
        <ServiceProcess
          id="graphic-design-process"
          eyebrow="OUR DESIGN PROCESS"
          h2="A Methodical, Destination-Led Approach to Graphic Design"
          intro="From brief definition and brand asset review to concept direction, master design, adaptation, and production-ready handoff."
          stages={process.map((p: any) => ({
            stageNumber: p.number,
            title: p.title,
            description: `${p.description} Deliverable: ${p.deliverable}`,
          }))}
          supportingParagraph="We test readability, message hierarchy, and brand consistency across target formats before preparing final production artwork."
        />

        {/* 13 Why Bixeltek */}
        <ServiceWhyChooseUs
          id="why-bixeltek"
          data={{
            eyebrow: whyBixeltek.eyebrow,
            h2: whyBixeltek.h2,
            intro: whyBixeltek.intro,
            points: whyBixeltek.points,
            closingCopy: whyBixeltek.closingCopy,
          }}
          defaultImage={whyChooseImg}
          direction="left"
        />

        {/* 15 Related Services */}
        <ServiceRelatedServices
          id="related-services"
          eyebrow="RELATED SERVICES"
          h2="Connected Creative & Digital Capabilities"
          intro="Graphic design works hand-in-hand with web design, ecommerce development, search advertising, and conversion tracking."
          cards={relatedServices}
        />

        {/* 16 Frequently Asked Questions */}
        <ServiceFAQ
          id="faqs"
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          h2="Common Questions About Graphic Design"
          faqs={faqs}
        />

        {/* 17 Final CTA & Lead Form */}
        <ServiceFinalCTA
          id="final-cta"
          eyebrow={finalCta.eyebrow}
          h2={finalCta.h2}
          intro={finalCta.description}
          supportingCopy={finalCta.supportingCopy}
          sectionSubtitle="Creative Engineering & Graphic Design Stack"
          tools={stackTools}
        />

        {/* 18 Global Footer */}
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

