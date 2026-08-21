
export const metadata = {
  title: "Case Studies | Digital Marketing Agency Strategies",
  description:
    "Explore real-world case studies where Bixeltek delivered 200+ dental leads, 340+ bike repair inquiries, and 436% ROAS growth for TumbleWash.",
  keywords:
    "Digital marketing case studies, Google Ads results, SEO case study, Bixeltek success stories, Business growth Hyderabad, Dentist marketing case study, Bike repair marketing, TumbleWash ROAS case study",
  openGraph: {
    title: "Case Studies | Digital Marketing Agency Strategiesk",
    description:
      "Explore real-world case studies where Bixeltek delivered 200+ dental leads, 340+ bike repair inquiries, and 436% ROAS growth for TumbleWash.",
    type: "website",
    url: "https://bixeltek.com/case-studies",
  },
  alternates: {
    canonical: "https://bixeltek.com/case-studies",
  },
};


import React from 'react'
import heroimgdm from '@/assets/atikah-akhtar-XJptUS8nbhs-unsplash.jpg'
import heroimgbike from '@/assets/angry-_-kat-4ORysIjH-mY-unsplash.jpg'
import laungry from '@/assets/Denver-Commercial-Laundry-with-Free-Delivery-97beb6c9.jpeg'
import guerr from '@/assets/guerr-case-study-1.jpeg'
import Image from 'next/image'

const casestudies = [
    {
        id: 1,
        title: "Guerr Clothing Case Study: 3X ROAS Growth Built a Complete E-Commerce Platform",
        description: "Discover how we helped Guerr Clothing achieve a 3X return on ad spend (ROAS) through strategic digital marketing campaigns.",
        image: guerr,
        link: "/case-studies/guerr-clothing-case-study",
    },
    {
        id: 2,
        title: "Digital Marketing for Dentists — 200+ Patient Leads in 30 Days",
        description: "How Bixeltek Helped a Dental Clinic Dominate Google Search and Attract High-Value Patients",
        image: heroimgdm,
        link: "/case-studies/digital-marketing-for-dentists-case-study",
    },
    {
        id: 3,
        title: "340+ Leads in 30 Days for Hyderabad Bike Mechanic",
        description: "Discover how a trusted bike mechanic in Hyderabad gained 340+ leads in just 30 days using smart digital marketing strategies.",
        image: heroimgbike,
        link: "/case-studies/google-ads-case-study-bike-repair-hyderabad",
    },
    {
        id: 4,
        title: "TumbleWash Case Study: 436% ROAS Growth",
        description: "Discover how we boosted monthly calls and slashed costs in half for TumbleWash.",
        image: laungry,
        link: "/case-studies/Tumblewash-Casestudy",
    },
];

export default function CasestudyPage() {
    return (
        <>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-64 mt-0 pt-[150px] lg:pt-[130px] mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-4xl font-bold md:text-5xl font-inter md:leading-tight">
                        Real Results. Real Businesses.
                    </h2>
                    <p className="mt-1 text-gray-600 max-w-2xl mx-auto">
                        Dive into our case studies and see how we’ve helped brands scale with smart strategy and serious execution.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


                    {casestudies.map((study) => (
                        <a className="group flex flex-col focus:outline-hidden" href={study.link} key={study.id}>
                            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                                <Image src={study.image} alt={study.title} className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" />
                                <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-purple-800 text-white py-1.5 px-3">
                                    Must Read
                                </span>
                        </div>

                            <div className="mt-7">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                                    {study.title}
                                </h3>
                                <p className="mt-3 text-gray-800">
                                    {study.description}
                                </p>
                                <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                                Read more
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </p>
                        </div>
                    </a>
                    ))    
                }

                </div>

            </div>

        </>
    )
}
