"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Download, Phone, Sparkles } from "lucide-react";
import { useState } from "react";

export function QuickAdmissionCTA() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            {/* Main CTA Section */}
            <section className="py-24 bg-gradient-primary relative overflow-hidden">
                {/* Animated Background Pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />

                {/* Floating Orbs */}
                <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <span className="inline-flex items-center gap-2 glass text-white/90 px-8 py-4 rounded-full text-base md:text-lg font-black tracking-wider animate-pulse">
                                <Sparkles size={20} className="text-secondary" />
                                🔥 ADMISSIONS OPEN 2026-27 ACROSS ALL CAMPUSES
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-black font-heading text-white mb-8 leading-tight"
                        >
                            Secure Your Child's
                            <br />
                            <span className="text-gradient-secondary">Future Today</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
                        >
                            Join 4700+ successful students across our three world-class campuses.
                            <br />
                            <strong className="text-secondary">Limited Seats - Apply Now!</strong>
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col items-center gap-6 mb-12"
                        >
                            {/* Primary CTA - Apply Now */}
                            <Link
                                href="/admissions"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="group bg-white text-primary px-12 py-6 font-black tracking-wide text-lg rounded-full shadow-2xl hover:shadow-glow-secondary hover:bg-secondary hover:text-white transition-all inline-flex items-center gap-3 btn-premium transform hover:scale-105"
                            >
                                <Calendar size={24} />
                                APPLY NOW - 2026-27
                                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            {/* Secondary CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/admissions"
                                    className="group glass hover:bg-white/20 text-white px-8 py-4 font-bold tracking-wide text-sm rounded-full transition-all inline-flex items-center gap-3"
                                >
                                    <Download size={20} />
                                    DOWNLOAD PROSPECTUS
                                </Link>

                                <Link
                                    href="/contact"
                                    className="group glass hover:bg-white/20 text-white px-8 py-4 font-bold tracking-wide text-sm rounded-full transition-all inline-flex items-center gap-3"
                                >
                                    <Phone size={20} />
                                    ENQUIRY FORM
                                </Link>
                            </div>
                        </motion.div>

                        {/* Deadline Notice */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-12 inline-flex items-center gap-2 glass text-white/80 px-6 py-3 rounded-full text-sm"
                        >
                            <Calendar size={16} className="text-secondary" />
                            <span>
                                <strong className="text-white">Application Deadline:</strong> May 31, 2026
                            </span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Floating Sticky Button (Mobile & Desktop) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 }}
                className="fixed bottom-8 right-8 z-40 hidden md:block"
            >
                <Link
                    href="/admissions"
                    className="group bg-gradient-secondary text-white p-5 rounded-full shadow-glow-secondary hover:shadow-2xl transition-all flex items-center gap-3 font-bold text-sm btn-premium"
                >
                    <Calendar size={22} className="group-hover:rotate-12 transition-transform" />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300">
                        Quick Apply
                    </span>
                </Link>
            </motion.div>
        </>
    );
}
