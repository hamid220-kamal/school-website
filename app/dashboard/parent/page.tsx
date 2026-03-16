"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { BookOpen, Calendar, GraduationCap, Clock, Bell, User } from "lucide-react";

export default function ParentDashboard() {
    const studentInfo = {
        name: "Ayaan Ahmed",
        grade: "Grade 4-B",
        attendance: "94%",
        performance: "A+",
        school: "Bright Horizon Main"
    };

    const UpcomingEvents = [
        { title: "Parent Teacher Meeting", date: "Friday, 21st Mar", icon: Users },
        { title: "Annual Sports Day", date: "28th Mar - 29th Mar", icon: Trophy },
    ];

    return (
        <DashboardLayout userRole="parent">
            <div className="space-y-8">
                <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                        <GraduationCap size={160} />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                        <div className="w-32 h-32 rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                            <User size={64} className="text-white/40" />
                        </div>
                        <div className="text-center md:text-left">
                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                                <h1 className="text-3xl md:text-5xl font-black tracking-tight">{studentInfo.name}</h1>
                                <span className="px-4 py-1.5 bg-primary rounded-full text-xs font-black tracking-widest uppercase shadow-lg">
                                    {studentInfo.grade}
                                </span>
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-bold text-white/60 uppercase tracking-widest">
                                <div className="flex items-center gap-2"><BookOpen size={16} /> Best Subject: Math</div>
                                <div className="flex items-center gap-2"><Clock size={16} /> Last Login: Today 8:45 AM</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Attendance / Grades */}
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200">
                        <h3 className="font-black text-slate-400 uppercase tracking-widest text-xs mb-8">Academic Pulse</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                <p className="text-4xl font-black text-slate-900">{studentInfo.attendance}</p>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Attendance</p>
                            </div>
                            <div className="text-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                <p className="text-4xl font-black text-primary">{studentInfo.performance}</p>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Overall Rank</p>
                            </div>
                        </div>
                        <button className="w-full mt-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-primary transition-all">
                            View Report Card
                        </button>
                    </div>

                    {/* Notice Board */}
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200">
                        <h3 className="font-black text-slate-400 uppercase tracking-widest text-xs mb-8">School Notices</h3>
                        <div className="space-y-4">
                            {[
                                "School timing adjustment for upcoming Friday.",
                                "Uniform collection for sports day starting tomorrow.",
                                "Incentive program for academic excellence winners."
                            ].map((notice, i) => (
                                <div key={i} className="flex gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-all cursor-pointer border border-transparent hover:border-slate-100">
                                    <div className="p-2 bg-slate-100 rounded-lg text-slate-400"><Bell size={18} /></div>
                                    <p className="text-sm font-bold text-slate-800 leading-snug">{notice}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Events */}
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200">
                        <h3 className="font-black text-slate-400 uppercase tracking-widest text-xs mb-8">Upcoming Events</h3>
                        <div className="space-y-6">
                            {UpcomingEvents.map((event) => (
                                <div key={event.title} className="bg-primary/5 p-6 rounded-3xl border border-primary/10">
                                    <h4 className="font-black text-slate-900 mb-1">{event.title}</h4>
                                    <p className="text-xs font-bold text-primary tracking-widest uppercase">{event.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

function Trophy({ className, size }: { className?: string, size?: number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
    )
}

function Users({ className, size }: { className?: string, size?: number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    )
}
