"use client";

import { MegaMenuShell } from "../MegaMenuShell";
import { MegaMenuColumn } from "../MegaMenuColumn";
import { FeaturedCard } from "../FeaturedCard";
import { servicesColumns, servicesFeatured, servicesFooter } from "@/data/navigation/services";

export const ServicesMenu = () => {
  return (
    <MegaMenuShell footer={servicesFooter}>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-5 grid grid-cols-5 gap-5">
          {servicesColumns.map((col) => (
            <MegaMenuColumn key={col.id} column={col} />
          ))}
        </div>
        <div className="col-span-1">
          <FeaturedCard data={servicesFeatured} />
        </div>
      </div>
    </MegaMenuShell>
  );
};
