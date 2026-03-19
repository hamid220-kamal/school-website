"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export function ChairmanMessage() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Soft Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(29,112,214,0.03),transparent)] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(251,175,23,0.03),transparent)] pointer-events-none" />
            
            {/* Large Institutional Seal Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
                <div className="w-[800px] h-[800px] border-[40px] border-slate-200 rounded-full flex items-center justify-center">
                    <span className="text-8xl font-black tracking-[1em] text-slate-200 rotate-12">HORIZON</span>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        {/* Portrait Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="lg:col-span-5 relative"
                        >
                            <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-slate-100 group">
                                <Image
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                                    alt="Chairman"
                                    width={600}
                                    height={800}
                                    className="w-full h-auto object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Floating Metadata Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-10 -right-10 bg-white border border-slate-100 p-12 rounded-[3rem] shadow-[0_25px_80px_rgba(0,0,0,0.08)] z-20 max-w-[320px]"
                            >
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] font-black text-primary tracking-[0.4em] uppercase mb-2 leading-none">Global Visionary</span>
                                    <h4 className="text-2xl font-black text-slate-950 leading-tight tracking-tighter">Dr. Rajesh Kumar</h4>
                                    <div className="h-[2px] w-12 bg-primary mt-3" />
                                </div>
                            </motion.div>

                            {/* Decorative Background Frame */}
                            <div className="absolute top-10 -left-10 w-full h-full border border-slate-100 rounded-[3.5rem] -z-10" />
                        </motion.div>

                        {/* Message Section */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="space-y-12"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="h-[1px] w-12 bg-primary" />
                                    <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">The Chairman's Vision</span>
                                </div>

                                <blockquote className="relative">
                                    <div className="absolute -top-14 -left-14 opacity-[0.05]">
                                        <Quote size={160} className="text-primary fill-primary" />
                                    </div>
                                    <p className="text-4xl md:text-6xl font-black font-heading text-slate-950 leading-tight tracking-tighter mb-12 relative z-10 italic">
                                        "Education is not just about academic excellence; it's about nurturing minds, building character, and inspiring the next generation of leaders."
                                    </p>
                                </blockquote>

                                <div className="space-y-8 max-w-2xl">
                                    <p className="text-xl text-slate-500 leading-relaxed font-medium">
                                        For over three decades, we have remained committed to this vision. Our three campuses stand as beacons of innovation, tradition, and excellence, each contributing uniquely to our mission of holistic education.
                                    </p>
                                    <p className="text-xl text-slate-500 leading-relaxed font-medium">
                                        I invite you to be part of our legacy—where every student is valued, every dream is nurtured, and every achievement is celebrated.
                                    </p>
                                </div>

                                <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row items-start md:items-center gap-12">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-black text-slate-300 tracking-[0.4em] uppercase mb-4">FOUNDER & CEO</span>
                                        <div className="flex items-center gap-4">
                                            <div className="w-[200px] h-[60px] relative mt-2">
                                                {/* Representing a digital signature */}
                                                <div className="absolute inset-0 border-b border-slate-100 flex items-end pb-3">
                                                    <span className="text-4xl font-serif text-slate-300 italic tracking-tighter">R. Kumar</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="hidden md:block w-[1px] h-12 bg-slate-100" />

                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-black text-slate-300 tracking-[0.4em] uppercase mb-3">Qualifications</span>
                                        <div className="flex flex-wrap gap-2">
                                            {["Ph.D. Ed Leadership", "Ex-IIT Faculty", "35+ Years"].map((tag, i) => (
                                                <span key={i} className="text-[10px] font-black text-slate-400 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 italic tracking-widest uppercase">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
