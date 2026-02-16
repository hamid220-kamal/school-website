"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, BookOpen, Users, Trophy, Microscope, Palette, Music, Globe, CheckCircle, Calendar, ArrowRight, Phone, Mail, MapPin, Building } from "lucide-react";

export default function BrightHorizonSchool() {
    const facilities = [
        { icon: BookOpen, title: "Smart Classrooms", desc: "Interactive digital learning" },
        { icon: Microscope, title: "Science Labs", desc: "State-of-the-art equipment" },
        { icon: Palette, title: "Art Studio", desc: "Creative expression space" },
        { icon: Music, title: "Music Room", desc: "Professional instruments" },
        { icon: Trophy, title: "Sports Complex", desc: "Olympic-size facilities" },
        { icon: Globe, title: "Library", desc: "10,000+ books collection" }
    ];

    const academicPrograms = [
        {
            grade: "Pre-Primary (Pre-K to KG)",
            focus: "Play-based learning with emphasis on cognitive development",
            subjects: ["Early Literacy", "Numeracy", "Art & Craft", "Music & Movement", "Outdoor Play"]
        },
        {
            grade: "Primary (Grades 1-5)",
            focus: "Foundation building in core subjects with holistic development",
            subjects: ["English", "Mathematics", "Science", "Social Studies", "Computer Science", "Arts", "Physical Education"]
        },
        {
            grade: "Middle School (Grades 6-8)",
            focus: "Subject specialization and skill development",
            subjects: ["Languages", "Mathematics", "Science", "Social Science", "IT", "Fine Arts", "Sports"]
        },
        {
            grade: "Secondary (Grades 9-10)",
            focus: "CBSE Board preparation with comprehensive curriculum",
            subjects: ["Languages", "Mathematics", "Science (Physics, Chemistry, Biology)", "Social Science", "Computer Applications"]
        },
        {
            grade: "Senior Secondary (Grades 11-12)",
            focus: "Stream selection: Science, Commerce, Humanities",
            subjects: ["Stream-specific electives", "Core subjects", "Skill development", "Career counseling"]
        }
    ];

    const events = [
        {
            title: "Annual Day Celebration 2026",
            date: "March 15, 2026",
            image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2000&auto=format&fit=crop"
        },
        {
            title: "Science Fair & Exhibition",
            date: "April 22, 2026",
            image: "https://images.unsplash.com/photo-1576319155264-99536e0be1ee?q=80&w=2000&auto=format&fit=crop"
        },
        {
            title: "Sports Day Championship",
            date: "May 10, 2026",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2000&auto=format&fit=crop"
        }
    ];

    const gallery = [
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop"
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop"
                        alt="Bright Horizon School Campus"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/95 via-indigo-800/90 to-purple-900/85" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            CBSE AFFILIATED
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 leading-tight">
                            Bright Horizon School
                        </h1>
                        <p className="text-2xl md:text-3xl text-white/95 mb-4 font-bold">
                            Where Excellence Meets Tradition
                        </p>
                        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                            Established in 1989, we have been nurturing young minds for over 35 years with academic excellence and holistic development.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/admissions"
                                className="inline-flex items-center gap-3 bg-white text-indigo-900 px-8 py-4 rounded-full font-black tracking-wide hover:bg-secondary hover:text-white transition-all shadow-2xl"
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
            <section className="py-12 bg-indigo-600">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        {[
                            { number: "35+", label: "Years of Excellence" },
                            { number: "2000+", label: "Students" },
                            { number: "150+", label: "Dedicated Faculty" },
                            { number: "98%", label: "Board Results" }
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
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                                        alt="Principal Dr. Anjali Sharma"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl shadow-xl">
                                    <Award size={40} className="text-indigo-600" />
                                </div>
                            </div>

                            <div>
                                <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
                                    <Users size={16} />
                                    PRINCIPAL'S MESSAGE
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                                    Leading with <span className="text-gradient">Vision & Values</span>
                                </h2>
                                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                                    "At Bright Horizon School, we believe that education is not just about academic excellence, but about nurturing well-rounded individuals who are prepared to face the challenges of tomorrow. Our commitment is to provide a learning environment that fosters curiosity, creativity, and critical thinking."
                                </p>
                                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                                    "With over 35 years of educational excellence, we have consistently maintained the highest standards in CBSE education while ensuring our students develop strong character, leadership skills, and a sense of social responsibility."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div>
                                        <p className="font-black text-slate-900 text-xl">Dr. Anjali Sharma</p>
                                        <p className="text-slate-600 font-medium">Principal, Bright Horizon School</p>
                                        <p className="text-sm text-slate-500">M.Ed., Ph.D. in Educational Leadership</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Branch Section */}
            <section id="about" className="py-32 bg-white">
                <div className="container mx-auto px-4">
                    {/* History */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto mb-24"
                    >
                        <div className="text-center mb-16">
                            <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                                <BookOpen size={16} />
                                OUR HISTORY
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                                A Legacy of <span className="text-gradient">Excellence Since 1989</span>
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop"
                                    alt="School History"
                                    width={600}
                                    height={400}
                                    className="rounded-3xl shadow-2xl"
                                />
                            </div>
                            <div className="space-y-6">
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Founded in 1989 by educationist Dr. Ramesh Kapoor, Bright Horizon School began with a vision to provide world-class CBSE education rooted in Indian values and global perspective.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Starting with just 150 students in a modest building, we have grown into one of Mumbai's most respected educational institutions, nurturing over 2000 students annually and producing outstanding results year after year.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Our commitment to academic excellence, character development, and holistic education has earned us recognition from CBSE and numerous educational awards over the past 35 years.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Campus Infrastructure */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto mb-24"
                    >
                        <div className="text-center mb-16">
                            <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                                <Building size={16} />
                                CAMPUS INFRASTRUCTURE
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                                World-Class <span className="text-gradient">Learning Environment</span>
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "5-Acre Campus", desc: "Sprawling green campus with modern buildings", icon: "🏫" },
                                { title: "60+ Classrooms", desc: "Smart classrooms with interactive boards", icon: "📚" },
                                { title: "Advanced Labs", desc: "Physics, Chemistry, Biology, Computer labs", icon: "🔬" },
                                { title: "Sports Complex", desc: "Olympic-size pool, basketball, cricket grounds", icon: "⚽" },
                                { title: "Library", desc: "10,000+ books and digital resources", icon: "📖" },
                                { title: "Transport", desc: "Fleet of 30+ GPS-enabled buses", icon: "🚌" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="text-center p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border-2 border-indigo-100 hover:border-indigo-300 hover:shadow-xl transition-all"
                                >
                                    <div className="text-5xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-black text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-600">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Faculty */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto mb-24"
                    >
                        <div className="text-center mb-16">
                            <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                                <Users size={16} />
                                OUR FACULTY
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                                Expert <span className="text-gradient">Educators & Mentors</span>
                            </h2>
                            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                                Our team of 150+ qualified teachers brings decades of experience and passion for education
                            </p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { name: "Mrs. Priya Mehta", role: "Senior Mathematics", qual: "M.Sc, B.Ed", exp: "18 years", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
                                { name: "Dr. Anil Kumar", role: "Physics Head", qual: "Ph.D Physics", exp: "22 years", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
                                { name: "Ms. Neha Singh", role: "English Literature", qual: "M.A English", exp: "15 years", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" },
                                { name: "Mr. Rajesh Verma", role: "Chemistry Head", qual: "M.Sc Chemistry", exp: "20 years", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" },
                                { name: "Mrs. Kavita Sharma", role: "Biology Teacher", qual: "M.Sc Botany", exp: "16 years", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop" },
                                { name: "Mr. Amit Patel", role: "Computer Science", qual: "B.Tech CS", exp: "12 years", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop" },
                                { name: "Ms. Deepa Nair", role: "Social Studies", qual: "M.A History", exp: "14 years", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop" },
                                { name: "Mr. Suresh Joshi", role: "Sports Director", qual: "B.P.Ed, NIS", exp: "19 years", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" }
                            ].map((faculty, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all group"
                                >
                                    <div className="relative h-48">
                                        <Image
                                            src={faculty.image}
                                            alt={faculty.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4 text-center">
                                        <h3 className="font-black text-slate-900 text-base mb-1">{faculty.name}</h3>
                                        <p className="text-indigo-600 font-bold text-sm mb-1">{faculty.role}</p>
                                        <p className="text-xs text-slate-500">{faculty.qual}</p>
                                        <p className="text-xs text-slate-400 mt-1">{faculty.exp} experience</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Management Team */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto"
                    >
                        <div className="text-center mb-16">
                            <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                                <Award size={16} />
                                MANAGEMENT TEAM
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                                Leadership <span className="text-gradient">Excellence</span>
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Dr. Anjali Sharma",
                                    role: "Principal",
                                    qual: "M.Ed., Ph.D. in Educational Leadership",
                                    bio: "Leading with 28 years of educational excellence",
                                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
                                },
                                {
                                    name: "Mr. Vikram Reddy",
                                    role: "Vice Principal (Academics)",
                                    qual: "M.Sc., M.Ed., 22 years exp.",
                                    bio: "Expert in curriculum development and academic strategy",
                                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop"
                                },
                                {
                                    name: "Mrs. Sunita Desai",
                                    role: "Administrative Head",
                                    qual: "MBA, B.Ed., 18 years exp.",
                                    bio: "Managing operations and student welfare programs",
                                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                                }
                            ].map((member, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15 }}
                                    className="glass-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                                >
                                    <div className="relative h-64">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-black text-slate-900 mb-1">{member.name}</h3>
                                        <p className="text-indigo-600 font-bold text-lg mb-2">{member.role}</p>
                                        <p className="text-sm text-slate-600 mb-3">{member.qual}</p>
                                        <p className="text-slate-700">{member.bio}</p>
                                    </div>
                                </motion.div>
                            ))}
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
                        <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Trophy size={16} />
                            OUR HIGHLIGHTS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Why Choose <span className="text-gradient">Bright Horizon?</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { icon: Award, title: "98% Board Results", desc: "Consistently top scores in CBSE examinations" },
                            { icon: Users, title: "1:15 Teacher Ratio", desc: "Personalized attention for every student" },
                            { icon: Trophy, title: "50+ Awards Won", desc: "Excellence in academics, sports & arts" },
                            { icon: BookOpen, title: "CBSE Curriculum", desc: "Comprehensive NCERT-based education" },
                            { icon: Globe, title: "Global Exposure", desc: "International exchange programs" },
                            { icon: Microscope, title: "STEM Focus", desc: "Cutting-edge science & technology labs" }
                        ].map((highlight, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-slate-100 hover:border-indigo-300 text-center"
                            >
                                <div className="inline-flex p-4 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl mb-4">
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
                        <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Building size={16} />
                            WORLD-CLASS FACILITIES
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            State-of-the-Art <span className="text-gradient">Infrastructure</span>
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
                                className="flex items-start gap-4 p-6 rounded-2xl bg-white border-2 border-slate-100 hover:border-indigo-300 hover:shadow-lg transition-all"
                            >
                                <div className="flex-shrink-0 p-3 bg-indigo-100 rounded-xl">
                                    <facility.icon size={28} className="text-indigo-600" />
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
                        <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <BookOpen size={16} />
                            ACADEMIC PROGRAMS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Comprehensive <span className="text-gradient">CBSE Curriculum</span>
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
                                className="glass-card p-8 rounded-2xl shadow-lg border-2 border-slate-100 hover:border-indigo-300 hover:shadow-xl transition-all"
                            >
                                <h3 className="text-2xl font-black text-slate-900 mb-2">{program.grade}</h3>
                                <p className="text-indigo-600 font-bold mb-4">{program.focus}</p>
                                <div className="flex flex-wrap gap-2">
                                    {program.subjects.map((subject, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
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
                        <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Palette size={16} />
                            CAMPUS GALLERY
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Life at <span className="text-gradient">Bright Horizon</span>
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
                        <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
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
                                    <p className="text-sm font-bold text-indigo-600 mb-2">{event.date}</p>
                                    <h3 className="text-xl font-black text-slate-900 mb-2">{event.title}</h3>
                                    <Link
                                        href="/announcements"
                                        className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm hover:gap-3 transition-all"
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
            <section id="contact" className="py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 relative overflow-hidden">
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
                            Join Bright Horizon School
                        </h2>
                        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
                            Admissions Open for 2026-27 Academic Year
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link
                                href="/admissions"
                                className="inline-flex items-center gap-3 bg-white text-indigo-900 px-10 py-5 rounded-full font-black tracking-wide hover:bg-secondary hover:text-white transition-all shadow-2xl"
                            >
                                APPLY NOW
                                <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="/downloads/bright-horizon-brochure.pdf"
                                className="inline-flex items-center gap-3 glass hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold tracking-wide transition-all"
                            >
                                DOWNLOAD PROSPECTUS
                            </Link>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-white/90">
                            <div className="flex items-center gap-3">
                                <Phone size={20} />
                                <span className="font-bold">+91-22-23456789</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={20} />
                                <span className="font-bold">brighthorizon@excellenceacademy.edu</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={20} />
                                <span className="font-bold">Mumbai - 400021</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
