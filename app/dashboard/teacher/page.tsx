"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { AlertTriangle, Send, History, CheckCircle2, Info } from "lucide-react";

export default function TeacherDashboard() {
    const [notice, setNotice] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSend = () => {
        setIsSending(true);
        // Simulate broadcast
        setTimeout(() => {
            setIsSending(false);
            setSent(true);
            setTimeout(() => setSent(false), 3000);
        }, 1500);
    };

    return (
        <DashboardLayout userRole="teacher">
            <div className="max-w-4xl mx-auto space-y-8">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Notice Control Center</h1>
                    <p className="text-slate-500 font-medium">Broadcast urgent announcements to the entire institution.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-amber-50 border border-amber-100 p-6 rounded-[2rem]">
                        <AlertTriangle className="text-amber-600 mb-3" size={32} />
                        <h3 className="font-black text-amber-900 leading-tight">Emergency Protocol</h3>
                        <p className="text-sm text-amber-700 mt-2">Activate global banners for holidays or closures.</p>
                    </div>
                </div>

                {/* Broadcast Form */}
                <div className="bg-white rounded-[2.5rem] border-4 border-slate-900 shadow-2xl overflow-hidden">
                    <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Send size={20} className="text-primary" />
                            <span className="font-black uppercase tracking-widest text-sm">New Broadcast</span>
                        </div>
                        <div className="bg-white/10 px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
                            Global Impact
                        </div>
                    </div>
                    <div className="p-10 space-y-8">
                        <div>
                            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Notice Content</label>
                            <textarea 
                                value={notice}
                                onChange={(e) => setNotice(e.target.value)}
                                className="w-full h-40 bg-slate-50 border-2 border-slate-100 rounded-3xl p-6 outline-none focus:border-primary transition-all font-medium text-lg"
                                placeholder="Enter the emergency notice message here..."
                            />
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/20">
                            <Info size={24} className="text-primary" />
                            <p className="text-xs font-bold text-slate-600">
                                This message will appear on the <span className="text-primary">Global Header Banner</span> across all 3 school websites instantly upon sending.
                            </p>
                        </div>

                        <button 
                            onClick={handleSend}
                            disabled={!notice || isSending}
                            className="w-full py-5 bg-slate-900 hover:bg-primary text-white font-black rounded-3xl transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-30 group"
                        >
                            {isSending ? (
                                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : sent ? (
                                <>
                                    BROADCAST ACTIVE <CheckCircle2 size={24} />
                                </>
                            ) : (
                                <>
                                    ACTIVATE BROADCAST <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* History */}
                <div className="bg-white rounded-[2rem] border border-slate-200 p-8">
                    <h3 className="font-black text-slate-900 mb-6 flex items-center gap-3">
                        <History size={20} className="text-slate-400" /> Recent Broadcasts
                    </h3>
                    <div className="space-y-4">
                        {[
                            { date: "Yesterday, 4:30 PM", text: "Regular school tomorrow after monsoon break.", status: "Expired" },
                            { date: "12 Mar 2026", text: "Final exams scheduled for the next week.", status: "Archived" }
                        ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                                <div>
                                    <p className="text-sm font-bold text-slate-800">{item.text}</p>
                                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1">{item.date}</p>
                                </div>
                                <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">{item.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
