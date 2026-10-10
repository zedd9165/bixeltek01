import React from "react";
import type { Metadata } from "next";

import {
  buildMetadata,
  buildJumpLinks,
  buildHero,
  buildOverview,
  buildCapabilities,
  buildIntegrationSection,
  buildStartingPoints,
  buildProcess,
  buildWhyChoose,
  buildRelatedServices,
  buildFAQs,
  buildFinalCTA,
  // from data-additions.ts
  buildImages,
  buildCapabilityBestFor,
  buildStartingPointSteps,
  buildStats,
  buildEngagement,
} from "@/data/service/pillars/build";

import {
  PillarHero,
  PillarJumpNav,
  PillarOverview,
  PillarStats,
  PillarCapabilities,
  PillarConnected,
  PillarStartingPoints,
  PillarProcess,
  PillarEngagement,
  PillarWhy,
  PillarRelated,
  PillarFinalCTA,
  PillarModalProvider,
} from "@/components/pillar";

// Your existing components
import { ServiceFAQ, ServiceSelectedWork } from "@/components/services/common";
import { Header } from "@/sections/Header";
import ClientTrustMarquee from "@/components/Home2/ClientLogo";
import { Footer } from "@/sections/Footer";
import { Whiteheader } from "@/components/Whiteheader";
import ProofPointsBar from "@/components/Home2/ProofPointsBar";

export const metadata: Metadata = {
  title: buildMetadata.title,
  description: buildMetadata.description,
  keywords: buildMetadata.keywords,
  alternates: { canonical: buildMetadata.canonical },
  openGraph: {
    title: buildMetadata.title,
    description: buildMetadata.description,
    url: buildMetadata.canonical,
  },
};

export default function BuildPillarPage() {
  const capabilities = buildCapabilities.map((c, i) => ({
    ...c,
    bestFor: buildCapabilityBestFor[i],
  }));
  const startingPoints = buildStartingPoints.map((p, i) => ({
    ...p,
    nextSteps: buildStartingPointSteps[i],
  }));

  return (
    <PillarModalProvider>
      <main className="min-h-screen bg-white">
        <Whiteheader />

        {/* dark image hero, centered */}
        <PillarHero
          {...buildHero}
          backgroundImage={buildImages.heroBackground}
          layers={buildCapabilities.map((c) => ({ label: c.label, title: c.title }))}
        />
        <ClientTrustMarquee />

        {/* gray, image on the left */}
        <PillarOverview
          {...buildOverview}
          image={buildImages.overviewImage}
          imageAlt={buildImages.overviewAlt}
          imageBadge={buildImages.overviewBadge}
        />

      <ProofPointsBar />
      
        {/* white, expanding colour panels */}
        <PillarCapabilities
          capabilities={capabilities}
          intro="Open an area to see what is included and when it is the right choice."
        />

        {/* black, hub diagram */}
        <PillarConnected {...buildIntegrationSection} />

        {/* gray + black answer panel */}
        {/* <PillarStartingPoints points={startingPoints} /> */}

        {/* white */}
        <PillarProcess stages={buildProcess} />

        {/* gray */}
        <PillarEngagement {...buildEngagement} />

        {/* black, colourful bento */}
        <PillarWhy points={buildWhyChoose} />

        {/* white: your existing work section (hero links to #selected-work) */}
        {/* <ServiceSelectedWork id="selected-work" ... /> */}

        <PillarRelated items={buildRelatedServices} />

        <ServiceFAQ
          id="faqs"
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          h2="Questions About Building With Bixeltek"
          faqs={buildFAQs}
        />

        <PillarFinalCTA id="build-project" {...buildFinalCTA} />

        <Footer />
      </main>
    </PillarModalProvider>
  );
}