'use client'

import React, { useState, useEffect } from 'react'
import {
  FaArrowRight,
  FaTooth,
  FaPhone,
  FaChartLine,
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import LeadPopup from './LeadPopup'
import { MicrosoftBooking } from './Microsoft_Booking'
import TimedAuditPopup from '../TimedAuditPopup'

export default function HeroSection() {
  const [showBooking, setShowBooking] = useState(false)

  // Calculator inputs
  const [monthlyBudget, setMonthlyBudget] = useState(3000)
  const [patientValue, setPatientValue] = useState(800)

  const [showPopup, setShowPopup] = useState(false)

  // Calculator results
  const {
    expectedLeads,
    estimatedPatients,
    potentialRevenue,
    cpl,
    conversionRate,
  } = calculateGrowth(monthlyBudget, patientValue)

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

  return (
    <>
      <section className="relative min-h-screen bg-white overflow-hidden flex items-center pt-20">
        {/* Subtle orb accents */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 opacity-70 blur-3xl" />

          <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-sky-200 to-blue-200 opacity-70 blur-3xl" />

          {/* Fine grid texture */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(#1a56db 1px, transparent 1px), linear-gradient(90deg, #1a56db 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <div className="relative w-full md:max-w-[80%] mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24">
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
                  hidden: {
                    opacity: 0,
                    y: 16,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                    },
                  },
                }}
                className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 bg-white shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />

                <span className="text-xs font-semibold tracking-wide text-gray-600 uppercase">
                  Dental Marketing Agency for Growing Practices
                </span>
              </motion.div>

              {/* Divider line */}
              <motion.div
                variants={{
                  hidden: {
                    width: 0,
                    opacity: 0,
                  },
                  visible: {
                    width: 40,
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                    },
                  },
                }}
                className="h-[2px] bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                style={{ width: 40 }}
              />

              {/* Headline */}
              <motion.h1
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.45,
                    },
                  },
                }}
                className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.8] tracking-[-0.03em] text-gray-950"
              >
                Dental Marketing That Converts Searches Into{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  New Patients
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 16,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                    },
                  },
                }}
                className="text-lg text-gray-500 leading-relaxed max-w-2xl"
              >
                Stop losing potential patients to competitors. Bixeltek runs
                Google and Meta Ads for dental practices and builds the landing
                pages, tracking, and follow-up systems that turn ad clicks and
                searches into qualified leads, consultations, and booked
                appointments.
              </motion.p>

              {/* Feature tags */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 12,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                    },
                  },
                }}
                className="flex flex-wrap gap-3"
              >
                {[
                  {
                    icon: FaChartLine,
                    text: 'Instant Results',
                    color: 'text-blue-600',
                  },
                  {
                    icon: FaTooth,
                    text: 'Dental Marketing Experts',
                    color: 'text-blue-600',
                  },
                  {
                    icon: FaPhone,
                    text: 'ROI-Focused Strategy',
                    color: 'text-blue-600',
                  },
                ].map((f, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -2,
                      borderColor: '#2563eb',
                      color: '#2563eb',
                    }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-2 border border-gray-200 bg-white px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-600 shadow-sm cursor-default"
                  >
                    <f.icon size={14} className={f.color} />
                    {f.text}
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 12,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                    },
                  },
                }}
                className="flex flex-col md:flex-row gap-3 pt-2"
              >
                <motion.button
                  onClick={() => setShowBooking(true)}
                  whileHover={{
                    y: -2,
                    boxShadow:
                      '0 12px 32px rgba(26,86,219,0.35)',
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center justify-center gap-2 bg-gray-950 text-white px-7 py-4 rounded-xl text-[15px] font-bold tracking-tight group"
                >
                  Schedule An Appointment

                  <FaArrowRight
                    size={13}
                    className="group-hover:translate-x-1 transition-transform duration-150"
                  />
                </motion.button>

                <motion.a
                  href="#contact"
                  whileHover={{
                    y: -2,
                    borderColor: '#2563eb',
                    color: '#2563eb',
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center justify-center border border-gray-200 bg-white text-gray-800 px-7 py-4 rounded-xl text-[15px] font-bold tracking-tight shadow-sm"
                >
                  Talk to a Specialist
                </motion.a>
              </motion.div>

              {/* Trust avatars */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                    },
                  },
                }}
                className="flex items-center gap-4 pt-2"
              >
                <div className="flex">
                  {['JD', 'MK', 'SR'].map((initials, i) => (
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
                    102K+
                  </span>{' '}
                  patients acquired for clients
                </p>
              </motion.div>
            </motion.div>

            {/* ── Right: Calculator ── */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
            >
              <div className="bg-white border border-gray-200 rounded-2xl shadow-[0_2px_40px_rgba(0,0,0,0.07)] overflow-hidden">

                {/* Card header */}
                <div className="flex items-center gap-3 px-7 py-5 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-gray-950 flex items-center justify-center flex-shrink-0">
                    <FaChartLine
                      size={16}
                      className="text-white"
                    />
                  </div>

                  <div>
                    <p className="text-[15px] font-bold text-gray-950 tracking-tight">
                      Dental Patient Growth Calculator
                    </p>

                    <p className="text-xs text-gray-500 mt-0.5">
                      Estimate potential phone leads, new patients,
                      and revenue from your monthly Google Ads budget.
                    </p>
                  </div>
                </div>

                {/* Two-column body */}
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">

                  {/* Left: Inputs */}
                  <div className="px-7 py-6 space-y-7">

                    <CalcSlider
                      label="Monthly Google Ads Budget"
                      value={monthlyBudget}
                      min={1000}
                      max={12000}
                      step={500}
                      display={`$${monthlyBudget.toLocaleString()}`}
                      onChange={setMonthlyBudget}
                      minLabel="$1,000"
                      maxLabel="$12,000"
                    />

                    <CalcSlider
                      label="Average New Patient Value"
                      value={patientValue}
                      min={300}
                      max={3000}
                      step={50}
                      display={`$${patientValue.toLocaleString()}`}
                      onChange={setPatientValue}
                      minLabel="$300"
                      maxLabel="$3,000"
                    />

                    {/* Calculator assumptions */}
                    <div className="pt-1">
                      <p className="text-[12px] text-gray-600 leading-relaxed">
                        Estimates use a fixed $75 cost per phone lead and
                        a 50% phone-lead-to-patient conversion rate.
                      </p>
                    </div>

                    {/* Service tags */}
                    <div className="flex flex-wrap items-center gap-2">
                      {['Google Ads', 'Patient Acquisition'].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-semibold text-blue-600 border border-blue-200 bg-blue-50 rounded-full px-3 py-1"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Right: Results */}
                  <div className="px-7 py-6 flex flex-col gap-3">

                    {/* Panel 1: Phone Leads */}
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                      <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-1.5">
                        Estimated Phone Leads
                      </p>

                      <motion.p
                        key={expectedLeads}
                        initial={{
                          opacity: 0.5,
                          y: 4,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.18,
                        }}
                        className="text-[28px] font-extrabold tracking-[-0.03em] text-gray-950 leading-none"
                      >
                        {expectedLeads}
                      </motion.p>

                      <p className="text-[13px] text-gray-400 mt-1.5">
                        Expected monthly phone leads
                      </p>
                    </div>

                    {/* Panel 2: Estimated New Patients */}
                    <div className="bg-gray-950 rounded-xl p-4">
                      <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-gray-400 mb-1.5">
                        Estimated New Patients
                      </p>

                      <motion.p
                        key={estimatedPatients}
                        initial={{
                          opacity: 0.5,
                          y: 4,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.18,
                        }}
                        className="text-[28px] font-extrabold tracking-[-0.03em] text-white leading-none"
                      >
                        {estimatedPatients}
                      </motion.p>

                      <p className="text-[13px] text-white mt-1.5">
                        Based on a 50% lead-to-patient rate
                      </p>
                    </div>

                    {/* Panel 3: Potential Revenue */}
                    <div className="border border-blue-100 bg-blue-50 rounded-xl p-4">
                      <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-blue-400 mb-1">
                        Potential New Patient Revenue
                      </p>

                      <motion.p
                        key={potentialRevenue}
                        initial={{
                          opacity: 0.5,
                          y: 4,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.18,
                        }}
                        className="text-[22px] font-extrabold tracking-[-0.03em] text-blue-700 leading-none"
                      >
                        ${potentialRevenue.toLocaleString()}
                      </motion.p>

                      <p className="text-[13px] text-gray-400 mt-1.5">
                        Potential monthly revenue from estimated new patients
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer disclaimer */}
                <div className="px-7 py-3 bg-gray-50 border-t border-gray-100">
                  <p className="text-[12px] text-gray-500 leading-relaxed">
                    Estimates are based on a $75 cost per phone lead and
                    an assumed 50% phone-lead-to-patient conversion rate.
                    Actual results vary by market, competition, treatment
                    mix, landing pages, budget, and follow-up.
                  </p>
                </div>

                {/* CTA */}
                <div className="px-7 py-5 bg-white border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setShowPopup(true)}
                    className="w-full bg-gradient-to-tr from-black via-[#090040] to-[#483aa0] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    Get My Free $250 Dental Marketing Audit →
                  </button>
                </div>

                {/* Lead Popup */}
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
      </section>

      <TimedAuditPopup
        delaySeconds={30}
        onBookClick={() => setShowBooking(true)}
      />

      {/* ── Booking Modal ── */}
      <MicrosoftBooking
        showBooking={showBooking}
        setShowBooking={setShowBooking}
      />
    </>
  )
}

/* ── Slider sub-component ── */
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

      {/* Scoped slider thumb styles */}
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

/* ── Growth Calculator ── */
function calculateGrowth(
  monthlyBudget: number,
  patientValue: number
) {
  // Fixed planning assumptions
  const CPL = 75
  const PATIENT_CONVERSION_RATE = 0.50

  // Monthly budget ÷ cost per phone lead
  const expectedLeads = Math.floor(
    monthlyBudget / CPL
  )

  // Expected phone leads × 50% conversion rate
  const estimatedPatients = Math.floor(
    expectedLeads * PATIENT_CONVERSION_RATE
  )

  // Estimated patients × average new patient value
  const potentialRevenue =
    estimatedPatients * patientValue

  return {
    expectedLeads,
    estimatedPatients,
    potentialRevenue,
    cpl: CPL,
    conversionRate: PATIENT_CONVERSION_RATE,
  }
}