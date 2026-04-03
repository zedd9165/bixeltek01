"use client";
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiChevronDown, HiMenu, HiX } from 'react-icons/hi';
import { SiGoogleads, SiInstagram } from "react-icons/si";
import { TbDeviceImacSearch } from 'react-icons/tb';
import { IoLogoReact, IoPhonePortraitOutline } from 'react-icons/io5';
import { AiOutlineLineChart, AiOutlinePicture } from "react-icons/ai";
import anr from '@/assets/anr.jpg'
import googleads from '@/assets/grow.jpg'
import graphic from '@/assets/T-shirt Social Media Graphic - Mojahidul Islam.jpg'
import seo from '@/assets/Dentist Near Me Search Dashboard.png'
import webdesign from '@/assets/image2.jpeg'
import { TbLayoutDashboard } from "react-icons/tb";
import { AiOutlineCode, AiOutlineShoppingCart } from "react-icons/ai";
import { RiBankCardLine } from "react-icons/ri";
import cmsImage from '@/assets/laptop dentist 2.png'
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineFileSearch, AiOutlineTool } from "react-icons/ai";
import socialmedia from '@/assets/mobile-app-phone2.webp'
import customcoded from '@/assets/image 3.jpeg'
import payment from '@/assets/phone finanacce.png'
import ecommerce from '@/assets/E-Commerce-Website.png'
import seo1 from '@/assets/Component-1-1.png'
import seo2 from '@/assets/Frame-297.png'
import seo3 from '@/assets/Card-1.png'
import appdev from '@/assets/appdev.png'

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<keyof typeof locations>("canada");
  const [activeTab2, setActiveTab2] = useState<keyof typeof locations | null>(null);



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
      link: "#",
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
    // uk: {
    //   title: "United Kingdom",
    //   link: "#",
    //   cities: [
    //     {
    //       name: "London",
    //       link: "#",
    //       services: [
    //         { name: "SEO Services in London", link: "#" },
    //         { name: "PPC in London", link: "#" },
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
      id: 6,
      title: "Google Ads Management",
      desc: "Optimize and manage Google Ads campaigns effectively.",
      icon: <SiGoogleads size={24} />,
      link: "/services/google-ads",
      image: googleads,
    },
    {
      id: 7,
      title: "Search Engine Optimization",
      desc: "Improve your website ranking and visibility.",
      icon: <TbDeviceImacSearch size={24} />,
      link: "/services/seo-services",
      image: seo,
    },
    {
      id: 8,
      title: "Social Media Management",
      desc: "Enhance your online presence with expert strategies.",
      icon: <SiInstagram size={24} />,
      link: "/social-media-marketing-agency-hyderabad",
      image: socialmedia,
    },
    {
      id: 9,
      title: "Web Design and Development",
      desc: "Build scalable and modern web solutions.",
      icon: <IoLogoReact size={24} />,
      link: "/services/web-design",
      image: webdesign,
    },
    {
      id: 10,
      title: "Mobile App Development",
      desc: "iOS, Android & cross-platform mobile apps.",
      icon: <IoPhonePortraitOutline size={24} />,
      link: "/services/app-development",
      image: appdev,
    },
    {
      id: 11,
      title: "Analytics Reporting",
      desc: "Track and analyze your business metrics for smarter decisions.",
      icon: <AiOutlineLineChart size={24} />,
      link: "#",
      image: anr,
    },
    {
      id: 12,
      title: "Graphic Design",
      desc: "Create stunning visuals to elevate your brand identity.",
      icon: <AiOutlinePicture size={24} />,
      link: "#",
      image: graphic,
    },
    {
      id: 13,
      title: "Custom CMS Websites",
      desc: "Tailor-built CMS platforms with flexibility and SEO-ready architecture.",
      icon: <TbLayoutDashboard size={24} />,
      link: "/custom-cms-websites",
      image: cmsImage,
    },
    {
      id: 14,
      title: "Custom Coded Websites",
      desc: "Fully hand-coded sites for performance, scalability, and uniqueness.",
      icon: <AiOutlineCode size={24} />,
      link: "/custom-coded-websites",
      image: customcoded,
    },
    {
      id: 15,
      title: "Payment Gateway Integration",
      desc: "Seamless integrations with Razorpay, Stripe, PayPal, and more.",
      icon: <RiBankCardLine size={24} />,
      link: "/payment-gateway-integrations",
      image: payment,
    },
    {
      id: 16,
      title: "E-commerce Website",
      desc: "Conversion-focused online stores built for speed and scalability.",
      icon: <AiOutlineShoppingCart size={24} />,
      link: "/ecommerce-websites",
      image: ecommerce,
    },

    // 🌍 NEWLY ADDED SEO SERVICES
    {
      id: 17,
      title: "Local SEO",
      desc: "Increase local visibility with optimized maps, listings, and reviews.",
      icon: <FaMapMarkerAlt size={24} />,
      link: "/local-seo",
      image: seo1, // import an image named `localseo` from assets
    },
    {
      id: 18,
      title: "On-Page SEO",
      desc: "Optimize content, meta tags, and structure for stronger relevance.",
      icon: <AiOutlineFileSearch size={24} />,
      link: "/on-page-seo",
      image: seo2, // import from assets
    },
    {
      id: 19,
      title: "Technical SEO",
      desc: "Enhance site speed, crawlability, and schema for better indexing.",
      icon: <AiOutlineTool size={24} />,
      link: "/technical-seo",
      image: seo3, // import from assets
    },

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
                      <Link href="/services/google-ads" className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Google Ads Management
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/seo-services" className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Search Engine Optimization
                      </Link>
                    </li>
                    <li>
                      <Link href="/social-media-marketing-agency-hyderabad" className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Social Media Management
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/web-design" className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Web Design and Development
                      </Link>
                    </li>
                    <li>
                        <Link href="/services/app-development" onClick={toggleMenu} className="block py-2 px-4 hover:bg-gray-700 rounded">
                        App Design and Development
                        </Link>
                    </li>                      
                    <li>
                      <Link href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Analytics Reporting
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Graphic Design
                      </Link>
                    </li>
                    <li>
                      <Link href="/custom-cms-websites" className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Custom CMS Websites
                      </Link>
                    </li>
                    <li>
                      <Link href="/custom-coded-websites" className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Custom Coded Websites
                      </Link>
                    </li>
                    <li>
                      <Link href="/payment-gateway-integrations" className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Payment Gateway Integration
                      </Link>
                    </li>
                    <li>
                      <Link href="/ecommerce-websites" className="block py-2 px-4 hover:bg-gray-700 rounded">
                        E-commerce Website
                      </Link>
                    </li>
                    <li>
                      <Link href="/local-seo" className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Local SEO
                      </Link>
                    </li>
                    <li>
                      <Link href="/technical-seo" className="block py-2 px-4 hover:bg-gray-700 rounded">
                        Technical SEO
                      </Link>
                    </li>
                    <li>
                      <Link href="/on-page-seo" className="block py-2 px-4 hover:bg-gray-700 rounded">
                        On Page SEO
                      </Link>
                    </li>
                  </motion.ul>

                )}
              </li>
              <li><Link href="/industries" className="block py-2 px-4 hover:bg-purple-600 rounded">Industries</Link></li>
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
                <button onClick={() => { setIsDropdownOpen2(!isDropdownOpen2) }} className="flex justify-between w-full py-2 px-4 hover:bg-purple-600 rounded">Case Studies <HiChevronDown className="text-xl md:text-2xl" /></button>
                {isDropdownOpen2 && (
                  <motion.ul initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="ml-4 text-lg md:text-xl space-y-2">
                    <li><Link href="/case-studies/Tumblewash-Casestudy" className="block py-2 px-4 hover:bg-gray-700 rounded">Tumblewash-Casestudy</Link></li>
                    <li><Link href="/case-studies/google-ads-case-study-bike-repair-hyderabad" className="block py-2 px-4 hover:bg-gray-700 rounded">Eazy Bike Repair Case Study</Link></li>
                    <li><Link href="/case-studies/digital-marketing-for-dentists-case-study" className="block py-2 px-4 hover:bg-gray-700 rounded">Digital Marketing for Dentists</Link></li>
                    <li><Link href="/case-studies" className="block py-2 px-4 hover:bg-gray-700 rounded">View More</Link></li>
                  </motion.ul>
                )}
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
                  <div className="w-[75%] grid grid-cols-3 gap-4 px-10">
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
                      href="/industries/dental-marketing"
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
              <li className="relative group py-7">
                <Link href={'/case-studies/'}>
                  <div className="text-white/70 hover:text-white  transition flex items-center">
                    Case Studies <HiChevronDown className="ml-1 text-xs" />
                  </div>
                </Link>


                <ul className="absolute top-full -left-7 mt-0 bg-white rounded-b-md shadow-lg hidden group-hover:block z-50 min-w-[200px]">
                  <li>
                    <Link
                      href="/case-studies/Tumblewash-Casestudy"
                      className="block px-4 py-2 hover:bg-gradient-to-tr text-black hover:from-[black] hover:via-[#090040] hover:to-[#483aa0]  rounded-b-md hover:bg-[white] hover:text-white transition"
                    >
                      Tumblewash Case Study
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/case-studies/google-ads-case-study-bike-repair-hyderabad"
                      className="block px-4 py-2 hover:bg-gradient-to-tr text-black hover:from-[black] hover:via-[#090040] hover:to-[#483aa0]  rounded-b-md hover:bg-[white] hover:text-white transition"
                    >
                      Eazy Bike Repair Case Study
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/case-studies/digital-marketing-for-dentists-case-study"
                      className="block px-4 py-2 hover:bg-gradient-to-tr text-black hover:from-[black] hover:via-[#090040] hover:to-[#483aa0]  rounded-b-md hover:bg-[white] hover:text-white transition"
                    >
                      Dental Clinic Case Study
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/case-studies"
                      className="block px-4 py-2 hover:bg-gradient-to-tr text-black hover:from-[black] hover:via-[#090040] hover:to-[#483aa0]  rounded-b-md hover:bg-[white] hover:text-white transition"
                    >
                      View All
                    </Link>
                  </li>
                </ul>
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
