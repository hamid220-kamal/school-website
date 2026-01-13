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
            content: "The holistic development approach at Excellence Academy is truly commendable. My son has not only excelled academically but has also grown into a confident young man. The faculty's dedication is unparalleled.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
        },
        {
            _id: "2",
            name: "Mrs. Sarah Jenkins",
            role: "Alumni (Batch of 2015)",
            content: "My years at Excellence Academy defined my career. The teachers were more than mentors; they were guides for life. I'm forever grateful for the foundation they provided.",
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
            content: "What sets Excellence Academy apart is their focus on individual attention. Every child is nurtured according to their unique strengths and potential.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
        }
    ];

    const reviews = testimonials.length > 0 ? testimonials : fallbackReviews;

    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
                        <Quote size={16} />
                        VOICES OF TRUST
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                        What Parents &<br />
                        <span className="text-gradient">Alumni Say</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Hear from our community about their experiences at Excellence Academy.
                    </p>
                </motion.div>

                {/* Testimonials Slider */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => swiper?.slidePrev()}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden lg:flex w-14 h-14 items-center justify-center bg-white rounded-full shadow-lg hover:bg-primary hover:text-white transition-all"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => swiper?.slideNext()}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden lg:flex w-14 h-14 items-center justify-center bg-white rounded-full shadow-lg hover:bg-primary hover:text-white transition-all"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        onSwiper={setSwiper}
                        className="pb-16 px-4"
                    >
                        {reviews.map((review, idx) => (
                            <SwiperSlide key={review._id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 h-full flex flex-col group"
                                >
                                    {/* Stars */}
                                    <div className="flex items-center gap-1 text-amber-400 mb-6">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} size={18} fill="currentColor" />
                                        ))}
                                    </div>

                                    {/* Quote Icon */}
                                    <div className="text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">
                                        <Quote size={48} />
                                    </div>

                                    {/* Content */}
                                    <p className="text-slate-600 leading-relaxed mb-8 flex-1 italic">
                                        "{review.content}"
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                                        <div className="w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-primary/10">
                                            <img
                                                src={review.image}
                                                alt={review.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{review.name}</h4>
                                            <p className="text-sm text-primary font-medium">{review.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
