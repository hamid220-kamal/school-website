"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, BookOpen, Users, Trophy, Globe2, Palette, Music, Globe, CheckCircle, Calendar, ArrowRight, Phone, Mail, MapPin, Languages, GraduationCap } from "lucide-react";

export default function CherryBlossomSchool() {
    const facilities = [
        { icon: Globe2, title: "International Labs", desc: "Cambridge-standard facilities" },
        { icon: Languages, title: "Language Center", desc: "5+ foreign languages" },
        { icon: Palette, title: "Creative Arts Wing", desc: "Professional studios" },
        { icon: Music, title: "Performing Arts", desc: "Theatre & music hall" },
        { icon: Trophy, title: "Indoor Sports", desc: "Badminton, basketball courts" },
        { icon: BookOpen, title: "Digital Library", desc: "15,000+ e-books & resources" }
    ];

    const academicPrograms = [
        {
            grade: "Cambridge Primary (Stages 1-6)",
            focus: "International curriculum with global perspective",
            streams: ["English", "Mathematics", "Science", "Languages", "ICT", "Global Perspectives"]
        },
        {
            grade: "Cambridge Lower Secondary (Stages 7-9)",
            focus: "Subject depth and international learning approach",
            streams: ["Core subjects", "Foreign languages", "Arts", "PE", "Life Skills"]
        },
        {
            grade: "Cambridge IGCSE (Grades 9-10)",
            focus: "Globally recognized qualifications",
            streams: ["Compulsory: English, Math, Science", "Electives: Languages, Humanities, Arts", "ICT & Global Perspectives"]
        },
        {
            grade: "Cambridge AS & A Level (Grades 11-12)",
            focus: "Preparation for world's top universities",
            streams: ["Sciences", "Mathematics", "Economics & Business", "Languages & Literature", "Arts & Humanities"]
        }
    ];

    const events = [
        {
            title: "International Cultural Fest 2026",
            date: "March 20, 2026",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop"
        },
        {
            title: "Model United Nations Conference",
            date: "April 15, 2026",
            image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2000&auto=format&fit=crop"
        },
        {
            title: "Arts & Music Showcase",
            date: "May 5, 2026",
            image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2000&auto=format&fit=crop"
        }
    ];

    const gallery = [
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop"
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop"
                        alt="Cherry Blossom School Campus"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-teal-800/90 to-green-900/85" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            CAMBRIDGE INTERNATIONAL
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 leading-tight">
                            Cherry Blossom School
                        </h1>
                        <p className="text-2xl md:text-3xl text-white/95 mb-4 font-bold">
                            Nurturing Global Citizens
                        </p>
                        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                            Since 2005, we've been delivering world-class Cambridge International Education, preparing students for success on the global stage.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/admissions"
                                className="inline-flex items-center gap-3 bg-white text-emerald-900 px-8 py-4 rounded-full font-black tracking-wide hover:bg-secondary hover:text-white transition-all shadow-2xl"
                            >
                                APPLY NOW
                                <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-3 glass hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all"
                            >
                                <Phone size={20} />
                                SCHEDULE VISIT
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-12 bg-emerald-600">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        {[
                            { number: "18+", label: "Years of Bright Horizon" },
                            { number: "1500+", label: "Students" },
                            { number: "100+", label: "International Faculty" },
                            { number: "96%", label: "Cambridge A*/A" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="text-4xl md:text-5xl font-black mb-2">{stat.number}</div>
                                <div className="text-sm md:text-base font-medium text-white/90">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Principal's Message - Similar structure to Bright Horizon but with different content */}
            <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto"
                    >
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative">
                                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                                        alt="Principal Mrs. Sarah Thompson"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl shadow-xl">
                                    <Globe2 size={40} className="text-emerald-600" />
                                </div>
                            </div>

                            <div>
                                <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
                                    <Users size={16} />
                                    PRINCIPAL'S MESSAGE
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                                    Global Education, <span className="text-gradient">Local Values</span>
                                </h2>
                                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                                    "At Cherry Blossom School, we embrace the Cambridge International curriculum's philosophy of fostering critical thinking, creativity, and cultural awareness. Our students are not just learners—they are global citizens equipped to make a difference in an interconnected world."
                                </p>
                                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                                    "With our international faculty and state-of-the-art resources, we provide an educational experience that combines academic rigor with holistic development, preparing our students for the world's most prestigious universities."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div>
                                        <p className="font-black text-slate-900 text-xl">Mrs. Sarah Thompson</p>
                                        <p className="text-slate-600 font-medium">Principal, Cherry Blossom School</p>
                                        <p className="text-sm text-slate-500">M.A. (Oxon), PGCE, Cambridge Certified</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Branch Highlights */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Trophy size={16} />
                            OUR HIGHLIGHTS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Why Choose <span className="text-gradient">Cherry Blossom?</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { icon: Globe2, title: "Cambridge Certified", desc: "Officially recognized international school" },
                            { icon: Languages, title: "5 Foreign Languages", desc: "French, Spanish, German, Mandarin, Japanese" },
                            { icon: Trophy, title: "Global Recognition", desc: "Students in 50+ countries" },
                            { icon: Users, title: "1:12 Teacher Ratio", desc: "Personalized international education" },
                            { icon: GraduationCap, title: "University Placements", desc: "Top universities worldwide" },
                            { icon: Globe, title: "Exchange Programs", desc: "International student exchanges" }
                        ].map((highlight, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-slate-100 hover:border-emerald-300 text-center"
                            >
                                <div className="inline-flex p-4 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl mb-4">
                                    <highlight.icon size={32} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-2">{highlight.title}</h3>
                                <p className="text-slate-600">{highlight.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facilities */}
            <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            WORLD-CLASS FACILITIES
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            International-Standard <span className="text-gradient">Infrastructure</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {facilities.map((facility, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-4 p-6 rounded-2xl bg-white border-2 border-slate-100 hover:border-emerald-300 hover:shadow-lg transition-all"
                            >
                                <div className="flex-shrink-0 p-3 bg-emerald-100 rounded-xl">
                                    <facility.icon size={28} className="text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg text-slate-900 mb-1">{facility.title}</h3>
                                    <p className="text-sm text-slate-600">{facility.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Academic Programs */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <BookOpen size={16} />
                            ACADEMIC PROGRAMS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Cambridge International <span className="text-gradient">Curriculum</span>
                        </h2>
                    </motion.div>

                    <div className="max-w-5xl mx-auto space-y-6">
                        {academicPrograms.map((program, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card p-8 rounded-2xl shadow-lg border-2 border-slate-100 hover:border-emerald-300 hover:shadow-xl transition-all"
                            >
                                <h3 className="text-2xl font-black text-slate-900 mb-2">{program.grade}</h3>
                                <p className="text-emerald-600 font-bold mb-4">{program.focus}</p>
                                <div className="flex flex-wrap gap-2">
                                    {program.streams.map((stream, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium"
                                        >
                                            {stream}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Palette size={16} />
                            CAMPUS GALLERY
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Life at <span className="text-gradient">Cherry Blossom</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                        {gallery.map((image, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                            >
                                <Image
                                    src={image}
                                    alt={`Gallery image ${idx + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Events */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Calendar size={16} />
                            UPCOMING EVENTS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            What's <span className="text-gradient">Happening</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {events.map((event, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                            >
                                <div className="relative h-48">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <p className="text-sm font-bold text-emerald-600 mb-2">{event.date}</p>
                                    <h3 className="text-xl font-black text-slate-900 mb-2">{event.title}</h3>
                                    <Link
                                        href="/announcements"
                                        className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm hover:gap-3 transition-all"
                                    >
                                        Learn More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Admission CTA */}
            <section id="contact" className="py-32 bg-gradient-to-br from-emerald-600 via-teal-600 to-green-700 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-6">
                            Join Cherry Blossom School
                        </h2>
                        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
                            Admissions Open for 2026-27 Academic Year
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link
                                href="/admissions"
                                className="inline-flex items-center gap-3 bg-white text-emerald-900 px-10 py-5 rounded-full font-black tracking-wide hover:bg-secondary hover:text-white transition-all shadow-2xl"
                            >
                                APPLY NOW
                                <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="/downloads/cherry-blossom-brochure.pdf"
                                className="inline-flex items-center gap-3 glass hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold tracking-wide transition-all"
                            >
                                DOWNLOAD PROSPECTUS
                            </Link>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-white/90">
                            <div className="flex items-center gap-3">
                                <Phone size={20} />
                                <span className="font-bold">+91-22-34567890</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={20} />
                                <span className="font-bold">cherryblossom@excellenceacademy.edu</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={20} />
                                <span className="font-bold">Mumbai - 400042</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
