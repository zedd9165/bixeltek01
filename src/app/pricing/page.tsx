export const metadata = {
  title: "Pricing | Bixeltek",
  description:
    "See Bixeltek's plans for Google Ads and Meta Ads management, including setup and monthly fees.",
  keywords:
    "Web design Hyderabad, Web development Hyderabad, E-commerce website development, SEO services Hyderabad, Custom website design, Best website designers Hyderabad, CMS development, Next.js development, React.js web development, Hyderabad digital agency",
  openGraph: {
    title: "Pricing | Bixeltek",
    description:
      "See Bixeltek's plans for Google Ads and Meta Ads management, including setup and monthly fees.",
    type: "website",
    url: "https://bixeltek.com/pricing",
  },
  alternates: {
    canonical: "https://bixeltek.com/pricing",
  },
  robots: {
    index: false,
    follow: true,
  },
};
import React, { ReactNode } from "react";
import Link from "next/link";
import PricingTable from "@/components/pricecomp";

const Pricing = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
          <h1 className="text-3xl font-bold md:text-5xl md:leading-tight text-white font-inter">Transparent Plans Built for Scale</h1>
          <p className="mt-4 text-base md:text-lg text-neutral-300 font-poppins">
            Choose a package structured by business stage below, or review our detailed comparison table to see how deliverables scale with your monthly advertising spend.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-1 lg:grid-cols-4 gap-6 lg:items-center">

          <div className="flex flex-col border h-[70%] justify-between text-center rounded-xl p-8 border-neutral-800">
            <div>
              <h4 className="font-medium text-lg text-neutral-200">Scope of Work</h4>
              <span className="mt-7 font-bold text-3xl font-sans text-neutral-200">Pricing</span>
              <p className="mt-2 text-sm text-neutral-200">Transparent and scalable pricing</p>
            </div>
            <div>
              <a
                className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                href="https://calendly.com/bixeltek/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Quote
              </a>
            </div>
          </div>

          <div className="flex flex-col border-2 text-center shadow-xl rounded-xl p-8 border-blue-700">
            <p className="mb-3">
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-600 text-white">
                Most popular
              </span>
            </p>
            <h4 className="font-medium text-lg text-neutral-200">Startup</h4>

            <div className="mt-5 font-bold text-2xl font-sans text-neutral-200">
              <span className="block text-lg font-medium">One Time Setup Fee</span>
              <span className="font-bold text-lg ">₹</span>50,000
              <span className="text-sm font-medium text-neutral-500"> +18% GST</span>
            </div>

            <div className="mt-4 font-bold text-2xl font-sans text-neutral-200">
              <span className="block text-lg font-medium">Monthly Fee</span>
              <span className="font-bold text-lg">₹</span>50,000
              <span className="text-sm font-medium text-neutral-500"> +18% GST</span>
            </div>

            <p className="mt-2 text-sm text-neutral-500">
              All the basics for starting a new business
            </p>

            <a
              className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="https://calendly.com/bixeltek/strategy-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </div>
          <div className="flex flex-col border text-center rounded-xl p-8 border-yellow-500">
            <h4 className="font-medium text-lg text-neutral-200">Growing Business</h4>

            <div className="mt-5 font-bold text-2xl font-sans text-neutral-200">
              <span className="block text-lg font-medium">One Time Setup Fee</span>
              <span className="font-bold text-2xl ">₹</span>80,000
              <span className="text-sm font-medium text-neutral-500"> +18% GST</span>
            </div>

            <div className="mt-4 font-bold text-2xl font-sans text-neutral-200">
              <span className="block text-lg font-medium">Monthly Fee</span>
              <span className="font-bold text-2xl ">₹</span>80,000
              <span className="text-sm font-medium text-neutral-500"> +18% GST</span>
            </div>

            <p className="mt-2 text-sm text-neutral-500">Everything you need for a growing business</p>

            <a
              className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border shadow-sm disabled:opacity-50 disabled:pointer-events-none focus:outline-none bg-yellow-600 border-neutral-700 text-neutral-50 hover:bg-yellow-600 focus:bg-neutral-800"
              href="https://calendly.com/bixeltek/strategy-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </div>
          <div className="flex flex-col border-2 text-center rounded-xl py-[33px] px-8 border-red-800 flex-grow justify-between">

            <div>
              <h4 className="font-medium text-lg text-neutral-200">Enterprise</h4>

              <span className="mt-5 font-bold text-3xl font-sans text-neutral-200">
                Contact Sales
              </span>

              <p className="mt-2 text-sm text-neutral-500">
                Custom solutions for large-scale needs
              </p>

              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex gap-x-2">
                  <svg className="shrink-0 mt-0.5 size-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-neutral-400">
                    Tailored plans for enterprises
                  </span>
                </li>

                <li className="flex gap-x-2">
                  <svg className="shrink-0 mt-0.5 size-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-neutral-400">
                    Dedicated account manager
                  </span>
                </li>

                <li className="flex gap-x-2">
                  <svg className="shrink-0 mt-0.5 size-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-neutral-400">
                    24/7 priority support
                  </span>
                </li>
              </ul>
            </div>
            <div className=" mt-[138px] inline-flex justify-center items-center ">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border shadow-sm disabled:opacity-50 disabled:pointer-events-none focus:outline-none bg-red-600 border-neutral-700 text-neutral-50 hover:bg-neutral-800 focus:bg-neutral-800"
                href="https://calendly.com/bixeltek/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Call
              </a>
            </div>

          </div>

        </div>

        <div className="mt-20 lg:mt-32">
          <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-16">
            <h2 className="text-3xl font-semibold text-white font-inter">Compare What Is Included by Ad Spend Level</h2>
            <p className="mt-3 text-sm md:text-base text-neutral-400 font-poppins">
              Deliverables, campaign optimization, reporting cadences, and creative production structured across monthly ad spend tiers.
            </p>
          </div>
        </div>
        <PricingTable />
      </div>


    </>
  );
};


export default Pricing;
