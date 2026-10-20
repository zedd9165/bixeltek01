export const metadata = {
  title: "WooCommerce Ecommerce Website Development UAE | OMA Computers Case Study",
  description:
    "How Bixeltek built an ecommerce website for OMA Computer Systems in the UAE using WordPress and WooCommerce, launching with 2,000+ products, structured categories, product filters, comparison, wishlist and cart functionality.",
  keywords: [
    "ecommerce website development UAE",
    "WooCommerce development Dubai",
    "WordPress ecommerce website UAE",
    "computer ecommerce website development",
    "large product catalogue ecommerce",
    "OMA Computers case study",
    "Bixeltek ecommerce development",
  ],
  openGraph: {
    title: "Building a 2,000+ Product Ecommerce Store for OMA Computers | Bixeltek",
    description:
      "A WordPress and WooCommerce ecommerce build for a UAE IT supplier, with more than 2,000 products at launch and integrated catalogue discovery and shopping tools.",
    type: "website",
    url: "https://bixeltek.com/case-studies/oma-computers-ecommerce-website-case-study",
    images: [
      {
        url: "https://bixeltek.com/images/case-studies/oma-computers-ecommerce-website.jpg",
        width: 1200,
        height: 630,
        alt: "OMA Computers ecommerce website development case study by Bixeltek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WooCommerce Ecommerce Website Development UAE | OMA Computers",
    description:
      "Explore how Bixeltek launched OMA Computers' WordPress ecommerce store with 2,000+ products and useful shopping features.",
    images: ["https://bixeltek.com/images/case-studies/oma-computers-ecommerce-website.jpg"],
  },
  alternates: {
    canonical: "https://bixeltek.com/case-studies/oma-computers-ecommerce-website-case-study",
  },
};

import omaHeroImg from '@/assets/oma-casestudy.png';
import OMAComputersCaseStudy from '@/components/CasestudyMain/OMAComputersCaseStudy';

export default function OMAComputersEcommerceCaseStudyPage() {
  return (
    <>
      <section
        className="relative mx-auto flex min-h-[70vh] w-full items-center bg-[#111827] bg-cover bg-center md:min-h-[85vh]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5, 7, 15, 0.90) 0%, rgba(5, 7, 15, 0.72) 52%, rgba(5, 7, 15, 0.42) 100%), url(${omaHeroImg.src})`,
        }}
      >
        <div className="relative z-10 flex h-full w-full flex-col items-start justify-center px-5 py-20 md:max-w-[78%] md:pl-20 md:pr-0">
          <p className="mb-5 text-left text-sm font-semibold uppercase tracking-widest text-white font-poppins">
            Case Study · Ecommerce Website Development
          </p>
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl font-sofiasanscondensed">
            Building a WooCommerce Store for a 2,000+ Product Computer Catalogue
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed tracking-wide text-white/90 md:text-xl font-poppins">
            How Bixeltek brought OMA Computer Systems’ product range online with a structured catalogue, product discovery tools and a scalable WordPress ecommerce foundation.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <OMAComputersCaseStudy />
      </section>
    </>
  );
}
