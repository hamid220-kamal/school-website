"use client";

import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Testimonial {
    _id: string;
    name: string;
    role: string;
    content: string;
    rating: number;
    image: string;
}

interface TestimonialsProps {
    testimonials?: Testimonial[];
}

export function Testimonials({ testimonials = [] }: TestimonialsProps) {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    const fallbackReviews: Testimonial[] = [
        {
            _id: "1",
            name: "Dr. Rajesh Kumar",
            role: "Parent of Grade 10 Student",
            content: "The holistic development approach at Bright Horizon is truly commendable. My son has not only excelled academically but has also grown into a confident young man. The faculty's dedication is unparalleled.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
        },
        {
            _id: "2",
            name: "Mrs. Sarah Jenkins",
            role: "Alumni (Batch of 2015)",
            content: "My years at Bright Horizon defined my career. The teachers were more than mentors; they were guides for life. I'm forever grateful for the foundation they provided.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
        },
        {
            _id: "3",
            name: "Mr. Anand Mehta",
            role: "Parent of Grade 4 Student",
            content: "We moved from the US and were worried about the transition. The faculty made it seamless. The facilities are truly world-class, matching the best international standards.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
        },
        {
            _id: "4",
            name: "Ms. Priya Sharma",
            role: "Parent of Grade 7 Student",
            content: "What sets Bright Horizon apart is their focus on individual attention. Every child is nurtured according to their unique strengths and potential.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
        }
    ];

    const reviews = testimonials.length > 0 ? testimonials : fallbackReviews;

    return (
        <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
            {/* Cinematic Background Accents */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(251,191,36,0.05),transparent)] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Tactical Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-24"
                >
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <span className="h-[1px] w-8 bg-secondary/50" />
                        <span className="text-[10px] font-black tracking-[0.4em] text-secondary uppercase">Institutional Voices</span>
                        <span className="h-[1px] w-8 bg-secondary/50" />
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black font-heading text-white mb-10 leading-[0.85] tracking-tighter">
                        Elite
                        <br />
                        <span className="text-gradient-secondary">Narratives</span>
                    </h2>
                    <p className="text-xl text-white/30 max-w-2xl mx-auto leading-relaxed font-medium">
                        Hear from the vanguard of our tri-campus network about their journey towards academic mastery.
                    </p>
                </motion.div>

                {/* Testimonials Slider */}
                <div className="relative max-w-[90rem] mx-auto px-4">
                    {/* Navigation Buttons - HUD Style */}
                    <div className="absolute -top-12 right-12 flex gap-4 z-20">
                        <button
                            onClick={() => swiper?.slidePrev()}
                            className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-3xl flex items-center justify-center text-white/40 hover:text-secondary hover:border-secondary transition-all"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => swiper?.slideNext()}
                            className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-3xl flex items-center justify-center text-white/40 hover:text-secondary hover:border-secondary transition-all"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={40}
                        slidesPerView={1}
                        breakpoints={{
                            1024: { slidesPerView: 3 },
                            768: { slidesPerView: 2 }
                        }}
                        autoplay={{ delay: 8000, disableOnInteraction: false }}
                        onSwiper={setSwiper}
                        className="py-12"
                    >
                        {reviews.map((review, idx) => (
                            <SwiperSlide key={review._id}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white/[0.01] backdrop-blur-3xl border border-white/5 p-12 rounded-[4rem] h-full flex flex-col group hover:bg-white/[0.03] transition-all duration-700"
                                >
                                    {/* Verification Header */}
                                    <div className="flex items-center justify-between mb-10">
                                        <div className="flex items-center gap-1 text-secondary/30">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} size={14} fill="currentColor" stroke="none" className="group-hover:text-secondary transition-colors" />
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-[8px] font-black text-white/20 tracking-[0.2em] uppercase">Identity Verified</span>
                                        </div>
                                    </div>

                                    {/* Quote Protocol */}
                                    <div className="relative mb-8">
                                        <Quote size={60} className="absolute -top-10 -left-6 text-white/[0.03] group-hover:text-secondary/[0.05] transition-colors duration-700" />
                                        <p className="text-white/40 group-hover:text-white/70 transition-colors leading-[1.8] text-lg font-medium italic relative z-10">
                                            "{review.content}"
                                        </p>
                                    </div>

                                    {/* Author Module */}
                                    <div className="mt-auto pt-10 border-t border-white/10 flex items-center gap-6">
                                        <div className="relative">
                                            <div className="w-20 h-20 rounded-[1.8rem] overflow-hidden border-2 border-white/10 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:border-secondary">
                                                <img
                                                    src={review.image}
                                                    alt={review.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl bg-secondary flex items-center justify-center text-slate-950 shadow-glow-secondary transform group-hover:rotate-12 transition-transform">
                                                <Quote size={14} />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black text-white tracking-widest uppercase mb-1">{review.name}</h4>
                                            <p className="text-[10px] text-secondary font-black tracking-[0.3em] uppercase">{review.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Tactical Indicator */}
                <div className="mt-16 flex items-center justify-center gap-12 text-white/10 uppercase font-black text-[9px] tracking-[0.5em]">
                    <span className="hover:text-secondary transition-colors cursor-default">4700+ Verified Trust Marks</span>
                    <div className="h-4 w-px bg-white/5" />
                    <span className="hover:text-secondary transition-colors cursor-default">Institutional Sentiment Analysis: 98.4% Positive</span>
                </div>
            </div>
        </section>
    );
}
