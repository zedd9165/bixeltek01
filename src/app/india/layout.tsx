import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in India | SEO, Google Ads & Web Design – Bixeltek',
  description:
    'Bixeltek is a Google Partner Certified digital marketing agency in India. We help businesses in Hyderabad, Mumbai, Delhi, Bangalore & Chennai grow with SEO, Google Ads, web design, and social media marketing. Get a free audit today.',
  keywords: [
    'digital marketing agency India',
    'Google Ads agency India',
    'SEO agency India',
    'web design India',
    'performance marketing India',
    'digital marketing Hyderabad',
    'digital marketing Mumbai',
    'digital marketing Delhi',
  ],
  alternates: {
    canonical: 'https://bixeltek.com/india',
    languages: {
      'en-IN': 'https://bixeltek.com/india',
    },
  },
  openGraph: {
    title: 'Digital Marketing Agency in India | SEO, Google Ads & Web Design – Bixeltek',
    description:
      'Google Partner Certified digital marketing agency in India. SEO, Google Ads, web design, and social media for businesses in Hyderabad, Mumbai, Delhi, Bangalore, Chennai, and across India.',
    url: 'https://bixeltek.com/india',
    siteName: 'Bixeltek',
    images: [
      {
        url: 'https://bixeltek.com/og-india.jpg',
        width: 1200,
        height: 630,
        alt: 'Bixeltek – Digital Marketing Agency in India',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in India | SEO, Google Ads & Web Design – Bixeltek',
    description:
      'Google Partner Certified digital marketing agency in India. SEO, Google Ads, web design, and social media for businesses across India.',
    images: ['https://bixeltek.com/og-india.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// LocalBusiness + FAQPage schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'Bixeltek',
      url: 'https://bixeltek.com',
      logo: 'https://bixeltek.com/logo.png',
      image: 'https://bixeltek.com/og-india.jpg',
      description:
        'Google Partner Certified digital marketing agency in India. SEO, Google Ads, web design, and social media for businesses in Hyderabad, Mumbai, Delhi, Bangalore, Chennai, and across India.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Suncity',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        postalCode: '500097',
        addressCountry: 'IN',
      },
      telephone: '+919100032301',
      email: 'hello@bixeltek.com',
      openingHours: 'Mo-Sa 09:00-19:00',
      areaServed: [
        'Hyderabad',
        'Mumbai',
        'Delhi',
        'Bangalore',
        'Chennai',
        'Nellore',
        'Pune',
        'India',
      ],
      priceRange: '₹₹',
      sameAs: [
        'https://www.facebook.com/Bixeltek',
        'https://www.linkedin.com/company/bixeltek',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does digital marketing cost in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our India retainer packages start from ₹25,000/month for focused Google Ads or SEO campaigns, with full-service packages (Ads + SEO + Web) from ₹60,000/month. We offer flexible pricing tailored to your business size and goals.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to see results from SEO in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For competitive keywords in major metros like Hyderabad, Mumbai, or Delhi, you can expect measurable movement in rankings within 60–90 days, with significant lead generation impact by month 4–6. Google Ads delivers results from day one.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with small businesses and startups in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Many of our clients are growing SMEs and early-stage startups. We design campaign structures and budgets that work at your current scale and grow as you do — there\'s no minimum ad spend requirement to get started.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you manage Google Ads in Hindi or regional languages?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We can run multilingual campaigns in Hindi, Telugu, Tamil, Kannada, and Marathi to reach regional audiences effectively. This is especially powerful for B2C businesses targeting Tier 2 and Tier 3 cities.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you work with businesses outside Hyderabad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. We work remotely with businesses across Hyderabad, Mumbai, Delhi, Bangalore, Chennai, Nellore, Pune, and beyond. All strategy calls, reporting, and campaign management happen via video call and our client dashboard.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes Bixeltek different from other digital marketing agencies in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Three things: our Google Partner certification means campaigns are built to Google\'s official best-practice standards; our reporting is fully transparent with real-time dashboards; and we are a genuinely integrated team — SEO, Ads, Web, and Social all work together under one roof.',
          },
        },
      ],
    },
  ],
};

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen overflow-hidden -mt-[128px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;