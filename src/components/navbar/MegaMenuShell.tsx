"use client";

import Link from "next/link";
import { ReactNode } from "react";
import type { FooterBarData } from "@/data/navigation/types";

interface MegaMenuShellProps {
  /** Main content - typically a grid of <MegaMenuColumn /> plus an optional side card */
  children: ReactNode;
  /** Optional bottom strip, e.g. "Not sure what you need? [Get Your Audit] View All Services" */
  footer?: FooterBarData;
}

/**
 * Shared chrome for every mega menu: absolute-positioned panel under the header,
 * rounded bottom corners, fade/scale-in, and an optional footer CTA strip.
 * Individual menus (ServicesMenu, IndustriesMenu, etc.) only need to supply content.
 *
 * Width note: this panel is `w-full` and relies on its nearest *positioned*
 * ancestor being the <header> itself (position: fixed) so it resolves to the
 * exact same width as the header pill - not the width of whichever <li>
 * happens to contain it. That means the triggering <li> in Header.tsx must
 * NOT have `position: relative` (or any position) on it, or the containing
 * block breaks and this panel shrinks to that li's width instead.
 */
export const MegaMenuShell = ({ children, footer }: MegaMenuShellProps) => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[96%] bg-white rounded-b-2xl z-40 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
      <div className="p-8">{children}</div>

      {footer && (
        <div className="flex items-center justify-between gap-4 bg-gray-50 border-t border-gray-100 px-8 py-4">
          <div className="flex items-center gap-3">
            {footer.icon && (
              <div className="text-[#670ef7] bg-white rounded-full p-2 shadow-sm">{footer.icon}</div>
            )}
            <div>
              <p className="font-semibold text-black text-sm">{footer.title}</p>
              <p className="text-gray-500 text-xs">{footer.desc}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 shrink-0">
            <Link
              href={footer.ctaLink}
              className="bg-black text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#670ef7] transition"
            >
              {footer.ctaLabel}
            </Link>
            {footer.viewAllLabel && footer.viewAllLink && (
              <Link
                href={footer.viewAllLink}
                className="text-sm font-medium text-black hover:text-[#670ef7] transition whitespace-nowrap"
              >
                {footer.viewAllLabel} →
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};