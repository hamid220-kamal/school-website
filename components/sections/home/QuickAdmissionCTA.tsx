"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Download, Phone, Sparkles } from "lucide-react";
import { useState } from "react";
export function QuickAdmissionCTA() {
    return (
        <>
            {/* Main CTA Section - The Gateway */}
            <section className="py-32 bg-slate-950 relative overflow-hidden">
                {/* Cinematic Background Accents */}
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent)] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(251,191,36,0.08),transparent)] pointer-events-none" />
                
                {/* Technical Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto text-center">
                        {/* Elite Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="mb-14"
                        >
                            <span className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-2xl border border-white/10 text-white px-8 py-3 rounded-full text-[10px] font-black tracking-[0.4em] uppercase group cursor-default">
                                <Sparkles size={16} className="text-secondary animate-pulse" />
                                <span className="group-hover:text-secondary transition-colors transition-duration-500">Admissions Portal 2026-27 Active</span>
                            </span>
                        </motion.div>

                        {/* Main Title - The Gateway Statement */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-[10rem] font-black font-heading text-white mb-16 leading-[0.8] tracking-tighter"
                        >
                            Secure Your
                            <br />
                            <span className="text-gradient-secondary">Legacy</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-3xl text-white/40 mb-20 max-w-4xl mx-auto leading-tight font-medium tracking-tight"
                        >
                            Entrance into our tri-campus network is by merit and vision. 
                            <span className="text-white block mt-6 font-black uppercase text-sm tracking-[0.3em]">Institutional Evaluation in Progress.</span>
                        </motion.p>

                        {/* Tiered Application Controls */}
                        <div className="grid md:grid-cols-12 gap-6 max-w-5xl mx-auto">
                            {/* Primary Action - Major Card */}
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="md:col-span-12 lg:col-span-7 group"
                            >
                                <Link
                                    href="/admissions"
                                    className="block h-full bg-white relative overflow-hidden p-12 rounded-[3rem] shadow-2xl transition-all duration-700 hover:-translate-y-2"
                                >
                                    <div className="relative z-10 flex flex-col items-start text-left h-full">
                                        <div className="w-16 h-16 rounded-3xl bg-slate-900 text-white flex items-center justify-center mb-10 group-hover:bg-secondary transition-colors duration-500 shadow-xl">
                                            <Calendar size={28} />
                                        </div>
                                        <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Start Your Formal Application</h3>
                                        <p className="text-slate-500 font-medium mb-8">Estimated completion time: 12 minutes. Requires academic transcripts.</p>
                                        <div className="mt-auto flex items-center gap-4 text-slate-900 font-extrabold text-xs tracking-widest uppercase group-hover:gap-6 transition-all duration-500">
                                            Enter Gateway
                                            <ArrowRight size={20} className="text-secondary" />
                                        </div>
                                    </div>
                                    {/* Animated Background Icon */}
                                    <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                        <Sparkles size={300} className="text-slate-900" />
                                    </div>
                                </Link>
                            </motion.div>

                            {/* Secondary Actions - Stacked Cards */}
                            <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-6">
                                {[
                                    { icon: Download, title: "Global Prospectus", desc: "Digital Portfolio 2026", color: "bg-white/5" },
                                    { icon: Phone, title: "Directorate Access", desc: "Priority Admissions Line", color: "bg-secondary" }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + (idx * 0.1) }}
                                        className="h-full"
                                    >
                                        <Link
                                            href={idx === 1 ? "/contact" : "/admissions"}
                                            className={`block p-8 rounded-[2.5rem] border border-white/10 h-full backdrop-blur-xl transition-all duration-500 hover:bg-white/10 group ${item.color === 'bg-secondary' ? 'bg-secondary' : 'bg-white/5'}`}
                                        >
                                            <div className="flex items-center gap-6">
                                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 ${item.color === 'bg-secondary' ? 'bg-white text-secondary' : 'bg-white/10 text-white'}`}>
                                                    <item.icon size={22} />
                                                </div>
                                                <div className="text-left">
                                                    <h4 className={`font-black tracking-tight ${item.color === 'bg-secondary' ? 'text-white' : 'text-white'}`}>{item.title}</h4>
                                                    <p className={`text-[10px] font-bold uppercase tracking-widest ${item.color === 'bg-secondary' ? 'text-white/80' : 'text-white/40'}`}>{item.desc}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Live Counter & Verified Stat */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800" />
                                    ))}
                                </div>
                                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">140+ Active Applicants Today</span>
                            </div>
                            <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Live Admission Cycle Security Verified</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Floating Action Badge - Desktop */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 }}
                className="fixed bottom-10 right-10 z-50 hidden md:block"
            >
                <Link
                    href="/admissions"
                    className="group bg-secondary text-white p-5 rounded-full shadow-glow-secondary hover:shadow-2xl transition-all flex items-center gap-3 font-bold text-sm"
                >
                    <Calendar size={24} className="group-hover:rotate-12 transition-transform" />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap px-0 group-hover:px-4 font-black tracking-widest uppercase text-[10px]">
                        Apply Securely
                    </span>
                </Link>
            </motion.div>
        </>
    );
}
