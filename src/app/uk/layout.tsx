import React, { ReactNode } from 'react';
import { Whiteheader } from '@/components/Whiteheader';
import { Footer } from '@/sections/Footer';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
    title: " Digital Marketing Agency Toronto | Google Ads, SEO & Web Design",
    description:
        " Looking for a digital marketing agency in Toronto? Bixeltek (Google Partner Certified) drives growth with SEO, Google Ads, and web design that deliver 10x ROI.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Digital Marketing Agency Toronto | Google Ads, SEO & Web Design",
        description:
            "Looking for a digital marketing agency in Toronto? Bixeltek (Google Partner Certified) drives growth with SEO, Google Ads, and web design that deliver 10x ROI.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/toronto",
    },
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Whiteheader />
      <main className="min-h-screen overflow-hidden">{children}</main>
      <Footer />
    </>
  );
}