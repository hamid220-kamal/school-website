"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Award, Lightbulb, Heart, Target, CheckCircle2, ShieldCheck, ArrowRight, Zap, Globe, Cpu } from "lucide-react";
import { useRef } from "react";

export function InstitutionAbout() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const yInverse = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const values = [
      { icon: ShieldCheck, title: "Global Standard", desc: "Setting international benchmarks in excellence." },
      { icon: Lightbulb, title: "Future Forward", desc: "Pioneering AI and smart campus initiatives." },
      { icon: Heart, title: "Core Character", desc: "Nurturing deep moral and ethical values." },
      { icon: Target, title: "Impact Driven", desc: "Architecting success for every learner." }
    ];

    return (
        <section ref={containerRef} className="py-52 bg-white relative overflow-hidden">
            {/* Minimalist Texture Accents */}
            <div className="absolute top-0 right-0 w-[70rem] h-[70rem] bg-slate-50 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2 opacity-60" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-32 items-start">
                    
                    {/* LEFT: THE COMPREHENSIVE 5-IMAGE GALLERY INSTALLATION */}
                    <div className="lg:col-span-7 relative h-[1100px] flex items-center">
                        <div className="relative w-full h-full">
                            
                            {/* 01: THE ARCHITECTURAL CORE (Large Main Frame) */}
                            <motion.div 
                                style={{ scale }}
                                className="absolute left-[10%] top-[10%] w-[75%] h-[850px] rounded-[6rem] overflow-hidden border-[1.5rem] border-white shadow-[0_50px_100px_rgba(0,0,0,0.12)] z-10 group"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1800&auto=format&fit=crop"
                                    alt="Academic Core"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[4000ms]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />
                            </motion.div>

                            {/* 02: THE DISCOVERY HUB (Top-Right Research Inset) */}
                            <motion.div 
                                style={{ y: yParallax }}
                                className="absolute right-0 top-0 w-[420px] h-[550px] rounded-[4.5rem] overflow-hidden border-[12px] border-white shadow-2xl z-20 group"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1576267423445-b2e88746b12d?q=80&w=1000&auto=format&fit=crop"
                                    alt="Research Hub"
                                    fill
                                    className="object-cover group-hover:scale-125 transition-transform duration-[4000ms]"
                                />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                            </motion.div>

                            {/* 03: THE CULTURE CANVAS (Bottom-Right Student Inset) */}
                            <motion.div 
                                style={{ y: yInverse }}
                                className="absolute right-[-2.5%] bottom-[5%] w-[380px] h-[500px] rounded-[4rem] overflow-hidden border-[10px] border-white shadow-[0_60px_120px_rgba(29,112,214,0.1)] z-20 group"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop"
                                    alt="Student Life"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[4000ms]"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/60 to-transparent flex flex-col justify-end p-8">
                                    <span className="text-white text-xs font-black uppercase tracking-[0.2em] italic">Character Hub</span>
                                </div>
                            </motion.div>

                            {/* 04: THE LEGACY MARKER (Top-Left Detail Inset) */}
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 1.2 }}
                                className="absolute left-[-5%] top-[15%] w-[300px] h-[380px] rounded-[3.5rem] overflow-hidden border-[8px] border-white shadow-2xl z-20 group"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1000&auto=format&fit=crop"
                                    alt="Academy Detail"
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-primary/5" />
                            </motion.div>

                            {/* 05: THE INNOVATION SPECTRUM (Bottom-Left Inset) */}
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="absolute left-0 bottom-[10%] w-[340px] h-[440px] rounded-[4rem] overflow-hidden border-[10px] border-white shadow-2xl z-20 group"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop"
                                    alt="Innovation"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div 
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="bg-white/90 backdrop-blur-xl p-8 rounded-full border border-white/40 shadow-2xl text-primary"
                                    >
                                        <Zap size={32} />
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* THE LEGACY SENTINEL (Center Anchor Stat) */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1.5, opacity: 1 }}
                                transition={{ delay: 1.2, type: "spring", stiffness: 80 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary p-20 rounded-[6rem] shadow-glow-primary z-30 text-white cursor-default group"
                            >
                                <div className="flex flex-col items-center">
                                    <span className="text-[12rem] font-black leading-[0.6] mb-10 tracking-tighter italic">35<span className="text-4xl font-light opacity-50">+</span></span>
                                    <div className="h-px w-32 bg-white/20 mb-8" />
                                    <span className="text-[14px] font-black tracking-[0.8em] uppercase text-center opacity-70 group-hover:opacity-100 transition-opacity">Legendary mastery</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT: THE INSTITUTIONAL DIRECTIVE */}
                    <div className="lg:col-span-5 pt-32 lg:pl-10 space-y-20">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="flex items-center gap-8">
                                <motion.div 
                                    animate={{ width: [0, 80] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                    className="h-[2px] bg-primary" 
                                />
                                <span className="text-[14px] font-black tracking-[0.6em] text-primary uppercase italic">The Excellence Directive</span>
                            </div>

                            <h2 className="text-7xl md:text-[11rem] font-black font-heading text-slate-950 mb-14 leading-[0.7] tracking-tighter italic">
                                Architecting
                                <br />
                                <span className="text-gradient not-italic">Future Legacies</span>
                            </h2>

                            <p className="text-3xl text-slate-400 font-medium leading-[1.2] italic max-w-xl">
                                An elite educational powerhouse spanning over <strong className="text-slate-950 not-italic">35 years of Academic Mastery</strong>. We engineering high-performance environments where values meet <span className="text-primary italic">Global Innovation</span>.
                            </p>
                        </motion.div>

                        {/* Pillar Grid: The Core Foundation Tiles */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {values.map((v, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i, duration: 1 }}
                                    className="p-14 rounded-[4.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 group cursor-default"
                                >
                                    <div className="w-20 h-20 rounded-[2.5rem] bg-white shadow-xl flex items-center justify-center border border-slate-50 mb-12 group-hover:bg-primary group-hover:text-white transition-all duration-700 group-hover:scale-110">
                                        <v.icon size={32} />
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-950 mb-4 tracking-tighter italic group-hover:text-primary transition-colors">{v.title}</h3>
                                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.25em] leading-loose">{v.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Network Sovereignty Indicators */}
                        <div className="flex flex-wrap gap-14 pt-20 border-t border-slate-100">
                          {[
                            { label: "Global Rating", val: "A++ Institutional Master" },
                            { label: "Status Index", val: "Sovereign Learning Hub" }
                          ].map((item, idx) => (
                            <div key={idx} className="flex flex-col gap-3">
                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">{item.label}</span>
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                    <span className="text-[13px] font-black text-slate-950 uppercase tracking-widest">{item.val}</span>
                                </div>
                            </div>
                          ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
