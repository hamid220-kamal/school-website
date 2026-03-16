"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Maximize, Search, ShieldCheck, Zap, BarChart3, Bot, Globe, Target, Send, Handshake, Users, AlertTriangle, MessageSquare } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Presentation Slides Data (Expanded to 12 Slides)
const slides = [
    {
        id: "intro",
        title: "Transforming Bright Horizon",
        subtitle: "From Static Information to Institutional Intelligence",
        type: "hero"
    },
    {
        id: "vision",
        title: "Amplifying Your Excellence",
        subtitle: "A digital ecosystem that turns 'Hidden Features' into 'Conversion Assets'",
        type: "statement",
        content: "You have the technology (Smart TVs) and the talent (GenZ Faculty). My mission is to build the digital megaphone that ensures every parent in this city knows why Bright Horizon is superior to any legacy grammar school."
    },
    {
        id: "problems",
        title: "The 'Invisible Excellence' Crisis",
        subtitle: "Why quality isn't translating into admissions",
        type: "grid",
        items: [
            { icon: Zap, title: "The Tech Blind Spot", text: "You have Smart TVs in classrooms (Genius Grammar doesn't), but no one knows." },
            { icon: Users, title: "Relatability Gap", text: "Your young, GenZ faculty understands kids better, but your digital image looks 'Old'." },
            { icon: Target, title: "Local Competition", text: "Big legacy schools win on name alone, while your superior modern features stay hidden." },
            { icon: AlertTriangle, title: "Admission Leakage", text: "Parents visit the school, but the lack of digital follow-up means they forget the USPs." }
        ]
    },
    {
        id: "competitive-edge",
        title: "Bright Horizon vs. Legacy Schools",
        subtitle: "The Advantage of being Young & Tech-First",
        type: "grid",
        items: [
            { icon: ShieldCheck, title: "Smart Infrastructure", text: "Every classroom is a digital hub. We will showcase your TV-enabled classes via virtual previews." },
            { icon: Globe, title: "GenZ Mentorship", text: "Leveraging your young faculty. Our site will host 'Faculty Stories' to show parents the energetic vibe." },
            { icon: Zap, title: "Speed & Scale", text: "Being new means being fast. Our AI responds in seconds while bigger schools take days." },
            { icon: BarChart3, title: "Modern Brand", text: "A premium website makes a 'New' school look like a 'Global' leader instantly." }
        ]
    },
    {
        id: "trust-gap",
        title: "The Trust Gap",
        subtitle: "How to stop parents from being 'scared' of a new school",
        type: "grid",
        items: [
            { icon: ShieldCheck, title: "Instant Social Proof", text: "We replace 'We are new' with 'We are active.' Live activity feeds and dynamic galleries show a thriving school, not an empty building." },
            { icon: Users, title: "Faculty Vetting", text: "Showcase your GenZ faculty's energy through professional profiles, turning their 'Youth' into your greatest 'Strength'." },
            { icon: Target, title: "Visual Curriculum", text: "Map exactly how Smart TVs enhance learning. Show, don't just tell, why your classrooms are superior to legacy schools." },
            { icon: Globe, title: "Institutional Safety", text: "Corporate-level data security shows parents you are as professional as a bank, building instant trust in your management." }
        ]
    },
    {
        id: "admin-friction",
        title: "The Paperwork Paradox",
        subtitle: "Solving the hidden costs of manual management",
        type: "grid",
        items: [
            { icon: Zap, title: "Zero-Queue Inquiry", text: "Stop the 'Reception Rush'. Digital forms capture data instantly, so your staff can focus on 'Selling' the school, not 'Filling' forms." },
            { icon: AlertTriangle, title: "Inquiry Re-marketing", text: "Most parents visit 3 schools. If you don't 'nudge' them digitally, you lose them. Our CRM automates the follow-up." },
            { icon: Clock, title: "Unified Messaging", text: "End the 'He Said/She Said' confusion. The website acts as the single, legal source of truth for all school policies and notices." },
            { icon: ShieldCheck, title: "Digital Legacy", text: "Start building your digital archives now. Every photo, result, and event is a block in the foundation of your 50-year legacy." }
        ]
    },
    {
        id: "efficiency-stats",
        title: "The Principal's Time Recovery",
        subtitle: "Automating 50% of routine administrative workload",
        type: "grid",
        items: [
            { icon: Clock, title: "15 Hours Saved/Week", text: "AI handles routine inquiries about fees, timings, and uniform policies." },
            { icon: Zap, title: "30-Second Broadcast", text: "Network-wide emergency updates in seconds, not hours of circulars." },
            { icon: Bot, title: "Automated Screening", text: "CRM pre-qualifies parents so you only spend time on serious admissions." },
            { icon: Target, title: "One-Click Reports", text: "Instant analytics. No more waiting for staff to manually compile data." }
        ]
    },
    {
        id: "solution-crm",
        title: "Efficiency 1: Admission CRM",
        subtitle: "Zero Manual Data Entry",
        type: "split",
        content: "Stop wasting time on spreadsheets. Every inquiry is automatically categorized, tracked, and ready for your review in one central interface.",
        visual: "analytics"
    },
    {
        id: "solution-emergency",
        title: "Efficiency 2: Rapid Command",
        subtitle: "Instant Institutional Control",
        type: "split",
        content: "A secure console to manage all 3 campuses. Toggle emergency notices network-wide with a single click—saving you from hours of coordination during crises.",
        visual: "console"
    },
    {
        id: "solution-chatbot",
        title: "Efficiency 3: The 24/7 Front Desk",
        subtitle: "Eliminating Repetitive Phone Calls",
        type: "interactive-chatbot"
    },
    {
        id: "transformation-map",
        title: "The Transformation Strategy",
        subtitle: "How our features solve your core institutional problems",
        type: "grid",
        items: [
            { icon: Users, title: "Problem: Admission Leakage", text: "Inquiries lost in manual registers. -> Solution: Automated CRM captures 100% of leads and nudges for follow-up." },
            { icon: Clock, title: "Problem: Staff Overload", text: "Receptionist answering the same questions. -> Solution: AI Chatbot handles 70% of routine fee/timing queries instantly." },
            { icon: Zap, title: "Problem: Ghost Excellence", text: "Smart TVs hidden from parents. -> Solution: Premium 'Smart-Class' showcase proves your tech-superiority." },
            { icon: Target, title: "Problem: Legacy Competition", text: "Giant old schools winning on 'History'. -> Solution: A state-of-the-art brand that makes you the 'Future of Education'." }
        ]
    },
    {
        id: "pricing-intro",
        title: "Flexible Digital Strategy",
        subtitle: "Structured solutions designed to solve specific institutional problems without unnecessary burden.",
        type: "statement",
        content: "We offer three distinct tiers. Whether you want to establish a basic presence or integrate full artificial intelligence, there is a clear path forward."
    },
    {
        id: "pricing-1",
        title: "Tier 1: Starter (₹20,000)",
        subtitle: "The Digital Entrance - Fixing the 'Digital Ghost' Problem",
        type: "pricing-detail",
        features: ["Single Campus Coverage", "6 Core Pages", "Dynamic Notice Board", "Mobile Responsive"],
        solution: "A digital entry point that saves the front desk from answering basic 'Where are you?' queries."
    },
    {
        id: "pricing-2",
        title: "Tier 2: Professional (₹30,000)",
        subtitle: "The Unified Institution - Fixing 'Fragmented Branches'",
        type: "pricing-detail",
        features: ["Up to 3 Campuses", "Interactive Campus Selector", "Centralized Lead Generation Form", "Advanced Notice Board Categories"],
        solution: "Unifies your vision across all campuses. All inquiries are funneled into one stream, saving hours of cross-branch phone calls."
    },
    {
        id: "pricing-3",
        title: "Tier 3: Intelligent (₹50,000)",
        subtitle: "The AI Pioneer - Fixing 'Staff Overhead & Blind Spots'",
        type: "pricing-detail",
        features: ["Secure Authenticated Gateway", "Digital Admission CRM", "Principal's Analytics Dashboard", "Emergency Command Console", "AI Chatbot Integration"],
        solution: "Maximum automation. The system works while you sleep, pre-Qualifying every student and giving you the power to manage 3 schools from one screen."
    },
    {
        id: "chairman-meeting",
        title: "Next Step: Strategy Session",
        subtitle: "Let's align this technology with the Chairman's vision.",
        type: "meeting",
        content: "I propose a brief 20-minute meeting with the Chairman or Managing Director to demonstrate the ROI of the 'Intelligent' package and how it scales institutional control."
    },
    {
        id: "about-dev",
        title: "The Hamid Kamal Edge",
        subtitle: "AI Developer & Full Stack Engineer",
        type: "about"
    },
    {
        id: "credentials",
        title: "Verified Credentials",
        subtitle: "Industry-Recognized expertise from Global Tech Leaders",
        type: "grid",
        items: [
            { icon: ShieldCheck, title: "Oracle & Google Certified", text: "Certified in OCI Generative AI Professional and Google Cloud Computing Foundations." },
            { icon: Zap, title: "IBM Design Thinking", text: "Certified IBM Enterprise Design Thinking Practitioner, ensuring professional software workflows." },
            { icon: Target, title: "TCS Cybersecurity", text: "Certified in Cybersecurity Fundamentals by TCS iON, guaranteeing institutional data safety." },
            { icon: Globe, title: "Proven Industry Experience", text: "Completed Software Engineering simulations with Electronic Arts and Lloyds Banking Group." }
        ]
    },
    {
        id: "qa",
        title: "Questions & Answers",
        subtitle: "Let's discuss the digital future of Bright Horizon.",
        type: "qa"
    },
    {
        id: "thank-you",
        title: "Thank You",
        subtitle: "To the Visionary Leaders of Bright Horizon.",
        type: "thank-you"
    }
];

function Clock({ className, size }: { className?: string, size?: number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
    )
}

export default function PitchPresentation() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [chatInput, setChatInput] = useState("");
    const [chatMessages, setChatMessages] = useState<{role: 'bot'|'user', text: string}[]>([
        { role: 'bot', text: "Hello! I am the automated Bright Horizon assistant. Ask me about admissions or fees!" }
    ]);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    // Navigation Controls
    const nextSlide = useCallback(() => {
        if (currentSlide < slides.length - 1) setCurrentSlide(prev => prev + 1);
    }, [currentSlide]);

    const prevSlide = useCallback(() => {
        if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
    }, [currentSlide]);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || (e.key === "Space" && e.target === document.body)) {
                e.preventDefault();
                nextSlide();
            }
            if (e.key === "ArrowLeft") prevSlide();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextSlide, prevSlide]);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatMessages]);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    // Prevent body scroll and jumping
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, []);

    const handleChatSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!chatInput.trim()) return;
        
        const newMsg = chatInput;
        setChatMessages(prev => [...prev, { role: 'user', text: newMsg }]);
        setChatInput("");

        setTimeout(() => {
            let reply = "I can definitely help point parents in the right direction for that! In the full system, I am trained on your actual school knowledge base.";
            if (newMsg.toLowerCase().includes("fee") || newMsg.toLowerCase().includes("cost")) {
                reply = "The fee structure varies by branch and grade. For primary sections, it starts at ₹45,000/year. Would you like a detailed breakdown downloaded?";
            } else if (newMsg.toLowerCase().includes("time") || newMsg.toLowerCase().includes("hour")) {
                reply = "School timings are 8:30 AM to 3:00 PM, Monday through Friday. Extracurriculars run until 4:30 PM.";
            } else if (newMsg.toLowerCase().includes("admission") || newMsg.toLowerCase().includes("apply")) {
                reply = "Admissions for the 2026-27 session are currently open! I can guide you to our digital admission form right now.";
            }

            setChatMessages(prev => [...prev, { role: 'bot', text: reply }]);
        }, 1000);
    }

    const slide = slides[currentSlide];

    return (
        <div className="fixed inset-0 bg-slate-900 text-white overflow-hidden font-sans z-[100] flex flex-col bg-[url('/noise.png')] bg-repeat opacity-100">
            {/* Ambient Background Glow */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 blur-[120px] rounded-full pointer-events-none" />

            {/* Top Toolbar */}
            <div className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
                <Link href="/" className="text-white/50 hover:text-white transition-colors text-sm font-bold tracking-widest pl-4 flex items-center gap-2">
                    <Globe size={16} /> BRIGHT HORIZON PITCH
                </Link>
                <div className="flex items-center gap-6 pr-4">
                    <span className="text-white/40 text-sm font-bold tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                        {currentSlide + 1} / {slides.length}
                    </span>
                    <button 
                        onClick={toggleFullscreen}
                        className="p-2.5 bg-white/10 hover:bg-white/20 hover:scale-110 active:scale-95 rounded-xl transition-all"
                        title="Toggle Fullscreen (F11)"
                    >
                        <Maximize size={18} />
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 relative flex items-center justify-center p-8 md:p-20 z-10 w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 0.95, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.05, y: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full max-w-7xl mx-auto px-4 md:px-0"
                    >
                        <div className="max-h-[75vh] overflow-y-auto no-scrollbar py-10">
                        {/* Slide Type: HERO */}
                        {slide.type === "hero" && (
                            <div className="text-center space-y-6 md:space-y-8">
                                <motion.div 
                                    initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                                    className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-indigo-500 to-primary rounded-[2rem] mx-auto flex items-center justify-center shadow-[0_0_80px_rgba(79,70,229,0.5)] mb-8 md:mb-12 border border-white/20"
                                >
                                    <Globe size={40} className="md:size-[56px] text-white" />
                                </motion.div>
                                <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-3xl lg:text-4xl text-secondary font-medium tracking-tight max-w-4xl mx-auto opacity-90">
                                    {slide.subtitle}
                                </p>
                                <motion.div 
                                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
                                    className="pt-12 md:pt-24 text-white/50 text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase flex items-center justify-center gap-4"
                                >
                                    <span className="w-8 md:w-12 h-[1px] bg-white/20"></span>
                                    Presented by Hamid Kamal
                                    <span className="w-8 md:w-12 h-[1px] bg-white/20"></span>
                                </motion.div>
                            </div>
                        )}

                        {/* Slide Type: STATEMENT */}
                        {slide.type === "statement" && (
                            <div className="text-center max-w-5xl mx-auto px-4">
                                <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 tracking-tight">{slide.title}</h2>
                                <p className="text-lg md:text-2xl text-secondary mb-8 md:mb-16 font-medium">{slide.subtitle}</p>
                                <div className="bg-white/5 border border-white/10 p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl backdrop-blur-sm relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>
                                    <p className="text-xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/90">
                                        "{slide.content}"
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Slide Type: GRID / PROBLEMS */}
                        {slide.type === "grid" && (
                            <div className="space-y-16">
                                <div className="text-center">
                                    <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">{slide.title}</h2>
                                    <p className="text-2xl text-secondary">{slide.subtitle}</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
                                    {slide.items?.map((item, i) => {
                                        const Icon = item.icon;
                                        return (
                                            <motion.div 
                                                key={i}
                                                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + (i * 0.15) }}
                                                className="bg-white/5 hover:bg-white/10 border border-white/10 p-8 rounded-[2rem] flex flex-col gap-6 transition-colors shadow-xl"
                                            >
                                                <div className="bg-red-500/10 p-4 rounded-2xl text-red-400 w-fit"><Icon size={32}/></div>
                                                <div>
                                                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                                    <p className="text-lg text-white/60 leading-relaxed">{item.text}</p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Slide Type: SPLIT (CRM & Console) */}
                        {slide.type === "split" && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-secondary/20 text-secondary rounded-full font-bold tracking-widest uppercase mb-8 border border-secondary/30">
                                        <ShieldCheck size={18} /> Exclusive Access
                                    </div>
                                    <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight">{slide.title}</h2>
                                    <p className="text-2xl text-white/40 mb-10">{slide.subtitle}</p>
                                    <p className="text-xl text-white/80 leading-relaxed border-l-4 border-primary pl-6 py-2">
                                        {slide.content}
                                    </p>
                                </div>
                                <div className="flex justify-center relative">
                                    <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                                    
                                    {slide.visual === "analytics" && (
                                        <motion.div 
                                            initial={{ rotateX: 20, rotateY: -20 }} animate={{ rotateX: 0, rotateY: 0 }} transition={{ duration: 1 }}
                                            className="w-full bg-slate-800/80 backdrop-blur-xl border border-slate-600 rounded-[2rem] p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] relative z-10"
                                        >
                                            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-700">
                                                <div className="flex items-center gap-4">
                                                    <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl"><BarChart3 size={24}/></div>
                                                    <span className="font-bold text-lg">Lead Conversion</span>
                                                </div>
                                                <span className="text-emerald-400 font-bold">+24%</span>
                                            </div>
                                            <div className="space-y-6">
                                                {[85, 60, 95].map((val, idx) => (
                                                    <div key={idx} className="space-y-2">
                                                        <div className="flex justify-between text-xs text-slate-400 font-bold tracking-widest uppercase">
                                                            <span>Branch {idx + 1}</span>
                                                            <span>{val}%</span>
                                                        </div>
                                                        <div className="h-3 w-full bg-slate-700/50 rounded-full overflow-hidden">
                                                            <motion.div initial={{ width: 0 }} animate={{ width: `${val}%` }} transition={{ delay: 0.5 + (idx * 0.2), duration: 1.5, ease: "easeOut" }} className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500"></motion.div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {slide.visual === "console" && (
                                        <motion.div 
                                            initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}
                                            className="w-full bg-slate-900 border border-red-500/30 rounded-[2rem] p-8 shadow-[0_0_50px_rgba(239,68,68,0.2)] relative z-10"
                                        >
                                            <div className="flex justify-center mb-8">
                                                <motion.div 
                                                    animate={{ opacity: [1, 0.5, 1], scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }}
                                                    className="w-32 h-32 rounded-full border-4 border-red-500 flex items-center justify-center bg-red-500/10"
                                                >
                                                    <AlertTriangle size={48} className="text-red-500" />
                                                </motion.div>
                                            </div>
                                            <div className="text-center space-y-4">
                                                <h3 className="text-xl font-bold text-white">Broadcast Emergency</h3>
                                                <div className="bg-slate-800 rounded-xl p-4 text-left border border-slate-700">
                                                    <div className="text-xs text-slate-400 mb-2">Message Preview</div>
                                                    <div className="text-red-400 font-mono text-sm leading-relaxed">
                                                        "School closed tomorrow due to unseasonal rainfall. Classes shift to online mode."
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Slide Type: INTERACTIVE CHATBOT */}
                        {slide.type === "interactive-chatbot" && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">{slide.title}</h2>
                                    <p className="text-2xl text-secondary mb-10">{slide.subtitle}</p>
                                    <p className="text-xl text-white/70 leading-relaxed max-w-lg mb-8">
                                        Instead of parents calling the front desk 50 times a day for fee structures and timings, our custom-trained AI handles it instantly, 24/7.
                                    </p>
                                    <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-white/40">
                                        <ShieldCheck size={18} /> Available in Intelligent Tier
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <motion.div 
                                        initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
                                        className="w-full max-w-md bg-white text-slate-900 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col h-[500px] border-4 border-white/5"
                                    >
                                        <div className="bg-primary p-6 text-white flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"><Bot size={24} /></div>
                                            <div>
                                                <h4 className="font-bold text-lg leading-tight">Bright Horizon AI</h4>
                                                <span className="text-xs text-secondary font-medium tracking-wider">Online and Ready</span>
                                            </div>
                                        </div>
                                        <div ref={chatContainerRef} className="flex-1 p-6 overflow-y-auto bg-slate-50 space-y-4">
                                            {chatMessages.map((msg, i) => (
                                                <motion.div 
                                                    key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                                    className={cn(
                                                        "p-4 rounded-2xl max-w-[85%] text-sm leading-relaxed",
                                                        msg.role === 'bot' ? "bg-white text-slate-800 shadow-sm border border-slate-100 rounded-tl-none" : "bg-primary text-white ml-auto rounded-tr-none"
                                                    )}
                                                >
                                                    {msg.text}
                                                </motion.div>
                                            ))}
                                        </div>
                                        <form onSubmit={handleChatSubmit} className="p-4 bg-white border-t border-slate-100 flex gap-2">
                                            <input 
                                                type="text" value={chatInput} onChange={e => setChatInput(e.target.value)}
                                                placeholder="Ask about fees, timings..." className="flex-1 bg-slate-100 rounded-xl px-4 py-3 outline-none text-sm focus:ring-2 ring-primary"
                                            />
                                            <button type="submit" className="bg-primary text-white p-3 rounded-xl hover:bg-secondary transition-colors">
                                                <Send size={20} />
                                            </button>
                                        </form>
                                    </motion.div>
                                </div>
                            </div>
                        )}

                        {/* Slide Type: PRICING DETAIL */}
                        {slide.type === "pricing-detail" && (
                            <div className="max-w-5xl mx-auto h-full flex flex-col justify-center">
                                <motion.div 
                                    className="text-center mb-16"
                                    initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                                >
                                    <h2 className="text-5xl md:text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pb-2">{slide.title}</h2>
                                    <p className="text-2xl text-white/80">{slide.subtitle}</p>
                                </motion.div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="bg-white/5 border border-white/10 p-10 rounded-[2rem] backdrop-blur-sm">
                                        <h3 className="text-xl font-bold tracking-widest uppercase text-white/40 mb-8 border-b border-white/10 pb-4">What's Included</h3>
                                        <ul className="space-y-6">
                                            {slide.features?.map((f, i) => (
                                                <li key={i} className="flex items-center gap-4 text-xl font-medium">
                                                    <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                                                        <ShieldCheck size={16} />
                                                    </div>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30 p-10 rounded-[2rem] flex flex-col justify-center">
                                        <h3 className="text-xl font-bold tracking-widest uppercase text-primary mb-6">The Solution</h3>
                                        <p className="text-2xl leading-relaxed italic text-white/90">
                                            "{slide.solution}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Slide Type: MEETING REQUEST */}
                        {slide.type === "meeting" && (
                            <div className="text-center max-w-4xl mx-auto">
                                <motion.div 
                                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 100 }}
                                    className="w-32 h-32 bg-white/10 rounded-full mx-auto flex items-center justify-center mb-10 border border-white/20"
                                >
                                    <Handshake size={64} className="text-secondary" />
                                </motion.div>
                                <h2 className="text-6xl font-black mb-6 tracking-tight">{slide.title}</h2>
                                <p className="text-3xl text-primary font-medium mb-12">{slide.subtitle}</p>
                                
                                <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 backdrop-blur-md shadow-2xl">
                                    <p className="text-2xl leading-relaxed text-white/90 mb-8">
                                        {slide.content}
                                    </p>
                                    <button 
                                        className="bg-white text-slate-900 px-10 py-5 rounded-full font-black text-lg tracking-widest shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all text-black"
                                    >
                                        SCHEDULE STRATEGY SESSION
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Slide Type: ABOUT DEVELOPER */}
                        {slide.type === "about" && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                                <div className="space-y-8">
                                    <h2 className="text-5xl md:text-6xl font-black tracking-tight">{slide.title}</h2>
                                    <div className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full font-bold text-sm tracking-widest uppercase border border-primary/30">
                                        {slide.subtitle}
                                    </div>
                                    <p className="text-xl text-white/70 leading-relaxed">
                                        I don't just build websites; I engineer intelligent digital ecosystems. By partnering with me, you get enterprise-grade software capabilities built for educational scale.
                                    </p>
                                    <ul className="space-y-4 pt-4">
                                        <li className="flex items-center gap-4 text-lg font-medium text-white/90">
                                            <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg"><Globe size={20}/></div>
                                            Google Search Recognized AI Developer
                                        </li>
                                        <li className="flex items-center gap-4 text-lg font-medium text-white/90">
                                            <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg"><Bot size={20}/></div>
                                            Acknowledged by Google's Gemini AI
                                        </li>
                                        <li className="flex items-center gap-4 text-lg font-medium text-white/90">
                                            <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg"><Zap size={20}/></div>
                                            Architected platforms handling 1M+ active users
                                        </li>
                                        <li className="flex items-center gap-4 text-lg font-medium text-white/90">
                                            <div className="p-2 bg-orange-500/20 text-orange-400 rounded-lg"><ShieldCheck size={20}/></div>
                                            Expert in High-Scale Database Architecture
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] shadow-2xl w-full max-w-sm relative group overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                                        <div className="bg-white rounded-full p-4 flex items-center shadow-lg mb-8 relative z-10">
                                            <Search size={24} className="text-slate-400 mx-2" />
                                            <div className="text-lg font-medium text-slate-800 flex-1 relative h-6 overflow-hidden">
                                                <motion.div 
                                                    className="absolute whitespace-nowrap"
                                                    initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
                                                    animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                                                    transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
                                                >
                                                    Hamid Kamal <span className="text-primary font-bold">AI Developer</span>
                                                </motion.div>
                                            </div>
                                        </div>
                                        <div className="space-y-4 relative z-10">
                                            <div className="h-4 w-3/4 bg-white/10 rounded-full"></div>
                                            <div className="h-4 w-full bg-white/10 rounded-full"></div>
                                            <div className="h-4 w-5/6 bg-white/10 rounded-full"></div>
                                            <div className="pt-4 mt-4 border-t border-white/10">
                                                <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                                    "Hamid Kamal is a Full Stack AI Developer specializing in advanced agentic coding..." - Gemini AI
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://hamid-ai-dev.vercel.app/" target="_blank" rel="noreferrer" className="mt-8 text-xl font-black hover:text-primary transition-colors hover:underline underline-offset-8">
                                        hamid-ai-dev.vercel.app
                                    </a>
                                </div>
                            </div>
                        )}

                        {/* Slide Type: QA */}
                        {slide.type === "qa" && (
                            <div className="text-center max-w-4xl mx-auto flex flex-col justify-center h-full pt-10">
                                <motion.div 
                                    animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                    className="w-24 h-24 bg-white/10 rounded-full mx-auto flex items-center justify-center mb-8 border border-white/20 text-primary"
                                >
                                    <MessageSquare size={48} />
                                </motion.div>
                                <h2 className="text-6xl md:text-8xl font-black mb-6">{slide.title}</h2>
                                <p className="text-2xl text-white/60">{slide.subtitle}</p>
                            </div>
                        )}

                        {/* Slide Type: THANK YOU */}
                        {slide.type === "thank-you" && (
                            <div className="text-center max-w-4xl mx-auto flex flex-col justify-center h-full pt-10">
                                <motion.div 
                                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 100 }}
                                    className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto flex items-center justify-center mb-6 md:mb-10 shadow-glow"
                                >
                                    <Globe size={32} className="md:size-[48px] text-white" />
                                </motion.div>
                                <h2 className="text-4xl md:text-7xl lg:text-9xl font-black mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">{slide.title}</h2>
                                <p className="text-xl md:text-3xl font-medium text-secondary mb-8 md:mb-16">{slide.subtitle}</p>
                                
                                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-white/40 font-bold tracking-widest text-[8px] md:text-sm uppercase">
                                    <span>Hamid Kamal</span>
                                    <span className="hidden md:block w-2 h-2 rounded-full bg-white/20"></span>
                                    <span>AI Developer</span>
                                    <span className="hidden md:block w-2 h-2 rounded-full bg-white/20"></span>
                                    <span>hamid-ai-dev.vercel.app</span>
                                </div>
                            </div>
                        )}

                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 w-full p-8 flex justify-between items-center z-50">
                <div className="flex gap-4">
                    <button 
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className="w-16 h-16 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors disabled:opacity-30 border border-white/10 backdrop-blur-md"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button 
                        onClick={nextSlide}
                        disabled={currentSlide === slides.length - 1}
                        className="w-16 h-16 rounded-full bg-primary hover:bg-primary/80 text-white flex items-center justify-center transition-all disabled:opacity-30 shadow-[0_0_30px_rgba(79,70,229,0.5)] active:scale-95"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>
                
                {/* Progress Indicators */}
                <div className="flex gap-3">
                    {slides.map((_, i) => (
                        <button 
                            key={i}
                            title={`Go to slide ${i + 1}`}
                            onClick={() => setCurrentSlide(i)}
                            className={cn(
                                "h-2.5 rounded-full transition-all duration-500",
                                currentSlide === i ? "w-12 bg-white shadow-[0_0_10px_white]" : "w-2.5 bg-white/20 hover:bg-white/40"
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
