import React, { ReactNode } from 'react';
import {Header} from '@/sections/Header';
import {Footer} from '@/sections/Footer';

interface LayoutProps {
  children: ReactNode;
}
export const metadata = {
  title: "Industries We Serve | ROI-Driven Digital Marketing for Clinics, Startups & Businesses",
  description: "Bixeltek is a Google Partner digital marketing agency helping dental clinics, startups, e-commerce, local businesses, and real estate brands grow with SEO, Ads, Web Design, and more.",
  keywords: "Google Ads, Marketing, SEO, PPC, Bixeltek",
  openGraph: {
    title: "Industries We Serve | ROI-Driven Digital Marketing for Clinics, Startups & Businesses",
    description: "Bixeltek is a Google Partner digital marketing agency helping dental clinics, startups, e-commerce, local businesses, and real estate brands grow with SEO, Ads, Web Design, and more.", 
    type: "website",
  },
        alternates: {
    canonical: "https://bixeltek.com/industries", // 👈 canonical URL here
  },
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="min-h-screen">{children}</main>
    </>
  );
};

export default Layout;
