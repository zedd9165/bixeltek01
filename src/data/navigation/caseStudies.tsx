import type { ReactNode } from "react";
import { SiGoogleads, SiInstagram } from "react-icons/si";
import { TbDeviceImacSearch } from "react-icons/tb";
import { IoLogoReact } from "react-icons/io5";
import { AiOutlineShoppingCart, AiOutlineTool } from "react-icons/ai";
import type { NavLink, FeaturedCardData } from "./types";

export const featuredCaseStudy: FeaturedCardData = {
  badge: "FEATURED CASE STUDY",
  title: "Dental Marketing Success",
  desc: "+250% increase in qualified leads for a leading dental clinic.",
  ctaLabel: "Read Case Study",
  ctaLink: "/case-studies/digital-marketing-for-dentists-case-study",
};

export const caseStudiesByService: (NavLink & { icon: ReactNode })[] = [
  { name: "Google Ads", link: "/case-studies?service=google-ads", icon: <SiGoogleads size={16} /> },
  { name: "SEO", link: "/case-studies?service=seo", icon: <TbDeviceImacSearch size={16} /> },
  { name: "Web Development", link: "/case-studies?service=web-development", icon: <IoLogoReact size={16} /> },
  { name: "Ecommerce", link: "/case-studies?service=ecommerce", icon: <AiOutlineShoppingCart size={16} /> },
  { name: "Mobile Apps", link: "/case-studies?service=mobile-apps", icon: <AiOutlineTool size={16} /> },
  { name: "Automation", link: "/case-studies?service=automation", icon: <SiInstagram size={16} /> },
];

export const caseStudiesExploreMore = {
  title: "Explore more success stories",
  desc: "See how we've helped businesses grow with our digital solutions.",
  ctaLabel: "View All Case Studies",
  ctaLink: "/case-studies",
};