'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { FaArrowRight, FaShieldAlt } from "react-icons/fa";
import * as fbq from '@/lib/fpixel'

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  practiceName: string;
  message: string;
}

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-[#0a0a0a] placeholder-gray-300 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-300 shadow-sm";

const labelClass =
  "block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2";

export default function Form() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practiceName: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.phone ||
    !formData.practiceName
  ) {
    toast.error("Please fill in all required fields.");
    return;
  }

  const loadingToast = toast.loading("Submitting your form...");

  try {
    const payload = {
      company: formData.practiceName,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      website: "",
      city: "",
      message: formData.message,
      services: "Dental Marketing",
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Submission failed");

    // ✅ Fire Meta Pixel Lead Event
     fbq.event('Lead', {
    content_name: 'Dental Marketing Inquiry',
    content_category: 'Dental'
  })
   

    toast.success("Thank you! Our team will contact you shortly.", {
      id: loadingToast,
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      practiceName: "",
      message: "",
    });

    setTimeout(() => {
      router.push("/thank-you");
    }, 1000);

  } catch (error: any) {
    toast.error(error.message || "Something went wrong", {
      id: loadingToast,
    });
  }
};

  return (
    <div className="relative rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/60 bg-gray-50/50 p-8 md:p-10">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-[#0a0a0a] mb-1">
          Get Your Growth Audit
        </h3>
        <p className="text-sm text-gray-400">
          Fill in your details and we&apos;ll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Practice Name *</label>
          <input
            type="text"
            name="practiceName"
            value={formData.practiceName}
            onChange={handleChange}
            placeholder="Your Dental Practice"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Additional Info</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your practice and goals..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-[#0a0a0a] hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group mt-2"
        >
          Get Your Growth Audit
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.button>

        <p className="text-xs text-gray-500 text-center pt-1">
          100% confidential • No spam • Response in 24 hours
        </p>
        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to Bixeltek collecting and using your information to respond to your enquiry and provide relevant services. Your data is kept secure, never sold to third parties, and used solely for communication and service delivery purposes.
        </p>
      </form>

      <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-2">
        <FaShieldAlt size={13} className="text-blue-400" />
        <span className="text-xs text-gray-400 font-medium">
          Your information is secure and never shared
        </span>
      </div>
    </div>
  );
}