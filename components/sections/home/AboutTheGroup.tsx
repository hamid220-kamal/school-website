"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Globe, Users, TrendingUp, BookOpen, Target, Heart, Lightbulb, Shield, CheckCircle2 } from "lucide-react";

export function AboutTheGroup() {
    const milestones = [
        { year: "1989", event: "Foundation of Bright Horizon", icon: Target },
        { year: "2005", event: "International Campus Launched", icon: Globe },
        { year: "2015", event: "Technology-Focused Campus Opened", icon: Lightbulb },
        { year: "2024", event: "4700+ Students Across 3 Campuses", icon: Users }
    ];

    const groupStats = [
        { icon: Users, value: "4700+", label: "Students Across All Campuses" },
        { icon: Award, value: "35+", label: "Years of Bright Horizon" },
        { icon: BookOpen, value: "250+", label: "Expert Faculty Members" },
        { icon: TrendingUp, value: "98%", label: "Overall Success Rate" }
    ];

    const coreValues = [
        {
            icon: Target,
            title: "Precision Excellence",
            description: "Setting the highest standards in academic achievement and character development."
        },
        {
            icon: Globe,
            title: "Global Reach",
            description: "Preparing students to thrive in an interconnected, multicultural world."
        },
        {
            icon: Lightbulb,
            title: "Smart Innovation",
            description: "Nurturing 21st-century thinkers with cutting-edge Smart TV integrated learning."
        },
        {
            icon: Shield,
            title: "Moral Integrity",
            description: "Building strong moral foundations and responsible citizenship for a better future."
        }
    ];

    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden">
            {/* Cinematic Background Accents */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(251,191,36,0.05),transparent)] pointer-events-none" />
            
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
                        <span className="text-[10px] font-black tracking-[0.4em] text-secondary uppercase">The Educational Powerhouse</span>
                        <span className="h-[1px] w-8 bg-secondary/50" />
                    </div>
                    <h2 className="text-5xl md:text-[8rem] font-black font-heading text-white mb-12 leading-[0.8] tracking-tighter">
                        Institutional
                        <br />
                        <span className="text-gradient-secondary">Odyssey</span>
                    </h2>
                    <p className="text-xl text-white/30 max-w-2xl mx-auto leading-relaxed font-medium">
                        Since 1989, we have rewritten the educational narrative. A tri-campus legacy defined by relentless innovation and academic mastery.
                    </p>
                </motion.div>

                {/* Founder's Vision - Cinematic Legacy */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="max-w-6xl mx-auto bg-white/[0.01] backdrop-blur-3xl border border-white/5 p-12 lg:p-24 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                        {/* Background Watermark */}
                        <div className="absolute top-10 right-10 text-[10rem] font-black text-white/[0.02] leading-none pointer-events-none select-none">
                            1989
                        </div>
                        
                        <div className="grid lg:grid-cols-12 gap-20 items-center relative z-10">
                            {/* Founder Image & Stat */}
                            <div className="lg:col-span-5 relative group">
                                <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/10 aspect-[4/5]">
                                    <Image
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop"
                                        alt="Founder - Mr. Arun Sharma"
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 brightness-75 group-hover:brightness-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                                </div>
                                <div className="absolute -bottom-10 -right-10 bg-secondary px-10 py-8 rounded-[2.5rem] shadow-glow-secondary z-20 text-slate-950">
                                    <div className="flex flex-col items-center">
                                        <span className="text-5xl font-black leading-none mb-1">35+</span>
                                        <span className="text-[8px] font-black tracking-[0.3em] uppercase">Year Legacy</span>
                                    </div>
                                </div>
                            </div>

                            {/* Founder's Message Content */}
                            <div className="lg:col-span-7">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-[2px] bg-secondary" />
                                    <h3 className="text-3xl font-black text-white tracking-tighter italic">"Visionaries see the invisible."</h3>
                                </div>
                                <p className="text-2xl text-white/50 leading-relaxed mb-10 font-medium">
                                    "Our goal was never just to build schools. It was to build <strong>centers of institutional gravity</strong>—places where the next generation of global leaders discover their absolute potential."
                                </p>
                                <div className="space-y-6 mb-12">
                                    <p className="text-white/30 leading-relaxed">
                                        What began as a singular dream has evolved into a powerhouse tri-campus network. Each institution is a dedicated hub of specialized excellence, unified by a singular commitment to elite standards.
                                    </p>
                                </div>
                                <div className="pt-10 border-t border-white/5 flex items-center justify-between">
                                    <div>
                                        <p className="text-2xl font-black text-white tracking-widest uppercase">Mr. Arun Sharma</p>
                                        <p className="text-[10px] font-black text-secondary tracking-[0.4em] uppercase mt-2">Founder & Managing Director</p>
                                    </div>
                                    <div className="opacity-20 hover:opacity-100 transition-opacity cursor-default hidden md:block">
                                        <Image src="/signature.png" alt="Signature" width={120} height={60} className="invert" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Core Commands - Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-32">
                    {[
                        { icon: Target, title: "The Institutional Mission", color: "text-primary", desc: "To engineer elite educational ecosystems where digital mastery and traditional discipline converge to create future global leaders.", bg: "bg-white/[0.02]" },
                        { icon: Lightbulb, title: "The Global Vision", color: "text-secondary", desc: "To establish Bright Horizon as the worldwide benchmark for institutional excellence, setting the gold standard for G-6 to G-12 academic mastery.", bg: "bg-white/[0.02]" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`${item.bg} border border-white/5 p-16 rounded-[4rem] group hover:bg-white/[0.04] transition-all duration-700`}
                        >
                            <div className="w-20 h-20 rounded-[1.8rem] bg-white/5 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-secondary group-hover:text-slate-950 transition-all duration-500">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-3xl font-black text-white mb-6 tracking-tighter">{item.title}</h3>
                            <p className="text-white/30 text-xl leading-relaxed font-medium">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Tactical Stats Marquee */}
                <div className="w-screen -ml-[50vw] left-1/2 relative overflow-hidden py-16 border-y border-white/5 bg-white/[0.01] mb-32">
                    <div className="flex justify-around items-center px-12">
                        {groupStats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <span className="text-5xl font-black text-white mb-2 tracking-tighter">{stat.value}</span>
                                <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em] text-center">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Milestone Protocol - Timeline Section */}
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-20">
                        <h3 className="text-4xl font-black text-white tracking-tighter">Institutional <span className="text-secondary">Milestones</span></h3>
                        <div className="flex items-center gap-3">
                            <TrendingUp size={16} className="text-secondary" />
                            <span className="text-[9px] font-black text-white/30 tracking-[0.4em] uppercase px-4 py-2 bg-white/5 rounded-full">Evolution Log v3.0</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {milestones.map((milestone, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/[0.01] border border-white/5 p-10 rounded-[3rem] hover:bg-white/[0.03] transition-all group h-full flex flex-col items-start"
                            >
                                <div className="text-5xl font-black text-white/10 group-hover:text-secondary transition-colors leading-none mb-10 tracking-tighter">
                                    {milestone.year}
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5 text-secondary mb-8 group-hover:scale-110 transition-transform">
                                    <milestone.icon size={22} />
                                </div>
                                <p className="text-sm font-black text-white/40 uppercase tracking-widest mt-auto leading-relaxed group-hover:text-white transition-colors">
                                    {milestone.event}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
