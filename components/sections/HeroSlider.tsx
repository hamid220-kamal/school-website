"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Play, Sparkles, Award, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export function HeroSlider() {
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
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 z-10" />

            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-full w-full">
                            {/* Image with Gradient Overlay */}
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-40"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            />

                            {/* Animated Grid Pattern */}
                            <div className="absolute inset-0 opacity-10 z-10"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                                    backgroundSize: '50px 50px'
                                }}
                            />

                            {/* Floating Orbs */}
                            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />

                            {/* Content */}
                            <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="max-w-5xl"
                                >
                                    {/* Badge */}
                                    <motion.span
                                        initial={{ opacity: 0, y: -20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-black tracking-[0.3em] mb-10 overflow-hidden relative group"
                                    >
                                        <Sparkles size={14} className="text-secondary animate-pulse" />
                                        <span className="relative z-10">{slide.tag}</span>
                                        <motion.div 
                                            initial={{ x: "-100%" }} animate={{ x: "200%" }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-1/2 skew-x-12"
                                        />
                                    </motion.span>

                                    {/* Main Title */}
                                    <h2 className="text-5xl sm:text-7xl md:text-9xl font-black font-heading tracking-tighter leading-[0.85] mb-4">
                                        <motion.span initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                                            {slide.title}
                                        </motion.span>
                                    </h2>
                                    <h2 className="text-5xl sm:text-7xl md:text-9xl font-black font-heading tracking-tighter leading-[0.85] mb-12">
                                        <motion.span initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">
                                            {slide.highlight}
                                        </motion.span>
                                    </h2>
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-lg md:text-2xl font-medium max-w-3xl text-white/60 mb-14 leading-relaxed tracking-tight"
                                >
                                    {slide.subtitle}
                                </motion.p>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="flex flex-col sm:flex-row gap-4"
                                >
                                    <Link
                                        href="/admissions"
                                        className="group bg-gradient-secondary text-white px-10 py-4 font-bold tracking-widest text-sm rounded-full shadow-glow-secondary hover:shadow-glow transition-all inline-flex items-center gap-3 btn-premium"
                                    >
                                        START YOUR JOURNEY
                                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        href="/about"
                                        className="group glass hover:bg-white/20 text-white px-10 py-4 font-bold tracking-widest text-sm rounded-full transition-all inline-flex items-center gap-3"
                                    >
                                        <Play size={18} className="fill-current" />
                                        VIRTUAL TOUR
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

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
