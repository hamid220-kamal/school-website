"use client";

import { motion } from "framer-motion";
import { BookOpen, Download, Calendar, Award, FileText, ChevronRight, Sparkles, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Academics() {
    const levels = [
        { name: "Primary Years", grades: "Grade 1 - 5", desc: "Focus on foundational skills, creativity, and simplified learning through play and exploration.", gradient: "from-emerald-500 to-teal-500" },
        { name: "Middle School", grades: "Grade 6 - 8", desc: "Introduction to specialized subjects, critical thinking, and project-based collaborative learning.", gradient: "from-blue-500 to-cyan-500" },
        { name: "Senior Secondary", grades: "Grade 9 - 12", desc: "Rigorous academic preparation for board exams and competitive entrance tests with career guidance.", gradient: "from-violet-500 to-purple-500" },
    ];

    const downloads = [
        { title: "Academic Calendar 2025-26", type: "PDF", size: "2.4 MB" },
        { title: "Student Handbook", type: "PDF", size: "1.8 MB" },
        { title: "Curriculum Brochure", type: "PDF", size: "3.5 MB" },
        { title: "Exam Schedule - Term 1", type: "PDF", size: "0.5 MB" },
    ];

    const events = [
        { date: "15 OCT", title: "Science Exhibition 2025", desc: "Inter-school science fair showcasing student innovations." },
        { date: "02 NOV", title: "Annual Debate Competition", desc: "Senior wing debate on 'AI in Education'." },
        { date: "10 DEC", title: "Math Olympiad", desc: "National level mathematics competition." },
    ];

    const achievements = [
        { title: "Best CBSE School Award 2025", desc: "Awarded by the Education Council of India." },
        { title: "National Sports Championship", desc: "Our football team secured the 1st runner-up position." },
        { title: "100% Board Results", desc: "Grade 10 and 12 students achieved 100% pass rate." },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero" />
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-[80px]" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-flex items-center gap-2 glass px-6 py-2.5 rounded-full text-white text-sm font-bold tracking-wider mb-6">
                            <BookOpen size={16} />
                            CBSE CURRICULUM
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading text-white mb-6">
                            Academic <span className="text-gradient-secondary">Excellence</span>
                        </h1>
                        <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl">
                            Fostering intellectual curiosity and critical thinking through a comprehensive and innovative curriculum.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-24 space-y-24">
                {/* Curriculum Levels */}
                <section>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
                            <GraduationCap size={16} />
                            OUR PROGRAMS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900">
                            Curriculum <span className="text-gradient">Overview</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {levels.map((level, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl transition-all group card-hover"
                            >
                                <div className={`inline-flex p-4 bg-gradient-to-br ${level.gradient} rounded-2xl text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <BookOpen size={28} />
                                </div>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-slate-900">{level.name}</h3>
                                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">{level.grades}</span>
                                </div>
                                <p className="text-slate-600 leading-relaxed mb-6">{level.desc}</p>
                                <Link href="#" className="flex items-center text-primary font-bold text-sm gap-2 group-hover:gap-3 transition-all">
                                    VIEW SYLLABUS <ChevronRight size={16} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Downloads */}
                <section className="bg-slate-50 p-8 md:p-12 rounded-3xl">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                        <div>
                            <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-4">
                                <Download size={16} />
                                RESOURCES
                            </span>
                            <h2 className="text-3xl font-black font-heading text-slate-900">
                                Downloads & <span className="text-gradient">Materials</span>
                            </h2>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {downloads.map((file, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-primary hover:shadow-lg transition-all cursor-pointer group"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <div className="p-3 bg-gradient-primary rounded-xl text-white group-hover:scale-110 transition-transform">
                                        <FileText size={20} />
                                    </div>
                                    <span className="bg-slate-100 text-slate-500 text-xs font-bold px-2 py-1 rounded">{file.type}</span>
                                </div>
                                <h4 className="font-bold text-slate-800 mb-1 group-hover:text-primary transition-colors">{file.title}</h4>
                                <span className="text-xs text-slate-400">{file.size}</span>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Events & Achievements */}
                <section className="grid lg:grid-cols-2 gap-12">
                    {/* Events */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-gradient-primary rounded-xl text-white">
                                <Calendar size={24} />
                            </div>
                            <h2 className="text-2xl font-black font-heading text-slate-900">Upcoming Events</h2>
                        </div>
                        <div className="space-y-4">
                            {events.map((event, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 items-center group hover:shadow-lg transition-all"
                                >
                                    <div className="bg-gradient-primary text-white p-4 rounded-2xl text-center min-w-[70px]">
                                        <div className="font-black text-lg">{event.date.split(' ')[0]}</div>
                                        <div className="text-xs font-bold opacity-80">{event.date.split(' ')[1]}</div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{event.title}</h4>
                                        <p className="text-sm text-slate-500">{event.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-gradient-secondary rounded-xl text-white">
                                <Award size={24} />
                            </div>
                            <h2 className="text-2xl font-black font-heading text-slate-900">Recent Achievements</h2>
                        </div>
                        <div className="space-y-4">
                            {achievements.map((ach, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 items-start group hover:shadow-lg transition-all"
                                >
                                    <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                                        <Award size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{ach.title}</h4>
                                        <p className="text-sm text-slate-500">{ach.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
