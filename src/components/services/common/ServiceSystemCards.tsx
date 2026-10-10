"use client";

import React from "react";
import { motion } from "framer-motion";
import { Boxes, Users2, Truck, Workflow, Network, Database, Info } from "lucide-react";

export interface ConnectedSystemCardItem {
  title: string;
  description: string;
}

export interface ServiceSystemCardsProps {
  id?: string;
  eyebrow: string;
  h2: string;
  intro: string;
  cards: ConnectedSystemCardItem[];
  supportingNote?: string;
}

const metricIcons = [
  <Boxes key="0" className="w-6 h-6 text-blue-600" />,
  <Users2 key="1" className="w-6 h-6 text-emerald-600" />,
  <Truck key="2" className="w-6 h-6 text-purple-600" />,
  <Workflow key="3" className="w-6 h-6 text-amber-600" />,
];

const metricTags = [
  "Inventory · Catalog · Stock",
  "CRM · Marketing · Email",
  "Shipping · Carriers · Tracking",
  "APIs · ERP · Automation",
];

export default function ServiceSystemCards({
  id = "systems",
  eyebrow,
  h2,
  intro,
  cards,
  supportingNote,
}: ServiceSystemCardsProps) {
  return (
    <section
      id={id}
      className="py-24 bg-white text-[#08080C] relative border-t border-gray-200"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Intro */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
            {h2}
          </h2>
          <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed">
            {intro}
          </p>
        </div>

        {/* Structured Comparative Ledger on White exactly like Google Ads Reporting / Systems */}
        <div className="border border-gray-200 rounded-2xl bg-white shadow-sm overflow-hidden">
          <div className="hidden md:grid grid-cols-12 bg-gray-50 border-b border-gray-200 px-8 py-4 text-xs font-poppins font-semibold uppercase tracking-wider text-gray-500">
            <div className="col-span-4">Operational Architecture</div>
            <div className="col-span-5">Data Flow & Synchronization</div>
            <div className="col-span-3 text-right">Workflow Scope</div>
          </div>

          <div className="divide-y divide-gray-200">
            {cards.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-8 md:grid md:grid-cols-12 md:items-center gap-6 hover:bg-gray-50/70 transition-colors"
              >
                {/* Column 1: System */}
                <div className="md:col-span-4 flex items-center gap-4 mb-3 md:mb-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    {metricIcons[idx % metricIcons.length]}
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

                {/* Column 3: Signal Badge */}
                <div className="md:col-span-3 md:text-right">
                  <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-poppins">
                    {metricTags[idx % metricTags.length]}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Supporting Note / System Integration Banner */}
          <div className="p-6 sm:p-8 bg-blue-50/60 border-t border-gray-200 flex items-start gap-4 text-xs sm:text-sm text-blue-900 font-poppins leading-relaxed">
            <Database className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-blue-950">System Architecture Standard: </strong>
              {supportingNote ||
                "An ecommerce website does not operate in isolation. Depending on the business, its success also depends on how orders, inventory, customer information and marketing data move between systems."}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

