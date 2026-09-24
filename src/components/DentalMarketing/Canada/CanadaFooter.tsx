'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import Bixeltekblacklogo from '@/assets/Bixeltek Black Logo.png'

export default function CanadaFooter() {
  return (
    <footer className="bg-white border-t border-gray-200/80 py-12 text-gray-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-100">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Image
              src={Bixeltekblacklogo}
              width={140}
              height={38}
              alt="Bixeltek Logo"
              className="h-9 w-auto object-contain"
            />
            <p className="text-gray-500 text-xs mt-1">
              Google Partner Certified Dental Marketing Agency • Canada & USA
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-gray-700">
            <a
              href="tel:+14375252301"
              className="inline-flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <FaPhoneAlt className="text-blue-600" />
              <span>Canada & USA: +1 (437) 525-2301</span>
            </a>
            <a
              href="mailto:connect@bixeltekglobal.com"
              className="inline-flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <FaEnvelope className="text-blue-600" />
              <span>connect@bixeltekglobal.com</span>
            </a>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 text-[11px]">
          <p>© {new Date().getFullYear()} Bixeltek. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gray-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-gray-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

