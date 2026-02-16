"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Event {
    id: string;
    title: string;
    date: string;
    campus: string;
    campusColor: string;
    location: string;
    image: string;
    category: string;
}

export function EventsHighlights() {
    const events: Event[] = [
        {
            id: "1",
            title: "Annual Science & Technology Fair 2026",
            date: "March 15-17, 2026",
            campus: "North Campus",
            campusColor: "indigo",
            location: "Main Auditorium",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
            category: "Academic"
        },
        {
            id: "2",
            title: "International Cultural Festival",
            date: "April 5, 2026",
            campus: "South Campus",
            campusColor: "emerald",
            location: "Open Grounds",
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
            category: "Cultural"
        },
        {
            id: "3",
            title: "Inter-Campus Sports Meet 2026",
            date: "March 22-24, 2026",
            campus: "East Campus",
            campusColor: "orange",
            location: "Sports Complex",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop",
            category: "Sports"
        },
        {
            id: "4",
            title: "Alumni Meet & Career Guidance",
            date: "April 10, 2026",
            campus: "North Campus",
            campusColor: "indigo",
            location: "Convention Center",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop",
            category: "Networking"
        },
        {
            id: "5",
            title: "Annual Day Celebration 2026",
            date: "May 2, 2026",
            campus: "South Campus",
            campusColor: "emerald",
            location: "Grand Theater",
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
            category: "Celebration"
        }
    ];

    const campusColors = {
        indigo: "bg-indigo-500",
        emerald: "bg-emerald-500",
        orange: "bg-orange-500"
    };

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]"
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
                        UPCOMING EVENTS
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black font-heading text-slate-900 mb-6 leading-tight">
                        Campus Events &
                        <br />
                        <span className="text-gradient">Activities</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Stay connected with the latest happenings across all our three campuses.
                    </p>
                </motion.div>

                {/* Events Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        className="pb-16"
                    >
                        {events.map((event) => (
                            <SwiperSlide key={event.id}>
                                <div className="group h-full">
                                    <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 card-hover bg-white">
                                        {/* Event Image */}
                                        <div className="relative h-64 overflow-hidden">
                                            <Image
                                                src={event.image}
                                                alt={event.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

                                            {/* Campus Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className={`inline-flex items-center gap-2 ${campusColors[event.campusColor as keyof typeof campusColors]} text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg`}>
                                                    {event.campus}
                                                </span>
                                            </div>

                                            {/* Category Badge */}
                                            <div className="absolute top-4 right-4">
                                                <span className="glass text-white/90 px-4 py-2 rounded-full text-xs font-bold">
                                                    {event.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Event Details */}
                                        <div className="p-6 space-y-4">
                                            <h3 className="text-xl font-black font-heading text-slate-900 leading-tight group-hover:text-primary transition-colors">
                                                {event.title}
                                            </h3>

                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-slate-600 text-sm">
                                                    <Calendar size={16} className="text-primary" />
                                                    <span>{event.date}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-600 text-sm">
                                                    <MapPin size={16} className="text-secondary" />
                                                    <span>{event.location}</span>
                                                </div>
                                            </div>

                                            <div className="pt-2">
                                                <button className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                                                    Learn More
                                                    <ArrowRight size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-8"
                >
                    <Link
                        href="/announcements"
                        className="inline-flex items-center gap-3 bg-gradient-primary text-white px-8 py-4 rounded-full font-bold text-sm shadow-glow hover:shadow-lg transition-all btn-premium"
                    >
                        View All Events
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
