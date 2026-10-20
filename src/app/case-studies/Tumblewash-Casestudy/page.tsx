export const metadata = {
  title: "Case Study: 436% ROAS for Local Laundry Brand | TumbleWash",
  description:
    "Discover how TumbleWash, a local laundry business, achieved 436% ROAS and 477+ monthly phone calls, all with half the budget. See the exact strategy used.",
  openGraph: {
    title: "Case Study: 436% ROAS for Local Laundry Brand | TumbleWash",
    description:
      "TumbleWash saw massive growth with our digital strategy: 436% ROAS, 477+ calls/month. Read the full case study.",
    url: "https://bixeltek.com/case-studies/Tumblewash-Casestudy",
    images: [
      {
        url: "https://bixeltek.com/BIXELTEKLOGO.png",
        width: 1200,
        height: 630,
        alt: "TumbleWash Case Study - Bixeltek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Study: 436% ROAS for Local Laundry Brand | TumbleWash",
    description:
      "How a small laundry brand achieved big results: 436% ROAS and 477+ monthly calls with half the spend. View the breakdown.",
    images: ["https://bixeltek.com/BIXELTEKLOGO.png"],
  },
  alternates: {
    canonical: "https://bixeltek.com/case-studies/Tumblewash-Casestudy",
  },
};

import React from 'react'
import heroimg from '@/assets/tumblewash.jpg'
import TumbleWashCaseStudySection from '@/components/CasestudyMain/Tumblewash'

export default function Tumblewash() {
  return (
    <>
        <section className="h-[70vh] md:h-[85vh] w-full mx-auto bg-cover bg-center relative" style={{ backgroundImage: `url(${heroimg.src})` }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 flex flex-col items-start pl-5 pr-5 md:pr-0 md:pl-20 md:max-w-[70%] font-sofiasanscondensed justify-center h-full">
              <p className='text-left text-white font-poppins uppercase mb-5'>Case Study</p>
            <h1 className="text-white text-3xl md:text-6xl font-bold">How a Local Laundry Brand Achieved 436% ROAS and 477+ Monthly Phone Calls on Half the Budget</h1>
            </div>
        </section>
        <section>
          <TumbleWashCaseStudySection />
        </section>
    </>
  )
}
