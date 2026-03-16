"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { Users, LayoutDashboard, MessageSquare, ArrowUpRight, CheckCircle2, Clock } from "lucide-react";

export default function PrincipalDashboard() {
    const stats = [
        { label: "New Admissions", value: "48", trend: "+5 this week", up: true },
        { label: "Pending Enquiries", value: "112", trend: "Action required", up: false },
        { label: "Bot Conversations", value: "842", trend: "+148 today", up: true },
    ];

    const recentInquiries = [
        { name: "Rahul Sharma", grade: "Grade 4", status: "Hot Lead", time: "2 hours ago" },
        { name: "Ananya Reddy", grade: "Grade 1", status: "Follow-up", time: "5 hours ago" },
        { name: "Mohammed Ali", grade: "Nursery", status: "Meeting Scheduled", time: "Yesterday" },
    ];

    return (
        <DashboardLayout userRole="principal">
            <div className="space-y-8">
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Principal Command Center</h1>
                        <p className="text-slate-500 font-medium">Monitoring Bright Horizon Main Campus performance.</p>
                    </div>
                    <div className="bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-black text-slate-800 uppercase tracking-widest">System Live</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div 
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm"
                        >
                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                            <p className="text-4xl font-black text-slate-900 mb-4">{stat.value}</p>
                            <div className={cn(
                                "inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full",
                                stat.up ? "bg-emerald-50 text-emerald-600" : "bg-orange-50 text-orange-600"
                            )}>
                                {stat.trend}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Admissions CRM Preview */}
                    <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-8">
                        <h2 className="text-xl font-black text-slate-900 tracking-tight mb-8 flex items-center gap-3">
                            <Users size={24} className="text-primary" /> Active Enquiries
                        </h2>
                        <div className="space-y-6">
                            {recentInquiries.map((inquiry) => (
                                <div key={inquiry.name} className="flex items-center justify-between group p-4 hover:bg-slate-50 rounded-2xl transition-all cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500">
                                            {inquiry.name[0]}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">{inquiry.name}</p>
                                            <p className="text-xs font-medium text-slate-400">{inquiry.grade} • {inquiry.time}</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1 bg-primary/10 text-primary rounded-full">
                                        {inquiry.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-8 py-4 bg-slate-50 hover:bg-slate-100 rounded-2xl text-slate-500 font-bold text-sm transition-all">
                            View All Enquiries in CRM
                        </button>
                    </div>

                    {/* AI Chatbot Sentiment */}
                    <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <MessageSquare size={120} />
                        </div>
                        <h2 className="text-xl font-black tracking-tight mb-8 relative z-10">AI Front Desk Analytics</h2>
                        <div className="space-y-8 relative z-10">
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-4">Top Query This Week</p>
                                <p className="text-2xl font-bold mb-2">"When is the entrance exam?"</p>
                                <p className="text-sm text-secondary">Asked by 142 prospective parents</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
                                    <p className="text-3xl font-black text-emerald-400">82%</p>
                                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-2">Satisfaction Score</p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
                                    <p className="text-3xl font-black text-primary">₹14K</p>
                                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-2">Saved Staff Cost</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
