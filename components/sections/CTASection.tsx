"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-primary" />

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Floating Orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-white max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full text-sm font-bold tracking-wider mb-8">
                        <Sparkles size={16} className="text-secondary" />
                        ADMISSIONS OPEN 2026-27
                    </span>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading mb-6 leading-tight">
                        Begin Your Child's<br />
                        <span className="text-gradient-secondary">Journey to Excellence</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
                        Give your child the gift of world-class education. Limited seats available for the upcoming academic year.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/admissions"
                            className="group bg-white text-primary px-10 py-5 font-bold tracking-widest text-sm rounded-full shadow-2xl hover:bg-secondary hover:text-white transition-all inline-flex items-center justify-center gap-3"
                        >
                            START APPLICATION
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/contact"
                            className="group glass hover:bg-white/20 text-white px-10 py-5 font-bold tracking-widest text-sm rounded-full transition-all inline-flex items-center justify-center gap-3"
                        >
                            <Phone size={18} />
                            SCHEDULE A VISIT
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-16 flex flex-wrap justify-center gap-8 text-white/60 text-sm"
                    >
                        <span>✓ No Application Fee</span>
                        <span>✓ Virtual Campus Tour Available</span>
                        <span>✓ Scholarship Programs</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
