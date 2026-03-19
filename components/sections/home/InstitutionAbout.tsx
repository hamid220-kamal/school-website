"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Lightbulb, Heart, Target, CheckCircle2, ShieldCheck } from "lucide-react";

export function InstitutionAbout() {
    const values = [
        {
            icon: ShieldCheck,
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
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Soft Background Accents */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(29,112,214,0.03),transparent)] pointer-events-none" />
            
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
                            <span className="h-[1px] w-12 bg-primary" />
                            <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">The Foundation</span>
                        </div>

                        <h2 className="text-5xl md:text-8xl font-black font-heading text-slate-950 mb-10 leading-[0.85] tracking-tighter">
                            Architecting
                            <br />
                            <span className="text-gradient">Future Legacies</span>
                        </h2>

                        <p className="text-xl text-slate-500 leading-relaxed mb-12 font-medium">
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
                                    className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-100 mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <value.icon size={26} className="group-hover:scale-110 transition-transform" />
                                    </div>
                                    <h3 className="text-xl font-black text-slate-950 mb-3 tracking-tight">{value.title}</h3>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-loose">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Impact Metrics */}
                        <div className="flex flex-wrap gap-8 pt-10 border-t border-slate-100">
                            {achievements.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.5 + idx * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 size={16} className="text-primary" />
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item}</span>
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
                            <div className="col-span-8 relative h-[500px] rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-slate-100">
                                <Image
                                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop"
                                    alt="Campus Architecture"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Secondary Technical Frame */}
                            <div className="col-span-4 relative h-[300px] rounded-[3rem] overflow-hidden border border-slate-100">
                                <Image
                                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop"
                                    alt="Digital Learning"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/10" />
                            </div>

                            {/* Legacy Stat Badge */}
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -top-10 right-0 bg-primary p-12 rounded-[3.5rem] shadow-glow z-20 text-white"
                            >
                                <div className="flex flex-col items-center">
                                    <span className="text-7xl font-black leading-none mb-2 tracking-tighter">35+</span>
                                    <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-80">Year Legacy</span>
                                </div>
                            </motion.div>
                        </div>
                        
                        {/* Background Floating Element */}
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
