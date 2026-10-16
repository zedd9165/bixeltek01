"use client";

import React from "react";
import Link from "next/link";

export default function WebDevServicesEasternProvince() {
  const services = [
    {
      title: "Custom CMS Builds",
      description:
        "Powerful, flexible websites built on WordPress, Next.js, or fully custom frameworks — easy for your team to manage, scale, and update without technical hassle.",
      link: "/custom-cms-websites",
    },
    {
      title: "E-Commerce Websites",
      description:
        "Launch your online store with seamless checkout flows, conversion-driven product grids, and lightning-fast mobile optimization that drives real sales.",
      link: "/services/ecommerce-development",
    },
    {
      title: "Payment Gateway Integrations",
      description:
        "From Razorpay and PayTabs to Stripe, we integrate secure, multi-currency payment systems tailored for Saudi businesses and international scalability.",
      link: "/payment-gateway-integrations",
    },
    {
      title: "Custom Coded Websites",
      description:
        "For enterprises and complex workflows, we engineer fully bespoke web solutions — clean, maintainable, and built for long-term performance.",
      link: "/custom-cms-websites",
    },
    {
      title: "Conversion Landing Pages",
      description:
        "Data-driven landing pages crafted for ad campaigns — fast, goal-focused, and optimized to convert clicks into calls, bookings, or purchases.",
      link: "#",
    },
    {
      title: "Support & Maintenance",
      description:
        "Ongoing site monitoring, backups, plugin updates, and performance optimization — so your website stays secure, smooth, and ahead of competitors.",
      link: "#",
    },
  ];

  return (
    <section
      className="relative py-14 md:py-24 bg-black text-gray-100"
      id="webdev-services"
    >
      {/* Background Glows */}
      <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-green-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
      <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-green-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>

      <div>
        {/* Heading + Intro */}
        <div className="max-w-[90%] md:max-w-[80%] mx-auto mb-10 text-center">
          <h2 className="text-white text-3xl lg:text-6xl font-inter mb-3 font-semibold">
            Complete Web Design & Development Services{" "}
            <span className="text-yellow-500">for the Eastern Province</span>
          </h2>
          <p className="text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto leading-relaxed">
            Whether you’re a small business in Khobar or a corporate firm in Dammam, our websites are tailored to your
            scale, audience, and objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[75%] mx-auto mt-10 gap-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-96 group border border-gray-800 bg-black/10 hover:bg-gradient-to-tr hover:from-black hover:via-green-800 hover:to-green-500 transition-all duration-300 flex flex-col justify-center items-center p-10 md:p-14 rounded-lg"
            >
              <h3 className="text-white text-2xl font-bold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-base text-center mb-3 leading-relaxed">
                {service.description}
              </p>
              <Link href={service.link}>
                <p className="text-green-500 group-hover:text-white  group-hover:scale-105 text-base mt-2 hover:font-semibold transition-all">
                  Discover More
                </p>
              </Link>
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
