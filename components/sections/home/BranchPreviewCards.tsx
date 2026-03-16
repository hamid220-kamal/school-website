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
        <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                        <Sparkles size={16} className="text-secondary" />
                        OUR CAMPUSES
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black font-heading text-slate-900 mb-6 leading-tight">
                        Three Campuses,
                        <br />
                        <span className="text-gradient">One Vision</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Discover our world-class campuses, each offering unique specializations
                        while maintaining our commitment to excellence in education.
                    </p>
                </motion.div>

                {/* Branch Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {branches.map((branch, idx) => (
                        <motion.div
                            key={branch.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                        >
                            <Link
                                href={branch.href}
                                className="group block relative h-[480px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-glow transition-all duration-500 card-hover"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={branch.image}
                                        alt={branch.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    {/* Gradient Overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${branch.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                                </div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col justify-between p-8">
                                    {/* Top Badge */}
                                    <div className="flex items-center justify-between">
                                        <span className="glass text-white/90 px-4 py-2 rounded-full text-xs font-bold tracking-wider">
                                            EST. {branch.established}
                                        </span>
                                        <div className={`p-3 rounded-full bg-gradient-to-br ${branch.gradient} text-white shadow-lg`}>
                                            <Users size={20} />
                                        </div>
                                    </div>

                                    {/* Bottom Content */}
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-3xl font-black font-heading text-white mb-2 group-hover:text-secondary transition-colors">
                                                {branch.name}
                                            </h3>
                                            <p className="text-lg font-bold text-white/80 tracking-wide uppercase text-sm">
                                                {branch.tagline}
                                            </p>
                                        </div>

                                        {/* Stats */}
                                        <div className="flex items-center gap-6 text-white/70 text-sm">
                                            <span className="flex items-center gap-2">
                                                <MapPin size={16} className="text-secondary" />
                                                {branch.location}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <Users size={16} className="text-secondary" />
                                                {branch.students} Students
                                            </span>
                                        </div>

                                        {/* CTA Button */}
                                        <div className="pt-4">
                                            <div className="inline-flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm group-hover:bg-secondary group-hover:text-white transition-all shadow-lg">
                                                Explore Campus
                                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Animated Border */}
                                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500`} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
