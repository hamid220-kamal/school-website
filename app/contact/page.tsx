"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, AlertCircle, MessageCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import { submitContactMessage } from "@/actions/contact";

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus("idle");

        const result = await submitContactMessage(formState);

        setLoading(false);
        if (result.success) {
            setStatus("success");
            setStatusMessage(result.message);
            setFormState({ name: "", email: "", subject: "", message: "" });
        } else {
            setStatus("error");
            setStatusMessage(result.message);
        }
    };

    const contactInfo = [
        { icon: MapPin, title: "Visit Us", lines: ["Excellence Academy, Knowledge Park III,", "Greater Noida, UP 201306"], gradient: "from-violet-500 to-purple-500" },
        { icon: Phone, title: "Call Us", lines: ["+91 98765 43210 (Admissions)", "+91 120 456 7890 (Reception)"], gradient: "from-blue-500 to-cyan-500" },
        { icon: Mail, title: "Email Us", lines: ["admissions@excellence.edu", "info@excellence.edu"], gradient: "from-emerald-500 to-teal-500" },
        { icon: Clock, title: "Office Hours", lines: ["Mon - Sat: 8:00 AM - 4:00 PM", "Sun: Closed"], gradient: "from-amber-500 to-orange-500" },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Header */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero" />
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Floating Orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-[80px]" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-flex items-center gap-2 glass px-6 py-2.5 rounded-full text-white text-sm font-bold tracking-wider mb-6">
                            <MessageCircle size={16} />
                            WE'RE HERE TO HELP
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading text-white mb-6">
                            Get in <span className="text-gradient-secondary">Touch</span>
                        </h1>
                        <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl">
                            Have questions about admissions, academics, or campus life? We're here to help.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <div className="container mx-auto px-4 -mt-16 relative z-20 mb-24">
                <div className="grid md:grid-cols-4 gap-6">
                    {contactInfo.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 group card-hover"
                        >
                            <div className={`inline-flex p-4 bg-gradient-to-br ${item.gradient} rounded-2xl text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                <item.icon size={24} />
                            </div>
                            <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                            {item.lines.map((line, i) => (
                                <p key={i} className="text-slate-600 text-sm">{line}</p>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 pb-24">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
                            <MapPin size={16} />
                            FIND US
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black font-heading text-slate-900 mb-8">
                            Our <span className="text-gradient">Location</span>
                        </h2>

                        <div className="w-full h-[400px] bg-slate-100 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14026.069151774317!2d77.4899587489502!3d28.494195155799736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1d5f2f5b5f5%3A0x6f6c0f6848c4125d!2sKnowledge%20Park%20III%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709664560000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-5 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
                            <Send size={16} />
                            SEND MESSAGE
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black font-heading text-slate-900 mb-8">
                            Drop Us a <span className="text-gradient">Line</span>
                        </h2>

                        <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100">
                            {status === "success" ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                        <CheckCircle className="text-white" size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                                    <p className="text-slate-600 mb-6">{statusMessage}</p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="text-primary font-bold hover:underline"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {status === "error" && (
                                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-2">
                                            <AlertCircle size={18} />
                                            {statusMessage}
                                        </div>
                                    )}

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name</label>
                                            <input
                                                id="name"
                                                type="text"
                                                required
                                                value={formState.name}
                                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address</label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                value={formState.email}
                                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-bold text-slate-700">Subject</label>
                                        <input
                                            id="subject"
                                            type="text"
                                            required
                                            value={formState.subject}
                                            onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                                            placeholder="Admission Enquiry"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-bold text-slate-700">Message</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={4}
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium resize-none"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-gradient-primary text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-70 shadow-glow hover:shadow-lg btn-premium"
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                        {!loading && <Send size={20} />}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
