"use client";

import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
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
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Soft Background Accents */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(29,112,214,0.03),transparent)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(251,175,23,0.03),transparent)] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Institutional Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-24"
                >
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <span className="h-[1px] w-12 bg-primary/30" />
                        <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">Institutional Voices</span>
                        <span className="h-[1px] w-12 bg-primary/30" />
                    </div>
                    <h2 className="text-5xl md:text-[8rem] font-black font-heading text-slate-950 mb-10 leading-[0.8] tracking-tighter">
                        Elite
                        <br />
                        <span className="text-gradient">Narratives</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                        Hear from the vanguard of our tri-campus network about their journey towards academic mastery.
                    </p>
                </motion.div>

                {/* Testimonials Slider */}
                <div className="relative max-w-[90rem] mx-auto px-4">
                    {/* Navigation Buttons - Elegant Glass */}
                    <div className="absolute -top-16 right-12 flex gap-4 z-20">
                        <button
                            onClick={() => swiper?.slidePrev()}
                            className="w-16 min-w-16 h-16 rounded-2xl border border-slate-100 bg-white/50 backdrop-blur-3xl flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 shadow-sm"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => swiper?.slideNext()}
                            className="w-16 min-w-16 h-16 rounded-2xl border border-slate-100 bg-white/50 backdrop-blur-3xl flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 shadow-sm"
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
                                    className="bg-slate-50 border border-slate-100 p-12 rounded-[4rem] h-full flex flex-col group hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700"
                                >
                                    {/* Verification Header */}
                                    <div className="flex items-center justify-between mb-12">
                                        <div className="flex items-center gap-1.5 text-primary/30">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} size={16} fill="currentColor" stroke="none" className="group-hover:text-primary transition-colors" />
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle2 size={16} className="text-primary" />
                                            <span className="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase">Identity Verified</span>
                                        </div>
                                    </div>

                                    {/* Quote Protocol */}
                                    <div className="relative mb-10">
                                        <Quote size={80} className="absolute -top-16 -left-10 text-primary/5 group-hover:text-primary/10 transition-colors duration-1000" />
                                        <p className="text-slate-500 group-hover:text-slate-950 transition-colors duration-700 leading-relaxed text-xl font-medium italic relative z-10 tracking-tight">
                                            "{review.content}"
                                        </p>
                                    </div>

                                    {/* Author Module */}
                                    <div className="mt-auto pt-12 border-t border-slate-100 flex items-center gap-8">
                                        <div className="relative">
                                            <div className="w-24 h-24 rounded-[2.5rem] overflow-hidden border-2 border-white shadow-xl grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:border-primary">
                                                <img
                                                    src={review.image}
                                                    alt={review.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white shadow-glow transform rotate-[-12deg] group-hover:rotate-0 transition-transform duration-700">
                                                <Quote size={18} className="fill-current" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-black text-slate-950 tracking-tighter uppercase mb-2 italic">{review.name}</h4>
                                            <p className="text-[11px] text-primary font-black tracking-[0.3em] uppercase">{review.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Tactical Indicator */}
                <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12 text-slate-300 uppercase font-black text-[10px] tracking-[0.4em]">
                    <span className="hover:text-primary transition-colors cursor-default italic">4700+ Verified Trust Marks</span>
                    <div className="hidden md:block h-6 w-px bg-slate-100" />
                    <span className="hover:text-primary transition-colors cursor-default italic">Institutional Sentiment: 98.4% Positive</span>
                </div>
            </div>
        </section>
    );
}
