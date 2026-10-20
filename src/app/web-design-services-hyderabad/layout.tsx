// layout.tsx

import React, { ReactNode } from 'react';
import Script from 'next/script';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Best Web Design and Development Agency Hyderabad | Custom Website Designers",
  description:
    "Bixeltek is Hyderabad’s leading web design and development agency creating responsive, SEO-friendly websites. Get a modern, high-performance website built to convert.",
  keywords:
    "Web design Hyderabad, Web development Hyderabad, E-commerce website development, SEO services Hyderabad, Custom website design, Best website designers Hyderabad, CMS development, Next.js development, React.js web development, Hyderabad digital agency",
  openGraph: {
    title: "Best Web Design Agency Hyderabad | Custom Website Designers",
    description:
      "Bixeltek is Hyderabad’s leading web design and development agency creating responsive, SEO-friendly websites. Get a modern, high-performance website built to convert.",
    type: "website",
  },
                  alternates: {
    canonical: "https://bixeltek.com/web-design-services-hyderabad", // 👈 canonical URL here
  },
};




const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* Calendly CSS */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      {/* Calendly JS Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <Header />
      <main className="min-h-screen bg-white">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
