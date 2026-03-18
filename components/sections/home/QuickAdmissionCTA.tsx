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
                    <div className="max-w-6xl mx-auto text-center">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <span className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full text-[10px] font-black tracking-[0.4em] uppercase animate-pulse">
                                <Sparkles size={16} className="text-secondary" />
                                Admissions Cycle 2026-27 Open
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-9xl font-black font-heading text-white mb-12 leading-[0.85] tracking-tighter"
                        >
                            Architecting the
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">Next Generation</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-3xl text-white/50 mb-16 max-w-4xl mx-auto leading-tight font-medium tracking-tight"
                        >
                            Join the tri-campus network of excellence where technology meets tenacity. 
                            <span className="text-white block mt-4 font-black uppercase text-sm tracking-widest">Limited Seats Available.</span>
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col items-center gap-8 mb-16"
                        >
                            {/* Primary CTA - Apply Now */}
                            <Link
                                href="/admissions"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="group bg-white text-slate-900 px-16 py-8 font-black tracking-[0.2em] text-xs rounded-2xl shadow-2xl hover:bg-secondary hover:text-white transition-all inline-flex items-center gap-4 uppercase transform hover:scale-105"
                            >
                                <Calendar size={20} />
                                Start Application
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            {/* Secondary CTAs */}
                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link
                                    href="/admissions"
                                    className="group bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 font-black tracking-widest text-[10px] rounded-2xl transition-all inline-flex items-center gap-3 uppercase hover:bg-white/10"
                                >
                                    <Download size={16} />
                                    Prospectus 2026
                                </Link>

                                <Link
                                    href="/contact"
                                    className="group bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 font-black tracking-widest text-[10px] rounded-2xl transition-all inline-flex items-center gap-3 uppercase hover:bg-white/10"
                                >
                                    <Phone size={16} />
                                    Direct Enquiry
                                </Link>
                            </div>
                        </motion.div>

                        {/* Deadline Notice */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="inline-flex items-center gap-3 text-white/40 text-[10px] font-black tracking-[0.2em] uppercase"
                        >
                            <Calendar size={14} className="text-secondary" />
                            <span>Global Deadline: May 31, 2026</span>
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
