"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, Award, Building } from "lucide-react";
import Image from "next/image";

export function WelcomeSection() {
    const highlights = [
        { icon: GraduationCap, value: "35+", label: "Years" },
        { icon: Users, value: "50K+", label: "Alumni" },
        { icon: Award, value: "100+", label: "Awards" },
        { icon: Building, value: "3", label: "Campuses" }
    ];

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #4f46e5 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Image Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="relative h-48 rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400&auto=format&fit=crop"
                                        alt="Campus"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&auto=format&fit=crop"
                                        alt="Learning"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=400&auto=format&fit=crop"
                                        alt="Students"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-48 rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=400&auto=format&fit=crop"
                                        alt="Activities"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Experience Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            viewport={{ once: true }}
                            className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-gradient-primary text-white p-6 rounded-3xl shadow-glow"
                        >
                            <div className="text-5xl font-black">35+</div>
                            <div className="text-sm font-medium tracking-wider opacity-90">YEARS OF<br />EXCELLENCE</div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
                            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                            ESTABLISHED 1989
                        </span>

                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6 leading-tight">
                            Welcome to<br />
                            <span className="text-gradient">Excellence Academy</span>
                        </h2>

                        <div className="w-20 h-1.5 bg-gradient-secondary rounded-full mb-8" />

                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            We are more than just a school; we are a community dedicated to the pursuit of knowledge,
                            the development of character, and the nurturing of future leaders. Our holistic approach
                            ensures every child discovers their unique potential.
                        </p>

                        <p className="text-slate-500 leading-relaxed mb-10">
                            With state-of-the-art facilities, passionate educators, and a curriculum that balances
                            traditional values with modern innovation, we prepare students not just for exams,
                            but for life.
                        </p>

                        {/* Stats Row */}
                        <div className="grid grid-cols-4 gap-4">
                            {highlights.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center p-4 rounded-2xl bg-slate-50 hover:bg-primary/5 transition-colors group"
                                >
                                    <item.icon size={24} className="mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                                    <div className="text-2xl font-black text-slate-900">{item.value}</div>
                                    <div className="text-xs text-slate-500 font-medium tracking-wider">{item.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
