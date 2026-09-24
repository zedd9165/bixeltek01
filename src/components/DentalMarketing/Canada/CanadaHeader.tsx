'use client'

import React from 'react'
import Image from 'next/image'
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa'
import Bixeltekblacklogo from '@/assets/Bixeltek Black Logo.png'

export default function CanadaHeader() {
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

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src={Bixeltekblacklogo}
            width={160}
            height={44}
            alt="Bixeltek - Dental Marketing Canada"
            priority
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </div>

        {/* Right Action: Phone + Standardized Audit CTA */}
        <div className="flex items-center gap-3 sm:gap-6">
          <a
            href="tel:+14375252301"
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-gray-800 hover:text-blue-600 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <FaPhoneAlt size={12} />
            </div>
            <span>+1 (437) 525-2301</span>
          </a>

          <button
            onClick={scrollToAudit}
            className="inline-flex items-center justify-center gap-2 bg-gray-950 hover:bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 shadow-sm cursor-pointer"
          >
            <span>GET MY FREE AUDIT</span>
            <FaArrowRight size={11} className="hidden sm:inline-block" />
          </button>
        </div>
      </div>
    </header>
  )
}

