'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import { FaArrowRight, FaShieldAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa'
import * as fbq from '@/lib/fpixel'

interface CanadaAuditFormProps {
  id?: string
  sourceSection?: 'hero' | 'final' | 'modal'
  onSuccess?: () => void
}

export default function CanadaAuditForm({
  id = 'audit-form',
  sourceSection = 'hero',
  onSuccess,
}: CanadaAuditFormProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [formData, setFormData] = useState({
    firstName: '',
    practiceName: '',
    email: '',
    phone: '',
    website: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const hasFiredLead = useRef(false)

  // Capture UTM parameters from URL query string
  const utmSource = searchParams?.get('utm_source') || ''
  const utmMedium = searchParams?.get('utm_medium') || ''
  const utmCampaign = searchParams?.get('utm_campaign') || ''
  const utmContent = searchParams?.get('utm_content') || ''
  const utmTerm = searchParams?.get('utm_term') || ''
  const fbclid = searchParams?.get('fbclid') || ''

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Prevent duplicate submission while already submitting
    if (isSubmitting) return

    // Validation
    const trimmedFirstName = formData.firstName.trim()
    const trimmedPracticeName = formData.practiceName.trim()
    const trimmedEmail = formData.email.trim()
    const trimmedPhone = formData.phone.trim()
    const trimmedWebsite = formData.website.trim()

    if (!trimmedFirstName || !trimmedPracticeName || !trimmedEmail || !trimmedPhone) {
      toast.error('Please fill in all required fields.')
      return
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmedEmail)) {
      toast.error('Please enter a valid email address.')
      return
    }

    // Basic phone validation (at least 7 digits)
    const phoneDigits = trimmedPhone.replace(/\D/g, '')
    if (phoneDigits.length < 7) {
      toast.error('Please enter a valid Canadian or North American phone number.')
      return
    }

    setIsSubmitting(true)
    const loadingToast = toast.loading('Submitting your audit request...')

    try {
      const payload = {
        firstName: trimmedFirstName,
        lastName: '',
        name: trimmedFirstName,
        company: trimmedPracticeName,
        email: trimmedEmail,
        phone: trimmedPhone,
        website: trimmedWebsite,
        subject: 'Dental Marketing - Canada Audit Form Submission',
        city: 'Canada',
        country: 'Canada',
        services: 'Free $250 Dental Growth Audit (Canada Paid Landing Page)',
        message: `
Audit Request Source: ${sourceSection}
Practice Name: ${trimmedPracticeName}
Contact Name: ${trimmedFirstName}
Email: ${trimmedEmail}
Phone: ${trimmedPhone}
Website: ${trimmedWebsite || 'Not provided'}
Target Market: Canadian Dental Practice
Attribution Data:
- UTM Source: ${utmSource || 'direct'}
- UTM Medium: ${utmMedium || 'none'}
- UTM Campaign: ${utmCampaign || 'none'}
- UTM Content: ${utmContent || 'none'}
- UTM Term: ${utmTerm || 'none'}
- FBCLID: ${fbclid || 'none'}
        `.trim(),
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        utm_content: utmContent,
        utm_term: utmTerm,
        fbclid: fbclid,
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result.error || 'Submission failed. Please try again.')
      }

      // Successful Form Submission -> Trigger Tracking (Strictly only once)
      if (!hasFiredLead.current) {
        hasFiredLead.current = true

        // 1. Meta Pixel Lead Event
        try {
          if (typeof window !== 'undefined') {
            fbq.event('Lead', {
              content_name: 'Free $250 Dental Growth Audit - Canada',
              content_category: 'Dental Marketing Canada',
              currency: 'CAD',
              value: 250,
            })
          }
        } catch (err) {
          console.warn('Meta Pixel event failed to fire:', err)
        }

        // 2. Google Analytics (GA4) generate_lead event
        try {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            ;(window as any).gtag('event', 'generate_lead', {
              event_category: 'Dental Growth Audit',
              event_label: 'Canada Paid Meta Landing Page',
              value: 250,
              currency: 'CAD',
            })
          }
        } catch (err) {
          console.warn('GA4 generate_lead event failed to fire:', err)
        }

        // 3. Google Tag Manager dataLayer event
        try {
          if (typeof window !== 'undefined') {
            ;(window as any).dataLayer = (window as any).dataLayer || []
            ;(window as any).dataLayer.push({
              event: 'generate_lead',
              form_name: 'Free $250 Dental Growth Audit',
              source_section: sourceSection,
            })
          }
        } catch (err) {
          console.warn('GTM dataLayer event failed to fire:', err)
        }
      }

      toast.success('Your audit request has been received! Our team will contact you shortly.', {
        id: loadingToast,
        duration: 5000,
      })

      if (onSuccess) {
        onSuccess()
      }

      // Smooth transition to thank you page
      setTimeout(() => {
        router.push('/thank-you')
      }, 1200)
    } catch (error: any) {
      toast.error(error.message || 'Failed to submit. Please check your information and try again.', {
        id: loadingToast,
        duration: 6000,
      })
      setIsSubmitting(false)
      // Note: formData is deliberately NOT reset here so user does not lose entered data!
    }
  }

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-950 placeholder-gray-400 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all duration-200 shadow-xs'

  const labelClass = 'block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5'

  return (
    <div
      id={id}
      className="relative rounded-2xl md:rounded-3xl border border-blue-100 bg-white/95 p-6 sm:p-8 shadow-[0_12px_44px_rgba(26,86,219,0.08)] backdrop-blur-sm"
    >
      {/* Decorative top accent bar */}
      <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-t-full" />

      {/* Form Header */}
      <div className="mb-6 pt-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
          <FaCheckCircle className="text-blue-600 text-[11px]" />
          <span>Limited to 1 Clinic Per City</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight leading-tight">
          Get Your Free $250 Dental Growth Audit
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
          See where your practice may be losing patient opportunities and what we would prioritize first.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Row 1: First Name & Practice Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor={`firstName-${id}`} className={labelClass}>
              First Name <span className="text-blue-600">*</span>
            </label>
            <input
              id={`firstName-${id}`}
              type="text"
              name="firstName"
              required
              autoComplete="given-name"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Dr. Sarah"
              className={inputClass}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor={`practiceName-${id}`} className={labelClass}>
              Practice Name <span className="text-blue-600">*</span>
            </label>
            <input
              id={`practiceName-${id}`}
              type="text"
              name="practiceName"
              required
              autoComplete="organization"
              value={formData.practiceName}
              onChange={handleChange}
              placeholder="Maple Dental Care"
              className={inputClass}
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Row 2: Work / Practice Email & Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor={`email-${id}`} className={labelClass}>
              Practice Email <span className="text-blue-600">*</span>
            </label>
            <input
              id={`email-${id}`}
              type="email"
              inputMode="email"
              name="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="doctor@mapledental.ca"
              className={inputClass}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor={`phone-${id}`} className={labelClass}>
              Phone Number <span className="text-blue-600">*</span>
            </label>
            <input
              id={`phone-${id}`}
              type="tel"
              inputMode="tel"
              name="phone"
              required
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(416) 555-0199"
              className={inputClass}
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Row 3: Website URL (Optional) */}
        <div>
          <label htmlFor={`website-${id}`} className={labelClass}>
            Practice Website <span className="text-gray-400 font-normal lowercase">(optional)</span>
          </label>
          <input
            id={`website-${id}`}
            type="url"
            inputMode="url"
            name="website"
            autoComplete="url"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://mapledental.ca"
            className={inputClass}
            disabled={isSubmitting}
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={!isSubmitting ? { scale: 1.01 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          type="submit"
          disabled={isSubmitting}
          className="w-full min-h-[52px] mt-2 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 hover:from-blue-800 hover:to-cyan-700 text-white py-3.5 px-6 rounded-xl font-extrabold text-[15px] sm:text-base tracking-wide transition-all duration-200 shadow-md shadow-blue-600/25 flex items-center justify-center gap-2.5 group cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="animate-spin text-base" />
              <span>PROCESSING YOUR AUDIT...</span>
            </>
          ) : (
            <>
              <span>GET MY FREE AUDIT</span>
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-150" />
            </>
          )}
        </motion.button>

        {/* Microcopy & Trust reassurance */}
        <p className="text-xs text-gray-500 text-center leading-normal pt-1">
          No obligation. 30-minute consultation. Our team will contact you to schedule your audit.
        </p>

        <div className="pt-2 border-t border-gray-100 flex items-center justify-center gap-2 text-center">
          <FaShieldAlt className="text-blue-600 text-xs flex-shrink-0" />
          <span className="text-[11px] text-gray-500 font-medium">
            100% confidential. Your details are never shared or sold.
          </span>
        </div>
      </form>
    </div>
  )
}

