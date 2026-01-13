"use client";

import { motion } from "framer-motion";
import { Heart, Brain, Trophy, Star, Sparkles, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export function WhyUs() {
    const reasons = [
        {
            icon: Heart,
            title: "Our Values",
            desc: "Rooted in integrity, respect, and compassion — nurturing students who grow in character.",
            gradient: "from-rose-500 to-pink-500"
        },
        {
            icon: Brain,
            title: "Learning Philosophy",
            desc: "Education beyond books — blending academics, creativity, and real-world skills.",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: Trophy,
            title: "Award-Winning",
            desc: "Recognized for academic excellence and innovation across national platforms.",
            gradient: "from-amber-500 to-orange-500"
        },
        {
            icon: Star,
            title: "The 5C Framework",
            desc: "Curiosity, Creativity, Confidence, Compassion, and Character guide every learner.",
            gradient: "from-violet-500 to-purple-500"
        },
        {
            icon: Sparkles,
            title: "World-Class Facilities",
            desc: "Smart classrooms, modern labs, sports arenas, and creative spaces for all-round growth.",
            gradient: "from-emerald-500 to-teal-500"
        },
        {
            icon: Award,
            title: "Top CBSE School",
            desc: "Trusted by parents and admired by educators across the region since 1989.",
            gradient: "from-indigo-500 to-blue-500"
        }
    ];

    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Sparkles size={16} />
                            WHY CHOOSE US
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black font-heading text-slate-900 mb-6">
                            Nurturing Excellence<br />
                            <span className="text-gradient">Since 1989</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            We don't just teach; we inspire. At Excellence Academy, we create an environment
                            where curiosity thrives and dreams take flight.
                        </p>
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 card-hover overflow-hidden"
                        >
                            {/* Gradient Hover Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                            {/* Icon */}
                            <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                <feature.icon size={28} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                {feature.desc}
                            </p>

                            {/* Learn More Link */}
                            <div className="flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300">
                                Learn More
                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Link
                        href="/about"
                        className="inline-flex items-center gap-3 bg-gradient-primary text-white px-10 py-4 rounded-full font-bold tracking-widest text-sm shadow-glow hover:shadow-lg transition-all btn-premium"
                    >
                        DISCOVER MORE ABOUT US
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
