import { Metadata } from "next";
import { Home2View } from "@/components/Home2/Home2View";

export const metadata: Metadata = {
  title: "Digital Transformation & Growth Agency | Bixeltek",

  description:
    "Bixeltek helps businesses modernize how they attract customers, sell online and operate digitally — bringing strategy, marketing and technology together to drive sustainable business growth.",

  keywords: [
    "digital transformation",
    "digital growth",
    "digital transformation agency",
    "digital growth agency",
    "digital strategy",
    "SEO services",
    "Google Ads",
    "website development",
    "ecommerce development",
    "mobile app development",
    "AI automation",
    "Bixeltek",
  ],

  alternates: {
    canonical: "https://bixeltek.com/home-2",
  },

  openGraph: {
    title: "Digital Transformation & Growth Agency | Bixeltek",
    description:
      "We help businesses modernize how they attract customers, sell online and operate digitally — bringing strategy, marketing and technology together to drive business growth.",
    siteName: "Bixeltek",
    type: "website",
    url: "https://bixeltek.com/home-2",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Transformation & Growth Agency | Bixeltek",
    description:
      "We help businesses modernize how they attract customers, sell online and operate digitally — bringing strategy, marketing and technology together to drive business growth.",
  },
};

export default function Home2Page() {
  return <Home2View />;
}