'use client'

import React, { Suspense, useState } from 'react'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Image from 'next/image'

import CanadaAuditForm from './Canada/CanadaAuditForm'
import Bixeltekblacklogo from '@/assets/Bixeltek Black Logo.png'
import { MicrosoftBooking } from './Variant_C/Microsoft_Booking'

export interface HeroFeatureTag {
  iconType?: 'check' | 'chart' | 'tooth' | 'phone' | string
  text: string
}

export interface HeroSectionContent {
  eyebrowBadge: string
  h1Start: string
  h1Highlight: string
  h1End?: string
  subtitle?: string
  subtext: string
  featureTags: HeroFeatureTag[]
  primaryCtaText: string
  secondaryCtaText?: string
  proofNumber?: string
  proofLabel?: string
  trustInitials?: string[]
  calculator?: any
}

export const NA_HERO_CONTENT: HeroSectionContent = {
  eyebrowBadge: 'DENTAL MARKETING FOR CANADIAN PRACTICES',

  h1Start: 'Dental Marketing for Canadian Clinics That Want ',
  h1Highlight: 'More Booked Patients',
  h1End: '',

  subtitle:
    'Google Ads, Meta Ads, landing pages and conversion tracking built to generate qualified patient enquiries not just clicks.',

  subtext:
    'We help dental practices like Yours turn high-intent searches and paid social traffic into qualified enquiries, consultations, and booked appointments.',

  featureTags: [
    { iconType: 'check', text: 'Google Partner' },
    { iconType: 'check', text: '100+ Dental Practices' },
    { iconType: 'check', text: 'Canada & USA' },
  ],

  primaryCtaText: 'GET MY FREE AUDIT',
}

interface HeroSectionProps {
  content?: HeroSectionContent
  onPrimaryCtaClick?: () => void
}

export default function Ads_HeroSection({
  content = NA_HERO_CONTENT,
}: HeroSectionProps) {
   const [showBooking, setShowBooking] = useState(false)
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Very subtle background treatment.
          Keep the existing Bixeltek visual language without
          introducing the heavy AI/SaaS gradient aesthetic. */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-180px] top-[-180px] h-[480px] w-[480px] rounded-full bg-blue-50/70 blur-3xl" />
        <div className="absolute bottom-[-220px] left-[-180px] h-[420px] w-[420px] rounded-full bg-sky-50/60 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full lg:max-w-[90%] px-4 sm:px-6 lg:px-8">
        {/* Minimal paid-media header */}
        <header className="flex items-center justify-between py-6 md:py-7">
          <a
            href="/"
            aria-label="Bixeltek Home"
            className="inline-flex items-center"
          >
            <Image
              src={Bixeltekblacklogo}
              width={150}
              height={40}
              alt="Bixeltek"
              priority
              className="h-auto w-[128px] md:w-[150px]"
            />
          </a>

          <a
            href="#audit-form"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-gray-950 px-5 py-3 text-sm font-bold tracking-tight text-white transition-colors duration-200 hover:bg-blue-700"
          >
            {content.primaryCtaText}
            <FaArrowRight size={11} />
          </a>
        </header>

        {/* Hero */}
        <div className="grid items-start gap-10 pb-14 pt-8 md:pb-20 md:pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:pt-14">
          {/* LEFT — Message / Proof */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-blue-600" />

              <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-gray-600">
                {content.eyebrowBadge}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[40px] font-extrabold leading-[1.08] tracking-[-0.035em] text-gray-950 md:text-[52px] lg:text-[60px]">
              {content.h1Start}

              <span className="text-blue-600">
                {content.h1Highlight}
              </span>

              {content.h1End && (
                <span>{content.h1End}</span>
              )}
            </h1>

            {/* Supporting headline */}
            {content.subtitle && (
              <p className="mt-6 max-w-[650px] text-xl font-semibold leading-[1.4] tracking-[-0.015em] text-gray-800 md:text-2xl">
                {content.subtitle}
              </p>
            )}

            {/* Body */}
            <p className="mt-5 max-w-[650px] text-base leading-7 text-gray-600 md:text-lg">
              {content.subtext}
            </p>

            {/* Trust points */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              {content.featureTags.map((feature, index) => (
                <div
                  key={`${feature.text}-${index}`}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                >
                  <FaCheckCircle
                    size={15}
                    className="shrink-0 text-blue-600"
                  />

                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Google Partner */}
            <div className="mt-7">
              <a
                href="https://www.google.com/partners/agency?id=2188074075"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center transition-opacity duration-200 hover:opacity-80"
              >
                <img
                  src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                  alt="Google Partner"
                  className="h-14 w-auto md:h-16"
                />
              </a>
            </div>
              
           <motion.button
                       onClick={() => setShowBooking(true)}
                       whileHover={{
                         y: -2,
                         boxShadow: '0 12px 32px rgba(26,86,219,0.35)',
                       }}
                       whileTap={{ scale: 0.97 }}
                       transition={{ duration: 0.15 }}
                       className="inline-flex items-center justify-center gap-2 bg-gray-950 text-white px-7 py-4 rounded-xl text-[15px] font-bold tracking-tight group my-6"
                     >
                       Book a 1-on-1 Consultation
                     </motion.button>
           
                 <MicrosoftBooking
                   showBooking={showBooking}
                   setShowBooking={setShowBooking}
                 />

            {/* Small reassurance */}
            <div className="border-l-2 border-blue-600 pl-4">
              <p className="text-sm leading-6 text-gray-500">
                Built for dental practices looking to generate more qualified
                patient enquiries from their marketing investment.
              </p>
            </div>
          </motion.div>

          {/* RIGHT — PRIMARY AUDIT FORM */}
          <motion.div
            id="audit-form"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="scroll-mt-6"
          >
              {/* Existing audit form */}
              <div className="w-full">
                <Suspense fallback={null}>
                  <CanadaAuditForm />
                </Suspense>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}