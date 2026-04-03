"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
    TrendingUp, 
    Search, 
    Award, 
    Sparkles, 
    ArrowUpRight,
    Calendar,
    Users
} from "lucide-react";
import pawgolog from '@/assets/pawgologo.png';
import Image from "next/image";

const PetCaseStudySection = () => {
    const metrics = [
        {
            icon: TrendingUp,
            value: "+340%",
            label: "increase in organic visits",
            color: "from-green-500 to-emerald-600"
        },
        {
            icon: Search,
            value: "120+",
            label: "keywords in Top 10",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: Award,
            value: "Ranked #1",
            label: "for 'mobile dog grooming Seattle'",
            color: "from-amber-500 to-orange-600"
        },
        {
            icon: Sparkles,
            value: "Featured in AI Overview",
            label: "for 'dog grooming van near me'",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: Users,
            value: "2.4×",
            label: "conversion rate increase via call-tracking",
            color: "from-red-500 to-red-600"
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

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
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
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Sparkles className="w-4 h-4" />
                        Success Story
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        From Obscure to Outstanding
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        How we transformed a local pet grooming business into a search engine powerhouse
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Client Info */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Client Card */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <Image src={pawgolog} alt="pawgo-logo" className="h-10 w-auto mb-1" />
                                    <p className="text-gray-600">Pet Grooming Service, US</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-gray-600 mb-4">
                                <Calendar className="w-5 h-5" />
                                <span className="font-semibold">Duration: 6 Months</span>
                            </div>

                            <p className="text-gray-700 leading-relaxed">
                                A mobile pet grooming service struggling to stand out in a competitive market. 
                                Through strategic SEO implementation and AI-optimized content, we helped them 
                                dominate local search results and significantly increase qualified leads.
                            </p>
                        </motion.div>

                        {/* CTA Card */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-8 text-white"
                        >
                            <h3 className="text-2xl font-bold mb-4">Ready for Similar Results?</h3>
                            <p className="mb-6 opacity-90">
                                Let&quot;s discuss how we can transform your pet business with data-driven SEO strategies.
                            </p>
                            <motion.a
                                href="/contact-us"
                                className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Book Free Strategy Session
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Metrics */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={metric.label}
                                variants={itemVariants}
                                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-amber-200"
                            >
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className={`w-14 h-14 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <metric.icon className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className="text-2xl font-bold text-gray-900">
                                                {metric.value}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {metric.label}
                                        </p>
                                    </div>

                                    {/* Progress Indicator */}
                                    <div className="w-2 h-12 bg-gradient-to-b from-gray-200 to-transparent rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            whileInView={{ height: "100%" }}
                                            transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                                            viewport={{ once: true }}
                                            className={`w-full bg-gradient-to-b ${metric.color} rounded-full`}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">
                        Trusted by Pet Businesses Worldwide
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 text-gray-400">
                        <span className="text-sm">✓ 30-Day Results Guarantee</span>
                        <span className="text-sm">✓ Transparent Reporting</span>
                        <span className="text-sm">✓ Pet Industry Specialists</span>
                        <span className="text-sm">✓ AI-Powered Strategies</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PetCaseStudySection;