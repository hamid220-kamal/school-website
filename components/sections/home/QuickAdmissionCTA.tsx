"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Download, Phone, Sparkles, ShieldCheck } from "lucide-react";
import { useState } from "react";

export function QuickAdmissionCTA() {
    return (
        <>
            {/* Main CTA Section - The Gateway */}
            <section className="py-32 bg-white relative overflow-hidden">
                {/* Soft Background Accents */}
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(29,112,214,0.04),transparent)] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(251,175,23,0.04),transparent)] pointer-events-none" />
                
                {/* Technical Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px),
                                         linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
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
                            <span className="inline-flex items-center gap-3 bg-slate-50 border border-slate-100 text-slate-500 px-10 py-4 rounded-full text-[10px] font-black tracking-[0.4em] uppercase group cursor-default shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700">
                                <Sparkles size={16} className="text-primary animate-pulse" />
                                <span className="group-hover:text-primary transition-colors">Admissions Portal 2026-27 Active</span>
                            </span>
                        </motion.div>

                        {/* Main Title - The Gateway Statement */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-[10rem] font-black font-heading text-slate-950 mb-16 leading-[0.8] tracking-tighter"
                        >
                            Secure Your
                            <br />
                            <span className="text-gradient">Legacy</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-3xl text-slate-400 mb-20 max-w-4xl mx-auto leading-tight font-medium tracking-tight"
                        >
                            Entrance into our tri-campus network is by merit and vision. 
                            <span className="text-primary block mt-8 font-black uppercase text-sm tracking-[0.4em] italic shadow-primary/5">Institutional Evaluation in Progress.</span>
                        </motion.p>

                        {/* Tiered Application Controls */}
                        <div className="grid md:grid-cols-12 gap-8 max-w-5xl mx-auto">
                            {/* Primary Action - Major Card */}
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="md:col-span-12 lg:col-span-7 group"
                            >
                                <Link
                                    href="/admissions"
                                    className="block h-full bg-white border border-slate-100 relative overflow-hidden p-12 rounded-[4rem] shadow-[0_30px_100px_rgba(0,0,0,0.05)] transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_50px_120px_rgba(0,0,0,0.08)]"
                                >
                                    <div className="relative z-10 flex flex-col items-start text-left h-full">
                                        <div className="w-20 h-20 rounded-3xl bg-slate-950 text-white flex items-center justify-center mb-12 group-hover:bg-primary transition-all duration-700 shadow-xl group-hover:shadow-primary/20">
                                            <Calendar size={32} />
                                        </div>
                                        <h3 className="text-4xl font-black text-slate-950 mb-6 tracking-tighter leading-none italic">Start Your Formal Application</h3>
                                        <p className="text-slate-500 font-medium mb-10 text-lg">Estimated completion time: 12 minutes. Requires academic transcripts and identification.</p>
                                        <div className="mt-auto flex items-center gap-6 text-slate-950 font-black text-[11px] tracking-[0.4em] uppercase group-hover:gap-10 transition-all duration-700">
                                            Enter Gateway
                                            <ArrowRight size={24} className="text-primary" />
                                        </div>
                                    </div>
                                    {/* Animated Background Icon */}
                                    <div className="absolute -bottom-16 -right-16 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-1000 rotate-12 group-hover:rotate-0">
                                        <Sparkles size={400} className="text-slate-900" />
                                    </div>
                                </Link>
                            </motion.div>

                            {/* Secondary Actions - Stacked Cards */}
                            <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-8">
                                {[
                                    { icon: Download, title: "Global Prospectus", desc: "Digital Portfolio 2026", color: "bg-slate-50", text: "text-slate-950" },
                                    { icon: Phone, title: "Directorate Access", desc: "Priority Admissions Line", color: "bg-primary", text: "text-white" }
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
                                            className={`block p-10 rounded-[3rem] border border-slate-100 h-full backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 group shadow-sm hover:shadow-2xl hover:shadow-primary/10 ${item.color}`}
                                        >
                                            <div className="flex items-center gap-8">
                                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-700 group-hover:scale-110 ${item.color === 'bg-primary' ? 'bg-white text-primary' : 'bg-white text-slate-950 shadow-sm'}`}>
                                                    <item.icon size={26} />
                                                </div>
                                                <div className="text-left">
                                                    <h4 className={`text-xl font-black tracking-tighter mb-1 ${item.text}`}>{item.title}</h4>
                                                    <p className={`text-[9px] font-black uppercase tracking-[0.3em] ${item.color === 'bg-primary' ? 'text-white/70' : 'text-slate-400'}`}>{item.desc}</p>
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
                            className="mt-24 flex flex-col md:flex-row items-center justify-center gap-16"
                        >
                            <div className="flex items-center gap-6">
                                <div className="flex -space-x-5">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 shadow-sm" />
                                    ))}
                                </div>
                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] italic">140+ Active Applicants Today</span>
                            </div>
                            <div className="h-6 w-[1px] bg-slate-100 hidden md:block" />
                            <div className="flex items-center gap-4">
                                <ShieldCheck size={20} className="text-emerald-500" />
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Live Admission Cycle Security Verified</span>
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
                    className="group bg-primary text-white p-6 rounded-full shadow-glow hover:shadow-2xl transition-all duration-700 flex items-center gap-4 font-bold"
                >
                    <Calendar size={28} className="group-hover:rotate-12 transition-transform duration-500" />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 whitespace-nowrap px-0 group-hover:px-6 font-black tracking-[0.3em] uppercase text-[11px] italic">
                        Apply Securely
                    </span>
                </Link>
            </motion.div>
        </>
    );
}
