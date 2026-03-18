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
        indigo: "from-indigo-500 to-purple-600",
        emerald: "from-emerald-500 to-teal-600",
        orange: "from-orange-500 to-red-600"
    };

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 0)`,
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
                    <span className="inline-flex items-center gap-3 bg-white border border-slate-200 text-slate-500 px-6 py-2.5 rounded-full text-[10px] font-black tracking-[0.3em] mb-8 shadow-sm">
                        <Shield size={14} className="text-primary" />
                        INSTITUTIONAL INTEGRITY
                    </span>
                    <h2 className="text-5xl md:text-9xl font-black font-heading text-slate-900 mb-8 leading-[0.85] tracking-tighter">
                        A Bastion of
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-600 to-secondary">Absolute Trust</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                        Recognized by global tech leaders and governing bodies, we set the gold standard for student safety and academic privacy.
                    </p>
                </motion.div>

                {/* Board Affiliations */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h3 className="text-2xl font-black font-heading text-center text-slate-900 mb-10">
                        Board Affiliations & Recognition
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {affiliations.map((affiliation, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`p-8 rounded-3xl bg-gradient-to-br ${colorClasses[affiliation.color as keyof typeof colorClasses]} text-white shadow-xl hover:shadow-2xl transition-all group text-center`}
                            >
                                <affiliation.icon size={48} className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="text-xl font-black mb-2">{affiliation.title}</h4>
                                <p className="text-white/90 text-sm font-medium">{affiliation.subtitle}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="max-w-4xl mx-auto glass-card p-10 rounded-3xl shadow-premium">
                        <h3 className="text-2xl font-black font-heading text-center text-slate-900 mb-8">
                            Certifications & Accreditations
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {certifications.map((cert, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 transition-all"
                                >
                                    <CheckCircle2 size={24} className="text-secondary flex-shrink-0" />
                                    <span className="text-slate-700 font-bold">{cert}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Infrastructure & Facilities */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-black font-heading text-center text-slate-900 mb-10">
                        World-Class Infrastructure & Facilities
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {facilities.map((facility, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all group"
                            >
                                <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                                    <facility.icon size={28} />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{facility.title}</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">{facility.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 bg-gradient-primary text-white px-8 py-4 rounded-full shadow-glow">
                        <Shield size={24} />
                        <span className="font-bold text-lg">
                            Trusted by 4700+ Families Since 1989
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
