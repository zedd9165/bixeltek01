'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { 
  ShoppingCart, 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  TrendingUp,
  RotateCcw
} from 'lucide-react';
import * as fbq from '@/lib/fpixel';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  storePlatform: string;
  monthlyOrders: string;
  message: string;
}

export default function EcommerceWhatsAppContactForm() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    storePlatform: '',
    monthlyOrders: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.phone || !formData.company) {
      toast.error('Please complete all required fields.');
      return;
    }

    setLoading(true);
    const loadingToast = toast.loading('Sending your request...');

    try {
      const extraDetails = [
        formData.storePlatform ? `Store Platform: ${formData.storePlatform}` : '',
        formData.monthlyOrders ? `Monthly Orders: ${formData.monthlyOrders}` : '',
      ].filter(Boolean).join(' | ');

      const combinedMessage = [
        extraDetails,
        formData.message,
      ].filter(Boolean).join('\n\n');

      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        website: formData.website,
        marketingBudget: formData.monthlyOrders,
        services: 'WhatsApp Marketing for E-Commerce',
        message: combinedMessage,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Failed to submit form.');

      // Track Meta Pixel Lead event safely
      try {
        fbq.event('Lead', {
          content_name: 'WhatsApp E-Commerce Inquiry',
          content_category: 'E-Commerce Services',
        });
      } catch (err) {
        console.warn('Pixel tracking skipped:', err);
      }

      toast.success('Thank you! Our e-commerce WhatsApp specialists will reach out within 24 hours.', {
        id: loadingToast,
      });

      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        storePlatform: '',
        monthlyOrders: '',
        message: '',
      });

      setTimeout(() => {
        router.push('/thank-you');
      }, 1200);
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong. Please try again.', {
        id: loadingToast,
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-green-500 focus:bg-white/[0.07] focus:ring-1 focus:ring-green-500/40 transition-all duration-200';
  const labelClass = 'block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2';

  return (
    <section id="contact" className="relative bg-[#030712] py-24 md:py-32 px-6 overflow-hidden scroll-mt-20">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none -z-10" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

      <div className="lg:max-w-[80%] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Copy & Trust Signals (5 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 text-xs font-bold tracking-widest uppercase">
                  GET IN TOUCH
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
                Scale Your E-Commerce Revenue With{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-blue-400">
                  WhatsApp Automation
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-10">
                Stop losing high-intent shoppers to abandoned checkouts and high COD returns. Talk to our e-commerce specialists to integrate custom WhatsApp journeys directly with your store.
              </p>

              {/* Key Deliverables / Trust Badges */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">45%+ Abandoned Cart Recovery</h4>
                    <p className="text-sm text-gray-400 mt-0.5">Hyper-personalized checkout recovery messages with 1-click buy links.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <RotateCcw className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">COD Verification & RTO Reduction</h4>
                    <p className="text-sm text-gray-400 mt-0.5">Automated address verification and order confirmation that slash return costs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShoppingCart className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Native Shopify & WooCommerce Sync</h4>
                    <p className="text-sm text-gray-400 mt-0.5">Seamless product catalog synchronization and live inventory tracking.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Anchors */}
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center gap-6">
              <a
                href="tel:+919100032301"
                className="inline-flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors text-lg font-medium"
              >
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400">
                  <Phone size={16} />
                </div>
                <span>+91 91000 32301</span>
              </a>

              <a
                href="mailto:connect@bixeltekglobal.com"
                className="inline-flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors text-lg font-medium"
              >
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                  <Mail size={16} />
                </div>
                <span>connect@bixeltekglobal.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Converting Form Card (7 Cols) */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#050914]/90 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              
              {/* Form Ambient Corner Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[100px] pointer-events-none rounded-full" />

              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6 text-green-400 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">Audit Request Received!</h3>
                  <p className="text-gray-400 text-sm max-w-md mx-auto mb-4">
                    Our e-commerce WhatsApp team will review your store metrics and share an actionable audit within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* First Name */}
                    <div>
                      <label className={labelClass}>
                        First Name <span className="text-green-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Sarah"
                        className={inputClass}
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className={labelClass}>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Miller"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Work Email */}
                    <div>
                      <label className={labelClass}>
                        Work Email <span className="text-green-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sarah@yourstore.com"
                        className={inputClass}
                      />
                    </div>

                    {/* WhatsApp / Phone Number */}
                    <div>
                      <label className={labelClass}>
                        WhatsApp / Phone <span className="text-green-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Store / Brand Name */}
                    <div>
                      <label className={labelClass}>
                        Store / Brand Name <span className="text-green-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. TrendBoutique"
                        className={inputClass}
                      />
                    </div>

                    {/* Store Website */}
                    <div>
                      <label className={labelClass}>Store URL / Website</label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://yourstore.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Store Platform */}
                    <div>
                      <label className={labelClass}>E-Commerce Platform</label>
                      <select
                        name="storePlatform"
                        value={formData.storePlatform}
                        onChange={handleChange}
                        className={`${inputClass} bg-[#070d1d] text-gray-200 cursor-pointer`}
                      >
                        <option value="">Select platform...</option>
                        <option value="Shopify / Shopify Plus">Shopify / Shopify Plus</option>
                        <option value="WooCommerce">WooCommerce</option>
                        <option value="Magento / Adobe Commerce">Magento / Adobe Commerce</option>
                        <option value="Custom / Headless">Custom / Headless</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Monthly Order Volume */}
                    <div>
                      <label className={labelClass}>Monthly Order Volume</label>
                      <select
                        name="monthlyOrders"
                        value={formData.monthlyOrders}
                        onChange={handleChange}
                        className={`${inputClass} bg-[#070d1d] text-gray-200 cursor-pointer`}
                      >
                        <option value="">Select order volume...</option>
                        <option value="Under 500 orders/mo">Under 500 orders/mo</option>
                        <option value="500 - 2,000 orders/mo">500 - 2,000 orders/mo</option>
                        <option value="2,000 - 10,000 orders/mo">2,000 - 10,000 orders/mo</option>
                        <option value="10,000+ orders/mo">10,000+ orders/mo</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Goals */}
                  <div>
                    <label className={labelClass}>What are your main goals?</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Abandoned cart recovery, COD verification, automated broadcasts..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-base sm:text-lg py-4 px-8 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                    >
                      {loading ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <span>Get Free E-Commerce WhatsApp Audit</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Privacy / Assurance */}
                  <p className="text-[11px] text-gray-500 text-center pt-2">
                    🔒 We respect your privacy. No spam. 100% confidential store audit.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

