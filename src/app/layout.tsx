"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Script from "next/script";
import ScrollToTopButton from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import './globals.css'
import { Preloader } from "@/components/Preloader";
import DemoPopup from "@/components/CTApopup";
import TransitionProvider from "@/components/TransitionProvider";
import PageTransition from "@/components/PageLoader";
import Loader from "@/components/Loader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [loaderDone, setLoaderDone] = useState(false);


  return (
    <html lang="en">
      <head>
        {/* Schema */}
        <meta name="msvalidate.01" content="827242EBFB3A5992CD1F4EB3CE579626" />
        <Script id="bixeltek-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://bixeltek.com#organization",
                "name": "Bixeltek",
                "url": "https://bixeltek.com",
                "logo": "https://bixeltek.com/BIXELTEKLOGO.png",
                "description": "Bixeltek is a Google Partner certified digital marketing agency offering Google Ads, SEO, Web Design, and Meta Ads marketing across India, Canada, USA, UAE, and Saudi Arabia.",
                "sameAs": [
                  "https://www.facebook.com/bixeltek",
                  "https://www.instagram.com/bixeltek",
                  "https://www.linkedin.com/company/bixeltek",
                  "https://g.page/r/CX3wqGzMd0boEB0/review"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-9100032301",
                  "contactType": "customer support",
                  "availableLanguage": ["English", "Hindi", "Telugu"],
                  "areaServed": ["IN", "US", "CA", "AE", "SA"]
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "5"
                }
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://bixeltek.com#localbusiness",
                "name": "Bixeltek",
                "image": "https://bixeltek.com/path-to-logo.png",
                "priceRange": "$$",
                "url": "https://bixeltek.com",
                "telephone": "+91-9100032301",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "3rd Floor, Behind Cult Fit, K K Convention Road, Suncity Rd, opposite Ratnadeep, Bandlaguda Jagir",
                  "addressLocality": "Hyderabad",
                  "addressRegion": "Telangana",
                  "postalCode": "500091",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 17.362625919966433,
                  "longitude": 78.394819141387
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "10:00",
                  "closes": "19:00"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "5"
                },
                "founder": {
                  "@type": "Person",
                  "name": "Syed Zeeshan Ali"
                },
                "makesOffer": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Google Ads Management",
                      "description": "Certified Google Partner agency offering high-converting Google Ads campaigns including Search, Display, Remarketing, and Performance Max strategies tailored to drive leads and ROI."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO Services",
                      "description": "Advanced SEO strategies including on-page, technical, and off-page optimization designed to improve organic visibility, local rankings, and long-term traffic growth."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Design & Development",
                      "description": "Custom-designed websites focused on performance, user experience, SEO-readiness, and mobile responsiveness to convert traffic into leads and sales."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Meta Ads / Social Media Marketing",
                      "description": "ROI-driven Meta Ads campaigns (Facebook & Instagram) with targeted audience segmentation, creative design, and performance tracking to increase brand awareness and conversions."
                    }
                  }
                ]
              }
            ]
          }
          )}
        </Script>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EVJXPZFB2T"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EVJXPZFB2T');
          `}
        </Script>
        <Script id="google-tag-manager-head">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MC65NV9');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-[black]`}>
        {/* Font Awesome */}
        <Script
          src="https://kit.fontawesome.com/d836a1d31c.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){...}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `
          }}
        />
        {/* Google Tag Manager (noscript) - BODY */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MC65NV9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* Preloader */}
        {/* <Preloader>{children}</Preloader> */}
        
        {/* <Loader />
        {children} */}
      <Loader/>
      <Toaster position="bottom-center" reverseOrder={false} />
      {/* <NoCopy/> */}
         {children}
        {/* Floating WhatsApp Button */}
        <DemoPopup />
        <ScrollToTopButton/>

      </body>
    </html>
  );
}
