export const metadata = {
  title: "Case Studies | Digital Marketing & Web Development Results | Bixeltek",
  description:
    "Explore real-world case studies where Bixeltek delivered high-performance websites, custom ecommerce stores, and profitable Google Ads & SEO campaigns.",
  keywords:
    "Digital marketing case studies, Google Ads results, SEO case study, Bixeltek success stories, Ecommerce case study, Web development case studies, OMA Computers, MF Printing, Rooted Tree Services, Bin Hindi, TumbleWash",
  openGraph: {
    title: "Case Studies | Digital Marketing & Web Development Results | Bixeltek",
    description:
      "Explore real-world case studies where Bixeltek delivered high-performance websites, custom ecommerce stores, and profitable Google Ads & SEO campaigns.",
    type: "website",
    url: "https://bixeltek.com/case-studies",
  },
  alternates: {
    canonical: "https://bixeltek.com/case-studies",
  },
};

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Assets
import omaImg from '@/assets/oma-casestudy.png';
import mfPrintImg from '@/assets/mf-print-casestudy.webp';
import rootedTreeImg from '@/assets/rooted-tree-casestudy.png';
import cloudUpskillImg from '@/assets/cloudupskill-casestudy.png';
import petGroomingImg from '@/assets/pet-grooming-case-study.jpg';
import binHindiImg from '@/assets/binhindi-casestudy.png';
import innovwayzImg from '@/assets/innovwayz-case-study.png';
import promenadeImg from '@/assets/promenade-casestudy.png';
import guerr from '@/assets/guerr-case-study-1.jpeg';
import heroimginvisalign from '@/assets/dentist-examining-patient-s-teeth.jpg';
import sacImg from '@/assets/sac-casestudy.png';
import laungry from '@/assets/Denver-Commercial-Laundry-with-Free-Delivery-97beb6c9.jpeg';
import heroimgdm from '@/assets/atikah-akhtar-XJptUS8nbhs-unsplash.jpg';
import heroimgbike from '@/assets/angry-_-kat-4ORysIjH-mY-unsplash.jpg';

const casestudies = [
  {
    id: 1,
    title: "Building a WooCommerce Store for a 2,000+ Product Computer Catalogue",
    description:
      "How Bixeltek brought OMA Computer Systems' product range online with a structured catalogue, product discovery tools and a scalable WordPress ecommerce foundation.",
    image: omaImg,
    link: "/case-studies/oma-computers-ecommerce-website-case-study",
  },
  {
    id: 2,
    title: "MF Printing International: From No Online Presence to Google Ads Customers in 2–3 Days",
    description:
      "How Bixeltek built a custom website for MF Printing International and launched Google Ads campaigns that began attracting customers within the first 2–3 days.",
    image: mfPrintImg,
    link: "/case-studies/mf-printing-international-website-google-ads-case-study",
  },
  {
    id: 3,
    title: "Rooted Tree Services: Connecting Tree-Care Searches to Clearer Quote Requests",
    description:
      "How Bixeltek built the Rooted Tree Services website and focused Google Ads on relevant local demand across Toronto and the Greater Toronto Area.",
    image: rootedTreeImg,
    link: "/case-studies/rooted-tree-services-case-study",
  },
  {
    id: 4,
    title: "Building a WordPress Website Around Course Discovery and Enquiries",
    description:
      "How Bixeltek organized Cloud Upskill's technical training portfolio into a clearer digital experience with course information, learner-support content and direct enquiry paths.",
    image: cloudUpskillImg,
    link: "/case-studies/cloud-upskill-wordpress-website-case-study",
  },
  {
    id: 5,
    title: "Improving Local SEO, Website Conversions & Nuxt 4 Migration for a US Pet Grooming Business",
    description:
      "How Bixeltek built city-specific landing pages, applied CRO principles, and migrated a live Nuxt 2 website to Nuxt 4 while addressing hydration and architecture needs.",
    image: petGroomingImg,
    link: "/case-studies/pet-grooming-website-usa-case-study",
  },
  {
    id: 6,
    title: "Bin Hindi: Turning Website Friction Into a Clearer Path to Conversion",
    description:
      "How Bixeltek analysed Bin Hindi's website, identified UX friction and ineffective CTA placement, and rebuilt the experience with conversion rate optimization at its core.",
    image: binHindiImg,
    link: "/case-studies/bin-hindi-website-cro-case-study",
  },
  {
    id: 7,
    title: "InnovWayz Website: Rebuilding for a Clearer Digital Presence",
    description:
      "How Bixeltek rebuilt the website with Next.js and Tailwind CSS, created reusable service pages, connected enquiry forms with Nodemailer, and resolved PDPL page indexation.",
    image: innovwayzImg,
    link: "/case-studies/innovwayz-website-case-study",
  },
  {
    id: 8,
    title: "Promenade Dental Website Rebuild: Next.js, Scalable Architecture & CRO",
    description:
      "How Bixeltek rebuilt Promenade Dental’s practice website with Next.js and Tailwind CSS, created a scalable service-page system, and improved patient appointment journeys.",
    image: promenadeImg,
    link: "/case-studies/promenade-dental-website-rebuild-case-study",
  },
  {
    id: 9,
    title: "Guerr Clothing Case Study: 3X ROAS Growth Built on a Custom Medusa E-Commerce Platform",
    description:
      "Discover how we engineered a custom Medusa ecommerce platform for Guerr Clothing and scaled customer acquisition with a 3X return on ad spend.",
    image: guerr,
    link: "/case-studies/guerr-clothing-case-study",
  },
  {
    id: 10,
    title: "A Canadian Dental Clinic Was Growing. Invisalign Wasn't.",
    description:
      "How search visibility, conversion optimisation and behaviour-led improvements helped an established practice develop a measurable Invisalign acquisition channel.",
    image: heroimginvisalign,
    link: "/case-studies/invisalign-dental-marketing-case-study",
  },
  {
    id: 11,
    title: "Building an Enterprise Website for Scorpion Arabia: Infrastructure Expertise to Project Enquiries",
    description:
      "How Bixeltek built a WordPress website for Scorpion Arabia with clearer specialist service pages, stronger capability information, and conversion-focused paths to technical proposals.",
    image: sacImg,
    link: "/case-studies/scorpion-arabia-enterprise-website-case-study",
  },
  {
    id: 12,
    title: "TumbleWash Case Study: 436% ROAS Growth on Half the Budget",
    description:
      "Discover how we boosted monthly calls to 477+ and slashed customer acquisition costs in half for laundry brand TumbleWash.",
    image: laungry,
    link: "/case-studies/Tumblewash-Casestudy",
  },
  {
    id: 13,
    title: "Digital Marketing for Dentists: 200+ Patient Leads in 30 Days",
    description:
      "How Bixeltek Helped a Dental Clinic Dominate Google Search and Attract High-Value Patients.",
    image: heroimgdm,
    link: "/case-studies/digital-marketing-for-dentists-case-study",
  },
  {
    id: 14,
    title: "340+ Leads in 30 Days for Hyderabad Bike Mechanic",
    description:
      "Discover how a trusted bike mechanic in Hyderabad gained 340+ leads in just 30 days using smart digital marketing strategies.",
    image: heroimgbike,
    link: "/case-studies/google-ads-case-study-bike-repair-hyderabad",
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
          <p className="mt-1 text-gray-600 max-w-2xl mx-auto font-poppins">
            Dive into our case studies and see how we’ve helped brands scale with smart strategy and serious execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {casestudies.map((study) => (
            <Link
              key={study.id}
              href={study.link}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-purple-400 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-[0_20px_40px_-12px_rgba(103,14,247,0.25)] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#670ef7]"
            >
              {/* Image */}
              <div className="relative overflow-hidden pt-[50%] sm:pt-[70%]">
                <Image
                  src={study.image}
                  alt={study.title}
                  className="absolute start-0 top-0 size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-[#670ef7] font-sofiasanscondensed md:text-2xl">
                  {study.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base font-poppins">
                  {study.description}
                </p>
                <p className="mt-auto inline-flex items-center gap-x-1 pt-5 text-sm font-semibold text-[#670ef7]">
                  Read more
                  <svg
                    className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
