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
import BookingRegionModal from "./BookingRegionModal";
import { MicrosoftBooking } from "../DentalMarketing/Variant_C/Microsoft_Booking";
import WhyBixeltek from "./WhyBixeltek";
import Solutions from "./Solutions";
import ProofPointsBar from "./ProofPointsBar";
import { Whiteheader } from "../Whiteheader";

export const Home2View: React.FC = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeBookingUrl, setActiveBookingUrl] = useState<string | null>(null);

  const handleOpenAudit = () => {
    setIsAuditModalOpen(true);
  };

  const handleCloseAudit = () => {
    setIsAuditModalOpen(false);
  };

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
    <div className="relative min-h-screen bg-[#070709] text-white selection:bg-[#670ef7] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Main Homepage Flow */}
      <main id="main-content" className="relative w-full">
        <Whiteheader/>
        <HeroGrowthSystem 
          onOpenAudit={handleOpenAudit} 
          onOpenBooking={handleOpenBooking} 
        />
        <ClientTrustMarquee />
        <GrowthJourney />
        <Solutions />
        <ServicesEditorial />
        <ProofPointsBar />
        <FeaturedCaseStudy />
        <TestimonialsEditorial />
        <IndustrySelector />
        <WhyBixeltek />
        <TechnologiesEcosystem />
        <GrowthAudit onOpenAudit={handleOpenAudit} />
        <FAQAccordion />
        <FinalCTA onOpenAudit={handleOpenAudit} />
      </main>

      <Footer />

      {/* Interactive Growth Audit Modal */}
      <GrowthAuditModal isOpen={isAuditModalOpen} onClose={handleCloseAudit} />

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
    </div>
  );
};