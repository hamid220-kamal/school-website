"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, Users, Award, Heart, TrendingUp, MapPin, Clock, DollarSign, Upload, FileText, Mail, Phone, ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function CareersPage() {
    const [selectedDepartment, setSelectedDepartment] = useState("all");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        resume: null as File | null
    });

    const jobOpenings = [
        {
            id: 1,
            title: "Mathematics Teacher",
            department: "Academics",
            location: "Bright Horizon School",
            type: "Full-time",
            experience: "3-5 years",
            salary: "₹4-6 LPA",
            posted: "2 days ago",
            description: "Looking for passionate mathematics teacher for grades 9-12 with strong CBSE curriculum knowledge.",
            requirements: [
                "B.Ed or M.Ed in Mathematics",
                "Minimum 3 years teaching experience",
                "Strong classroom management skills",
                "Proficiency in digital teaching tools"
            ]
        },
        {
            id: 2,
            title: "Cambridge Coordinator",
            department: "Academics",
            location: "Cherry Blossom School",
            type: "Full-time",
            experience: "5+ years",
            salary: "₹6-8 LPA",
            posted: "5 days ago",
            description: "Seeking experienced Cambridge coordinator to lead international curriculum implementation and teacher training.",
            requirements: [
                "Cambridge certification required",
                "5+ years in international schools",
                "Leadership and coordination experience",
                "Strong communication skills"
            ]
        },
        {
            id: 3,
            title: "Robotics & AI Instructor",
            department: "STEM",
            location: "Lotus Veda Public School",
            type: "Full-time",
            experience: "2-4 years",
            salary: "₹5-7 LPA",
            posted: "1 week ago",
            description: "Innovative educator to teach robotics, AI, and coding to middle and high school students.",
            requirements: [
                "Degree in Computer Science/Engineering",
                "Experience with Arduino, Raspberry Pi",
                "Knowledge of Python, C++, Scratch",
                "Passion for STEM education"
            ]
        },
        {
            id: 4,
            title: "Sports Coach (Football & Athletics)",
            department: "Sports",
            location: "All Campuses",
            type: "Full-time",
            experience: "3-5 years",
            salary: "₹3-5 LPA",
            posted: "3 days ago",
            description: "Dynamic sports coach to train students in football and athletics for inter-school competitions.",
            requirements: [
                "Certified sports coach",
                "3+ years coaching experience",
                "First aid certification",
                "Ability to motivate students"
            ]
        },
        {
            id: 5,
            title: "School Counselor",
            department: "Student Welfare",
            location: "Bright Horizon School",
            type: "Full-time",
            experience: "4-6 years",
            salary: "₹4-6 LPA",
            posted: "1 week ago",
            description: "Compassionate counselor to support student mental health, career guidance, and personal development.",
            requirements: [
                "M.A. in Psychology/Counseling",
                "Licensed counselor",
                "Experience in school settings",
                "Empathy and communication skills"
            ]
        },
        {
            id: 6,
            title: "Digital Marketing Manager",
            department: "Administration",
            location: "Head Office",
            type: "Full-time",
            experience: "5+ years",
            salary: "₹6-9 LPA",
            posted: "4 days ago",
            description: "Strategic marketing professional to manage digital presence, admissions campaigns, and brand building.",
            requirements: [
                "MBA/Degree in Marketing",
                "5+ years digital marketing experience",
                "SEO, SEM, Social Media expertise",
                "Education sector experience preferred"
            ]
        }
    ];

    const benefits = [
        {
            icon: Award,
            title: "Competitive Salary",
            description: "Industry-leading compensation packages with annual increments and performance bonuses"
        },
        {
            icon: Heart,
            title: "Health Benefits",
            description: "Comprehensive health insurance for employees and their families"
        },
        {
            icon: TrendingUp,
            title: "Professional Growth",
            description: "Regular training, workshops, and opportunities for career advancement"
        },
        {
            icon: Users,
            title: "Collaborative Culture",
            description: "Work with passionate educators in a supportive, innovative environment"
        }
    ];

    const departments = ["all", "Academics", "STEM", "Sports", "Student Welfare", "Administration"];

    const filteredJobs = selectedDepartment === "all"
        ? jobOpenings
        : jobOpenings.filter(job => job.department === selectedDepartment);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, resume: e.target.files[0] });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert("Thank you for your application! Our HR team will review your profile and contact you soon.");
        // Reset form
        setFormData({
            name: "",
            email: "",
            phone: "",
            position: "",
            experience: "",
            resume: null
        });
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
                        alt="Join Our Team"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-purple-900/90 to-primary/95" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Briefcase size={16} className="text-secondary" />
                            JOIN OUR TEAM
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 leading-tight">
                            Build Your Career in
                            <br />
                            <span className="text-gradient-secondary">Education Excellence</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                            Join Excellence Academy Network and make a lasting impact on the future generation.
                        </p>
                        <a
                            href="#current-openings"
                            className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 font-black tracking-wide rounded-full shadow-2xl hover:bg-secondary hover:text-white transition-all btn-premium"
                        >
                            VIEW OPENINGS
                            <ArrowRight size={20} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Work With Us Section */}
            <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Users size={16} className="text-secondary" />
                            WHY WORK WITH US
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Why Choose <span className="text-gradient">Excellence Academy?</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            We believe that great educators create great students. Join our network of 200+ passionate
                            professionals across three world-class campuses and shape the future of education.
                        </p>
                    </motion.div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-2xl bg-white border-2 border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all text-center group"
                            >
                                <div className="inline-flex p-4 rounded-2xl bg-gradient-primary text-white mb-4 group-hover:scale-110 transition-transform">
                                    <benefit.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {[
                            { number: "200+", label: "Educators" },
                            { number: "3", label: "Campuses" },
                            { number: "4700+", label: "Students" },
                            { number: "35+", label: "Years Legacy" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-50"
                            >
                                <div className="text-4xl font-black text-primary mb-2">{stat.number}</div>
                                <div className="text-sm font-bold text-slate-700">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Current Openings */}
            <section id="current-openings" className="py-32 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Briefcase size={16} className="text-secondary" />
                            CURRENT OPENINGS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Find Your <span className="text-gradient">Perfect Role</span>
                        </h2>
                    </motion.div>

                    {/* Department Filter */}
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {departments.map((dept) => (
                            <button
                                key={dept}
                                onClick={() => setSelectedDepartment(dept)}
                                className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${selectedDepartment === dept
                                        ? "bg-gradient-primary text-white shadow-glow"
                                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                    }`}
                            >
                                {dept === "all" ? "All Positions" : dept}
                            </button>
                        ))}
                    </div>

                    {/* Job Listings */}
                    <div className="max-w-5xl mx-auto space-y-6">
                        {filteredJobs.map((job, idx) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="glass-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-slate-100 hover:border-primary/30"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-start gap-3 mb-2">
                                            <div className="p-3 bg-gradient-primary text-white rounded-xl flex-shrink-0">
                                                <Briefcase size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-black text-slate-900">{job.title}</h3>
                                                <p className="text-primary font-bold">{job.department}</p>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 mb-4">{job.description}</p>

                                        {/* Job Details */}
                                        <div className="flex flex-wrap gap-4 mb-4 text-sm">
                                            <span className="flex items-center gap-2 text-slate-700">
                                                <MapPin size={16} className="text-primary" />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-2 text-slate-700">
                                                <Clock size={16} className="text-primary" />
                                                {job.type}
                                            </span>
                                            <span className="flex items-center gap-2 text-slate-700">
                                                <Award size={16} className="text-primary" />
                                                {job.experience}
                                            </span>
                                            <span className="flex items-center gap-2 text-slate-700 font-bold">
                                                <DollarSign size={16} className="text-secondary" />
                                                {job.salary}
                                            </span>
                                        </div>

                                        {/* Requirements */}
                                        <div className="mb-4">
                                            <h4 className="font-bold text-slate-900 mb-2 text-sm">Requirements:</h4>
                                            <ul className="space-y-1">
                                                {job.requirements.map((req, rIdx) => (
                                                    <li key={rIdx} className="flex items-start gap-2 text-sm text-slate-700">
                                                        <CheckCircle size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                                                        {req}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <p className="text-xs text-slate-500">Posted {job.posted}</p>
                                    </div>

                                    <a
                                        href="#upload-resume"
                                        className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:shadow-xl transition-all flex-shrink-0"
                                    >
                                        APPLY NOW
                                        <ArrowRight size={18} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredJobs.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-lg text-slate-600">No openings found in this category. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Upload Resume Section */}
            <section id="upload-resume" className="py-32 bg-gradient-to-b from-slate-50 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Upload size={16} className="text-secondary" />
                            SUBMIT YOUR APPLICATION
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Apply for a <span className="text-gradient">Position</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Fill in your details and upload your resume. We'll review your application and get back to you within 5 business days.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto glass-card p-10 rounded-3xl shadow-premium"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors"
                                        placeholder="+91-9876543210"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        Position Applied For *
                                    </label>
                                    <select
                                        required
                                        value={formData.position}
                                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors"
                                    >
                                        <option value="">Select Position</option>
                                        {jobOpenings.map((job) => (
                                            <option key={job.id} value={job.title}>
                                                {job.title} - {job.location}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    Years of Experience *
                                </label>
                                <select
                                    required
                                    value={formData.experience}
                                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors"
                                >
                                    <option value="">Select Experience</option>
                                    <option value="0-1">0-1 years</option>
                                    <option value="1-3">1-3 years</option>
                                    <option value="3-5">3-5 years</option>
                                    <option value="5-10">5-10 years</option>
                                    <option value="10+">10+ years</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    Upload Resume (PDF, DOC, DOCX - Max 5MB) *
                                </label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        required
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-primary file:text-white hover:file:bg-primary/90"
                                    />
                                </div>
                                {formData.resume && (
                                    <p className="mt-2 text-sm text-secondary font-bold flex items-center gap-2">
                                        <CheckCircle size={16} />
                                        {formData.resume.name} uploaded
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-3 bg-gradient-primary text-white px-10 py-5 rounded-xl font-black tracking-wide shadow-glow hover:shadow-xl transition-all"
                            >
                                <Upload size={24} />
                                SUBMIT APPLICATION
                            </button>

                            <p className="text-xs text-slate-500 text-center">
                                By submitting this form, you agree to our privacy policy and terms of service.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Contact HR */}
            <section className="py-20 bg-gradient-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">
                        Have Questions About Careers?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Our HR team is here to help you with any queries about job openings, application process, or work culture.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <div className="flex items-center gap-3">
                            <Mail size={24} />
                            <span className="font-bold text-lg">careers@excellenceacademy.edu</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone size={24} />
                            <span className="font-bold text-lg">+91-1234567890</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
