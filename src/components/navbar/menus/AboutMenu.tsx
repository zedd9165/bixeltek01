"use client";

import Link from "next/link";
import Image from "next/image";
import { MegaMenuShell } from "../MegaMenuShell";
import { MegaMenuColumn } from "../MegaMenuColumn";
import { FeaturedCard } from "../FeaturedCard";
import { aboutColumns, aboutFeatured, aboutImageCard } from "@/data/navigation/about";

export const AboutMenu = () => {
  return (
    <MegaMenuShell>
      <div className="grid grid-cols-3 gap-6 min-h-[250px]">
        <div className="col-span-1">
          <MegaMenuColumn column={aboutColumns[0]} />
        </div>
        <div className="col-span-1">
          <FeaturedCard data={aboutFeatured} />
        </div>

        <div className="col-span-1 relative rounded-xl overflow-hidden group">
          <Image
            src={aboutImageCard.image}
            alt={aboutImageCard.alt}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
          {/* {aboutImageCard.caption && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-4">
              <span className="text-white font-semibold text-sm">{aboutImageCard.caption}</span>
            </div>
          )} */}
        </div>
      </div>
    </MegaMenuShell>
  );
};