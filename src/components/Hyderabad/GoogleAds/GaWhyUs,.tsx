'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiPieChart, FiLayers } from 'react-icons/fi';

export default function GaWhyUs() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="relative py-24 lg:py-32 bg-zinc-950 overflow-hidden">
            
            {/* Cinematic Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h3 className="text-purple-500 font-sofiasanscondensed font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
                        Why Choose Us?
                    </h3>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sofiasanscondensed font-bold text-white mb-6 leading-tight tracking-tight">
                        Dedicated Certified <br className="hidden md:block" /> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#ae07e6]">Google Ads Experts</span>
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
                        Our team consists of certified Google Ads specialists who stay ahead of the latest PPC trends, ensuring your campaigns are optimized for success.
                    </p>
                </motion.div>

                {/* Grid Content */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
                >
                    
                    {/* Card 1 */}
                    <motion.div variants={itemVariants} className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-10 rounded-2xl hover:bg-zinc-900 transition-colors duration-500">
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                        <div className="w-14 h-14 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-purple-500 transition-all duration-500">
                            <FiTrendingUp className="text-2xl text-purple-400 group-hover:text-purple-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 font-sofiasanscondensed tracking-wide">
                            Proven Track Records
                        </h3>
                        <p className="text-zinc-400 leading-relaxed font-light">
                            We have helped businesses across various industries scale with high-performing ad campaigns. Our clients see measurable improvements in lead generation, sales, and overall campaign performance.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div variants={itemVariants} className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-10 rounded-2xl hover:bg-zinc-900 transition-colors duration-500">
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                        <div className="w-14 h-14 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-purple-500 transition-all duration-500">
                            <FiPieChart className="text-2xl text-purple-400 group-hover:text-purple-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 font-sofiasanscondensed tracking-wide">
                            Data-Driven Approach
                        </h3>
                        <p className="text-zinc-400 leading-relaxed font-light">
                            Every decision is backed by in-depth analytics and market research. We analyze customer behavior, competitor strategies, and industry trends to fine-tune your campaigns.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div variants={itemVariants} className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-10 rounded-2xl hover:bg-zinc-900 transition-colors duration-500">
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                        <div className="w-14 h-14 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-purple-500 transition-all duration-500">
                            <FiLayers className="text-2xl text-purple-400 group-hover:text-purple-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 font-sofiasanscondensed tracking-wide">
                            Full-Service PPC Management
                        </h3>
                        <p className="text-zinc-400 leading-relaxed font-light">
                            From campaign setup to continuous optimization, we handle everything from start to finish so you can focus entirely on running and scaling your business.
                        </p>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}