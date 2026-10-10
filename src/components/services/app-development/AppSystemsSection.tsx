"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, ShieldCheck, CreditCard, Bell, Database, MapPin } from "lucide-react";
import type { AppSystemCard } from "@/data/service/app-development";

export interface AppSystemsSectionProps {
  id?: string;
  eyebrow?: string;
  h2?: string;
  intro?: string;
  cards: AppSystemCard[];
  supportingNote?: string;
}

const SYSTEM_ICONS = [
  Server,
  ShieldCheck,
  CreditCard,
  Bell,
  Database,
  MapPin,
];

export default function AppSystemsSection({
  id = "systems-integrations",
  eyebrow = "SYSTEMS & INTEGRATIONS",
  h2 = "A Mobile App Must Seamlessly Connect to Your Operational Infrastructure",
  intro = "Mobile development is more than front-end screens. The application relies on secure backend APIs, identity management, payment processing, push messaging, databases and third-party services to function in the real world.",
  cards,
  supportingNote = "A mobile application does not live in isolation. Its durability and usability depend directly on how securely and efficiently it connects to your existing business workflows, databases, and operational systems.",
}: AppSystemsSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 py-24 sm:py-28 bg-[#F8F9FC] text-[#08080C] relative border-t border-gray-200"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-5xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
            {h2}
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed max-w-4xl">
            {intro}
          </p>
        </div>

        {/* Structured Comparative Ledger matching ServiceSystemCards */}
        <div className="border border-gray-200 rounded-2xl bg-white shadow-sm overflow-hidden">
          <div className="hidden md:grid grid-cols-12 bg-gray-50 border-b border-gray-200 px-8 py-4 text-xs font-poppins font-semibold uppercase tracking-wider text-gray-500">
            <div className="col-span-4">System Integration Area</div>
            <div className="col-span-5">Data Flow & Functional Role</div>
            <div className="col-span-3 text-right">Core Technologies & Protocols</div>
          </div>

          <div className="divide-y divide-gray-200">
            {cards.map((item, idx) => {
              const Icon = SYSTEM_ICONS[idx % SYSTEM_ICONS.length];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 sm:p-8 md:grid md:grid-cols-12 md:items-center gap-6 hover:bg-gray-50/70 transition-colors"
                >
                  {/* Column 1: System */}
                  <div className="md:col-span-4 flex items-center gap-4 mb-3 md:mb-0">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-poppins text-gray-400 block">System 0{idx + 1}</span>
                      <h3 className="text-lg sm:text-xl font-bold font-inter text-[#08080C]">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Column 2: Definition */}
                  <div className="md:col-span-5 mb-4 md:mb-0">
                    <p className="text-sm sm:text-base text-gray-600 font-poppins leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Column 3: Example Badges */}
                  <div className="md:col-span-3 md:text-right">
                    {item.examples && item.examples.length > 0 && (
                      <div className="flex flex-wrap md:justify-end gap-1.5">
                        {item.examples.map((ex, eIdx) => (
                          <span
                            key={eIdx}
                            className="inline-block text-[11px] font-medium px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200/80 font-poppins"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Supporting Note */}
          <div className="p-6 sm:p-8 bg-blue-50/60 border-t border-gray-200 flex items-start gap-4 text-xs sm:text-sm text-blue-900 font-poppins leading-relaxed">
            <Database className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-blue-950">Integration Architecture Standard: </strong>
              {supportingNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

