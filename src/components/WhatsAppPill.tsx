'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

export default function WhatsAppPill() {
  const phoneNumber = '919100032301';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da851] text-white px-4 py-2.5 md:px-5 md:py-3 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.5)] border border-white/25 transition-all duration-300 ease-out hover:scale-105 active:scale-95 group cursor-pointer"
    >
      <span className="flex items-center justify-center text-xl md:text-2xl transition-transform duration-300 group-hover:rotate-12">
        <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
      </span>
      <span className="text-sm md:text-[15px] font-semibold tracking-wide select-none whitespace-nowrap">
        WhatsApp Now
      </span>
    </a>
  );
}

