"use client";

import { MegaMenuShell } from "../MegaMenuShell";
import { MegaMenuColumn } from "../MegaMenuColumn";
import { FeaturedCard } from "../FeaturedCard";
import { insightsColumns, insightsFeatured, insightsFooter } from "@/data/navigation/insights";

export const InsightsMenu = () => {
  return (
    <MegaMenuShell footer={insightsFooter}>
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-3 grid grid-cols-3 gap-6">
          {insightsColumns.map((col) => (
            <MegaMenuColumn key={col.id} column={col} />
          ))}
        </div>
        <div className="col-span-1">
          <FeaturedCard data={insightsFeatured} />
        </div>
      </div>
    </MegaMenuShell>
  );
};