import Image from "next/image";
import React from "react";


const SeoPartners = ({logos}:any) =>{
    return(
        <section className="py-10 bg-white">
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                    <div className="w-2/3 mx-auto text-center mb-6">
                        <h2 className=" text-4xl md:text-5xl font-semibold  font-sofiasanscondensed text-neutral-900">
                            Our Partners
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center">
                        {/* @ts-ignore */}
                        {logos.map((logo, idx) => (
                            <div key={idx} className="flex justify-center">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-12 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section>
    )
}

export default SeoPartners