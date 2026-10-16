'use client';

import React from "react";
import Link from "next/link";

export default function WebDesignServicesRiyadh() {
  const services = [
    {
      title: "Custom Website Design & Development",
      description:
        "Tailored websites reflecting your brand identity and business goals.",
      link: "/custom-coded-websites",
    },
    {
      title: "CMS Website Development",
      description:
        "WordPress, Webflow, or headless CMS for easy content management and scalable performance.",
      link: "/custom-cms-websites",
    },
    {
      title: "Landing Pages for CRO Campaigns",
      description:
        "High-intent pages for Google Ads, Meta, and remarketing funnels.",
      link: "#",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Fast, secure, bilingual online stores with payment gateway integration (SADAD, HyperPay, PayTabs, Stripe).",
      link: "/services/ecommerce-development",
    },
    {
      title: "Website Redesign & UX Optimization",
      description:
        "Transform underperforming sites into conversion-driven assets.",
      link: "#",
    },
    {
      title: "Ongoing Maintenance & Security",
      description:
        "24/7 monitoring, updates, backups, and malware protection.",
      link: "#",
    },
  ];

  return (
    <section className="relative py-14 md:py-24 bg-black text-gray-100" id="web-design-services-riyadh">
      {/* Background Glows */}
      <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-yellow-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
      <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-yellow-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>

      <div>
        {/* Heading + Intro */}
        <div className="max-w-[90%] md:max-w-[80%] mx-auto mb-10 text-center">
          <h2 className="text-white text-3xl lg:text-6xl font-inter mb-3 font-semibold">
            Comprehensive <span className="text-yellow-500">Web Design & Development Services</span> in Riyadh
          </h2>
          <p className="text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto leading-relaxed">
            We build websites designed to convert from day one — whether you need a new build, a redesign, or ongoing optimization. Every project includes analytics, SEO alignment, and marketing readiness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-[75%] mx-auto mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-auto group border border-gray-800 bg-black/10 hover:bg-yellow-600/10 transition-all duration-300 flex flex-col justify-center items-center p-10 md:p-20 rounded-lg"
            >
              <h3 className="text-white text-2xl font-bold text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 text-base text-center mb-4 leading-relaxed">
                {service.description}
              </p>
              <Link href={service.link}>
                <p className="text-green-400 group-hover:text-white group-hover:scale-105 text-base mt-2 hover:font-semibold transition-all duration-300">
                  Discover More
                </p>
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
              {(index % 4 === 3 || index === 5) && (
                <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <p className="text-gray-300 text-center mt-16 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          Every website we build is conversion-focused, performance-optimized, and ready to scale. Your Riyadh-based business deserves a digital presence that drives <span className="text-green-400 font-medium">growth, engagement, and results</span>.
        </p>
      </div>
    </section>
  );
}
