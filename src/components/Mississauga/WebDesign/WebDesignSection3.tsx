"use client";

import React from "react";
import Link from "next/link";

export default function WebDesignServicesMississauga() {
  const services = [
    {
      title: "Custom CMS Websites",
      description: "Easy-to-manage, scalable websites for businesses of all sizes.",
      link: "/custom-cms-websites",
    },
    {
      title: "Custom Coded Builds",
      description: "Advanced designs and unique functionality for complex business needs.",
      link: "/custom-coded-websites",
    },
    {
      title: "Ecommerce Websites",
      description: "Optimized online stores that boost sales and user experience.",
      link: "/services/ecommerce-development",
    },
    {
      title: "Payment Gateway Integrations",
      description: "Secure and seamless checkout systems for a better customer experience.",
      link: "/payment-gateway-integrations",
    },
    {
      title: "Landing Page Design",
      description: "High-converting pages built for Ads and SEO campaigns.",
      link: "#",
    },
    {
      title: "Support & Maintenance",
      description: "Continuous updates, backups, and performance monitoring.",
      link: "#",
    },
  ];

  return (
    <section className="relative py-24">
      {/* Background Blobs */}
      <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
      <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>

      <div>
        {/* Section Heading */}
        <div className="max-w-[80%] mx-auto mb-5 text-center">
          <h2 className="text-white text-4xl lg:text-6xl max-w-7xl mx-auto font-inter mb-3 font-semibold">
            What We Deliver With Our{" "}
            <span className="text-blue-500">Web Design Services</span>
          </h2>
          <p className="text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto">
            Bixeltek offers a full suite of web design and development services
            in Mississauga, tailored to your goals and industry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[75%] mx-auto mt-10 gap-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-80 border group border-gray-800 bg-black/10 hover:bg-blue-600 transition-all duration-300 flex flex-col justify-center items-center p-10 md:p-14"
            >
              <h3 className="text-white text-2xl font-bold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm text-center mb-6">
                {service.description}
              </p>

              {/* Discover More Link */}
              <Link
                href={service.link}
                className="text-blue-400 group-hover:text-white font-semibold text-sm transition-all duration-200"
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
              {(index % 4 === 3 || index === 5) && (
                <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-gray-100 text-lg md:text-xl font-medium">
            From small businesses to enterprises, we design websites that don’t
            just look good — they perform, convert, and grow with your brand.
          </p>
        </div>
      </div>
    </section>
  );
}
