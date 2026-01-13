"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Play, Sparkles, Award, Users } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export function HeroSlider() {
    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
            title: "BUILDING FUTURE",
            highlight: "LEADERS",
            subtitle: "Empowering students with knowledge, character, and skills for tomorrow's world."
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1544531696-6569265f026a?q=80&w=2000&auto=format&fit=crop",
            title: "SHAPING BRIGHT",
            highlight: "FUTURES",
            subtitle: "A legacy of excellence in holistic education and personal growth."
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop",
            title: "INNOVATING",
            highlight: "EDUCATION",
            subtitle: "Where tradition meets technology to create world-class learners."
        }
    ];

    const stats = [
        { icon: Award, value: "35+", label: "Years of Excellence" },
        { icon: Users, value: "5000+", label: "Happy Students" },
        { icon: Sparkles, value: "98%", label: "Success Rate" }
    ];

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 z-10" />

            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-full w-full">
                            {/* Image with Gradient Overlay */}
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-40"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            />

                            {/* Animated Grid Pattern */}
                            <div className="absolute inset-0 opacity-10 z-10"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                                    backgroundSize: '50px 50px'
                                }}
                            />

                            {/* Floating Orbs */}
                            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />

                            {/* Content */}
                            <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="max-w-5xl"
                                >
                                    {/* Badge */}
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass text-sm font-bold tracking-[0.15em] mb-8"
                                    >
                                        <Sparkles size={16} className="text-secondary" />
                                        WELCOME TO EXCELLENCE ACADEMY
                                    </motion.span>

                                    {/* Main Title */}
                                    <h2 className="text-5xl sm:text-6xl md:text-8xl font-black font-heading tracking-tight leading-none mb-2">
                                        {slide.title}
                                    </h2>
                                    <h2 className="text-5xl sm:text-6xl md:text-8xl font-black font-heading tracking-tight leading-none mb-8">
                                        <span className="text-gradient-secondary">{slide.highlight}</span>
                                    </h2>
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="text-lg md:text-2xl font-light max-w-2xl text-white/80 mb-12"
                                >
                                    {slide.subtitle}
                                </motion.p>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="flex flex-col sm:flex-row gap-4"
                                >
                                    <Link
                                        href="/admissions"
                                        className="group bg-gradient-secondary text-white px-10 py-4 font-bold tracking-widest text-sm rounded-full shadow-glow-secondary hover:shadow-glow transition-all inline-flex items-center gap-3 btn-premium"
                                    >
                                        START YOUR JOURNEY
                                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        href="/about"
                                        className="group glass hover:bg-white/20 text-white px-10 py-4 font-bold tracking-widest text-sm rounded-full transition-all inline-flex items-center gap-3"
                                    >
                                        <Play size={18} className="fill-current" />
                                        VIRTUAL TOUR
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Bottom Stats Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-30">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-3 gap-4 md:gap-0">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1 + (idx * 0.1) }}
                                className={`py-8 px-6 text-center text-white ${idx === 0 ? 'bg-primary' :
                                        idx === 1 ? 'bg-gradient-secondary' :
                                            'bg-slate-800'
                                    } ${idx === 0 ? 'rounded-tl-3xl' : ''} ${idx === 2 ? 'rounded-tr-3xl' : ''}`}
                            >
                                <stat.icon size={24} className="mx-auto mb-2 opacity-80" />
                                <div className="text-3xl md:text-4xl font-black">{stat.value}</div>
                                <div className="text-xs md:text-sm font-medium tracking-wider opacity-80 mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center gap-2"
            >
                <span className="text-white/50 text-xs tracking-widest">SCROLL</span>
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
