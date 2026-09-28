"use client";

import React, { useState } from "react";
// import { Header } from "@/components/navbar/Header";
import { Footer } from "@/sections/Footer";

import HeroGrowthSystem from "./HeroGrowthSystem";
import ProofStrip from "./ProofStrip";
import GrowthJourney from "./GrowthJourney";
import ServicesEditorial from "./ServicesEditorial";
import ResultsWall from "./ResultsWall";
import FeaturedCaseStudy from "./FeaturedCaseStudy";
import IndustrySelector from "./IndustrySelector";
import WhyBixeltek from "./WhyBixeltek";
import ProcessTimeline from "./ProcessTimeline";
import TestimonialsEditorial from "./TestimonialsEditorial";
import GrowthAudit from "./GrowthAudit";
import FAQAccordion from "./FAQAccordion";
import FinalCTA from "./FinalCTA";
import { FooterCTA } from "./FooterCTA";
import GrowthAuditModal from "./GrowthAuditModal";
import TechnologiesEcosystem from "./TechnologiesEcosystem";
import ClientTrustMarquee from "./ClientLogo";
import TechnologyPartners from "./TechnologyPartners";

export const Home2View: React.FC = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const handleOpenAudit = () => {
    setIsAuditModalOpen(true);
  };

  const handleCloseAudit = () => {
    setIsAuditModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#070709] text-white selection:bg-[#670ef7] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Existing NEW Bixeltek Navbar */}
      {/* <Header /> */}

      {/* Main Homepage Flow (Sections 8 - 33) */}
      <main id="main-content" className="relative w-full">
        {/* Sections 8 & 9: Hero with Growth System Visual */}
        <HeroGrowthSystem onOpenAudit={handleOpenAudit} />

        {/* Section 10: Proof Strip */}
        <ProofStrip />

        {/* Sections 11 & 12: Problem & Growth Journey (01 to 04) */}
        <GrowthJourney />

        {/* Sections 13 & 14: Services Editorial */}
        <ServicesEditorial />

        {/* Sections 15 & 16: Results Wall */}
        <ResultsWall />
        <ClientTrustMarquee/>
        {/* Sections 17 & 18: Featured Case Study (TumbleWash) */}
        <FeaturedCaseStudy />

        {/* Sections 19 & 20: Industry Selector */}
        <IndustrySelector />

        {/* Sections 21, 22, 23: Why Bixeltek & Core Principles */}
        <WhyBixeltek />


        {/* Sections 24 & 25: Process Timeline */}
        <ProcessTimeline />

        {/* Sections 26 & 27: Editorial Testimonials */}
        <TestimonialsEditorial />

        <TechnologyPartners/>

        {/* Sections 28 & 29: Free Digital Growth Audit Console */}
        <GrowthAudit onOpenAudit={handleOpenAudit} />

        <TechnologiesEcosystem/>

        {/* Section 30: FAQ Accordion */}
        <FAQAccordion />

        {/* Sections 31 & 32: Final CTA (Closing Growth System Loop) */}
        <FinalCTA onOpenAudit={handleOpenAudit} />
      </main>

      {/* Existing Bixeltek Footer */}
      <Footer />

      {/* Interactive Growth Audit Modal */}
      <GrowthAuditModal isOpen={isAuditModalOpen} onClose={handleCloseAudit} />
    </div>
  );
};
