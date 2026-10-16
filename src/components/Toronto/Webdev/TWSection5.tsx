"use client";

import React from 'react';
import Link from 'next/link';

export default function WebDesignServicesToronto() {

  const webServices = [
    {
      title: "Custom Website Design",
      description: "We create unique, brand-aligned website designs that build trust, engage visitors, and reflect your company’s personality, ensuring a strong and memorable online presence.",
      link: "/custom-coded-websites",
    },
    {
      title: "Custom Coded Websites",
      description: "Develop complex, feature-rich websites using clean, efficient code tailored to your advanced requirements, providing performance, scalability, and full customization for your business needs.",
      link: "/custom-coded-websites",
    },
    {
      title: "Custom CMS Development",
      description: "Build fully custom content management systems with WordPress, Next.js, or bespoke platforms, designed to streamline your workflows and give you complete control over website content.",
      link: "/custom-cms-websites",
    },
    {
      title: "Ecommerce Websites",
      description: "Create Shopify, WooCommerce, or custom ecommerce websites optimized for sales, providing seamless user experiences, smooth checkout processes, and high conversion rates for online stores.",
      link: "/services/ecommerce-development",
    },
    {
      title: "Payment Gateway Integrations",
      description: "Integrate secure, reliable payment gateways into your website, enabling smooth online transactions, protecting sensitive data, and offering multiple payment options for your customers.",
      link: "/payment-gateway-integrations",
    },
    {
      title: "Landing Page Design",
      description: "Design high-converting landing pages tailored for campaigns, promotions, and PPC ads, crafted to capture leads effectively and maximize marketing ROI for your business.",
      link: "#",
    },
    {
      title: "Website Redesigns",
      description: "Modernize outdated websites with fresh designs, improved functionality, and optimized user experience, ensuring your site aligns with current trends and enhances brand credibility.",
      link: "#",
    },
    {
      title: "Support & Maintenance",
      description: "Provide ongoing website support including updates, backups, security monitoring, and performance optimization, ensuring your website remains reliable, fast, and secure at all times.",
      link: "#",
    },
  ];

  return (
    <section className='relative py-10 lg:py-24'>
      {/* Background Blobs */}
      <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
      <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>

      <div>
        {/* Section Heading */}
        <div className='max-w-[90%] lg:max-w-[80%] mx-auto mb-5 text-center'>
          <h2 className='text-white text-3xl md:text-6xl max-w-7xl mx-auto font-inter mb-3 font-semibold '>
            Full-Spectrum <span className='text-blue-500'>Web Design & Development Services</span>
          </h2>
          <p className='text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto'>
            Different businesses have different needs. That’s why we provide a complete range of web design and development services — from simple landing pages to complex custom builds. Whatever your vision, we deliver websites that scale with your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[90%] lg:max-w-[75%] mx-auto mt-10 gap-0">
          {webServices.map((service, index) => (
            <div
              key={index}
              className={`relative group w-full h-80 border border-gray-800 bg-black/10 hover:bg-blue-600 transition-all duration-300 flex flex-col justify-center items-center p-10 md:p-16`}
            >
              <h3 className="text-white text-2xl font-bold text-center mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm text-center mb-6">{service.description}</p>

              {/* Discover More Link */}
              <Link
                href={service.link}
                className="text-blue-400 group-hover:text-white font-semibold text-sm mt-auto transition-all duration-200"
              >
                Discover More
              </Link>

              {/* Decorative Plus Icons */}
              {index % 4 === 0 && (
                <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
              {(index % 4 === 1 || index === 0 || index === 2) && (
                <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
              {(index % 4 === 2 || index === 0 || index === 3) && (
                <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
              {(index % 4 === 3 || index === 5 || index === 6 || index === 8) && (
                <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <p className="text-gray-100 text-center mt-12 max-w-4xl mx-auto text-lg md:text-xl">
          From basic informational websites to enterprise-level custom platforms — Bixeltek delivers web design solutions that work.
        </p>
      </div>
    </section>
  );
}
