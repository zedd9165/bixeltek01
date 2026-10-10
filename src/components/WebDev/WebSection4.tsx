import React from 'react'
import Link from 'next/link'
import { solutionsHeader, webServices } from '@/data/webDesignData'

export default function WebSection4() {
    return (
        <section className='relative px-6 py-24'>
            <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
            <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
            <div>
                <div className=' lg:max-w-[80%] mx-auto mb-5 text-center'>
                    <h2 className='text-white text-4xl lg:text-6xl max-w-7xl mx-auto font-inter mb-3 font-semibold '>
                        {solutionsHeader.headingPart1}
                        <span className='text-blue-500'>{solutionsHeader.headingHighlight}</span>
                        {solutionsHeader.headingPart2}
                    </h2>
                    <p className='text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-3xl mx-auto'>
                        {solutionsHeader.description}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[75%] mx-auto mt-10">
                    {webServices.map((service, index) => (
                        <div
                            key={index}
                            className={`relative w-full xs:h-80 md:h-fit lg:h-96 border border-gray-800 bg-black/10 hover:bg-blue-600 transition-all duration-300 flex flex-col justify-between p-8 lg:p-8 xl:p-10 group`}
                        >
                            <div className="flex flex-col items-center">
                                <h3 className="text-white md:text-2xl lg:text-3xl font-bold text-center mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 group-hover:text-white text-md text-center leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {service.href && service.ctaText && (
                                <div className="mt-4 text-center">
                                    <Link
                                        href={service.href}
                                        className="inline-block text-blue-400 group-hover:text-white font-semibold text-sm transition underline-offset-4 hover:underline"
                                    >
                                        {service.ctaText}
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
