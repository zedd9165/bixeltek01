import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import type { LocationRegion, FeaturedCardData, FooterBarData } from "./types";

// Flags can be swapped for actual flag icon components/images if you have a set installed.
export const locationRegions: LocationRegion[] = [
  {
    id: "india",
    title: "India",
    icon: <span>🇮🇳</span>,
    cities: [
      { name: "Hyderabad", link: "/hyderabad" },
      { name: "Bangalore", link: "/bangalore" },
      { name: "Chennai", link: "/chennai" },
      { name: "Delhi", link: "/delhi" },
      { name: "Mumbai", link: "/mumbai" },
      { name: "Pune", link: "/pune" },
    ],
    viewAllLabel: "View All India Locations",
    viewAllLink: "/india",
  },
  {
    id: "saudi",
    title: "Saudi Arabia",
    icon: <span>🇸🇦</span>,
    cities: [
      { name: "Riyadh", link: "/saudi-arabia/riyadh" },
      { name: "Jeddah", link: "/saudi-arabia/jeddah" },
      { name: "Dammam", link: "/saudi-arabia/dammam" },
      { name: "Eastern Province", link: "/saudi-arabia/eastern-province" },
    ],
    viewAllLabel: "View All Saudi Locations",
    viewAllLink: "/saudi-arabia",
  },
  {
    id: "canada",
    title: "Canada",
    icon: <span>🇨🇦</span>,
    cities: [
      { name: "Toronto", link: "/toronto" },
      { name: "Mississauga", link: "/mississauga" },
      { name: "Vancouver", link: "/vancouver" },
    ],
    viewAllLabel: "View All Canada Locations",
    viewAllLink: "/canada",
  },
  {
    id: "other",
    title: "Other Markets",
    icon: <HiOutlineGlobeAlt size={18} />,
    cities: [
      { name: "UAE", link: "/uae" },
      { name: "United States", link: "/united-states" },
      { name: "United Kingdom & Ireland", link: "/uk" },
    ],
    viewAllLabel: "View All Locations",
    viewAllLink: "/locations",
  },
];

export const locationsFeatured: FeaturedCardData = {
  title: "Local Expertise, Global Reach",
  desc: "We have teams across multiple regions to serve you better.",
  ctaLabel: "Our Global Presence",
  ctaLink: "/locations",
  icon: <FaMapMarkerAlt size={20} />,
};

export const locationsFooter: FooterBarData = {
  icon: <FaMapMarkerAlt size={20} />,
  title: "Looking for a local team?",
  desc: "Get in touch with our regional experts and start your project today.",
  ctaLabel: "Get a Proposal",
  ctaLink: "/get-a-proposal",

};