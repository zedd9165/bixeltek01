export const metadata = {
  title: "About Bixeltek | Web, Google Ads, SEO & Automation Agency",
  description:
    "Bixeltek is a Google Partner agency in Hyderabad. We build websites and apps, run Google Ads and SEO, and automate the systems behind them.",
  keywords: "Google Ads, Marketing, SEO, PPC, Bixeltek, Automation, Web Design",
  openGraph: {
    title: "About Bixeltek | Web, Ads, SEO & Automation Agency",
    description:
      "Bixeltek is a Google Partner agency in Hyderabad. We build websites and apps, run Google Ads and SEO, and automate the systems behind them.",
    type: "website",
    url: "https://bixeltek.com/about-us",
    images: [
      {
        url: "https://bixeltek.com/BIXELTEKLOGO.png",
        width: 1200,
        height: 630,
        alt: "About Bixeltek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Bixeltek | Web, Ads, SEO & Automation Agency",
    description:
      "Bixeltek is a Google Partner agency in Hyderabad. We build websites and apps, run Google Ads and SEO, and automate the systems behind them.",
    images: ["https://bixeltek.com/BIXELTEKLOGO.png"],
  },
  alternates: {
    canonical: "https://bixeltek.com/about-us",
  },
};

import Image from "next/image";
import { Bento } from "@/components/AbtHero/AbtHero";
import aboutTeamImg from "@/assets/bixeltek-team.jpeg";
import storyimg1 from "@/assets/bixeltek-team-2.jpeg";
import storyimg2 from "@/assets/bixeltek-team-3.jpeg";
import { PhoneCall, MessageCircle, CalendarDays } from "lucide-react";
import Link from "next/link";
import ContactFromNew from "@/components/ContactFormNew";

export default function AboutPage() {
  const timelineEvents = [
    {
      title: "Deep Discovery",
      description: "We listen, research, and analyze before crafting a plan.",
    },
    {
      title: "Custom Strategy",
      description: "Every brand is unique—so our solutions are tailor-made.",
    },
    {
      title: "Performance Obsessed",
      description: "We optimize for clicks, leads, conversions, and sustained growth.",
    },
  ];

  return (
    <>
      <div className="bg-black text-white">
        <section>
          <div className="relative isolate mt-[-60px] md:mt-[-120px] mb-[-70px] overflow-hidden bg-black h-[100vh] flex items-center justify-center">
            <svg
              className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="hero-pattern"
                  width="200"
                  height="200"
                  x="100%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none"></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-pattern)"></rect>
            </svg>
            <div
              className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
              aria-hidden="true"
            >
              <div
                className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#8653f5] to-[#ae07e6] opacity-50"
                style={{
                  clipPath:
                    "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                }}
              ></div>
            </div>
            <div className="max-w-full px-4 text-center lg:max-w-3xl">
              <h1 className="text-5xl font-bold font-sofiasanscondensed tracking-normal text-white sm:text-6xl">
                One Team for Your Website, Your Marketing and the Systems Behind Them
              </h1>
              <p className="mt-10 text-sm lg:text-lg md:leading-8 text-gray-300">
                Bixeltek is a Hyderabad-based agency and Google Partner. We build websites, online stores and apps, run Google Ads, SEO and Meta Ads, and automate the systems behind them for businesses in India, Canada, the US and Saudi Arabia. We started running Google Ads and SEO for dental clinics in North America and grew into a team that handles the whole digital stack.
              </p>
              <Link href={'/contact-us'}>
                <button className="backdrop-blur-3xl border border-white text-white font-normal text-sm py-2 px-4 md:px-6 md:py-3 md:text-md rounded-lg mt-14 md:mt-16 shadow-custom">
                  Talk to an Expert <i className="fa-solid fa-arrow-right ml-2" id="get_a_quote"></i>
                </button>
              </Link>

            </div>
          </div>
        </section>
        <section className="pt-32 pb-16 md:pt-0 md:pb-0 md:py-16  overflow-hidden bg-black">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
              <div>
                <p className="px-4 py-1 text-sm w-fit border rounded-lg">Who We Are</p>
                <h2 className="block text-xl mt-4 font-bold lg:leading-tight text-white">Bixeltek is a Hyderabad-based agency and Google Partner built for businesses that are ready to grow. From healthcare practices to established clinics and online brands, we build digital infrastructure, run paid media and SEO, and connect the systems that turn demand into measurable revenue.</h2>
                <p className="mt-3 text-lg text-neutral-400">We&apos;re not your typical agency. No cookie-cutter strategies. No vanity metrics. Just connected web, growth, and automation systems that deliver real results.</p>

                <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                  <Link href={'tel:+919100032301'}>
                    <div className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                      Talk to a Specialist
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </div>
                  </Link>
                </div>

              </div>


              <div className="relative ms-4">
                <Image className="w-full rounded-md object-cover" src={aboutTeamImg} alt="Bixeltek Team" priority />
                <div className="absolute inset-0 -z-1 bg-linear-to-tr from-purple-500 via-black to-purple-300 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6"></div>
                <div className="absolute bottom-0 start-0">
                  <svg className="w-2/3 ms-auto h-auto text-white dark:text-neutral-900" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="531" y="352" width="99" height="99" fill="currentColor" />
                    <rect x="140" y="352" width="106" height="99" fill="currentColor" />
                    <rect x="482" y="402" width="64" height="49" fill="currentColor" />
                    <rect x="433" y="402" width="63" height="49" fill="currentColor" />
                    <rect x="384" y="352" width="49" height="50" fill="currentColor" />
                    <rect x="531" y="328" width="50" height="50" fill="currentColor" />
                    <rect x="99" y="303" width="49" height="58" fill="currentColor" />
                    <rect x="99" y="352" width="49" height="50" fill="currentColor" />
                    <rect x="99" y="392" width="49" height="59" fill="currentColor" />
                    <rect x="44" y="402" width="66" height="49" fill="currentColor" />
                    <rect x="234" y="402" width="62" height="49" fill="currentColor" />
                    <rect x="334" y="303" width="50" height="49" fill="currentColor" />
                    <rect x="581" width="49" height="49" fill="currentColor" />
                    <rect x="581" width="49" height="64" fill="currentColor" />
                    <rect x="482" y="123" width="49" height="49" fill="currentColor" />
                    <rect x="507" y="124" width="49" height="24" fill="currentColor" />
                    <rect x="531" y="49" width="99" height="99" fill="currentColor" />
                  </svg>
                </div>

              </div>

            </div>

          </div>

        </section>
        <section className="py-24 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
              <div
                className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                <div className="pt-28 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                  <Image className=" rounded-xl object-cover" src={storyimg1} alt="about Us image" />
                </div>
                <Image className="sm:ml-0 ml-auto rounded-xl object-cover" src={storyimg2}
                  alt="about Us image" />
              </div>
              <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <p className="px-4 py-1 text-sm w-fit border rounded-lg">Our Story</p>
                    <h2
                      className="text-gray-50 text-4xl font-bold font-manrope font-sofiasanscondensed tracking-wide lg:text-start text-center">
                      We started Bixeltek with one goal: to bridge the gap between creative thinking and measurable performance.</h2>
                    <p className="text-gray-100 text-base font-normal leading-relaxed lg:text-start text-center">
                      With years of experience in running successful Google Ads and SEO campaigns for dental clinics across North America, we expanded our reach to serve clients in India, the GCC, and beyond. What began as a small performance marketing team evolved into a full-service growth partner for dozens of brands globally.</p>
                  </div>
                  <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                    <div className="flex-col justify-start items-start inline-flex">
                      <h3 className="text-white text-4xl font-bold font-manrope leading-normal">5+</h3>
                      <h4 className="text-gray-100 text-base font-normal leading-relaxed">Years in Business</h4>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <h3 className="text-white text-4xl font-bold font-manrope leading-normal">100+</h3>
                      <h4 className="text-gray-100 text-base font-normal leading-relaxed">Projects Delivered</h4>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <h3 className="text-white text-4xl font-bold font-manrope leading-normal">30+</h3>
                      <h4 className="text-gray-100 text-base font-normal leading-relaxed">Brands Scaled</h4>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        {/* Other sections (Bento, Timeline, etc.) */}
        <Bento />

        {/* The people you will work with */}
        <section className="py-20 md:py-28 bg-[#08080C] border-t border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="px-4 py-1 text-sm w-fit border border-neutral-700 text-purple-400 rounded-lg">Our Team</p>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold font-sofiasanscondensed tracking-tight text-white">
                The people you will work with
              </h2>
              <p className="mt-4 text-base md:text-lg text-neutral-400 font-poppins">
                Direct access to the engineers, technical marketers, and designers building your digital infrastructure and scaling your campaigns.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 flex flex-col justify-between">
                <div>
                  <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6">
                    <Image src={aboutTeamImg} alt="Engineering & Development Team" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-inter">Engineering &amp; Development</h3>
                  <p className="text-sm font-semibold text-purple-400 mt-1 font-poppins">Full-Stack Web &amp; App Engineers</p>
                  <p className="text-sm text-neutral-400 mt-3 font-poppins leading-relaxed">
                    Builds fast Next.js websites, ecommerce platforms, APIs, and custom software systems designed for performance and scale.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 flex flex-col justify-between">
                <div>
                  <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6">
                    <Image src={storyimg1} alt="Paid Media & Performance Team" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-inter">Performance Marketing</h3>
                  <p className="text-sm font-semibold text-purple-400 mt-1 font-poppins">Google &amp; Meta Ads Specialists</p>
                  <p className="text-sm text-neutral-400 mt-3 font-poppins leading-relaxed">
                    Manages high-intent paid search, display, and social campaigns optimized for qualified calls, bookings, and customer acquisitions.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 flex flex-col justify-between">
                <div>
                  <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6">
                    <Image src={storyimg2} alt="SEO & Technical Systems Team" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-inter">Technical SEO &amp; Automation</h3>
                  <p className="text-sm font-semibold text-purple-400 mt-1 font-poppins">Search &amp; Workflow Integrators</p>
                  <p className="text-sm text-neutral-400 mt-3 font-poppins leading-relaxed">
                    Connects CRMs, webhooks, and reporting pipelines while managing organic search visibility and local rankings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10 pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-between flex-col lg:flex-row"
            >
              <div className="w-full md:w-4/5 block text-center mb-5 lg:text-left lg:mb-0">
                <h2
                  className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2"
                >
                  Let&apos;s Grow Together
                </h2>
                <p className="text-base md:text-xl text-indigo-100">
                  If you&apos;re tired of marketing that doesn&apos;t move the needle, you&apos;re in the right place.Let Bixeltek help you turn clicks into conversions, and campaigns into growth.
                </p>
              </div>
              <div className="w-full lg:w-1/5 flex justify-center items-center">
                <a
                  href="contact-us"
                  className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-8 transition-all duration-500"
                >Get In Touch
                  <svg
                    width="19"
                    height="14"
                    viewBox="0 0 19 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                      stroke="#4F46E5"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>

              </div>

            </div>
          </div>
        </section>
        <section className='bg-black p-2 md:p-20 mx-auto flex flex-col justify-center gap-10 items-center md:flex-row ' id='form'>
          <div className="w-full mt-14 md:mt-0 flex justify-center items-center px-6">
            <div className="space-y-5 text-white max-w-xl ">
              <h2 className="text-4xl md:text-5xl font-sofiasanscondensed font-bold">
                One Team —
                <span className="text-purple-500"> Web, Growth &amp; Automation</span> Partner
              </h2>

              <p className="text-white font-poppins text-base leading-relaxed">
                A business rarely needs just marketing or just a website. When your online presence, advertising, and operational workflows are connected, growth becomes predictable.
              </p>
              <p className="text-white font-poppins text-base leading-relaxed">
                Book a consultation with our Hyderabad-based team. We’ll look at your website, paid campaigns, and lead flow, and give you a straightforward plan of what to prioritize first.
              </p>
              <p className="text-white font-poppins text-base leading-relaxed">
                Whether you need a high-converting website, measurable Google Ads management, or integrated CRM and automation workflows, <span className="font-semibold">Bixeltek</span> is your growth partner in Hyderabad.
              </p>

              <div className="space-y-3 pt-3">
                <Link href={'tel:+919100032301'}>
                  <div className="flex items-center gap-2">
                    <PhoneCall size={20} />
                    <span className="text-white text-sm">Call: +91-9100032301</span>
                  </div>
                </Link>

                <div className="flex items-center gap-2">
                  <MessageCircle size={20} />
                  <span className="text-white text-sm">WhatsApp: Start a Chat</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays size={20} />
                  <span className="text-white text-sm">
                    Schedule a Free Consultation:{' '}
                    <button

                      className="underline underline-offset-2 text-blue-300 hover:text-blue-400"
                    >
                      Book Now
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center items-center' >
            <ContactFromNew />
          </div>
        </section>
      </div>
    </>
  );
}
