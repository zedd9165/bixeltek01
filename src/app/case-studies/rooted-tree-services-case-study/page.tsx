export const metadata = {
  title: "Tree Service Website & Google Ads Case Study | Rooted Tree Services",
  description:
    "How Bixeltek built Rooted Tree Services’ website and focused Google Ads on tree removal, emergency tree work and local quote requests across Toronto and the Greater Toronto Area.",
  keywords: [
    "Google Ads for tree service companies",
    "tree service website design",
    "arborist marketing Canada",
    "Google Ads for arborists",
    "tree removal lead generation",
    "Rooted Tree Services case study",
    "Bixeltek case study",
  ],
  openGraph: {
    title: "Connecting Local Tree-Service Searches to Quote Requests | Bixeltek Case Study",
    description:
      "A website and Google Ads project for Rooted Tree Services, connecting service-specific information, local relevance and clear quote paths across the Greater Toronto Area.",
    type: "website",
    url: "https://bixeltek.com/case-studies/rooted-tree-services-case-study",
    images: [
      {
        url: "https://bixeltek.com/BIXELTEKLOGO.png",
        width: 1200,
        height: 630,
        alt: "Rooted Tree Services website and Google Ads case study by Bixeltek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tree Service Website & Google Ads | Rooted Tree Services Case Study",
    description:
      "See how Bixeltek connected a local tree-care website with Google Ads focused on relevant jobs and quote requests across the GTA.",
    images: ["https://bixeltek.com/BIXELTEKLOGO.png"],
  },
  alternates: {
    canonical: "https://bixeltek.com/case-studies/rooted-tree-services-case-study",
  },
};

import rootedHeroImg from '@/assets/rooted-tree-casestudy.png';
import RootedTreeServicesCaseStudy from '@/components/CasestudyMain/RootedTreeServicesCaseStudy';

export default function RootedTreeServicesCaseStudyPage() {
  return (
    <>
      <section
        className="relative mx-auto flex min-h-[70vh] w-full items-center bg-[#111827] bg-cover bg-center md:min-h-[85vh]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5, 7, 15, 0.90) 0%, rgba(5, 7, 15, 0.72) 52%, rgba(5, 7, 15, 0.42) 100%), url(${rootedHeroImg.src})`,
        }}
      >
        <div className="relative z-10 flex h-full w-full flex-col items-start justify-center px-5 py-20 md:max-w-[78%] md:pl-20 md:pr-0">
          <p className="mb-5 text-left text-sm font-semibold uppercase tracking-widest text-white font-poppins">
            Case Study · Web Design &amp; Google Ads
          </p>
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl font-sofiasanscondensed">
            Connecting Tree-Service Searches to Clearer Quote Requests
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed tracking-wide text-white/90 md:text-xl font-poppins">
            How Bixeltek built the Rooted Tree Services website and focused Google Ads on relevant local demand across Toronto and the Greater Toronto Area.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <RootedTreeServicesCaseStudy />
      </section>
    </>
  );
}
