"use client";
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiChevronDown, HiMenu, HiX, HiOutlineSparkles } from 'react-icons/hi';
import { SiGoogleads, SiInstagram, SiShopify, SiMeta } from "react-icons/si";
import { TbDeviceImacSearch, TbTargetArrow, TbDeviceDesktopCode } from 'react-icons/tb';
import { IoLogoReact, IoPhonePortraitOutline } from 'react-icons/io5';
import {
  AiOutlineLineChart,
  AiOutlinePicture,
  AiOutlineShoppingCart,
  AiOutlineFileSearch,
  AiOutlineFileText,
} from "react-icons/ai";
import anr from '@/assets/anr.jpg';
import googleads from '@/assets/grow.jpg';
import graphic from '@/assets/T-shirt Social Media Graphic - Mojahidul Islam.jpg';
import seo from '@/assets/Dentist Near Me Search Dashboard.png';
import webdesign from '@/assets/image2.jpeg';
import socialmedia from '@/assets/mobile-app-phone2.webp';
import ecommerce from '@/assets/E-Commerce-Website.png';
import appdev from '@/assets/appdev.png';
import pdpl from '@/assets/pdpl-consulting.png';
import shopifyImg from '@/assets/shopify-overview.webp';
import metaAdsImg from '@/assets/meta-ads-overview.png';
import croImg from '@/assets/cro-overview.png';
import customAppImg from '@/assets/web-application-overview.webp';
import contentImg from '@/assets/content-overview.webp';
import aiAutomationImg from '@/assets/ai-automation-overview.jpg';

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<keyof typeof locations>("canada");
  const [activeTab2, setActiveTab2] = useState<keyof typeof locations | null>(null);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const locations = {
    canada: {
      title: "Canada",
      link: "#",
      cities: [
        {
          name: "Toronto",
          link: "/toronto",
          services: [
            { name: "Google Ads Management", link: "/toronto/google-ads-management" },
            { name: "Search Engine Optimisation", link: "/toronto/seo-services" },
            { name: "Web Design and Development", link: "/toronto/web-design" },
          ],
        },
        {
          name: "Mississauga",
          link: "/mississauga",
          services: [
            { name: "Google Ads Management", link: "/mississauga/google-ads" },
            { name: "Search Engine Optimisation", link: "/mississauga/seo-services" },
            { name: "Web Design and Development", link: "/mississauga/web-design" },
          ],
        },
        {
          name: "Vancouver",
          link: "/vancouver",
          services: [
            { name: "Google Ads Management", link: "/vancouver/google-ads" },
            { name: "Search Engine Optimisation", link: "/vancouver/seo-services" },
            { name: "Web Design and Development", link: "/vancouver/web-design-services" },
            { name: "Social Media Marketing", link: "/vancouver/social-media-marketing" },
          ],
        },
      ],
    },
    india: {
      title: "India",
      link: "/india",
      cities: [
        {
          name: "Hyderabad",
          link: "/hyderabad",
          services: [
            { name: "Google Ads Management", link: "/google-ads-agency-hyderabad" },
            { name: "Search Engine Optimisation", link: "/seo-agency-hyderabad" },
            { name: "Web Design and Development", link: "/web-design-services-hyderabad" },
            { name: "Social Media Marketing", link: "/social-media-marketing-agency-hyderabad" },
          ],
        },
        {
          name: "Bangalore",
          link: "/bangalore",
          services: [
            { name: "Google Ads Management", link: "/bangalore/google-ads-management" },
            { name: "Web Design and Development", link: "/bangalore/website-design-company" },
            { name: "Search Engine Optimisation", link: "/bangalore/seo-services" },
          ],
        },
      ],
    },
    // usa: {
    //   title: "United States",
    //   link: "#",
    //   cities: [
    //     {
    //       name: "New York",
    //       link: "#",
    //       services: [
    //         { name: "SEO Services in New York", link: "#" },
    //         { name: "Social Media Marketing", link: "#" },
    //       ],
    //     },
    //     {
    //       name: "Chicago",
    //       link: "#",
    //       services: [
    //         { name: "SEO Services in Chicago", link: "#" },
    //       ],
    //     },
    //   ],
    // },
    saudi: {
      title: "Saudi Arabia",
      link: "#",

      cities: [
        {
          name: "Eastern Province",
          link: "/saudi-arabia/eastern-province",
          services: [
            { name: "Google Ads Management", link: "/saudi-arabia/eastern-province/google-ads-management" },
            { name: "Search Engine Optimisation", link: "/saudi-arabia/eastern-province/seo-services" },
            { name: "Web Design and Development", link: "/saudi-arabia/eastern-province/web-design-services" },
            { name: "Social Media Marketing", link: "/saudi-arabia/eastern-province/social-media-management" },
          ],
        },
        {
          name: "Riyadh",
          link: "/saudi-arabia/riyadh/",
          services: [
            { name: "Google Ads Management", link: "/saudi-arabia/riyadh/google-ads-management" },
            { name: "Search Engine Optimisation", link: "/saudi-arabia/riyadh/seo-services" },
            { name: "Web Design and Development", link: "/saudi-arabia/riyadh/web-design-services" },
            { name: "Social Media Marketing", link: "/saudi-arabia/riyadh/social-media-management" },
          ],
        },
      ],
    },
    uk: {
      title: "United Kingdom & Ireland",
      link: "#",
      cities: [
        {
          name: "",
          link: "#",
          services: [
            { name: "Google Ads Management", link: "/uk/google-ads-managment" },
            { name: "Search Engine Optimisation", link: "/uk/seo-services" },
            { name: "Web Design and Development", link: "/uk/web-design" },
            { name: "Social Media Marketing", link: "/uk/social-media-management" },
          ],
        },
      ],
    },
    // uae: {
    //   title: "United Arab Emirites",
    //   link: "#",
    //   cities: [
    //     {
    //       name: "Dubai",
    //       link: "#",
    //       services: [
    //         { name: "SEO Services in Dubai", link: "#" },
    //         { name: "PPC in Dubai", link: "#" },
    //       ],
    //     },
    //   ],
    // },
  };

  const posts = [

    {
      id: 1,
      title: "Tumblewash Case Study",
      description: "Learn essential steps to begin your journey in the digital marketing world effectively.",
      link: "/case-studies/Tumblewash-Casestudy",
      glowcolor: "bg-purple-500",
    },
    {
      id: 2,
      title: "Eazy Bike Repair Case Study",
      description: "Learn essential steps to begin your journey in the digital marketing world effectively.",
      link: "/case-studies/google-ads-case-study-bike-repair-hyderabad",
      glowcolor: "bg-purple-500",
    },
    {
      id: 3,
      title: "Digital Marketing for Dentists",
      description: "Learn essential steps to begin your journey in the digital marketing world effectively.",
      link: "/case-studies/digital-marketing-for-dentists-case-study",
      glowcolor: "bg-purple-500",
    },
    // {
    //   id: 4,
    //   title: "View All",
    //   description: "Learn essential steps to begin your journey in the digital marketing world effectively.",
    //   link: "/casestudies-bixeltek",
    //   glowcolor: "bg-purple-500",
    // },

  ];
    const services = [
    {
      id: 1,
      title: "Google Ads Management",
      desc: "Optimize and manage Google Ads campaigns effectively.",
      icon: <SiGoogleads size={24} />,
      link: "/services/google-ads",
      image: googleads,
    },
    {
      id: 2,
      title: "Search Engine Optimization",
      desc: "Improve your website ranking and visibility.",
      icon: <TbDeviceImacSearch size={24} />,
      link: "/services/seo-services",
      image: seo,
    },
    {
      id: 3,
      title: "Meta Ads Management",
      desc: "High-ROI paid social campaigns across Facebook and Instagram.",
      icon: <SiMeta size={24} />,
      link: "/services/meta-ads",
      image: metaAdsImg,
    },
    {
      id: 4,
      title: "Social Media Management",
      desc: "Enhance your online presence with expert strategies.",
      icon: <SiInstagram size={24} />,
      link: "/social-media-marketing-agency-hyderabad",
      image: socialmedia,
    },
    {
      id: 5,
      title: "Conversion Rate Optimization",
      desc: "Turn more visitors into paying customers with data-driven CRO.",
      icon: <TbTargetArrow size={24} />,
      link: "/services/conversion-rate-optimization",
      image: croImg,
    },
    {
      id: 6,
      title: "Web Design and Development",
      desc: "Build scalable and modern web solutions.",
      icon: <IoLogoReact size={24} />,
      link: "/services/web-design",
      image: webdesign,
    },
    {
      id: 7,
      title: "E-commerce Website",
      desc: "Conversion-focused online stores built for speed and scalability.",
      icon: <AiOutlineShoppingCart size={24} />,
      link: "/services/ecommerce-development",
      image: ecommerce,
    },
    {
      id: 8,
      title: "Shopify Development",
      desc: "Custom Shopify stores, high-converting themes, and integrations.",
      icon: <SiShopify size={24} />,
      link: "/services/ecommerce-development/shopify",
      image: shopifyImg,
    },
    {
      id: 9,
      title: "Custom App Development",
      desc: "Bespoke web applications and software built for scale.",
      icon: <TbDeviceDesktopCode size={24} />,
      link: "/services/custom-app-development",
      image: customAppImg,
    },
    {
      id: 10,
      title: "Mobile App Development",
      desc: "iOS, Android & cross-platform mobile apps.",
      icon: <IoPhonePortraitOutline size={24} />,
      link: "/services/custom-app-development/mobile-app-development",
      image: appdev,
    },
    {
      id: 11,
      title: "Analytics Reporting",
      desc: "Track and analyze your business metrics for smarter decisions.",
      icon: <AiOutlineLineChart size={24} />,
      link: "/services/analytics-tracking",
      image: anr,
    },
    {
      id: 12,
      title: "Content Creation",
      desc: "Engaging, high-converting content tailored to your audience.",
      icon: <AiOutlineFileText size={24} />,
      link: "/services/content-creation",
      image: contentImg,
    },
    {
      id: 13,
      title: "Graphic Design",
      desc: "Create stunning visuals to elevate your brand identity.",
      icon: <AiOutlinePicture size={24} />,
      link: "/services/graphic-design",
      image: graphic,
    },
    {
      id: 14,
      title: "AI Automation",
      desc: "Streamline workflows and operations with intelligent AI systems.",
      icon: <HiOutlineSparkles size={24} />,
      link: "/services/automation/ai-automation",
      image: aiAutomationImg,
    },
    {
      id: 15,
      title: "PDPL Consulting",
      desc: "Comprehensive PDPL compliance programs for businesses in Saudi Arabia.",
      icon: <AiOutlineFileSearch size={24} />,
      link: "/services/pdpl-consulting",
      image: pdpl,
    },
  ];


    const headerIndustries = [
    { name: "Dental Clinics", link: "/industries/dental-marketing-agency" },
    { name: "Medical Clinics", link: "/industries/medical-clinics" },
    { name: "Physiotherapy", link: "/industries/physiotherapy-clinic" },
    { name: "Roofing & Contractors", link: "/industries/roofing" },
    { name: "HVAC Services", link: "/industries/hvac" },
    { name: "Cleaning Services", link: "/industries/cleaning" },
    { name: "Real Estate", link: "/industries/real-estate" },
    { name: "Construction", link: "/industries/construction" },
    { name: "Legal & Law Firms", link: "/industries/legal" },
    { name: "Retail & Ecommerce", link: "/industries/retail" },
    { name: "Technology & SaaS", link: "/industries/technology-saas" },
    { name: "Automotive Services", link: "/industries/automotive" },
  ];

  const [hoveredService, setHoveredService] = useState(services[0]);
  return (
    <header className="px-3 py-5  max-w-[90%] mx-auto sticky top-0 z-[60]">
      <div className="container relative bg-black flex justify-between items-center border-white/15 border-solid border-2 rounded-xl shadow-purple-custom backdrop:blur-3xl">
        <div className="text-white py-4 md:py-6 xl:py-3">
          <Link href={"/"}>
            <Image src='/BIXELTEKLOGO.png' width={100} height={40} alt="Bixeltek Logo" className='h-7 w-auto' />
          </Link>
        </div>
        <button className="xl:hidden text-white text-3xl" onClick={toggleMenu}>
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="fixed top-0 right-0 h-full w-full bg-black shadow-lg p-6 z-50 xl:hidden overflow-y-auto overscroll-contain"
        >

          <button className="absolute top-4 right-4 text-white text-3xl" onClick={toggleMenu}>
            <HiX />
          </button>
          <nav className="mt-10 pb-10">

            <ul className="text-white text-xl md:text-2xl font-sofiasanscondensed space-y-4">
              <li><Link href="/" className="block py-2 px-4 hover:bg-purple-600  rounded">Home</Link></li>
              <li>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex justify-between w-full py-2 px-4 hover:bg-purple-600 rounded">
                  Our Solutions <HiChevronDown className="text-xl md:text-2xl" />
                </button>
                {isDropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 text-lg md:text-xl space-y-2"
                  >
                    <li>
                      <Link href="/services/google-ads" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Google Ads Management
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/seo-services" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Search Engine Optimization
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/meta-ads" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Meta Ads Management
                      </Link>
                    </li>
                    <li>
                      <Link href="/social-media-marketing-agency-hyderabad" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Social Media Management
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/conversion-rate-optimization" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Conversion Rate Optimization
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/web-design" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Web Design and Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/ecommerce-development" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-700 rounded">
                        E-commerce Website
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/ecommerce-development/shopify" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Shopify Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/custom-app-development" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Custom App Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/custom-app-development/mobile-app-development" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Mobile App Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/analytics-tracking" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Analytics Reporting
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/content-creation" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Content Creation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/graphic-design" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Graphic Design
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/automation/ai-automation" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-700 rounded">
                        AI Automation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/pdpl-consulting" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-700 rounded">
                        PDPL Consulting
                      </Link>
                    </li>
                  </motion.ul>

                )}
              </li>
              <li>
                           <div className="flex justify-between items-center px-4">
                                <Link href="/industries" onClick={toggleMenu}>
                                    Industries
                                </Link>
                                <button onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}>
                                    <HiChevronDown />
                                </button>
                                </div>

                            {isIndustriesOpen && (
                                <motion.ul
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-4 text-lg space-y-2"
                                >
                                <li>
                                    <Link
                                    href="/industries/dental-marketing-agency"
                                    onClick={toggleMenu}
                                    className="block py-2 px-4 text-gray-200 hover:text-purple-400"
                                    >
                                    Dental Marketing
                                    </Link>
                                </li>
                                </motion.ul>
                            )}
                            </li>
              <li>
                <button
                  onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                  className="flex justify-between w-full py-2 px-4 hover:bg-purple-600 rounded"
                >
                  Locations <HiChevronDown className="text-xl" />
                </button>

                {isLocationsOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 text-lg space-y-2"
                  >
                    {Object.keys(locations).map((country) => {
                      const typedCountry = country as keyof typeof locations;

                      return (
                        <li key={country}>
                          <button
                            onClick={() =>
                              setActiveTab2(activeTab2 === typedCountry ? null : typedCountry)
                            }
                            className={`flex justify-between w-full py-2 px-4 rounded ${activeTab2 === typedCountry
                              ? "bg-gradient-to-tr from-[black] via-[#090040] to-[#483aa0] text-white"
                              : "hover:bg-gray-700"
                              }`}
                          >
                            {locations[typedCountry].title} <HiChevronDown />
                          </button>

                          {activeTab2 === typedCountry && (
                            <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className="ml-6 mt-2 space-y-4"
                            >
                              {locations[typedCountry].cities.map((city) => (
                                <div key={city.name}>
                                  <Link
                                    href={city.link}
                                    className="block font-semibold text-gray-200 hover:text-purple-400"
                                  >
                                    {city.name}
                                  </Link>
                                  <ul className="mt-1 ml-3 space-y-1">
                                    {city.services.map((service) => (
                                      <li key={service.name}>
                                        <Link
                                          href={service.link}
                                          className="text-sm text-gray-400 hover:text-purple-300"
                                        >
                                          {service.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </li>
              <li>
                <Link href="/case-studies" className="block py-2 px-4 hover:bg-purple-600 rounded">Case Studies</Link>
              </li>
              <li><Link href="/blog" className="block py-2 px-4 hover:bg-purple-600 rounded">Blog</Link></li>
              {/* <li><Link href="/about-us" className="block py-2 px-4 hover:bg-purple-600 rounded">About Us</Link></li> */}
              <li><Link href="/contact-us" className="block py-2 px-4 hover:bg-purple-600 rounded">Contact Us</Link></li>
            </ul>
            <div className=" justify-center  items-center gap-5 py-4">
              <a href="tel:+919100032301">
                <button className="bg-gradient-to-t  from-[#4a208a] to-[#13012e] border border-[#8a45f2] text-white font-normal text-sm py-2 px-4 rounded-lg shadow-custom">
                  <span>Talk to a Specialist</span>
                </button>
              </a>
            </div>

          </nav>
        </motion.div>
        <div className="hidden xl:flex text-[17px] tracking-widest">
          <nav className="flex items-stretch">
            <ul className="flex gap-8 h-auto font-sofiasanscondensed font-normal tracking-widest">
              <li className="flex items-center py-7">
                <Link href="/" className="text-white/70 hover:text-white transition">
                  Home
                </Link>
              </li>

              {/* Our Services Dropdown */}
              <li
                className="flex items-center py-7"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition flex items-center"
                >
                  Our Solutions <HiChevronDown className="ml-1 text-sm text-white" />
                </a>

                {/* Mega Menu Dropdown */}
                <div className={`absolute top-full left-0 right-0 w-full bg-white rounded-b-2xl shadow-lg py-8 flex transition-all duration-300 ${isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}>

                  {/* Left: Services (80%) */}
                  <div className="w-[75%] grid grid-flow-col grid-rows-5 grid-cols-3 gap-4 px-10">
                    {services.map((service) => (
                      <Link
                        key={service.id} // ✅ key moved here
                        href={service.link}
                      >
                        <div
                          onMouseEnter={() => setHoveredService(service)}
                          className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-100 cursor-pointer transition"
                        >
                          <div className="text-[#670ef7] flex-shrink-0">{service.icon}</div>
                          <div>
                            <h3 className="font-semibold text-black">{service.title}</h3>
                            <p className="text-gray-500 text-sm">{service.desc}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Right: Image + CTA (20%) */}
                  <div className="w-[25%] flex flex-col justify-between items-center pr-8 min-h-[240px]">
                    <Image
                      src={hoveredService.image}
                      alt={hoveredService.title}
                      className="object-contain w-auto h-[300px]"
                    />
                  </div>
                </div>
              </li>
              <li className="flex group relative items-center py-7">
                <Link href="/industries" className="text-white/70 flex items-center hover:text-white transition">
                  Industries <HiChevronDown className="ml-1 text-sm" />
                </Link>
                <ul className="absolute top-full -left-7 mt-0 bg-white rounded-b-md shadow-lg hidden group-hover:block z-50 min-w-[200px]">
                  <li>
                    <Link
                      href="/industries/dental-marketing-agency"
                      className="block px-4 py-2 text-black bg-gradient-to-tr hover:from-[black] hover:via-[#090040] hover:to-[#483aa0] hover:rounded-b-md hover:text-white transition"
                    >
                      Dental Marketing
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="flex group relative items-center py-7">
                <Link href="#" className="text-white/70 flex justify-center items-center hover:text-white transition">
                  Locations <HiChevronDown className="text-sm" />
                </Link>

                {/* Mega Menu */}
                <div className="absolute top-full -left-72 rounded-br-2xl  rounded-bl-2xl mt-0 bg-white shadow-lg  hidden group-hover:flex z-50 w-[900px] min-h-[350px]">

                  {/* Tabs (Countries) */}
                  <ul className="w-1/3 border-r border-gray-200 rounded-bl-2xl bg-white">
                    {Object.keys(locations).map((country) => (
                      <li
                        key={country}
                        onMouseEnter={() => setActiveTab(country as keyof typeof locations)}
                        className={`cursor-pointer px-4 py-3 text-black font-semibold transition 
              ${activeTab === country ? "bg-gradient-to-tr from-[black] via-[#090040] to-[#483aa0] text-white " : "hover:bg-purple-100 text-black"}`}
                      >
                        <Link href={locations[country as keyof typeof locations].link}>
                          {locations[country as keyof typeof locations].title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Content (Cities & Services) */}
                  <div className="w-2/3 p-6">
                    <h3 className="text-xl font-bold text-purple-700 mb-4">
                      <Link href={locations[activeTab].link}>
                        {locations[activeTab].title}
                      </Link>
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      {locations[activeTab].cities.map((city) => (
                        <div key={city.name}>
                          <Link href={city.link} className="block font-semibold text-gray-800 hover:text-purple-600">
                            {city.name}
                          </Link>
                          <ul className="mt-2 space-y-1">
                            {city.services.map((service) => (
                              <li key={service.name}>
                                <Link href={service.link} className="text-sm text-gray-900 hover:text-purple-600">
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex items-center py-7">
                <Link href="/case-studies" className="text-white/70 hover:text-white transition">
                  Case Studies
                </Link>
              </li>


              <li className="flex items-center py-7">
                <Link href="/blog" className="text-white/70 hover:text-white transition">
                  Blog
                </Link>
              </li>
              {/* <li className="flex items-center py-7 lg:inline">
                <Link href='/about-us' className="text-white/70 hover:text-white transition">
                  About Us
                </Link>
              </li> */}
              <li className="flex items-center py-7 lg:inline">
                <Link href='/contact-us' className="text-white/70 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden xl:flex justify-center items-center gap-5 py-4">
          <a href="tel:+919100032301">
            <button className="bg-gradient-to-t from-[#4a208a] to-[#13012e] border border-[#8a45f2] text-white font-normal text-sm py-2 px-4 rounded-lg shadow-custom">
              <span>Talk to a Specialist</span>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};
