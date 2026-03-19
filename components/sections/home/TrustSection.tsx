"use client";

import { motion } from "framer-motion";
import { Shield, Award, Bus, Wifi, Camera, Utensils, BookOpen, Users, CheckCircle2, Zap } from "lucide-react";

export function TrustSection() {
    const affiliations = [
        {
            icon: Award,
            title: "CBSE Affiliated",
            subtitle: "Bright Horizon (North)",
            color: "primary"
        },
        {
            icon: Award,
            title: "Cambridge International",
            subtitle: "Cherry Blossom (International)",
            color: "secondary"
        },
        {
            icon: Award,
            title: "State Board Recognized",
            subtitle: "Lotus Veda (Public School)",
            color: "accent"
        }
    ];

    const certifications = [
        "ISO 9001:2015 Institutional Excellence",
        "Oracle Certified Cloud Infrastructure",
        "Google Cloud AI Foundation Partner",
        "IBM Enterprise Design Thinking Standards",
        "TCS Cybersecurity Certified Environment",
        "Safety First Data Protection Award"
    ];

    const facilities = [
        {
            icon: Shield,
            title: "Cybersecurity First",
            description: "Advanced data encryption for all student records & privacy."
        },
        {
            icon: Wifi,
            title: "Smart TV Ecosystem",
            description: "250+ Interactive 4K displays across all learning hubs."
        },
        {
            icon: Camera,
            title: "AI Surveillance",
            description: "Intelligent monitoring for proactive student safety."
        },
        {
            icon: Bus,
            title: "Smart Transit",
            description: "Real-time GPS tracking and instant parent alerts."
        },
        {
            icon: Utensils,
            title: "Premium Nutrition",
            description: "Chef-curated, hygienic meals for optimal health."
        },
        {
            icon: BookOpen,
            title: "Cloud Library",
            description: "Access to 5M+ digital papers & global resources."
        },
        {
            icon: Users,
            title: "GenZ Faculty",
            description: "Young, tech-fluent mentors driving the future."
        },
        {
            icon: Zap,
            title: "Future Sports",
            description: "Robotics labs & state-of-the-art physical arenas."
        }
    ];

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Soft Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(29,112,214,0.03),transparent)] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(251,175,23,0.03),transparent)] pointer-events-none" />
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-32"
                >
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <span className="h-[1px] w-12 bg-primary/30" />
                        <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">Institutional Integrity</span>
                        <span className="h-[1px] w-12 bg-primary/30" />
                    </div>
                    <h2 className="text-5xl md:text-[8rem] font-black font-heading text-slate-950 mb-12 leading-[0.8] tracking-tighter">
                        Bastion of
                        <br />
                        <span className="text-gradient">Absolute Trust</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                        Recognized by global governing bodies, we set the gold standard for student safety and academic privacy.
                    </p>
                </motion.div>

                {/* Board Affiliations - High-End Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32">
                    {affiliations.map((affiliation, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative"
                        >
                            <div className="bg-slate-50 border border-slate-100 p-12 rounded-[3.5rem] hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 h-full flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-[2rem] bg-white shadow-sm flex items-center justify-center text-primary mb-10 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <affiliation.icon size={42} />
                                </div>
                                <h4 className="text-2xl font-black text-slate-950 mb-4 tracking-tighter">{affiliation.title}</h4>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">{affiliation.subtitle}</p>
                            </div>
                            {/* Decorative Glow */}
                            <div className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>

                {/* Affiliation Marquee - Moving Logos */}
                <div className="relative w-screen -ml-[50vw] left-1/2 overflow-hidden py-16 mb-32 border-y border-slate-100 bg-slate-50/50">
                    <div className="flex gap-24 animate-infinite-scroll-slow items-center whitespace-nowrap">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-24 shrink-0 px-12">
                                {certifications.map((cert, idx) => (
                                    <div key={idx} className="flex items-center gap-6">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span className="text-slate-400 text-[11px] font-black uppercase tracking-[0.4em] transition-colors hover:text-slate-950 cursor-default">
                                            {cert}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Infrastructure Grid - Tactical Design */}
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 flex items-center justify-between border-b border-slate-100 pb-8">
                        <h3 className="text-3xl font-black text-slate-950 tracking-tighter">
                            World-Class <span className="text-primary">Protocol</span>
                        </h3>
                        <div className="flex items-center gap-3">
                            <Zap size={16} className="text-primary animate-pulse" />
                            <span className="text-[9px] font-black text-slate-400 tracking-[0.3em] uppercase">Tactical Infrastructure Grid</span>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {facilities.map((facility, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                    <facility.icon size={22} />
                                </div>
                                <h4 className="text-xl font-black text-slate-950 mb-3 tracking-tight">{facility.title}</h4>
                                <p className="text-xs text-slate-400 leading-relaxed font-medium">{facility.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* High-End Trust Seal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 text-center"
                >
                    <div className="inline-flex flex-col items-center gap-6">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/10 blur-3xl opacity-20 animate-pulse" />
                            <div className="relative bg-white border border-slate-100 px-16 py-10 rounded-[3.5rem] shadow-[0_25px_80px_rgba(0,0,0,0.05)]">
                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] mb-4 block">Institutional Legacy</span>
                                <div className="flex items-center gap-5 text-4xl font-black text-slate-950 tracking-tighter leading-none italic">
                                    <CheckCircle2 size={36} className="text-primary" />
                                    <span>Since 1989</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Institutional Integrity System v3.2</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
