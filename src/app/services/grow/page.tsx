import React from "react";
import type { Metadata } from "next";

import {
  growMetadata,
  growJumpLinks,
  growHero,
  growOverview,
  growCapabilities,
  growSelectedWork,
  growJourney,
  growProcess,
  growEngagementOptions,
  growWhyChoose,
  growRelatedServices,
  growFAQs,
  growFinalCTA,
} from "@/data/service/pillars/grow";

import {
  PillarHero,
  PillarJumpNav,
  PillarOverview,
  PillarCapabilities,
  PillarConnected,
  PillarProcess,
  PillarEngagement,
  PillarWhy,
  PillarRelated,
  PillarFinalCTA,
  PillarModalProvider,
} from "@/components/pillar";

import { ServiceFAQ, ServiceSelectedWork } from "@/components/services/common";
import ClientTrustMarquee from "@/components/Home2/ClientLogo";
import { Footer } from "@/sections/Footer";
import { Whiteheader } from "@/components/Whiteheader";
import ProofPointsBar from "@/components/Home2/ProofPointsBar";

import growHeroImg from "@/assets/grow-hero.jpg";
import overviewImg from '@/assets/bixeltek-team-3.jpeg'
import dentalClinicImg from "@/assets/dental-clinic.jpg";
import bikeRepairImg from "@/assets/bike-repairing-services.jpg";
import tumblewashImg from "@/assets/tumblewash.jpg";

export const metadata: Metadata = {
  title: growMetadata.title,
  description: growMetadata.description,
  keywords: growMetadata.keywords,
  alternates: { canonical: growMetadata.canonical },
  openGraph: {
    title: growMetadata.title,
    description: growMetadata.description,
    url: growMetadata.canonical,
  },
};

const workImages = [tumblewashImg, dentalClinicImg, bikeRepairImg];

export default function GrowPillarPage() {
  const capabilities = growCapabilities.map((c) => ({
    number: c.number,
    label: c.label,
    title: c.title,
    description: c.description,
    items: c.items,
    links: c.links,
    ctaText: c.ctaText,
    ctaHref: c.ctaHref,
  }));

  const selectedWorkCards = growSelectedWork.map((study, idx) => ({
    title: study.title,
    description: study.description,
    periodLabel: study.category,
    linkText: study.ctaText,
    destination: study.href,
    metricHighlight: study.metrics
      .map((m) => `${m.value} ${m.label}`)
      .join(" · "),
    image: workImages[idx % workImages.length],
  }));

  const processStages = growProcess.map((stage) => ({
    number: stage.number,
    title: stage.title,
    description: stage.description,
  }));

  const engagementModels = growEngagementOptions.map((opt) => ({
    title: opt.title,
    description: opt.description,
    bestFor: opt.bestFor,
    includes: opt.items,
    ctaText: opt.ctaText,
    ctaHref: opt.ctaHref,
  }));

  return (
    <PillarModalProvider>
      <main className="min-h-screen bg-white">
        <Whiteheader />

        {/* 01. Hero */}
        <PillarHero
          {...growHero}
          backgroundImage={growHeroImg}
          layers={growCapabilities.map((c) => ({ label: c.label, title: c.title }))}
        />

        <ClientTrustMarquee />

        {/* 02. Overview: The Growth Layer */}
        <PillarOverview
          id="overview"
          {...growOverview}
          image={overviewImg}
        />

        <ProofPointsBar />

        {/* 03. Growth Capabilities */}
        <PillarCapabilities
          id="capabilities"
          eyebrow="GROWTH CAPABILITIES"
          h2="Five Connected Channels & Disciplines Working Together"
          intro="Explore each growth area to understand how we structure campaigns, visibility and conversion around your business goals."
          capabilities={capabilities}
        />

        {/* 05. The Growth Journey */}
        <PillarConnected
          id="growth-system"
          eyebrow={growJourney.eyebrow}
          h2={growJourney.h2}
          intro={growJourney.intro}
          points={growJourney.points}
          centerLabel="Growth Journey"
          centerSub="Demand to Revenue"
        />

        {/* 06. How We Approach Growth */}
        <PillarProcess
          id="process"
          eyebrow="HOW WE APPROACH GROWTH"
          h2="A Disciplined, Evidence-Led Path to Sustainable Performance"
          intro="We combine channel diagnostics, strategic prioritization and continuous iteration rather than running isolated campaigns."
          stages={processStages}
        />

        {/* 07. Ways to Work Together */}
        <PillarEngagement
          id="engagement"
          eyebrow="WAYS TO WORK TOGETHER"
          h2="Choose the Engagement Model That Fits Your Stage & Goals"
          intro="From targeted project scopes to ongoing performance partnerships and comprehensive growth audits."
          models={engagementModels}
        />

        {/* 08. Why Bixeltek */}
        <PillarWhy
          id="why-bixeltek"
          eyebrow="WHY BIXELTEK"
          h2="What Makes Our Growth Approach Different"
          intro="We connect demand generation with landing experiences, reliable analytics and the operational reality of your business."
          points={growWhyChoose}
        />

        {/* 09. Related Build & Automate Services */}
        <PillarRelated
          id="related"
          eyebrow="THE WIDER ECOSYSTEM"
          h2="Where Growth Connects to Build & Automate"
          items={growRelatedServices}
        />

        {/* 10. FAQs */}
        <ServiceFAQ
          id="faqs"
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          h2="Questions About Growth, Channels & Performance"
          faqs={growFAQs}
        />

        {/* 11. Final CTA */}
        <PillarFinalCTA id="growth-project" {...growFinalCTA} />

        <Footer />
      </main>
    </PillarModalProvider>
  );
}

