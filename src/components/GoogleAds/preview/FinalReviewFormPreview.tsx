"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import { CheckCircle2, PhoneCall, Mail, ArrowRight, Check } from "lucide-react";
import { finalOfferPreviewData } from "@/data/googleAdsPreviewData";
import ContactFromNew from "@/components/ContactFormNew";

export default function FinalReviewFormPreview() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    website: "",
    country: "",
    googleAdsStatus: "",
    marketingBudget: "",
    improvementNote: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const countries = [
    "India",
    "Canada",
    "United States",
    "Saudi Arabia",
    "United Kingdom",
    "Australia",
    "United Arab Emirates",
    "Other",
  ];

  const budgetOptions = [
    "Under ₹50,000 / $600 / mo",
    "₹50,000 – ₹1,50,000 / $600 – $1,800 / mo",
    "₹1,50,000 – ₹4,00,000 / $1,800 – $5,000 / mo",
    "₹4,00,000+ / $5,000+ / mo",
    "Not decided yet",
  ];

  const statusOptions = ["Yes", "No", "Previously"];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.company ||
      !formData.website ||
      !formData.country ||
      !formData.googleAdsStatus ||
      !formData.marketingBudget
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    const loadingToast = toast.loading("Submitting your review request...");

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        company: formData.company,
        website: formData.website,
        country: formData.country,
        phone: formData.phone || "Not provided",
        marketingBudget: formData.marketingBudget,
        services: "Google Ads Account Review",
        subject: `Google Ads Review Request - ${formData.company}`,
        message: `Currently Running Google Ads: ${formData.googleAdsStatus}\nTarget Market: ${formData.country}\nMonthly Budget: ${formData.marketingBudget}\nImprovements desired: ${formData.improvementNote || "None specified"}`,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit request.");
      }

      toast.success(finalOfferPreviewData.form.successHeading, {
        id: loadingToast,
      });
      setSubmitted(true);
    } catch (err: any) {
      toast.error(err.message || "Something went wrong. Please try again.", {
        id: loadingToast,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="google-ads-review"
      className="scroll-mt-24 py-24 bg-white text-[#08080C] relative border-t border-gray-200"
    >
      <Toaster position="top-right" />
      <div className="w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Offer Copy */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
                {finalOfferPreviewData.eyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
                {finalOfferPreviewData.h2}
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed">
                {finalOfferPreviewData.intro}
              </p>
            </div>

            {/* 3 Detail Points */}
            <div className="space-y-4">
              {finalOfferPreviewData.points.map((point, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2 shadow-sm"
                >
                  <h3 className="text-lg font-bold font-inter text-[#08080C] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span>{point.title}</span>
                  </h3>
                  <p className="text-sm text-gray-600 font-poppins leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Tailored Enquiry Form */}
          <div className="lg:col-span-7 ">
           <ContactFromNew/>
          </div>
        </div>
      </div>
    </section>
  );
}
