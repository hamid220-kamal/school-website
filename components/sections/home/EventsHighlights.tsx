"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Event {
    id: string;
    title: string;
    date: string;
    campus: string;
    campusColor: string;
    location: string;
    image: string;
    category: string;
}

export function EventsHighlights() {
    const events: Event[] = [
        {
            id: "1",
            title: "Annual Science & Technology Fair 2026",
            date: "March 15-17, 2026",
            campus: "North Campus",
            campusColor: "indigo",
            location: "Main Auditorium",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
            category: "Academic"
        },
        {
            id: "2",
            title: "International Cultural Festival",
            date: "April 5, 2026",
            campus: "South Campus",
            campusColor: "emerald",
            location: "Open Grounds",
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
            category: "Cultural"
        },
        {
            id: "3",
            title: "Inter-Campus Sports Meet 2026",
            date: "March 22-24, 2026",
            campus: "East Campus",
            campusColor: "orange",
            location: "Sports Complex",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop",
            category: "Sports"
        },
        {
            id: "4",
            title: "Alumni Meet & Career Guidance",
            date: "April 10, 2026",
            campus: "North Campus",
            campusColor: "indigo",
            location: "Convention Center",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop",
            category: "Networking"
        },
        {
            id: "5",
            title: "Annual Day Celebration 2026",
            date: "May 2, 2026",
            campus: "South Campus",
            campusColor: "emerald",
            location: "Grand Theater",
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
            category: "Celebration"
        }
    ];

    const campusColors = {
        indigo: "bg-indigo-500",
        emerald: "bg-emerald-500",
        orange: "bg-orange-500"
    };

    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
            
            <div className="container mx-auto px-4 relative z-10 mb-24">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <span className="h-[1px] w-8 bg-secondary/50" />
                        <span className="text-[10px] font-black tracking-[0.4em] text-secondary uppercase">Institutional Pulse</span>
                        <span className="h-[1px] w-8 bg-secondary/50" />
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black font-heading text-white mb-8 tracking-tighter leading-[0.85]">
                        Life &
                        <br />
                        <span className="text-gradient-secondary">Milestones</span>
                    </h2>
                    <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-medium">
                        Witness the convergence of technology, culture, and achievement across our global campus network.
                    </p>
                </motion.div>

                {/* Video Highlight Marquee - "The Wall" */}
                <div className="relative w-screen -ml-[50vw] left-1/2 overflow-hidden py-10 mb-20">
                    <div className="flex gap-6 animate-infinite-scroll">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-6 shrink-0">
                                {[
                                    "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
                                    "https://images.unsplash.com/photo-1511578314322-379afb476865",
                                    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
                                    "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
                                    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
                                ].map((img, idx) => (
                                    <div key={idx} className="relative w-[400px] h-[260px] rounded-[2rem] overflow-hidden group border border-white/5">
                                        <Image
                                            src={`${img}?q=80&w=800&auto=format&fit=crop`}
                                            alt="School Life"
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
                                        <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                                                <Sparkles size={16} />
                                            </div>
                                            <span className="text-[10px] font-black text-white uppercase tracking-widest">Global Standards</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Intelligence Feed (Events) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {events.map((event, idx) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-8 rounded-[2.5rem] hover:bg-white/[0.05] transition-all duration-500 h-full flex flex-col">
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-[10px] font-black text-secondary tracking-widest uppercase">{event.category}</span>
                                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-6 leading-tight group-hover:text-secondary transition-colors">
                                    {event.title}
                                </h3>
                                <div className="mt-auto pt-6 border-t border-white/5 space-y-3">
                                    <div className="flex items-center gap-3 text-white/40">
                                        <Calendar size={14} className="text-secondary" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider">{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-white/40">
                                        <MapPin size={14} className="text-secondary" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider">{event.location} • {event.campus}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Perspective View CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mt-20"
                >
                    <Link
                        href="/announcements"
                        className="group relative inline-flex items-center gap-6 text-white/40 hover:text-white transition-all font-black text-xs tracking-[0.3em] uppercase"
                    >
                        <span>Explore full archive</span>
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-slate-950 group-hover:border-secondary transition-all">
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
