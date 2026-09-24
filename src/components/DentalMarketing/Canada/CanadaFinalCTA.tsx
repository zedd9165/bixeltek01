'use client'

import React, { Suspense } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'
import CanadaAuditForm from './CanadaAuditForm'

export default function CanadaFinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-gray-50/80 relative overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Pitch & Contact Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 border border-blue-200 rounded-full px-3.5 py-1.5 bg-blue-50/80">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-blue-900 uppercase">
                TAKE THE NEXT STEP
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
              Ready to Fill Your Dental Practice Schedule With{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                High-Value Patients?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Every month you delay is another month your local competitors capture the patients searching for dental care in your city. Request your free $250 dental growth audit today.
            </p>

            {/* Quick Benefits Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                <span>Custom audit of your local search & competitor landscape</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                <span>30-minute 1-on-1 strategy call with our Canadian dental team</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                <span>Zero sales pressure and zero obligation to hire us</span>
              </div>
            </div>

            {/* Direct Contact Options */}
            <div className="pt-6 border-t border-gray-200/80 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Or Reach Our Canadian Team Directly:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-1">
                <a
                  href="tel:+14375252301"
                  className="inline-flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs hover:border-blue-300 transition-colors text-sm font-bold text-gray-900"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <FaPhoneAlt size={12} />
                  </div>
                  <span>+1 (437) 525-2301</span>
                </a>

                <a
                  href="mailto:connect@bixeltekglobal.com"
                  className="inline-flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs hover:border-blue-300 transition-colors text-sm font-bold text-gray-900"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <FaEnvelope size={12} />
                  </div>
                  <span>connect@bixeltekglobal.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Audit Form */}
          <div className="lg:col-span-6 w-full">
            <Suspense fallback={<div className="h-96 rounded-2xl bg-white animate-pulse" />}>
              <CanadaAuditForm id="final-audit-form" sourceSection="final" />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}

