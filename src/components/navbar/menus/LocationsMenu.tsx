"use client";

import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import { MegaMenuShell } from "../MegaMenuShell";
import { locationRegions, locationsFeatured, locationsFooter } from "@/data/navigation/locations";

export const LocationsMenu = () => {
  return (
    <MegaMenuShell footer={locationsFooter}>
      <div className="grid grid-cols-5 gap-4">
        {locationRegions.map((region) => (
          <div key={region.id} className="bg-gray-50 rounded-xl p-4 flex flex-col">
            <Link href={region.viewAllLink} className="flex items-center justify-between mb-3 group">
              <span className="flex items-center gap-2 text-xs font-semibold tracking-wide text-black uppercase">
                <span className="text-base leading-none">{region.icon}</span>
                {region.title}
              </span>
              <HiChevronRight className="text-gray-400 group-hover:text-[#670ef7] transition shrink-0" />
            </Link>

            <ul className="space-y-1 flex-1">
              {region.cities.map((city) => (
                <li key={city.name}>
                  <Link
                    href={city.link}
                    className="group flex items-center justify-between text-sm text-gray-700 hover:text-[#670ef7] rounded-md px-2 py-1.5 -mx-2 hover:bg-white transition"
                  >
                    <span>{city.name}</span>
                    <HiChevronRight className="text-gray-300 group-hover:text-[#670ef7] transition text-xs shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-3 mt-2 border-t border-gray-200">
              <Link
                href={region.viewAllLink}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#670ef7] hover:text-black transition"
              >
                {region.viewAllLabel} →
              </Link>
            </div>
          </div>
        ))}

        {/* Global reach card - map with pins */}
        <div className="rounded-xl bg-gradient-to-br from-[#eef2ff] to-[#f5f0ff] p-4 flex flex-col overflow-hidden">
          <div className="text-[#670ef7] bg-white rounded-full p-2 w-fit shadow-sm mb-3">
            {locationsFeatured.icon}
          </div>
          <h4 className="font-semibold text-black text-sm leading-snug mb-1">{locationsFeatured.title}</h4>
          <p className="text-gray-500 text-xs leading-relaxed mb-3">{locationsFeatured.desc}</p>

          <div className="relative flex-1 min-h-[80px] mb-3">
            <WorldMapDots />
          </div>

          <Link
            href={locationsFeatured.ctaLink}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#670ef7] hover:text-black transition"
          >
            {locationsFeatured.ctaLabel} →
          </Link>
        </div>
      </div>
    </MegaMenuShell>
  );
};

/** Lightweight decorative world-map placeholder (dotted grid + a few pins). Swap for a real map/SVG asset any time. */
const WorldMapDots = () => (
  <div className="absolute inset-0 rounded-lg overflow-hidden">
    <div
      className="absolute inset-0 opacity-50"
      style={{
        backgroundImage: "radial-gradient(circle, #c7d2fe 1px, transparent 1px)",
        backgroundSize: "10px 10px",
      }}
    />
    <FaMapMarkerAlt className="absolute text-[#670ef7]" size={14} style={{ left: "12%", top: "45%" }} />
    <FaMapMarkerAlt className="absolute text-[#670ef7]" size={14} style={{ left: "48%", top: "15%" }} />
    <FaMapMarkerAlt className="absolute text-[#670ef7]" size={14} style={{ left: "70%", top: "40%" }} />
    <FaMapMarkerAlt className="absolute text-[#670ef7]" size={14} style={{ left: "88%", top: "65%" }} />
  </div>
);