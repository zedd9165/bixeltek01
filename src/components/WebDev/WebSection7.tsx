import React from 'react'
import Link from 'next/link'
import googlelogo from '@/assets/google-logo.png'
import googleadsalogo from '@/assets/googleads-logo.png'
import Image from 'next/image'
import googleanalytics from '@/assets/4202007_analytics_google_logo_social_social media_icon.png'
import { relatedServicesContent } from '@/data/webDesignData'

export default function WebSection7() {
    return (
        <>
            <section className=" relative pt-20 pb-10 md:pb-20 px-6">
                 <div className="absolute -bottom-56 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
                <div className="flex flex-col items-center gap-3">
                    <h2 className="text-3xl max-w-6xl mx-auto md:text-6xl font-semibold text-center text-white font-inter">
                        {relatedServicesContent.headingPart1}{" "}
                        <span className="text-blue-500">{relatedServicesContent.headingHighlight}</span>
                    </h2>
                    <p className="text-white max-w-[90%] md:max-w-5xl text-center text-[15px] md:text-[16px]">
                        {relatedServicesContent.description}
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6 max-w-7xl text-white mx-auto text-center">
                    {/* Card 1 */}
                    <div className="flex flex-col gap-3 text-xl items-center border-none md:border-r md:border-dashed border-blue-500 justify-center p-6">
                        <span className="text-4xl">
                            <Image src={googlelogo} alt='SEO Services' className='w-14 h-auto'></Image>
                        </span>
                        <h3 className="mt-2 font-semibold font-poppins">SEO & Search Visibility</h3>
                        <p className="text-sm mt-2">
                            Build consistent organic lead flow that compounds over time. We ensure your website architecture ranks cleanly and maintains visibility for high-intent search terms.
                        </p>
                        <div className="flex flex-col gap-1 mt-3">
                            <Link href="/services/seo-services">
                                <p className="text-blue-500 text-sm font-semibold cursor-pointer hover:underline">
                                    Explore SEO Services →
                                </p>
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col gap-3 text-xl items-center border-none md:border-r md:border-dashed border-blue-500 justify-center p-6">
                        <span className="text-4xl">
                            <Image src={googleadsalogo} alt='Google Ads' className='w-14 h-auto'></Image>
                        </span>
                        <h3 className="mt-2 font-semibold font-poppins">
                            Google Ads & Paid Media
                        </h3>
                        <p className="text-sm mt-2">
                            Drive immediate qualified inquiries through targeted search and performance campaigns, connected directly to purpose-built conversion landing pages.
                        </p>
                        <div className="flex flex-col gap-1 mt-3">
                            <Link href="/services/google-ads">
                                <p className="text-blue-500 text-sm font-semibold cursor-pointer hover:underline">
                                    Explore Google Ads →
                                </p>
                            </Link>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col gap-3 text-xl items-center justify-center p-6">
                        <span className="text-4xl">
                            <Image src={googleanalytics} alt='Analytics and Optimization' className='w-14 h-auto'></Image>
                        </span>
                        <h3 className="mt-2 font-semibold font-poppins">Specialized Web Solutions</h3>
                        <p className="text-sm mt-2">
                            Explore our dedicated child platforms tailored for bespoke engineering or modular content management:
                        </p>
                        <div className="flex flex-col gap-2 mt-3 text-center">
                            <Link href="/custom-coded-websites">
                                <p className="text-blue-500 text-sm font-semibold cursor-pointer hover:underline">
                                    Custom-Coded Websites →
                                </p>
                            </Link>
                            <Link href="/custom-cms-websites">
                                <p className="text-blue-500 text-sm font-semibold cursor-pointer hover:underline">
                                    Custom CMS Websites →
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Closing Statement */}
                <div className="text-center max-w-[90%] md:max-w-4xl mx-auto">
                    <p className="text-white text-[15px] md:text-[16px] leading-relaxed">
                        {relatedServicesContent.closing}
                    </p>
                    <Link href={relatedServicesContent.ctaHref}>
                        <p className="text-blue-500 mt-4 font-semibold cursor-pointer hover:underline">
                            {relatedServicesContent.ctaText}
                        </p>
                    </Link>
                </div>
            </section>

        </>
    )
}
