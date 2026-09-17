'use client'

import React, { useState, useEffect } from 'react'
import {
  FaArrowRight,
  FaTooth,
  FaPhone,
  FaChartLine,
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import TimedAuditPopup from './TimedAuditPopup'
import { MicrosoftBooking } from './Variant_C/Microsoft_Booking'
import LeadPopup from './Variant_C/LeadPopup'
import Image from 'next/image'
import Bixeltekblacklogo from '@/assets/Bixeltek Black Logo.png'

export interface HeroCalculatorConfig {
  currencySymbol: string
  defaultMonthlyBudget: number
  minBudget: number
  maxBudget: number
  budgetStep: number
  defaultPatientValue: number
  minPatientValue: number
  maxPatientValue: number
  patientValueStep: number
  costPerEnquiry: number
  enquiryToPatientRate: number
  budgetLabel: string
  patientValueLabel: string
  assumptionsNotice: string
  leadsPanelLabel: string
  leadsPanelSubtext: string
  patientsPanelLabel: string
  patientsPanelSubtext: string
  revenuePanelLabel: string
  revenuePanelSubtext: string
  disclaimerText: string
  calculatorCtaText: string
  tags: string[]
}

export interface HeroFeatureTag {
  iconType: 'chart' | 'tooth' | 'phone'
  text: string
}

export interface HeroSectionContent {
  eyebrowBadge: string
  h1Start: string
  h1Highlight: string
  h1End?: string
  subtext: string
  featureTags: HeroFeatureTag[]
  primaryCtaText: string
  secondaryCtaText: string
  proofNumber: string
  proofLabel: string
  trustInitials: string[]
  calculator: HeroCalculatorConfig
}



export const NA_HERO_CONTENT: HeroSectionContent = {
  eyebrowBadge: 'Dental Marketing Agency for Growing Practices',
  h1Start: 'Dental Marketing That Converts Searches Into ',
  h1Highlight: 'New Patients',
  h1End: '',
  subtext:
    'Stop losing potential patients to competitors. Bixeltek runs Google and Meta Ads for dental practices and builds the landing pages, tracking, and follow-up systems that turn ad clicks and searches into qualified leads, consultations, and booked appointments.',
  featureTags: [
    { iconType: 'chart', text: 'High-Intent Leads' },
    { iconType: 'tooth', text: 'Dental Marketing Experts' },
    { iconType: 'phone', text: 'ROI-Focused Strategy' },
  ],
  primaryCtaText: 'Schedule An Appointment',
  secondaryCtaText: 'Talk to a Specialist',
  proofNumber: '102K+',
  proofLabel: 'patients acquired for clients',
  trustInitials: ['JD', 'MK', 'SR'],
  calculator: {
    currencySymbol: '$',
    defaultMonthlyBudget: 3000,
    minBudget: 1000,
    maxBudget: 12000,
    budgetStep: 500,
    defaultPatientValue: 800,
    minPatientValue: 300,
    maxPatientValue: 3000,
    patientValueStep: 50,
    costPerEnquiry: 75,
    enquiryToPatientRate: 0.5,
    budgetLabel: 'Monthly Google Ads Budget',
    patientValueLabel: 'Average New Patient Value',
    assumptionsNotice:
      'Estimates use a fixed $75 cost per phone lead and a 50% phone-lead-to-patient conversion rate.',
    leadsPanelLabel: 'Estimated Phone Leads',
    leadsPanelSubtext: 'Expected monthly phone leads',
    patientsPanelLabel: 'Estimated New Patients',
    patientsPanelSubtext: 'Based on a 50% lead-to-patient rate',
    revenuePanelLabel: 'Potential New Patient Revenue',
    revenuePanelSubtext: 'Potential monthly revenue from estimated new patients',
    disclaimerText:
      'Estimates are based on a $75 cost per phone lead and an assumed 50% phone-lead-to-patient conversion rate. Actual results vary by market, competition, treatment mix, landing pages, budget, and follow-up.',
    calculatorCtaText: 'Get My Free $250 Dental Marketing Audit →',
    tags: ['Google Ads', 'Patient Acquisition'],
  },
}

interface HeroSectionProps {
  content?: HeroSectionContent
  onPrimaryCtaClick?: () => void
}

export default function Ads_HeroSection({
  content = NA_HERO_CONTENT,
  onPrimaryCtaClick,
}: HeroSectionProps) {
  const [showBooking, setShowBooking] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const calcConfig = content.calculator
  const [monthlyBudget, setMonthlyBudget] = useState(calcConfig.defaultMonthlyBudget)
  const [patientValue, setPatientValue] = useState(calcConfig.defaultPatientValue)

  // Keep state synchronised if country configuration changes
  useEffect(() => {
    setMonthlyBudget(calcConfig.defaultMonthlyBudget)
    setPatientValue(calcConfig.defaultPatientValue)
  }, [calcConfig])

  const {
    expectedLeads,
    estimatedPatients,
    potentialRevenue,
    cpl,
    conversionRate,
  } = calculateGrowth(
    monthlyBudget,
    patientValue,
    calcConfig.costPerEnquiry,
    calcConfig.enquiryToPatientRate
  )

  useEffect(() => {
    if (showBooking) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [showBooking])

  const handlePrimaryAction = () => {
    if (onPrimaryCtaClick) {
      onPrimaryCtaClick()
    } else {
      setShowPopup(true)
    }
  }

  const renderIcon = (type: HeroFeatureTag['iconType']) => {
    switch (type) {
      case 'chart':
        return <FaChartLine size={14} className="text-blue-600" />
      case 'tooth':
        return <FaTooth size={14} className="text-blue-600" />
      case 'phone':
        return <FaPhone size={14} className="text-blue-600" />
      default:
        return <FaTooth size={14} className="text-blue-600" />
    }
  }

  return (
    <>
      <section className="relative min-h-screen bg-white overflow-hidden flex items-center pt-0">
        {/* Subtle background accents */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 opacity-70 blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-sky-200 to-blue-200 opacity-70 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(#1a56db 1px, transparent 1px), linear-gradient(90deg, #1a56db 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>
        <div className="relative w-full md:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <Image src={Bixeltekblacklogo} width={150} height={40} alt="Bixeltek Logo" className='h-16 w-auto' />
        <div className="relative py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* ── Left Content ── */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              className="space-y-8 max-w-3xl"
            >
              {/* Badge */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 },
                  },
                }}
                className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 bg-white shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-xs font-semibold tracking-wide text-gray-600 uppercase">
                  {content.eyebrowBadge}
                </span>
              </motion.div>

              {/* Accent Line */}
              <motion.div
                variants={{
                  hidden: { width: 0, opacity: 0 },
                  visible: {
                    width: 40,
                    opacity: 1,
                    transition: { duration: 0.4 },
                  },
                }}
                className="h-[2px] bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                style={{ width: 40 }}
              />

              {/* Headline */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45 },
                  },
                }}
                className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.25] tracking-[-0.03em] text-gray-950"
              >
                {content.h1Start}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {content.h1Highlight}
                </span>
                {content.h1End && <span>{content.h1End}</span>}
              </motion.h1>

              {/* Body Text */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 },
                  },
                }}
                className="text-lg text-gray-600 leading-relaxed max-w-2xl"
              >
                {content.subtext}
              </motion.p>

              {/* Feature Tags */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 },
                  },
                }}
                className="flex flex-wrap gap-3"
              >
                {content.featureTags.map((feature, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -2,
                      borderColor: '#2563eb',
                      color: '#2563eb',
                    }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-700 shadow-sm cursor-default"
                  >
                    {renderIcon(feature.iconType)}
                    {feature.text}
                  </motion.div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 },
                  },
                }}
                className="flex flex-col sm:flex-row gap-3 pt-2"
              >
                <motion.button
                  onClick={() => setShowBooking(true)}
                  whileHover={{
                    y: -2,
                    boxShadow: '0 12px 32px rgba(26,86,219,0.35)',
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center justify-center gap-2 bg-gray-950 text-white px-7 py-4 rounded-xl text-[15px] font-bold tracking-tight group"
                >
                  {content.primaryCtaText}
                  <FaArrowRight
                    size={13}
                    className="group-hover:translate-x-1 transition-transform duration-150"
                  />
                </motion.button>

                <motion.a
                  href='tel:+14375252301'
                  whileHover={{
                    y: -2,
                    borderColor: '#2563eb',
                    color: '#2563eb',
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center justify-center border border-gray-200 bg-white text-gray-800 px-7 py-4 rounded-xl text-[15px] font-bold tracking-tight shadow-sm"
                >
                  {content.secondaryCtaText}
                </motion.a>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.4 },
                  },
                }}
                className="flex items-center gap-4 pt-2"
              >
                <div className="flex">
                  {content.trustInitials.map((initials, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold -ml-2 first:ml-0"
                    >
                      {initials}
                    </div>
                  ))}
                </div>

                <p className="text-sm text-gray-500">
                  <span className="font-bold text-gray-900">
                    {content.proofNumber}
                  </span>{' '}
                  {content.proofLabel}
                </p>
              </motion.div>
            </motion.div>

            {/* ── Right: Patient Growth Calculator ── */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white border border-gray-200 rounded-2xl shadow-[0_2px_40px_rgba(0,0,0,0.07)] overflow-hidden">
                {/* Card Header */}
                <div className="flex items-center gap-3 px-7 py-5 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center flex-shrink-0">
                    <FaChartLine size={16} className="text-white" />
                  </div>

                  <div>
                    <p className="text-[15px] font-bold text-gray-950 tracking-tight">
                      Dental Practice Patient Growth Calculator
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Model potential patient enquiries, booked appointments, and treatment revenue.
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  {/* Left: Inputs */}
                  <div className="px-7 py-6 space-y-7">
                    <CalcSlider
                      label={calcConfig.budgetLabel}
                      value={monthlyBudget}
                      min={calcConfig.minBudget}
                      max={calcConfig.maxBudget}
                      step={calcConfig.budgetStep}
                      display={`${calcConfig.currencySymbol}${monthlyBudget.toLocaleString()}`}
                      onChange={setMonthlyBudget}
                      minLabel={`${calcConfig.currencySymbol}${calcConfig.minBudget.toLocaleString()}`}
                      maxLabel={`${calcConfig.currencySymbol}${calcConfig.maxBudget.toLocaleString()}`}
                    />

                    <CalcSlider
                      label={calcConfig.patientValueLabel}
                      value={patientValue}
                      min={calcConfig.minPatientValue}
                      max={calcConfig.maxPatientValue}
                      step={calcConfig.patientValueStep}
                      display={`${calcConfig.currencySymbol}${patientValue.toLocaleString()}`}
                      onChange={setPatientValue}
                      minLabel={`${calcConfig.currencySymbol}${calcConfig.minPatientValue.toLocaleString()}`}
                      maxLabel={`${calcConfig.currencySymbol}${calcConfig.maxPatientValue.toLocaleString()}`}
                    />

                    <div className="pt-1">
                      <p className="text-[12px] text-gray-600 leading-relaxed">
                        {calcConfig.assumptionsNotice}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {calcConfig.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-semibold text-blue-600 border border-blue-200 bg-blue-50 rounded-full px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Calculated Metrics */}
                  <div className="px-7 py-6 flex flex-col gap-3">
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                      <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-1.5">
                        {calcConfig.leadsPanelLabel}
                      </p>
                      <motion.p
                        key={expectedLeads}
                        initial={{ opacity: 0.5, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.18 }}
                        className="text-[28px] font-extrabold tracking-[-0.03em] text-gray-950 leading-none"
                      >
                        {expectedLeads}
                      </motion.p>
                      <p className="text-[13px] text-gray-400 mt-1.5">
                        {calcConfig.leadsPanelSubtext}
                      </p>
                    </div>

                    <div className="bg-gray-950 rounded-xl p-4">
                      <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-1.5">
                        {calcConfig.patientsPanelLabel}
                      </p>
                      <motion.p
                        key={estimatedPatients}
                        initial={{ opacity: 0.5, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.18 }}
                        className="text-[28px] font-extrabold tracking-[-0.03em] text-white leading-none"
                      >
                        {estimatedPatients}
                      </motion.p>
                      <p className="text-[13px] text-white/80 mt-1.5">
                        {calcConfig.patientsPanelSubtext}
                      </p>
                    </div>

                    <div className="border border-blue-100 bg-blue-50 rounded-xl p-4">
                      <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-blue-400 mb-1">
                        {calcConfig.revenuePanelLabel}
                      </p>
                      <motion.p
                        key={potentialRevenue}
                        initial={{ opacity: 0.5, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.18 }}
                        className="text-[22px] font-extrabold tracking-[-0.03em] text-blue-700 leading-none"
                      >
                        {calcConfig.currencySymbol}
                        {potentialRevenue.toLocaleString()}
                      </motion.p>
                      <p className="text-[13px] text-gray-500 mt-1.5">
                        {calcConfig.revenuePanelSubtext}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Disclaimer */}
                <div className="px-7 py-3 bg-gray-50 border-t border-gray-100">
                  <p className="text-[12px] text-gray-500 leading-relaxed">
                    {calcConfig.disclaimerText}
                  </p>
                </div>

                {/* Card CTA */}
                <div className="px-7 py-5 bg-white border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setShowPopup(true)}
                    className="w-full bg-gradient-to-tr from-black via-[#090040] to-[#483aa0] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    {calcConfig.calculatorCtaText}
                  </button>
                </div>

                {/* Lead Modal */}
                {showPopup && (
                  <LeadPopup
                    onClose={() => setShowPopup(false)}
                    calculatorData={{
                      monthlyBudget,
                      patientValue,
                      expectedLeads,
                      estimatedPatients,
                      potentialRevenue,
                      cpl,
                      conversionRate,
                    }}
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </section>

      <TimedAuditPopup
        delaySeconds={30}
        onBookClick={() => setShowBooking(true)}
      />

      <MicrosoftBooking
        showBooking={showBooking}
        setShowBooking={setShowBooking}
      />
    </>
  )
}

function CalcSlider({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
  minLabel,
  maxLabel,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  display: string
  onChange: (v: number) => void
  minLabel?: string
  maxLabel?: string
}) {
  const pct = ((value - min) / (max - min)) * 100

  return (
    <div>
      <div className="flex items-center justify-between mb-2.5">
        <label className="text-[13px] font-semibold text-gray-700">
          {label}
        </label>
        <span className="text-[15px] font-extrabold tracking-tight text-blue-600">
          {display}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="calc-slider w-full h-1.5 rounded-full appearance-none cursor-pointer outline-none"
        style={{
          background: `linear-gradient(to right, #2563eb ${pct}%, #e5e7eb ${pct}%)`,
        }}
      />

      <div className="flex justify-between mt-1.5">
        <span className="text-[11px] text-gray-400">
          {minLabel ?? min}
        </span>
        <span className="text-[11px] text-gray-400">
          {maxLabel ?? max}
        </span>
      </div>

      <style>{`
        .calc-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #2563eb;
          border: 2px solid #ffffff;
          box-shadow: 0 0 0 1.5px #2563eb, 0 2px 8px rgba(37,99,235,0.35);
          cursor: pointer;
          transition: transform 0.15s;
        }

        .calc-slider::-webkit-slider-thumb:hover {
          transform: scale(1.18);
        }

        .calc-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #2563eb;
          border: 2px solid #ffffff;
          box-shadow: 0 0 0 1.5px #2563eb, 0 2px 8px rgba(37,99,235,0.35);
          cursor: pointer;
        }

        .calc-slider:focus::-webkit-slider-thumb {
          box-shadow: 0 0 0 3px rgba(37,99,235,0.2);
        }
      `}</style>
    </div>
  )
}

function calculateGrowth(
  monthlyBudget: number,
  patientValue: number,
  costPerEnquiry: number,
  conversionRate: number
) {
  const expectedLeads = Math.floor(monthlyBudget / costPerEnquiry)
  const estimatedPatients = Math.floor(expectedLeads * conversionRate)
  const potentialRevenue = estimatedPatients * patientValue

  return {
    expectedLeads,
    estimatedPatients,
    potentialRevenue,
    cpl: costPerEnquiry,
    conversionRate,
  }
}