'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaBookOpen,
  FaCheckCircle,
  FaDownload,
  FaArrowRight,
  FaLock,
  FaTooth,
  FaChartLine,
  FaSearch,
  FaFilePdf,
  FaFileAlt,
  FaPhone,
} from 'react-icons/fa'

const CHAPTER_HIGHLIGHTS = [
  {
    title: 'Capture High-Intent Searches',
    desc: 'Turn searches for dental implants, Invisalign, emergency dentistry, and other treatments into qualified enquiries.',
    icon: FaSearch,
  },
  {
    title: 'Build Pages That Convert',
    desc: 'Match landing pages to treatment intent so prospective patients find the answers, trust signals, and next step they need.',
    icon: FaFileAlt,
  }
]

export default function EbookDownloadSection() {
  const [formData, setFormData] = useState({ name: '', email: '', clinic: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

    const downloadPlaybook = () => {
  const link = document.createElement('a')
  link.href = '/downloads/dental-growth-playbook.pdf'
  link.download = 'BixDental_Growth_Playbook_2026.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

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

const isValidWorkEmail = (email: string) => {
  const normalizedEmail = email.trim().toLowerCase()

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(normalizedEmail)) {
    return false
  }

  const domain = normalizedEmail.split('@')[1]

  // Reject common personal email providers
  if (PERSONAL_EMAIL_DOMAINS.includes(domain)) {
    return false
  }

  return true
}

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  const email = formData.email.trim().toLowerCase()

  // Work email validation
  if (!isValidWorkEmail(email)) {
    setErrorMessage(
      'Please enter your dental practice or work email address. Personal email addresses such as Gmail, Yahoo, or Outlook are not accepted.'
    )
    setStatus('error')
    return
  }

  setStatus('loading')
  setErrorMessage('')

  try {
    const res = await fetch('/api/ebook-download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        email,
      }),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => null)

      throw new Error(
        data?.error || 'Failed to submit. Please try again.'
      )
    }

    downloadPlaybook()

    setStatus('success')
  } catch (err: any) {
    setErrorMessage(err.message || 'Something went wrong.')
    setStatus('error')
  }
}

  return (
    <section className="relative py-24 bg-white text-gray-900 overflow-hidden border-t border-b border-gray-100">
      {/* ── Light Decorative Accents ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern matching Hero */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              'linear-gradient(#1a56db 1px, transparent 1px), linear-gradient(90deg, #1a56db 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Soft Radial Ambient Orbs */}
        <div className="absolute -top-24 -right-20 w-[480px] h-[480px] bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-20 w-[420px] h-[420px] bg-gradient-to-tr from-sky-100 to-blue-100 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="relative md:max-w-[80%] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
         {/* ── Left Column: Playbook Value & SEO Breakdown ── */}
            <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
            >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 border border-blue-200 rounded-full px-4 py-1.5 bg-blue-50/70 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-xs">
                <FaBookOpen size={11} className="text-blue-600" />
                <span>Dental Growth Playbook</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-950">
                Download Your{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Free Dental Growth Playbook 2026
                </span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Discover the practical marketing strategies dental practices can use
                to attract more qualified patients, improve lead conversion, and turn
                online searches into booked appointments. Download the free playbook
                to see how Google Ads, SEO, landing pages, tracking, and follow-up
                work together.
            </p>


            {/* Structured Takeaway Cards */}
            <div className="grid md:grid-cols-2 gap-3.5 pt-2">
                {CHAPTER_HIGHLIGHTS.map((item, idx) => (
                <div
                    key={idx}
                    className="bg-gray-50/80 border border-gray-200/70 hover:border-blue-300 rounded-2xl p-4 transition-all duration-200 shadow-2xs hover:shadow-xs group"
                >
                    <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-blue-600 mb-2.5 shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <item.icon size={16} />
                    </div>

                    <h3 className="text-sm font-bold text-gray-950 tracking-tight mb-1">
                    {item.title}
                    </h3>

                    <p className="text-[14px] text-gray-500 leading-relaxed">
                    {item.desc}
                    </p>
                </div>
                ))}
            </div>

            {/* Social Proof / Value Footer */}
            <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-gray-200/80 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                <FaTooth className="text-blue-600 w-4 h-4" />
                <span className="font-semibold text-gray-800">
                    Built for Dental Practices
                </span>
                </div>

                <div className="flex items-center gap-2">
                <FaChartLine className="text-blue-600 w-4 h-4" />
                <span className="font-semibold text-gray-800">
                    Focused on Patient Acquisition
                </span>
                </div>

                <div className="flex items-center gap-2">
                <FaFilePdf className="text-red-500 w-4 h-4" />
                <span>Free PDF Download</span>
                </div>
            </div>
            </motion.div>

{/* ── Right Column: Download Form ── */}
<motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.15 }}
  className="lg:col-span-6"
>
  <div className="relative bg-white border border-gray-200 rounded-3xl p-7 sm:p-10 shadow-[0_4px_40px_rgba(0,0,0,0.06)]">

    {/* Card Header */}
    <div className="mb-6">
      <div className="flex items-center justify-between gap-3 mb-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
          Free Dental Marketing Guide
        </span>

        <span className="text-xs font-semibold text-gray-400">
          PDF Guide
        </span>
      </div>

      <h3 className="text-2xl font-extrabold text-gray-950 tracking-tight">
        Get the Dental Patient Acquisition Playbook
      </h3>

      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
        Learn how to build a dental marketing system that attracts,
        converts, and tracks new patient opportunities.
      </p>
    </div>

    {status === 'success' ? (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    className="bg-blue-50/60 border border-blue-200 rounded-2xl p-7 text-center space-y-3"
  >
    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-md">
      <FaCheckCircle size={22} />
    </div>

    <h4 className="text-lg font-bold text-gray-950">
      Thanks! Your Playbook Has Been Downloaded
    </h4>

    <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
      Your Dental Patient Acquisition Playbook is ready to explore.
      Start with the sections on Google Ads, landing pages, and lead
      follow-up to see where your practice can improve.
    </p>

    <button
      type="button"
      onClick={downloadPlaybook}
      className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 underline pt-2 cursor-pointer"
    >
      <FaDownload size={11} />
      Download the Playbook Again
    </button>
  </motion.div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
            Your Name
          </label>

          <input
            type="text"
            required
            placeholder="Dr. Sarah Mitchell"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            className="w-full bg-gray-50 border border-gray-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
            Practice Email
          </label>

          <input
            type="email"
            required
            placeholder="you@yourdentalpractice.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className="w-full bg-gray-50 border border-gray-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
            Dental Practice Name
          </label>

          <input
            type="text"
            required
            placeholder="Your Dental Practice"
            value={formData.clinic}
            onChange={(e) =>
              setFormData({
                ...formData,
                clinic: e.target.value,
              })
            }
            className="w-full bg-gray-50 border border-gray-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition"
          />
        </div>

        {status === 'error' && (
          <p className="text-xs text-red-600 bg-red-50 border border-red-200 p-2.5 rounded-lg">
            {errorMessage}
          </p>
        )}

        <motion.button
          type="submit"
          disabled={status === 'loading'}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-tr from-black via-[#090040] to-[#2563eb] hover:opacity-95 text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-md transition mt-2 cursor-pointer disabled:opacity-70"
        >
          {status === 'loading' ? (
            <span>Preparing Your Guide...</span>
          ) : (
            <>
              <FaDownload size={12} />
              <span>Get the Free Dental Growth Playbook</span>
              <FaArrowRight size={11} className="ml-1" />
            </>
          )}
        </motion.button>

        <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 pt-1">
          <FaLock size={10} className="text-gray-400" />
          <span>
            Instant access. No spam. Practical dental marketing strategies.
          </span>
        </div>
      </form>
    )}
  </div>
</motion.div>

          

        </div>
      </div>
    </section>
  )
}