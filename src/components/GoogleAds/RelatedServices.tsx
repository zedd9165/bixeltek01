import React from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import googlelogo from '@/assets/google-logo.png'
import googleadsalogo from '@/assets/googleads-logo.png'
import googleanalytics from '@/assets/4202007_analytics_google_logo_social_social media_icon.png'
import {
    googleAdsRelatedServices,
    googleAdsRelatedServicesContent,
} from '@/data/googleAdsPageData'

// Maps the `icon` string in the data to an image
const iconImages: Record<string, StaticImageData> = {
    search: googlelogo,
    monitor: googleadsalogo, // placeholder: swap for a web design image
    chart: googleanalytics,
}

export default function RellatedServices() {
    return (
        <>
            <section className="relative pt-20 pb-10 md:pb-20 px-6">
                <div className="absolute -bottom-56 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
                <div className="flex flex-col items-center gap-3">
                    <h2 className="text-3xl max-w-6xl mx-auto md:text-6xl font-semibold text-center text-white font-inter">
                        {googleAdsRelatedServicesContent.headingPart1}{" "}
                        <span className="text-blue-500">{googleAdsRelatedServicesContent.headingHighlight}</span>
                    </h2>
                    <p className="text-white max-w-[90%] md:max-w-5xl text-center text-[15px] md:text-[16px]">
                        {googleAdsRelatedServicesContent.description}
                    </p>
                </div>

                {/* Cards Grid, generated from the data */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6 max-w-7xl text-white mx-auto text-center">
                    {googleAdsRelatedServices.map((service, index) => {
                        const isLast = index === googleAdsRelatedServices.length - 1
                        const image = iconImages[service.icon] ?? googlelogo // fallback for unknown icons

                        return (
                            <div
                                key={service.href}
                                className={`flex flex-col gap-3 text-xl items-center justify-center p-6 ${
                                    isLast ? '' : 'border-none md:border-r md:border-dashed border-blue-500'
                                }`}
                            >
                                <span className="text-4xl">
                                    <Image src={image} alt={service.title} className="w-14 h-auto" />
                                </span>
                                <h3 className="mt-2 font-semibold font-poppins">{service.title}</h3>
                                <p className="text-sm mt-2">{service.description}</p>
                                <div className="flex flex-col gap-1 mt-3">
                                    <Link href={service.href}>
                                        <p className="text-blue-500 text-sm font-semibold cursor-pointer hover:underline">
                                            {service.ctaText} →
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Closing Statement */}
                <div className="text-center max-w-[90%] md:max-w-4xl mx-auto">
                    <p className="text-white text-[15px] md:text-[16px] leading-relaxed">
                        {googleAdsRelatedServicesContent.closing}
                    </p>
                    <Link href={googleAdsRelatedServicesContent.ctaHref}>
                        <p className="text-blue-500 mt-4 font-semibold cursor-pointer hover:underline">
                            {googleAdsRelatedServicesContent.ctaText}
                        </p>
                    </Link>
                </div>
            </section>
        </>
    )
}