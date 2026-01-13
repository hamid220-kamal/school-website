"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, GraduationCap, X, Phone, Mail, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Academics", href: "/academics" },
        { name: "Admissions", href: "/admissions" },
        { name: "Facilities", href: "/facilities" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 w-full z-40 transition-all duration-500",
                    scrolled
                        ? "bg-white/95 backdrop-blur-xl shadow-premium py-3"
                        : "bg-transparent py-5"
                )}
            >
                {/* Top Bar */}
                <div className={cn(
                    "container mx-auto px-4 flex justify-between text-xs font-semibold tracking-wider transition-all duration-500 overflow-hidden",
                    scrolled ? "h-0 opacity-0 mb-0" : "h-auto opacity-100 text-white/80 mb-4"
                )}>
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer">
                            <Phone size={12} /> +91 98765 43210
                        </span>
                        <span className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer">
                            <Mail size={12} /> info@excellence.edu
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-secondary font-bold">
                        <Sparkles size={14} />
                        ADMISSIONS OPEN FOR 2026-27
                    </div>
                </div>

                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className={cn(
                            "relative p-3 rounded-2xl transition-all duration-500",
                            scrolled
                                ? "bg-gradient-primary text-white shadow-glow"
                                : "bg-white/10 backdrop-blur-md text-white border border-white/20"
                        )}>
                            <GraduationCap size={scrolled ? 28 : 32} />
                            <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex flex-col">
                            <h1 className={cn(
                                "font-black font-heading leading-none tracking-tight transition-all duration-500",
                                scrolled ? "text-slate-900 text-xl" : "text-white text-2xl"
                            )}>
                                EXCELLENCE
                            </h1>
                            <span className={cn(
                                "font-medium tracking-[0.3em] text-xs transition-all duration-500",
                                scrolled ? "text-primary" : "text-secondary"
                            )}>
                                ACADEMY
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "relative px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-all rounded-full group",
                                    scrolled
                                        ? "text-slate-600 hover:text-primary hover:bg-primary/5"
                                        : "text-white/90 hover:text-white hover:bg-white/10"
                                )}
                            >
                                {link.name}
                                <span className={cn(
                                    "absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-6",
                                    scrolled ? "bg-primary" : "bg-secondary"
                                )} />
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/admissions"
                            className={cn(
                                "hidden md:inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-xs tracking-widest transition-all btn-premium",
                                scrolled
                                    ? "bg-gradient-primary text-white shadow-glow hover:shadow-lg"
                                    : "bg-gradient-secondary text-white shadow-glow-secondary hover:shadow-lg"
                            )}
                        >
                            APPLY NOW
                        </Link>

                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className={cn(
                                "lg:hidden p-3 rounded-xl transition-all",
                                scrolled
                                    ? "text-slate-900 hover:bg-slate-100"
                                    : "text-white glass hover:bg-white/20"
                            )}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-gradient-hero flex flex-col"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-6 right-6 p-3 text-white/60 hover:text-white glass rounded-xl transition-colors"
                        >
                            <X size={28} />
                        </button>

                        {/* Logo */}
                        <div className="p-8">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-gradient-primary rounded-xl text-white">
                                    <GraduationCap size={28} />
                                </div>
                                <span className="text-white font-black text-xl tracking-tight">EXCELLENCE</span>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex-1 flex flex-col justify-center px-8 space-y-2">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.08 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block text-3xl font-bold text-white/80 hover:text-secondary py-3 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="p-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <Link
                                    href="/admissions"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block bg-gradient-secondary text-white px-8 py-4 rounded-2xl font-bold text-center tracking-widest shadow-glow-secondary"
                                >
                                    APPLY NOW
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
