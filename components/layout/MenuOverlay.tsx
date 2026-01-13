"use client";

import { motion } from "framer-motion";
import { X, MapPin, Phone, Mail, ChevronRight, Search } from "lucide-react";
import Link from "next/link";
import { navigation } from "@/lib/constants";

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-primary/95 text-white overflow-y-auto"
        >
            <div className="container mx-auto px-4 py-6">
                {/* Header inside Menu */}
                <div className="flex justify-between items-center mb-12">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold tracking-widest">MENU</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-3 bg-red-800 hover:bg-red-700 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Column 1: Navigation */}
                    <div className="space-y-2">
                        {navigation.map((item, idx) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={onClose}
                                    className="block text-3xl md:text-4xl font-bold hover:text-secondary transition-colors py-2 border-b border-white/10"
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Column 2: Gallery / Highlights */}
                    <div className="hidden lg:block space-y-6">
                        <h3 className="text-secondary font-bold tracking-widest text-sm uppercase mb-4">Gallery Highlights</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-video bg-white/10 rounded-lg overflow-hidden relative group cursor-pointer">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                                <div className="absolute bottom-2 left-2 font-bold text-sm">Annual Day</div>
                            </div>
                            <div className="aspect-video bg-white/10 rounded-lg overflow-hidden relative group cursor-pointer">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                                <div className="absolute bottom-2 left-2 font-bold text-sm">Sports Meet</div>
                            </div>
                        </div>

                        <div className="bg-white/5 p-6 rounded-lg mt-8">
                            <h4 className="text-xl font-bold mb-2">Admissions Open</h4>
                            <p className="text-white/70 mb-4 text-sm">Academic Session 2026-27</p>
                            <Link href="/admissions" onClick={onClose} className="inline-flex items-center text-secondary font-bold hover:gap-2 transition-all">
                                Apply Now <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Column 3: Contact & Search */}
                    <div className="space-y-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-white/10 border-none rounded-full py-4 pl-6 pr-12 text-white placeholder:text-white/50 focus:ring-2 focus:ring-secondary"
                            />
                            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50" />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-secondary font-bold tracking-widest text-sm uppercase">Get in Touch</h3>
                            <div className="flex items-center gap-3 text-lg">
                                <Phone size={20} className="text-secondary" />
                                <span>+91 98765 43210</span>
                            </div>
                            <div className="flex items-center gap-3 text-lg">
                                <Mail size={20} className="text-secondary" />
                                <span>info@delhiworldschool.com</span>
                            </div>
                            <div className="flex items-start gap-3 text-lg">
                                <MapPin size={20} className="text-secondary mt-1" />
                                <span>123 Knowledge Park, New Delhi</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="fixed bottom-0 left-0 w-full bg-white text-primary grid grid-cols-3 text-center font-bold text-sm md:text-base border-t border-primary/10">
                    <Link href="/contact" onClick={onClose} className="py-4 hover:bg-secondary hover:text-white transition-colors flex items-center justify-center gap-2">
                        REQUEST INFO
                    </Link>
                    <Link href="/about" onClick={onClose} className="py-4 border-x border-primary/10 hover:bg-secondary hover:text-white transition-colors flex items-center justify-center gap-2">
                        VISIT CAMPUS
                    </Link>
                    <Link href="/admissions" onClick={onClose} className="py-4 bg-secondary text-white hover:bg-primary transition-colors flex items-center justify-center gap-2">
                        APPLY NOW
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
