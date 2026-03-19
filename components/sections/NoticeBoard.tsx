"use client";

import { motion } from "framer-motion";
import { Bell, FileText, ArrowRight, Calendar, Sparkles, Zap, Radio } from "lucide-react";
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
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Soft Background Accents */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(29,112,214,0.03),transparent)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(251,175,23,0.03),transparent)] pointer-events-none" />
            
            {/* Technical Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px),
                                      linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
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
                            <div className="w-12 h-[1px] bg-primary" />
                            <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase italic">Institutional pulse</span>
                        </div>

                        <h2 className="text-5xl md:text-[7rem] font-black font-heading text-slate-950 mb-10 leading-[0.8] tracking-tighter">
                            Active
                            <br />
                            <span className="text-gradient italic">Intelligence</span>
                        </h2>

                        <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium max-w-lg">
                            Monitor real-time updates, academic protocols, and institutional milestones across the tri-campus network.
                        </p>

                        <Link
                            href="/announcements"
                            className="group relative overflow-hidden px-12 py-6 rounded-full border border-slate-100 bg-slate-50 transition-all duration-700 hover:border-primary shadow-sm hover:shadow-2xl hover:shadow-primary/5 inline-flex items-center gap-4"
                        >
                            <span className="relative z-10 text-[11px] font-black tracking-[0.3em] uppercase text-slate-950 group-hover:text-primary transition-colors">VIEW ALL LOGS</span>
                            <ArrowRight size={18} className="text-primary group-hover:translate-x-2 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                        </Link>

                        {/* Network Status Indicator */}
                        <div className="mt-16 pt-10 border-t border-slate-100 flex items-center gap-12">
                            <div className="flex flex-col gap-2">
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">Transmission Status</span>
                                <div className="flex items-center gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-glow shadow-emerald-500/50" />
                                    <span className="text-[11px] font-black text-emerald-600 uppercase tracking-widest italic">Live Sync Alpha-8</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">Last Verification</span>
                                <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Today, 09:12 IST</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Notice Logs */}
                    <div className="lg:col-span-7">
                        {notices.length > 0 ? (
                            <div className="grid gap-6">
                                {notices.slice(0, 5).map((notice, idx) => (
                                    <motion.div
                                        key={notice._id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group relative bg-slate-50 border border-slate-100 p-10 rounded-[3.5rem] hover:bg-white hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/10 transition-all duration-700 cursor-pointer overflow-hidden"
                                    >
                                        <div className="flex items-start gap-10 relative z-10">
                                            {/* Technical Date Box */}
                                            <div className="shrink-0 w-24 h-24 bg-white border border-slate-100 group-hover:bg-primary rounded-[2rem] flex flex-col items-center justify-center text-slate-400 group-hover:text-white transition-all duration-700 shadow-xl group-hover:shadow-primary/30">
                                                <span className="text-4xl font-black leading-none mb-1 tracking-tighter">
                                                    {new Date(notice.date).getDate()}
                                                </span>
                                                <span className="text-[9px] font-black uppercase tracking-[0.2em]">
                                                    {new Date(notice.date).toLocaleDateString('en-US', { month: 'short' })}
                                                </span>
                                            </div>

                                            {/* Log Content */}
                                            <div className="flex-1 min-w-0 pt-2">
                                                <div className="flex items-center gap-5 mb-5">
                                                    <span className={`text-[9px] font-black px-5 py-2 rounded-full border uppercase tracking-[0.3em] font-heading italic ${
                                                        notice.category === 'Holiday' || notice.category === 'Important'
                                                            ? 'border-primary/30 text-primary bg-primary/5'
                                                            : 'border-slate-200 text-slate-400 bg-white'
                                                    }`}>
                                                        {notice.category}
                                                    </span>
                                                    <div className="h-px flex-1 bg-slate-100 group-hover:bg-primary/20 transition-all duration-500" />
                                                </div>
                                                <h3 className="text-3xl font-black text-slate-900 group-hover:text-primary transition-colors tracking-tighter mb-4 italic leading-none">
                                                    {notice.title}
                                                </h3>
                                                {notice.content && (
                                                    <p className="text-slate-500 text-sm font-medium leading-relaxed group-hover:text-slate-700 transition-colors line-clamp-2">
                                                        {notice.content}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Tactical Arrow */}
                                            <div className="shrink-0 pt-6 transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700">
                                                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white shadow-glow">
                                                    <ArrowRight size={22} />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Background Scanline Pulse */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[2000ms] pointer-events-none" />
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center justify-center py-40 bg-slate-50 rounded-[4rem] border border-dashed border-slate-200"
                            >
                                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-2xl border border-slate-50">
                                    <Bell size={40} className="text-slate-200" />
                                </div>
                                <p className="text-slate-400 font-black tracking-widest uppercase mb-2">No Active Logs Detected</p>
                                <div className="flex items-center gap-2">
                                    <Radio size={14} className="text-slate-200" />
                                    <p className="text-slate-200 text-[10px] font-black tracking-[0.3em] uppercase">Status: Idle Hub</p>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
