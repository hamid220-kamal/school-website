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
        <section className="py-32 bg-gradient-hero relative overflow-hidden">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Floating Orbs */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-flex items-center gap-2 glass text-white/90 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                        <Award size={16} className="text-secondary" />
                        ACHIEVEMENTS & EXCELLENCE
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black font-heading text-white mb-6 leading-tight">
                        Proven Track Record of
                        <br />
                        <span className="text-gradient-secondary">Academic Excellence</span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                        Our commitment to excellence is reflected in our outstanding achievements
                        across all three campuses.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {stats.map((stat, idx) => (
                        <StatCard key={idx} stat={stat} index={idx} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-white/60 text-sm tracking-wider mb-6">
                        Data based on combined performance across all three campuses (2023-24)
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
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

        const duration = 2000;
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

    const colorClasses = {
        emerald: "from-emerald-500 to-teal-600 text-emerald-400",
        amber: "from-amber-500 to-orange-600 text-amber-400",
        indigo: "from-indigo-500 to-purple-600 text-indigo-400",
        cyan: "from-cyan-500 to-blue-600 text-cyan-400",
        purple: "from-purple-500 to-pink-600 text-purple-400",
        rose: "from-rose-500 to-pink-600 text-rose-400"
    };

    const colors = colorClasses[stat.color as keyof typeof colorClasses];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group"
        >
            <div className="glass-dark p-8 rounded-3xl hover:bg-white/5 transition-all duration-500 h-full relative overflow-hidden">
                {/* Icon with Gradient Background */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${colors.split(' ')[0]} ${colors.split(' ')[1]} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <stat.icon size={32} className="text-white" />
                </div>

                {/* Animated Number */}
                <div className="mb-3">
                    <span className="text-5xl md:text-6xl font-black text-white tracking-tight">
                        {count.toLocaleString()}
                    </span>
                    <span className={`text-4xl md:text-5xl font-black ${colors.split(' ')[2]}`}>
                        {stat.suffix}
                    </span>
                </div>

                {/* Label */}
                <p className="text-white/70 font-medium tracking-wide leading-relaxed">
                    {stat.label}
                </p>

                {/* Decorative Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.split(' ')[0]} ${colors.split(' ')[1]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </div>
        </motion.div>
    );
}
