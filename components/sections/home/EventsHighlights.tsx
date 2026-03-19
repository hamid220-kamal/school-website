"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight, Sparkles, Zap } from "lucide-react";
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
            campusColor: "primary",
            location: "Main Auditorium",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
            category: "Academic"
        },
        {
            id: "2",
            title: "International Cultural Festival",
            date: "April 5, 2026",
            campus: "South Campus",
            campusColor: "secondary",
            location: "Open Grounds",
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
            category: "Cultural"
        },
        {
            id: "3",
            title: "Inter-Campus Sports Meet 2026",
            date: "March 22-24, 2026",
            campus: "East Campus",
            campusColor: "accent",
            location: "Sports Complex",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop",
            category: "Sports"
        },
        {
            id: "4",
            title: "Alumni Meet & Career Guidance",
            date: "April 10, 2026",
            campus: "North Campus",
            campusColor: "primary",
            location: "Convention Center",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop",
            category: "Networking"
        },
        {
            id: "5",
            title: "Annual Day Celebration 2026",
            date: "May 2, 2026",
            campus: "South Campus",
            campusColor: "secondary",
            location: "Grand Theater",
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
            category: "Celebration"
        }
    ];

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Soft Background Pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_70%_30%,rgba(29,112,214,0.02),transparent)] pointer-events-none" />
            
            <div className="container mx-auto px-4 relative z-10 mb-24">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <span className="h-[1px] w-12 bg-primary/30" />
                        <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">Institutional Pulse</span>
                        <span className="h-[1px] w-12 bg-primary/30" />
                    </div>
                    <h2 className="text-5xl md:text-[8rem] font-black font-heading text-slate-950 mb-8 tracking-tighter leading-[0.8]">
                        Life &
                        <br />
                        <span className="text-gradient">Milestones</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                        Witness the convergence of technology, culture, and achievement across our global campus network.
                    </p>
                </motion.div>

                {/* Video Highlight Marquee - "The Wall" */}
                <div className="relative w-screen -ml-[50vw] left-1/2 overflow-hidden py-16 mb-32 bg-slate-50/50 border-y border-slate-100">
                    <div className="flex gap-8 animate-infinite-scroll">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-8 shrink-0">
                                {[
                                    "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
                                    "https://images.unsplash.com/photo-1511578314322-379afb476865",
                                    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
                                    "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
                                    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
                                ].map((img, idx) => (
                                    <div key={idx} className="relative w-[480px] h-[300px] rounded-[3.5rem] overflow-hidden group border border-white shadow-2xl shadow-primary/5">
                                        <Image
                                            src={`${img}?q=80&w=800&auto=format&fit=crop`}
                                            alt="School Life"
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
                                        <div className="absolute bottom-10 left-10 flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                                                <Zap size={20} className="fill-current" />
                                            </div>
                                            <span className="text-[11px] font-black text-white uppercase tracking-[0.3em] font-heading italic">Active Transmission</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Intelligence Feed (Events) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {events.map((event, idx) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group h-full"
                        >
                            <div className="bg-slate-50 border border-slate-100 p-12 rounded-[3.5rem] hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 h-full flex flex-col relative overflow-hidden">
                                <div className="flex items-center justify-between mb-12">
                                    <span className="text-[10px] font-black text-primary tracking-[0.4em] uppercase">{event.category}</span>
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-glow shadow-primary/50" />
                                </div>
                                <h3 className="text-3xl font-black text-slate-950 mb-10 leading-none tracking-tighter group-hover:text-primary transition-colors italic">
                                    {event.title}
                                </h3>
                                
                                <div className="mt-auto space-y-6 pt-10 border-t border-slate-100">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary border border-slate-50">
                                            <Calendar size={18} />
                                        </div>
                                        <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary border border-slate-50">
                                            <MapPin size={18} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[11px] font-black text-slate-950 uppercase tracking-tighter mb-1">{event.campus}</span>
                                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{event.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Arrow */}
                                <div className="absolute bottom-12 right-12 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-x-2">
                                    <ArrowRight size={24} className="text-primary" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Perspective View CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mt-32"
                >
                    <Link
                        href="/announcements"
                        className="group relative inline-flex items-center gap-8 text-slate-300 hover:text-primary transition-all font-black text-[11px] tracking-[0.4em] uppercase"
                    >
                        <span>Explore full archive</span>
                        <div className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">
                            <ArrowRight size={22} />
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
