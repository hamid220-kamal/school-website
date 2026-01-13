"use client";

import { motion } from "framer-motion";
import { CheckCircle, Calendar, FileText, ArrowRight, Users, Sparkles, GraduationCap, Phone, Clock, Award } from "lucide-react";
import Link from "next/link";
import { AdmissionForm } from "@/components/forms/AdmissionForm";

export default function Admissions() {
    const steps = [
        { title: "Online Registration", desc: "Fill out the enquiry form to get started.", icon: FileText },
        { title: "Campus Visit & Interaction", desc: "Visit our campus and interact with faculty.", icon: Users },
        { title: "Document Verification", desc: "Submit necessary documents for verification.", icon: CheckCircle },
        { title: "Fee Payment & Confirmation", desc: "Secure the seat by paying the admission fee.", icon: Calendar },
    ];

    const benefits = [
        { icon: Award, title: "Merit Scholarships", desc: "Up to 50% fee waiver for top performers" },
        { icon: Clock, title: "Flexible Timings", desc: "Multiple counseling slots available" },
        { icon: Phone, title: "24/7 Support", desc: "Dedicated admission helpline" },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Header */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary" />
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Floating Orbs */}
                <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/30 rounded-full blur-[80px]" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-flex items-center gap-2 glass px-6 py-2.5 rounded-full text-white text-sm font-bold tracking-wider mb-6">
                            <Sparkles size={16} className="text-secondary" />
                            LIMITED SEATS AVAILABLE
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading text-white mb-6">
                            Admissions Open<br />
                            <span className="text-gradient-secondary">2026-27</span>
                        </h1>
                        <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl mb-10">
                            Join the Excellence Academy family. We welcome students from all backgrounds who are eager to learn and grow.
                        </p>
                        <a
                            href="#application-form"
                            className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-full font-bold tracking-widest text-sm shadow-2xl hover:bg-secondary hover:text-white transition-all"
                        >
                            START APPLICATION
                            <ArrowRight size={20} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Bar */}
            <div className="bg-slate-900 py-8">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 text-white"
                            >
                                <div className="p-3 bg-gradient-secondary rounded-xl">
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold">{item.title}</h3>
                                    <p className="text-white/60 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-24">
                {/* Process Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
                        <GraduationCap size={16} />
                        SIMPLE PROCESS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900">
                        How to <span className="text-gradient">Apply</span>
                    </h2>
                </motion.div>

                <div className="max-w-5xl mx-auto mb-24">
                    <div className="grid md:grid-cols-4 gap-6">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {/* Connector Line */}
                                {idx < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-slate-200" />
                                )}

                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all relative z-10 text-center group card-hover">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-glow">
                                        {idx + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-gradient-primary group-hover:text-white transition-all">
                                        <step.icon size={28} />
                                    </div>

                                    <h3 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-slate-500 text-sm">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Application Form Section */}
                <div id="application-form" className="scroll-mt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
                            <FileText size={16} />
                            ONLINE APPLICATION
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-4">
                            Start Your <span className="text-gradient">Application</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Fill in the details below to begin the admission process. Our team will review your application and contact you within 24 hours.
                        </p>
                    </motion.div>

                    <AdmissionForm />
                </div>
            </div>
        </div>
    );
}
