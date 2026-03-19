"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, ChevronRight, GraduationCap, ArrowRight, Send, ShieldCheck } from "lucide-react";
import { Logo } from "./Logo";
import { useState } from "react";

export function Footer() {
    const [email, setEmail] = useState("");

    return (
        <footer className="bg-white text-slate-950 pt-32 pb-12 overflow-hidden relative border-t border-slate-100">
            {/* Soft Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-48 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 -right-48 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Newsletter Section - High-End Callout */}
                <div className="bg-primary rounded-[3.5rem] p-10 md:p-16 mb-24 relative overflow-hidden shadow-glow shadow-primary/20">
                    <div className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                            backgroundSize: '40px 40px'
                        }}
                    />
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="text-center lg:text-left">
                            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter leading-none italic">Stay in the Loop</h3>
                            <p className="text-white/70 text-lg font-medium">Subscribe to our institutional newsletter for global updates and events.</p>
                        </div>
                        <div className="flex w-full lg:w-auto gap-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your institutional email"
                                className="flex-1 lg:w-96 px-8 py-5 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all font-medium"
                            />
                            <button className="bg-white text-primary px-10 py-5 rounded-3xl font-black text-xs tracking-[0.2em] uppercase hover:bg-secondary hover:text-white transition-all flex items-center gap-3 shadow-2xl group">
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                <span className="hidden md:inline">Subscribe</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-10">
                        <Link href="/" className="inline-block transform hover:scale-105 transition-transform duration-500">
                            <Logo scrolled={true} />
                        </Link>
                        <p className="text-slate-500 leading-relaxed text-lg font-medium max-w-sm">
                            Empowering the next generation of global leaders with world-class education
                            across three state-of-the-art campuses, rooted in values and driven by innovation since 1989.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[
                                { icon: Facebook, color: "hover:bg-blue-600" },
                                { icon: Twitter, color: "hover:bg-slate-950" },
                                { icon: Instagram, color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500" },
                                { icon: Youtube, color: "hover:bg-red-600" }
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className={`block bg-slate-50 ${item.color} p-4 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:text-white hover:shadow-2xl hover:shadow-primary/20 text-slate-400`}
                                >
                                    <item.icon size={22} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Our Campuses */}
                    <div className="lg:col-span-2">
                        <h3 className="font-black text-xs uppercase tracking-[0.4em] mb-10 text-slate-900 italic">Our Network</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Bright Horizon (North)', href: '/branch/bright-horizon' },
                                { name: 'Cherry Blossom (International)', href: '/branch/cherry-blossom' },
                                { name: 'Lotus Veda (Public School)', href: '/branch/lotus-veda' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-slate-400 hover:text-primary hover:pl-3 transition-all duration-500 flex items-center gap-2 font-bold text-sm">
                                        <ChevronRight size={16} className="text-slate-200" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="font-black text-xs uppercase tracking-[0.4em] mb-10 text-slate-900 italic">Explore</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Institutional Odyssey', href: '/about' },
                                { name: 'Academic Mastery', href: '/academics' },
                                { name: 'Admissions Gateway', href: '/admissions' },
                                { name: 'Global Faculty', href: '/faculty' },
                                { name: 'Careers', href: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-slate-400 hover:text-primary hover:pl-3 transition-all duration-500 flex items-center gap-2 font-bold text-sm">
                                        <ChevronRight size={16} className="text-slate-200" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-4 space-y-10">
                        <h3 className="font-black text-xs uppercase tracking-[0.4em] mb-10 text-slate-900 italic">Directorate Contact</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-5 group">
                                <div className="w-12 h-12 min-w-[3rem] rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-slate-500 group-hover:text-slate-950 transition-colors font-medium leading-relaxed">
                                    123 Knowledge Park, Education City, Sector 45,<br />NCR Region, India - 110001
                                </span>
                            </li>
                            <li className="flex items-center gap-5 group">
                                <div className="w-12 h-12 min-w-[3rem] rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <Phone size={20} />
                                </div>
                                <span className="text-slate-500 group-hover:text-slate-950 transition-colors font-black tracking-widest text-sm">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-5 group">
                                <div className="w-12 h-12 min-w-[3rem] rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <Mail size={20} />
                                </div>
                                <span className="text-slate-500 group-hover:text-slate-950 transition-colors font-bold text-sm italic">admissions@brighthorizon.edu</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-black uppercase tracking-[0.3em] text-slate-300">
                    <p>© {new Date().getFullYear()} Bright Horizon Institutional Network. Crafted for Excellence.</p>
                    <div className="flex gap-10">
                        <Link href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                             Privacy Protocol
                        </Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <div className="flex items-center gap-2 text-emerald-500 opacity-60">
                            <ShieldCheck size={16} />
                            <span>System Secure</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
