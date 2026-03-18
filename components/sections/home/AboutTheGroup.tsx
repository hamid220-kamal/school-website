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
                    className="text-center mb-24"
                >
                    <span className="inline-flex items-center gap-3 bg-white border border-slate-200 text-slate-500 px-6 py-2.5 rounded-full text-[10px] font-black tracking-[0.3em] mb-8 shadow-sm">
                        <Award size={14} className="text-primary" />
                        INSTITUTIONAL LEGACY
                    </span>
                    <h2 className="text-5xl md:text-8xl font-black font-heading text-slate-900 mb-8 leading-[0.9] tracking-tighter">
                        Crafting the
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Future of Minds</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                        Since 1989, Bright Horizon has redefined education. We aren't just a school; we are a tri-campus powerhouse of innovation.
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
                <div className="mb-32 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-12 rounded-[3.5rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden group border border-white/5"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <Target size={48} className="mb-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                            <h3 className="text-3xl font-black mb-6 tracking-tight">The Mission</h3>
                            <p className="text-slate-400 leading-relaxed text-lg font-medium">
                                To engineer world-class educational ecosystems that empower students with the digital fluency and moral gravity needed to lead in the 21st century.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-12 rounded-[3.5rem] bg-white text-slate-900 shadow-2xl relative overflow-hidden group border border-slate-100"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <Lightbulb size={48} className="mb-8 text-secondary group-hover:scale-110 transition-transform duration-500" />
                            <h3 className="text-3xl font-black mb-6 tracking-tight">The Vision</h3>
                            <p className="text-slate-500 leading-relaxed text-lg font-medium">
                                To establish Bright Horizon as the global benchmark for institutional excellence, where technology and humanity converge to create future leaders.
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
