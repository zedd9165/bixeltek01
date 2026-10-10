"use client";

import React, { useEffect, useState } from "react";

export interface PillarJumpNavProps {
  links: { label: string; href: string }[];
  /** Height of your fixed site header in px, so the bar sticks right under it */
  topOffset?: number;
}

export default function PillarJumpNav({ links, topOffset = 72 }: PillarJumpNavProps) {
  const [active, setActive] = useState(links[0]?.href ?? "");

  useEffect(() => {
    const els = links
      .map((l) => document.getElementById(l.href.replace("#", "")))
      .filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive("#" + e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [links]);

  return (
    <nav
      aria-label="On this page"
      className="sticky z-30 border-y border-gray-200 bg-white/85 backdrop-blur-md"
      style={{ top: topOffset }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:max-w-[90%] lg:px-8">
        <ul className="flex gap-1 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {links.map((l) => (
            <li key={l.href} className="shrink-0">
              <a
                href={l.href}
                className={`block rounded-full px-4 py-1.5 text-sm font-medium font-poppins transition-colors ${
                  active === l.href
                    ? "bg-[#08080C] text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-[#08080C]"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}