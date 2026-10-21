export const metadata = {
    title: "340+ Leads in 30 Days for Bike Repair | Bixeltek Case Study",
    description: "How Bixeltek helped a trusted bike repair service in Hyderabad generate 340+ monthly leads with Google Ads. Powered by a certified Google Partner agency in Hyderabad. ",
    keywords:
        "Web design Hyderabad, Web development Hyderabad, E-commerce website development, SEO services Hyderabad, Custom website design, Best website designers Hyderabad, CMS development, Next.js development, React.js web development, Hyderabad digital agency",
    openGraph: {
        title: "340+ Leads in 30 Days for Bike Repair | Bixeltek Case Study",
        description:
            "How Bixeltek helped a trusted bike repair service in Hyderabad generate 340+ monthly leads with Google Ads. Powered by a certified Google Partner agency in Hyderabad. ",
        type: "website",
    },
        alternates: {
    canonical: "https://bixeltek.com/case-studies/google-ads-case-study-bike-repair-hyderabad", // 👈 canonical URL here
  },
};

import React from 'react'
import heroimg from '@/assets/angry-_-kat-4ORysIjH-mY-unsplash.jpg'
import BikerepairCaseStudySection from '@/components/CasestudyMain/Bikerepair'

export default function BikeRepair() {
    return (
        <>
            <section className="h-[70vh] md:h-[85vh] w-full mx-auto bg-cover bg-center relative" style={{ backgroundImage: `url(${heroimg.src})` }}>
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative z-10 flex flex-col items-start pl-5 pr-5 md:pr-0 md:pl-20 md:max-w-[70%] font-sofiasanscondensed justify-center h-full">
                    <p className='text-left text-white font-poppins uppercase mb-5'>Case Study</p>
                    <h1 className="font-sofiasanscondensed text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl max-w-5xl">340+ Leads in 30 Days for a Trusted Bike Mechanic in Hyderabad</h1>
                </div>
            </section>
            <section>
                <BikerepairCaseStudySection />
            </section>
        </>
    )
}
