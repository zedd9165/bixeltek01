'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import BookingRegionModal from '@/components/Home2/BookingRegionModal';
import { MicrosoftBooking } from '@/components/DentalMarketing/Variant_C/Microsoft_Booking';

interface BookingModalContextType {
  openBooking: () => void;
  closeBooking: () => void;
  isBookingOpen: boolean;
}

export const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeBookingUrl, setActiveBookingUrl] = useState<string | null>(null);

  const openBooking = () => {
    setIsBookingModalOpen(true);
  };

  const closeBooking = () => {
    setIsBookingModalOpen(false);
    setActiveBookingUrl(null);
  };

  const handleSelectBookingUrl = (calendarUrl: string) => {
    setIsBookingModalOpen(false);
    setActiveBookingUrl(calendarUrl);
  };

  return (
    <BookingModalContext.Provider
      value={{
        openBooking,
        closeBooking,
        isBookingOpen: isBookingModalOpen || Boolean(activeBookingUrl),
      }}
    >
      {children}

      {/* Reusable Booking Region Selector Modal */}
      <BookingRegionModal
        open={isBookingModalOpen}
        onClose={closeBooking}
        onSelectBookingUrl={handleSelectBookingUrl}
      />

      {/* Dynamic Microsoft Booking Iframe Modal */}
      <MicrosoftBooking
        showBooking={Boolean(activeBookingUrl)}
        setShowBooking={(show: boolean) => {
          if (!show) setActiveBookingUrl(null);
        }}
        bookingUrl={activeBookingUrl || undefined}
        title="Schedule a 1-on-1 Consultation"
      />
    </BookingModalContext.Provider>
  );
}

export function useBookingModal(): BookingModalContextType {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error('useBookingModal must be used within a BookingModalProvider');
  }
  return context;
}

export function useOptionalBookingModal(): BookingModalContextType | undefined {
  return useContext(BookingModalContext);
}
