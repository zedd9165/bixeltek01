export const metadata = {
  title: "Invisalign Dental Marketing Case Study For Canadian Dental Practices | Bixeltek",
  description:
    "How search visibility, conversion optimisation and behaviour-led improvements helped an established Canadian practice acquire Invisalign leads for CAD $20–$33.",
  keywords:
    "Invisalign marketing, Dental marketing case study, Canadian dental clinic growth, Dental SEO, Dental Google Ads, Conversion rate optimisation dentists, Bixeltek dental marketing",
  openGraph: {
    title: "A Canadian Dental Clinic Was Growing. Invisalign Wasn't. | Bixeltek Case Study",
    description:
      "How search visibility, conversion optimisation and behaviour-led improvements helped an established practice develop a measurable Invisalign acquisition channel.",
    type: "website",
    url: "https://bixeltek.com/case-studies/invisalign-dental-marketing-case-study",
    images: [
      {
        url: "https://bixeltek.com/BIXELTEKLOGO.png",
        width: 1200,
        height: 630,
        alt: "Invisalign Dental Marketing Case Study - Bixeltek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invisalign Dental Marketing Case Study | Bixeltek",
    description:
      "Discover how Bixeltek turned an underperforming Invisalign service into a predictable acquisition channel with CAD $20–$33 leads.",
    images: ["https://bixeltek.com/BIXELTEKLOGO.png"],
  },
  alternates: {
    canonical: "https://bixeltek.com/case-studies/invisalign-dental-marketing-case-study",
  },
};

import React from 'react';
import InvisalignCaseStudy from '@/components/CasestudyMain/Invisalign';
import heroimg from '@/assets/dentist-examining-patient-s-teeth.jpg';

export default function InvisalignPage() {
  return (
    <>
      <section
        className="h-[70vh] md:h-[85vh] w-full mx-auto bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroimg.src})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        <div className="relative z-10 flex flex-col items-start pl-5 pr-5 md:pr-0 md:pl-20 md:max-w-[75%] font-sofiasanscondensed justify-center h-full">
          <p className="text-left text-white font-poppins uppercase tracking-widest text-sm mb-4 font-semibold">
            Case Study
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            A Canadian Dental Clinic Was Growing. Invisalign Wasn&apos;t.
          </h1>
          <p className="text-white/90 text-base md:text-xl tracking-wide font-normal font-poppins mt-4 max-w-3xl leading-relaxed">
            How search visibility, conversion optimisation and behaviour-led improvements helped an established practice develop a measurable Invisalign acquisition channel.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <InvisalignCaseStudy />
      </section>
    </>
  );
}

