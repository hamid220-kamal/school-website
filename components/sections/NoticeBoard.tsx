"use client";

import { motion } from "framer-motion";
import { Bell, FileText, ArrowRight, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";

interface Notice {
    _id: string;
    title: string;
    category: string;
    date: string;
    content: string;
}

export function NoticeBoard({ notices = [] }: { notices?: Notice[] }) {
    return (
        <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
            {/* Cinematic Background Accents */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(251,191,36,0.05),transparent)] pointer-events-none" />
            
            {/* Technical Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-20 items-start">
                    {/* Left - Protocol Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 lg:sticky lg:top-40"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-[1px] bg-secondary" />
                            <span className="text-[10px] font-black tracking-[0.4em] text-secondary uppercase italic">Institutional pulse</span>
                        </div>

                        <h2 className="text-5xl md:text-[7rem] font-black font-heading text-white mb-10 leading-[0.85] tracking-tighter">
                            Active
                            <br />
                            <span className="text-gradient-secondary italic">Intelligence</span>
                        </h2>

                        <p className="text-xl text-white/30 mb-12 leading-relaxed font-medium max-w-lg">
                            Monitor real-time updates, academic protocols, and institutional milestones across the tri-campus network.
                        </p>

                        <Link
                            href="/announcements"
                            className="group relative overflow-hidden px-12 py-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl transition-all duration-700 hover:border-secondary shadow-2xl inline-flex items-center gap-4"
                        >
                            <span className="relative z-10 text-[10px] font-black tracking-[0.3em] uppercase">VIEW ALL LOGS</span>
                            <ArrowRight size={16} className="text-secondary group-hover:translate-x-2 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-secondary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                        </Link>

                        {/* Network Status Indicator */}
                        <div className="mt-16 pt-10 border-t border-white/5 flex items-center gap-8">
                            <div className="flex flex-col gap-2">
                                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">Transmission Status</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Live Sync Alpha-7</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">Last Verification</span>
                                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Today, 09:12 IST</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Notice Logs */}
                    <div className="lg:col-span-7">
                        {notices.length > 0 ? (
                            <div className="grid gap-4">
                                {notices.slice(0, 5).map((notice, idx) => (
                                    <motion.div
                                        key={notice._id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group relative bg-white/[0.01] backdrop-blur-3xl border border-white/5 p-8 rounded-[2.5rem] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-700 cursor-pointer overflow-hidden"
                                    >
                                        <div className="flex items-start gap-8 relative z-10">
                                            {/* Technical Date Box */}
                                            <div className="shrink-0 w-24 h-24 bg-white/5 border border-white/10 group-hover:bg-secondary rounded-[1.8rem] flex flex-col items-center justify-center text-white/40 group-hover:text-slate-950 transition-all duration-700 shadow-2xl">
                                                <span className="text-3xl font-black leading-none mb-1 tracking-tighter">
                                                    {new Date(notice.date).getDate()}
                                                </span>
                                                <span className="text-[8px] font-black uppercase tracking-[0.2em]">
                                                    {new Date(notice.date).toLocaleDateString('en-US', { month: 'short' })}
                                                </span>
                                            </div>

                                            {/* Log Content */}
                                            <div className="flex-1 min-w-0 pt-2">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <span className={`text-[8px] font-black px-4 py-1.5 rounded-full border uppercase tracking-[0.3em] ${
                                                        notice.category === 'Holiday' || notice.category === 'Important'
                                                            ? 'border-secondary/30 text-secondary bg-secondary/5'
                                                            : 'border-white/10 text-white/30 bg-white/5'
                                                    }`}>
                                                        {notice.category}
                                                    </span>
                                                    <div className="h-px flex-1 bg-white/5 group-hover:bg-white/10 transition-colors" />
                                                </div>
                                                <h3 className="text-2xl font-black text-white/70 group-hover:text-white transition-colors tracking-tight mb-2">
                                                    {notice.title}
                                                </h3>
                                                {notice.content && (
                                                    <p className="text-white/20 text-sm font-medium leading-relaxed group-hover:text-white/40 transition-colors line-clamp-2">
                                                        {notice.content}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Tactical Arrow */}
                                            <div className="shrink-0 pt-4 transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                                                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-slate-950 shadow-glow-secondary">
                                                    <ArrowRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Background Scanline Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms] pointer-events-none" />
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center justify-center py-40 bg-white/[0.01] rounded-[4rem] border border-dashed border-white/5"
                            >
                                <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center mb-10 shadow-2xl">
                                    <Bell size={40} className="text-white/10" />
                                </div>
                                <p className="text-white/30 font-black tracking-widest uppercase mb-2">No Active Logs Detected</p>
                                <p className="text-white/10 text-[10px] font-black tracking-[0.3em] uppercase">Status: Idle</p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
