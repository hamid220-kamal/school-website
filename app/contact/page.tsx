"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Building, Globe } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        campus: "",
        subject: "",
        message: ""
    });

    const centralOffice = {
        name: "Excellence Academy Network - Head Office",
        address: "Knowledge Hub, Sector 15, Mumbai, Maharashtra - 400001",
        phone: "+91-22-12345678",
        email: "info@excellenceacademy.edu",
        whatsapp: "+919876543210",
        timings: "Monday - Saturday: 9:00 AM - 6:00 PM"
    };

    const branches = [
        {
            id: "bright-horizon",
            name: "Bright Horizon School",
            tagline: "CBSE Campus",
            address: "Sector 21, Knowledge Park, Mumbai - 400021",
            phone: "+91-22-23456789",
            email: "brighthorizon@excellenceacademy.edu",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.71637033203123!3d19.082177514265267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890",
            color: "indigo"
        },
        {
            id: "cherry-blossom",
            name: "Cherry Blossom School",
            tagline: "International Campus",
            address: "Green Valley, International Zone, Mumbai - 400042",
            phone: "+91-22-34567890",
            email: "cherryblossom@excellenceacademy.edu",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.71637033203123!3d19.082177514265267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567891",
            color: "emerald"
        },
        {
            id: "lotus-veda",
            name: "Lotus Veda Public School",
            tagline: "Technology Campus",
            address: "Tech Valley, Innovation District, Mumbai - 400063",
            phone: "+91-22-45678901",
            email: "lotusveda@excellenceacademy.edu",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.71637033203123!3d19.082177514265267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567892",
            color: "orange"
        }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for contacting us! We'll get back to you within 24 hours.");
        setFormData({
            name: "",
            email: "",
            phone: "",
            campus: "",
            subject: "",
            message: ""
        });
    };

    const handleWhatsApp = () => {
        window.open(`https://wa.me/${centralOffice.whatsapp.replace(/[^0-9]/g, '')}?text=Hello, I would like to inquire about admissions.`, '_blank');
    };

    const colorClasses = {
        indigo: "bg-indigo-500",
        emerald: "bg-emerald-500",
        orange: "bg-orange-500"
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-primary">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Phone size={16} className="text-secondary" />
                            GET IN TOUCH
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 leading-tight">
                            Contact
                            <br />
                            <span className="text-gradient-secondary">Excellence Academy</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            We're here to answer your questions and help you find the perfect educational path for your child.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Central Office */}
            <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Building size={16} className="text-secondary" />
                            CENTRAL OFFICE
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Our <span className="text-gradient">Head Office</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto glass-card p-12 rounded-3xl shadow-premium"
                    >
                        <h3 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                            <Building className="text-primary" size={36} />
                            {centralOffice.name}
                        </h3>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl">
                                        <MapPin size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Address</h4>
                                        <p className="text-slate-600">{centralOffice.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl">
                                        <Phone size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                                        <a href={`tel:${centralOffice.phone}`} className="text-slate-600 hover:text-primary transition-colors">
                                            {centralOffice.phone}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl">
                                        <Mail size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                                        <a href={`mailto:${centralOffice.email}`} className="text-slate-600 hover:text-primary transition-colors">
                                            {centralOffice.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl">
                                        <Clock size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Office Hours</h4>
                                        <p className="text-slate-600">{centralOffice.timings}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp Quick Contact */}
                        <div className="mt-10 pt-10 border-t border-slate-200">
                            <button
                                onClick={handleWhatsApp}
                                className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-5 rounded-xl font-black tracking-wide shadow-lg hover:shadow-xl transition-all"
                            >
                                <MessageCircle size={28} />
                                CHAT WITH US ON WHATSAPP
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Branch Contact Info */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Globe size={16} className="text-secondary" />
                            OUR CAMPUSES
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Campus <span className="text-gradient">Contact Information</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Reach out to any of our three campuses directly for campus-specific inquiries.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {branches.map((branch, idx) => (
                            <motion.div
                                key={branch.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all border-2 border-slate-100 hover:border-primary/30"
                            >
                                {/* Header */}
                                <div className={`${colorClasses[branch.color as keyof typeof colorClasses]} text-white p-8`}>
                                    <h3 className="text-2xl font-black mb-1">{branch.name}</h3>
                                    <p className="text-white/90 font-medium">{branch.tagline}</p>
                                </div>

                                {/* Content */}
                                <div className="p-8 space-y-6">
                                    <div className="flex items-start gap-3">
                                        <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                                        <p className="text-sm text-slate-700">{branch.address}</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Phone size={20} className="text-primary flex-shrink-0" />
                                        <a href={`tel:${branch.phone}`} className="text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                            {branch.phone}
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Mail size={20} className="text-primary flex-shrink-0" />
                                        <a href={`mailto:${branch.email}`} className="text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                            {branch.email}
                                        </a>
                                    </div>

                                    {/* Map */}
                                    <div className="pt-4">
                                        <iframe
                                            src={branch.mapUrl}
                                            width="100%"
                                            height="200"
                                            style={{ border: 0, borderRadius: "12px" }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="shadow-md"
                                        ></iframe>
                                    </div>

                                    <a
                                        href={`/branch/${branch.id}`}
                                        className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
                                    >
                                        Learn More About Campus
                                        <span>→</span>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Send size={16} className="text-secondary" />
                            SEND US A MESSAGE
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6">
                            Quick <span className="text-gradient">Inquiry Form</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Have a question? Fill out the form below and we'll respond within 24 hours.
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
                                        Your Name *
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
                                        Campus of Interest *
                                    </label>
                                    <select
                                        required
                                        value={formData.campus}
                                        onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors"
                                    >
                                        <option value="">Select Campus</option>
                                        <option value="bright-horizon">Bright Horizon School</option>
                                        <option value="cherry-blossom">Cherry Blossom School</option>
                                        <option value="lotus-veda">Lotus Veda Public School</option>
                                        <option value="general">General Inquiry</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors"
                                    placeholder="What is your inquiry about?"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors resize-none"
                                    placeholder="Tell us more about your inquiry..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-3 bg-gradient-primary text-white px-10 py-5 rounded-xl font-black tracking-wide shadow-glow hover:shadow-xl transition-all"
                            >
                                <Send size={24} />
                                SEND MESSAGE
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Floating WhatsApp Button */}
            <button
                onClick={handleWhatsApp}
                className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-pulse hover:animate-none"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={32} />
            </button>
        </div>
    );
}
