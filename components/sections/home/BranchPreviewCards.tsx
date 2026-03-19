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
            color: "primary",
            gradient: "from-primary-light to-primary"
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
            color: "secondary",
            gradient: "from-secondary-light to-secondary"
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
            color: "accent",
            gradient: "from-emerald-400 to-emerald-600"
        }
    ];

    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Soft Background Pattern */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px),
                                      linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
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
                        <span className="h-[1px] w-12 bg-primary/30" />
                        <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">Institutional Network</span>
                        <span className="h-[1px] w-12 bg-primary/30" />
                    </div>
                    <h2 className="text-5xl md:text-[8rem] font-black font-heading text-slate-950 mb-8 tracking-tighter leading-[0.85]">
                        State-of-the-Art
                        <br />
                        <span className="text-gradient">Campuses</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
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
                                className="group block relative h-[580px] rounded-[3.5rem] overflow-hidden shadow-2xl shadow-primary/5 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_45px_100px_rgba(0,0,0,0.1)]"
                            >
                                {/* Background Image with Smooth Scaling */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={branch.image}
                                        alt={branch.name}
                                        fill
                                        className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    {/* Sophisticated Overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>
 
                                {/* Content Overlay */}
                                <div className="relative h-full flex flex-col justify-between p-12">
                                    {/* Top Metadata */}
                                    <div className="flex items-start justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[8px] font-black tracking-[0.4em] text-white/50 mb-1">NETWORK EST.</span>
                                            <span className="text-white font-black text-xs tracking-widest">{branch.established}</span>
                                        </div>
                                        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-secondary flex items-center justify-center">
                                            <Sparkles size={20} className="animate-pulse" />
                                        </div>
                                    </div>

                                    {/* Footer Info */}
                                    <div className="space-y-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                        <div>
                                            <h3 className="text-4xl font-black font-heading text-white mb-3 tracking-tighter leading-none group-hover:text-secondary transition-colors duration-500">
                                                {branch.name}
                                            </h3>
                                            <p className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase max-w-[90%] leading-relaxed">
                                                {branch.tagline}
                                            </p>
                                        </div>

                                        {/* Quick Metrics */}
                                        <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                                            <div className="flex flex-col">
                                                <span className="text-[7px] font-black text-white/30 tracking-[0.2em] mb-1 uppercase">Community</span>
                                                <span className="text-white font-black text-[10px] uppercase">{branch.students} Scholars</span>
                                            </div>
                                            <div className="w-[1px] h-6 bg-white/10" />
                                            <div className="flex flex-col">
                                                <span className="text-[7px] font-black text-white/30 tracking-[0.2em] mb-1 uppercase">Sector</span>
                                                <span className="text-white font-black text-[10px] uppercase">{branch.location.split(',')[1]}</span>
                                            </div>
                                        </div>

                                        {/* Action CTA */}
                                        <div className="pt-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-700">
                                            <span className="text-[9px] font-black text-white uppercase tracking-[0.3em] italic">
                                                Explore Campus
                                            </span>
                                            <div className="w-14 h-14 rounded-full bg-white text-primary flex items-center justify-center shadow-2xl shadow-white/20 transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-700">
                                                <ArrowRight size={22} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Refined Border Glow */}
                                <div className="absolute inset-0 rounded-[3.5rem] border border-white/10 group-hover:border-white/30 transition-colors duration-500" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
