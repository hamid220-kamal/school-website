"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, GraduationCap, X, Phone, Mail, Sparkles, ArrowLeft, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Detect if we're on a branch page
    const isBranchPage = pathname?.startsWith('/branch/');
    const branchSlug = isBranchPage ? pathname.split('/')[2] : null;

    // Branch themes
    const branchThemes: Record<string, { name: string; accent: string; color: string }> = {
        'bright-horizon': { name: 'Bright Horizon School', accent: 'indigo', color: '#4f46e5' },
        'cherry-blossom': { name: 'Cherry Blossom School', accent: 'emerald', color: '#10b981' },
        'lotus-veda': { name: 'Lotus Veda Public School', accent: 'orange', color: '#f97316' }
    };

    const currentBranch = branchSlug ? branchThemes[branchSlug] : null;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Type definition for navigation links
    type NavLink = {
        name: string;
        href: string;
        icon?: React.ElementType;
        special?: boolean;
    };

    // Parent website navigation
    const parentNavLinks: NavLink[] = [
        { name: "Home", href: "/" },
        { name: "About Group", href: "/about" },
        { name: "Our Campuses", href: "/campuses" },
        { name: "Academics", href: "/academics" },
        { name: "Admissions", href: "/admissions" },
        { name: "Contact", href: "/contact" },
    ];

    // Branch-specific navigation
    const branchNavLinks: NavLink[] = branchSlug ? [
        { name: "Home", href: `/branch/${branchSlug}` },
        { name: "About Campus", href: `/branch/${branchSlug}#about` },
        { name: "Academics", href: `/branch/${branchSlug}#academics` },
        { name: "Facilities", href: `/branch/${branchSlug}#facilities` },
        { name: "Gallery", href: `/branch/${branchSlug}#gallery` },
        { name: "Events", href: `/branch/${branchSlug}#events` },
        { name: "Admissions", href: `/admissions` },
        { name: "Contact", href: `/branch/${branchSlug}#contact` },
        { name: "Back to Group", href: "/", icon: ArrowLeft, special: true },
    ] : [];

    const navLinks: NavLink[] = isBranchPage ? branchNavLinks : parentNavLinks;

    // Simulate Emergency Notice for Demo
    const emergencyNotice = "ATTENTION: SCHOOL TRANSITIONING TO ONLINE MODE DUE TO HEAVY RAINFALL. RE-OPENING ON MONDAY.";

    return (
        <>
            {/* Global Emergency Banner */}
            <AnimatePresence>
                {emergencyNotice && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="bg-red-600 text-white py-3 px-4 relative z-[60] overflow-hidden"
                    >
                        <div className="container mx-auto flex items-center justify-center gap-4 text-center">
                            <AlertTriangle size={20} className="animate-pulse shrink-0" />
                            <p className="text-xs md:text-sm font-black tracking-widest uppercase">
                                {emergencyNotice}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <header
                className={cn(
                    "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-40 transition-all duration-700 rounded-[2rem]",
                    scrolled
                        ? "bg-white/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 py-3"
                        : "bg-black/20 backdrop-blur-xl border border-white/10 py-4",
                    emergencyNotice ? (scrolled ? "top-8" : "top-12") : "top-4"
                )}
            >
                {/* Top Bar - Hidden for cleaner look on premium schools */}
                {!scrolled && (
                    <div className="container mx-auto px-8 flex justify-between text-[10px] font-bold tracking-[0.2em] text-white/80 mb-3 transition-all duration-500">
                        <div className="flex gap-8">
                            <span className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer uppercase">
                                <Phone size={10} /> +91 98765 43210
                            </span>
                            <span className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer uppercase">
                                <Mail size={10} /> info@brighthorizon.edu
                            </span>
                        </div>
                        <div className="hidden lg:flex items-center gap-2 text-secondary/80">
                            <Sparkles size={12} className="animate-pulse" />
                            ADMISSIONS OPEN FOR 2026-27
                        </div>
                    </div>
                )}

                <div className="container mx-auto px-8 flex items-center justify-between">
                    <div className="flex-1 flex items-center justify-start">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className={cn(
                                "relative p-2.5 rounded-2xl transition-all duration-700",
                                scrolled
                                    ? "bg-primary text-white shadow-[0_8px_30px_rgb(79,70,229,0.3)]"
                                    : "bg-white/20 text-white border border-white/20"
                            )}>
                                <GraduationCap size={scrolled ? 24 : 28} />
                            </div>
                            <div className="flex flex-col">
                                <h1 className={cn(
                                    "font-black font-heading leading-none tracking-tighter transition-all duration-500 uppercase",
                                    scrolled ? "text-slate-900 text-lg" : "text-white text-xl"
                                )}>
                                    Bright Horizon
                                </h1>
                                <span className={cn(
                                    "font-bold tracking-[0.4em] text-[8px] transition-all duration-500 uppercase mt-0.5",
                                    scrolled ? "text-primary/70" : "text-secondary/70"
                                )}>
                                    Global Institution
                                </span>
                            </div>
                        </Link>
                    </div>

                    <nav className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => {
                            const LinkIcon = link.icon;
                            const isSpecial = link.special;

                            if (isSpecial) {
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "inline-flex items-center gap-2 px-6 py-2 rounded-full font-bold text-[10px] tracking-widest transition-all duration-500 shadow-lg hover:scale-105 ml-4",
                                            scrolled
                                                ? "bg-slate-900 text-white"
                                                : "bg-white/10 backdrop-blur-md text-white border border-white/20"
                                        )}
                                    >
                                        {LinkIcon && <LinkIcon size={14} />}
                                        {link.name}
                                    </Link>
                                );
                            }

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "relative px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-all rounded-full group",
                                        scrolled
                                            ? "text-slate-500 hover:text-primary"
                                            : "text-white hover:text-secondary"
                                    )}
                                >
                                    {link.name}
                                    <span className={cn(
                                        "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-500 group-hover:w-4",
                                        scrolled ? "bg-primary" : "bg-secondary"
                                    )} />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Actions */}
                    <div className="flex-1 flex items-center justify-end gap-4">
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
                                <span className="text-white font-black text-xl tracking-tighter uppercase">Bright Horizon</span>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex-1 flex flex-col justify-center px-8 space-y-2">
                            {navLinks.map((link, idx) => {
                                const LinkIcon = link.icon;
                                const isSpecial = link.special;

                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.08 }}
                                    >
                                        {isSpecial ? (
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="inline-flex items-center justify-center gap-3 bg-white/20 backdrop-blur-md border border-white/30 text-white font-black text-lg tracking-wide py-5 px-8 rounded-2xl shadow-lg hover:bg-white/30 transition-all mt-6 w-full"
                                            >
                                                {LinkIcon && <LinkIcon size={22} />}
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block text-3xl font-bold text-white/80 hover:text-secondary py-3 transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </motion.div>
                                );
                            })}
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
