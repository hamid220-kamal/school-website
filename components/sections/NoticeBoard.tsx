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
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {/* Left - Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:sticky lg:top-32"
                    >
                        <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Bell size={16} />
                            STAY INFORMED
                        </span>

                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6 leading-tight">
                            Latest<br />
                            <span className="text-gradient">Announcements</span>
                        </h2>

                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Stay updated with the latest news, events, and circulars from Excellence Academy.
                        </p>

                        <Link
                            href="/announcements"
                            className="inline-flex items-center gap-3 bg-gradient-primary text-white px-8 py-4 rounded-full font-bold tracking-widest text-sm shadow-glow hover:shadow-lg transition-all btn-premium"
                        >
                            VIEW ALL NOTICES
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>

                    {/* Right - Notice Cards */}
                    <div className="lg:col-span-2">
                        {notices.length > 0 ? (
                            <div className="space-y-4">
                                {notices.slice(0, 5).map((notice, idx) => (
                                    <motion.div
                                        key={notice._id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-500 cursor-pointer"
                                    >
                                        <div className="flex gap-5">
                                            {/* Date Box */}
                                            <div className="shrink-0 w-16 h-16 bg-white group-hover:bg-gradient-primary rounded-2xl flex flex-col items-center justify-center text-slate-500 group-hover:text-white transition-all shadow-sm">
                                                <span className="text-xl font-black leading-none">
                                                    {new Date(notice.date).getDate()}
                                                </span>
                                                <span className="text-[10px] font-bold uppercase tracking-wider">
                                                    {new Date(notice.date).toLocaleDateString('en-US', { month: 'short' })}
                                                </span>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${notice.category === 'Holiday' || notice.category === 'Important'
                                                            ? 'bg-secondary/10 text-secondary'
                                                            : 'bg-primary/10 text-primary'
                                                        }`}>
                                                        {notice.category}
                                                    </span>
                                                </div>
                                                <h3 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors line-clamp-1 mb-1">
                                                    {notice.title}
                                                </h3>
                                                {notice.content && (
                                                    <p className="text-slate-500 text-sm line-clamp-1">
                                                        {notice.content}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Arrow */}
                                            <div className="shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ArrowRight size={20} className="text-primary" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center justify-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200"
                            >
                                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                                    <Bell size={32} className="text-slate-300" />
                                </div>
                                <p className="text-slate-500 font-medium">No announcements at the moment.</p>
                                <p className="text-slate-400 text-sm">Check back later for updates!</p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
