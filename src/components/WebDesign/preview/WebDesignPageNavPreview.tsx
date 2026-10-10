"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { webDesignNavigationData } from "@/data/service/webdesing";

export default function WebDesignPageNavPreview() {
  return (
    <div className="w-full bg-[#08080C] border-b border-gray-800/80 sticky top-16 md:top-20 z-30 backdrop-blur-md bg-opacity-90">
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-gray-400 font-poppins">
          {webDesignNavigationData.breadcrumb.map((item, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-600" />}
              {item.href ? (
                <Link href={item.href} className="hover:text-blue-400 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-200 font-medium">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Page Jump Links */}
        <div className="flex items-center gap-3 sm:gap-5 overflow-x-auto no-scrollbar py-1">
          {webDesignNavigationData.jumpLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-xs sm:text-sm font-medium font-poppins text-gray-300 hover:text-blue-400 whitespace-nowrap transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
