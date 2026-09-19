'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FaArrowRight,
  FaCalendarCheck,
  FaChartLine,
  FaCheck,
  FaCheckCircle,
  FaComments,
  FaDownload,
  FaLock,
  FaPhoneAlt,
  FaSearch,
  FaTimes,
} from 'react-icons/fa'
import dentalGrowth from '@/assets/dental-growth.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

/* -------------------------------------------------------------------------- */
/* Email validation                                                           */
/* -------------------------------------------------------------------------- */

const PERSONAL_EMAIL_DOMAINS = [
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'yahoo.co.uk',
  'hotmail.com',
  'outlook.com',
  'live.com',
  'msn.com',
  'icloud.com',
  'me.com',
  'mac.com',
  'aol.com',
  'proton.me',
  'protonmail.com',
  'zoho.com',
  'gmx.com',
  'mail.com',
  'yandex.com',
]

const isValidWorkEmail = (email: string): boolean => {
  const normalizedEmail = email.trim().toLowerCase()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(normalizedEmail)) return false

  const parts = normalizedEmail.split('@')

  if (parts.length !== 2) return false

  const domain = parts[1]

  return !PERSONAL_EMAIL_DOMAINS.includes(domain)
}


const trackAnalyticsEvent = (
  eventName: string,
  params?: Record<string, unknown>,
) => {
  if (typeof window === 'undefined') return

  try {
    if ((window as any).dataLayer) {
      ;(window as any).dataLayer.push({
        event: eventName,
        ...params,
      })
    }

    if ((window as any).gtag) {
      ;(window as any).gtag('event', eventName, params)
    }
  } catch {
    // Analytics should never interfere with the page.
  }
}

/* -------------------------------------------------------------------------- */
/* Download                                                                   */
/* -------------------------------------------------------------------------- */

const triggerPlaybookDownload = () => {
  const link = document.createElement('a')

  link.href = '/downloads/dental-growth-playbook.pdf'
  link.download = 'BixDental_Growth_Playbook_2026.pdf'

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/* -------------------------------------------------------------------------- */
/* Content                                                                    */
/* -------------------------------------------------------------------------- */

const PLAYBOOK_SECTIONS = [
  {
    number: '01',
    icon: FaSearch,
    title: 'Attract the right patients',
    description:
      'Google Ads, local SEO, Google Business Profile and procedure-specific demand generation.',
    items: ['Google Ads', 'Local SEO', 'Google Business Profile'],
  },
  {
    number: '02',
    icon: FaComments,
    title: 'Turn visits into enquiries',
    description:
      'Landing pages, trust signals and lead capture systems designed around how patients actually decide.',
    items: ['Procedure pages', 'Lead capture', 'Reviews & trust'],
  },
  {
    number: '03',
    icon: FaCalendarCheck,
    title: 'Turn enquiries into appointments',
    description:
      'Booking, speed-to-lead, WhatsApp, missed-call recovery and follow-up systems that reduce leakage.',
    items: ['Online booking', 'WhatsApp', 'Missed-call recovery'],
  },
  {
    number: '04',
    icon: FaChartLine,
    title: 'Measure what drives revenue',
    description:
      'Track the complete journey so marketing decisions are connected to appointments and revenue.',
    items: ['Attribution', 'Call tracking', 'Multi-location scaling'],
  },
]

const JOURNEY = [
  'Demand',
  'Conversion',
  'Capture',
  'Booking',
  'Follow-up',
  'Attendance',
  'Revenue',
]

const WEEKS = [
  {
    week: '01',
    title: 'Fix the foundation',
    body: 'Strengthen your local presence, website experience and trust signals.',
  },
  {
    week: '02',
    title: 'Connect tracking + capture',
    body: 'Make sure enquiries are captured, attributed and owned by the right person.',
  },
  {
    week: '03',
    title: 'Improve booking + follow-up',
    body: 'Reduce lead leakage with scheduling, WhatsApp and missed-call recovery.',
  },
  {
    week: '04',
    title: 'Launch + optimise',
    body: 'Put acquisition behind the right procedures and optimise against real outcomes.',
  },
]

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function DentalGrowthPlaybookClient() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    clinic: '',
    phone: '',
  })

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')

  const [errorMessage, setErrorMessage] = useState('')

  /* ------------------------------------------------------------------------ */
  /* Analytics                                                                 */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    trackAnalyticsEvent('playbook_page_view', {
      page: '/marketing/dental-growth-playbook-2026',
      title: 'Dental Growth Playbook 2026',
    })
  }, [])

  /* ------------------------------------------------------------------------ */
  /* Modal                                                                     */
  /* ------------------------------------------------------------------------ */

  const handleOpenModal = useCallback((triggerLocation = 'hero') => {
      setErrorMessage('')
      setIsModalOpen(true)

      trackAnalyticsEvent('playbook_cta_click', {
        triggerLocation,
      })

      trackAnalyticsEvent('playbook_form_open', {
        triggerLocation,
      })
    }, [])

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false)

    if (status === 'error') {
      setStatus('idle')
    }
  }, [status])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        handleCloseModal()
      }
    }

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isModalOpen, handleCloseModal])

  /* ------------------------------------------------------------------------ */
  /* Form                                                                      */
  /* ------------------------------------------------------------------------ */

  const updateField = (
    field: keyof typeof formData,
    value: string,
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }))

    if (status === 'error') {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const name = formData.name.trim()
    const email = formData.email.trim().toLowerCase()
    const clinic = formData.clinic.trim()
    const phone = formData.phone.trim()

    if (!name || !email || !clinic || !phone) {
      setErrorMessage('Please fill in all required fields.')
      setStatus('error')
      return
    }

    if (!isValidWorkEmail(email)) {
      setErrorMessage(
        'Please enter your dental practice or work email address. Personal email addresses are not accepted.',
      )
      setStatus('error')
      return
    }

    const phoneDigits = phone.replace(/\D/g, '')

    if (phoneDigits.length < 7) {
      setErrorMessage('Please enter a valid practice phone number.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    trackAnalyticsEvent('playbook_form_submit', {
      clinic,
      emailDomain: email.split('@')[1],
    })

    try {
      const response = await fetch('/api/ebook-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          clinic,
          phone,
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)

        throw new Error(
          data?.error ||
            'Failed to submit details. Please try again.',
        )
      }

      triggerPlaybookDownload()

      trackAnalyticsEvent('playbook_download', {
        clinic,
        fileName: 'BixDental_Growth_Playbook_2026.pdf',
      })
       window.setTimeout(() => {
                router.push('/thank-you');
            }, 1000)
      setStatus('success')
    } catch (error: any) {
      setErrorMessage(
        error?.message ||
          'Something went wrong. Please check your connection and try again.',
      )

      setStatus('error')
    }
  }

  /* ------------------------------------------------------------------------ */
  /* UI                                                                        */
  /* ------------------------------------------------------------------------ */

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white text-[#111318] antialiased selection:bg-[#2563EB] selection:text-white">
      {/* ==================================================================== */}
      {/* HERO                                                                 */}
      {/* ==================================================================== */}

      <section className="relative overflow-hidden bg-[#0B1020] text-white">
        {/* Ambient background glows (strictly contained) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-32 top-0 h-[400px] w-[400px] max-w-full rounded-full bg-[#2563EB]/20 blur-[100px]" />
          <div className="absolute -right-32 -top-24 h-[450px] w-[450px] max-w-full rounded-full bg-[#4F46E5]/20 blur-[110px]" />
          <div className="absolute -bottom-40 left-1/2 h-[350px] w-[500px] max-w-full -translate-x-1/2 rounded-full bg-[#2563EB]/10 blur-[100px]" />

          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 pb-16 pt-5 sm:pb-20 md:pb-24 md:pt-8">
          {/* Minimal brand header */}
          <div className="mb-10 sm:mb-14 md:mb-16 flex items-center justify-between">
            <Image
              src="/BIXELTEKLOGO.png"
              width={100}
              height={40}
              alt="Bixeltek Logo"
              className="h-8 sm:h-9 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => handleOpenModal('top-cta')}
              className="group hidden items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white md:flex cursor-pointer"
            >
              <span>Get the playbook</span>
              <FaArrowRight
                size={10}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            {/* Hero copy */}
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                Free · 2026 Dental Growth Playbook
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="max-w-4xl text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.85rem] text-white"
              >
                The dental growth system for{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  more booked patients.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg sm:leading-8"
              >
                A practical 31-page playbook showing how dental practices can
                connect acquisition, conversion, lead capture, booking,
                follow-up and measurement into one growth system.
              </motion.p>

              {/* Action Buttons & Microcopy (Mobile Friendly, No Overflow) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.19 }}
                className="mt-8 flex flex-col items-stretch sm:items-start md:flex-row md:items-center gap-3.5 sm:gap-4"
              >
                <button
                  type="button"
                  onClick={() => handleOpenModal('hero-primary')}
                  className="group inline-flex min-h-[50px] sm:min-h-[52px] w-full md:w-auto items-center justify-center gap-3 rounded-xl bg-white px-6 sm:px-7 text-sm font-bold text-[#0B1020] shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-0.5 hover:bg-blue-50 cursor-pointer"
                >
                  <span>Download the free playbook</span>
                  <FaArrowRight
                    size={11}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-white/50 pt-0.5 md:pt-0">
                  <FaLock size={10} className="flex-shrink-0" />
                  <span>No spam. Just the playbook.</span>
                </div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-4 md:gap-x-7 gap-y-2.5 border-t border-white/10 pt-5 sm:pt-6 text-xs sm:text-sm text-white/60"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>
                    <strong className="text-white font-semibold">100+</strong>{' '}
                    dental clinics supported
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span>
                    Dental-focused since{' '}
                    <strong className="text-white font-semibold">2021</strong>
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span>
                    <strong className="text-white font-semibold">
                      Google Partner
                    </strong>{' '}
                    agency
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Playbook Visual (Safely contained, zero overflow) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[450px]"
            >
              {/* Contained decorative glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[80px]" />

              {/* Subtle back pages (hidden on mobile to prevent any side clipping) */}
              <div className="pointer-events-none absolute left-2 top-2 h-full w-[96%] rounded-[18px] border border-white/10 bg-white/[0.04] hidden md:block" />

              {/* Main cover */}
              <button
                type="button"
                onClick={() => handleOpenModal('hero-playbook')}
                aria-label="Open the playbook download form"
                className="group relative block aspect-[0.76] w-full overflow-hidden rounded-[18px] border border-white/15 bg-[#101827] text-left shadow-[0_25px_70px_rgba(0,0,0,0.45)] cursor-pointer"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.38),transparent_34%),linear-gradient(145deg,#172033,#090D17)]" />

                <div className="relative flex h-full flex-col justify-between p-5 sm:p-6 md:p-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                        BixDental
                      </span>

                      <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-white/40">
                        2026
                      </span>
                    </div>

                    <div className="mt-8 sm:mt-10 md:mt-14">
                      <div className="mb-3 sm:mb-4 h-1 w-10 sm:w-12 rounded-full bg-blue-500" />

                      <p className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300">
                        Dental Growth Playbook
                      </p>

                      <h2 className="mt-2.5 sm:mt-3 text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-tight text-white">
                        From first click to{' '}
                        <span className="text-blue-400">
                          booked patient.
                        </span>
                      </h2>

                      <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-white/50">
                        The practical framework for modern dental patient
                        acquisition, conversion and follow-up.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-end justify-between border-t border-white/10 pt-4">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-white/30">
                        Edition
                      </p>
                      <p className="mt-0.5 text-xs font-medium text-white/70">
                        2026
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[9px] uppercase tracking-wider text-white/30">
                        Format
                      </p>
                      <p className="mt-0.5 text-xs font-medium text-white/70">
                        31-page PDF
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-blue-500/0 transition-colors duration-300 group-hover:bg-blue-500/[0.04]" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* INTRO / POSITIONING                                                  */}
      {/* ==================================================================== */}

      <section className="relative bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 left-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"
              />

              <div className="relative overflow-hidden rounded-2xl border border-black/[0.07] bg-[#F5F7FA] shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
                <img
                  src={dentalGrowth.src}
                  alt="Dental practice growth and patient acquisition"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 right-3 sm:right-5 rounded-xl border border-black/[0.06] bg-white px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-xs font-semibold text-[#111318]">
                    The complete growth journey
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                The problem
              </p>

              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#111318]">
                More traffic is not the same thing as more{' '}
                <span className="text-blue-600">patients.</span>
              </h2>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-black/60 md:text-lg md:leading-8">
                A practice can generate clicks and still lose opportunities
                through weak landing pages, slow follow-up, missed calls,
                poor booking experiences or incomplete attribution.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-wrap gap-2">
                {[
                  'Acquisition',
                  'Conversion',
                  'Lead capture',
                  'Booking',
                  'Follow-up',
                  'Measurement',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-[#F7F8FA] px-3 py-1.5 text-xs font-medium text-black/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* WHAT'S INSIDE                                                        */}
      {/* ==================================================================== */}

      <section className="bg-[#F5F7FA] py-16 sm:py-20 md:py-24 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Inside the playbook
              </p>

              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111318]">
                Everything between the click and the chair.
              </h2>
            </div>

            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-black/55">
              A connected framework rather than another list of disconnected
              marketing tactics.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 md:mt-14 grid gap-4 sm:gap-5 md:grid-cols-2">
            {PLAYBOOK_SECTIONS.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-black/[0.07] bg-white p-5 sm:p-7 md:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/15">
                      <Icon size={15} />
                    </div>

                    <span className="text-xs font-semibold tabular-nums text-black/20">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-bold tracking-tight text-[#111318]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 max-w-lg text-xs sm:text-sm leading-relaxed text-black/60">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                    {item.items.map((subItem) => (
                      <span
                        key={subItem}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F7FA] px-2.5 py-1 text-[11px] font-medium text-black/60"
                      >
                        <FaCheck size={7} className="text-blue-600 flex-shrink-0" />
                        <span>{subItem}</span>
                      </span>
                    ))}
                  </div>

                  <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-blue-500/[0.035] transition-transform duration-500 group-hover:scale-150" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 30 DAY PLAN                                                          */}
      {/* ==================================================================== */}

      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Inside the final chapter
              </p>

              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-[#111318]">
                A framework you can actually start using.
              </h2>

              <p className="mt-4 max-w-md text-xs sm:text-sm leading-relaxed text-black/55 sm:text-base">
                The playbook finishes with a 30-day quick-start plan that
                turns the framework into a sequence of practical actions.
              </p>
            </div>

            <div className="relative">
              <div className="absolute bottom-5 left-[21px] sm:left-[23px] top-5 w-px bg-black/10" />

              <div className="space-y-3">
                {WEEKS.map((item, index) => (
                  <motion.div
                    key={item.week}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.05,
                    }}
                    className="relative flex items-start gap-4 sm:gap-5 rounded-2xl border border-black/[0.07] bg-[#F8F9FB] p-4 sm:p-5 md:p-6"
                  >
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[9px] font-bold text-white ring-4 sm:ring-8 ring-white">
                      {item.week}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold text-[#111318] sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs sm:text-sm leading-relaxed text-black/60">
                        {item.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* FINAL CTA                                                             */}
      {/* ==================================================================== */}

      <section className="relative overflow-hidden bg-[#F5F7FA] py-16 sm:py-20 md:py-24 border-t border-gray-100">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[500px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]"
        />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <FaDownload size={16} />
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Free download
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl text-2xl sm:text-3xl md:text-4xl font-bold leading-snug tracking-tight text-[#111318]">
            Download the complete dental growth playbook.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm leading-relaxed text-black/60 sm:text-base">
            Get the 31-page BixDental Growth Playbook 2026 and use it to
            identify where your patient acquisition journey is working — and
            where opportunities may be getting lost.
          </p>

          <div className="flex items-center justify-center mt-6">
            <a
              href="https://www.google.com/partners/agency?id=2188074075"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-200 hover:scale-[1.03]"
            >
              <img
                src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                alt="Google Partner Badge"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </a>
          </div>

          <button
            type="button"
            onClick={() => handleOpenModal('final-cta')}
            className="group mt-6 inline-flex min-h-[50px] sm:min-h-[52px] w-full md:w-auto items-center justify-center gap-3 rounded-xl bg-[#111318] px-8 text-sm font-bold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:bg-blue-600 cursor-pointer"
          >
            <span>Download the free playbook</span>
            <FaArrowRight
              size={10}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          <p className="mt-3 text-xs text-black/40">
            Free PDF · 31 pages · Built for dental practices
          </p>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* MODAL (Responsive, Accessible, No Auto-Zoom)                         */}
      {/* ==================================================================== */}

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-3 sm:p-6">
            {/* Overlay */}
            <motion.button
              type="button"
              aria-label="Close download form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={handleCloseModal}
              className="fixed inset-0 cursor-default bg-[#050914]/75 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="playbook-modal-title"
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 16,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 16,
              }}
              transition={{
                duration: 0.18,
                ease: 'easeOut',
              }}
              className="relative z-10 my-auto w-full max-w-[860px] overflow-hidden rounded-2xl sm:rounded-[24px] border border-black/10 bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={handleCloseModal}
                aria-label="Close"
                className="absolute right-3.5 top-3.5 z-20 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-black/[0.05] text-black/50 transition-colors hover:bg-black/[0.1] hover:text-black cursor-pointer"
              >
                <FaTimes size={13} />
              </button>

                <div className="grid md:grid-cols-[0.85fr_1.15fr]">
                  {/* Modal Sidebar (desktop only) */}
                  <div className="relative hidden overflow-hidden bg-[#0B1020] p-8 text-white md:block lg:p-10">
                    <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-[70px] pointer-events-none" />

                    <div className="relative flex h-full flex-col justify-between">
                      <div>
                        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-400">
                          Free resource
                        </p>

                        <h3 className="mt-3 text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-white">
                          The Dental Growth Playbook 2026
                        </h3>

                        <p className="mt-4 text-xs lg:text-sm leading-relaxed text-white/60">
                          31 pages covering the complete journey from demand
                          generation to booked and retained patients.
                        </p>
                      </div>

                      <div className="mt-10">
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
                          Inside
                        </p>

                        <div className="space-y-2.5">
                          {[
                            'Google Ads & local SEO',
                            'Landing pages & conversion',
                            'Lead capture & booking',
                            'Follow-up & attribution',
                          ].map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-2.5 text-xs text-white/70"
                            >
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/15 text-blue-400 flex-shrink-0">
                                <FaCheck size={7} />
                              </span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Modal Form */}
                  <div className="p-5 sm:p-7 lg:p-9">
                    <div className="max-w-md">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 md:hidden">
                        Free 31-page playbook
                      </p>

                      <h3
                        id="playbook-modal-title"
                        className="text-xl sm:text-2xl font-bold tracking-tight text-[#111318]"
                      >
                        Get the playbook.
                      </h3>

                      <p className="mt-1.5 text-xs text-black/55 leading-relaxed">
                        Enter your practice details below to receive the PDF
                        instantly.
                      </p>

                      {status === 'error' && errorMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-xs leading-relaxed text-rose-700"
                        >
                          {errorMessage}
                        </motion.div>
                      )}

                      <form
                        onSubmit={handleSubmit}
                        className="mt-5 space-y-3 sm:space-y-3.5"
                      >
                        {/* Name */}
                        <div>
                          <label
                            htmlFor="pb-name"
                            className="mb-1 block text-xs font-semibold text-[#111318]"
                          >
                            Your name <span className="text-rose-500">*</span>
                          </label>

                          <input
                            id="pb-name"
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="Dr. Sarah Mitchell"
                            value={formData.name}
                            onChange={(event) =>
                              updateField('name', event.target.value)
                            }
                            className="h-10 sm:h-11 w-full rounded-xl border border-black/10 bg-[#F8F9FB] px-3.5 text-base md:text-sm text-[#111318] outline-none transition-all placeholder:text-black/30 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/15"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="pb-email"
                            className="mb-1 block text-xs font-semibold text-[#111318]"
                          >
                            Work email <span className="text-rose-500">*</span>
                          </label>

                          <input
                            id="pb-email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="doctor@yourpractice.com"
                            value={formData.email}
                            onChange={(event) =>
                              updateField('email', event.target.value)
                            }
                            className="h-10 sm:h-11 w-full rounded-xl border border-black/10 bg-[#F8F9FB] px-3.5 text-base md:text-sm text-[#111318] outline-none transition-all placeholder:text-black/30 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/15"
                          />

                          <p className="mt-1 text-[10px] leading-4 text-black/40">
                            Please use your practice email (no personal webmail).
                          </p>
                        </div>

                        {/* Practice */}
                        <div>
                          <label
                            htmlFor="pb-clinic"
                            className="mb-1 block text-xs font-semibold text-[#111318]"
                          >
                            Dental practice name <span className="text-rose-500">*</span>
                          </label>

                          <input
                            id="pb-clinic"
                            type="text"
                            required
                            autoComplete="organization"
                            placeholder="Mitchell Family Dental"
                            value={formData.clinic}
                            onChange={(event) =>
                              updateField('clinic', event.target.value)
                            }
                            className="h-10 sm:h-11 w-full rounded-xl border border-black/10 bg-[#F8F9FB] px-3.5 text-base md:text-sm text-[#111318] outline-none transition-all placeholder:text-black/30 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/15"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label
                            htmlFor="pb-phone"
                            className="mb-1 block text-xs font-semibold text-[#111318]"
                          >
                            Your phone number <span className="text-rose-500">*</span>
                          </label>

                          <div className="relative">
                            <FaPhoneAlt
                              size={10}
                              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-black/30"
                            />

                            <input
                              id="pb-phone"
                              type="tel"
                              required
                              autoComplete="tel"
                              placeholder="+1 (555) 000-0000"
                              value={formData.phone}
                              onChange={(event) =>
                                updateField('phone', event.target.value)
                              }
                              className="h-10 sm:h-11 w-full rounded-xl border border-black/10 bg-[#F8F9FB] pl-9 pr-3.5 text-base md:text-sm text-[#111318] outline-none transition-all placeholder:text-black/30 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/15"
                            />
                          </div>
                        </div>

                        {/* Submit */}
                        <div className="pt-1.5">
                          <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="flex h-11 sm:h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-blue-600 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                          >
                            {status === 'loading' ? (
                              <>
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                <span>Preparing your playbook…</span>
                              </>
                            ) : (
                              <>
                                <span>Download the free playbook</span>
                                <FaDownload size={11} />
                              </>
                            )}
                          </button>
                        </div>

                        <p className="flex items-center justify-center gap-1.5 pt-0.5 text-[10px] text-black/40">
                          <FaLock size={8} />
                          <span>
                            Your information is only used to deliver the resource.
                          </span>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}