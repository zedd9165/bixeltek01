"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Building,
    ShoppingCart,
    Code,
    Target,
    RefreshCw,
    ArrowUpRight,
    TrendingUp,
    Globe,
    Sparkles
} from "lucide-react";
import { LiaWordpress } from "react-icons/lia";

const BangaloreWebSolutions = () => {
    const services = [
        {
            icon: Building,
            title: "Corporate Website Design",
            description: "Professional, SEO-ready websites that showcase your brand credibility and drive lead generation.",
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50",
            iconColor: "text-blue-600",
            link: "/services/corporate-websites",
            gradient: "bg-gradient-to-t from-blue-500 to-blue-600",
            badge: "Popular"
        },
        {
            icon: ShoppingCart,
            title: "E-Commerce Website Development",
            description: "Shopify and WooCommerce stores optimized for user experience, conversion, and repeat sales.",
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50",
            iconColor: "text-purple-600",
            link: "/services/ecommerce-development",
            gradient: "bg-gradient-to-t from-purple-500 to-purple-600",
            badge: "Hot"
        },
        {
            icon: LiaWordpress,
            title: "WordPress Development",
            description: "Flexible, secure, and fast WordPress builds with custom themes and plugin integrations.",
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50",
            iconColor: "text-green-600",
            link: "/services/web-design/wordpress",
            gradient: "bg-gradient-to-t from-green-500 to-green-600"
        },
        {
            icon: Code,
            title: "Headless & Next.js Websites",
            description: "High-speed, scalable websites with modern tech stacks and Core Web Vital optimization.",
            color: "from-orange-500 to-orange-600",
            bgColor: "bg-orange-50",
            iconColor: "text-orange-600",
            link: "/services/headless-development",
            gradient: "bg-gradient-to-t from-orange-500 to-orange-600",
            badge: "Trending"
        },
        {
            icon: Target,
            title: "Landing Page Design",
            description: "Conversion-focused pages for Google Ads and lead campaigns integrated with analytics and tracking.",
            color: "from-red-500 to-red-600",
            bgColor: "bg-red-50",
            iconColor: "text-red-600",
            link: "/services/landing-page-design",
            gradient: "bg-gradient-to-t from-red-500 to-red-600"
        },
        {
            icon: RefreshCw,
            title: "Website Redesign & Optimization",
            description: "Revamp old designs into fast, mobile-responsive, SEO-optimized websites with measurable improvement in engagement.",
            color: "from-indigo-500 to-indigo-600",
            bgColor: "bg-indigo-50",
            iconColor: "text-indigo-600",
            link: "/services/website-redesign",
            gradient: "bg-gradient-to-t from-indigo-500 to-indigo-600",
            badge: "Featured"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const bgVariants = {
        initial: {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            opacity: 0
        },
        hover: {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const iconVariants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const contentVariants = {
        hover: {
            y: -2,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-16 md:py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header - Clean Version */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-6xl font-semibold text-gray-900 mb-6">
                        Custom Web Solutions <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Tailored for Bangalore Businesses</span> 
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Bixeltek provides end-to-end design and development services for startups, service providers, and enterprises looking for websites that perform as hard as they look good.
                    </p>
                </motion.div>

                {/* Services Grid - Clean 3x3 Layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="group relative"
                            variants={cardVariants}
                        >
                            <motion.a
                                href={service.link}
                                className="group block relative rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 overflow-hidden cursor-pointer h-full bg-transparent"
                                initial="initial"
                                whileHover="hover"
                            >
                                {/* Animated Gradient Background */}
                                <motion.div
                                    className={`absolute inset-0 bg-blue-500 rounded-2xl z-0`}
                                    initial={{ y: "-100%", opacity: 0 }}
                                    whileHover={{ y: "100%", opacity: 1 }}
                                    transition={{
                                        duration: 0.6,
                                        ease: [0.4, 0, 0.2, 1],
                                    }}
                                />

                                {/* White Overlay for Base */}
                                <div className="absolute inset-0 bg-white rounded-2xl z-[1]" />

                                {/* Content Container */}
                                <motion.div className="relative z-10 h-full flex flex-col">
                                    <div
                                        className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-300 border`}
                                    >
                                        <service.icon
                                            className={`w-6 h-6 ${service.iconColor}  transition-colors duration-300`}
                                        />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3  transition-colors duration-300 leading-tight">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed mb-4  transition-colors duration-300 flex-grow text-base">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-gray-500  transition-colors duration-300 mt-auto pt-3 border-t border-gray-100 group-hover:border-white/30">
                                        <span className="text-sm font-semibold">Discover more</span>
                                        <motion.div
                                            animate={{ x: [0, 3, 0] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <ArrowUpRight className="w-4 h-4" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.a>


                            {/* Service Badge */}
                           
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
               
            </div>
        </section>
    );
};

export default BangaloreWebSolutions;