


"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import IndustrySections from "@/components/IndustrySection";
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg";
import pet from "@/assets/sincerely-media-VNsdEl1gORk-unsplash.jpg";
import roofing from "@/assets/digital marketing for roofing industries.jpg";
import dental from "@/assets/digital marketing for health care practices.jpg";
import lawncare from "@/assets/digital marketing for lawn care services.jpg";
import school from '@/assets/school.jpg'
import blackcar from "@/assets/digital marketing for car detailers.jpg";
import { FaTooth, FaHospital, FaDog, FaGasPump, FaCar, FaBroom, FaGraduationCap, FaBuilding, FaTree } from "react-icons/fa";
import { FaChartLine, FaCogs, FaUserTie, FaBullseye, FaMoneyBillWave, FaChartBar, FaSeedling, FaDatabase } from 'react-icons/fa';
import healthcare from "@/assets/digital marketing for health care practices.jpg";
import CarouselSection from "@/components/industriescarosel";
import Link from "next/link";

export default function Industries() {

  const industry = [
    { name: "Dental Clnics", icon: <FaTooth /> },
    { name: "Healthcare", icon: <FaHospital /> },
    { name: "Pet Shops", icon: <FaDog /> },
    { name: "Oil & Gas Industries", icon: <FaGasPump /> },
    { name: "Automobile Indutries", icon: <FaCar /> },
    { name: "Roof Cleaning Services", icon: <FaBroom /> },
    { name: "Education Industry", icon: <FaGraduationCap /> },
    { name: "Real Estate", icon: <FaBuilding /> },
    { name: "Arborist & Tree Removal", icon: <FaTree /> },
    { name: "Lawn Care Services", icon: <FaSeedling /> },
  ];
  const cards = [
    {
      title: 'Proven Results',
      description: 'Experience transformative outcomes that propel your business to new heights.',
      icon: <FaChartLine size={50} />,
    },
    {
      title: 'Customized Approach',
      description: 'Tailored strategies designed specifically for your business goals and target audience.',
      icon: <FaCogs size={50} />,
    },
    {
      title: 'Industry Expertise',
      description: 'Specialized knowledge to create strategies that resonate with your market.',
      icon: <FaUserTie size={50} />,
    },
    {
      title: 'Targeted Lead Generation',
      description: 'Drive qualified leads and maximize conversions with strategic campaigns.',
      icon: <FaBullseye size={50} />,
    },
    {
      title: 'Cost-Effective Marketing',
      description: 'Achieve higher ROI with efficient digital marketing strategies.',
      icon: <FaMoneyBillWave size={50} />,
    },
    {
      title: 'Measurable ROI',
      description: 'Track success with detailed analytics for data-driven decision-making.',
      icon: <FaChartBar size={50} />,
    },
    {
      title: 'Continuous Growth',
      description: 'Optimize strategies for sustainable, long-term business growth.',
      icon: <FaSeedling size={50} />,
    },
    {
      title: 'Data-driven Decision Making',
      description: 'Utilize data analytics and insights to make informed decisions and continually optimize your digital marketing strategies.',
      icon: <FaDatabase size={50} />,
    },
  ];


  return (
    <>
      <section>
        <div className="relative isolate pb-20 md:pb-0  md:mt-[-120px] mb-[-70px] overflow-hidden bg-black md:h-[100vh] lg:h-[100vh] xl:h-[100vh] flex items-center justify-center">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true">
            <defs>
              <pattern id="hero-pattern" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)"></rect>
          </svg>
          <div
            className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            aria-hidden="true">
            <div
              className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#8653f5] to-[#ae07e6] opacity-50"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            ></div>
          </div>
          <div className="max-w-full px-4 mt-40 md:mt-20 text-center lg:max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold font-sofiasanscondensed tracking-tight text-white ">
            We Know Your Industry.<br /><span className="text-purple-500"> We Know How to Scale It.</span>
            </h1>
            <p className="mt-10 text-sm lg:text-lg md:leading-8 text-gray-300 ">
            Bixeltek delivers laser-focused digital marketing strategies tailored to your niche — from dental clinics and e-commerce brands to real estate, education, and startups.<br /><span className="font-bold italic text-purple-500">We don&apos;t guess. We grow.</span> 
            </p>

              <Link href={'/contact-us'}>
            <button className="backdrop-blur-3xl border border-white text-white font-normal text-sm py-2 px-4 md:px-6 md:py-3 md:text-md rounded-lg mt-14 md:mt-16 shadow-custom ">
              <span>
                Get a Free Quote <i className="fa-solid fa-arrow-right ml-2" id='get_a_quote'></i>
              </span>
            </button>
            </Link>
          </div>
        </div>
      </section>

      <section className='w-full flex justify-center flex-wrap max-w-[90%] mx-auto my-20 lg:flex-nowrap overflow-y-hidden items-center'>
        {/* Left Content Section */}
        <div className='w-full lg:w-[60%]  px-1 md:pr-16 py-10 lg:py-14'>
          <h2 className="text-4xl md:text-5xl font-semibold  font-sofiasanscondensed text-white">
            Proven Results Across <span className='text-purple-500'>Diverse Industries</span>
          </h2>
          <p className="mt-4 text-sm md:text-lg lg:max-w-xl text-gray-300">
            Our expertise spans multiple industries, helping businesses achieve growth through data-driven strategies and
            innovative solutions. From technology and finance to healthcare and retail, we empower brands with actionable insights
            and cutting-edge digital solutions.
          </p>
          <p className="mt-2 text-sm md:text-lg lg:max-w-xl text-gray-300">
            Explore how our tailored approach delivers measurable success, increasing engagement, conversions, and brand visibility
            in a competitive landscape.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {industry.map((industry, index) => (
              <div key={index} className="flex items-center text-lg text-white">
                <span className="text-white text-xl inline-block  mr-3">{industry.icon}</span>
                <h2 className='font-poppins text-sm'>{industry.name}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full lg:w-[40%] lg:ml-[-70px] justify-center gap-4 p-1">
          <div className='w-1/3 flex flex-col  items-center justify-center gap-3'>
            <Image src={healthcare} alt='healthcare' className='rounded-xl'></Image>
            <Image src={oil} alt='oil' className='rounded-xl'></Image>
          </div>
          <div className='w-1/3 flex flex-col gap-3'>
            <Image src={roofing} alt='roofind' className='rounded-xl'></Image>
            <Image src={pet} alt='pet' className='rounded-xl'></Image>
            <Image src={school} alt='dental' className='rounded-xl'></Image>
          </div>
          <div className='w-1/3 flex flex-col justify-center gap-3'>
            <Image src={lawncare} alt='lawncare' className='rounded-xl'></Image>
            <Image src={blackcar} alt='automobiles' className='rounded-xl'></Image>
          </div>
        </div>
      </section>
      <IndustrySections />
      <section className="lg:max-w-[90%] xl:max-w-[80%] md:py-10 mx-auto">
        <div className="py-10  md:px-0 text-center">
          <h2 className="text-3xl font-sofiasanscondensed md:text-6xl font-semibold text-white mb-5">Why Choose Us?</h2>
          <p className="text-sm xl:text-xl max-w-xl mx-auto text-gray-100">
            Experience the unrivaled power of our proven methods that have catapulted countless businesses to new heights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 justify-items-center items-center h-auto w-full bg-black text-white">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card-wrapper mx-4 my-1 h-[350px] w-[300px] bg-slate-800 rounded-lg shadow-lg transform transition-transform ${index < cards.length / 2
                ? "lg:translate-x-10" // Upper-row cards
                : "lg:-translate-x-10" // Bottom-row cards
                }`}
            >
              <div className="card-content flex flex-col items-center justify-start text-center p-4">
                <div className="icon mb-4 text-purple-400 pt-10 pb-5">{card.icon}</div>
                <h3 className="font-bold text-xl mb-4">{card.title}</h3>
                <p className="text-sm text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex text-lg cursor-pointer justify-center text-white group items-center mt-10">
          <p>
            View our services{" "}
            <i
              className="fa fa-arrow-right rotate-[-45deg] group-hover:rotate-[0deg] transition-all"
              aria-hidden="true"
            ></i>
          </p>
        </div>
      </section>
      <section>
      </section>
      <section className="flex relative flex-col md:flex-row items-center mx-auto justify-between bg-black text-white px-2 md:px-20 lg:px-40 py-20">
        <motion.div
          className="absolute w-2 sm:w-3 md:w-3 h-[33px] bg-[#4285F4] top-0 right-0 origin-top"
          animate={{ scaleY: [0, 10, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 4, // Starts first
          }}
        />

        {/* Horizontal Scaling (Top - Red) */}
        <motion.div
          className="absolute top-0 left-0 origin-left h-[6px] bg-[#EA4335]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0, // Starts after the first motion ends
          }}
          style={{ width: "100%" }}
        />

        {/* Vertical Scaling (Left Side - Green) */}
        <motion.div
          className="absolute left-0 bottom-0 w-2 origin-bottom bg-[#34A853]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 12, // Starts after the second motion ends
          }}
          style={{ height: "100%" }}
        />

        {/* Horizontal Scaling (Bottom - Yellow) */}
        <motion.div
          className="absolute bottom-0 left-0 origin-right h-[6px] bg-[#FBBC05]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 8, // Starts after the third motion ends
          }}
          style={{ width: "100%" }}
        />


        <div className="w-full lg:w-1/2 mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-4xl font-semibold mb-4">
            &quot;Hey, We&apos;re <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>Certified!&quot;
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Proud to be a part of the Google Partners family. Leveraging the power of Google tools to help businesses grow smarter and faster.
          </p>
        </div>


        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <a
            href="https://www.google.com/partners/agency?id=2188074075"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
              alt="Google Partners Badge"
              className="w-48"
            />
          </a>
        </div>
      </section>
    </>
  );
}
