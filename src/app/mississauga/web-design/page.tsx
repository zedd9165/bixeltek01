
export const metadata = {
    title: "Web Design Services Mississauga | Website Development Company – Bixeltek",
    description:
        "Bixeltek designs conversion-focused websites for Mississauga businesses. From custom builds to ecommerce and branding, we create SEO-ready websites that attract and convert customers.",
    keywords:
       "Web design Mississauga, Best web design company Mississauga, Website development Mississauga, Responsive web design Mississauga, Custom website design Mississauga, E-commerce website design Mississauga, WordPress web design Mississauga, Professional web designers Mississauga, Affordable web design Mississauga, UI/UX design Mississauga, Mobile-friendly website design Mississauga, Small business web design Mississauga, Website redesign services Mississauga, Corporate web design Mississauga, Landing page design Mississauga, Creative web design agency Mississauga",
    openGraph: {
        title: "Web Design Services Mississauga | Website Development Company – Bixeltek",
        description:
            "Bixeltek designs conversion-focused websites for Mississauga businesses. From custom builds to ecommerce and branding, we create SEO-ready websites that attract and convert customers.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/mississauga/web-design",
    },
};




import React from 'react'
import HeroWebDesignMiss from '@/components/Mississauga/WebDesign/WebMissHero'
import WebDesignConversionSection from '@/components/Mississauga/WebDesign/WebMissSection1'
import WhyBusinessesLoseCustomers from '@/components/Mississauga/WebDesign/WebMissSection2'
import WebDesignServicesMississauga from '@/components/Mississauga/WebDesign/WebDesignSection3'
import BusinessGoalsSection from '@/components/Mississauga/WebDesign/WebMissSection4'
import WebProcessTimeline from '@/components/Mississauga/WebDesign/WebMissTimeline'
import WebDesignFaqs from '@/components/Mississauga/WebDesign/WebMissFaq'
import Link from 'next/link'
import ContactFromNew from '@/components/ContactFormNew'
import LocationHeroSection from '@/components/Common/location/LocationHeroSection';
import iconimg from '@/assets/medal-ribbons-star-svgrepo-com.png';
import starimg from '@/assets/star-shine-svgrepo-com.png';
import googleimg from '@/assets/google-authenticator-svgrepo-com.png';
import ServicesSection from '@/components/Common/ServicesGrid';
import LocationProcessSection from '@/components/Common/location/LocationProcessSection';
import LocationFaqSection from '@/components/Common/location/LocationFaqSection';
import ContactCTASection from '@/components/Common/location/LocationCtaSection';
  

const proofPoints = [
    { id: 1, text: "200+ Websites Built", icon: starimg },
    { id: 2, text: "4+ Years Helping Canadian Businesses", icon: iconimg },
    { id: 3, text: "SEO + Ads Integrated from Day One", icon: googleimg },
  ];


const services = [
    {
      title: "Custom CMS Websites",
      description: "Easy-to-manage, scalable websites for businesses of all sizes.",
      link: "/custom-cms-websites",
    },
    {
      title: "Custom Coded Builds",
      description: "Advanced designs and unique functionality for complex business needs.",
      link: "/custom-coded-websites",
    },
    {
      title: "Ecommerce Websites",
      description: "Optimized online stores that boost sales and user experience.",
      link: "/services/ecommerce-development",
    },
    {
      title: "Payment Gateway Integrations",
      description: "Secure and seamless checkout systems for a better customer experience.",
      link: "/payment-gateway-integrations",
    },
    {
      title: "Landing Page Design",
      description: "High-converting pages built for Ads and SEO campaigns.",
      link: "#",
    },
    {
      title: "Support & Maintenance",
      description: "Continuous updates, backups, and performance monitoring.",
      link: "#",
    },
  ];

  const steps = [
    {
        number: '01',
        title: 'Discovery & Research',
        text: "We start by understanding your business goals, target audience, and competitors. This research lays the foundation for a website that resonates with your customers and outperforms competitors.",
        gradient: 'from-blue-500 via-blue-400 to-black',
        color: 'text-blue-500',
            bgcolor: 'hover:bg-blue-500',
    },
    {
        number: '02',
        title: 'Wireframing & Design',
        text: "We create intuitive layouts and design mockups that prioritize user experience, accessibility, and conversion. Each design element is tailored to your brand and optimized for engagement.",
        gradient: 'from-green-500 via-teal-400 to-transparent',
        color: 'text-teal-500',
            bgcolor: 'hover:bg-teal-500',
    },
    {
        number: '03',
        title: 'Development',
        text: "Our developers build websites with clean, semantic code, mobile-first responsiveness, fast load speeds, and SEO-friendly structure to ensure your site performs technically and visually.",
        gradient: 'from-yellow-400 via-yellow-300 to-transparent',
        color: 'text-yellow-500',
            bgcolor: 'hover:bg-yellow-500',
    },
    {
        number: '04',
        title: 'Content Integration',
        text: "We incorporate optimized content, compelling visuals, and strategic calls-to-action. Every section of your website is designed to guide visitors through your customer journey seamlessly.",
        gradient: 'from-pink-500 via-purple-400 to-transparent',
        color: 'text-purple-500',
            bgcolor: 'hover:bg-purple-500',
    },
    {
        number: '05',
        title: 'Testing & QA',
        text: "Before launch, we rigorously test your site across devices, browsers, and performance metrics. This ensures a flawless user experience, fast load times, and functional forms and features.",
        gradient: 'from-indigo-500 via-indigo-400 to-transparent',
        color: 'text-indigo-500',
            bgcolor: 'hover:bg-indigo-500',
    },
    {
        number: '06',
        title: 'Launch',
        text: "We deploy your website live with SEO foundations in place, ensuring it’s discoverable and ready to attract leads, conversions, and traffic from day one.",
        gradient: 'from-red-500  to-transparent',
        color: 'text-red-500',
            bgcolor: 'hover:bg-red-500',
    },
    {
        number: '07',
        title: 'Ongoing Support',
        text: "Post-launch, we provide maintenance, updates, and performance monitoring. Your website evolves with your business while maintaining speed, security, and conversion effectiveness.",
        gradient: 'from-purple-500 via-transparent to-transparent',
        color: 'text-pink-500',
        bgcolor: 'hover:bg-pink-500',
    },
];


const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Typically 4–8 weeks, depending on the complexity of your project and the features you require.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer: "Yes — every site we build is SEO-optimized with clean code, fast load times, and schema setup to help you rank on search engines.",
  },
  {
    question: "Do I own my website after it’s launched?",
    answer: "Absolutely. You’ll have full ownership and access to your website, including all code, content, and assets.",
  },
  {
    question: "Do you provide support after launch?",
    answer: "Yes — we offer ongoing support, maintenance, and upgrades to ensure your site runs smoothly and stays up-to-date.",
  },
];




export default function page() {
    return (
        <>
            {/* <HeroWebDesignMiss /> */}
            <LocationHeroSection
            heading={
                <>
                <span>Web Design Services in Mississauga{" "}
              <span className="text-blue-500">That Build Trust and Drive Sales</span></span>
                </>
            }
            description='In today’s world, your website is your first impression. 
              An outdated or poorly designed site can cost you customers before they even call. 
              At Bixeltek, we create modern, 
              mobile-first, SEO-ready websites that help Mississauga businesses capture leads, 
              build trust, and scale growth.'
             proofPoints={proofPoints} 
            primaryCTA={{
                    text: 'Get a Free Website Audit',
                    action: { type: 'openForm', form: 'contact' },
                }}
                secondaryCTA={{
                    text: 'Book a Strategy Call',
                    variant: 'secondary',
                    action: {
                    type: 'link',
                    href: 'mailto:zee@bixeltek.com',
                    },
                }}
            />
            <WebDesignConversionSection />
            <WhyBusinessesLoseCustomers />
            {/* <WebDesignServicesMississauga /> */}
            <ServicesSection
            heading='What We Deliver With Our'
            spanText='Web Design Services'
            description='Bixeltek offers a full suite of web design and development services
            in Mississauga, tailored to your goals and industry.'
            services={services}
            />
            <BusinessGoalsSection />
            {/* <WebProcessTimeline /> */}
            <LocationProcessSection
            heading={
                <>
                <span>How We Build Websites That <span className="text-blue-500">Deliver Results</span></span>
                </>
            }
            description='We follow a structured, transparent process to ensure your website is not only beautiful but also functional and conversion-focused.'
            steps={steps}
            cta={{
                text:'Talk To A Web Design Expert',
                href:'mailto:zee@bixeltek.com'
            }}
            footerText='This structured web design process ensures your website performs optimally, converts visitors into customers, and grows with your Mississauga business.'
            />
            {/* <WebDesignFaqs /> */}
            <LocationFaqSection
            label='Web Design FAQs'
            heading={
                <>
                <h2 className="text-3xl md:text-6xl font-inter font-bold text-center text-white mb-6">
              Web Design FAQs for{" "}
              <span className="text-blue-500">Mississauga Businesses</span>
            </h2>
                </>
            }
            description='Common questions Mississauga businesses ask about website development, SEO, ownership, and support.'
            faqs={faqs}
            />

            <ContactCTASection
            heading='Ready to Build a Website That'
            spanText='Wins Customers?'
            description='Your website should do more than just exist — it should convert. Partner with
                            Bixeltek to create a modern, SEO-ready,
                            conversion-focused website that helps your Mississauga business grow.'
            />

            {/* <section
                className="bg-black p-8 md:p-20 mx-auto flex flex-col md:flex-row justify-center items-center gap-10"
                id="form"
            >
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
                    <div className="space-y-5 text-white max-w-2xl">
                        <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
                            Ready to Build a Website That{" "}
                            <span className="text-blue-500">Wins Customers?</span>
                        </h2>
                        <p className="text-white font-poppins text-base md:text-lg leading-relaxed">
                            Your website should do more than just exist — it should convert. Partner with{" "}
                            <span className="font-semibold">Bixeltek</span> to create a modern, SEO-ready,
                            conversion-focused website that helps your Mississauga business grow.
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
                    <ContactFromNew />
                </div>
            </section> */}
        </>
    )
}
