import React from "react";
import { Metadata } from "next";

// Data Source of Truth for Mobile App Development
import {
  appDevelopmentMetadata,
  appDevelopmentHeroPreviewData,
  appDevelopmentOverview,
  appDevelopmentScope,
  appDevelopmentUseCases,
  appDevelopmentSystems,
  mobileExperienceSection,
  appDevelopmentProcess,
  appDevelopmentWhyChoose,
  appDevelopmentPostLaunch,
  appDevelopmentRelatedServices,
  appDevelopmentFaqs,
  appDevelopmentFinalCta,
} from "@/data/service/app-development";

import MobileAppClientView from "@/components/services/app-development/MobileAppClientView";

// Assets
import mobileExperienceImg from "@/assets/mobile-app-developer-skills.jpeg";
import appHeroImg from "@/assets/distance-learning-app-template-ui.png";
import appOverviewImg from "@/assets/banking-app-interface.png";
import type { TechStackItem } from "@/components/services/common/ServiceFinalCTA";

import {
  SiReact,
  SiExpo,
  SiFlutter,
  SiFirebase,
} from "react-icons/si";

// Final CTA tool mapping from appDevelopmentTechStack
const appDevelopmentTechStack: TechStackItem[] = [
  {
    name: "React Native",
    category: "Cross-Platform",
    description:
      "Shared application development for iOS and Android with a strong JavaScript and TypeScript ecosystem.",
    icon: <SiReact/>,
  },
  {
    name: "Expo",
    category: "React Native Platform",
    description:
      "A practical development and release foundation for React Native applications and modern mobile workflows.",
    icon: <SiExpo/>,
  },
  {
    name: "Flutter",
    category: "Cross-Platform",
    description:
      "A cross-platform framework suited to custom interfaces, consistent experiences and multi-platform development.",
    icon: <SiFlutter/>,
  },
  {
    name: "Firebase & APIs",
    category: "Backend & Services",
    description:
      "Authentication, notifications, data services and API connections that support the application beyond its mobile interface.",
    icon: <SiFirebase/>,
  },
];

export const metadata: Metadata = {
  title: appDevelopmentMetadata.title,
  description: appDevelopmentMetadata.description,
  keywords: appDevelopmentMetadata.keywords,
  alternates: {
    canonical: appDevelopmentMetadata.canonical,
  },
  openGraph: {
    title: appDevelopmentMetadata.title,
    description: appDevelopmentMetadata.description,
    url: appDevelopmentMetadata.canonical,
  },
};

export const dynamic = "force-dynamic";

export default function MobileAppDevelopmentPage() {
  return (
    <MobileAppClientView
      hero={appDevelopmentHeroPreviewData}
      overview={appDevelopmentOverview}
      scope={appDevelopmentScope}
      relatedServices={appDevelopmentRelatedServices}
      systems={appDevelopmentSystems}
      useCases={appDevelopmentUseCases}
      experienceSection={mobileExperienceSection}
      process={appDevelopmentProcess}
      whyChoose={appDevelopmentWhyChoose}
      postLaunch={appDevelopmentPostLaunch}
      faqs={appDevelopmentFaqs}
      finalCta={appDevelopmentFinalCta}
      techStack={appDevelopmentTechStack}
      heroImg={appHeroImg}
      overviewImg={appOverviewImg}
      experienceImg={mobileExperienceImg}
    />
  );
}
