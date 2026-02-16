"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Lightbulb, Heart, Target, CheckCircle2 } from "lucide-react";

export function InstitutionAbout() {
    const values = [
        {
            icon: Award,
            title: "Excellence",
            description: "Striving for the highest standards in every aspect of education"
        },
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "Embracing modern teaching methodologies and technology"
        },
        {
            icon: Heart,
            title: "Character",
            description: "Building moral integrity and ethical leadership"
        },
        {
            icon: Target,
            title: "Purpose",
            description: "Empowering students to achieve their dreams"
        }
    ];

    const achievements = [
        "35+ Years of Educational Excellence",
        "4700+ Successful Alumni Globally",
        "98% Average Success Rate",
        "Top 50 Institution Network Nationally"
    ];

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #4f46e5 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Floating Orbs */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
                            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                            ABOUT OUR INSTITUTION
                        </span>

                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6 leading-tight">
                            Shaping Future Leaders
                            <br />
                            <span className="text-gradient">Since 1989</span>
                        </h2>

                        <div className="w-20 h-1.5 bg-gradient-secondary rounded-full mb-8" />

                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            We are more than an educational institution; we are a <strong>legacy of excellence</strong> spanning
                            over three decades. With three state-of-the-art campuses, we provide world-class education
                            that blends <strong>traditional values with modern innovation</strong>.
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-10">
                            Our distinguished faculty, cutting-edge infrastructure, and holistic curriculum ensure
                            every student discovers their unique potential and emerges as a confident, compassionate,
                            and capable global citizen.
                        </p>

                        {/* Core Values Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {values.map((value, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                    className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all group"
                                >
                                    <value.icon size={28} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-bold text-slate-900 mb-1">{value.title}</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Achievements List */}
                        <div className="space-y-3">
                            {achievements.map((achievement, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + idx * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 size={20} className="text-secondary flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{achievement}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Visual Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-6">
                            {/* Large Image */}
                            <div className="col-span-2 relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop"
                                    alt="Campus Overview"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                            </div>

                            {/* Two Small Images */}
                            <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop"
                                    alt="Students Learning"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </div>
                            <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop"
                                    alt="Modern Facilities"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </div>
                        </div>

                        {/* Floating Stats Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, type: "spring" }}
                            className="absolute -bottom-6 -left-6 bg-gradient-primary text-white p-8 rounded-3xl shadow-glow"
                        >
                            <div className="text-5xl font-black mb-1">3</div>
                            <div className="text-sm font-medium tracking-wider opacity-90">
                                WORLD-CLASS
                                <br />
                                CAMPUSES
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
