'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import omaImg from '@/assets/oma-casestudy.png';
import type { ReactNode } from 'react';

const sections = [
  { id: 'overview', label: 'Project Overview' },
  { id: 'challenge', label: 'The Challenge' },
  { id: 'approach', label: 'The Ecommerce Build' },
  { id: 'catalogue', label: 'The Product Catalogue' },
  { id: 'outcomes', label: 'What We Delivered' },
  { id: 'takeaway', label: 'The Takeaway' },
];

type ApproachStep = {
  title: string;
  description: ReactNode;
  points: string[];
};

const approachSteps: ApproachStep[] = [
  {
    title: 'Building the Store on WordPress and WooCommerce',
    description: (
      <>
        We built OMA Computer Systems a fully functional ecommerce store using WordPress and WooCommerce. The goal was to create more than a digital brochure: customers needed to browse products, review specifications, compare options and move into a purchasing journey, while the team needed a platform it could continue to manage.
      </>
    ),
    points: [
      'An ecommerce foundation designed around a large, varied technology catalogue',
      'Reusable product and category layouts for consistent presentation',
      'A store structure that can accommodate new product ranges as the business grows',
    ],
  },
  {
    title: 'Launching With More Than 2,000 Products',
    description: (
      <>
        One of the biggest launch tasks was getting the initial catalogue online. We uploaded more than 2,000 products and organized the information so shoppers could navigate a broad range of computer hardware without treating every product as an isolated listing.
      </>
    ),
    points: [
      'Product records prepared for a large initial launch catalogue',
      'Categories spanning laptops, desktops, workstations, servers, monitors, accessories and power backup',
      'Product details such as brand, model, specifications, SKU, price and availability presented where applicable',
    ],
  },
  {
    title: 'Making Product Discovery Easier',
    description: (
      <>
        A catalogue of this size only works when people can narrow it down. We structured category navigation and product discovery around the way buyers evaluate IT equipment, helping them move from a broad category to products that fit their needs.
      </>
    ),
    points: [
      'Category-based browsing across core product groups',
      'Filters for relevant product attributes where supported by the catalogue data',
      'Search and listing layouts that keep product information accessible while browsing',
    ],
  },
  {
    title: 'Adding Practical Shopping Tools',
    description: (
      <>
        Business technology purchases often depend on specification differences, model requirements and budget. We incorporated shopping features that let visitors evaluate products without repeatedly opening separate pages.
      </>
    ),
    points: [
      'Quick-view product inspection from category listings',
      'Product comparison and wishlist functionality',
      'Add-to-cart actions and clear product-detail pages to support the next step',
    ],
  },
  {
    title: 'Using Ecommerce Extensions to Support the Workflow',
    description: (
      <>
        We selected and configured premium WordPress and WooCommerce extensions to support the store’s required shopping experience. The focus was on making catalogue browsing and common customer actions work together, rather than stacking plugins without a defined purpose.
      </>
    ),
    points: [
      'Commerce features integrated into the existing WordPress store experience',
      'Product listing, comparison, wishlist and cart interactions supported in the storefront',
      'Core shopping paths considered together so added features serve a coherent journey',
    ],
  },
  {
    title: 'Preparing the Store for Ongoing Growth',
    description: (
      <>
        The launch needed to give OMA a foundation for more than the first product upload. We structured the store so the team could continue expanding its catalogue and product categories as its range and customer needs evolve.
      </>
    ),
    points: [
      'A manageable WordPress and WooCommerce content structure',
      'Product and category patterns that can be reused as the catalogue expands',
      'Supporting information such as contact, order and store-policy pages alongside the shopping journey',
    ],
  },
];

export default function OMAComputersCaseStudy() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            current = section.id;
            break;
          }
        }
      }
      if (current) setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="mx-auto flex w-full max-w-7xl space-x-0 px-6 py-16 md:space-x-8 md:py-20">
      <div className="w-full space-y-12 md:w-2/3">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#670ef7]">
          <Link href="/" className="hover:underline">Bixeltek</Link>
          <span>/</span>
          <Link href="/services/ecommerce-development" className="hover:underline">Ecommerce Development</Link>
          <span>/</span>
          <span className="text-gray-600">Client Case Study</span>
        </div>

        <div id="overview" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            Turning a Large IT Catalogue Into an Online Store
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              OMA Computer Systems is a Dubai-based IT supplier serving customers looking for business laptops, desktops, workstations, servers, accessories and related technology products. Its product range spans different brands, specifications and purchasing needs.
            </p>
            <p>
              Bixeltek built a <Link href="/services/web-design/wordpress" className="font-medium text-[#670ef7] hover:underline">WordPress</Link> and <Link href="/services/ecommerce-development" className="font-medium text-[#670ef7] hover:underline">WooCommerce ecommerce website</Link> designed to bring that catalogue online in a structured, shoppable format. The initial launch included more than <strong className="text-gray-900">2,000 product listings</strong>, supported by product discovery and shopping tools for customers comparing technology options.
            </p>
            <p className="border-l-4 border-[#670ef7] bg-purple-50/60 py-2 pl-4 font-semibold text-gray-900">
              The objective was to launch a working ecommerce system, not simply a website displaying products.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-md">
          <Image
            src={omaImg}
            alt="OMA Computers WooCommerce Store Showcase"
            className="h-auto w-full object-cover"
          />
        </div>

        <div id="challenge" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            The Challenge: Making a 2,000+ Product Range Usable
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              A large technology catalogue creates a different challenge from a small retail store. Customers may be comparing processor families, memory, storage, model numbers, warranty details or availability before they are ready to buy.
            </p>
            <p>
              The store needed to support that decision-making while giving OMA a practical way to maintain a broad catalogue and add more products over time. Product pages, categories, filters and shopping actions had to work as one connected journey.
            </p>
          </div>
          <ul className="mt-6 space-y-3 pl-5 text-base leading-relaxed text-gray-700 list-disc font-poppins">
            <li>Bring more than 2,000 products online for the initial launch.</li>
            <li>Organize a varied catalogue into recognizable product categories.</li>
            <li>Help visitors narrow options and compare technical specifications.</li>
            <li>Connect product discovery to cart and enquiry paths with minimal friction.</li>
            <li>Build on a platform OMA could continue managing after launch.</li>
          </ul>
        </div>

        <div id="approach" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            The Build: A Complete WooCommerce Shopping Experience
          </h2>
          <p className="mb-8 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            We approached the project as a connected ecommerce system: catalogue structure, product data, discovery tools and shopping actions all needed to support the customer journey together. The result was a launch-ready store with room for the catalogue to grow.
          </p>
          <div className="my-8 space-y-14">
            {approachSteps.map((step, index) => (
              <article key={step.title}>
                <div className="mb-4 flex items-center gap-4" aria-hidden="true">
                  <span className="font-sofiasanscondensed text-5xl font-bold leading-none text-[#670ef7] md:text-6xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-[#670ef7]/40 to-transparent" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900 md:text-3xl font-sofiasanscondensed">
                  <span className="sr-only">Step {index + 1}: </span>{step.title}
                </h3>
                <p className="mb-4 leading-relaxed text-gray-700 font-poppins">{step.description}</p>
                <ul className="list-disc space-y-2 pl-5 leading-relaxed text-gray-700 font-poppins">
                  {step.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div id="catalogue" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            Product Discovery Built Around How People Shop for IT
          </h2>
          <p className="mb-6 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            The live store brings together core product groups such as business laptops, desktops, workstations, servers, monitors, accessories and power-backup equipment. Category pages expose useful product details, while filters help shoppers narrow lists by available attributes. Quick view, comparison, wishlist and cart features provide additional ways to evaluate and save products while browsing.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full border-collapse text-left text-sm md:text-base font-poppins">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="p-4 font-semibold">Store capability</th>
                  <th className="p-4 font-semibold">What it supports</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Structured catalogue</td>
                  <td className="p-4 text-gray-700">A launch catalogue of 2,000+ products organized into useful categories.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">Attribute filters</td>
                  <td className="p-4 text-gray-700">Narrow product lists using available brand and specification data.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Compare and quick view</td>
                  <td className="p-4 text-gray-700">Review product information without repeatedly navigating away from category listings.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900">Wishlist and cart</td>
                  <td className="p-4 text-gray-700">Save products for later and continue toward purchase.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Product details</td>
                  <td className="p-4 text-gray-700">Present model identifiers, key specifications, pricing and availability where supplied.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="outcomes" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">
            What We Delivered
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            <p>
              The project delivered a functioning WordPress and WooCommerce storefront with a substantial catalogue ready for launch and the shopping features needed to support product discovery and purchasing.
            </p>
            <p>
              Rather than claiming unverified sales or conversion growth, the measurable delivery milestone is the scale of the initial catalogue: more than 2,000 products published as part of the launch, alongside structured categories and integrated shopping tools.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-purple-200 bg-purple-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-purple-900">Initial launch</p>
              <p className="mt-2 text-3xl font-bold text-[#670ef7] font-sofiasanscondensed">2,000+</p>
              <p className="mt-1 text-sm text-gray-700">Products uploaded</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-600">Platform</p>
              <p className="mt-2 text-2xl font-bold text-gray-900 font-sofiasanscondensed">WordPress</p>
              <p className="mt-1 text-sm text-gray-700">WooCommerce ecommerce</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-600">Shopping tools</p>
              <p className="mt-2 text-2xl font-bold text-gray-900 font-sofiasanscondensed">Integrated</p>
              <p className="mt-1 text-sm text-gray-700">Filters, compare, wishlist and cart</p>
            </div>
          </div>
        </div>

        <div id="takeaway" className="scroll-mt-32">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-[#670ef7] font-sofiasanscondensed">The Takeaway</h2>
          <blockquote className="max-w-[95%] rounded-r-lg border-l-4 border-[#670ef7] bg-purple-50/40 py-2 pl-4 text-xl italic text-gray-900 md:text-2xl">
            An ecommerce website is more than a product catalogue. It is the system that helps customers find the right product and helps a business manage its range as it grows.
          </blockquote>
          <p className="mt-5 text-base leading-relaxed text-gray-800 md:text-lg font-poppins">
            For OMA Computer Systems, Bixeltek brought a large product range onto a working ecommerce platform and connected category browsing, product evaluation and cart actions in one customer experience. For businesses planning a similar launch, our <Link href="/services/ecommerce-development" className="font-medium text-[#670ef7] hover:underline">ecommerce website development</Link> service covers the structure and functionality needed to support their catalogue and commercial workflow.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-4 text-sm font-medium text-gray-700">
          <span className="font-semibold text-gray-900">Services Delivered:</span>
          <Link href="/services/ecommerce-development" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">Ecommerce Development</Link>
          <Link href="/services/web-design/wordpress" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">WordPress &amp; WooCommerce</Link>
          <Link href="/services/conversion-rate-optimization" className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#3b0764] transition-colors hover:bg-purple-200">Product Discovery &amp; CRO</Link>
        </div>

        <section id="cta" className="relative z-10 mt-16 overflow-hidden rounded-2xl bg-[#670ef7] px-8 py-10 shadow-lg">
          <div className="flex flex-wrap items-center gap-6">
            <div className="w-full lg:w-[60%]">
              <h3 className="mb-3 text-2xl font-bold leading-tight tracking-wide text-white sm:text-3xl md:text-4xl font-sofiasanscondensed">
                Need an Ecommerce Store Built for a Large Product Catalogue?
              </h3>
              <p className="font-poppins text-sm font-medium text-white/90 sm:text-base">
                We build ecommerce experiences that organize complex product ranges, support confident buying decisions and give your business room to expand.
              </p>
            </div>
            <div className="w-full lg:w-1/3 text-center">
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-[#670ef7] shadow-md transition hover:bg-gray-100">
                Discuss Your Ecommerce Project
              </Link>
            </div>
          </div>
          <span className="absolute -right-6 -top-8 -z-10 opacity-10" aria-hidden="true">
            <svg width="300" height="240" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M160 0L0 240H300V0H160Z" fill="white" />
            </svg>
          </span>
        </section>
      </div>

      <aside className="sticky top-32 hidden h-max w-1/3 justify-start pl-4 md:flex">
        <div className="space-y-3 border-l-2 border-gray-200 py-2 pl-4">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">Case Study Navigation</p>
          <nav className="space-y-2.5" aria-label="Case study sections">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`block text-sm font-medium transition-colors ${activeId === section.id ? 'translate-x-1 font-bold text-[#670ef7]' : 'text-gray-600 hover:text-black'}`}
              >
                {section.label}
              </a>
            ))}
            <a href="#cta" className="block text-sm font-medium text-gray-600 transition-colors hover:text-black">Discuss a Project</a>
          </nav>
        </div>
      </aside>
    </section>
  );
}
