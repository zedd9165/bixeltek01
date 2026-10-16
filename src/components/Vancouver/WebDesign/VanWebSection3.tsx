"use client";

import React from "react";
import Link from "next/link";

export default function WebDesignServicesVancouver() {
  const services = [
    {
      title: "Custom CMS Builds",
      description:
        "Dynamic and scalable websites built on flexible CMS platforms like WordPress — fully optimized for SEO and easy content management.",
      link: "/custom-cms-websites",
    },
    {
      title: "Custom-Coded Websites",
      description:
        "For businesses needing advanced functionality or unique design systems, we develop tailor-made websites with performance and scalability in mind.",
      link: "/custom-coded-websites",
    },
    {
      title: "Ecommerce Websites",
      description:
        "Boost online sales with ecommerce stores optimized for speed, conversions, and secure checkout experiences.",
      link: "/services/ecommerce-development",
    },
    {
      title: "Conversion Landing Pages",
      description:
        "We design dedicated landing pages for campaigns, offers, or product launches — built using conversion psychology, persuasive copy, and fast-loading architecture. Perfect for Google Ads, Meta Ads, or email marketing funnels.",
      link: "#",
    },
    {
      title: "Payment Gateway Integrations",
      description:
        "Seamless, secure, and fast payment integrations that enhance user trust and improve conversion rates.",
      link: "/payment-gateway-integrations",
    },
    {
      title: "Website Maintenance & Support",
      description:
        "Ongoing performance monitoring, updates, and support to ensure your website stays secure, fast, and fully functional.",
      link: "#",
    },
  ];

  return (
    <section className="relative py-10 md:py-20 bg-black text-gray-100" id="web-design-services">
      {/* Background Blobs */}
      <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
      <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>

      <div>
        {/* Section Heading */}
        <div className="max-w-[90%] lg:max-w-[80%] mx-auto mb-10 text-center">
          <h2 className="text-white text-3xl md:text-6xl font-inter mb-3 font-semibold">
            Websites Designed to <span className="text-blue-500">Convert, Built to Last</span>
          </h2>
          <p className="text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto">
            Bixeltek offers full-service web design and development solutions, customized for Vancouver businesses. Every build is crafted to reflect your brand, enhance visibility, and increase conversions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[90%] lg:max-w-[75%] mx-auto mt-10 gap-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-96 group border border-gray-800 bg-black/10 hover:bg-blue-600 transition-all duration-300 flex flex-col justify-center items-center p-10 md:p-14"
            >
              <h3 className="text-white text-2xl font-bold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm text-center mb-3">
                {service.description}
              </p>
              <Link href={service.link}>
                <p className="text-blue-500 group-hover:text-white text-sm mt-2 hover:font-semibold">
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
      </div>
    </section>
  );
}
