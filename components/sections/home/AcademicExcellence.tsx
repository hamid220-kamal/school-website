"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Users, Trophy, GraduationCap, Globe, BookOpen, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Stat {
    icon: any;
    value: number;
    suffix: string;
    label: string;
    color: string;
}

export function AcademicExcellence() {
    const stats: Stat[] = [
        { icon: TrendingUp, value: 98, suffix: "%", label: "Overall Success Rate", color: "emerald" },
        { icon: Trophy, value: 150, suffix: "+", label: "National Awards", color: "amber" },
        { icon: GraduationCap, value: 4700, suffix: "+", label: "Alumni Worldwide", color: "indigo" },
        { icon: Globe, value: 25, suffix: "+", label: "Countries Represented", color: "cyan" },
        { icon: Users, value: 250, suffix: "+", label: "Expert Faculty", color: "purple" },
        { icon: BookOpen, value: 95, suffix: "%", label: "University Placements", color: "rose" }
    ];

    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden">
            {/* Background Pattern - Technical/Data Feel */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-secondary" />
                        <span className="text-[10px] font-black tracking-[0.4em] text-secondary uppercase">Institutional Intelligence</span>
                        <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-secondary" />
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black font-heading text-white mb-8 tracking-tighter leading-none">
                        Our Impact in
                        <br />
                        <span className="text-gradient-secondary">Numbers</span>
                    </h2>
                    <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-medium">
                        Real-time performance metrics across our global network of three campuses, benchmarked against international standards.
                    </p>
                </motion.div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {stats.map((stat, idx) => (
                        <StatDashboardCard key={idx} stat={stat} index={idx} />
                    ))}
                </div>

                {/* Verified Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex items-center justify-center gap-2 mt-20 opacity-40 hover:opacity-100 transition-opacity"
                >
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-bold text-white uppercase tracking-widest">Data Verified for Academic Session 2026-27</span>
                </motion.div>
            </div>
        </section>
    );
}

function StatDashboardCard({ stat, index }: { stat: Stat; index: number }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;
        const duration = 2500;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= stat.value) {
                setCount(stat.value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [isVisible, stat.value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
        >
            <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-10 rounded-[2.5rem] hover:bg-white/[0.05] transition-all duration-500 relative overflow-hidden h-full">
                {/* Visual Progress Ring Backdrop */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 rounded-full border border-white/[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
                
                <div className="flex flex-col h-full relative z-10">
                    <div className="flex items-start justify-between mb-10">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-white/5">
                            <stat.icon size={28} className="text-secondary" />
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-[9px] font-black text-secondary tracking-widest uppercase">Verified Stat</span>
                            <div className="h-[2px] w-4 bg-secondary mt-1" />
                        </div>
                    </div>

                    <div className="mt-auto">
                        <div className="flex items-baseline gap-1 mb-2">
                            <span className="text-6xl md:text-7xl font-black text-white tracking-tighter">
                                {count.toLocaleString()}
                            </span>
                            <span className="text-2xl font-black text-secondary">
                                {stat.suffix}
                            </span>
                        </div>
                        
                        <h3 className="text-white/40 text-xs font-black uppercase tracking-[0.2em] mb-4">
                            {stat.label}
                        </h3>

                        {/* Visual Skill-Line/Progress */}
                        <div className="w-full h-[1px] bg-white/5 overflow-hidden">
                            <motion.div 
                                initial={{ x: "-100%" }}
                                animate={isVisible ? { x: 0 } : { x: "-100%" }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                className="w-full h-full bg-gradient-to-r from-transparent via-secondary to-transparent"
                            />
                        </div>
                    </div>
                </div>

                {/* Glowing Corner Background */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-all duration-700" />
            </div>
        </motion.div>
    );
}
