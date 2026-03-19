"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Users, Calendar, ArrowRight, Sparkles } from "lucide-react";

interface Branch {
    id: string;
    name: string;
    tagline: string;
    location: string;
    href: string;
    image: string;
    students: string;
    established: string;
    color: string;
    gradient: string;
}

export function BranchPreviewCards() {
    const branches: Branch[] = [
        {
            id: "north",
            name: "Bright Horizon",
            tagline: "CBSE Bright Horizon & Innovation",
            location: "North Campus, Sector 21",
            href: "/branch/north",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
            students: "2000+",
            established: "1989",
            color: "indigo",
            gradient: "from-indigo-500 to-purple-600"
        },
        {
            id: "south",
            name: "Bright Horizon International",
            tagline: "Global Curriculum & Culture",
            location: "South Campus, Knowledge Park",
            href: "/branch/south",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
            students: "1500+",
            established: "2005",
            color: "emerald",
            gradient: "from-emerald-500 to-teal-600"
        },
        {
            id: "east",
            name: "Bright Horizon Tech Academy",
            tagline: "Science, Technology & AI",
            location: "East Campus, Tech Valley",
            href: "/branch/east",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
            students: "1200+",
            established: "2015",
            color: "orange",
            gradient: "from-orange-500 to-red-600"
        }
    ];

    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden">
            {/* Elite Background Accents */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <span className="h-[1px] w-8 bg-secondary/50" />
                        <span className="text-[10px] font-black tracking-[0.4em] text-secondary uppercase">Institutional Network</span>
                        <span className="h-[1px] w-8 bg-secondary/50" />
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black font-heading text-white mb-8 tracking-tighter leading-[0.85]">
                        State-of-the-Art
                        <br />
                        <span className="text-secondary">Campuses</span>
                    </h2>
                    <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-medium">
                        Three specialized environments engineered for future-readiness, academic mastery, and global leadership.
                    </p>
                </motion.div>

                {/* Branch Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {branches.map((branch, idx) => (
                        <motion.div
                            key={branch.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                        >
                            <Link
                                href={branch.href}
                                className="group block relative h-[560px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_45px_100px_rgba(0,0,0,0.4)]"
                            >
                                {/* Background Image with Parallax-like Zoom */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={branch.image}
                                        alt={branch.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 scale-105 group-hover:scale-110 group-hover:rotate-1"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    {/* Cinematic Overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                                    <div className={`absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                                </div>
 
                                {/* Content Overlay */}
                                <div className="relative h-full flex flex-col justify-between p-12">
                                    {/* Top Metadata */}
                                    <div className="flex items-start justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[8px] font-black tracking-[0.3em] text-white/50 mb-1">NETWORK EST.</span>
                                            <span className="text-white font-black text-sm tracking-widest">{branch.established}</span>
                                        </div>
                                        <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-secondary">
                                            <Sparkles size={20} className="animate-pulse" />
                                        </div>
                                    </div>

                                    {/* Footer Info */}
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-4xl font-black font-heading text-white mb-3 leading-none group-hover:text-secondary transition-colors duration-500">
                                                {branch.name}
                                            </h3>
                                            <p className="text-[10px] font-black text-white/40 tracking-[0.3em] uppercase max-w-[80%]">
                                                {branch.tagline}
                                            </p>
                                        </div>

                                        {/* Quick Metrics */}
                                        <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                                            <div className="flex flex-col">
                                                <span className="text-[7px] font-black text-white/30 tracking-[0.2em] mb-1 uppercase text-left">Community</span>
                                                <span className="text-white font-black text-[10px] uppercase text-left">{branch.students} Scholars</span>
                                            </div>
                                            <div className="w-[1px] h-6 bg-white/10" />
                                            <div className="flex flex-col">
                                                <span className="text-[7px] font-black text-white/30 tracking-[0.2em] mb-1 uppercase text-left">Sector</span>
                                                <span className="text-white font-black text-[10px] uppercase text-left">{branch.location.split(',')[1]}</span>
                                            </div>
                                        </div>

                                        {/* Action Hint */}
                                        <div className="pt-6 flex items-center justify-between pointer-events-none group-hover:pt-8 transition-all duration-500">
                                            <span className="text-[9px] font-black text-white/80 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                                                Enter Campus
                                            </span>
                                            <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                                                <ArrowRight size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Premium Border Accent */}
                                <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 pointer-events-none group-hover:border-white/20 transition-colors duration-500" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
