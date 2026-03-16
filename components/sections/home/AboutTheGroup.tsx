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
            icon: Award,
            title: "Bright Horizon in Education",
            description: "Setting the highest standards in academic achievement and character development"
        },
        {
            icon: Globe,
            title: "Global Perspective",
            description: "Preparing students to thrive in an interconnected, multicultural world"
        },
        {
            icon: Heart,
            title: "Holistic Development",
            description: "Nurturing mind, body, and spirit for well-rounded individuals"
        },
        {
            icon: Shield,
            title: "Values & Ethics",
            description: "Building strong moral foundations and responsible citizenship"
        }
    ];

    return (
        <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}
            />
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                        <Award size={16} className="text-secondary" />
                        ABOUT THE BRIGHT HORIZON GROUP
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black font-heading text-slate-900 mb-6 leading-tight">
                        A Legacy of
                        <br />
                        <span className="text-gradient">Educational Excellence</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        For over three decades, the Bright Horizon Group has been at the forefront of
                        transforming lives through quality education, expanding from a single campus to a
                        network of three world-class institutions.
                    </p>
                </motion.div>

                {/* Founder's Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="max-w-5xl mx-auto glass-card p-8 md:p-12 rounded-3xl shadow-premium">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Founder Image */}
                            <div className="relative">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop"
                                        alt="Founder - Mr. Arun Sharma"
                                        width={500}
                                        height={600}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-gradient-primary text-white p-6 rounded-2xl shadow-glow">
                                    <div className="text-4xl font-black">1989</div>
                                    <div className="text-sm font-medium">Founded</div>
                                </div>
                            </div>

                            {/* Founder's Message */}
                            <div>
                                <h3 className="text-3xl font-black font-heading text-slate-900 mb-4">
                                    Founder's Vision
                                </h3>
                                <div className="w-16 h-1.5 bg-gradient-secondary rounded-full mb-6" />
                                <p className="text-lg text-slate-700 leading-relaxed mb-4 italic">
                                    "Education is the most powerful tool to shape the future. Our vision was to create
                                    not just schools, but centers of excellence that nurture young minds, build character,
                                    and prepare global citizens."
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    What started as a small dream in 1989 has grown into a network of three premier
                                    institutions, each specializing in different educational pathways while maintaining
                                    our core commitment to excellence, innovation, and holistic development.
                                </p>
                                <div className="pt-4 border-t border-slate-200">
                                    <p className="font-bold text-slate-900 text-lg">Mr. Arun Sharma</p>
                                    <p className="text-primary font-medium">Founder & Managing Director</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Mission & Vision */}
                <div className="mb-24 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-gradient-primary text-white shadow-glow relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-[60px]" />
                            <Target size={48} className="mb-6 relative z-10" />
                            <h3 className="text-2xl font-black mb-4 relative z-10">Our Mission</h3>
                            <p className="text-white/90 leading-relaxed relative z-10">
                                To provide world-class education that empowers students with knowledge, skills, and values
                                to excel academically and contribute meaningfully to society while fostering innovation,
                                creativity, and global citizenship.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-gradient-secondary text-white shadow-glow-secondary relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-[60px]" />
                            <Lightbulb size={48} className="mb-6 relative z-10" />
                            <h3 className="text-2xl font-black mb-4 relative z-10">Our Vision</h3>
                            <p className="text-white/90 leading-relaxed relative z-10">
                                To be recognized as India's leading educational institution network, known for academic
                                excellence, innovative teaching methodologies, and producing confident, compassionate leaders
                                who shape the future of our nation and the world.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Group Statistics */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {groupStats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center p-6 rounded-2xl bg-white border-2 border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all"
                            >
                                <stat.icon size={32} className="mx-auto mb-4 text-primary" />
                                <div className="text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
                                <div className="text-sm text-slate-600 font-medium leading-tight">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Journey Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h3 className="text-3xl font-black font-heading text-center text-slate-900 mb-12">
                        Our <span className="text-gradient">Journey</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {milestones.map((milestone, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="relative"
                            >
                                <div className="p-6 rounded-2xl bg-white border-2 border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all h-full">
                                    <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                                        <milestone.icon size={24} className="text-primary" />
                                    </div>
                                    <div className="text-2xl font-black text-primary mb-2">{milestone.year}</div>
                                    <p className="text-slate-700 font-medium leading-relaxed">{milestone.event}</p>
                                </div>
                                {idx < milestones.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Core Values */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-black font-heading text-center text-slate-900 mb-12">
                        Our <span className="text-gradient">Core Values</span>
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coreValues.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 hover:shadow-xl transition-all group"
                            >
                                <div className="inline-flex p-4 rounded-2xl bg-gradient-primary text-white mb-4 group-hover:scale-110 transition-transform">
                                    <value.icon size={28} />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
