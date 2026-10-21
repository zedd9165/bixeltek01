
import type { Metadata } from "next";
import MFPrintingInternationalCaseStudy from "@/components/CasestudyMain/MFPrintingInternationalCaseStudy";

const pageUrl =
  "https://bixeltek.com/case-studies/mf-printing-international-website-google-ads-case-study";

export const metadata: Metadata = {
  title:
    "MF Printing International Case Study | Website Development & Google Ads",
  description:
    "See how we built a custom website for MF Printing International and launched Google Ads, helping the business start getting customers within the first 2–3 days.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    siteName: "Bixeltek",
    title:
      "From No Online Presence to Getting Customers Through Google Ads | MF Printing International",
    description:
      "Discover how we helped MF Printing International establish its online presence with a custom website and Google Ads campaigns that began bringing in customers within days.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MF Printing International Case Study | Bixeltek",
    description:
      "A custom website and Google Ads helped MF Printing International establish an online presence and start getting customers within the first 2–3 days.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MFPrintingInternationalCaseStudyPage() {
  return <MFPrintingInternationalCaseStudy />;
}
