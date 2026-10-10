import { Search, Globe, Award, Layers } from "lucide-react";
import googleadsimage from '@/assets/fdf8cac4-f679-4349-b378-70151535911a.png';
import Image from "next/image";
import Link from "next/link";
import { costSectionData } from "@/data/googleAdsPageData";

const factorIcons = [
  { icon: Search, color: "bg-blue-600/20 text-blue-400" },
  { icon: Globe, color: "bg-purple-600/20 text-purple-400" },
  { icon: Award, color: "bg-green-600/20 text-green-400" },
  { icon: Layers, color: "bg-pink-600/20 text-pink-400" },
];

export default function GoogleAdsCostSection() {
  return (
    <div className="bg-[#131313] text-white pb-10 md:py-16 font-poppins">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div className="lg:pr-16 px-6 md:px-12 lg:px-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {costSectionData.headingPart1}
            <br />
            <span className="text-blue-500">{costSectionData.headingHighlight}</span>
            {costSectionData.headingPart2}
          </h2>
          <p className="text-gray-100 mb-10 text-lg leading-relaxed">
            {costSectionData.description}
          </p>

          {/* Cost Factors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {costSectionData.factors.map((factor, index) => {
              const IconComponent = factorIcons[index % factorIcons.length].icon;
              const colorClass = factorIcons[index % factorIcons.length].color;

              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-gray-900/60 rounded-xl border border-gray-800 hover:border-blue-500 transition"
                >
                  <div className={`${colorClass} p-3 rounded-md flex items-center justify-center shrink-0`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{factor.title}</h3>
                    <p className="text-gray-100 text-sm leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Extra Note */}
          <p className="text-gray-100 mt-10 leading-relaxed">
            {costSectionData.footerNote}
          </p>

          {/* CTA Banner */}
          <div className="mt-10 p-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl text-center shadow-lg">
            <h3 className="text-xl font-bold mb-3">
              {costSectionData.ctaText}
            </h3>
            <Link href={costSectionData.ctaHref}>
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
                Get My Google Ads Audit
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="rounded-l-2xl overflow-hidden shadow-lg lg:ml-auto lg:mr-0 lg:pr-0 px-6 lg:mx-0 ">
          <Image
            src={googleadsimage}
            alt="Google Ads Costs"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
