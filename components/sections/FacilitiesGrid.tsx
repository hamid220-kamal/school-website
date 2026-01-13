"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Monitor, Book, FlaskConical, Cpu, Activity, Music, Mic2, Coffee, ArrowRight, Sparkles } from "lucide-react";

export function FacilitiesGrid() {
    const facilities = [
        {
            title: "Smart Classrooms",
            desc: "Interactive digital learning",
            icon: Monitor,
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
            gradient: "from-blue-600 to-cyan-500"
        },
        {
            title: "Central Library",
            desc: "50,000+ books & digital resources",
            icon: Book,
            image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop",
            gradient: "from-amber-600 to-orange-500"
        },
        {
            title: "Science Labs",
            desc: "Physics, Chemistry & Biology",
            icon: FlaskConical,
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop",
            gradient: "from-emerald-600 to-teal-500"
        },
        {
            title: "AI & Robotics Lab",
            desc: "Future-ready technology",
            icon: Cpu,
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
            gradient: "from-violet-600 to-purple-500"
        },
        {
            title: "Sports Complex",
            desc: "Olympic-standard facilities",
            icon: Activity,
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop",
            gradient: "from-rose-600 to-pink-500"
        },
        {
            title: "Arts Studio",
            desc: "Music, dance & visual arts",
            icon: Music,
            image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1000&auto=format&fit=crop",
            gradient: "from-indigo-600 to-blue-500"
        },
        {
            title: "Auditorium",
            desc: "1000+ seating capacity",
            icon: Mic2,
            image: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=1000&auto=format&fit=crop",
            gradient: "from-slate-600 to-slate-500"
        },
        {
            title: "Cafeteria",
            desc: "Nutritious meals daily",
            icon: Coffee,
            image: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1000&auto=format&fit=crop",
            gradient: "from-orange-600 to-amber-500"
        },
    ];

    return (
        <section className="py-32 bg-gradient-hero text-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Sparkles size={16} className="text-secondary" />
                            WORLD-CLASS INFRASTRUCTURE
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black font-heading leading-tight">
                            Campus Designed for<br />
                            <span className="text-gradient-secondary">Future Leaders</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/facilities"
                            className="group flex items-center gap-3 glass hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full text-sm font-bold tracking-widest transition-all"
                        >
                            VIEW ALL FACILITIES
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {facilities.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="relative group h-80 overflow-hidden rounded-3xl cursor-pointer card-hover"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />

                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-80 transition-all duration-500`} />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                {/* Icon */}
                                <div className={`self-end bg-gradient-to-br ${item.gradient} p-4 rounded-2xl text-white shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}>
                                    <item.icon size={24} />
                                </div>

                                {/* Text */}
                                <div>
                                    <h3 className="font-bold text-xl mb-1 transform group-hover:-translate-y-1 transition-transform duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/70 text-sm mb-4">
                                        {item.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        EXPLORE <ArrowRight size={12} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
