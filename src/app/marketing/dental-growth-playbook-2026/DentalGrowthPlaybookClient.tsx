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
    <div className="min-h-screen overflow-x-hidden bg-white text-[#111318] antialiased selection:bg-[#2563EB] selection:text-white">
      {/* ==================================================================== */}
      {/* HERO                                                                 */}
      {/* ==================================================================== */}

      <section className="relative overflow-hidden bg-[#0B1020] text-white">
        {/* Ambient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-[#2563EB]/20 blur-[120px]" />
          <div className="absolute right-[-180px] top-[-150px] h-[600px] w-[600px] rounded-full bg-[#4F46E5]/20 blur-[130px]" />
          <div className="absolute bottom-[-250px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#2563EB]/10 blur-[120px]" />

          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-7 sm:px-8 sm:pb-24 md:px-10 md:pb-28 md:pt-10 lg:px-12">
          {/* Minimal brand */}
          <div className="mb-16 flex items-center justify-between md:mb-20">
          <Image src='/BIXELTEKLOGO.png' width={100} height={40} alt="Bixeltek Logo" className='h-9 w-auto' />
                  <button
              type="button"
              onClick={() => handleOpenModal('top-cta')}
              className="group hidden items-center gap-2 text-sm font-medium text-white/65 transition-colors hover:text-white sm:flex"
            >
              Get the playbook
              <FaArrowRight
                size={10}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            {/* Hero copy */}
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Free · 2026 Dental Growth Playbook
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="max-w-4xl text-[2.9rem] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
              >
                The dental growth system for{' '}
                <span className="text-blue-400">
                  more booked patients.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12 }}
                className="mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8"
              >
                A practical 31-page playbook showing how dental practices can
                connect acquisition, conversion, lead capture, booking,
                follow-up and measurement into one growth system.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.19 }}
                className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <button
                  type="button"
                  onClick={() => handleOpenModal('hero-primary')}
                  className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-white px-6 text-sm font-semibold text-[#0B1020] shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Download the free playbook
                  <FaArrowRight
                    size={11}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <div className="flex items-center gap-2 text-sm text-white/40">
                  <FaLock size={10} />
                  No spam. Just the playbook.
                </div>
              </motion.div>

              {/* Trust */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-sm text-white/45"
              >
                <span>
                  <strong className="text-white/85">100+</strong> dental
                  clinics supported
                </span>

                <span>
                  Dental-focused since{' '}
                  <strong className="text-white/85">2021</strong>
                </span>

                <span>
                  <strong className="text-white/85">Google Partner</strong>{' '}
                  agency
                </span>
              </motion.div>
            </div>

            {/* Playbook visual */}
            <motion.div
              initial={{ opacity: 0, y: 25, rotate: 1 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="relative mx-auto w-full max-w-[470px]"
            >
              {/* Decorative glow */}
              <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[90px]" />

              {/* Back pages */}
              <div className="absolute left-5 top-5 h-full w-[88%] rotate-[4deg] rounded-[18px] border border-white/10 bg-white/[0.04]" />
              <div className="absolute left-2 top-2 h-full w-[92%] rotate-[2deg] rounded-[18px] border border-white/10 bg-white/[0.06]" />

              {/* Main cover */}
              <button
                type="button"
                onClick={() => handleOpenModal('hero-playbook')}
                aria-label="Open the playbook download form"
                className="group relative block aspect-[0.76] w-full overflow-hidden rounded-[18px] border border-white/15 bg-[#101827] text-left shadow-[0_35px_90px_rgba(0,0,0,0.45)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.38),transparent_34%),linear-gradient(145deg,#172033,#090D17)]" />

                <div className="relative flex h-full flex-col justify-between p-7 sm:p-9">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                        BixDental
                      </span>

                      <span className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] font-medium uppercase tracking-wider text-white/40">
                        2026
                      </span>
                    </div>

                    <div className="mt-16 sm:mt-20">
                      <div className="mb-5 h-1 w-12 rounded-full bg-blue-500" />

                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300">
                        Dental Growth Playbook
                      </p>

                      <h2 className="mt-4 max-w-[310px] text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-4xl">
                        From first click to{' '}
                        <span className="text-blue-400">
                          booked patient.
                        </span>
                      </h2>

                      <p className="mt-5 max-w-[290px] text-sm leading-6 text-white/45">
                        The practical framework for modern dental patient
                        acquisition, conversion and follow-up.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-end justify-between border-t border-white/10 pt-5">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/30">
                        Edition
                      </p>
                      <p className="mt-1 text-xs font-medium text-white/65">
                        2026
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-wider text-white/30">
                        Format
                      </p>
                      <p className="mt-1 text-xs font-medium text-white/65">
                        31-page PDF
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover treatment */}
                <div className="absolute inset-0 bg-blue-500/0 transition-colors duration-300 group-hover:bg-blue-500/[0.04]" />
              </button>

              {/* Floating annotation */}
              {/* <div className="absolute -bottom-5 -left-1/ hidden rounded-xl border border-white/10 bg-[#141C2C]/95 px-4 py-3 shadow-2xl backdrop-blur-md sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                    <FaDownload size={11} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/35">
                      Inside
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-white/80">
                      18 growth chapters
                    </p>
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* INTRO / POSITIONING                                                  */}
      {/* ==================================================================== */}

      <section className="relative bg-white py-20 sm:py-24 md:py-28">
  <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10 lg:px-12">
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      {/* Image */}
      <div className="relative">
        {/* Subtle blue glow */}
        <div
          aria-hidden="true"
          className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"
        />

        <div className="relative overflow-hidden rounded-2xl border border-black/[0.07] bg-[#F5F7FA] shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <img
            src={dentalGrowth.src}
            alt="Dental practice growth and patient acquisition"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        {/* Small floating label */}
        <div className="absolute -bottom-4 right-4 rounded-xl border border-black/[0.06] bg-white px-4 py-3 shadow-[0_12px_35px_rgba(15,23,42,0.10)] sm:right-6">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
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

        <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#111318] sm:text-4xl md:text-5xl">
          More traffic is not the same thing as more{' '}
          <span className="text-blue-600">patients.</span>
        </h2>

        <p className="mt-6 text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
          A practice can generate clicks and still lose opportunities
          through weak landing pages, slow follow-up, missed calls,
          poor booking experiences or incomplete attribution.
        </p>

        <div className="mt-8 flex flex-wrap gap-2.5">
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
              className="rounded-full border border-black/10 bg-[#F7F8FA] px-3.5 py-2 text-xs font-medium text-black/60"
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

      <section className="bg-[#F5F7FA] py-20 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10 lg:px-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Inside the playbook
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#111318] sm:text-4xl md:text-5xl">
                Everything between the click and the chair.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-black/50">
              A connected framework rather than another list of disconnected
              marketing tactics.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {PLAYBOOK_SECTIONS.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-black/[0.07] bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/15">
                      <Icon size={15} />
                    </div>

                    <span className="text-xs font-semibold tabular-nums text-black/20">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold tracking-[-0.02em] text-[#111318]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-black/55">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.items.map((subItem) => (
                      <span
                        key={subItem}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F7FA] px-2.5 py-1.5 text-[11px] font-medium text-black/55"
                      >
                        <FaCheck
                          size={7}
                          className="text-blue-600"
                        />
                        {subItem}
                      </span>
                    ))}
                  </div>

                  <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-blue-500/[0.035] transition-transform duration-500 group-hover:scale-150" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>


      {/* ==================================================================== */}
      {/* 30 DAY PLAN                                                          */}
      {/* ==================================================================== */}

      <section className="bg-white py-20 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Inside the final chapter
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
                A framework you can actually start using.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-black/50 sm:text-base">
                The playbook finishes with a 30-day quick-start plan that
                turns the framework into a sequence of practical actions.
              </p>
            </div>

            <div className="relative">
              <div className="absolute bottom-5 left-[23px] top-5 w-px bg-black/10" />

              <div className="space-y-3">
                {WEEKS.map((item, index) => (
                  <motion.div
                    key={item.week}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.07,
                    }}
                    className="relative flex gap-5 rounded-2xl border border-black/[0.07] bg-[#F8F9FB] p-5 sm:p-6"
                  >
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[9px] font-bold text-white ring-8 ring-white">
                      {item.week}
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-[#111318] sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-sm leading-6 text-black/50">
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

      <section className="relative overflow-hidden bg-[#F5F7FA] py-20 sm:py-24 md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]"
        />

        <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-600/20">
            <FaDownload size={16} />
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Free download
          </p>

          <h2 className="mx-auto mt-4 max-w-6xl text-3xl font-semibold leading-[1.18] tracking-[-0.04em] text-[#111318] sm:text-4xl md:text-5xl">
          Download the complete dental growth Program Designed by Google partner Agency.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/50 sm:text-base">
          Get the 31-page BixDental Growth Playbook 2026 and use it to
          identify where your patient acquisition journey is working — and
          where opportunities may be getting lost.
        </p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4 },
            },
          }}
          className="flex items-center justify-center mt-8"
        >
          <a
            href="https://www.google.com/partners/agency?id=2188074075"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-200 hover:scale-[1.03]"
          >
            <img
              src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
              alt="Google Partner Badge"
              className="h-12 w-auto md:h-28"
            />
          </a>
        </motion.div>

          <button
            type="button"
            onClick={() => handleOpenModal('final-cta')}
            className="group mt-8 inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-[#111318] px-7 text-sm font-semibold text-white shadow-xl shadow-black/10 transition-all hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Download the free playbook
            <FaArrowRight
              size={10}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          <p className="mt-4 text-xs text-black/35">
            Free PDF · 31 pages · Built for dental practices
          </p>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* MODAL                                                                 */}
      {/* ==================================================================== */}

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6">
            {/* Overlay */}
            <motion.button
              type="button"
              aria-label="Close download form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.05 }}
              onClick={handleCloseModal}
              className="fixed inset-0 cursor-default bg-[#050914]/75 backdrop-blur-md"
            />

            {/* Modal */}
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
                duration: 0.08,
                ease: 'easeOut',
              }}
              className="relative z-10 my-auto w-full max-w-[860px] overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.3)]"
            >
              <button
                type="button"
                onClick={handleCloseModal}
                aria-label="Close"
                className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.04] text-black/40 transition-colors hover:bg-black/[0.08] hover:text-black/80"
              >
                <FaTimes size={13} />
              </button>

              {status === 'success' ? (
                <div className="px-6 py-14 text-center sm:px-12 sm:py-16">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <FaCheckCircle size={28} />
                  </div>

                  <h3
                    id="playbook-modal-title"
                    className="mt-7 text-3xl font-semibold tracking-[-0.035em] text-[#111318]"
                  >
                    Your playbook is ready.
                  </h3>

                  <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-black/50">
                    The BixDental Growth Playbook 2026 has started downloading.
                    Check your downloads folder.
                  </p>

                  <div className="mt-8 flex flex-col items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        triggerPlaybookDownload()

                        trackAnalyticsEvent(
                          'playbook_download_again',
                          {
                            fileName:
                              'BixDental_Growth_Playbook_2026.pdf',
                          },
                        )
                      }}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
                    >
                      <FaDownload size={11} />
                      Download again
                    </button>

                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="mt-2 w-full max-w-xs rounded-xl bg-[#F4F5F7] py-3.5 text-sm font-semibold text-[#111318] transition-colors hover:bg-[#E9EBEF]"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-[0.8fr_1.2fr]">
                  {/* Modal side */}
                  <div className="relative hidden overflow-hidden bg-[#0B1020] p-8 text-white md:block lg:p-10">
                    <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-[70px]" />

                    <div className="relative flex h-full flex-col justify-between">
                      <div>
                      
                        <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-400">
                          Free resource
                        </p>

                        <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em]">
                          The Dental Growth Playbook 2026
                        </h3>

                        <p className="mt-5 text-sm leading-6 text-white/50">
                          31 pages covering the complete journey from demand
                          generation to booked and retained patients.
                        </p>
                      </div>

                      <div className="mt-12">
                        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/30">
                          Inside
                        </p>

                        <div className="space-y-3">
                          {[
                            'Google Ads & local SEO',
                            'Landing pages & conversion',
                            'Lead capture & booking',
                            'Follow-up & attribution',
                          ].map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-2.5 text-xs text-white/65"
                            >
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/15 text-blue-400">
                                <FaCheck size={7} />
                              </span>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="max-w-md">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 md:hidden">
                        Free 31-page playbook
                      </p>

                      <h3
                        id="playbook-modal-title"
                        className="text-2xl font-semibold tracking-[-0.035em] text-[#111318] sm:text-3xl"
                      >
                        Get the playbook.
                      </h3>

                      <p className="mt-2 max-w-sm text-sm leading-6 text-black/50">
                      Tell us a little about your practice and we&apos;ll send
                      the PDF straight to you.
                    </p>

                      {status === 'error' && errorMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-xs leading-5 text-rose-700"
                        >
                          {errorMessage}
                        </motion.div>
                      )}

                      <form
                        onSubmit={handleSubmit}
                        className="mt-7 space-y-4"
                      >
                        {/* Name */}
                        <div>
                          <label
                            htmlFor="pb-name"
                            className="mb-1.5 block text-xs font-semibold text-[#111318]"
                          >
                            Your name
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
                            className="h-11 w-full rounded-xl border border-black/10 bg-[#F8F9FB] px-3.5 text-sm text-[#111318] outline-none transition-all placeholder:text-black/25 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="pb-email"
                            className="mb-1.5 block text-xs font-semibold text-[#111318]"
                          >
                            Practice email
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
                            className="h-11 w-full rounded-xl border border-black/10 bg-[#F8F9FB] px-3.5 text-sm text-[#111318] outline-none transition-all placeholder:text-black/25 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          />

                          <p className="mt-1.5 text-[10px] leading-4 text-black/35">
                            Please use your practice or work email.
                          </p>
                        </div>

                        {/* Practice */}
                        <div>
                          <label
                            htmlFor="pb-clinic"
                            className="mb-1.5 block text-xs font-semibold text-[#111318]"
                          >
                            Dental practice name
                          </label>

                          <input
                            id="pb-clinic"
                            type="text"
                            required
                            autoComplete="organization"
                            placeholder="Mitchell Family Dental"
                            value={formData.clinic}
                            onChange={(event) =>
                              updateField(
                                'clinic',
                                event.target.value,
                              )
                            }
                            className="h-11 w-full rounded-xl border border-black/10 bg-[#F8F9FB] px-3.5 text-sm text-[#111318] outline-none transition-all placeholder:text-black/25 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label
                            htmlFor="pb-phone"
                            className="mb-1.5 block text-xs font-semibold text-[#111318]"
                          >
                            Practice phone number
                          </label>

                          <div className="relative">
                            <FaPhoneAlt
                              size={10}
                              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-black/25"
                            />

                            <input
                              id="pb-phone"
                              type="tel"
                              required
                              autoComplete="tel"
                              placeholder="+1 (555) 000-0000"
                              value={formData.phone}
                              onChange={(event) =>
                                updateField(
                                  'phone',
                                  event.target.value,
                                )
                              }
                              className="h-11 w-full rounded-xl border border-black/10 bg-[#F8F9FB] pl-9 pr-3.5 text-sm text-[#111318] outline-none transition-all placeholder:text-black/25 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                            />
                          </div>
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          className="mt-2 flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-blue-600 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-blue-600/25 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {status === 'loading' ? (
                            <>
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                              Preparing your playbook…
                            </>
                          ) : (
                            <>
                              Download the free playbook
                              <FaDownload size={10} />
                            </>
                          )}
                        </button>

                        <p className="flex items-center justify-center gap-1.5 pt-1 text-[10px] text-black/30">
                          <FaLock size={8} />
                          Your information is only used to deliver the
                          resource.
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}