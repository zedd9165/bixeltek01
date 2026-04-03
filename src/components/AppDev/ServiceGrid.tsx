import Link from "next/link";
import React from "react";

interface ServicesGridProps {
    heading: string | React.ReactNode;
    spanText?: string;
    description: string;
  services: {
    icon?: React.ReactNode;
    title: string;
    description: string;
    link?: string
  }[];
  theme?: 'blue' | 'green' | 'red';
  hoverStyle?: string;
}


const ServiceAppDevSection = ({
  heading,
  spanText,
  description,
  services,
  theme = 'blue',
  hoverStyle,
}: ServicesGridProps) => {

  const themes = {
    blue: {
      span: 'text-blue-500',
      blob: 'bg-blue-500',
      hoverCard: 'hover:bg-blue-600',
      link: 'text-blue-500',
    },
    green: {
      span: 'text-yellow-500',
      blob: 'bg-yellow-500',
      hoverCard: 'hover:bg-yellow-600/10',
      link: 'text-green-500',
    },
    red: {
      span: 'text-red-500',
      blob: 'bg-red-500',
      hoverCard: 'hover:bg-red-600/10',
      link: 'text-red-500',
    },
  };

  const currentTheme = themes[theme];
  const hoverClass = hoverStyle || currentTheme.hoverCard;

  return (
    <section className="relative py-10 md:py-24" id="services">

      {/* Background Blobs */}
      <div className={`absolute top-32 -left-20 w-[500px] h-[500px] ${currentTheme.blob} rounded-full opacity-30 blur-[190px] pointer-events-none`} />
      <div className={`absolute bottom-52 right-0 w-[500px] h-[500px] ${currentTheme.blob} rounded-full opacity-30 blur-[190px] pointer-events-none`} />

      <div>
        <div className="max-w-[90%] lg:max-w-[80%] mx-auto mb-5 text-center">
                <h2 className="text-white text-3xl md:text-6xl max-w-7xl mx-auto font-inter mb-3 font-semibold">
        {typeof heading === "string" ? (
          <>
            {heading}{" "}
            {spanText && (
              <span className={currentTheme.span}>{spanText}</span>
            )}
          </>
        ) : (
          heading
        )}
      </h2>


          <p className="text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto">
            {description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[90%] lg:max-w-[75%] mx-auto mt-10 gap-0">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                relative w-full h-96 group 
                border border-gray-700 
                bg-black/10 
                ${hoverClass}
                transition-all duration-300 
                flex flex-col justify-center items-center 
                p-10 md:p-14
              `}
            >
            <div className="bg-white/10 p-3 rounded-full mb-4">{service.icon}</div>
              <h3 className="text-white text-2xl font-bold text-center mb-2">
                {service.title}
              </h3>

              <p className="text-gray-300 text-sm text-center mb-3">
                {service.description}
              </p>

              {service?.link && (
                <Link href={service.link}>
                  <p className={`${currentTheme.link} group-hover:text-white text-sm mt-2 hover:font-semibold transition-all`}>
                    Discover More
                  </p>
                </Link>
              )}

              {/* Decorative Plus Icons (unchanged) */}
              {/* {index % 4 === 0 && (
                <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" />
                </span>
              )}
              {(index % 4 === 1 || index === 0 || index === 2) && (
                <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" />
                </span>
              )}
              {(index % 4 === 2 || index === 0 || index === 3) && (
                <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" />
                </span>
              )}
              {(index % 4 === 3 || index === 5) && (
                <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" />
                </span>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAppDevSection;