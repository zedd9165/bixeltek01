"use client";

import React from "react";
import ServiceIndustryCarousel from "@/components/services/common/ServiceIndustryCarousel";
import { webBusinessMarketsData } from "@/data/service/webdesing";

export default function WebDesignBusinessMarketsPreview() {
  return (
    <ServiceIndustryCarousel
      id="business-markets"
      eyebrow={webBusinessMarketsData.eyebrow}
      h2={webBusinessMarketsData.h2}
      intro={webBusinessMarketsData.intro}
      cards={webBusinessMarketsData.cards}
    />
  );
}
