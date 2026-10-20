"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronDown, HiMenu, HiX } from "react-icons/hi";
import Bixeltekblacklogo from "@/assets/Bixeltek Black Logo.png";

import { ServicesMenu } from "./menus/ServicesMenu";
import { IndustriesMenu } from "./menus/IndustriesMenu";
import { LocationsMenu } from "./menus/LocationsMenu";
import { CaseStudiesMenu } from "./menus/CaseStudiesMenu";
import { InsightsMenu } from "./menus/InsightsMenu";
import { AboutMenu } from "./menus/AboutMenu";
import { MobileMenu } from "./MobileMenu";

// Top-level nav items. `menu` is the component rendered on hover; omit it for plain links.
type NavItemKey = "services" | "industries" | "locations" | "caseStudies" | "insights" | "company";

const NAV_ITEMS: { key: NavItemKey; label: string; link: string; Menu: React.ComponentType }[] = [
  { key: "services", label: "Services", link: "/services", Menu: ServicesMenu },
  { key: "industries", label: "Industries", link: "/industries", Menu: IndustriesMenu },
  { key: "locations", label: "Locations", link: "/locations", Menu: LocationsMenu },
  { key: "caseStudies", label: "Case Studies", link: "/case-studies", Menu: CaseStudiesMenu },
  { key: "insights", label: "Insights", link: "/blog", Menu: InsightsMenu },
  { key: "company", label: "Company", link: "/about-us", Menu: AboutMenu },
];

export const Header = () => {
  // Single source of truth for which mega menu is open, instead of one boolean per menu.
  const [openMenu, setOpenMenu] = useState<NavItemKey | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[90%] bg-white rounded-full shadow-lg px-6">
        <div className="flex justify-between items-center px-6">
          {/* Logo */}
          <div className="py-3">
            <Link href="/">
              <Image src={Bixeltekblacklogo} width={150} height={40} alt="Bixeltek Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Mobile toggle - visible below 1500px since 8 items + CTA need the room */}
          <button
            className="min-[1500px]:hidden text-black text-3xl"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <HiMenu />
          </button>

          {/* Desktop nav - visible at 1500px and up */}
          <nav className="hidden min-[1500px]:flex items-center gap-10 text-[17px] tracking-wide">
            <ul className="flex items-center gap-8 font-medium">
              {/* <li className="py-7">
                <Link href="/" className="text-black hover:text-[#670ef7] font-semibold transition">
                  Home
                </Link>
              </li> */}

              {NAV_ITEMS.map(({ key, label, link, Menu }) => (
                <li
                  key={key}
                  className="py-7"
                  onMouseEnter={() => setOpenMenu(key)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    href={link}
                    className={`flex items-center gap-1 font-semibold transition ${
                      openMenu === key ? "text-[#670ef7]" : "text-black hover:text-[#670ef7]"
                    }`}
                  >
                    {label}
                    <HiChevronDown className={`text-sm transition-transform ${openMenu === key ? "rotate-180" : ""}`} />
                  </Link>

                  {openMenu === key && <Menu />}
                </li>
              ))}

              <li className="py-7">
                <Link href="/contact-us" className="text-black hover:text-[#670ef7] font-semibold transition">
                  Contact Us
                </Link>
              </li>
            </ul>

            <Link href="/get-a-proposal">
              <button className="bg-black text-white font-medium text-sm py-2.5 px-5 rounded-lg hover:bg-[#670ef7] transition whitespace-nowrap">
                Get a Proposal
              </button>
            </Link>
          </nav>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};