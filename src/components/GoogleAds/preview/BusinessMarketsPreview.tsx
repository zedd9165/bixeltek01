"use client";

import React from "react";
import ServiceIndustryCarousel from "@/components/services/common/ServiceIndustryCarousel";
import { businessMarketsPreviewData } from "@/data/googleAdsPreviewData";

export default function BusinessMarketsPreview({
  data = businessMarketsPreviewData,
  id = "business-markets",
}: {
  data?: any;
  id?: string;
  regionalBadgeText?: string;
  regionalHeading?: string;
}) {
  return (
    <ServiceIndustryCarousel
      id={id}
      eyebrow={data.eyebrow}
      h2={data.h2}
      intro={data.intro}
      cards={data.cards}
    />
  );
}
