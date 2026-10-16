"use client";

import React from "react";
import ServiceConversionJourney, {
  type ConversionJourneyData,
} from "@/components/services/common/ServiceConversionJourney";
import { conversionJourneyPreviewData } from "@/data/googleAdsPreviewData";

export default function ConversionJourneyPreview({
  data = conversionJourneyPreviewData,
  id,
  supportingText = "Connecting Google Ads traffic to performant, custom-engineered landing environments.",
}: {
  data?: ConversionJourneyData;
  id?: string;
  supportingText?: string;
}) {
  return (
    <ServiceConversionJourney
      id={id}
      data={data}
      supportingText={supportingText}
    />
  );
}
