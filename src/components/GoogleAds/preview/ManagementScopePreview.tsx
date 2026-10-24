"use client";

import React from "react";
import ServiceScopeSection from "@/components/services/common/ServiceScopeSection";
import { useBookingModal } from "@/components/Common/BookingModalContext";
import { managementScopePreviewData } from "@/data/googleAdsPreviewData";

export default function ManagementScopePreview() {
  const { openBooking } = useBookingModal();

  return (
    <ServiceScopeSection
      id="included"
      eyebrow={managementScopePreviewData.eyebrow}
      h2={managementScopePreviewData.h2}
      intro={managementScopePreviewData.intro}
      cards={managementScopePreviewData.cards}
      scopeNote={managementScopePreviewData.scopeNote}
      ctaText="Schedule One On One Consultation"
      onCtaClick={openBooking}
    />
  );
}
