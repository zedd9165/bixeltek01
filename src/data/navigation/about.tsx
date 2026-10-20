import { HiOutlineInformationCircle, HiOutlineLightBulb } from "react-icons/hi";
import type { NavColumn, FeaturedCardData } from "./types";

// Swap this import for whichever asset you want in the third card of the About menu
// (team photo, office shot, etc). Same pattern as the other @/assets imports in Header.tsx.
import aboutMenuImage from "@/assets/about-us.png";

export const aboutColumns: NavColumn[] = [
  {
    id: "about",
    title: "About Bixeltek",
    icon: <HiOutlineInformationCircle size={20} />,
    items: [
      { name: "About Bixeltek", link: "/about-us" },
      { name: "Our Team", link: "/about-us/team" },
      { name: "Certifications & Partnerships", link: "/about-us/certifications" },
      { name: "Careers", link: "/careers" },
    ],
  },
];

export const aboutFeatured: FeaturedCardData = {
  title: "Why Bixeltek?",
  desc: "Performance-focused digital solutions built around measurable business outcomes.",
  ctaLabel: "Learn About Us",
  ctaLink: "/about-us",
  icon: <HiOutlineLightBulb size={20} />,
};

export const aboutImageCard = {
  image: aboutMenuImage,
  alt: "The Bixeltek team at work",
  ctaLink: "/about-us/team",
};