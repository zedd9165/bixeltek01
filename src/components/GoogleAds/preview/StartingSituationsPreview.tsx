"use client";

import React from "react";
import ServiceStartingSituations, {
  type StartingSituationsData,
} from "@/components/services/common/ServiceStartingSituations";
import { startingSituationsPreviewData } from "@/data/googleAdsPreviewData";

export default function StartingSituationsPreview({
  data = startingSituationsPreviewData,
  id,
}: {
  data?: StartingSituationsData;
  id?: string;
}) {
  return <ServiceStartingSituations id={id} data={data} />;
}
