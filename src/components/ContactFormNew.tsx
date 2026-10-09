'use client';
import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Link from 'next/link';

// Options for "Are you currently running Google Ads?"
const adsStatusOptions = ["Yes", "No", "Planning to Start"];

export default function ContactFromNew() {

    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        country: '',
        marketingBudget: '',
        services: '',
        message: '',
        otherservices: '',
        websiteType: '',
        seoGoals: '',        // 👈 for SEO
        ppcPlatform: '',     // 👈 for PPC
        googleAdsStatus: ''  // 👈 for Google Ads: Yes / No / Planning to Start
    });

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
        "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
        "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
        "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
        "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
        "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan",
        "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
        "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia",
        "Turkey", "Turkmenistan", "Tuvalu", "UAE", "Uganda", "Ukraine", "United Kingdom",
        "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
        "Vietnam", "Yemen", "Zambia", "Zimbabwe", "Other"
    ];


    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleDropdownSelect = (field: string, value: string) => {
        setFormData((prev) => {
            const next = { ...prev, [field]: value };
            // Switching service clears the Google Ads follow-up answers
            if (field === 'services' && value !== prev.services) {
                next.googleAdsStatus = '';
                next.marketingBudget = '';
            }
            return next;
        });
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

            toast.error("Please fill in all required fields.")


            return;
        }

        // Google Ads follow-up validation
        if (formData.services === 'Google Ads and PPC') {
            if (!formData.googleAdsStatus) {
                toast.error("Please tell us if you are currently running Google Ads.");
                return;
            }
            if (formData.googleAdsStatus === 'Yes' && !formData.marketingBudget.trim()) {
                toast.error("Please enter your current monthly ad spend.");
                return;
            }
        }

        const loadingToast = toast.loading("Submitting your form...");


        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json(); // Try parsing response

            if (!response.ok) throw new Error(result.error || 'Failed to send message.');

            toast.success("Thank you for filling the form!", { id: loadingToast });

            window.setTimeout(() => {
                router.push('/thank-you'); // Redirect to thank you page
            }, 1000)

            console.log("API Response:", result); // Debugging
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                company: '',
                website: '',
                country: '',
                marketingBudget: '',
                services: '',
                otherservices: '',
                websiteType: '',
                seoGoals: '',
                ppcPlatform: '',
                googleAdsStatus: '',
                message: ''
            });
        } catch (error: any) {
            console.error("Error submitting form:", error);
            toast.error(`Something went wrong: ${error.message}`, { id: loadingToast });
        }
    };
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [search, setSearch] = useState(""); // State for filtering
    const [filteredCountries, setFilteredCountries] = useState(countries); // Dynamic list

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    }
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const toggleDropdown5 = () => {
        setIsOpen5(!isOpen5);
        setIsOpen(false)
    }
    const handleSearch = (event: any) => {
        const query = event.target.value.toLowerCase();
        setSearch(query);
        setFilteredCountries(
            countries.filter((country) => country.toLowerCase().includes(query))
        );
    };


    return (
        <div className="w-full md:w-[100%] p-6 relative bg-white rounded-lg shadow-md">
            <form className="space-y-4" onSubmit={handleSubmit} id='form'>
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-1/2 flex flex-col justify-start items-start">
                        <label htmlFor="firstName" className="text-sm  font-medium text-gray-700">First Name<span className='text-red-600'>*</span></label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full mt-2 p-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                            placeholder="What's your first name?"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name<span className='text-red-600'>*</span></label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full mt-2 p-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                            placeholder="What's your last name?"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-1/2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email<span className='text-red-600'>*</span></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full mt-2 p-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number<span className='text-red-600'>*</span></label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full mt-2 p-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                            placeholder="Enter your phone number"
                        />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-5'>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="company" className="text-sm font-medium text-gray-700">Company<span className='text-red-600'>*</span></label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full mt-2 p-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                            placeholder="Company Name"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="website" className="text-sm font-medium text-gray-700">Website <span className='text-red-600'>*</span></label>
                        <input
                            type="text"
                            id="website"
                            name="website"
                            value={formData.website}
                            onChange={handleInputChange}
                            className="w-full mt-2 p-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                            placeholder="www.example.com"
                        />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-5'>
                    <div className="w-full">
                        <label htmlFor="country-dropdown" className="text-sm font-medium text-gray-700">Select Your Country</label>
                        <input
                            type="text"
                            placeholder="Type to search..."
                            value={search}
                            onChange={handleSearch}
                            onFocus={() => setIsOpen4(true)}
                            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                        />
                        {isOpen4 && (
                            <div className="absolute z-10 mt-2 max-h-60 w-full overflow-y-auto rounded-md bg-white border border-gray-300 shadow-lg">
                                {filteredCountries.length > 0 ? (
                                    filteredCountries.map((country) => (
                                        <div
                                            key={country}
                                            onClick={() => {
                                                handleDropdownSelect("country", country);
                                                setIsOpen4(false);
                                                setSearch(country);
                                            }}
                                            className="cursor-pointer px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                        >
                                            {country}
                                        </div>
                                    ))
                                ) : (
                                    <div className="px-4 py-2 text-sm text-gray-500">No results found</div>
                                )}
                            </div>
                        )}
                    </div>

                </div>

                {/* Services Dropdown */}
                <div className="relative max-w-full inline-block text-left w-full">
                    <button
                        type="button"
                        className="inline-flex w-full justify-between rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                        onClick={toggleDropdown}
                    >
                        {formData.services || 'Choose a service'}
                        <svg
                            className={`-mr-1 ml-2 h-5 w-5 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    {isOpen && (
                        <div className="absolute left-0 z-10 mt-2 w-full origin-top rounded-md bg-white border border-gray-300 shadow-lg ring-1 ring-black ring-opacity-5">
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
                                "Other"
                            ].map((option) => (
                                <div
                                    key={option}
                                    onClick={() => {
                                        handleDropdownSelect("services", option);
                                        setIsOpen(false);
                                    }}
                                    className="cursor-pointer px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {/* Conditional Inputs Based on Selected Service */}
                {formData.services === 'Web Design and Development' && (
                    <>

                        <div className="w-full">
                            <div className="relative">
                                <button
                                    type="button"
                                    className="w-full p-3 border border-gray-300 rounded-lg text-left text-gray-700 focus:ring-2 focus:ring-[#670ef7]"
                                    onClick={toggleDropdown2}
                                >
                                    {formData.websiteType || 'What kind of website do you need?'}
                                </button>
                                {isOpen2 && (
                                    <div className="absolute w-full mt-1 max-h-40 overflow-y-auto border border-gray-300 bg-white rounded-lg z-10">
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
                                                    setIsOpen2(false);
                                                }}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="relative">
                                <button
                                    type="button"
                                    className="w-full p-3 border border-gray-300 rounded-lg text-left text-gray-700 focus:ring-2 focus:ring-[#670ef7]"
                                    onClick={toggleDropdown5}
                                >
                                    {formData.otherservices || 'What kind of additional services do you need?'}
                                </button>
                                {isOpen5 && (
                                    <div className="absolute w-full mt-1 max-h-40 overflow-y-auto border border-gray-300 bg-white rounded-lg z-10">
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
                                                    setIsOpen5(false);
                                                }}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}

                {/* Google Ads follow-up: running status + current spend */}
                {formData.services === 'Google Ads and PPC' && (
                    <div className="w-full space-y-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Are you currently running Google Ads?<span className='text-red-600'>*</span>
                            </label>
                            <div className="grid grid-cols-3 gap-3 mt-2">
                                {adsStatusOptions.map((status) => (
                                    <button
                                        key={status}
                                        type="button"
                                        onClick={() =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                googleAdsStatus: status,
                                                // spend only applies when already running ads
                                                marketingBudget: status === 'Yes' ? prev.marketingBudget : '',
                                            }))
                                        }
                                        className={`py-3 px-3 rounded-lg text-sm font-medium border transition ${
                                            formData.googleAdsStatus === status
                                                ? "bg-gradient-to-tr from-[black] via-[#090040] to-[#483aa0] text-white border-transparent shadow-md"
                                                : "bg-white border-gray-300 text-gray-700 hover:border-[#670ef7]"
                                        }`}
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {formData.googleAdsStatus === 'Yes' && (
                            <div className="w-full">
                                <label htmlFor="budget" className="text-sm font-medium text-gray-700">
                                    What&apos;s your current monthly ad spend?<span className='text-red-600'>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="budget"
                                    name="marketingBudget"
                                    value={formData.marketingBudget}
                                    onChange={handleInputChange}
                                    className="w-full mt-2 p-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                    placeholder="e.g. $2,000 / ₹1,50,000 per month"
                                />
                            </div>
                        )}
                    </div>
                )}


                {/* Message box */}
                <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What are your current marketing challenges?"
                    className="w-full p-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                ></textarea>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-tr from-[black] via-[#090040] to-[#483aa0] text-white py-3 rounded-lg hover:bg-[#5b0cd1] transition"
                >
                    Submit
                </button>
                <p className='text-black text-xs text-center'>In a hurry? Give us a call now at <Link href={'tel:+91910032301'}><span className='text-purple-500 font-bold'>+91-9100032301</span></Link></p>
            </form>
            <p className='text-black text-center mt-5 text-xs' >By submitting the form above, you consent to receive informational SMS and SMS-based appointment reminders from Bixeltek&apos;s Ideas at the phone number provided. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP. Reply HELP for help. <Link href={'privacy-policy'}><span className='underline underline-offset-2'>Privacy Policy & Terms.</span></Link> </p>
        </div>

    )
}