"use client";

import React from "react";
import ServiceConversionJourney, {
  type ConversionJourneyData,
} from "@/components/services/common/ServiceConversionJourney";
import { conversionJourneyPreviewData } from "@/data/googleAdsPreviewData";
import { useBookingModal } from "@/components/Common/BookingModalContext";

export default function ConversionJourneyPreview({
  data = conversionJourneyPreviewData,
  id,
  supportingText = "Connecting Google Ads traffic to performant, custom-engineered landing environments.",
  ctaText = "Schedule One On One Consultation",
  onCtaClick,
}: {
  data?: ConversionJourneyData;
  id?: string;
  supportingText?: string;
  ctaText?: string;
  onCtaClick?: () => void;
} = {}) {
  const { openBooking } = useBookingModal();

  return (
    <ServiceConversionJourney
      id={id}
      data={data}
      supportingText={supportingText}
      ctaText={ctaText}
      onCtaClick={onCtaClick || openBooking}
    />
  );
}
