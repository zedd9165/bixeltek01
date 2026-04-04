"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { FiArrowRight, FiCheck, FiChevronDown } from "react-icons/fi";

export default function IndiaContactForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    country: "",
    marketingBudget: "",
    services: "",
    message: "",
    otherservices: "",
    websiteType: "",
    seoGoals: "",
    ppcPlatform: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isWebsiteTypeOpen, setIsWebsiteTypeOpen] = useState(false);
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
    "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
    "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
    "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
    "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus",
    "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti",
    "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
    "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
    "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
    "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
    "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
    "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
    "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
    "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
    "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia",
    "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
    "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
    "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
    "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
    "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
    "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan",
    "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga",
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "UAE",
    "Uganda", "Ukraine", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
    "Zimbabwe", "Other",
  ];

  const [search, setSearch] = useState("");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDropdownSelect = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearch(e.target.value);
    setFilteredCountries(
      countries.filter((c) => c.toLowerCase().includes(query))
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.company ||
      !formData.services ||
      !formData.message ||
      !formData.website
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const loadingToast = toast.loading("Submitting your form...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to send message.");

      toast.success("Thank you for filling the form!", { id: loadingToast });
      setSubmitted(true);

      window.setTimeout(() => {
        router.push("/thank-you");
      }, 1000);

      setFormData({
        firstName: "", lastName: "", email: "", phone: "", company: "",
        website: "", country: "", marketingBudget: "", services: "",
        otherservices: "", websiteType: "", seoGoals: "", ppcPlatform: "",
        message: "",
      });
    } catch (error: any) {
      toast.error(`Something went wrong: ${error.message}`, { id: loadingToast });
    }
  };

  /* ── Shared input className ── */
  const inputCls =
    "w-full bg-white/[0.05] border border-white/10 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all";
  const labelCls =
    "block text-xs text-white/40 font-medium mb-2 uppercase tracking-wider";
  const dropdownBtnCls =
    "w-full bg-white/[0.05] border border-white/10 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm transition-all focus:outline-none focus:border-blue-500/50 flex items-center justify-between";

  if (submitted) {
    return (
      <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 sm:p-8 text-center py-10 sm:py-12">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-5 sm:mb-6">
          <FiCheck className="text-blue-400" size={26} />
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
          Audit Request Received!
        </h3>
        <p className="text-white/50 text-sm">
          Our team will reach out within 24 hours with your personalised audit.
        </p>
      </div>
    );
  }

  return (
    <>
      <Toaster position="top-right" />
      <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* First + Last Name */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              { key: "firstName", label: "First Name", placeholder: "First name" },
              { key: "lastName", label: "Last Name", placeholder: "Last name" },
            ].map((f) => (
              <div key={f.key}>
                <label className={labelCls}>{f.label} *</label>
                <input
                  type="text"
                  name={f.key}
                  value={(formData as any)[f.key]}
                  onChange={handleInputChange}
                  className={inputCls}
                  placeholder={f.placeholder}
                />
              </div>
            ))}
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              { key: "email", label: "Email", type: "email", placeholder: "you@company.com" },
              { key: "phone", label: "Phone", type: "tel", placeholder: "+91 98765 43210" },
            ].map((f) => (
              <div key={f.key}>
                <label className={labelCls}>{f.label} *</label>
                <input
                  type={f.type}
                  name={f.key}
                  value={(formData as any)[f.key]}
                  onChange={handleInputChange}
                  className={inputCls}
                  placeholder={f.placeholder}
                />
              </div>
            ))}
          </div>

          {/* Company + Website */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className={labelCls}>Company *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className={inputCls}
                placeholder="Company Name"
              />
            </div>
            <div>
              <label className={labelCls}>Website *</label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className={inputCls}
                placeholder="www.example.com"
              />
            </div>
          </div>

          {/* Country search */}
          <div className="relative">
            <label className={labelCls}>Country</label>
            <input
              type="text"
              placeholder="Type to search country..."
              value={search}
              onChange={handleSearch}
              onFocus={() => setIsCountryOpen(true)}
              className={inputCls}
            />
            {isCountryOpen && (
              <div className="absolute z-20 mt-1 w-full max-h-48 overflow-y-auto rounded-xl bg-[#111] border border-white/10 shadow-xl">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country) => (
                    <div
                      key={country}
                      onClick={() => {
                        handleDropdownSelect("country", country);
                        setSearch(country);
                        setIsCountryOpen(false);
                      }}
                      className="cursor-pointer px-4 py-2.5 text-sm text-white/70 hover:bg-white/[0.08] hover:text-white transition-colors"
                    >
                      {country}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2.5 text-sm text-white/30">No results found</div>
                )}
              </div>
            )}
          </div>
          {/* Services dropdown */}
          <div className="relative">
            <label className={labelCls}>Service *</label>
            <button
              type="button"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={`${dropdownBtnCls} ${formData.services ? "text-white" : "text-white/20"}`}
            >
              {formData.services || "Choose a service"}
              <FiChevronDown
                className={`text-white/40 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                size={16}
              />
            </button>
            {isServicesOpen && (
              <div className="absolute z-20 mt-1 w-full rounded-xl bg-[#111] border border-white/10 shadow-xl overflow-hidden">
                {[
                  "Google Ads and PPC",
                  "Search Engine Optimization",
                  "Social Media Management",
                  "Web Design and Development",
                  "E-commerce Solutions",
                  "Content Marketing",
                  "Graphic Designing and Branding",
                  "Conversions, Analytics and Reporting",
                  "Google Advertiser Verifications, GMB Verifications",
                  "Other",
                ].map((option) => (
                  <div
                    key={option}
                    onClick={() => {
                      handleDropdownSelect("services", option);
                      setIsServicesOpen(false);
                    }}
                    className="cursor-pointer px-4 py-2.5 text-sm text-white/70 hover:bg-white/[0.08] hover:text-white transition-colors"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Conditional: Web Design fields */}
          {formData.services === "Web Design and Development" && (
            <>
              {/* Website Type */}
              <div className="relative">
                <label className={labelCls}>What kind of website do you need?</label>
                <button
                  type="button"
                  onClick={() => setIsWebsiteTypeOpen(!isWebsiteTypeOpen)}
                  className={`${dropdownBtnCls} ${formData.websiteType ? "text-white" : "text-white/20"}`}
                >
                  {formData.websiteType || "Select website type"}
                  <FiChevronDown
                    className={`text-white/40 transition-transform duration-200 ${isWebsiteTypeOpen ? "rotate-180" : ""}`}
                    size={16}
                  />
                </button>
                {isWebsiteTypeOpen && (
                  <div className="absolute z-20 mt-1 w-full max-h-48 overflow-y-auto rounded-xl bg-[#111] border border-white/10 shadow-xl">
                    {[
                      "E-commerce Website",
                      "Service Based Website",
                      "Business Websites",
                      "Lead Generation Website",
                      "Blogging Website",
                      "Portfolio Website",
                      "Corporate Website",
                    ].map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          handleDropdownSelect("websiteType", option);
                          setIsWebsiteTypeOpen(false);
                        }}
                        className="cursor-pointer px-4 py-2.5 text-sm text-white/70 hover:bg-white/[0.08] hover:text-white transition-colors"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Additional Services */}
              <div className="relative">
                <label className={labelCls}>Additional services needed?</label>
                <button
                  type="button"
                  onClick={() => setIsAdditionalOpen(!isAdditionalOpen)}
                  className={`${dropdownBtnCls} ${formData.otherservices ? "text-white" : "text-white/20"}`}
                >
                  {formData.otherservices || "Select additional service"}
                  <FiChevronDown
                    className={`text-white/40 transition-transform duration-200 ${isAdditionalOpen ? "rotate-180" : ""}`}
                    size={16}
                  />
                </button>
                {isAdditionalOpen && (
                  <div className="absolute z-20 mt-1 w-full max-h-48 overflow-y-auto rounded-xl bg-[#111] border border-white/10 shadow-xl">
                    {[
                      "Payment Gateway Integrations",
                      "Website Migration",
                      "Periodic Website Maintenance",
                      "On Page SEO Implementation",
                      "Speed Optimizations Audits",
                      "Ecommerce Content Management (Product Uploads Etc)",
                    ].map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          handleDropdownSelect("otherservices", option);
                          setIsAdditionalOpen(false);
                        }}
                        className="cursor-pointer px-4 py-2.5 text-sm text-white/70 hover:bg-white/[0.08] hover:text-white transition-colors"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}

          {/* Conditional: PPC budget */}
          {formData.services === "Google Ads and PPC" && (
            <div>
              <label className={labelCls}>What&apos;s your current ads spend?</label>
              <input
                type="text"
                name="marketingBudget"
                value={formData.marketingBudget}
                onChange={handleInputChange}
                className={inputCls}
                placeholder="e.g. ₹50,000/month"
              />
            </div>
          )}

          {/* Message */}
          <div>
            <label className={labelCls}>Message *</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className={`${inputCls} resize-none`}
              placeholder="What are your current marketing challenges?"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 sm:py-4 rounded-xl transition-all text-sm sm:text-base flex items-center justify-center gap-2 group mt-2"
          >
            Get My Free Audit
            <FiArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </button>

          <p className="text-center text-white/20 text-xs">
            In a hurry? Call us now:{" "}
            <Link href="tel:+919100032301" className="text-blue-400 hover:underline">
              +91 91000 32301
            </Link>
          </p>

          <p className="text-white/20 text-center text-xs leading-relaxed">
            By submitting this form, you consent to receive informational SMS from Bixeltek at the
            phone number provided. Msg & data rates may apply.{" "}
            <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-white/40 transition-colors">
              Privacy Policy & Terms.
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}