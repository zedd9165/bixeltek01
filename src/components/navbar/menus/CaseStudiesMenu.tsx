"use client";

import Link from "next/link";
import { MegaMenuShell } from "../MegaMenuShell";
import {
  featuredCaseStudy,
  caseStudiesByService,
  caseStudiesExploreMore,
} from "@/data/navigation/caseStudies";

export const CaseStudiesMenu = () => {
  return (
    <MegaMenuShell>
      <div className="grid grid-cols-3 gap-6">
        {/* Featured case study */}
        <Link
          href={featuredCaseStudy.ctaLink}
          className="col-span-1 rounded-xl bg-gradient-to-br from-[#f5f0ff] to-[#eef2ff] p-5 flex flex-col justify-between hover:shadow-md transition"
        >
          <div>
            <span className="inline-block text-[10px] font-semibold tracking-wide text-[#670ef7] bg-white rounded-full px-2.5 py-1 mb-3">
              {featuredCaseStudy.badge}
            </span>
            <h4 className="font-semibold text-black text-sm mb-2">{featuredCaseStudy.title}</h4>
            <p className="text-gray-500 text-xs leading-relaxed">{featuredCaseStudy.desc}</p>
          </div>
          <span className="mt-4 text-sm font-semibold text-[#670ef7]">{featuredCaseStudy.ctaLabel} →</span>
        </Link>

        {/* By service */}
        <div className="col-span-1">
          <h4 className="font-semibold text-sm text-black mb-3">By Service</h4>
          <ul className="space-y-1">
            {caseStudiesByService.map((s) => (
              <li key={s.name}>
                <Link
                  href={s.link}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#670ef7] rounded-md px-2 py-1.5 -mx-2 hover:bg-gray-50 transition"
                >
                  <span className="text-[#670ef7]">{s.icon}</span>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore more */}
        <Link
          href={caseStudiesExploreMore.ctaLink}
          className="col-span-1 rounded-xl bg-gray-50 p-5 flex flex-col justify-between hover:bg-gray-100 transition"
        >
          <div>
            <h4 className="font-semibold text-black text-sm mb-2">{caseStudiesExploreMore.title}</h4>
            <p className="text-gray-500 text-xs leading-relaxed">{caseStudiesExploreMore.desc}</p>
          </div>
          <span className="mt-4 text-sm font-semibold text-black">{caseStudiesExploreMore.ctaLabel} →</span>
        </Link>
      </div>
    </MegaMenuShell>
  );
};