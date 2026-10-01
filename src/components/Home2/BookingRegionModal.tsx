'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ArrowRight, Globe } from 'lucide-react';

export interface BookingRegion {
  id: string;
  label: string;
  description: string;
  calendarUrl: string;
  flagCode?: string; // ISO 3166-1 alpha-2 for clean native flag display
}

// Centralized configuration for all regions. Replace with actual booking calendar URLs.
export const bookingRegions: BookingRegion[] = [
  {
    id: 'north-america',
    label: 'Canada & United States',
    description: 'Schedule with our North America team',
    calendarUrl: 'REPLACE_WITH_CANADA_US_CALENDAR_URL',
    flagCode: 'US_CA',
  },
  {
    id: 'uk',
    label: 'United Kingdom',
    description: 'Schedule with our UK team',
    calendarUrl: 'REPLACE_WITH_UK_CALENDAR_URL',
    flagCode: 'GB',
  },
  {
    id: 'saudi',
    label: 'Saudi Arabia',
    description: 'Schedule with our Middle East team',
    calendarUrl: 'REPLACE_WITH_SAUDI_CALENDAR_URL',
    flagCode: 'SA',
  },
  {
    id: 'india',
    label: 'India',
    description: 'Schedule with our India team',
    calendarUrl: 'REPLACE_WITH_INDIA_CALENDAR_URL',
    flagCode: 'IN',
  },
];

interface BookingRegionModalProps {
  open: boolean;
  onClose: () => void;
  regions?: BookingRegion[];
}

// Minimal, restrained flag icons to stay aligned with Bixeltek's premium aesthetic
function RegionIconBadge({ flagCode }: { flagCode?: string }) {
  if (flagCode === 'US_CA') {
    return (
      <span className="text-base select-none inline-flex items-center gap-0.5 tracking-tight" aria-hidden="true">
        🇨🇦 🇺🇸
      </span>
    );
  }
  if (flagCode === 'GB') {
    return <span className="text-base select-none" aria-hidden="true">🇬🇧</span>;
  }
  if (flagCode === 'SA') {
    return <span className="text-base select-none" aria-hidden="true">🇸🇦</span>;
  }
  if (flagCode === 'IN') {
    return <span className="text-base select-none" aria-hidden="true">🇮🇳</span>;
  }
  return <Globe className="w-4 h-4 text-[#8C45FF]" aria-hidden="true" />;
}

export default function BookingRegionModal({
  open,
  onClose,
  regions = bookingRegions,
}: BookingRegionModalProps) {
  const shouldReduceMotion = useReducedMotion();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Handle outside click, Escape key, and body scroll lock
  useEffect(() => {
    if (!open) return;

    previousActiveElement.current = document.activeElement as HTMLElement | null;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on mount
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [open, onClose]);

  const handleRegionSelect = (calendarUrl: string) => {
    if (!calendarUrl || calendarUrl.startsWith('REPLACE_WITH_')) {
      console.warn(`[BookingRegionModal] Please provide a valid calendar URL for: ${calendarUrl}`);
      // Fallback or opens placeholder
      window.open('#booking-calendar', '_blank', 'noopener,noreferrer');
    } else {
      window.open(calendarUrl, '_blank', 'noopener,noreferrer');
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#070709]/80 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Centered Modal Surface */}
          <motion.div
            ref={modalRef}
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.96,
              y: shouldReduceMotion ? 0 : 12,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.96,
              y: shouldReduceMotion ? 0 : 12,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full max-w-[640px] rounded-3xl border border-white/[0.12] bg-[#0C0C14] text-white p-7 sm:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.85)] overflow-hidden z-10 max-h-[92vh] flex flex-col"
          >
            {/* Very Subtle Ambient Purple Glow inside the modal */}
            <div
              className="absolute -top-28 -right-28 w-80 h-80 rounded-full blur-[110px] pointer-events-none opacity-20"
              style={{
                background: 'radial-gradient(circle, #670EF7 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />

            {/* Top Luminous Highlight Bar */}
            <div
              className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#8B45FF]/80 to-transparent opacity-80"
              aria-hidden="true"
            />

            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close booking region selector"
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-white/25 hover:bg-white/[0.08] text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#670EF7]/60"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header Content */}
            <div className="flex flex-col items-start pr-8 shrink-0">
              {/* Eyebrow */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#670EF7]/30 bg-[#670EF7]/10 mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#670EF7] shadow-[0_0_6px_#670EF7]" />
                <span className="text-[11px] font-semibold tracking-wider uppercase text-neutral-300">
                  LET&apos;S TALK
                </span>
              </div>

              {/* Main Heading */}
              <h3
                id="booking-modal-title"
                className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-2.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Let&apos;s find the right time.
              </h3>

              {/* Supporting Text */}
              <p
                className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Choose your region and we&apos;ll take you to the calendar for the appropriate Bixeltek team.
              </p>
            </div>

            {/* Region Interactive Rows */}
            <div className="space-y-3 w-full overflow-y-auto pr-1 -mr-1">
              {regions.map((region, idx) => (
                <motion.button
                  key={region.id}
                  type="button"
                  onClick={() => handleRegionSelect(region.calendarUrl)}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.3,
                    delay: shouldReduceMotion ? 0 : 0.08 * (idx + 1),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group w-full flex items-center justify-between p-4 sm:p-4.5 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-[#670EF7]/10 hover:border-[#670EF7]/50 transition-all duration-200 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#670EF7]/60"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">

                    {/* Region Details */}
                    <div className="min-w-0">
                      <div
                        className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-[#D8C5FF] transition-colors truncate"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {region.label}
                      </div>
                      <div
                        className="text-xs sm:text-[13px] text-neutral-400 font-normal mt-0.5 truncate"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {region.description}
                      </div>
                    </div>
                  </div>

                  {/* Restrained Navigation Arrow */}
                  <div className="w-8 h-8 rounded-full bg-white/[0.03] group-hover:bg-[#670EF7]/20 flex items-center justify-center shrink-0 ml-3 transition-colors">
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Subtle Footnote */}
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-center shrink-0">
              <span
                className="text-[11px] sm:text-xs text-neutral-400 tracking-wide font-medium"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                No obligation · Direct access to regional technical directors
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}