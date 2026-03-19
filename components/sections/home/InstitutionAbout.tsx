"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Lightbulb, Heart, Target, CheckCircle2 } from "lucide-react";

export function InstitutionAbout() {
    const values = [
        {
            icon: Award,
            title: "Bright Horizon",
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
        <section className="py-32 bg-slate-950 relative overflow-hidden">
            {/* Cinematic Background Accents */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-20 items-center">
                    {/* Left - Narrative Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-6"
                    >
                         <div className="flex items-center gap-3 mb-10">
                            <span className="h-[1px] w-12 bg-secondary" />
                            <span className="text-[10px] font-black tracking-[0.4em] text-secondary uppercase">The Foundation</span>
                        </div>

                        <h2 className="text-5xl md:text-8xl font-black font-heading text-white mb-10 leading-[0.85] tracking-tighter">
                            Architecting
                            <br />
                            <span className="text-gradient-secondary">Future Legacies</span>
                        </h2>

                        <p className="text-xl text-white/40 leading-relaxed mb-12 font-medium">
                            An elite educational powerhouse spanning over 35 years of academic mastery. We engineering environments where <strong>traditional discipline meets global innovation</strong>.
                        </p>

                        {/* Institutional Pillars Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-14">
                            {values.map((value, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all group"
                                >
                                    <value.icon size={32} className="text-secondary mb-6 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-black text-white mb-2 tracking-tight">{value.title}</h3>
                                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest leading-loose">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Impact Metrics */}
                        <div className="flex flex-wrap gap-8 pt-10 border-t border-white/5">
                            {achievements.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.5 + idx * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 size={16} className="text-secondary" />
                                    <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Museum-Style Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-6 relative"
                    >
                        <div className="grid grid-cols-12 gap-6 items-end">
                            {/* Main High-Profile Frame */}
                            <div className="col-span-8 relative h-[500px] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/10">
                                <Image
                                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop"
                                    alt="Campus Architecture"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Secondary Technical Frame */}
                            <div className="col-span-4 relative h-[300px] rounded-[2.5rem] overflow-hidden border border-white/10">
                                <Image
                                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop"
                                    alt="Digital Learning"
                                    fill
                                    className="object-cover brightness-75"
                                />
                                <div className="absolute inset-0 bg-secondary/10" />
                            </div>

                            {/* Legacy Stat Badge */}
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -top-10 right-0 bg-secondary p-10 rounded-[3rem] shadow-glow-secondary z-20 text-slate-950"
                            >
                                <div className="flex flex-col items-center">
                                    <span className="text-7xl font-black leading-none mb-1">35+</span>
                                    <span className="text-[9px] font-black tracking-[0.3em] uppercase">Year Legacy</span>
                                </div>
                            </motion.div>
                        </div>
                        
                        {/* Background Floating Element */}
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
