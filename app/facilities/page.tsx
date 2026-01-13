"use client";

import { motion } from "framer-motion";
import { Monitor, Book, FlaskConical, Cpu, Activity, Music, Mic2, Coffee, HeartPulse, Bus, Wifi, ShieldCheck, ArrowRight, Sparkles, Building } from "lucide-react";
import Link from "next/link";

export default function FacilitiesPage() {
    const facilities = [
        { title: "Smart Classrooms", icon: Monitor, description: "Interactive learning with state-of-the-art smart boards and digital content.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop", gradient: "from-blue-600 to-cyan-500" },
        { title: "Central Library", icon: Book, description: "50,000+ books, journals, and digital resources for avid readers.", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop", gradient: "from-amber-600 to-orange-500" },
        { title: "Science Labs", icon: FlaskConical, description: "Fully equipped Physics, Chemistry, and Biology labs.", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop", gradient: "from-emerald-600 to-teal-500" },
        { title: "AI & Robotics Lab", icon: Cpu, description: "Modern computing with high-speed internet and AI modules.", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop", gradient: "from-violet-600 to-purple-500" },
        { title: "Sports Complex", icon: Activity, description: "Indoor and outdoor sports including basketball, cricket, and swimming.", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop", gradient: "from-rose-600 to-pink-500" },
        { title: "Arts Studio", icon: Music, description: "Dedicated spaces for music, dance, and fine arts.", image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1000&auto=format&fit=crop", gradient: "from-indigo-600 to-blue-500" },
        { title: "Auditorium", icon: Mic2, description: "Grand auditorium for events, assemblies, and performances.", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=1000&auto=format&fit=crop", gradient: "from-slate-600 to-slate-500" },
        { title: "Cafeteria", icon: Coffee, description: "Healthy and nutritious meals prepared in hygienic environment.", image: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1000&auto=format&fit=crop", gradient: "from-orange-600 to-amber-500" },
        { title: "Medical Infirmary", icon: HeartPulse, description: "Full-time nurse and visiting doctor for emergencies.", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1000&auto=format&fit=crop", gradient: "from-red-600 to-rose-500" },
        { title: "Safe Transport", icon: Bus, description: "GPS-enabled bus fleet covering all major routes.", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1000&auto=format&fit=crop", gradient: "from-yellow-600 to-orange-500" },
        { title: "Campus Wi-Fi", icon: Wifi, description: "Secure high-speed Wi-Fi connectivity across campus.", image: "https://images.unsplash.com/photo-1563770095-39d468f95c3c?q=80&w=1000&auto=format&fit=crop", gradient: "from-cyan-600 to-blue-500" },
        { title: "24/7 Security", icon: ShieldCheck, description: "CCTV surveillance and professional security personnel.", image: "https://images.unsplash.com/photo-1555952494-efd681c7a3f9?q=80&w=1000&auto=format&fit=crop", gradient: "from-green-600 to-emerald-500" },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero" />
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Floating Orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-[80px]" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-flex items-center gap-2 glass px-6 py-2.5 rounded-full text-white text-sm font-bold tracking-wider mb-6">
                            <Building size={16} />
                            WORLD-CLASS INFRASTRUCTURE
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading text-white mb-6">
                            Our <span className="text-gradient-secondary">Facilities</span>
                        </h1>
                        <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl">
                            Providing an environment that fosters learning, creativity, and holistic growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Facilities Grid */}
            <section className="py-24 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
                        <Sparkles size={16} />
                        DESIGNED FOR EXCELLENCE
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900">
                        Everything Your Child <span className="text-gradient">Needs</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-2xl transition-all duration-500 card-hover"
                        >
                            {/* Image */}
                            <div className="h-52 overflow-hidden relative">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

                                {/* Icon Badge */}
                                <div className={`absolute bottom-4 left-4 p-4 bg-gradient-to-br ${item.gradient} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                    <item.icon size={24} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    {item.description}
                                </p>
                                <div className="flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                    Learn More <ArrowRight size={14} className="ml-2" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
                <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-heading">
                            Experience Our Campus<br />
                            <span className="text-gradient-secondary">In Person</span>
                        </h2>
                        <p className="text-white/80 max-w-2xl mx-auto text-lg mb-10">
                            Schedule a visit to see our world-class facilities and meet our dedicated faculty.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/contact"
                                className="bg-white text-primary hover:bg-secondary hover:text-white px-10 py-5 rounded-full font-bold tracking-widest text-sm transition-all shadow-2xl inline-flex items-center justify-center gap-3"
                            >
                                SCHEDULE A VISIT
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="/admissions"
                                className="glass hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold tracking-widest text-sm transition-all inline-flex items-center justify-center"
                            >
                                APPLY FOR ADMISSION
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
