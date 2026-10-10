'use client';
import React, { useState } from 'react';
import { LogoTicker2 } from '../GoogleAdsCarousel';
import { ButtonContactForm } from '@/sections/ButtonContactForm';
import { heroContent } from '@/data/webDesignData';

export default function WebSection1() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleContactForm = () => {
        setIsVisible(prev => !prev);
        console.log(!isVisible ? "Contact form visible" : "Contact form not visible");
    };

    return (
        <>
            <section className="relative flex flex-col items-center justify-center min-h-[100vh] md:min-h-[80vh] bg-black -mt-32 text-center px-6 overflow-hidden">
                <div className='flex justify-center items-center'>
                    {/* Blue Sphere Glow */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500 opacity-20 blur-3xl pointer-events-none" />

                    <div className="relative z-10 mt-40 max-w-7xl">
                        {/* Headline */}
                        <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
                            {heroContent.headingPart1}{" "}
                            <span className="text-blue-500">{heroContent.headingHighlight}</span>
                        </h1>

                        {/* Subheading */}
                        <p className="mt-6 text-lg md:text-base text-gray-300 max-w-5xl mx-auto">
                            {heroContent.description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <button
                                onClick={toggleContactForm}
                                className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                            >
                                {heroContent.ctaText}
                            </button>
                        </div>
                    </div>
                </div>
                <ButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
            </section>
                {/* <LogoTicker2 /> */}
        </>
    )
}
