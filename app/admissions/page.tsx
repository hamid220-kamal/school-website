"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Calendar, FileText, ArrowRight, Users, Sparkles, GraduationCap, Phone, Clock, Award, Download, DollarSign, Shield, BookOpen, Building } from "lucide-react";
import { AdmissionForm } from "@/components/forms/AdmissionForm";

export default function Admissions() {
    const [selectedCampus, setSelectedCampus] = useState("all");

    const campuses = [
        { id: "bright-horizon", name: "Bright Horizon School", board: "CBSE" },
        { id: "cherry-blossom", name: "Cherry Blossom School", board: "Cambridge" },
        { id: "lotus-veda", name: "Lotus Veda Public School", board: "CBSE (STEM)" }
    ];

    const admissionSteps = [
        {
            step: "1",
            title: "Online Inquiry",
            desc: "Fill out the online inquiry form or schedule a campus visit",
            icon: FileText
        },
        {
            step: "2",
            title: "Campus Visit",
            desc: "Tour the campus and meet with admissions counselors",
            icon: Building
        },
        {
            step: "3",
            title: "Application Submission",
            desc: "Submit completed application with required documents",
            icon: CheckCircle
        },
        {
            step: "4",
            title: "Admission Confirmation",
            desc: "Receive admission decision and complete enrollment",
            icon: Award
        },
    ];

    const eligibilityCriteria = [
        {
            campus: "Bright Horizon School",
            grades: "Pre-K to Grade 12",
            requirements: [
                "Age appropriate for grade level (as per CBSE norms)",
                "Previous academic records (if applicable)",
                "Transfer certificate from previous school",
                "Birth certificate and address proof"
            ]
        },
        {
            campus: "Cherry Blossom School",
            grades: "Pre-K to Grade 12",
            requirements: [
                "Age appropriate for grade level (Cambridge standards)",
                "English proficiency assessment (Grade 6+)",
                "Previous academic transcripts",
                "Passport-size photographs and ID proof"
            ]
        },
        {
            campus: "Lotus Veda Public School",
            grades: "Grade 6 to Grade 12",
            requirements: [
                "Strong interest in STEM subjects",
                "Minimum 70% in previous grade Math & Science",
                "Aptitude test for STEM programs",
                "Recommendation letter from previous school"
            ]
        }
    ];

    const documents = [
        "Birth Certificate (Original + 2 copies)",
        "Address Proof (Utility Bill/Aadhar Card)",
        "Previous School Transfer Certificate",
        "Academic Transcripts (Last 2 years)",
        "4 Passport-size Photographs",
        "Medical Fitness Certificate",
        "Caste Certificate (if applicable for reservations)"
    ];

    const benefits = [
        { icon: Award, title: "Merit Scholarships", desc: "Up to 50% fee waiver for top performers" },
        { icon: Clock, title: "Flexible Counseling", desc: "Multiple slots available for campus visits" },
        { icon: Phone, title: "24/7 Admission Support", desc: "Dedicated helpline: +91-1234567890" },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Header */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary" />
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Floating Orbs */}
                <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/30 rounded-full blur-[80px]" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-flex items-center gap-2 glass px-8 py-4 rounded-full text-white text-base font-black tracking-wider mb-6 animate-pulse">
                            <Sparkles size={20} className="text-secondary" />
                            🔥 ADMISSIONS OPEN 2026-27 - ALL CAMPUSES
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black font-heading text-white mb-6">
                            Join Bright Horizon
                            <br />
                            <span className="text-gradient-secondary">Global Institution</span>
                        </h1>
                        <p className="text-white/90 max-w-3xl mx-auto text-xl md:text-2xl mb-10 leading-relaxed">
                            Secure your child's future at one of our three premier institutions.
                            <br />
                            <strong className="text-secondary">Limited Seats Available!</strong>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#application-form"
                                className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-full font-black tracking-widest text-sm shadow-2xl hover:bg-secondary hover:text-white transition-all btn-premium"
                            >
                                APPLY NOW
                                <ArrowRight size={20} />
                            </a>
                            <a
                                href="#download-brochure"
                                className="inline-flex items-center gap-3 glass hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold tracking-widest text-sm transition-all"
                            >
                                <Download size={20} />
                                DOWNLOAD BROCHURE
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Bar */}
            <div className="bg-slate-900 py-10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 text-white"
                            >
                                <div className="p-4 bg-gradient-secondary rounded-xl flex-shrink-0">
                                    <item.icon size={28} />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg">{item.title}</h3>
                                    <p className="text-white/70 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-24 space-y-32">
                {/* Admission Overview */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <BookOpen size={16} />
                            ADMISSION OVERVIEW
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Welcome to Our <span className="text-gradient">Admission Process</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Bright Horizon Network welcomes students from all backgrounds who are eager to learn and grow.
                            Our centralized admission system makes it easy to apply to any of our three world-class campuses.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {campuses.map((campus, idx) => (
                            <motion.div
                                key={campus.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-3xl bg-gradient-to-br from-white to-slate-50 border-2 border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all"
                            >
                                <GraduationCap size={40} className="text-primary mb-4" />
                                <h3 className="text-xl font-black text-slate-900 mb-2">{campus.name}</h3>
                                <p className="text-sm font-bold text-primary mb-4">{campus.board} Curriculum</p>
                                <Link
                                    href={`/branch/${campus.id}`}
                                    className="text-sm font-bold text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-2"
                                >
                                    Learn More <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Eligibility Criteria */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <CheckCircle size={16} />
                            ELIGIBILITY CRITERIA
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Who Can <span className="text-gradient">Apply?</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-8 max-w-5xl mx-auto">
                        {eligibilityCriteria.map((criteria, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card p-8 rounded-2xl shadow-lg"
                            >
                                <h3 className="text-2xl font-black text-slate-900 mb-3">{criteria.campus}</h3>
                                <p className="text-primary font-bold mb-4">{criteria.grades}</p>
                                <ul className="space-y-2">
                                    {criteria.requirements.map((req, rIdx) => (
                                        <li key={rIdx} className="flex items-start gap-3">
                                            <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-700">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Required Documents */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 max-w-4xl mx-auto glass-card p-10 rounded-3xl shadow-premium"
                    >
                        <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                            <FileText className="text-primary" size={28} />
                            Required Documents
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {documents.map((doc, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent">
                                    <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 font-medium">{doc}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Admission Process */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Calendar size={16} />
                            ADMISSION PROCESS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Simple <span className="text-gradient">4-Step Process</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Our streamlined admission process makes it easy for you to secure your child's future.
                        </p>
                    </motion.div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-6">
                            {admissionSteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    {/* Connector Line */}
                                    {idx < admissionSteps.length - 1 && (
                                        <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-purple-300" />
                                    )}

                                    <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all relative z-10 text-center group">
                                        {/* Step Number */}
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-primary text-white rounded-full flex items-center justify-center font-black text-lg shadow-glow">
                                            {step.step}
                                        </div>

                                        {/* Icon */}
                                        <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                            <step.icon size={32} />
                                        </div>

                                        <h3 className="font-black text-lg text-slate-900 mb-2">{step.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Download Brochure Section */}
                <section id="download-brochure">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-12 text-center shadow-2xl"
                    >
                        <Download size={56} className="mx-auto text-primary mb-6" />
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                            Download Our Prospectus
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                            Get detailed information about our campuses, curriculum, facilities, and fee structure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/downloads/bright-horizon-brochure-2026-27.pdf"
                                className="inline-flex items-center gap-3 bg-gradient-primary text-white px-8 py-4 rounded-full font-bold shadow-glow hover:shadow-xl transition-all"
                            >
                                <Download size={20} />
                                Download Complete Prospectus (PDF)
                            </Link>
                            <Link
                                href="/downloads/fee-structure-2026-27.pdf"
                                className="inline-flex items-center gap-3 bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all"
                            >
                                <DollarSign size={20} />
                                Fee Structure
                            </Link>
                        </div>
                    </motion.div>
                </section>

                {/* Application Form Section */}
                <div id="application-form" className="scroll-mt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <FileText size={16} />
                            ONLINE INQUIRY FORM
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-4">
                            Begin Your <span className="text-gradient">Application Journey</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Fill in the details below to start the admission process. Our admissions team will contact you within 24 hours.
                        </p>
                    </motion.div>

                    <AdmissionForm />
                </div>

                {/* Contact Support */}
                <section className="text-center bg-slate-50 rounded-3xl p-12">
                    <Phone size={48} className="mx-auto text-primary mb-6" />
                    <h2 className="text-3xl font-black text-slate-900 mb-4">
                        Need Help with Your Application?
                    </h2>
                    <p className="text-lg text-slate-600 mb-6">
                        Our admissions team is here to assist you every step of the way.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-700">
                        <div className="flex items-center gap-3">
                            <Phone size={20} className="text-primary" />
                            <span className="font-bold">+91-1234567890</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FileText size={20} className="text-primary" />
                            <span className="font-bold">admissions@brighthorizon.edu</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock size={20} className="text-primary" />
                            <span className="font-bold">Mon-Sat, 9 AM - 6 PM</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
