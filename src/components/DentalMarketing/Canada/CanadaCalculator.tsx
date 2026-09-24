'use client'

import React, { useState } from 'react'
import { FaChartLine, FaArrowRight, FaInfoCircle, FaPhoneAlt, FaUserCheck, FaDollarSign } from 'react-icons/fa'

export default function CanadaCalculator() {
  const [monthlyBudget, setMonthlyBudget] = useState(3000)
  const [patientValue, setPatientValue] = useState(800)

  // Planning model assumptions
  const costPerEnquiry = 75
  const enquiryToPatientRate = 0.5

  const expectedLeads = Math.floor(monthlyBudget / costPerEnquiry)
  const estimatedPatients = Math.floor(expectedLeads * enquiryToPatientRate)
  const potentialRevenue = estimatedPatients * patientValue

  const scrollToAudit = (e: React.MouseEvent) => {
    e.preventDefault()
    const formElement = document.getElementById('hero-audit-form') || document.getElementById('audit-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      const firstInput = formElement.querySelector('input')
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 500)
      }
    }
  }

  const budgetPct = Math.round(((monthlyBudget - 1000) / (12000 - 1000)) * 100)
  const valuePct = Math.round(((patientValue - 300) / (3000 - 300)) * 100)

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-blue-600 mb-3">
            ESTIMATED RETURN MODEL
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight mb-4">
            Dental Practice Patient{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Growth Calculator
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Planning tool: model potential patient phone enquiries, scheduled consultations, and estimated treatment production based on your monthly budget. These figures are planning benchmarks and not guaranteed results.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] overflow-hidden">
          {/* Card Top Title Bar */}
          <div className="flex items-center gap-3 px-6 sm:px-8 py-5 border-b border-gray-100 bg-gray-50/60">
            <div className="w-10 h-10 rounded-xl bg-gray-950 text-white flex items-center justify-center flex-shrink-0">
              <FaChartLine size={16} />
            </div>
            <div>
              <p className="text-base font-extrabold text-gray-950 tracking-tight">
                Practice Patient Acquisition Planner
              </p>
              <p className="text-xs text-gray-500">
                Adjust sliders to model realistic monthly patient acquisition capacity.
              </p>
            </div>
          </div>

          {/* Calculator Grid: Inputs on Left, Estimated Results on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            {/* Inputs Column */}
            <div className="lg:col-span-6 p-6 sm:p-8 space-y-8">
              {/* Slider 1: Monthly Budget */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs sm:text-sm font-bold text-gray-900">
                    Monthly Google & Meta Ads Budget
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-blue-600 font-mono">
                    ${monthlyBudget.toLocaleString()} CAD
                  </span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={12000}
                  step={500}
                  value={monthlyBudget}
                  onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer outline-none"
                  style={{
                    background: `linear-gradient(to right, #2563eb ${budgetPct}%, #e5e7eb ${budgetPct}%)`,
                  }}
                  aria-label="Monthly Ad Budget"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-2">
                  <span>$1,000 / mo</span>
                  <span>$6,000</span>
                  <span>$12,000 / mo</span>
                </div>
              </div>

              {/* Slider 2: Patient Lifetime / Case Value */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs sm:text-sm font-bold text-gray-900">
                    Average New Patient Value
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-blue-600 font-mono">
                    ${patientValue.toLocaleString()} CAD
                  </span>
                </div>
                <input
                  type="range"
                  min={300}
                  max={3000}
                  step={50}
                  value={patientValue}
                  onChange={(e) => setPatientValue(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer outline-none"
                  style={{
                    background: `linear-gradient(to right, #2563eb ${valuePct}%, #e5e7eb ${valuePct}%)`,
                  }}
                  aria-label="Average Patient Value"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-2">
                  <span>$300 (Hygiene / General)</span>
                  <span>$1,500</span>
                  <span>$3,000 (Implants / Ortho)</span>
                </div>
              </div>

              {/* Assumptions Box */}
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-3">
                <FaInfoCircle className="text-blue-600 mt-0.5 flex-shrink-0" size={15} />
                <p className="text-xs text-blue-900 leading-relaxed">
                  <strong>Planning Benchmark:</strong> Projections use a baseline $75 cost per phone enquiry and a conservative 50% lead-to-booked-patient rate based on Canadian dental campaign data.
                </p>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-6 p-6 sm:p-8 bg-gray-50/40 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Estimated Monthly Production Model
                </p>

                {/* Metric 1 */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-gray-200/80 shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <FaPhoneAlt size={13} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Estimated Phone Enquiries</p>
                      <p className="text-[11px] text-gray-500">Based on ~$75 CAD target CPL</p>
                    </div>
                  </div>
                  <span className="text-2xl font-extrabold text-gray-950 font-mono">
                    {expectedLeads}
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-gray-200/80 shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <FaUserCheck size={13} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Estimated New Patients Booked</p>
                      <p className="text-[11px] text-gray-500">At 50% enquiry conversion rate</p>
                    </div>
                  </div>
                  <span className="text-2xl font-extrabold text-emerald-600 font-mono">
                    {estimatedPatients}
                  </span>
                </div>

                {/* Metric 3 */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-blue-600 text-white shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 text-white flex items-center justify-center">
                      <FaDollarSign size={14} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Potential Treatment Revenue</p>
                      <p className="text-[11px] text-blue-100">Estimated monthly production</p>
                    </div>
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    ${potentialRevenue.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Calculator CTA */}
              <div className="mt-8 pt-4 border-t border-gray-200">
                <button
                  onClick={scrollToAudit}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-gray-950 hover:bg-blue-600 text-white py-3.5 px-6 rounded-xl font-extrabold text-sm tracking-wide transition-all duration-200 cursor-pointer shadow-sm group"
                >
                  <span>GET MY FREE AUDIT TO VALIDATE THESE PROJECTIONS</span>
                  <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[11px] text-gray-400 text-center mt-3 leading-snug">
                  *Planning Disclaimer: Projections are illustrative planning benchmarks and not a guarantee of patient volume or revenue. Actual outcomes depend on local market competition, procedure mix, search volume, ad spend, and front-desk follow-up speed. The Free $250 Audit provides practice-specific analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

