"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Play, Sparkles, Award, Users, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export function HeroSlider() {
    const [isMuted, setIsMuted] = useState(true);
    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
            title: "NEXT-GEN",
            highlight: "SMART LEARNING",
            subtitle: "Every classroom is a digital hub. Experience India's first Smart TV integrated curriculum at Bright Horizon.",
            tag: "INFRASTRUCTURE MAVERICK"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1544531696-6569265f026a?q=80&w=2000&auto=format&fit=crop",
            title: "GENZ FACULTY",
            highlight: "MENTORING FUTURE",
            subtitle: "Guided by the city's youngest, most energetic faculty who speak the language of the modern student.",
            tag: "DYNAMIC MENTORSHIP"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop",
            title: "ONE VISION",
            highlight: "GLOBAL STANDARDS",
            subtitle: "A unified network of excellence across three campuses, designed for the leaders of 2040.",
            tag: "INSTITUTIONAL POWER"
        }
    ];

    const stats = [
        { icon: Award, value: "3", label: "World-Class Campuses" },
        { icon: Users, value: "4700+", label: "Students Enrolled" },
        { icon: Sparkles, value: "98%", label: "Success Rate" }
    ];

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/60 z-10" /> {/* Dimmer overlay for text readability */}
                <iframe
                    src={`https://www.youtube.com/embed/L7m92dMxUHM?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=L7m92dMxUHM&controls=0&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1`}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-full min-w-full min-h-full pointer-events-none scale-125 lg:scale-110"
                    allow="autoplay; encrypted-media"
                    title="Background Video"
                />
            </div>

            {/* Audio Toggle Control */}
            <div className="absolute bottom-40 right-10 z-50">
                <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all group shadow-xl"
                >
                    {isMuted ? (
                        <div className="flex items-center gap-2">
                            <VolumeX size={18} className="group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] font-black uppercase tracking-widest hidden md:inline">Unmute Experience</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 text-secondary">
                            <Volume2 size={18} className="animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-widest hidden md:inline">Audio Live</span>
                        </div>
                    )}
                </button>
            </div>

            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-transparent to-slate-900 z-10" />

            {/* Clean Hero - Content Removed for Cinematic Experience */}
            <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white" />

            {/* Live Operations Overlay - Professional Digital Solution Feel */}
            <div className="absolute top-32 right-10 z-30 hidden xl:block">
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                    className="glass-dark p-6 rounded-3xl border border-white/10 shadow-2xl space-y-4 min-w-[240px]"
                >
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-2">
                        <span className="text-[10px] font-black tracking-widest text-secondary uppercase">Institutional Intelligence</span>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    </div>
                    
                    <div className="space-y-4">
                        {[
                            { label: "Smart Classes Active", value: "248/250", color: "text-emerald-400" },
                            { label: "Attendance Status", value: "98.4%", color: "text-indigo-400" },
                            { label: "Admissions Pipeline", value: "112 Live", color: "text-secondary" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-1">
                                <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider">{item.label}</span>
                                <span className={cn("text-lg font-black tracking-tighter", item.color)}>{item.value}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom Stats Bar - Premium Overlap Style */}
            <div className="absolute bottom-0 left-0 right-0 z-30 translate-y-1/2 hover:translate-y-0 transition-transform duration-700">
                <div className="container mx-auto px-10">
                    <div className="grid grid-cols-3 gap-1">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.2 + (idx * 0.1) }}
                                className={`py-12 px-8 text-center text-white backdrop-blur-xl border-t border-x border-white/10 ${
                                    idx === 0 ? 'bg-primary/90' :
                                    idx === 1 ? 'bg-secondary/90' :
                                    'bg-slate-900/90'
                                } first:rounded-tl-[3rem] last:rounded-tr-[3rem] shadow-2xl group cursor-help`}
                            >
                                <stat.icon size={20} className="mx-auto mb-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                                <div className="text-4xl md:text-6xl font-black tracking-tighter mb-1">{stat.value}</div>
                                <div className="text-[10px] font-black tracking-[0.3em] uppercase opacity-70">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center gap-2"
            >
                <span className="text-white/50 text-xs tracking-widest">SCROLL</span>
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
