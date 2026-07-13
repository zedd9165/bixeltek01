'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { IoMdArrowRoundForward } from "react-icons/io";
import metalogo from '@/assets/9805185_meta_logo_facebook_social media_icon.png'
import reacticon from '@/assets/7423888_react_react native_icon.png';
import googlelogo from '@/assets/2993685_brand_brands_google_logo_logos_icon.png';
import instagramlogo from '@/assets/6929237_instagram_icon.png';
import photoshoplogo from '@/assets/photoshop.webp'
import illustrator from '@/assets/illustrator.webp'
import searchengineoptimizationlogo from '@/assets/1000174561.png';
import ytlogo from '@/assets/4375133_logo_youtube_icon.png'
import semrushlogo from '@/assets/4202007_analytics_google_logo_social_social media_icon.png'
import googleadslogo from '@/assets/6929233_google ads_logo_icon.png'
import wordpresslogo from '@/assets/317716_cms_wordpress_blog_blogging_icon.png'
import googletagmanager from '@/assets/google-tag-manager-logo-png_seeklogo-337292.png'
import microsoftedge from '@/assets/microsoft-edge.png'
import shopifyLogo from '@/assets/shopifylogo.png'
import strapilogo from '@/assets/strapi-logo.png'

interface CardData {
  title: string;
  link: string;
  img1: StaticImageData;
  img2: StaticImageData;
  img3?: StaticImageData;
  img4?: StaticImageData;
  description: string;
}

interface CardProps {
  title: string;
  link: string;
  img1: StaticImageData;
  img2: StaticImageData;
  img3?: StaticImageData;
  img4?: StaticImageData;
  description: string;
  isEven: boolean;
}

const services: CardData[] = [
  {
    title: "Website Development",
    link: "services/web-design",
    img1: reacticon,
    img2: wordpresslogo,
    img3: shopifyLogo,
    img4: strapilogo,
    description:
      "We build fast, scalable, and visually stunning websites that enhance user experience and drive engagement.",
  },
  {
    title: "Google Ads Management",
    link: "services/google-ads",
    img1: googleadslogo,
    img2: ytlogo,
    description:
      "Get the most out of your ad spend with our expert Google Ads management and PPC campaign optimization.",
  },
  {
    title: "Search Engine Optimization",
    link: "services/seo-services",
    img1: googlelogo,
    img2: microsoftedge,
    description:
      "Increase your website’s organic traffic with cutting-edge SEO techniques and best practices.",
  },
  {
    title: "Social Media Marketing",
    link: "/social-media-marketing-agency-hyderabad",
    img1: metalogo,
    img2: instagramlogo,
    description:
      "Boost your brand's presence with highly targeted social media campaigns across multiple platforms.",
  },
  {
    title: "Reporting and Analysis",
    link: "/contact-us",
    img1: semrushlogo,
    img2: googletagmanager,
    description:
      "Optimize conversions and cut ad costs with data-driven reporting, A/B testing, and user behavior analysis.",
  },
  {
    title: "Graphic Design Services",
    link: "/contact-us",
    img1: illustrator,
    img2: photoshoplogo,
    description:
      "Turn vision into visuals with logos, brochures, hoardings & social posts that attract and convert.",
  },
];

const Card: React.FC<CardProps> = ({ title, img1, img2, img3, img4, description, link, isEven }) => {
  const gradient = isEven
    ? "from-[#7028e4] to-white/10"
    : "from-white-10 to-[#7028e4]";

  return (
    <div
      className={`w-full relative p-[2px] rounded-xl bg-gradient-to-b h-full border-2`}
    >
      <div className="bg-white border border-white rounded-[10px] flex flex-col justify-between h-full transition-all duration-300">
        <div className='flex flex-col justify-between  py-10 px-6 items-start'>
          <div className=" flex flex-row gap-4 w-fit mb-3">
            <Image src={img1} width={50} height={50} alt={title} />
            <Image src={img2} width={50} height={50} alt={title} />
            {
              img3 && <Image src={img3} width={50} height={50} alt={title} />
            }
            {
              img4 && <Image src={img4} width={50} height={50} alt={title} />
            }
          </div>
          <div className=''>
            <h2 className="text-neutral-800 text-3xl mt-4 tracking-wide font-sofiasanscondensed font-semibold">
              {title}
            </h2>
            <p className="text-neutral-600 mt-2 text-sm">{description}</p>
            <Link href={link}>
              <div className="text-sm mt-4 font-semibold text-left text-black hover:text-purple-700 cursor-pointer transition">
                Discover More{" "}
                {/* <span className="text-[#7028e4]">
              <IoMdArrowRoundForward className="inline ml-1" />
            </span> */}
              </div>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};



const CardList: React.FC = () => {
  return (
    <>
      <div className='relative flex flex-col justify-center bg-white items-center py-20 md:pt-32 md:pb-28 '>

        <h2 className="text-3xl md:text-5xl max-w-6xl mx-auto lg:text-6xl font-bold text-black  mb-14 text-center font-inter">Our Digital Marketing Solutions <br /> For Your Business</h2>
        <div className="max-w-[90%] lg:max-w-[75%] mx-auto grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 items-stretch">

          {services.map((card, index) => {
            const isEven = (index + 1) % 2 === 0;
            return (
              <Card
                key={index}
                title={card.title}
                link={card.link}
                img1={card.img1}
                img2={card.img2}
                img3={card.img3}
                img4={card.img4}
                description={card.description}
                isEven={isEven}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardList;

// export default function ServiceCards() {

//     return (
//         <div className="w-[80%] mx-auto grid grid-cols-3 justify-center items-center gap-10">
//             {cardData.map((data, index) => {
//                 return (
//                     <div key={index} className="relative">
//                         <div className={index % 2 ? `absolute -inset-[3px] rounded-[0.875rem] bg-gradient-to-b from-[#7028e4] via-[#381275] to-black z-0` : `absolute -inset-[3px] rounded-[0.875rem] bg-gradient-to-t from-[#7028e4] via-[#381275] to-black z-0`}>
//                         </div>
//                         <div className="relative z-10 bg-[#1e1e1e] text-white p-6 rounded-xl overflow-hidden">
//                             <div className="relative flex flex-col justify-left mb-4">
//                                 <div>
//                                     <Image
//                                         src={data.image}
//                                         alt="google"
//                                         width={50}
//                                         height={50}
//                                         className="h-12"
//                                     />
//                                 </div>
//                                 <h2 className="text-lg font-bold mb-2 text-left">{data.title}</h2>
//                                 <p className="text-sm text-left mb-4">
//                                     {data.description}
//                                 </p>
//                                 <div className="text-sm font-semibold text-left text-white cursor-pointer">
//                                     Read More <span className="text-[#7028e4]">→</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             })}

//         </div>
//     );
// }
