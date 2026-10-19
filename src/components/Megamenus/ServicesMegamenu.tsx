import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { link } from "fs";

type ServiceProps = {
  service: boolean;
};

export const ServiceMegamenu: React.FC<ServiceProps> = ({ service }) => {
  const [isVisible, setIsVisible] = useState(false);

  const mouseEnter = () => {
    setIsVisible(true);
  };

  const mouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: service || isVisible ? 1 : 0,
        y: service || isVisible ? 0 : 20,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`relative ${
        service || isVisible ? "visible" : "hidden"
      } z-[60] top-[-20px] w-full flex justify-center`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className="absolute bg-white text-black w-[90%] rounded-xl shadow-lg py-10 px-6">
        <div className="grid grid-cols-4 gap-6 relative">
          {/** Column 1 */}
          <div className="flex flex-col pr-4 border-r border-gray-300">
            <div>
              <h3 className="text-lg font-medium mb-4">Google Ads</h3>
              <ul>
                {[
                  { label: "Google Ads Management", link: "/googleadsman" },
                  { label: "YT Ads Management", link: "/seo" },
                  { label: "CRO Audits", link: "#" },
                  { label: "EcommercePPC", link: "#" },
                  {
                    label: "Advertiser Verification and Policy",
                    link: "#",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05, color: "#A855F7" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-sm py-2 cursor-pointer leading-5"
                  >
                    <Link href={item.link}>{item.label}</Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold">Case studies</h3>
              <ul className="gap-3 py-2">
                <li className="text-sm font-light py-2 cursor-pointer leading-4">
                  <Link href="#">Casestudy</Link>
                </li>
                <li className="text-sm font-light py-2 cursor-pointer leading-4">
                  <Link href="#">Casestudy</Link>
                </li>
                <li className="text-sm font-light py-2 cursor-pointer leading-4">
                  <Link href="#">Casestudy</Link>
                </li>
              </ul>
            </div>
          </div>

          {/** Column 2 */}
          <div className="flex flex-col px-4 border-r border-gray-300">
            <div>
              <h3 className="text-lg font-medium mb-4">Social Media</h3>
              <ul>
                {[
                  {label: "Social Media Management", link: "#"},
                  {label:"Social Media Marketing",link:"#"},
                  {label:"Prototyping", link:"#"},
                  {label:"Wireframing", link:"#"},
                  {label: "Graphic Design", link: "/services/graphic-design"},
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05, color: "#A855F7" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-sm py-2 cursor-pointer leading-5"
                  >
                    <Link href={item.link}>{item.label}</Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold">Industries</h3>
              <ul className="gap-3 py-2">
                <li className="text-sm font-light py-2 cursor-pointer leading-4">
                  <Link href="#">Industry</Link>
                </li>
                <li className="text-sm font-light py-2 cursor-pointer leading-4">
                  <Link href="#">Industry</Link>
                </li>
                <li className="text-sm font-light py-2 cursor-pointer leading-4">
                  <Link href="#">Industry</Link>
                </li>
              </ul>
            </div>
          </div>

          {/** Column 3 */}
          <div className="flex flex-col px-4 border-r border-gray-300">
            <div>
              <h3 className="text-lg font-medium mb-4">SEO Optimization</h3>
              <ul>
                {[
                  "SEO",
                  "Content Marketing",
                  "Email Campaigns",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05, color: "#A855F7" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-sm py-2 cursor-pointer leading-5"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold">Industries</h3>
              <ul className="gap-3 py-2">
                <li className="text-sm font-light py-2 cursor-pointer leading-4">
                  <Link href="#">Industry</Link>
                </li>
                <li className="text-sm font-light py-2 cursor-pointer leading-4">
                  <Link href="#">Industry</Link>
                </li>
                <li className="text-sm font-light py-2 cursor-pointer leading-4">
                  <Link href="#">Industry</Link>
                </li>
              </ul>
            </div>
          </div>

          {/** Column 4 */}
          <div className="flex flex-col pl-4">
            <div>
              <h3 className="text-lg font-medium mb-4">Web Development</h3>
              <ul>
                {[
                  "Web Designing",
                  "App Development",
                  "WordPress",
                  "Data Migration",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05, color: "#A855F7" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-sm py-2 cursor-pointer leading-5"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold">Industries</h3>
              <ul className="gap-3 py-2">
                <li className="text-sm font-light py-2 cursor-pointer leading-4">
                  <Link href="#">Industry</Link>
                </li>
                <li className="text-sm font-light py-2 cursor-pointer leading-4">
                  <Link href="#">Industry</Link>
                </li>
                <li className="text-sm font-light py-2 cursor-pointer leading-4">
                  <Link href="#">Industry</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
