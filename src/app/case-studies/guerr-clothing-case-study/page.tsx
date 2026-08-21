export const metadata = {
    title: "Custom Medusa Ecommerce Build for Guerr | Bixeltek Case Study",
    description: "How Bixeltek engineered a fully custom Medusa ecommerce platform for Guerr (guerrclo.com) — with Razorpay, OTP-secured checkout, abandoned cart recovery, an admin sales dashboard, and a full influencer/affiliate program.",
    keywords:
        "Medusa ecommerce development, Custom ecommerce website Hyderabad, Razorpay integration, Ecommerce affiliate program development, Medusa.js developer India, Custom ecommerce backend, Ecommerce website development Hyderabad, Next.js ecommerce development",
    openGraph: {
        title: "Custom Medusa Ecommerce Build for Guerr | Bixeltek Case Study",
        description:
            "How Bixeltek engineered a fully custom Medusa ecommerce platform for Guerr (guerrclo.com) — with Razorpay, OTP-secured checkout, abandoned cart recovery, an admin sales dashboard, and a full influencer/affiliate program.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/case-studies/guerr-clothing-case-study",
    },
};

import React from 'react'
import heroimg from '@/assets/guerr-case-study-1.jpeg' 
import GuerrCaseStudySection from '@/components/CasestudyMain/Guerr'

export default function GuerrEcommerceCaseStudy() {
    return (
        <>
            <section className="h-[70vh] md:h-[85vh] w-full mx-auto bg-cover bg-center relative" style={{ backgroundImage: `url(${heroimg.src})` }}>
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative z-10 flex flex-col items-start pl-5 pr-5 md:pr-0 md:pl-20 md:max-w-[70%] font-sofiasanscondensed justify-center h-full">
                    <p className='text-left text-white font-poppins uppercase mb-5'>Case Study</p>
                    <h1 className="text-white text-3xl md:text-6xl font-bold">A Fully Custom Medusa Ecommerce Platform, Built for Guerr</h1>
                </div>
            </section>
            <section>
                <GuerrCaseStudySection />
            </section>
        </>
    )
}