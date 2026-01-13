"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, ChevronRight, GraduationCap, ArrowRight, Send } from "lucide-react";
import { useState } from "react";

export function Footer() {
    const [email, setEmail] = useState("");

    return (
        <footer className="bg-gradient-hero text-white pt-24 pb-8 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-48 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 -right-48 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-violet-500/5 rounded-full blur-[80px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Newsletter Section */}
                <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden shadow-glow">
                    <div className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                            backgroundSize: '30px 30px'
                        }}
                    />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-black mb-2">Stay Updated</h3>
                            <p className="text-white/80">Subscribe to our newsletter for the latest news and events.</p>
                        </div>
                        <div className="flex w-full md:w-auto gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 md:w-72 px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                            />
                            <button className="bg-white text-primary px-6 py-4 rounded-full font-bold hover:bg-secondary hover:text-white transition-all flex items-center gap-2 shadow-lg">
                                <Send size={18} />
                                <span className="hidden md:inline">Subscribe</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center gap-4">
                            <div className="bg-gradient-primary p-3 rounded-2xl text-white shadow-glow">
                                <GraduationCap size={32} />
                            </div>
                            <div className="leading-none">
                                <h2 className="text-2xl font-black font-heading tracking-tight">EXCELLENCE</h2>
                                <p className="text-xs tracking-[0.3em] text-secondary font-medium">ACADEMY</p>
                            </div>
                        </Link>
                        <p className="text-slate-400 leading-relaxed">
                            Empowering the next generation of leaders with world-class education,
                            rooted in values and driven by innovation since 1989.
                        </p>
                        <div className="flex gap-3 pt-2">
                            {[
                                { icon: Facebook, color: "hover:bg-blue-600" },
                                { icon: Twitter, color: "hover:bg-sky-500" },
                                { icon: Instagram, color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500" },
                                { icon: Youtube, color: "hover:bg-red-600" }
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className={`block bg-white/5 ${item.color} p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                                >
                                    <item.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="font-bold text-lg mb-6 text-white">Explore</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'About Us', href: '/about' },
                                { name: 'Academics', href: '/academics' },
                                { name: 'Admissions', href: '/admissions' },
                                { name: 'Faculty', href: '/faculty' },
                                { name: 'Careers', href: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-slate-400 hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-2 group">
                                        <ChevronRight size={14} className="text-slate-600 group-hover:text-secondary transition-colors" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="lg:col-span-2">
                        <h3 className="font-bold text-lg mb-6 text-white">Resources</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Facilities', href: '/facilities' },
                                { name: 'Gallery', href: '/gallery' },
                                { name: 'Announcements', href: '/announcements' },
                                { name: 'Events', href: '/announcements' },
                                { name: 'Student Portal', href: '/login' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-slate-400 hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-2 group">
                                        <ChevronRight size={14} className="text-slate-600 group-hover:text-secondary transition-colors" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-4">
                        <h3 className="font-bold text-lg mb-6 text-white">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 group">
                                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary/20 transition-colors text-primary">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-slate-400 group-hover:text-white transition-colors">
                                    123 Knowledge Park, Education City,<br />New Delhi, India - 110001
                                </span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary/20 transition-colors text-primary">
                                    <Phone size={20} />
                                </div>
                                <span className="text-slate-400 group-hover:text-white transition-colors">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary/20 transition-colors text-primary">
                                    <Mail size={20} />
                                </div>
                                <span className="text-slate-400 group-hover:text-white transition-colors">admissions@excellence.edu</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Excellence Academy. Crafted with ❤️ for education.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-secondary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-secondary transition-colors">Terms & Conditions</Link>
                        <Link href="/admin" className="hover:text-secondary transition-colors">Admin</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
