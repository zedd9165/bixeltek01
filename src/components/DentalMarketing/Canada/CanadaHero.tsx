'use client'

import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { FaTooth, FaChartLine, FaCheckCircle, FaStar } from 'react-icons/fa'
import CanadaAuditForm from './CanadaAuditForm'

export default function CanadaHero() {
  return (
    <section className="relative bg-white overflow-hidden pt-8 pb-16 sm:py-20 lg:py-24">
      {/* Background accents matching Bixeltek's visual style */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 opacity-60 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-sky-100 to-blue-100 opacity-60 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(#1a56db 1px, transparent 1px), linear-gradient(90deg, #1a56db 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* ── Left Content (Desktop: ~58%, 7 cols) ── */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 border border-blue-200 rounded-full px-3.5 py-1.5 bg-blue-50/80 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-blue-900 uppercase">
                DENTAL MARKETING FOR CANADIAN PRACTICES
              </span>
            </div>

            {/* Accent Line */}
            <div className="h-[2px] w-12 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full" />

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[54px] font-extrabold leading-[1.18] tracking-[-0.03em] text-gray-950">
              Dental Marketing for{' '}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 bg-clip-text text-transparent">
                Canadian Clinics
              </span>{' '}
              That Want More Booked Patients
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed max-w-2xl">
              Google Ads, Meta Ads, landing pages and conversion tracking built to generate qualified patient enquiries — not just clicks.
            </p>

            {/* Supporting explanatory paragraph */}
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl">
              Stop wasting budget on broad traffic that never converts into consultations. We engineer targeted, treatment-specific campaigns for Canadian dental practices that capture high-intent patients searching for implants, clear aligners, emergency care, and general dentistry in your city.
            </p>

            {/* Key Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-blue-100/70 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <FaChartLine size={14} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">High-Intent Leads</p>
                  <p className="text-[11px] text-gray-500">Phone calls & forms</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-blue-100/70 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <FaTooth size={14} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Dental-Specific</p>
                  <p className="text-[11px] text-gray-500">100% practice focus</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-blue-100/70 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle size={14} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">1 Clinic / City</p>
                  <p className="text-[11px] text-gray-500">Market exclusivity</p>
                </div>
              </div>
            </div>

            {/* Google Partner & Credibility Badges */}
            <div className="pt-3 flex flex-wrap items-center gap-6 sm:gap-8 border-t border-gray-100">
              <a
                href="https://www.google.com/partners/agency?id=2188074075"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-200 hover:scale-[1.03]"
                aria-label="Google Partner Directory Verification"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                  alt="Official Google Partner Badge"
                  width={180}
                  height={56}
                  className="w-auto h-12 sm:h-14"
                />
              </a>

              <div className="space-y-1">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                  <span className="text-xs font-bold text-gray-900 ml-1">5.0 Star Rating</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">
                  Trusted by 100+ dental practices across Canada & USA
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Embedded Audit Form (Desktop: ~42%, 5 cols) ── */}
          <div className="lg:col-span-5 w-full">
            <Suspense fallback={<div className="h-96 rounded-2xl bg-gray-50 animate-pulse" />}>
              <CanadaAuditForm id="hero-audit-form" sourceSection="hero" />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}

