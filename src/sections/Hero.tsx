'use client';
import stars from '@/assets/stars.png'
import { motion } from 'framer-motion';
import Link from 'next/link';
export const Hero = () => {

  const getaQuote = () => {
    const arrow = document.querySelector('#get_a_quote') as HTMLElement;
    if (arrow) {
      arrow.style.transform = 'translateX(8px)';
      arrow.style.transition = 'transform 0.2s ease-in-out';
    }
  }

  return <section className="h-[492px] md:h-[800px] mt-[0px] md:mt-[-60px] lg:mt-[-80px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] z-30"
    style={{ backgroundImage: `url(${stars.src})` }}>

    <div className='absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]'></div>
    <div
      className="absolute w-64 h-64 md:w-96 md:h-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255)]"
      style={{
        background: 'radial-gradient(circle at top left,white,rgb(184,148,255) 10% , rgba(24,0,66,1))',
      }}
    >
    </div>

    <motion.div style={{ translateY: '-50%', translateX: "-50%" }} animate={{

      rotate: "1turn",
    }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear"
      }}
      className='absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] opacity-20 rounded-full border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='absolute w-5 h-5 rounded-full border top-1/2 right-0 translate-x-2.5 -translate-y-1/2 flex justify-center items-center'>
        <div className='absolute w-2 h-2 rounded-full bg-white'></div>
      </div>
      <div className='absolute w-2 h-2 rounded-full bg-white bottom-0 left-1/2 -translate-x-1/2 translate-y-1'></div>
      <div className='absolute w-2 h-2 rounded-full bg-white top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 '></div>
      <div className='absolute w-2 h-2 rounded-full bg-white top-1/2 -translate-x-1/2 -translate-y-1/2 '></div>
    </motion.div>

    <motion.div
      style={{ translateY: '-50%', translateX: "-50%" }}
      animate={{
        rotate: "1turn",
      }}
      transition={{
        duration: 60,
        ease: "linear",
        repeat: Infinity,

      }}
      className='absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] opacity-20 rounded-full border-dotted  z-40 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></motion.div>

    <motion.div style={{ translateY: '-50%', translateX: "-50%" }}
      animate={{
        rotate: "1turn",
      }}
      transition={{
        duration: 60,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }}
      className='absolute h-[544px] w-[544px] md:h-[920px] md:w-[920px] opacity-20 rounded-full border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='absolute w-5 h-5 rounded-full border top-1/2 right-0 translate-x-2.5 -translate-y-1/2 flex justify-center items-center'>
        <div className='absolute w-2 h-2 rounded-full bg-white'></div>
      </div>
      <div className='absolute w-2 h-2 rounded-full bg-white bottom-0 left-1/2 -translate-x-1/2 translate-y-1'></div>
    </motion.div>
    <div className="relative container text-white mt-16 z-40">
      <h1 className="text-7xl md:text-[168px] tracking-tighter font-semibold bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,0.5))] text-transparent bg-clip-text text-center">BIXELTEK</h1>
      <div className="text-white/70 text-center text-sm md:text-xl   mt-2">
        <h2 className='text-2xl md:text-3xl'>Premier Digital Marketing Agency </h2>
        <p className='text-base max-w-xl mx-auto mt-2'> Bixeltek is a certified, full-service digital marketing agency helping businesses in India, US, Canada, Saudi Arabia, UK & Ireland scale profitably with performance-first strategies.
        </p>
      </div>
      <div className="flex justify-center items-center mt-10 gap-5">
        <a href="tel:+919100032301">
          <button className="bg-gradient-to-t from-[#4a208a] to-[#13012e] border border-[white] text-white font-normal text-sm py-2 px-4 md:px-6 md:py-3 md:text-md rounded-lg md:mt-5 shadow-custom">
            <span>Talk to an Expert</span>
          </button>
        </a>
        <Link href='/contact-us'>
          <button className="backdrop-blur-3xl border border-white text-white font-normal text-sm py-2 px-4 md:px-6 md:py-3 md:text-md rounded-lg md:mt-5 shadow-custom " onClick={getaQuote}>
            <span>
              Get a Quote<i className="fa-solid fa-arrow-right ml-2" id='get_a_quote'></i>
            </span>
          </button>
        </Link>
      </div>
    </div>
  </section>;
};
