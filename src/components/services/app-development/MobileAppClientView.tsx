"use client";

import React, { useState } from "react";
import BookingRegionModal from "@/components/Home2/BookingRegionModal";
import { MicrosoftBooking } from "@/components/DentalMarketing/Variant_C/Microsoft_Booking";

// Generic Reusable Service Components
import {
  ServiceHero,
  ServiceOverviewSection,
  ServiceScopeSection,
  ServiceContentPanels,
  ServiceProcess,
  ServiceWhyChooseUs,
  ServicePostLaunchSection,
  ServiceRelatedServices,
  ServiceFAQ,
  ServiceFinalCTA,
  ServiceUseCaseSection,
} from "@/components/services/common";

// Dedicated Supporting Components for Structured Content
import AppSystemsSection from "@/components/services/app-development/AppSystemsSection";

// Layout & Trust Components
import { Header } from "@/sections/Header";
import ClientTrustMarquee from "@/components/Home2/ClientLogo";
import { Footer } from "@/sections/Footer";
import type { TechStackItem } from "@/components/services/common/ServiceFinalCTA";

interface MobileAppClientViewProps {
  hero: any;
  overview: any;
  scope: any[];
  relatedServices: any[];
  systems: any[];
  useCases: any[];
  experienceSection: any;
  process: any[];
  whyChoose: any;
  postLaunch: any;
  faqs: any[];
  finalCta: any;
  techStack: TechStackItem[];
  heroImg: any;
  overviewImg: any;
  experienceImg: any;
}

export default function MobileAppClientView({
  hero,
  overview,
  scope,
  relatedServices,
  systems,
  useCases,
  experienceSection,
  process,
  whyChoose,
  postLaunch,
  faqs,
  finalCta,
  techStack,
  heroImg,
  overviewImg,
  experienceImg,
}: MobileAppClientViewProps) {
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

        {/* 03 Hero */}
        <ServiceHero
          eyebrow={hero.eyebrow}
          h1={hero.h1}
          p1={hero.p1}
          p2={hero.p2}
          primaryButtonText={hero.primaryButtonText}
          primaryButtonHref={hero.primaryButtonHref}
          microcopy={hero.microcopy}
          visualTagSubtitle="Mobile Engineering"
          visualTagTitle="iOS · Android · Cross-Platform"
          visualBadgeText="Production Ready"
          visualImage={heroImg}
        />

        {/* 04 Client Trust Marquee */}
        <ClientTrustMarquee />

        {/* 05 What Mobile App Development Actually Means */}
        <ServiceOverviewSection
          id="what-it-means"
          eyebrow={overview.eyebrow}
          h2={overview.h2}
          intro={overview.intro}
          body={overview.body}
          points={overview.points}
          pointsCols={2}
          closingCopy={overview.closingCopy}
          imageSrc={overviewImg}
          imageAlt="Mobile application engineering and product architecture"
          direction="left"
        />

        {/* 07 What Our App Development Work Covers with Dynamic Booking Calendar CTA */}
        <ServiceScopeSection
          id="what-we-build"
          eyebrow="WHAT OUR APP DEVELOPMENT WORK COVERS"
          h2="End-to-End Application Engineering From Discovery to Store Release"
          intro="We handle the complete product lifecycle, combining mobile product definition, user experience, application architecture, API integration and store release."
          cards={scope}
          scopeNote="Every engagement is structured around your specific product requirements, platform target, device capabilities and integration roadmap."
          ctaText="Book a 1-on-1 Consultation"
          ctaVariant="purple"
          onCtaClick={handleOpenBooking}
        />

        <ServiceRelatedServices
          id="related-services"
          eyebrow="CONNECTED CAPABILITIES"
          h2="Digital Services That Complement Your Mobile Application"
          intro="Mobile products frequently connect with websites, online stores, search visibility, paid campaigns, and analytical reporting across your digital ecosystem."
          cards={relatedServices}
        />

        {/* 10 Systems & Integrations */}
        <AppSystemsSection
          id="systems-integrations"
          eyebrow="SYSTEMS & INTEGRATIONS"
          h2="A Mobile App Must Seamlessly Connect to Your Operational Infrastructure"
          intro="Mobile development is more than front-end screens. The application relies on secure backend APIs, identity management, payment processing, push messaging, databases and third-party services to function in the real world."
          cards={systems}
          supportingNote="A mobile application does not live in isolation. Its durability and usability depend directly on how securely and efficiently it connects to your existing business workflows, databases, and operational systems."
        />

        <ServiceUseCaseSection
          id="app-types"
          eyebrow="WHAT WE BUILD / APP TYPES"
          h2="Mobile Applications Designed Around Distinct Business Contexts"
          intro="From customer-facing services and marketplace platforms to internal tools and product MVPs, we structure mobile engineering around how the application will be used in practice."
          cards={useCases}
          badgeLabel="Context"
          examplesTitle="Common Applications"
        />

        {/* 11 Mobile Experience */}
        <ServiceContentPanels
          id="mobile-experience"
          eyebrow={experienceSection.eyebrow}
          h2={experienceSection.h2}
          intro={experienceSection.intro}
          panels={experienceSection.points}
          image={experienceImg}
          imageAlt="Real-world mobile experience and performance considerations"
          supportingNote="Engineered for real mobile ergonomics: one-handed use, background transitions, offline resiliency, and responsive data flows."
          direction="right"
        />

        {/* 12 Our Process (How We Work) */}
        <ServiceProcess
          id="app-process"
          eyebrow="OUR PROCESS"
          h2="A Disciplined Development Cycle From Definition to Iterative Growth"
          intro="We structure development into transparent phases, ensuring requirements, user flows, architecture and integrations are verified before and after release."
          stages={process.map((stage: any) => ({
            stageNumber: stage.number,
            title: stage.title,
            description: stage.description,
          }))}
          supportingParagraph="Effective mobile development requires continuous alignment between product requirements, user experience, and technical implementation."
        />

        {/* 13 Why Bixeltek */}
        <ServiceWhyChooseUs
          id="why-bixeltek"
          data={whyChoose}
        />

        {/* 16 Post Launch (Beyond the First Release) */}
        <ServicePostLaunchSection
          id="post-launch"
          eyebrow={postLaunch.eyebrow}
          h2={postLaunch.h2}
          intro={postLaunch.intro}
          items={postLaunch.points}
          image={heroImg}
          ctaText="Plan My App Project"
          ctaHref="#plan-project"
          browserUrl="app.bixeltek.com/release-monitoring"
          statusText="Active Telemetry"
          badgeSubtitle="Continuous Product Evolution"
          badgeTitle="Iterative Engineering · Telemetry Ready"
        />
       
        {/* 18 FAQs */}
        <ServiceFAQ
          id="faqs"
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          h2="Frequently Asked Questions About Mobile App Development"
          faqs={faqs}
        />

        {/* 19 Final CTA & Contact Form */}
        <ServiceFinalCTA
          id="plan-project"
          eyebrow={finalCta.eyebrow}
          h2={finalCta.h2}
          intro={finalCta.description}
          sectionSubtitle="Mobile Engineering & Architecture Stack"
          tools={techStack}
        />

        {/* 20 Global Footer */}
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

