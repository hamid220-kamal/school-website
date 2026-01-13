"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function LeaderSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:ml-auto overflow-hidden rounded-2xl shadow-2xl border-b-8 border-secondary">
                            {/* Placeholder for Leader Image - Using a dignified portrait from Unsplash */}
                            <Image
                                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
                                alt="Dr. Nallapati Venkateswara Rao"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-60" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold font-heading">Dr. Nallapati Venkateswara Rao</h3>
                                <p className="text-secondary font-medium tracking-wide">Chairman & Visionary</p>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10" />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-block p-3 bg-secondary/10 rounded-full text-secondary mb-6">
                            <Quote size={32} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-heading leading-tight">
                            The Visionary <span className="text-secondary">Leader</span>
                        </h2>
                        <div className="h-1 w-24 bg-secondary mx-auto lg:mx-0 mb-8" />

                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                It is with immense pride that I serve as President of Delhi World School. Behind the success of Delhi World School stands a passion for education and child development that has shaped the foundation of our institution.
                            </p>
                            <p>
                                With over <strong className="text-primary">35 years of experience</strong> in the education sector, our philosophy blends tradition with innovation, ensuring that every child receives not only academic excellence but also the moral and emotional grounding to thrive in life.
                            </p>
                            <p>
                                Under our guidance, DWS has evolved into a network of schools committed to nurturing confident, compassionate, and future-ready learners. Our vision continues to inspire our educators, motivate our students, and drive our mission to make quality education accessible and impactful for every child.
                            </p>
                        </div>

                        <div className="mt-10 pt-8 border-t border-slate-200">
                            <p className="font-handwriting text-3xl text-primary font-bold opacity-80 rotate-[-2deg]">
                                N. Venkateswara Rao
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
