import Phone from '@/assets/MyProfile-left.png'
import Image from 'next/image'
import code from '@/assets/codess.png'
import seoDashboard from '@/assets/SEO Dashboard.png'
import googleAdsDashboard from '@/assets/Google Ads Dashboard.png'
import { MdKeyboardArrowRight } from "react-icons/md";

import Link from 'next/link'
export const Bento = () => {
    return (
        <div className="bg-black  py-10 sm:py-20">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="flex flex-col justify-start items-start">
                    <p className="px-4 py-1 text-sm w-fit border rounded-lg">Our Services</p>
                    <h2 className="mt-4 max-w-lg text-balance text-start text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        What we do?
                    </h2>
                    <p className='mt-2'>We craft data-driven, conversion-focused digital strategies that drive measurable results.</p>
                </div>
                <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-black border border-neutral-200 lg:rounded-l-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <h2 className='text-2xl md:text-3xl font-inter font-medium text-[#FBBC05]'>
                                     Social Media Marketing
                                </h2>
                                <p className="mt-2 text-xl font-medium tracking-tight text-white max-lg:text-center">
                                Thumb-stopping content and Meta Ads that build your audience and drive action.
                                </p>
                                
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center">
                                    Our team of experts understands the importance of Social Media Marketing. We can help you build your brand using various social media platforms.
                                </p>
                                <Link href={'/social-media-marketing-agency-hyderabad'}>
                                <p className='text-white mt-4 '>Learn More <MdKeyboardArrowRight className=' inline mb-[2px] text-lg' /></p>
                                </Link>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow overflow-y-hidden [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <Image
                                    className="absolute size-auto object-cover object-top top-0 left-0 h-[150%]"
                                    src={Phone}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-black border border-neutral-200 max-lg:rounded-t-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <h2 className=' text-2xl md:text-3xl font-inter font-medium text-[#4285F4]'>
                                    Search Engine Optimization (SEO)
                                </h2>
                                <p className="mt-2 text-xl font-medium tracking-tight text-white max-lg:text-center">Long-term visibility through smart, semantic, and local SEO strategies.</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center">
                                    Boost your visibility with keyword optimization and on-page strategies for better search rankings.
                                </p>
                                <Link href={'/seo-agency-hyderabad'}>
                                <p className='text-white mt-4 '>Learn More <MdKeyboardArrowRight className=' inline mb-[2px] text-lg' /></p>
                                </Link>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                <Image
                                    className="w-full max-lg:max-w-xs object-cover rounded-md"
                                    src={seoDashboard}
                                    alt="SEO Dashboard"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-black border border-neutral-200 "></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <h2 className='text-2xl md:text-3xl font-inter font-medium text-[#EA4335]'>Google Ads</h2>
                                <p className="mt-2 text-xl font-medium tracking-tight text-white max-lg:text-center"> Search, Display, and Performance Max campaigns designed to deliver qualified leads.</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center">
                                    With researched search and performance campaigns, we ensure qualified customers find your business when they are ready to act.
                                </p>
                                <Link href={'/google-ads-agency-hyderabad'}>
                                <p className='text-white mt-4 '>Learn More <MdKeyboardArrowRight className=' inline mb-[2px] text-lg' /></p>
                                </Link>
                            </div>
                            <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                                <Image
                                    className="h-[min(152px,40cqw)] object-cover rounded-md"
                                    src={googleAdsDashboard}
                                    alt="Google Ads Dashboard"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                    </div>
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-black border border-neutral-200  max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <h2 className='text-2xl md:text-3xl font-inter font-medium text-[#FBBC05]'>Web Design & Development</h2>
                                <p className="mt-2 text-xl font-medium tracking-tight text-white max-lg:text-center">
                                  Mobile-first, lightning-fast websites that turn visitors into customers.</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center">
                                    Our web design team has ample years of experience in the core areas of design to build a website that you need.
                                </p>
                                <Link href={'/web-design-services-hyderabad'}>
                                <p className='text-white mt-4 '>Learn More <MdKeyboardArrowRight className=' inline mb-[2px] text-lg' /></p>
                                </Link>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow">
                                <div className="absolute bottom-0 left-10 top-10 right-0 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                        <div className="-mb-px flex text-sm font-medium text-gray-400">
                                            <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                                src/app/page.tsx
                                            </div>
                                            <div className="border-r border-gray-600/10 px-4 py-2">types/index.ts</div>
                                        </div>
                                    </div>
                                    <div className="relative h-full w-full overflow-x-auto">
                                        <div className="absolute inset-0 h-full w-[250%]  transform">
                                            <Image
                                                src={code}
                                                alt="code"
                                                className="h-full w-full object-cover"
                                                layout="responsive"
                                                height={800}
                                                width={1000}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
