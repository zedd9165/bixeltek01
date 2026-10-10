import React from "react";
import type { Metadata } from "next";

import {
  automateMetadata,
  automateJumpLinks,
  automateHero,
  automateOverview,
  automateCapabilities,
  automateSelectedWork,
  automateConnectedSystems,
  automatePrinciples,
  automateProcess,
  automateEngagementOptions,
  automateWhyChoose,
  automateRelatedServices,
  automateFAQs,
  automateFinalCTA,
} from "@/data/service/pillars/automate";

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

import { ServiceFAQ } from "@/components/services/common";
import ClientTrustMarquee from "@/components/Home2/ClientLogo";
import { Footer } from "@/sections/Footer";
import { Whiteheader } from "@/components/Whiteheader";
import ProofPointsBar from "@/components/Home2/ProofPointsBar";

import automateHeroImg from "@/assets/automate-hero.png";
import overviewImg from "@/assets/automation-overview.jpg";

export const metadata: Metadata = {
  title: automateMetadata.title,
  description: automateMetadata.description,
  keywords: automateMetadata.keywords,
  alternates: { canonical: automateMetadata.canonical },
  openGraph: {
    title: automateMetadata.title,
    description: automateMetadata.description,
    url: automateMetadata.canonical,
  },
};

export default function AutomatePillarPage() {
  const capabilities = automateCapabilities.map((c) => ({
    number: c.number,
    label: c.label,
    title: c.title,
    description: c.description,
    items: c.items,
    links: c.links,
    ctaText: c.ctaText,
    ctaHref: c.ctaHref,
  }));

  const processStages = automateProcess.map((stage) => ({
    number: stage.number,
    title: stage.title,
    description: stage.description,
  }));

  const engagementModels = automateEngagementOptions.map((opt) => ({
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
          {...automateHero}
          backgroundImage={automateHeroImg}
          layers={automateCapabilities.map((c) => ({ label: c.label, title: c.title }))}
        />

        <ClientTrustMarquee />

        {/* 02. Overview: The Automation Layer */}
        <PillarOverview
          id="overview"
          {...automateOverview}
          image={overviewImg}
        />

        <ProofPointsBar />

        {/* 03. Capabilities: What We Automate */}
        <PillarCapabilities
          id="capabilities"
          eyebrow="WHAT WE AUTOMATE"
          h2="Eight Areas Where We Connect Systems & Remove Friction"
          intro="Explore each automation area to see how we connect platforms, eliminate manual handoffs, and keep business workflows moving reliably."
          capabilities={capabilities}
        />

        {/* 04. Connected Systems: The Systems We Connect */}
        <PillarConnected
          id="connected-systems"
          eyebrow={automateConnectedSystems.eyebrow}
          h2={automateConnectedSystems.h2}
          intro={automateConnectedSystems.intro}
          points={automateConnectedSystems.points}
          centerLabel="Business Engine"
          centerSub="Connected Systems"
        />

        {/* 05. Process: How We Build Automation */}
        <PillarProcess
          id="process"
          eyebrow="HOW WE BUILD AUTOMATION"
          h2="A Disciplined Process for Designing Reliable Workflows"
          intro="We document current operations and identify exception cases before connecting systems, ensuring every workflow remains dependable in production."
          stages={processStages}
        />
        {/* 07. Ways to Work Together */}
        <PillarEngagement
          id="engagement"
          eyebrow="WAYS TO WORK TOGETHER"
          h2="Choose the Engagement Model That Fits Your Automation Goals"
          intro="From fixing a single broken workflow to orchestrating cross-platform integrations and designing full operational roadmaps."
          models={engagementModels}
        />

        {/* 08. Why Bixeltek */}
        <PillarWhy
          id="why-bixeltek"
          eyebrow="WHY BIXELTEK"
          h2="Why Businesses Trust Us to Connect Their Systems"
          intro="We approach automation from business reality, ensuring workflows are maintainable, customer-friendly, and built for edge cases."
          points={automateWhyChoose}
        />

        {/* 09. Related Build & Grow Services */}
        <PillarRelated
          id="related"
          eyebrow="THE WIDER ECOSYSTEM"
          h2="Where Automation Connects to Build & Grow"
          items={automateRelatedServices}
        />

        {/* 10. FAQs */}
        <ServiceFAQ
          id="faqs"
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          h2="Questions About Business Automation & Workflows"
          faqs={automateFAQs}
        />

        {/* 11. Final CTA */}
        <PillarFinalCTA id="automation-project" {...automateFinalCTA} />

        <Footer />
      </main>
    </PillarModalProvider>
  );
}

