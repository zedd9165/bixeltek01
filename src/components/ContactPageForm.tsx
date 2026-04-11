// components/ContactSection.tsx
'use client';
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import ContactFrom from '@/components/ContactFrom'
import ContactFromNew from './ContactFormNew';
import { PhoneCall } from 'lucide-react';


export const ContactSection: React.FC = () => {
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
        message: ''
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
        setFormData({ ...formData, [field]: value });
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
            alert("Please fill in all required fields.");
            return;
        }
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json(); // Try parsing response

            if (!response.ok) throw new Error(result.error || 'Failed to send message.');

            router.push('/thank-you'); // Redirect to thank you page

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
                message: ''
            });
        } catch (error: any) {
            console.error("Error submitting form:", error);
            alert(`Something went wrong: ${error.message}`); // Show exact error
        }
    };
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [search, setSearch] = useState(""); // State for filtering
    const [filteredCountries, setFilteredCountries] = useState(countries); // Dynamic list

    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    }
    const toggleDropdown3 = () => {
        setIsOpen4(!isOpen4);
    }

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    }
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const handleSearch = (event: any) => {
        const query = event.target.value.toLowerCase();
        setSearch(query);
        setFilteredCountries(
            countries.filter((country) => country.toLowerCase().includes(query))
        );
    };

    return (
        <>
            <section className="bg-neutral-900 relative text-white min-h-[80vh] py-40 md:py-64 px-6 md:px-20 lg:px-32" style={{
                backgroundImage: `url("/neom-Z6YxSbcIXT0-unsplash.jpg")`, // ✅ relative to public folder
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>

                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                <div className="flex flex-col relative lg:flex-row gap-20">
                    {/* Left Side: Info */}


                    <div className='lg:w-[60%] flex items-end justify-end'>

                        <ContactFromNew />
                    </div>
                    {/* Left Side: Vertical Steps Info */}
                    <div className="w-full lg:w-1/2 space-y-8 text-white">

                        <h2 className="text-4xl lg:text-5xl font-bold">
                            Ready to Dominate Your Market?
                        </h2>
                        <p className="text-lg text-gray-200">
                            Jumpstart your digital marketing success in 3 easy steps:
                        </p>

                        {/* Steps */}
                        <div className="relative border-l-2 border-white/30 pl-10 ml-6 space-y-10">
                            {/* Step 1 */}
                            <div className="flex items-start gap-4 relative">
                                <div className="absolute -left-[62px] flex items-center justify-center w-10 h-10 rounded-full bg-white text-green-700 font-bold">
                                    1
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <h3 className="text-3xl font-semibold">Contact Us</h3>
                                    <p className="text-gray-300 text-sm max-w-md">
                                        Fill out our brief contact form, and we’ll be in touch with you soon to learn more about your business.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex items-start gap-4 relative">
                                <div className="absolute -left-[62px] flex items-center justify-center w-10 h-10 rounded-full bg-white text-green-700 font-bold">
                                    2
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <h3 className="text-3xl font-semibold">Launch Targeted Campaigns</h3>
                                    <p className="text-gray-300 text-sm max-w-md">
                                        Our digital marketing experts will work closely with you to implement data-driven strategies that drive business growth.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex items-start gap-4 relative">
                                <div className="absolute -left-[62px] flex items-center justify-center w-10 h-10 rounded-full bg-white text-green-700 font-bold">
                                    3
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <h3 className="text-3xl font-semibold">Achieve Lasting Growth</h3>
                                    <p className="text-gray-300 text-sm max-w-md">
                                        Solidify your digital presence, expand your brand reach and see outstanding results month-over-month.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Contact Info */}
                        <div className="pt-0  bg-white rounded-xl  text-black text-sm">
                            <div className="grid grid-cols-1 md:grid-cols-2 p-7 gap-6">
                                <div className='flex flex-col gap-3'>
                                <div className='flex flex-col gap-3'>
                                    <p className="font-semibold text-xl">Headquarters:</p>
                                    <address className="text-base not-italic">
                                        Bixeltek,
                                        3rd Floor,
                                        Nahid Plaza,  
                                        beside AR Banquet,
                                        Salar Jung Colony,<br/>
                                        Toli Chowki,
                                        Hyderabad, Telangana 500008  
                                    </address>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <p className="font-semibold text-xl">Saudi Office <span className='text-base'>(coming soon)</span>:</p>
                                    <address className="text-base not-italic">
                                        Bixeltek,
                                        Qahtani Building, Above SAB Bank, Dammam 32242, Saudi Arabia
                                    </address>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3'>
                            <p className="font-semibold text-xl">Get In Touch</p>
                                <div className='flex flex-col gap-2'>
                                    <a href="tel:+14375252301">
                                    <p className="font-semibold text-lg hover:text-purple-500 flex gap-3">
                                        <PhoneCall className="text-purple-500" />
                                        Canada : +1 437 525 2301
                                        </p>
                                    </a>

                                    <a href="tel:+18453823415">
                                        <p className="font-semibold text-lg hover:text-purple-500 flex gap-3">
                                        <PhoneCall className="text-purple-500" />
                                        USA : +1 845 382 3415
                                        </p>
                                    </a>
                                    <a href="tel:+919100032301">
                                        <p className="font-semibold text-lg hover:text-purple-500 flex gap-3"><PhoneCall className="text-purple-500" />India : +91 9100032301</p>
                                    </a>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className="font-semibold text-xl">Email:</p>
                                    <a href="mailto:hello@bixeltek.com " className="text-lg font-semibold hover:text-purple-500">
                                        hello@bixeltek.com
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
