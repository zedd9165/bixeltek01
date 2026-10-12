'use client'
import React from "react";

interface ProcessStep {
  number: string;
  title: string;
  text: string;
  gradient: string;
  color: string;
  hoverBg?: string;
}

interface LocationProcessSectionProps {
  tag?:React.ReactNode;
  heading: React.ReactNode;
  highlightText?: string;
  description: string;
  steps: ProcessStep[];
  cta?: {
    text: string;
    href: string;
    bg?:string
  };
  footerText?: string;
  bg?: string; // optional background
}

const LocationProcessSection = ({
  tag,
  heading,
  highlightText,
  description,
  steps,
  cta,
  footerText,
  bg = "bg-black", // ✅ default black (no need to change old files)
}: LocationProcessSectionProps) => {
  const isWhite = bg.includes("white");

  return (
    <div className={`min-h-screen relative ${bg} py-12 px-4 sm:px-6 lg:px-8`}>
      
      {/* Heading */}
      {tag}
      <h2
        className={`text-3xl md:text-6xl md:text-center max-w-6xl mx-auto font-bold font-inter mb-6 ${
          isWhite ? "text-black" : "text-white"
        }`}
      >
        {heading}
      </h2>

      <p
        className={`max-w-2xl mx-auto mb-12 font-poppins leading-relaxed md:text-center ${
          isWhite ? "text-gray-900" : "text-gray-300"
        }`}
      >
        {description}
      </p>

      {/* ================= MOBILE ================= */}
      <div className="space-y-10 md:hidden">
  {steps.map((item, idx) => (
    <div
      key={idx}
      className={`p-[1.5px] rounded-3xl bg-gradient-to-r ${item.gradient}`}
    >
      <div
        className={`flex group ${item.hoverBg ?? ""} 
        p-6 rounded-3xl flex-col items-start 
        ${isWhite ? "bg-white" : "bg-black"}`}
      >
        <p className={`${item.color} text-5xl font-bold mb-2`}>
          {item.number}
        </p>

        <h3
          className={`text-xl font-bold mb-2 ${
            isWhite ? "text-black" : "text-white"
          }`}
        >
          {item.title}
        </h3>

        <p
          className={`${
            isWhite ? "text-gray-900" : "text-gray-300"
          }`}
        >
          {item.text}
        </p>
      </div>
    </div>
  ))}
</div>


      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block max-w-7xl mx-auto mt-40 space-y-[4px]">
        {steps.map((item, idx) => {
          const isEven = idx % 2 === 0;

          let positionClasses = "";
          if (idx % 4 === 0) positionClasses = "-top-20 right-10";
          else if (idx % 4 === 1)
            positionClasses = "-top-20 left-1/3 -translate-x-1/4";
          else if (idx % 4 === 2) positionClasses = "-top-20 left-10";
          else positionClasses = "-top-20 left-1/3 -translate-x-1/4";

          return (
            <div key={idx} className="relative z-0">
              
              {/* Gradient Border */}
              <div
                className={`absolute -inset-1 rounded-[20px] ${
                  isEven ? "bg-gradient-to-r" : "bg-gradient-to-l"
                } ${item.gradient} z-0`}
              />

              <div
                className={`relative flex flex-col justify-between items-center z-10 ${
                  isWhite ? "bg-white  h-[290px]" : "bg-black  h-[280px]"
                } rounded-[20px] p-8`}
              >
                {/* Floating Card */}
                <div
                  className={`absolute flex items-center gap-5 ${
                    isWhite
                      ? "border border-gray-200 bg-white shadow-2xl"
                      : "border border-white/50 bg-black"
                  } w-[85%] lg:max-w-3xl rounded-2xl p-10 z-10 ${positionClasses}`}
                >
                  <p className={`${item.color} text-7xl font-bold`}>
                    {item.number}
                  </p>

                  <div>
                    <h3
                      className={`text-2xl font-bold mb-4 ${
                        isWhite ? "text-black" : "text-white"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`${
                        isWhite ? "text-gray-900" : "text-gray-300"
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                {cta && idx === steps.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href={cta.href}>
                      <button
                        className={`px-7 py-3 rounded-2xl font-semibold text-sm shadow-lg transition ${
                          cta.bg
                            ? `${cta.bg}`
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                      >
                        {cta.text}
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      {footerText && (
        <p
          className={`mt-10 md:max-w-[90%] lg:max-w-[30%] mx-auto font-poppins leading-relaxed md:text-center ${
            isWhite ? "text-gray-900" : "text-gray-300"
          }`}
        >
          {footerText}
        </p>
      )}
    </div>
  );
};

export default LocationProcessSection;