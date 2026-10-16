"use client";

import React from "react";
import ServiceBusinessMarkets, {
  type BusinessMarketsData,
} from "@/components/services/common/ServiceBusinessMarkets";
import { businessMarketsPreviewData } from "@/data/googleAdsPreviewData";

export default function BusinessMarketsPreview({
  data = businessMarketsPreviewData,
  id,
  regionalBadgeText,
  regionalHeading = "Cross-Border Campaign Experience",
}: {
  data?: BusinessMarketsData;
  id?: string;
  regionalBadgeText?: string;
  regionalHeading?: string;
}) {
  return (
    <ServiceBusinessMarkets
      id={id}
      data={data}
      regionalBadgeText={regionalBadgeText}
      regionalHeading={regionalHeading}
    />
  );
}
