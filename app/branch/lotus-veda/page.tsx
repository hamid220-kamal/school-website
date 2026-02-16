"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, BookOpen, Users, Trophy, Cpu, Palette, Music, Zap, CheckCircle, Calendar, ArrowRight, Phone, Mail, MapPin, Microscope, Binary, Rocket } from "lucide-react";

export default function LotusVedaPublicSchool() {
    const facilities = [
        { icon: Cpu, title: "AI & Robotics Lab", desc: "Advanced automation facilities" },
        { icon: Microscope, title: "Innovation Lab", desc: "Maker space with 3D printers" },
        { icon: Binary, title: "Coding Center", desc: "Python, C++, JS training" },
        { icon: Zap, title: "IoT Workshop", desc: "Smart devices & sensors" },
        { icon: Rocket, title: "StartUp Incubator", desc: "Student project support" },
        { icon: BookOpen, title: "Tech Library", desc: "Latest tech books & resources" }
    ];

    const academicPrograms = [
        {
            grade: "Middle School (Grades 6-8)",
            focus: "Foundation in STEM subjects with hands-on learning",
            subjects: ["Mathematics", "Science (Integrated)", "Computer Science", "Robotics Basics", "Design Thinking", "Languages"]
        },
        {
            grade: "Secondary (Grades 9-10)",
            focus: "CBSE curriculum with STEM specialization",
            subjects: ["Advanced Mathematics", "Physics, Chemistry, Biology", "Computer Applications", "AI Fundamentals", "Engineering Graphics"]
        },
        {
            grade: "Senior Secondary - Science Stream (Grades 11-12)",
            focus: "Comprehensive preparation for engineering entrance exams",
            subjects: ["Physics, Chemistry, Mathematics", "Computer Science", "Engineering Projects", "JEE/NEET Coaching"]
        },
        {
            grade: "Technology Electives",
            focus: "Specialized skill development programs",
            subjects: ["Artificial Intelligence & ML", "Robotics & Automation", "App Development", "Cybersecurity", "Data Science"]
        }
    ];

    const events = [
        {
            title: "TechFest 2026",
            date: "March 25, 2026",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop"
        },
        {
            title: "Robotics Championship",
            date: "April 18, 2026",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop"
        },
        {
            title: "Hackathon - Code for Tomorrow",
            date: "May 12, 2026",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop"
        }
    ];

    const gallery = [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2000&auto=format&fit=crop"
                        alt="Lotus Veda Public School Campus"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-900/95 via-red-800/90 to-orange-900/85" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            CBSE - STEM SPECIALIZED
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 leading-tight">
                            Lotus Veda Public School
                        </h1>
                        <p className="text-2xl md:text-3xl text-white/95 mb-4 font-bold">
                            Innovators of Tomorrow, Powered by Technology
                        </p>
                        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                            Established in 2015, we're pioneering STEM education with cutting-edge technology, preparing students for careers in AI, robotics, and innovation.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/admissions"
                                className="inline-flex items-center gap-3 bg-white text-orange-900 px-8 py-4 rounded-full font-black tracking-wide hover:bg-secondary hover:text-white transition-all shadow-2xl"
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
            <section className="py-12 bg-orange-600">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        {[
                            { number: "10+", label: "Years of Innovation" },
                            { number: "1200+", label: "STEM Students" },
                            { number: "80+", label: "Tech Experts" },
                            { number: "95%", label: "University Placements" }
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

            {/* Principal's Message */}
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
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
                                        alt="Principal Mr. Rajesh Kumar"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl shadow-xl">
                                    <Cpu size={40} className="text-orange-600" />
                                </div>
                            </div>

                            <div>
                                <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
                                    <Users size={16} />
                                    PRINCIPAL'S MESSAGE
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                                    Technology Meets <span className="text-gradient">Imagination</span>
                                </h2>
                                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                                    "At Lotus Veda, we don't just teach technology—we empower students to create it. Our STEM-focused curriculum combines rigorous CBSE academics with hands-on experience in AI, robotics, coding, and innovation, preparing students for the careers of the future."
                                </p>
                                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                                    "With state-of-the-art labs, startup incubators, and mentorship from industry professionals, our students are not just learners—they are inventors, coders, and problem-solvers ready to shape tomorrow's world."
                                </p>
                                <div>
                                    <p className="font-black text-slate-900 text-xl">Mr. Rajesh Kumar</p>
                                    <p className="text-slate-600 font-medium">Principal, Lotus Veda Public School</p>
                                    <p className="text-sm text-slate-500">B.Tech (IIT), M.Ed., STEM Education Specialist</p>
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
                        <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Trophy size={16} />
                            OUR HIGHLIGHTS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Why Choose <span className="text-gradient">Lotus Veda?</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { icon: Cpu, title: "AI & Robotics Focus", desc: "Industry-standard equipment & training" },
                            { icon: Rocket, title: "Startup Incubator", desc: "Student projects funded & mentored" },
                            { icon: Trophy, title: "100+ Tech Awards", desc: "National & international competitions" },
                            { icon: Users, title: "Industry Mentors", desc: "Professionals from Google, Microsoft, etc." },
                            { icon: Award, title: "95% Engineering", desc: "Top engineering college placements" },
                            { icon: Zap, title: "Hackathon Culture", desc: "Monthly coding & innovation events" }
                        ].map((highlight, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-slate-100 hover:border-orange-300 text-center"
                            >
                                <div className="inline-flex p-4 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl mb-4">
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
                        <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            CUTTING-EDGE FACILITIES
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Future-Ready <span className="text-gradient">Infrastructure</span>
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
                                className="flex items-start gap-4 p-6 rounded-2xl bg-white border-2 border-slate-100 hover:border-orange-300 hover:shadow-lg transition-all"
                            >
                                <div className="flex-shrink-0 p-3 bg-orange-100 rounded-xl">
                                    <facility.icon size={28} className="text-orange-600" />
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
                        <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <BookOpen size={16} />
                            ACADEMIC PROGRAMS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            STEM-Focused <span className="text-gradient">Curriculum</span>
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
                                className="glass-card p-8 rounded-2xl shadow-lg border-2 border-slate-100 hover:border-orange-300 hover:shadow-xl transition-all"
                            >
                                <h3 className="text-2xl font-black text-slate-900 mb-2">{program.grade}</h3>
                                <p className="text-orange-600 font-bold mb-4">{program.focus}</p>
                                <div className="flex flex-wrap gap-2">
                                    {program.subjects.map((subject, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium"
                                        >
                                            {subject}
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
                        <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Palette size={16} />
                            CAMPUS GALLERY
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Life at <span className="text-gradient">Lotus Veda</span>
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
                        <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
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
                                    <p className="text-sm font-bold text-orange-600 mb-2">{event.date}</p>
                                    <h3 className="text-xl font-black text-slate-900 mb-2">{event.title}</h3>
                                    <Link
                                        href="/announcements"
                                        className="inline-flex items-center gap-2 text-orange-600 font-bold text-sm hover:gap-3 transition-all"
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
            <section id="contact" className="py-32 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 relative overflow-hidden">
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
                            Join Lotus Veda Public School
                        </h2>
                        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
                            Admissions Open for 2026-27 Academic Year
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link
                                href="/admissions"
                                className="inline-flex items-center gap-3 bg-white text-orange-900 px-10 py-5 rounded-full font-black tracking-wide hover:bg-secondary hover:text-white transition-all shadow-2xl"
                            >
                                APPLY NOW
                                <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="/downloads/lotus-veda-brochure.pdf"
                                className="inline-flex items-center gap-3 glass hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold tracking-wide transition-all"
                            >
                                DOWNLOAD PROSPECTUS
                            </Link>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-white/90">
                            <div className="flex items-center gap-3">
                                <Phone size={20} />
                                <span className="font-bold">+91-22-45678901</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={20} />
                                <span className="font-bold">lotusveda@excellenceacademy.edu</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={20} />
                                <span className="font-bold">Mumbai - 400063</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
