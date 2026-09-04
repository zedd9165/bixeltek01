'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';

type CalculatorData = {
  newPatients: number;
  treatmentValue: number;
  closeRate: number;
  currentRevenue: number;
  withBixeltek: number;
  upside: number;
};

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  practiceName: '',
  city: '',
  country: '',
};

export default function LeadPopup({
  onClose,
  calculatorData,
}: {
  onClose: () => void;
  calculatorData: CalculatorData;
}) {
  const [formData, setFormData] = useState(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.practiceName.trim() ||
      !formData.city.trim() ||
      !formData.country.trim()
    ) {
      toast.error('Please fill in all fields.');
      return;
    }

    setSubmitting(true);
    const loadingToast = toast.loading('Submitting...');

    // Split name into first and last for backend compatibility
    const [firstName = '', ...rest] = formData.name.trim().split(' ');
    const lastName = rest.join(' ');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.practiceName,
          website: '',
          city: formData.city,
          country: formData.country,
          marketingBudget: '',
          services: 'Dental Marketing - Revenue Calculator Form',
          message: `Practice: ${formData.practiceName} | Location: ${formData.city}, ${formData.country} | Calculator inputs — New patients/mo: ${calculatorData.newPatients}, Avg treatment value: $${calculatorData.treatmentValue}, Close rate: ${calculatorData.closeRate}%. Current revenue: $${calculatorData.currentRevenue.toLocaleString()}, Projected with Bixeltek: $${calculatorData.withBixeltek.toLocaleString()} (+$${calculatorData.upside.toLocaleString()}/mo upside).`,
        }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Failed to send message.');

      toast.success("Thanks! We'll be in touch shortly.", { id: loadingToast });
      setFormData(initialFormData);
      setSubmitted(true);
    } catch (error: any) {
      toast.error(`Something went wrong: ${error.message}`, { id: loadingToast });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          ✕
        </button>

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                className="w-7 h-7 text-green-600"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-950 mb-1">You&apos;re all set</h3>
            <p className="text-sm text-gray-500 mb-6">
              We&apos;ve got your growth plan request — someone from our team will reach out shortly.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-gradient-to-tr from-black via-[#090040] to-[#483aa0] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-lg font-bold text-gray-950 mb-1">Get your free growth plan</h3>
            <p className="text-sm text-gray-500 mb-5">
              Based on a +${calculatorData.upside.toLocaleString()}/mo revenue upside for your practice.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
              />

              <div className="flex gap-3">
                <input
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City *"
                  className="w-1/2 p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                />
                <input
                  required
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country *"
                  className="w-1/2 p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                />
              </div>

              <input
                required
                name="practiceName"
                value={formData.practiceName}
                onChange={handleChange}
                placeholder="Practice Name *"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
              />

              <input
                required
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
              />

              <input
                required
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number *"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
              />

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-tr from-black via-[#090040] to-[#483aa0] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-60"
              >
                {submitting ? 'Sending...' : 'Send My Plan'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}