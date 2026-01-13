"use client";

import { motion } from "framer-motion";
import { Award, Users, Globe, Clock, Shield, Target, Heart, Sparkles, GraduationCap, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Header */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero" />
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Floating Orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-[80px]" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-flex items-center gap-2 glass px-6 py-2.5 rounded-full text-white text-sm font-bold tracking-wider mb-6">
                            <GraduationCap size={16} />
                            ESTABLISHED 1989
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading text-white mb-6">
                            About Excellence<br />
                            <span className="text-gradient-secondary">Academy</span>
                        </h1>
                        <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl">
                            A legacy of 35 years in shaping minds, touching lives, and building the future.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-24 space-y-32">
                {/* Principal's Message Section */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
                                alt="Principal"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            viewport={{ once: true }}
                            className="absolute -bottom-6 -right-6 md:bottom-8 md:right-0 bg-gradient-secondary text-white p-6 rounded-2xl shadow-glow-secondary"
                        >
                            <p className="font-black text-xl">Dr. N. Venkateswara Rao</p>
                            <p className="text-sm opacity-90">Principal & Director</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Sparkles size={16} />
                            FROM THE PRINCIPAL'S DESK
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black font-heading text-slate-900 mb-6 leading-tight">
                            Guiding Young Minds<br />
                            <span className="text-gradient">Towards Greatness</span>
                        </h2>

                        <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                            <p>
                                Welcome to Excellence Academy. For over three decades, we have been committed to providing education that goes beyond textbooks. We believe that every child is unique, with infinite potential waiting to be unlocked.
                            </p>
                            <p>
                                Our philosophy blends modern pedagogical methods with traditional values. We strive to create an environment where students grow into confident, compassionate, and responsible global citizens.
                            </p>
                            <p>
                                I invite you to join our community and witness the transformation of your child into a leader of tomorrow.
                            </p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <p className="font-handwriting text-3xl text-primary font-bold italic">
                                N. Venkateswara Rao
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Vision & Mission */}
                <section className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-hero text-white p-10 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden group card-hover"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Target size={150} />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10">
                            <div className="inline-flex p-4 bg-gradient-secondary rounded-2xl shadow-lg mb-8">
                                <Globe size={32} />
                            </div>
                            <h3 className="text-3xl font-black font-heading mb-6">Our Vision</h3>
                            <p className="text-white/80 leading-relaxed text-lg">
                                To be a global leader in education, nurturing students to become responsible, innovative, and compassionate citizens of the world, capable of facing the challenges of the 21st century with integrity.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-primary text-white p-10 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden group card-hover"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Heart size={150} />
                        </div>
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10">
                            <div className="inline-flex p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg mb-8">
                                <Award size={32} />
                            </div>
                            <h3 className="text-3xl font-black font-heading mb-6">Our Mission</h3>
                            <p className="text-white/80 leading-relaxed text-lg">
                                To provide a safe, inclusive, and stimulating environment where every student is empowered to achieve their full potential through academic excellence, creative expression, and personal growth.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Core Values */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Heart size={16} />
                            WHAT WE STAND FOR
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900">
                            Our Core <span className="text-gradient">Values</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: "Integrity", desc: "We uphold honesty and strong moral principles in everything we do.", gradient: "from-violet-500 to-purple-500" },
                            { icon: Users, title: "Inclusivity", desc: "We celebrate diversity and ensure every voice is heard and valued.", gradient: "from-blue-500 to-cyan-500" },
                            { icon: Clock, title: "Discipline", desc: "Fostering self-control and respect for time as foundations of success.", gradient: "from-amber-500 to-orange-500" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all text-center group border border-slate-100 card-hover"
                            >
                                <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg mb-8 group-hover:scale-110 transition-transform`}>
                                    <item.icon size={36} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 rounded-3xl p-12 md:p-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                            Ready to Join Our Family?
                        </h2>
                        <p className="text-slate-600 mb-10 max-w-2xl mx-auto text-lg">
                            Take the first step towards providing your child with the education they deserve.
                        </p>
                        <Link
                            href="/admissions"
                            className="inline-flex items-center gap-3 bg-gradient-primary text-white px-10 py-5 rounded-full font-bold tracking-widest text-sm shadow-glow hover:shadow-lg transition-all btn-premium"
                        >
                            APPLY FOR ADMISSION
                            <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}
