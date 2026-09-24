'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaSearch,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa'
import { MicrosoftBooking } from './Microsoft_Booking'

interface SupportingTreatment {
  number: string
  title: string
  category: string
  intent: string
  copy: string
  searchQuery: string
  tags: string[]
  accentColor: string
}

const SUPPORTING_TREATMENTS: SupportingTreatment[] = [
  {
    number: '02',
    title: 'Invisalign & Clear Aligners',
    category: 'ORTHODONTIC / COSMETIC',
    intent: 'HIGH COMMERCIAL INTENT',
    copy: 'Put your practice in front of patients already comparing their options for straighter smiles.',
    searchQuery: 'invisalign near me',
    tags: ['HIGH INTENT', 'GOOGLE + META'],
    accentColor: 'from-purple-500/20 to-blue-500/20',
  },
  {
    number: '03',
    title: 'Emergency Dentistry',
    category: 'URGENT TREATMENT',
    intent: 'IMMEDIATE',
    copy: 'Capture patients searching for immediate dental care when they need an appointment now.',
    searchQuery: 'emergency dentist near me',
    tags: ['IMMEDIATE INTENT', 'GOOGLE ADS'],
    accentColor: 'from-rose-500/20 to-amber-500/20',
  },
  {
    number: '04',
    title: 'Dental Veneers',
    category: 'COSMETIC / ELECTIVE',
    intent: 'HIGH CONSIDERATION',
    copy: 'Reach patients researching smile transformations and comparing cosmetic dental providers.',
    searchQuery: 'porcelain veneers',
    tags: ['COSMETIC', 'META + GOOGLE'],
    accentColor: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    number: '05',
    title: 'Teeth Whitening',
    category: 'COSMETIC',
    intent: 'COMMERCIAL',
    copy: 'Turn cosmetic search demand into new patient opportunities with treatment-focused campaigns.',
    searchQuery: 'teeth whitening near me',
    tags: ['COSMETIC', 'GOOGLE + META'],
    accentColor: 'from-amber-500/20 to-yellow-500/20',
  },
  {
    number: '06',
    title: 'Root Canal Treatment',
    category: 'RESTORATIVE / PROBLEM-DRIVEN',
    intent: 'TREATMENT-READY',
    copy: 'Reach patients actively searching for treatment when tooth pain or damage needs attention.',
    searchQuery: 'root canal dentist',
    tags: ['TREATMENT INTENT', 'GOOGLE ADS'],
    accentColor: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    number: '07',
    title: 'Wisdom Teeth Removal',
    category: 'ORAL SURGERY / SPECIALTY',
    intent: 'HIGH TREATMENT INTENT',
    copy: 'Capture searches from patients actively looking for evaluation and removal treatment.',
    searchQuery: 'wisdom teeth removal',
    tags: ['HIGH INTENT', 'GOOGLE ADS'],
    accentColor: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    number: '08',
    title: 'Dentures & Full-Mouth Restoration',
    category: 'RESTORATIVE / COMPREHENSIVE',
    intent: 'COMMERCIAL',
    copy: 'Reach patients researching comprehensive solutions for missing or damaged teeth.',
    searchQuery: 'full mouth restoration',
    tags: ['RESTORATIVE', 'GOOGLE + META'],
    accentColor: 'from-teal-500/20 to-blue-500/20',
  },
]

interface TreatmentsSectionProps {
  onCtaClick?: () => void
}

export default function TreatmentsSection({ onCtaClick }: TreatmentsSectionProps) {
  const [showBooking, setShowBooking] = useState(false)

  const handleAction = () => {
    if (onCtaClick) {
      onCtaClick()
    } else {
      const formElement = document.getElementById('audit-form') || document.getElementById('final-audit-form')
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        const input = formElement.querySelector('input')
        if (input) setTimeout(() => input.focus(), 500)
      }
    }
  }

  return (
    <section
      id="treatment-advertising"
      className="relative py-24 md:py-32 bg-white text-[#0a0a0a] overflow-hidden"
    >
      {/* Background Precision Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#0a0a0a 1px,transparent 1px),linear-gradient(90deg,#0a0a0a 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Subtle Radial Glow Accents */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[350px] rounded-full bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-transparent blur-[140px]" />
      <div className="pointer-events-none absolute bottom-20 left-10 w-[450px] h-[450px] rounded-full bg-blue-600/5 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-semibold tracking-[0.12em] uppercase mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            WHAT WE ADVERTISE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-[-0.03em] text-[#0a0a0a] leading-[1.2] mb-6"
          >
            Don&apos;t Just Advertise Your Practice.{' '}
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Advertise The Treatments Patients Are Searching For.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal"
          >
            We build treatment-specific Google &amp; Meta campaigns around the
            procedures that matter to your practice connecting high-intent
            searches with focused landing pages and conversion tracking.
          </motion.p>
        </div>

        {/* ── Treatment Campaign Board ── */}
        <div className="space-y-6">
          {/* 01 — Featured Treatment: Dental Implants */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative rounded-3xl p-4 md:p-8 lg:p-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50 border border-blue-200 shadow-[0_24px_64px_rgba(15,23,42,0.30)] overflow-hidden"
          >
            {/* Ambient inner card glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Featured Overview */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  {/* Top Indicators */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-blue-600 bg-blue-100 border border-blue-200 px-2.5 py-1 rounded-md">
                      01
                    </span>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 border border-blue-200 px-3 py-1 rounded-md">
                      FEATURED CAMPAIGN
                    </span>

                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 bg-white border border-gray-200 px-2.5 py-1 rounded-md">
                      HIGH-VALUE TREATMENT
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a0a0a] tracking-tight leading-snug mb-3">
                    Dental Implants
                  </h3>

                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-700 mb-4 bg-cyan-50 border border-cyan-200 px-3 py-1.5 rounded-lg">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    HIGH COMMERCIAL INTENT
                  </div>

                  {/* Copy */}
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    Reach patients actively researching tooth replacement and
                    implant treatment.
                  </p>

                  {/* Campaign Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wide bg-blue-100 text-blue-700 border border-blue-200 px-3 py-1 rounded-md">
                      HIGH VALUE
                    </span>

                    <span className="text-xs font-semibold uppercase tracking-wide bg-gray-100 text-gray-700 border border-gray-200 px-3 py-1 rounded-md">
                      GOOGLE ADS
                    </span>
                  </div>
                </div>

                {/* Patient Acquisition Flow Callout */}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                      ACQUISITION ARCHITECTURE
                    </p>

                    <p className="text-sm text-gray-700 font-medium">
                      Search Intent → Targeted Ad → Focused Landing Page →
                      Booked Consultation
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={handleAction}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group cursor-pointer"
                    >
                      <span>Get My Free $250 Audit</span>

                      <FaArrowRight
                        size={11}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Conceptual Miniature Funnel SaaS UI */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl bg-[#07090e] border border-gray-200 p-5 md:p-6 lg:p-7 shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
                  {/* Mock Window Top Bar */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />

                      <span className="ml-2 text-[11px] font-mono text-white/40 tracking-wider">
                        CAMPAIGN FUNNEL FLOW
                      </span>
                    </div>

                    <span className="text-[10px] font-mono uppercase text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded">
                      LIVE SIMULATION
                    </span>
                  </div>

                  {/* 4-Step Acquisition Pathway */}
                  <div className="space-y-3">
                    {/* Stage 1: Patient Search */}
                    <div className="relative p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 transition-all hover:border-blue-500/30">
                      <div className="flex items-center justify-between text-[11px] font-mono text-white/40 uppercase tracking-wider mb-2">
                        <span>STAGE 01 • PATIENT SEARCH</span>
                        <span className="text-cyan-400">HIGH INTENT</span>
                      </div>

                      <div className="flex items-center gap-3 bg-[#0d111c] border border-white/10 rounded-lg px-3.5 py-2.5">
                        <FaSearch
                          className="text-cyan-400 flex-shrink-0"
                          size={13}
                        />

                        <span className="text-sm font-medium text-white tracking-wide">
                          dental implants near me
                        </span>

                        <span className="w-1.5 h-4 bg-cyan-400 animate-pulse ml-auto opacity-75" />
                      </div>
                    </div>

                    {/* Connector Arrow */}
                    <div className="flex justify-center -my-1">
                      <div className="w-[1px] h-4 bg-gradient-to-b from-cyan-400/60 to-blue-500/60" />
                    </div>

                    {/* Stage 2: Targeted Ad Result */}
                    <div className="relative p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 transition-all hover:border-blue-500/30">
                      <div className="flex items-center justify-between text-[11px] font-mono text-white/40 uppercase tracking-wider mb-2">
                        <span>STAGE 02 • TARGETED AD</span>
                        <span className="text-blue-400">SPONSORED RESULT</span>
                      </div>

                      <div className="bg-[#0d111c] border border-blue-500/20 rounded-lg p-3 space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                            Ad
                          </span>

                          <span className="text-xs text-white/50 font-medium">
                            Dental Practice • Implant Specialist
                          </span>
                        </div>

                        <div className="text-sm font-semibold text-white">
                          Implant Consultation — Replace Missing Teeth
                        </div>

                        <div className="flex items-center gap-1 text-xs font-semibold text-cyan-400 pt-0.5">
                          <span>Book Your Consultation</span>
                          <FaArrowRight size={10} />
                        </div>
                      </div>
                    </div>

                    {/* Connector Arrow */}
                    <div className="flex justify-center -my-1">
                      <div className="w-[1px] h-4 bg-gradient-to-b from-blue-500/60 to-indigo-500/60" />
                    </div>

                    {/* Stage 3: Dedicated Landing Page */}
                    <div className="relative p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 transition-all hover:border-blue-500/30">
                      <div className="flex items-center justify-between text-[11px] font-mono text-white/40 uppercase tracking-wider mb-2">
                        <span>
                          STAGE 03 • DEDICATED LANDING PAGE
                        </span>

                        <span className="text-indigo-300">
                          FOCUSED CRO
                        </span>
                      </div>

                      <div className="bg-[#0d111c] border border-white/10 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                        <div className="space-y-0.5">
                          <p className="text-xs text-white/40 font-mono">
                            practice.com/implants
                          </p>

                          <p className="text-sm font-semibold text-white">
                            Dental Implant Consultation
                          </p>
                        </div>

                        <span className="text-[11px] font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded self-start sm:self-auto">
                          High Conversion
                        </span>
                      </div>
                    </div>

                    {/* Connector Arrow */}
                    <div className="flex justify-center -my-1">
                      <div className="w-[1px] h-4 bg-gradient-to-b from-indigo-500/60 to-emerald-500/60" />
                    </div>

                    {/* Stage 4: Conversion */}
                    <div className="relative p-3.5 sm:p-4 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/30 transition-all">
                      <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-2">
                        <span>STAGE 04 • CONVERSION</span>

                        <span className="flex items-center gap-1 text-emerald-400">
                          <FaCheckCircle size={11} /> VERIFIED
                        </span>
                      </div>

                      <div className="bg-[#091512] border border-emerald-500/30 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                        <div>
                          <p className="text-sm font-bold text-white tracking-tight">
                            BOOK APPOINTMENT
                          </p>

                          <p className="text-xs text-emerald-300/80">
                            High-intent patient inquiry captured
                          </p>
                        </div>

                        <span className="text-xs font-bold text-white bg-emerald-600 px-3 py-1.5 rounded-lg shadow-sm self-start sm:self-auto">
                          Enquiry Confirmed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Supporting Treatments Grid (02 to 07) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {SUPPORTING_TREATMENTS.slice(0, 6).map((item, idx) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                whileHover={{ y: -3 }}
                onClick={handleAction}
                className="group relative rounded-2xl p-6 sm:p-7 bg-white border border-blue-300 hover:bg-blue-50/30 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_40px_rgba(37,99,235,0.10)]"
              >
                {/* Subtle hover gradient flare */}
                <div
                  className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${item.accentColor} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div>
                  {/* Header Row: Number + Intent/Category */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-sm font-mono font-semibold text-black group-hover:text-cyan-600 transition-colors">
                      {item.number}
                    </span>

                    <span className="text-[10px] font-semibold tracking-wider uppercase text-black bg-gray-50 border border-gray-200 px-2 py-0.5 rounded">
                      {item.intent}
                    </span>
                  </div>

                  {/* Category */}
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 mb-2">
                    {item.category}
                  </p>

                  {/* Treatment Title */}
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0a0a0a] group-hover:text-blue-600 transition-colors mb-3 tracking-tight">
                    {item.title}
                  </h4>

                  {/* Card Copy */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5">
                    {item.copy}
                  </p>
                </div>

                <div>
                  {/* Selective Search Query Detail */}
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-md px-2.5 py-1.5 text-xs text-gray-600 font-mono group-hover:border-cyan-300 group-hover:bg-cyan-50 transition-colors max-w-full truncate">
                      <FaSearch
                        size={10}
                        className="text-cyan-500 flex-shrink-0"
                      />

                      <span className="truncate">
                        &quot;{item.searchQuery}&quot;
                      </span>
                    </div>
                  </div>

                  {/* Tags and Action Arrow */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <FaArrowRight
                      size={12}
                      className="text-gray-300 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 ml-2"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Treatment 08: Dentures & Full-Mouth Restoration (Wide Anchor Card) ── */}
          {SUPPORTING_TREATMENTS[6] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -3 }}
              onClick={handleAction}
              className="group relative rounded-2xl p-6 sm:p-8 bg-white border border-blue-300 hover:bg-blue-50/30 transition-all duration-300 overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_40px_rgba(37,99,235,0.10)]"
            >
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="max-w-2xl space-y-2">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-sm font-mono font-semibold text-gray-400 group-hover:text-cyan-600 transition-colors">
                      {SUPPORTING_TREATMENTS[6].number}
                    </span>

                    <span className="text-[10px] font-semibold tracking-wider uppercase text-teal-600 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                      {SUPPORTING_TREATMENTS[6].category}
                    </span>

                    <span className="text-[10px] font-semibold tracking-wider uppercase text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded">
                      {SUPPORTING_TREATMENTS[6].intent}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl md:text-2xl font-bold text-[#0a0a0a] group-hover:text-blue-600 transition-colors tracking-tight">
                    {SUPPORTING_TREATMENTS[6].title}
                  </h4>

                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {SUPPORTING_TREATMENTS[6].copy}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start md:items-end lg:items-center gap-3 flex-shrink-0">
                  <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 text-xs text-gray-600 font-mono">
                    <FaSearch
                      size={10}
                      className="text-cyan-500 flex-shrink-0"
                    />

                    <span>
                      &quot;{SUPPORTING_TREATMENTS[6].searchQuery}&quot;
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {SUPPORTING_TREATMENTS[6].tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* ── Bottom Statement & Call to Action ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-20 md:mt-28 text-center max-w-3xl mx-auto"
        >
          {/* Triple Statement */}
          <div className="space-y-1.5 mb-8">
            <p className="text-xl sm:text-2xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">
              More Treatment Searches.
            </p>

            <p className="text-xl sm:text-2xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">
              More Qualified Enquiries.
            </p>

            <p className="text-xl sm:text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent tracking-tight">
              More Opportunities To Fill Your Chair.
            </p>
          </div>

          {/* Primary & Secondary CTA Buttons */}
          <div className="mb-5 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={handleAction}
              whileHover={{
                y: -2,
                boxShadow: '0 16px 40px rgba(37,99,235,0.35)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl text-base sm:text-[17px] font-bold tracking-tight shadow-xl shadow-blue-500/20 transition-all group"
            >
              <span>Get My Free $250 Audit</span>

              <FaArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </motion.button>

            <motion.button
              onClick={() => setShowBooking(true)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:border-gray-900 text-gray-900 px-7 py-4 rounded-xl text-base font-bold tracking-tight transition-all"
            >
              <span>Book a 1-on-1 Consultation</span>
            </motion.button>
          </div>

          {/* Supporting Microcopy */}
          <p className="text-xs sm:text-sm text-gray-500 tracking-wide font-medium">
            Google Ads + Meta Ads • Treatment-Specific Campaigns • Conversion
            Tracking
          </p>
        </motion.div>
      </div>

      {/* Appointment Booking Modal */}
      <MicrosoftBooking
        showBooking={showBooking}
        setShowBooking={setShowBooking}
      />
    </section>
  )
}
