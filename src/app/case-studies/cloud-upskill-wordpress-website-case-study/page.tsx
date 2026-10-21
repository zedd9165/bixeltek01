export const metadata = {
  title: "WordPress Website Development for IT Training | Cloud Upskill Case Study",
  description:
    "How Bixeltek built Cloud Upskill's WordPress website to organize technical courses, explain programme benefits and connect course discovery with brochure downloads, demo bookings and enquiries.",
  keywords: [
    "WordPress website development for training institute",
    "IT training institute website development",
    "education website design Hyderabad",
    "course website development",
    "WordPress website design Hyderabad",
    "Cloud Upskill website case study",
    "Bixeltek website development",
  ],
  openGraph: {
    title: "Building a WordPress Website for Cloud Upskill | Bixeltek Case Study",
    description:
      "A course-focused WordPress website for Cloud Upskill, connecting technical course categories, programme information, learner support and enquiry actions.",
    type: "website",
    url: "https://bixeltek.com/case-studies/cloud-upskill-wordpress-website-case-study",
    images: [
      {
        url: "https://bixeltek.com/images/case-studies/cloud-upskill-wordpress-website.jpg",
        width: 1200,
        height: 630,
        alt: "Cloud Upskill WordPress website development case study by Bixeltek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Website for an IT Training Institute | Cloud Upskill",
    description:
      "See how Bixeltek structured Cloud Upskill's WordPress website around course discovery, learner support and enquiries.",
    images: ["https://bixeltek.com/images/case-studies/cloud-upskill-wordpress-website.jpg"],
  },
  alternates: {
    canonical: "https://bixeltek.com/case-studies/cloud-upskill-wordpress-website-case-study",
  },
};

import cloudUpskillHeroImg from '@/assets/cloudupskill-casestudy.png';
import CloudUpskillCaseStudy from '@/components/CasestudyMain/CloudUpskillCaseStudy';

export default function CloudUpskillWebsiteCaseStudyPage() {
  return (
    <>
      <section
        className="relative mx-auto flex min-h-[70vh] w-full items-center bg-[#111827] bg-cover bg-center md:min-h-[85vh]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5, 7, 15, 0.90) 0%, rgba(5, 7, 15, 0.72) 52%, rgba(5, 7, 15, 0.42) 100%), url(${cloudUpskillHeroImg.src})`,
        }}
      >
        <div className="relative z-10 flex h-full w-full flex-col items-start justify-center px-5 py-20 md:max-w-[78%] md:pl-20 md:pr-0">
          <p className="mb-5 text-left text-sm font-semibold uppercase tracking-widest text-white font-poppins">
            Case Study · WordPress Website Development
          </p>
          <h1 className="font-sofiasanscondensed text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl max-w-5xl">
            Building a WordPress Website Around Course Discovery and Enquiries
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed tracking-wide text-white/90 md:text-xl font-poppins">
            How Bixeltek organized Cloud Upskill’s technical training portfolio into a clearer digital experience with course information, learner-support content and direct enquiry paths.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <CloudUpskillCaseStudy />
      </section>
    </>
  );
}
