'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

type CalculatorData = {
  monthlyBudget: number
  patientValue: number
  expectedLeads: number
  estimatedPatients: number
  potentialRevenue: number
  cpl: number
  conversionRate: number
}

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  practiceName: '',
  city: '',
  country: '',
}

export default function LeadPopup({
  onClose,
  calculatorData,
}: {
  onClose: () => void
  calculatorData: CalculatorData
}) {
  const router = useRouter()
  const [formData, setFormData] = useState(initialFormData)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.practiceName.trim() ||
      !formData.city.trim() ||
      !formData.country.trim()
    ) {
      toast.error('Please fill in all fields.')
      return
    }

    setSubmitting(true)

    const loadingToast = toast.loading('Submitting...')

    // Split name into first and last for backend compatibility
    const [firstName = '', ...rest] = formData.name.trim().split(' ')
    const lastName = rest.join(' ')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.practiceName,
          website: '',
          city: formData.city,
          country: formData.country,

          marketingBudget: `$${calculatorData.monthlyBudget.toLocaleString()}/month`,

          services: 'Dental Marketing - Patient Growth Calculator',

          message: `
Practice: ${formData.practiceName}
Location: ${formData.city}, ${formData.country}

Calculator Inputs:
- Monthly Google Ads Budget: $${calculatorData.monthlyBudget.toLocaleString()}
- Average New Patient Value: $${calculatorData.patientValue.toLocaleString()}

Estimated Results:
- Expected Phone Leads: ${calculatorData.expectedLeads}
- Estimated New Patients: ${calculatorData.estimatedPatients}
- Potential New Patient Revenue: $${calculatorData.potentialRevenue.toLocaleString()}

Calculator Assumptions:
- Estimated Cost Per Phone Lead (CPL): $${calculatorData.cpl}
- Phone Lead to New Patient Conversion Rate: ${calculatorData.conversionRate * 100}%

These figures are planning estimates and actual results may vary based on market, competition, treatment mix, landing pages, budget, and follow-up.
          `.trim(),
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(
          result.error || 'Failed to send message.'
        )
      }

      window.setTimeout(() => {
                router.push('/thank-you');
            }, 1000)
      setFormData(initialFormData)
    } catch (error: any) {
      toast.error(
        `Something went wrong: ${error.message}`,
        {
          id: loadingToast,
        }
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 transition hover:text-gray-600"
          aria-label="Close"
          type="button"
        >
          ✕
        </button>

        {submitted ? (
          /* ── Success State ── */
          <div className="flex flex-col items-center py-8 text-center">

            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-green-200 bg-green-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                className="h-7 w-7 text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>

            <h3 className="mb-1 text-lg font-bold text-gray-950">
              You&apos;re all set
            </h3>

            <p className="mb-6 text-sm text-gray-500">
              We&apos;ve got your dental growth plan request —
              someone from our team will reach out shortly.
            </p>

            <button
              onClick={onClose}
              type="button"
              className="w-full rounded-lg bg-gradient-to-tr from-black via-[#090040] to-[#483aa0] py-3 font-semibold text-white transition hover:opacity-90"
            >
              Close
            </button>
          </div>
        ) : (
          /* ── Form State ── */
          <>
            <h3 className="mb-1 text-lg font-bold text-gray-950">
              Get your free growth plan
            </h3>

            <p className="mb-5 text-sm text-gray-500">
              We&apos;ll use your calculator results to help build
              a more detailed patient acquisition plan for your
              practice.
            </p>

            {/* Calculator Summary */}
            <div className="mb-5 rounded-xl border border-blue-100 bg-blue-50 p-4">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-blue-500">
                Your Estimated Results
              </p>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <p className="text-[11px] text-gray-500">
                    Phone Leads
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-gray-950">
                    {calculatorData.expectedLeads}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] text-gray-500">
                    New Patients
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-gray-950">
                    {calculatorData.estimatedPatients}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] text-gray-500">
                    Potential Revenue
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-blue-600">
                    ${calculatorData.potentialRevenue.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Name */}
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                className="w-full rounded-lg border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
              />

              {/* Location */}
              <div className="flex gap-3">
                <input
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City *"
                  className="w-1/2 rounded-lg border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                />

                <input
                  required
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country *"
                  className="w-1/2 rounded-lg border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                />
              </div>

              {/* Practice */}
              <input
                required
                name="practiceName"
                value={formData.practiceName}
                onChange={handleChange}
                placeholder="Practice Name *"
                className="w-full rounded-lg border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
              />

              {/* Email */}
              <input
                required
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className="w-full rounded-lg border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
              />

              {/* Phone */}
              <input
                required
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number *"
                className="w-full rounded-lg border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg bg-gradient-to-tr from-black via-[#090040] to-[#483aa0] py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
              >
                {submitting ? 'Sending...' : 'Send My Plan'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}