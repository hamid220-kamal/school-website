"use client";

import { motion } from "framer-motion";
import { Shield, Award, Bus, Wifi, Camera, Utensils, BookOpen, Users, CheckCircle2, Zap } from "lucide-react";

export function TrustSection() {
    const affiliations = [
        {
            icon: Award,
            title: "CBSE Affiliated",
            subtitle: "Bright Horizon (North)",
            color: "indigo"
        },
        {
            icon: Award,
            title: "Cambridge International",
            subtitle: "Cherry Blossom (International)",
            color: "emerald"
        },
        {
            icon: Award,
            title: "State Board Recognized",
            subtitle: "Lotus Veda (Public School)",
            color: "orange"
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

    const colorClasses = {
        indigo: "from-primary to-primary-dark",
        emerald: "from-emerald-500 to-teal-600",
        orange: "from-secondary to-secondary-dark"
    };

    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden">
            {/* Cinematic Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.03),transparent)] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(251,191,36,0.03),transparent)] pointer-events-none" />
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-32"
                >
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <span className="h-[1px] w-8 bg-secondary/50" />
                        <span className="text-[10px] font-black tracking-[0.4em] text-secondary uppercase">Institutional Integrity</span>
                        <span className="h-[1px] w-8 bg-secondary/50" />
                    </div>
                    <h2 className="text-5xl md:text-[8rem] font-black font-heading text-white mb-12 leading-[0.8] tracking-tighter">
                        Bastion of
                        <br />
                        <span className="text-gradient-secondary">Absolute Trust</span>
                    </h2>
                    <p className="text-xl text-white/30 max-w-2xl mx-auto leading-relaxed font-medium">
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
                            <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-12 rounded-[3.5rem] hover:bg-white/[0.05] transition-all duration-700 h-full flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-[2rem] bg-white/5 flex items-center justify-center text-secondary mb-10 group-hover:scale-110 group-hover:bg-secondary group-hover:text-slate-900 transition-all duration-500 shadow-2xl">
                                    <affiliation.icon size={42} />
                                </div>
                                <h4 className="text-2xl font-black text-white mb-4 tracking-tighter">{affiliation.title}</h4>
                                <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">{affiliation.subtitle}</p>
                            </div>
                            {/* Decorative Glow */}
                            <div className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>

                {/* Affiliation Marquee - Moving Logos */}
                <div className="relative w-screen -ml-[50vw] left-1/2 overflow-hidden py-24 mb-32 border-y border-white/5 bg-white/[0.01]">
                    <div className="flex gap-20 animate-infinite-scroll-slow items-center whitespace-nowrap">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-24 shrink-0 px-12">
                                {certifications.map((cert, idx) => (
                                    <div key={idx} className="flex items-center gap-6">
                                        <div className="w-2 h-2 rounded-full bg-secondary" />
                                        <span className="text-white/40 text-[11px] font-black uppercase tracking-[0.4em] transition-colors hover:text-white cursor-default">
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
                    <div className="mb-16 flex items-center justify-between border-b border-white/5 pb-8">
                        <h3 className="text-3xl font-black text-white tracking-tighter">
                            World-Class <span className="text-secondary">Protocol</span>
                        </h3>
                        <div className="flex items-center gap-3">
                            <Zap size={16} className="text-secondary animate-pulse" />
                            <span className="text-[9px] font-black text-white/30 tracking-[0.3em] uppercase">Tactical Infrastructure Grid</span>
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
                                className="p-8 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-all group"
                            >
                                <div className="p-4 inline-flex rounded-2xl bg-white/5 text-secondary mb-6 group-hover:scale-110 transition-transform">
                                    <facility.icon size={24} />
                                </div>
                                <h4 className="text-lg font-black text-white mb-2 tracking-tight">{facility.title}</h4>
                                <p className="text-xs text-white/30 leading-relaxed font-medium">{facility.description}</p>
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
                            <div className="absolute inset-0 bg-secondary blur-3xl opacity-20 animate-pulse" />
                            <div className="relative bg-slate-900 border border-white/10 px-12 py-8 rounded-[3rem] shadow-2xl">
                                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] mb-4 block">Institutional Legacy</span>
                                <div className="flex items-center gap-4 text-4xl font-black text-white tracking-tighter leading-none">
                                    <CheckCircle2 size={32} className="text-secondary" />
                                    <span>Since 1989</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Institutional Integrity System v2.0</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
