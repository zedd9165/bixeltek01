import Link from "next/link";
import React from "react";
import Image from "next/image";
import Newsletter from "@/components/Newsletter";
import { Phone, PhoneCall } from 'lucide-react';
import { Mail } from 'lucide-react';


export const Footer = () => {
  return (
    <footer className="w-full pt-0 pb-16">
      <div className="mx-auto max-w-[97%] px-4 sm:px-6 lg:px-8">
        <Newsletter />
        <div className="grid grid-cols-2 min-[690px]:grid-cols-4 lg:grid-cols-5 gap-4 xl:gap-8 pt-14 pb-10 max-w-xs mx-auto min-[690px]:max-w-2xl lg:max-w-full">
          <div className="col-span-full mb-10 lg:col-span-1  lg:mb-0">
            <Image src='/BIXELTEKLOGO.png' alt="logo" width={100}
              height={40} className="w-auto h-16"></Image>

            <p className="py-5 text-gray-100 lg:max-w-xs text-center lg:text-left">Trusted by brands. Certified by Google. Focused on ROI.</p>
            <div className="text-sm text-white mb-4">
              <p className="mb-2 text-xl font-semibold">Address</p>
              <address className="text-base not-italic">      
                Bixeltek,
               3rd Floor,
               Nahid Plaza,  
               beside AR Banquet,
               Salar Jung Colony,<br/>
               Toli Chowki,
               Hyderabad, Telangana 500008       
              </address>
               <p className="mb-2 mt-5 text-base font-semibold">Saudi Arabia <span className="text-white">(Coming Soon)</span></p>
              <address className="text-base not-italic">
                Bixeltek,
               Qahtani Building, Above SAB Bank, Dammam 32242, Saudi Arabia
              </address>
            </div>
            <div className="text-white mb-4 flex flex-col gap-3 mt-8">
               <a href="tel:+14375252301">
                <p className="text-white text-lg hover:text-purple-500 flex gap-3">
                  <PhoneCall className="text-blue-500" />
                  Canada : +1 437 525 2301
                </p>
              </a>

              <a href="tel:+18453823415">
                <p className="text-white text-lg hover:text-purple-500 flex gap-3">
                  <PhoneCall className="text-blue-500" />
                  USA : +1 845 382 3415
                </p>
              </a>
              <a href="tel:+919100032301">
                <p className="text-white text-lg hover:text-purple-500 flex gap-3"><PhoneCall className="text-blue-500" />India : +91 9100032301</p>
              </a>
              {/* <a href="tel:+914035095538">
                <p className="text-white text-lg hover:text-purple-500 flex gap-3"><PhoneCall className="text-blue-500" /> +91 40-35095538</p>
              </a> */}
              <a href="mailto:hello@bixeltek.com">
                <p className="text-white text-lg hover:text-purple-500 flex gap-3"><Mail className="text-blue-500" />hello@bixeltek.com</p>
              </a>
            </div>

          </div>
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-100 font-medium mb-7">Important Links</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6"><Link href="/" className="text-gray-300 whitespace-nowrap hover:text-purple-700">Home</Link></li>
              <li className="mb-6"><Link href="/about-us" className=" text-gray-300 whitespace-nowrap hover:text-purple-700">About Us</Link></li>
              {/* <li className="mb-6"><Link href="/pricing" className=" text-gray-300 whitespace-nowrap hover:text-purple-700">Our Pricing</Link></li> */}
              <li className="mb-6"><Link href="/industries" className=" text-gray-300 whitespace-nowrap hover:text-purple-700">Industries We Serve</Link></li>
              <li className="mb-6"><Link href="/case-studies" className=" text-gray-300 whitespace-nowrap hover:text-purple-700">Read Our Case Studies</Link></li>
              <li className="mb-6"><Link href="/privacy-policy" className=" text-gray-300 whitespace-nowrap hover:text-purple-700">Privacy Policy</Link></li>
              <li className="mb-6"><Link href="/contact-us" className=" text-gray-300 whitespace-nowrap hover:text-purple-700">Contact Us</Link></li>
            </ul>
          </div>

          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-100 font-medium mb-7">Services</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6"><Link href="/services/google-ads" className="text-gray-300 hover:text-purple-700">Google Ads Management</Link></li>
              <li className="mb-6"><Link href="/services/seo-services" className=" text-gray-300 hover:text-purple-700">SEO Services</Link></li>
              <li className="mb-6"><Link href="/social-media-marketing-agency-hyderabad" className=" text-gray-300 hover:text-purple-700">Social Media Management</Link></li>
              <li className="mb-6"><Link href="/custom-coded-websites" className=" text-gray-300 hover:text-purple-700">Custom Coded Websites</Link></li>
              <li className="mb-6"><Link href="/custom-cms-websites" className=" text-gray-300 hover:text-purple-700">Custom CMS Websites</Link></li>
              <li className="mb-6"><Link href="/payment-gateway-integrations" className=" text-gray-300 hover:text-purple-700">Payment Gateway Integrations</Link></li>
              <li className="mb-6"><Link href="/ecommerce-websites" className=" text-gray-300 hover:text-purple-700">E-Commerce Websites</Link></li>
              <li className="mb-6"><Link href="/local-seo" className=" text-gray-300 hover:text-purple-700">Local SEO</Link></li>
              <li className="mb-6"><Link href="/on-page-seo" className=" text-gray-300 hover:text-purple-700">On Page SEO</Link></li>
              <li className="mb-6"><Link href="/technical-seo" className=" text-gray-300 hover:text-purple-700">Technical SEO</Link></li>
              {/* <li className="mb-6"><Link href="#" className=" text-gray-300 hover:text-purple-700">Youtube Ads Management in Hyderabad</Link></li> */}
            </ul>
          </div>
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-100 font-medium mb-7">Locations</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6"><Link href="/hyderabad" className="text-gray-300 hover:text-purple-700">Hyderabad</Link></li>
              <li className="mb-6"><Link href="/toronto" className=" text-gray-300 hover:text-purple-700">Toronto</Link></li>
              <li className="mb-6"><Link href="/vancouver" className=" text-gray-300 hover:text-purple-700">Vancouver</Link></li>
              <li className="mb-6"><Link href="/mississauga" className=" text-gray-300 hover:text-purple-700">Mississauga</Link></li>
              <li className="mb-6"><Link href="/saudi-arabia/eastern-province" className=" text-gray-300 hover:text-purple-700">Eastern Province</Link></li>
              <li className="mb-6"><Link href="/saudi-arabia/riyadh" className=" text-gray-300 hover:text-purple-700">Riyadh</Link></li>
            </ul>
          </div>
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-100 font-medium mb-7">Certifications & Recognitions</h4>
            <ul className="text-sm flex flex-col md:flex-row md:gap-10  transition-all duration-500">
              <li className="mb-6"><a href="https://www.google.com/partners/agency?id=2188074075" target="_blank" className="mt-2 flex justify-start">
                <img src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                  alt="Google Partner Badge"
                  className="w-auto h-16 md:h-24" />
              </a></li>
              <li>
                <div><a target="_blank" href="https://www.goodfirms.co/company/bixeltek"> <img src="https://assets.goodfirms.co/badges/color-badge/top-digital-marketing-companies.svg" title="Top Digital Marketing Company" className="w-20 md:w-32 h-auto" alt="Top Digital Marketing Company on GoodFirms" /></a></div>
              </li>

            </ul>
            <ul className="text-sm flex flex-col md:flex-row md:gap-10  transition-all duration-500 mt-6">
              <li className="mb-6">
                <div><a target="_blank" href="https://www.vision2030.gov.sa/en"> <img src="/Group 3@2x.png.png" title="Partner in Vision 2030" className="w-20 lg:w-32 h-auto" alt="Vision 2030 Logo" /></a></div>
              </li>
            </ul>
          </div>

        </div>

        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-white "><a href="/">Copyright © Bixeltek&nbsp;</a>2025 - All rights reserved.</span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">


              <a href="javascript:;" className="w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-gradient-to-t  from-[#4a208a] to-[#13012e] hover:bg-gray-900">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Social Media">
                    <path id="Vector" d="M11.8214 9.81691L16.9919 3.93591H15.7667L11.2772 9.0423L7.6914 3.93591H3.55566L8.97803 11.6577L3.55566 17.8248H4.78097L9.522 12.4323L13.3088 17.8248H17.4446L11.8211 9.81691H11.8214ZM10.1432 11.7257L9.59382 10.9568L5.22246 4.83846H7.10445L10.6322 9.77615L11.1816 10.5451L15.7672 16.9633H13.8852L10.1432 11.726V11.7257Z" fill="white" />
                  </g>
                </svg>

              </a>
              <a href="http://instagram.com/bixeltekagency/" target="_blank" className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-gradient-to-t  from-[#4a208a] to-[#13012e] hover:bg-gradient-to-b   
                        ">
                <svg className="w-[1.25rem] h-[1.125rem] text-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.63434 7.99747C5.63434 6.69062 6.6941 5.63093 8.00173 5.63093C9.30936 5.63093 10.3697 6.69062 10.3697 7.99747C10.3697 9.30431 9.30936 10.364 8.00173 10.364C6.6941 10.364 5.63434 9.30431 5.63434 7.99747ZM4.35427 7.99747C4.35427 10.0108 5.98723 11.6427 8.00173 11.6427C10.0162 11.6427 11.6492 10.0108 11.6492 7.99747C11.6492 5.98418 10.0162 4.3522 8.00173 4.3522C5.98723 4.3522 4.35427 5.98418 4.35427 7.99747ZM10.9412 4.20766C10.9411 4.37615 10.991 4.54087 11.0846 4.681C11.1783 4.82113 11.3113 4.93037 11.4671 4.99491C11.6228 5.05945 11.7942 5.07639 11.9595 5.04359C12.1249 5.01078 12.2768 4.92971 12.3961 4.81062C12.5153 4.69153 12.5966 4.53977 12.6295 4.37453C12.6625 4.2093 12.6457 4.03801 12.5812 3.88232C12.5168 3.72663 12.4076 3.59354 12.2674 3.49988C12.1273 3.40622 11.9625 3.35619 11.7939 3.35612H11.7936C11.5676 3.35623 11.3509 3.44597 11.1911 3.60563C11.0313 3.76529 10.9414 3.98182 10.9412 4.20766ZM5.132 13.7759C4.43946 13.7444 4.06304 13.6291 3.81289 13.5317C3.48125 13.4027 3.24463 13.249 2.99584 13.0007C2.74705 12.7524 2.59305 12.5161 2.46451 12.1847C2.367 11.9348 2.25164 11.5585 2.22016 10.8664C2.18572 10.1181 2.17885 9.89331 2.17885 7.99752C2.17885 6.10174 2.18629 5.87758 2.22016 5.12866C2.2517 4.43654 2.36791 4.06097 2.46451 3.81035C2.59362 3.47891 2.7474 3.24242 2.99584 2.99379C3.24428 2.74515 3.48068 2.59124 3.81289 2.46278C4.06292 2.36532 4.43946 2.25004 5.132 2.21857C5.88074 2.18416 6.10566 2.17729 8.00173 2.17729C9.89779 2.17729 10.1229 2.18472 10.8723 2.21857C11.5648 2.25009 11.9406 2.36623 12.1914 2.46278C12.5231 2.59124 12.7597 2.74549 13.0085 2.99379C13.2573 3.24208 13.4107 3.47891 13.5398 3.81035C13.6373 4.06023 13.7527 4.43654 13.7841 5.12866C13.8186 5.87758 13.8255 6.10174 13.8255 7.99752C13.8255 9.89331 13.8186 10.1175 13.7841 10.8664C13.7526 11.5585 13.6367 11.9347 13.5398 12.1847C13.4107 12.5161 13.2569 12.7526 13.0085 13.0007C12.76 13.2488 12.5231 13.4027 12.1914 13.5317C11.9414 13.6292 11.5648 13.7444 10.8723 13.7759C10.1236 13.8103 9.89865 13.8172 8.00173 13.8172C6.10481 13.8172 5.88051 13.8103 5.132 13.7759ZM5.07318 0.941429C4.31699 0.975845 3.80027 1.09568 3.34902 1.27116C2.88168 1.45239 2.48605 1.69552 2.09071 2.09C1.69537 2.48447 1.45272 2.88049 1.27139 3.34755C1.0958 3.79882 0.975892 4.31494 0.941455 5.07068C0.90645 5.82761 0.898438 6.0696 0.898438 7.99747C0.898438 9.92534 0.90645 10.1673 0.941455 10.9243C0.975892 11.68 1.0958 12.1961 1.27139 12.6474C1.45272 13.1142 1.69543 13.5106 2.09071 13.9049C2.48599 14.2992 2.88168 14.542 3.34902 14.7238C3.80113 14.8993 4.31699 15.0191 5.07318 15.0535C5.83096 15.0879 6.0727 15.0965 8.00173 15.0965C9.93075 15.0965 10.1729 15.0885 10.9303 15.0535C11.6865 15.0191 12.2029 14.8993 12.6544 14.7238C13.1215 14.542 13.5174 14.2994 13.9127 13.9049C14.3081 13.5105 14.5502 13.1142 14.7321 12.6474C14.9077 12.1961 15.0281 11.68 15.062 10.9243C15.0964 10.1668 15.1044 9.92534 15.1044 7.99747C15.1044 6.0696 15.0964 5.82761 15.062 5.07068C15.0276 4.31489 14.9077 3.79853 14.7321 3.34755C14.5502 2.88077 14.3075 2.4851 13.9127 2.09C13.518 1.69489 13.1215 1.45239 12.655 1.27116C12.2029 1.09568 11.6865 0.975277 10.9308 0.941429C10.1735 0.907013 9.93132 0.898438 8.00229 0.898438C6.07327 0.898438 5.83096 0.906445 5.07318 0.941429Z" fill="white"></path>
                </svg>

              </a>
              <a href="https://www.facebook.com/Bixeltek" target="_blank" className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-gradient-to-t  from-[#4a208a] to-[#13012e]  hover:bg-gray-900 ">
                <svg className="w-[1rem] h-[1rem] text-white" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.04111 7.81204L7.41156 5.46043H5.1296V3.93188C5.1296 3.28886 5.44818 2.66054 6.46692 2.66054H7.51899V0.657999C6.90631 0.560385 6.28723 0.507577 5.66675 0.5C3.78857 0.5 2.56239 1.62804 2.56239 3.66733V5.46043H0.480469V7.81204H2.56239V13.5H5.1296V7.81204H7.04111Z" fill="currentColor" />
                </svg>

              </a>
              <a href="https://www.linkedin.com/company/bixeltek" target="_blank" className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-gradient-to-t  from-[#4a208a] to-[#13012e]  hover:bg-gray-900 ">
                <svg className="w-[1.25rem] h-[1.25rem] text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.983 2.12 4.983 3.5zM.5 8h4V24h-4V8zM8.5 8h3.6v2.4h.05c.5-.95 1.75-2 3.6-2 3.85 0 4.55 2.5 4.55 5.75V24h-4v-7.75c0-1.85-.05-4.25-2.6-4.25-2.6 0-3 2-3 4.1V24h-4V8z" />
                </svg>

              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
