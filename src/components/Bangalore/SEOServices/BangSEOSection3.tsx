"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Search,
    Map,
    FileText,
    Target,
    Link,
    BarChart3,
    ArrowUpRight,
    Zap,
    TrendingUp
} from "lucide-react";

const BangaloreSEOProcessCards = () => {
    const processes = [
        {
            icon: Zap,
            title: "Technical SEO Audit",
            description: "We diagnose crawlability, page speed, Core Web Vitals, schema, and site structure to build a healthy foundation.",
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50",
            iconColor: "text-blue-600",
            link: "/services/technical-seo-audit",
            gradient: "bg-gradient-to-br from-blue-500 to-blue-600"
        },
        {
            icon: Search,
            title: "Keyword & Entity Mapping",
            description: "We go beyond traditional keyword research. Using entity-based optimization, we map topics that align with user intent and AI search systems.",
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50",
            iconColor: "text-purple-600",
            link: "/services/keyword-research",
            gradient: "bg-gradient-to-br from-purple-500 to-purple-600"
        },
        {
            icon: FileText,
            title: "On-Page Optimization",
            description: "We optimize titles, headings, internal links, and metadata while improving UX and content readability.",
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50",
            iconColor: "text-green-600",
            link: "/services/on-page-seo",
            gradient: "bg-gradient-to-br from-green-500 to-green-600"
        },
        {
            icon: Map,
            title: "Local SEO & Map Ranking",
            description: "We optimize your Google Business Profile and location pages to help you dominate 'near me' searches across Bangalore.",
            color: "from-orange-500 to-orange-600",
            bgColor: "bg-orange-50",
            iconColor: "text-orange-600",
            link: "/services/local-seo",
            gradient: "bg-gradient-to-br from-orange-500 to-orange-600"
        },
        {
            icon: Link,
            title: "Content Systems & Link Building",
            description: "We build authority through consistent topical content and high-quality backlinks from relevant publishers.",
            color: "from-red-500 to-red-600",
            bgColor: "bg-red-50",
            iconColor: "text-red-600",
            link: "/services/link-building",
            gradient: "bg-gradient-to-br from-red-500 to-red-600"
        },
        {
            icon: BarChart3,
            title: "Analytics & Reporting",
            description: "GA4 and Search Console integration ensures you see real data, not vanity graphs.",
            color: "from-indigo-500 to-indigo-600",
            bgColor: "bg-indigo-50",
            iconColor: "text-indigo-600",
            link: "/services/seo-analytics",
            gradient: "bg-gradient-to-br from-indigo-500 to-indigo-600"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const bgVariants = {
        initial: {
            clipPath: "circle(0% at 100% 0%)",
            opacity: 0
        },
        hover: {
            clipPath: "circle(150% at 100% 0%)",
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const iconVariants = {
        hover: {
            scale: 1.2,
            rotate: 360,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const linkVariants = {
        hover: {
            x: 5,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        SEO That&apos;s <span className="text-red-600">Engineered</span>, Not Estimated.
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our process combines advanced SEO science with marketing psychology.
                    </p>
                </motion.div>

                {/* Process Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {processes.map((process, index) => (
                        <motion.div
                            key={process.title}
                            className="group relative"
                            variants={cardVariants}
                        >
                            <motion.a
                                href={process.link}
                                className="group block relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200 overflow-hidden cursor-pointer h-full"
                                initial="initial"
                                whileHover="hover"
                                variants={cardVariants}
                            >
                                {/* Animated Background Layer - Coming from top-right */}
                                <motion.div
                                    className={`absolute inset-0 ${process.gradient} rounded-3xl z-0`}
                                    variants={bgVariants}
                                    initial="initial"
                                    whileHover="hover"
                                />

                                {/* Floating Particles */}
                                

                                {/* Content */}
                                <div className="relative z-20 h-full flex flex-col">
                                    {/* Icon with Unique Animation */}
                                    <motion.div
                                        className={`w-16 h-16 ${process.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300 border`}
                                        variants={iconVariants}
                                    >
                                        <process.icon className={`w-8 h-8 ${process.iconColor} group-hover:text-white transition-colors duration-300`} />
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h3
                                        className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300"
                                    >
                                        {process.title}
                                    </motion.h3>

                                    {/* Description */}
                                    <motion.p
                                        className="text-gray-600 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300 flex-grow"
                                    >
                                        {process.description}
                                    </motion.p>

                                    {/* Animated Link */}
                                    <motion.div
                                        className="flex items-center gap-2 text-gray-500 group-hover:text-white transition-colors duration-300 mt-auto"
                                        variants={linkVariants}
                                    >
                                        <span className="text-sm font-semibold">Learn more</span>
                                        <motion.div
                                            animate={{
                                                x: [0, 3, 0]
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <ArrowUpRight className="w-4 h-4" />
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Corner Accent */}
                                <motion.div
                                    variants={{
                                        initial: { scale: 0, opacity: 0, originX: 1, originY: 0 },
                                        hover: { scale: 1, opacity: 1 },
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.4, 0, 0.2, 1],
                                    }}
                                    className={`absolute top-0 right-0 w-full h-full ${process.gradient} rounded-bl-3xl z-10`}
                                >
                                    {/* Small glowing dot in the top-right corner */}
                                    <motion.div
                                        variants={{
                                            initial: { scale: 0, opacity: 0 },
                                            hover: { scale: 1, opacity: 1 },
                                        }}
                                        transition={{
                                            delay: 0.15,
                                            duration: 0.4,
                                            ease: "easeOut",
                                        }}
                                        className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                    />
                                </motion.div>


                                {/* Hover Border Effect */}
                                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-all duration-300 pointer-events-none z-30" />

                                {/* Shine Effect */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-25" />
                            </motion.a>

                            {/* External Link Badge for Some Cards */}
                            {index % 2 === 0 && (
                                <motion.div
                                    className="absolute -top-2 -right-2 bg-white text-gray-700 px-2 py-1 rounded-full text-xs font-semibold shadow-lg border opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40"
                                    initial={{ scale: 0 }}
                                    whileHover={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <TrendingUp className="w-3 h-3 inline mr-1" />
                                    Popular
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <motion.a
                        href="/contact-us"
                        className="px-8 py-3 bg-gradient-to-r from-red-300 via-red-400 via-red-600 to-red-950 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Zap className="w-5 h-5" />
                        Start Your SEO Journey
                        <ArrowUpRight className="w-5 h-5" />
                    </motion.a>
                    <p className="text-gray-500 text-sm mt-4">
                        Join 150+ Bangalore businesses ranking on Google&apos;s first page
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default BangaloreSEOProcessCards;