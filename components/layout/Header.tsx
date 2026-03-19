"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, GraduationCap, X, Phone, Mail, Sparkles, ArrowLeft, AlertTriangle, Home, Book, MapPin, Search, PlusCircle, MoreHorizontal } from "lucide-react";
import { Logo } from "./Logo";
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
                    "fixed left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-700 rounded-3xl hidden lg:block overflow-hidden",
                    scrolled
                        ? "bg-white/90 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-white/60 py-2 top-4"
                        : "bg-black/30 backdrop-blur-xl border border-white/10 py-5 top-6",
                    emergencyNotice ? (scrolled ? "top-8" : "top-14") : "top-6"
                )}
            >
                {/* Visual Accent - Top Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                <div className="container mx-auto px-10 flex items-center justify-between gap-8">
                    {/* Brand Section */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="hover:opacity-90 transition-opacity">
                            <Logo scrolled={scrolled} />
                        </Link>
                    </div>

                    {/* Navigation - Centered & Refined */}
                    <nav className="flex items-center bg-white/5 backdrop-blur-md rounded-2xl px-2 py-1 border border-white/5">
                        {navLinks.map((link) => {
                            const isSpecial = link.special;

                            if (isSpecial) return null; // Handle special separately or skip for center

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "relative px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-xl group overflow-hidden",
                                        scrolled
                                            ? "text-slate-600 hover:text-primary"
                                            : "text-white hover:text-secondary"
                                    )}
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    {/* Hover Background Effect */}
                                    <span className={cn(
                                        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                        scrolled ? "bg-slate-100" : "bg-white/10"
                                    )} />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Actions & Status */}
                    <div className="flex items-center gap-6">
                        {/* Status Pulse */}
                        {!scrolled && (
                            <div className="hidden xl:flex items-center gap-2 group cursor-help">
                                <div className="relative">
                                    <span className="block w-2 h-2 rounded-full bg-emerald-500" />
                                    <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                                </div>
                                <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest group-hover:text-white/80 transition-colors">
                                    Admissions Active
                                </span>
                            </div>
                        )}

                        <Link
                            href="/admissions"
                            className={cn(
                                "inline-flex items-center justify-center px-8 py-3 rounded-2xl font-black text-[10px] tracking-[0.2em] transition-all transform hover:scale-105 active:scale-95 shadow-xl",
                                scrolled
                                    ? "bg-primary text-white shadow-primary/20"
                                    : "bg-white text-slate-900 shadow-white/10"
                            )}
                        >
                            ENROLL NOW
                        </Link>
                    </div>
                </div>
            </header>

            {/* Mobile Top Bar (Emergency only or Logo) */}
            <header className="lg:hidden fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-500">
                <div className={cn(
                    "flex items-center justify-between px-6 py-3 rounded-2xl backdrop-blur-xl border border-white/10",
                    scrolled ? "bg-white/80 text-slate-900 border-slate-200" : "bg-black/20 text-white"
                )}>
                    <Logo className="scale-75 origin-left" scrolled={scrolled} />
                    <button onClick={() => setIsMenuOpen(true)} className="p-2">
                        <Search size={20} />
                    </button>
                </div>
            </header>

            {/* Mobile Bottom Navigation Dock */}
            <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50 transition-all duration-500">
                <div className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-2 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                    <Link href="/" className="flex flex-col items-center justify-center w-14 h-14 text-white/60 hover:text-white transition-colors">
                        <Home size={20} />
                        <span className="text-[8px] font-bold mt-1 uppercase tracking-tighter">Home</span>
                    </Link>
                    <Link href="/campuses" className="flex flex-col items-center justify-center w-14 h-14 text-white/60 hover:text-white transition-colors">
                        <MapPin size={20} />
                        <span className="text-[8px] font-bold mt-1 uppercase tracking-tighter">Campus</span>
                    </Link>
                    
                    {/* Primary Apply Button */}
                    <Link href="/admissions" className="flex flex-col items-center justify-center w-16 h-16 bg-gradient-secondary rounded-full text-white shadow-glow-secondary -translate-y-4 hover:scale-110 transition-transform">
                        <PlusCircle size={28} />
                    </Link>

                    <Link href="/academics" className="flex flex-col items-center justify-center w-14 h-14 text-white/60 hover:text-white transition-colors">
                        <Book size={20} />
                        <span className="text-[8px] font-bold mt-1 uppercase tracking-tighter">Study</span>
                    </Link>
                    <button 
                        onClick={() => setIsMenuOpen(true)}
                        className="flex flex-col items-center justify-center w-14 h-14 text-white/60 hover:text-white transition-colors"
                    >
                        <MoreHorizontal size={20} />
                        <span className="text-[8px] font-bold mt-1 uppercase tracking-tighter">More</span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[100] bg-gradient-hero flex flex-col"
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
                            <Link href="/" onClick={() => setIsMenuOpen(false)}>
                                <Logo scrolled={false} />
                            </Link>
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
