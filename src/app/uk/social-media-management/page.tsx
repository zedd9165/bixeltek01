

export const metadata = {
    title: "Social Media Marketing Mississauga | Social Media Agency – Bixeltek",
    description:
        "Bixeltek helps Mississauga businesses grow with social media marketing. From content strategy to paid ads and management, we build campaigns that drive engagement, leads, and ROI.",
    keywords:
        "SEO services Mississauga, Best SEO company Mississauga, Local SEO Mississauga, On-page SEO optimization, Off-page SEO strategies, Technical SEO services, Keyword research Mississauga, Link building services, Content marketing Mississauga, E-commerce SEO Mississauga, WordPress SEO optimization, Mobile SEO services, SEO audit Mississauga, Search engine marketing, Google My Business optimization",
    openGraph: {
        title: "Social Media Marketing Mississauga | Social Media Agency – Bixeltek",
        description:
            "Bixeltek helps Mississauga businesses grow with social media marketing. From content strategy to paid ads and management, we build campaigns that drive engagement, leads, and ROI.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/mississauga/social-media-marketing",
    },
};


import React from 'react'
import HeroSocialMediaMiss from '@/components/Mississauga/SocialMedia/SocialHeroMiss'
import AudienceReachSection from '@/components/Mississauga/SocialMedia/SocialSection2Miss'
import SocialMediaStruggleSection from '@/components/Mississauga/SocialMedia/SocialSection3Miss'
import SocialMediaServicesMiss from '@/components/Mississauga/SocialMedia/SocialSection4Miss'
import CampaignTabsSocialMiss from '@/components/Mississauga/SocialMedia/SocialSection5Miss'
import SocialProcessTimeline from '@/components/Mississauga/SocialMedia/SocialSection6Miss'
import SocialMissIndustries from '@/components/Mississauga/SocialMedia/SocialSection7Miss'
import SocialMediaFaqs from '@/components/Mississauga/SocialMedia/SocialMissFaq'
import Link from 'next/link'
import ContactFromNew from '@/components/ContactFormNew'
import LocationHeroSection from '@/components/Common/location/LocationHeroSection';
import iconimg from '@/assets/medal-ribbons-star-svgrepo-com.png';
import starimg from '@/assets/star-shine-svgrepo-com.png';
import googleimg from '@/assets/google-authenticator-svgrepo-com.png';
import ServicesSection from '@/components/Common/ServicesGrid';
import LocationProcessSection from '@/components/Common/location/LocationProcessSection';
import LocationIndustrySection from '@/components/Common/location/LocationIndustrySection';
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg"
import pet from "@/assets/groupmates-lesson.jpg"
import roofing from "@/assets/digital marketing for roofing industries.jpg"
import dental from "@/assets/close-up-dentist-instruments (1).jpg"
import lawncare from "@/assets/digital marketing for lawn care services.jpg"
import blackcar from "@/assets/digital marketing for car detailers.jpg"
import healthcare from "@/assets/digital marketing for health care practices.jpg"
import LocationFaqSection from '@/components/Common/location/LocationFaqSection';
import ContactCTASection from '@/components/Common/location/LocationCtaSection';
import CampaignTabsSocialMissUk from '@/components/UK/SocialMedia/CampaignTabs';

  const proofPoints = [
    { id: 1, text: "4+ Years Helping Canadian Businesses Grow Online", icon: iconimg },
    { id: 2, text: "200+ Social Campaigns Managed", icon: starimg },
    { id: 3, text: "Integrated With SEO & Google Ads", icon: googleimg },
  ];

  const services = [
        {
            title: "Content Strategy & Creation",
            description: "We craft branded posts, visuals, and captions designed to captivate your audience and drive meaningful engagement.",
        },
        {
            title: "Paid Social Campaigns",
            description: "Highly targeted ads on Facebook, Instagram, LinkedIn, and TikTok to reach the right audience, increase conversions, and maximize ROI.",
        },
        {
            title: "Community Management",
            description: "We actively engage with your followers, respond to comments and messages, and foster a loyal online community.",
        },
        {
            title: "Social Media Analytics",
            description: "Track performance, engagement, and ROI with detailed reports to optimize strategies and make data-driven decisions.",
        },
        {
            title: "Influencer Collaborations",
            description: "Partner with local creators to amplify your brand’s reach, credibility, and authenticity in Uk & Irish market.",
        },
        {
            title: "Branding & Creative Design",
            description: "Ensure cohesive visuals, messaging, and tone across all social platforms that reflect your brand identity.",
        },
    ];

    const steps = [
  {
    number: '01',
    title: 'Audit & Discovery',
    text: "We start by auditing your existing social media presence, analyzing competitors, and reviewing audience behavior. This deep dive uncovers strengths, weaknesses, and hidden opportunities to make your Uk & Irish campaigns stand out right from the foundation.",
    gradient: 'from-blue-500 via-blue-400 to-black',
    color: 'text-blue-500',
        bgcolor: 'hover:bg-blue-500',
  },
  {
    number: '02',
    title: 'Strategy Development',
    text: "We define clear goals such as awareness, leads, or sales. By mapping your target audience, ideal platforms, and ad placements, we create a data-driven roadmap that ensures every campaign has a measurable ROI focus.",
    gradient: 'from-green-500 via-teal-400 to-transparent',
    color: 'text-teal-500',
        bgcolor: 'hover:bg-teal-500',
  },
  {
    number: '03',
    title: 'Content Creation',
    text: "Our creative team develops visuals, videos, and copywriting that resonate with your audience. From engaging carousel posts to scroll-stopping ad creatives, we craft content that doesn’t just look good but drives action.",
    gradient: 'from-yellow-400 via-yellow-300 to-transparent',
    color: 'text-yellow-500',
        bgcolor: 'hover:bg-yellow-500',
  },
  {
    number: '04',
    title: 'Campaign Setup & Launch',
    text: "We configure targeting, budget allocation, and ad placements across platforms like Facebook, Instagram, LinkedIn, and TikTok. Every launch is optimized to maximize exposure while keeping costs efficient for Uk & Irish businesses.",
    gradient: 'from-pink-500 via-purple-400 to-transparent',
    color: 'text-purple-500',
        bgcolor: 'hover:bg-purple-500',
  },
  {
    number: '05',
    title: 'Daily Optimization',
    text: "Campaigns don’t run on autopilot — we constantly monitor performance, tweak audience targeting, refresh creatives, and A/B test copy. This ensures your campaigns remain efficient and never burn budget unnecessarily.",
    gradient: 'from-indigo-500 via-indigo-400 to-transparent',
    color: 'text-indigo-500',
        bgcolor: 'hover:bg-indigo-500',
  },
  {
    number: '06',
    title: 'Reporting & Scaling',
    text: "Every month, you’ll receive transparent performance reports showing leads, clicks, sales, and ROI. We double down on what works, scale winning campaigns, and refine underperforming areas for continuous growth.",
    gradient: 'from-red-500 via-transparent to-transparent',
    color: 'text-red-500',
        bgcolor: 'hover:bg-red-500',
  },
];

 const industries = [
                        {
                            id: "health",
                            img: healthcare,
                            label: "Digital Marketing for Healthcare",
                            text: "Health Care Practices",
                            description: "Local SEO + targeted ads to book 30+ new patients per month.",
                        },
                        {
                            id: "auto",
                            img: blackcar,
                            label: "Digital Marketing for Automobiles",
                            text: "Automobile industry",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "cleaning",
                            img: cleaningcomp,
                            label: "Digital Marketing for Cleaning Companies",
                            text: "Cleaning Industry",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "roofing",
                            img: roofing,
                            label: "Digital Marketing for Roofing Companies",
                            text: "Roofing Industry",
                            description: "High-ticket lead funnels built for real estate and project-based services.",
                        },
                        {
                            id: "lawncare",
                            img: lawncare,
                            label: "Digital Marketing for Lawn Care and Landscaping",
                            text: "Lawn Care Industries",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "dental",
                            img: dental,
                            label: "Digital Marketing for Dental Clinic",
                            text: "Dental Clinics",
                            description: "Local SEO + targeted ads to book 30+ new patients per month.",
                        },
                        {
                            id: "pet",
                            img: pet,
                            label: "Digital Marketing for Pet Stores",
                            text: "Educational Institutes",
                            description: "Product SEO, performance ads & retargeting funnels to scale sales.",
                        },
                        {
                            id: "oil",
                            img: oil,
                            label: "Digital Marketing for Oil Refineries",
                            text: "Oil and Gas Industry",
                            description: "Paid growth loops, demo-booking strategies, and B2B marketing that closes deals.",
                        }
                    ]

  const faqs = [
  {
    question: "Do I need both organic and paid social media?",
    answer:
      "Yes — organic builds trust and consistency, while paid campaigns deliver fast, scalable results.",
  },
  {
    question: "Which platforms should I focus on?",
    answer:
      "It depends on your audience. We’ll recommend whether Facebook, Instagram, LinkedIn, or TikTok makes sense for your business.",
  },
  {
    question: "How much should I spend on ads?",
    answer:
      "Budgets vary by industry. We’ll create a plan that balances ad spend with ROI.",
  },
  {
    question: "Do you create content for us?",
    answer:
      "Yes — our team handles visuals, copywriting, and branding to keep your feeds active and professional.",
  },
];                 


export default function Page() {
    return (
        <>
            {/* <HeroSocialMediaMiss /> */}
            <LocationHeroSection
            heading={
                <>
                <span> Social Media Marketing Services in UK & Ireland{" "}
              <span className="text-blue-500">That Drive Engagement and Sales</span></span>
                </>
            }
            description='Your customers spend hours every day on platforms like Facebook, Instagram,
              LinkedIn, and TikTok. But without the right strategy, your brand gets lost
              in the noise. At Bixeltek,
              we help UK & Irish businesses build social media campaigns that capture
              attention, build trust, and convert followers into customers.'
              proofPoints={proofPoints}
              primaryCTA={{
                    text: 'Get a Free Social Media Audit',
                    action: { type: 'openForm', form: 'contact' },
                }}
                secondaryCTA={{
                    text: ' Book a Strategy Call',
                    variant: 'secondary',
                    action: {
                    type: 'link',
                    href: 'mailto:zee@bixeltek.com',
                    },
                }}
            />
            <AudienceReachSection />
            <SocialMediaStruggleSection />
            {/* <SocialMediaServicesMiss /> */}
            <ServicesSection
            heading='Social Media Services'
            spanText='Designed for Growth'
            description='Bixeltek delivers full-service social media marketing for UK & Irish businesses, combining strategy, creativity, and data-driven execution to boost visibility, engagement, and conversions.'
            services={services}
            />
            <CampaignTabsSocialMissUk />
            {/* <SocialProcessTimeline /> */}
            <LocationProcessSection
            heading={
                <>
                <span>Our Proven Social Media Marketing <span className="text-blue-500">Process That Delivers ROI</span></span>
                </>
            }
            description='Social media success isn’t luck — it’s a system. We follow a structured process that keeps your campaigns consistent, strategic, and focused on results for Uk & Irish businesses.'
            steps={steps}
            cta={{
                text:'Talk to a social media specialist',
                href:'mailto:zee@bixeltek.com'
            }}
            footerText='This structured process ensures your social media campaigns run efficiently, adapt quickly, and deliver consistent ROI for Uk & Irish businesses.'
            />
            {/* <SocialMissIndustries /> */}
            <LocationIndustrySection
                        heading={
                          <>
                          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                       Social Media That Works <br></br> Across Industries
                    </span>
                          </>      
                        }
                        description='We’ve built campaigns for businesses across Uk & Ireland, tailored to the way their customers engage online.'
                        industries={industries}
                        />
            {/* <SocialMediaFaqs /> */}
            <LocationFaqSection
            label='Social Media FAQs'
            heading={
                <>
                <h2 className="text-4xl text-center md:text-6xl font-inter font-bold text-white mb-6">
              Social Media FAQs for{" "}
              <span className="text-blue-500">Uk & Irish Businesses</span>
            </h2>
            </>
            }
            description='Common questions Uk & Irish businesses ask about social media —
              from platforms and ad spend, to organic vs paid strategies.'
            faqs={faqs}  
            />
            <ContactCTASection
            heading='Ready to Grow Your Business With'
            spanText='Social Media?'
            description='Your customers are on social media right now. The question is — are they
                            seeing you, or your competitors?
                            Partner with Bixeltek to launch
                            social campaigns that build awareness, engage audiences, and generate
                            leads in Uk & Ireland.'
            />
            {/* <section
                className="bg-black p-8 md:p-20 mx-auto flex flex-col md:flex-row justify-center items-center gap-10"
                id="form"
            >
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
                    <div className="space-y-5 text-white max-w-2xl">
                        <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
                            Ready to Grow Your Business With{" "}
                            <span className="text-blue-500">Social Media?</span>
                        </h2>
                        <p className="text-white font-poppins text-base md:text-lg leading-relaxed">
                            Your customers are on social media right now. The question is — are they
                            seeing <span className="font-semibold">you</span>, or your competitors?
                            Partner with <span className="font-semibold">Bixeltek</span> to launch
                            social campaigns that build awareness, engage audiences, and generate
                            leads in Mississauga.
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
