export const metadata = {
  title: "Digital Marketing for Dentists | Bixeltek Case Study",
  description: "See how Bixeltek helped a dental clinic generate 200+ patient leads in 30 days using Google Ads. Serving dentists in India, Canada & the USA. ",
  keywords:
    "Web design Hyderabad, Web development Hyderabad, E-commerce website development, SEO services Hyderabad, Custom website design, Best website designers Hyderabad, CMS development, Next.js development, React.js web development, Hyderabad digital agency",
  openGraph: {
    title: "Digital Marketing for Dentists | Bixeltek Case Study",
    description:
      "See how Bixeltek helped a dental clinic generate 200+ patient leads in 30 days using Google Ads. Serving dentists iIndia, Canada & the USA.",
    type: "website",
  },
    alternates: {
    canonical: "https://bixeltek.com/case-studies/digital-marketing-for-dentists-case-study", 
  },
};
import React from 'react'
import DentistCaseStudy from '@/components/CasestudyMain/Dentist';
import heroimg from '@/assets/atikah-akhtar-XJptUS8nbhs-unsplash.jpg'
export default function Dentist() {
  return (
    <>
      <section className="h-[70vh] md:h-[85vh] w-full mx-auto bg-cover bg-center relative" style={{ backgroundImage: `url(${heroimg.src})` }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-start pl-5 pr-5 md:pr-0 md:pl-20 md:max-w-[70%] font-sofiasanscondensed justify-center h-full">
          <p className='text-left text-white font-poppins uppercase mb-5'>Case Study</p>
          <h1 className="text-white text-3xl md:text-6xl font-bold">Digital Marketing for Dentists: 200+ Patient Leads in 30 Days</h1>
          <p className='text-white text-lg md:text-xl tracking-wide font-medium'>How Bixeltek Helped a Dental Clinic Dominate Google Search and Attract High-Value Patients</p>
        </div>
      </section>
      <section>
        <DentistCaseStudy/>
      </section>
    </>
  )
}
