"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Rocket,
  RefreshCw,
  TrendingUp,
  Target,
  ShieldCheck,
  Zap,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

export interface StartingSituationCard {
  title: string;
  description: string;
}

export interface StartingSituationsData {
  eyebrow: string;
  h2: string;
  cards: StartingSituationCard[];
  buttonText: string;
  buttonHref: string;
}

export interface ServiceStartingSituationsProps {
  id?: string;
  data: StartingSituationsData;
  gridCols?: 2 | 3 | 4;
}

interface CardTheme {
  icon: LucideIcon;
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  hoverBorder: string;
  linkText: string;
}

const cardThemes: CardTheme[] = [
  {
    icon: Rocket,
    iconBg: "bg-blue-50",
    iconBorder: "border-blue-100",
    iconColor: "text-blue-600",
    hoverBorder: "hover:border-blue-500",
    linkText: "text-blue-600 group-hover:text-blue-700",
  },
  {
    icon: RefreshCw,
    iconBg: "bg-purple-50",
    iconBorder: "border-purple-100",
    iconColor: "text-purple-600",
    hoverBorder: "hover:border-purple-500",
    linkText: "text-purple-600 group-hover:text-purple-700",
  },
  {
    icon: Target,
    iconBg: "bg-emerald-50",
    iconBorder: "border-emerald-100",
    iconColor: "text-emerald-600",
    hoverBorder: "hover:border-emerald-500",
    linkText: "text-emerald-600 group-hover:text-emerald-700",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-amber-50",
    iconBorder: "border-amber-100",
    iconColor: "text-amber-600",
    hoverBorder: "hover:border-amber-500",
    linkText: "text-amber-600 group-hover:text-amber-700",
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-indigo-50",
    iconBorder: "border-indigo-100",
    iconColor: "text-indigo-600",
    hoverBorder: "hover:border-indigo-500",
    linkText: "text-indigo-600 group-hover:text-indigo-700",
  },
  {
    icon: Zap,
    iconBg: "bg-cyan-50",
    iconBorder: "border-cyan-100",
    iconColor: "text-cyan-600",
    hoverBorder: "hover:border-cyan-500",
    linkText: "text-cyan-600 group-hover:text-cyan-700",
  },
];

const gridColsMap: Record<2 | 3 | 4, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

export default function ServiceStartingSituations({
  id = "starting-situations",
  data,
  gridCols = 2,
}: ServiceStartingSituationsProps) {
  const gridClasses = gridColsMap[gridCols] || "md:grid-cols-2";

  return (
    <section
      id={id}
      className="py-24 bg-[#F8F9FC] text-[#08080C] relative border-t border-gray-200"
    >
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{data.eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15]">
            {data.h2}
          </h2>
        </div>

        {/* Cards */}
        <div className={`grid grid-cols-1 ${gridClasses} gap-8`}>
          {data.cards.map((card, idx) => {
            const theme = cardThemes[idx % cardThemes.length];
            const IconComponent = theme.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white border border-gray-200 rounded-2xl p-8 sm:p-10 flex flex-col justify-between ${theme.hoverBorder} hover:shadow-xl transition duration-300 relative group`}
              >
                <div className="space-y-5">
                  <div
                    className={`w-14 h-14 rounded-2xl ${theme.iconBg} border ${theme.iconBorder} flex items-center justify-center ${theme.iconColor} group-hover:scale-105 transition-transform`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-inter text-[#08080C]">
                    {card.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 font-poppins leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href={data.buttonHref}
                    className={`inline-flex items-center text-sm sm:text-base font-semibold ${theme.linkText} transition-colors font-poppins`}
                  >
                    <span>{data.buttonText}</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

