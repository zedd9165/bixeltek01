"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiChevronDown } from "react-icons/hi";

import { servicesColumns } from "@/data/navigation/services";
import { industriesColumns } from "@/data/navigation/industries";
import { locationRegions } from "@/data/navigation/locations";
import { caseStudiesByService } from "@/data/navigation/caseStudies";
import { insightsColumns } from "@/data/navigation/insights";
import { aboutColumns } from "@/data/navigation/about";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

type SectionKey = "services" | "industries" | "locations" | "caseStudies" | "insights" | "about";

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [openSection, setOpenSection] = useState<SectionKey | null>(null);

  const toggleSection = (key: SectionKey) => setOpenSection(openSection === key ? null : key);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className="fixed top-0 right-0 h-full w-full bg-black shadow-lg p-6 z-50 min-[1500px]:hidden overflow-y-auto overscroll-contain"
    >
      <button className="absolute top-4 right-4 text-white text-3xl" onClick={onClose} aria-label="Close menu">
        <HiX />
      </button>

      <nav className="mt-10 pb-10 text-white text-xl space-y-1">
        <Link href="/" onClick={onClose} className="block py-3 px-4 hover:bg-purple-600 rounded">
          Home
        </Link>

        {/* Services */}
        <AccordionSection
          label="Services"
          isOpen={openSection === "services"}
          onToggle={() => toggleSection("services")}
        >
          {servicesColumns.map((col) => (
            <div key={col.id} className="mb-3">
              <p className="text-purple-300 text-xs uppercase tracking-wide px-4 mb-1">{col.title}</p>
              {col.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={onClose}
                  className="block py-2 px-4 text-base text-gray-200 hover:text-purple-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
        </AccordionSection>

        {/* Industries */}
        <AccordionSection
          label="Industries"
          isOpen={openSection === "industries"}
          onToggle={() => toggleSection("industries")}
        >
          {industriesColumns.map((col) => (
            <div key={col.id} className="mb-3">
              <p className="text-purple-300 text-xs uppercase tracking-wide px-4 mb-1">{col.title}</p>
              {col.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={onClose}
                  className="block py-2 px-4 text-base text-gray-200 hover:text-purple-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
        </AccordionSection>

        {/* Locations */}
        <AccordionSection
          label="Locations"
          isOpen={openSection === "locations"}
          onToggle={() => toggleSection("locations")}
        >
          {locationRegions.map((region) => (
            <div key={region.id} className="mb-3">
              <p className="text-purple-300 text-xs uppercase tracking-wide px-4 mb-1">{region.title}</p>
              {region.cities.map((city) => (
                <Link
                  key={city.name}
                  href={city.link}
                  onClick={onClose}
                  className="block py-2 px-4 text-base text-gray-200 hover:text-purple-300"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          ))}
        </AccordionSection>

        {/* Case Studies */}
        <AccordionSection
          label="Case Studies"
          isOpen={openSection === "caseStudies"}
          onToggle={() => toggleSection("caseStudies")}
        >
          <Link href="/case-studies" onClick={onClose} className="block py-2 px-4 text-base text-gray-200 hover:text-purple-300">
            View All Case Studies
          </Link>
          {caseStudiesByService.map((s) => (
            <Link key={s.name} href={s.link} onClick={onClose} className="block py-2 px-4 text-base text-gray-200 hover:text-purple-300">
              {s.name}
            </Link>
          ))}
        </AccordionSection>

        {/* Insights */}
        <AccordionSection
          label="Insights"
          isOpen={openSection === "insights"}
          onToggle={() => toggleSection("insights")}
        >
          {insightsColumns.map((col) => (
            <div key={col.id} className="mb-3">
              <p className="text-purple-300 text-xs uppercase tracking-wide px-4 mb-1">{col.title}</p>
              {col.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={onClose}
                  className="block py-2 px-4 text-base text-gray-200 hover:text-purple-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
        </AccordionSection>

        {/* About Us */}
        <AccordionSection label="About Us" isOpen={openSection === "about"} onToggle={() => toggleSection("about")}>
          {aboutColumns[0].items.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={onClose}
              className="block py-2 px-4 text-base text-gray-200 hover:text-purple-300"
            >
              {item.name}
            </Link>
          ))}
        </AccordionSection>

        <Link href="/contact-us" onClick={onClose} className="block py-3 px-4 hover:bg-purple-600 rounded">
          Contact Us
        </Link>

        <div className="pt-6">
          <Link href="/get-a-proposal" onClick={onClose}>
            <button className="w-full bg-gradient-to-t from-[#4a208a] to-[#13012e] border border-[#8a45f2] text-white font-medium text-sm py-3 px-4 rounded-lg">
              Get a Proposal
            </button>
          </Link>
        </div>
      </nav>
    </motion.div>
  );
};

interface AccordionSectionProps {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const AccordionSection = ({ label, isOpen, onToggle, children }: AccordionSectionProps) => (
  <div>
    <button onClick={onToggle} className="flex justify-between items-center w-full py-3 px-4 hover:bg-purple-600 rounded">
      {label}
      <HiChevronDown className={`text-lg transition-transform ${isOpen ? "rotate-180" : ""}`} />
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
          className="ml-2 overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);