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
        <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
            {/* Cinematic Background Accents */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(251,191,36,0.05),transparent)] pointer-events-none" />
            
            {/* Technical Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Tactical Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                         <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-[1px] bg-secondary" />
                            <span className="text-[10px] font-black tracking-[0.4em] text-secondary uppercase italic">Operational Excellence</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black font-heading leading-[0.85] tracking-tighter">
                            World-Class
                            <br />
                            <span className="text-gradient-secondary italic">Infrastructure</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/facilities"
                            className="group relative overflow-hidden px-12 py-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl transition-all duration-700 hover:border-secondary shadow-2xl"
                        >
                            <span className="relative z-10 flex items-center gap-4 text-[10px] font-black tracking-[0.3em] uppercase">
                                Explored Protocol
                                <ArrowRight size={16} className="text-secondary group-hover:translate-x-2 transition-transform duration-500" />
                            </span>
                            <div className="absolute inset-0 bg-secondary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                        </Link>
                    </motion.div>
                </div>

                {/* Tactical Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {facilities.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="relative group h-[500px] overflow-hidden rounded-[3rem] cursor-pointer border border-white/5"
                        >
                            {/* Grayscale to Color Background */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110 brightness-50 group-hover:brightness-90"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />

                            {/* HUD-Style Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-700" />
                            
                            {/* Scanning Line Effect on Hover */}
                            <div className="absolute inset-x-0 top-0 h-px bg-white/20 -translate-y-full group-hover:translate-y-[500px] transition-all duration-[2000ms] pointer-events-none" />

                            {/* Component Content */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-between">
                                {/* Technical Badge */}
                                <div className="flex items-center justify-between">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-2xl flex items-center justify-center border border-white/10 shadow-2xl group-hover:bg-secondary group-hover:text-slate-950 transition-all duration-700">
                                        <item.icon size={26} />
                                    </div>
                                    <span className="text-[9px] font-black tracking-[0.2em] text-white/20 uppercase group-hover:text-secondary/50 transition-colors">
                                        Fac-ID: 00{idx + 1}
                                    </span>
                                </div>

                                {/* Text Module */}
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-[10px] font-black text-secondary uppercase tracking-[0.4em]">Protocol</span>
                                        <div className="h-px flex-1 bg-white/5 group-hover:bg-secondary/20 transition-all" />
                                    </div>
                                    <h3 className="font-black text-3xl mb-3 tracking-tighter leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest leading-loose mb-6">
                                        {item.desc}
                                    </p>
                                    <div className="inline-flex items-center gap-4 text-[9px] font-black tracking-[0.4em] text-secondary opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-20px] group-hover:translate-x-0">
                                        INITIALIZE ARCHIVE <ArrowRight size={14} />
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
