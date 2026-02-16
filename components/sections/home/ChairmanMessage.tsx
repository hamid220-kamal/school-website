"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export function ChairmanMessage() {
    return (
        <section className="py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-4">
                        LEADERSHIP MESSAGE
                    </span>
                </motion.div>

                {/* Main Content Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="glass-card p-8 md:p-12 rounded-3xl shadow-premium relative overflow-hidden">
                        {/* Background Quote Icon */}
                        <div className="absolute top-8 right-8 opacity-5">
                            <Quote size={200} className="text-primary" />
                        </div>

                        <div className="grid md:grid-cols-5 gap-12 items-center relative z-10">
                            {/* Left - Photo */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="md:col-span-2"
                            >
                                <div className="relative">
                                    {/* Photo Frame */}
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                        <Image
                                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
                                            alt="Dr. Rajesh Kumar - Chairman"
                                            width={400}
                                            height={500}
                                            className="w-full h-auto object-cover"
                                            priority
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                                    </div>

                                    {/* Decorative Border */}
                                    <div className="absolute -inset-4 bg-gradient-primary rounded-3xl -z-10 opacity-20 blur-xl" />
                                </div>
                            </motion.div>

                            {/* Right - Message */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="md:col-span-3"
                            >
                                {/* Quote Icon */}
                                <div className="mb-6">
                                    <Quote size={40} className="text-primary opacity-30" />
                                </div>

                                {/* Message */}
                                <blockquote className="space-y-6">
                                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light italic">
                                        "Education is not just about academic excellence; it's about nurturing minds,
                                        building character, and inspiring the next generation of leaders who will shape
                                        our world."
                                    </p>

                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        Over the past 35 years, we have remained committed to this vision. Our three
                                        campuses stand as beacons of innovation, tradition, and excellence, each
                                        contributing uniquely to our mission of holistic education.
                                    </p>

                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        I invite you to be part of our legacy—where every student is valued, every
                                        dream is nurtured, and every achievement is celebrated.
                                    </p>
                                </blockquote>

                                {/* Signature Section */}
                                <div className="mt-10 pt-8 border-t border-slate-200">
                                    <div className="flex items-center gap-6">
                                        <div className="h-16 w-1 bg-gradient-primary rounded-full" />
                                        <div>
                                            <h3 className="text-2xl font-black font-heading text-slate-900">
                                                Dr. Rajesh Kumar
                                            </h3>
                                            <p className="text-primary font-bold tracking-wide text-sm">
                                                CHAIRMAN & FOUNDER
                                            </p>
                                            <p className="text-slate-500 text-sm mt-1">
                                                Ph.D. in Education Leadership | 35+ Years Experience
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
