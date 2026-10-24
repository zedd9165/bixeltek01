"use client";

import React from "react";
import ServiceScopeSection from "@/components/services/common/ServiceScopeSection";
import { useBookingModal } from "@/components/Common/BookingModalContext";
import { analyticsTrackingScope } from "@/data/service/analytics-tracking";

interface AnalyticsScopeSectionProps {
  ctaText?: string;
  headerLayout?: "default" | "split" | "split-reversed";
}

export default function AnalyticsScopeSection({
  ctaText = "Book a 1-on-1 Consultation",
  headerLayout = "default",
}: AnalyticsScopeSectionProps) {
  const { openBooking } = useBookingModal();

  return (
    <ServiceScopeSection
      id={analyticsTrackingScope.id}
      eyebrow={analyticsTrackingScope.eyebrow}
      h2={analyticsTrackingScope.h2}
      intro={analyticsTrackingScope.intro}
      cards={analyticsTrackingScope.items}
      scopeNote={analyticsTrackingScope.scopeNote}
      ctaText={ctaText}
      onCtaClick={openBooking}
      headerLayout={headerLayout}
    />
  );
}

