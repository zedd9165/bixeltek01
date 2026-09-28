'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiChevronDown } from 'react-icons/hi';
import { toast } from 'react-hot-toast';

interface GrowthAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICE_OPTIONS = [
  'Google Ads and PPC',
  'Search Engine Optimization',
  'Social Media Management',
  'Web Design and Development',
  'E-commerce Solutions',
  'Content Marketing',
  'Graphic Designing and Branding',
  'Conversions, Analytics and Reporting',
  'Google Advertiser Verifications, GMB Verifications',
  'Other',
];

const WEBSITE_TYPE_OPTIONS = [
  'E-commerce Website',
  'Service Based Website',
  'Business Websites',
  'Lead Generation Website',
  'Blogging Website',
  'Portfolio Website',
  'Corporate Website',
];

const ADDITIONAL_SERVICE_OPTIONS = [
  'Payment Gateway Integrations',
  'Website Migration',
  'Periodic Website Maintenance',
  'On Page SEO Implementation',
  'Speed Optimizations Audits',
  'Ecommerce Content Management (Product Uploads Etc)',
];

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  website: '',
  country: '', // holds the combined "City, Country" value \u2014 see note above the field
  marketingBudget: '',
  services: '',
  otherservices: '',
  websiteType: '',
  message: '',
};

// Small dark-themed dropdown, styled to match the modal rather than the
// light dropdowns from the old standalone form.
function DarkSelect({
  label,
  value,
  placeholder,
  options,
  onSelect,
}: {
  label: string;
  value: string;
  placeholder: string;
  options: string[];
  onSelect: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#670ef7] transition"
      >
        <span className={value ? 'text-white' : 'text-gray-500'}>{value || placeholder}</span>
        <HiChevronDown className={`text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute left-0 right-0 z-20 mt-2 max-h-56 overflow-y-auto rounded-lg bg-[#15151c] border border-white/10 shadow-xl">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                onSelect(option);
                setOpen(false);
              }}
              className="cursor-pointer px-4 py-2.5 text-sm text-gray-200 hover:bg-white/5"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function GrowthAuditModal({ isOpen, onClose }: GrowthAuditModalProps) {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.company ||
      !formData.website ||
      !formData.services ||
      !formData.message
    ) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading('Submitting your form...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formType: 'Free Growth Audit Request (Home-2)',
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || 'Failed to send message.');

      toast.success('Thank you for filling the form!', { id: loadingToast });
      setFormData(initialFormState);
      onClose();
      window.setTimeout(() => {
        router.push('/thank-you');
      }, 800);
    } catch (error: any) {
      toast.error(`Something went wrong: ${error.message}`, { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-[#0f0f13] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden text-white max-h-[90vh] overflow-y-auto scrollbar-hide"
            role="dialog"
            aria-modal="true"
            aria-labelledby="audit-modal-title"
          >
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#670ef7] to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition"
            >
              <HiX className="text-xl" />
            </button>

            <div>
              <div className="mb-6 pr-6">
                <span className="text-xs uppercase tracking-widest text-[#8c45ff] font-semibold">
                  Business Growth Audit
                </span>
                <h2 id="audit-modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight mt-1">
                  Get a Business Digital Growth Audit
                </h2>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  We&apos;ll review your website, search visibility, advertising, and conversion touchpoints. No obligation. No generic 50-page report.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Sarah"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#670ef7] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Jenkins"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#670ef7] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sarah@company.com"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#670ef7] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#670ef7] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Company *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#670ef7] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Website URL *</label>
                    <input
                      type="url"
                      name="website"
                      required
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourbusiness.com"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#670ef7] transition"
                    />
                  </div>
                </div>

                {/* Combined city + country \u2014 free text, no API. See note above. */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">City &amp; Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="e.g. Austin, USA"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#670ef7] transition"
                  />
                </div>

                <DarkSelect
                  label="Primary Service *"
                  value={formData.services}
                  placeholder="Choose a service"
                  options={SERVICE_OPTIONS}
                  onSelect={(value) => setFormData((prev) => ({ ...prev, services: value }))}
                />

                {formData.services === 'Web Design and Development' && (
                  <>
                    <DarkSelect
                      label="What kind of website do you need?"
                      value={formData.websiteType}
                      placeholder="Select a website type"
                      options={WEBSITE_TYPE_OPTIONS}
                      onSelect={(value) => setFormData((prev) => ({ ...prev, websiteType: value }))}
                    />
                    <DarkSelect
                      label="Any additional services?"
                      value={formData.otherservices}
                      placeholder="Select additional services"
                      options={ADDITIONAL_SERVICE_OPTIONS}
                      onSelect={(value) => setFormData((prev) => ({ ...prev, otherservices: value }))}
                    />
                  </>
                )}

                {formData.services === 'Google Ads and PPC' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      What&apos;s your current ads spend?
                    </label>
                    <input
                      type="text"
                      name="marketingBudget"
                      value={formData.marketingBudget}
                      onChange={handleChange}
                      placeholder="e.g. $2,000/month"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#670ef7] transition"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    What are your current marketing challenges? *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's not working today\u2026"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#670ef7] transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3.5 px-6 rounded-lg bg-white text-black hover:bg-[#670ef7] hover:text-white font-semibold text-sm transition-all duration-300 shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Get My Free Growth Audit'}
                </button>

                <p className="text-[11px] text-gray-500 text-center mt-3">
                  By submitting this form, you consent to receive informational SMS and SMS-based appointment
                  reminders from Bixeltek at the number provided. Msg &amp; data rates may apply. Msg frequency
                  varies. Reply STOP to unsubscribe, HELP for help.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}