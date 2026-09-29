"use client";

import React, { useState } from "react";
import { Footer } from "@/sections/Footer";

import HeroGrowthSystem from "./HeroGrowthSystem";
import GrowthJourney from "./GrowthJourney";
import ServicesEditorial from "./ServicesEditorial";
import ClientTrustMarquee from "./ClientLogo";
import FeaturedCaseStudy from "./FeaturedCaseStudy";
import TestimonialsEditorial from "./TestimonialsEditorial";
import IndustrySelector from "./IndustrySelector";
import ProcessTimeline from "./ProcessTimeline";
import TechnologiesEcosystem from "./TechnologiesEcosystem";
import GrowthAudit from "./GrowthAudit";
import FAQAccordion from "./FAQAccordion";
import FinalCTA from "./FinalCTA";
import GrowthAuditModal from "./GrowthAuditModal";

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
      {/* Main Homepage Flow */}
      <main id="main-content" className="relative w-full">
        {/* 1. Hero */}
        <HeroGrowthSystem onOpenAudit={handleOpenAudit} />
        <ClientTrustMarquee />
        {/* 2. Who We Are */}
        <GrowthJourney />

        {/* 3. Our Expertise */}
        <ServicesEditorial />

        {/* 4. Selected Work: Client Logo Wall, Featured Case Study, Testimonials */}
        <FeaturedCaseStudy />
        <TestimonialsEditorial />

        {/* 5. Who We Work With */}
        <IndustrySelector />

        {/* 6. How We Work */}
        <ProcessTimeline />

        {/* 7. Technology */}
        <TechnologiesEcosystem />

        {/* 8. Initial Assessment */}
        <GrowthAudit onOpenAudit={handleOpenAudit} />

        {/* 9. FAQ */}
        <FAQAccordion />

        {/* 10. Final CTA */}
        <FinalCTA onOpenAudit={handleOpenAudit} />
      </main>

      {/* Existing Bixeltek Footer */}
      <Footer />

      {/* Interactive Growth Audit Modal */}
      <GrowthAuditModal isOpen={isAuditModalOpen} onClose={handleCloseAudit} />
    </div>
  );
};

