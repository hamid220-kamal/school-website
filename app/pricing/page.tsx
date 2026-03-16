"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Shield, Rocket, Zap, Users, BarChart, BellRing, Target } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Starter",
        alias: "The Digital Entrance",
        price: "20,000",
        description: "Perfect for single branch schools looking to establish a professional online presence.",
        icon: Target,
        color: "indigo",
        features: [
            "Single Campus Website",
            "Core Pages (Home, About, etc.)",
            "Managed Notice Board",
            "Event Gallery",
            "Mobile Responsive Design",
            "Standard SEO Setup",
            "1 Year Support"
        ],
        solution: "Solves the 'Digital Ghost' problem by making your school visible and professional on Google."
    },
    {
        name: "Professional",
        alias: "The Unified Institution",
        price: "30,000",
        description: "Designed for multi-branch institutions needing centralized management and better lead generation.",
        icon: Users,
        color: "emerald",
        popular: true,
        features: [
            "Everything in Starter",
            "Support for up to 3 Campuses",
            "Interactive Campus Selector",
            "Digital Admission CRM",
            "Chairman's Vision Portal",
            "Social Media Integration",
            "Priority Response Support"
        ],
        solution: "Unifies your brand across branches and automates student inquiry tracking, increasing admissions."
    },
    {
        name: "Intelligent",
        alias: "The AI Pioneer",
        price: "50,000",
        description: "The ultimate edge for leaders who want to automate operations and lead with cutting-edge AI.",
        icon: Sparkles,
        color: "violet",
        features: [
            "Everything in Professional",
            "AI-Powered School Assistant (Chatbot)",
            "Principal's Analytics Dashboard",
            "Emergency Command Console",
            "Premium Framer Motion UX",
            "LLM & AI Search Optimization",
            "24/7 Dedicated Tech Partner"
        ],
        solution: "Automates 80% of routine staff work and gives the Principal real-time data to drive growth."
    }
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-white pb-20 pt-32">
            {/* Header Section */}
            <div className="container mx-auto px-4 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 font-bold text-xs tracking-widest mb-6"
                >
                    <Shield size={14} className="text-primary" />
                    INSTITUTIONAL INVESTMENTS
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
                >
                    Choose the Right <span className="text-secondary underline decoration-primary/30 underline-offset-8">Digital Strategy</span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-500 text-lg max-w-2xl mx-auto"
                >
                    We don't just sell websites. We provide digital solutions that solve administrative hurdles and drive academic growth.
                </motion.p>
            </div>

            {/* Pricing Cards */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, idx) => {
                        const Icon = plan.icon;
                        return (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 + 0.3 }}
                                className={cn(
                                    "relative h-full bg-white rounded-[2.5rem] p-8 md:p-10 flex flex-col border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2",
                                    plan.popular 
                                        ? "border-emerald-200 shadow-xl shadow-emerald-500/5 ring-1 ring-emerald-500/20" 
                                        : "border-slate-100 shadow-lg shadow-slate-200/50"
                                )}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-1.5 rounded-full text-xs font-black tracking-widest shadow-lg shadow-emerald-500/30">
                                        MOST POPULAR
                                    </div>
                                )}

                                <div className="mb-8">
                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
                                        plan.color === 'indigo' && "bg-indigo-50 text-indigo-600",
                                        plan.color === 'emerald' && "bg-emerald-50 text-emerald-600",
                                        plan.color === 'violet' && "bg-violet-50 text-violet-600",
                                    )}>
                                        <Icon size={28} />
                                    </div>
                                    <h2 className="text-2xl font-black text-slate-900 mb-1">{plan.name}</h2>
                                    <p className="text-slate-400 font-bold text-xs tracking-wider uppercase mb-4">{plan.alias}</p>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-4xl md:text-5xl font-black text-slate-900">₹{plan.price}</span>
                                        <span className="text-slate-400 font-medium tracking-tight">/ setup</span>
                                    </div>
                                    <p className="text-slate-500 text-sm leading-relaxed">{plan.description}</p>
                                </div>

                                <div className="flex-1 space-y-4 mb-10">
                                    <div className="pt-6 border-t border-slate-50">
                                        <p className="font-black text-[10px] tracking-[0.2em] text-slate-400 uppercase mb-4">Core Capabilities</p>
                                        <ul className="space-y-3">
                                            {plan.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-3 group/item">
                                                    <div className={cn(
                                                        "mt-1 p-0.5 rounded-full transition-colors",
                                                        plan.color === 'indigo' && "bg-indigo-100 text-indigo-600 group-hover/item:bg-indigo-600 group-hover/item:text-white",
                                                        plan.color === 'emerald' && "bg-emerald-100 text-emerald-600 group-hover/item:bg-emerald-600 group-hover/item:text-white",
                                                        plan.color === 'violet' && "bg-violet-100 text-violet-600 group-hover/item:bg-violet-600 group-hover/item:text-white",
                                                    )}>
                                                        <Check size={12} />
                                                    </div>
                                                    <span className="text-sm font-medium text-slate-600">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-auto pt-8 border-t border-slate-50">
                                    <div className="bg-slate-50 rounded-2xl p-4 mb-6">
                                        <div className="flex items-center gap-2 mb-2 text-slate-800 font-bold text-xs uppercase tracking-tighter">
                                            <Zap size={14} className="text-secondary" /> Institutional Impact
                                        </div>
                                        <p className="text-xs text-slate-500 italic leading-relaxed">
                                            "{plan.solution}"
                                        </p>
                                    </div>
                                    <Link 
                                        href="/contact"
                                        className={cn(
                                            "w-full py-4 rounded-2xl font-black tracking-widest text-xs flex items-center justify-center gap-2 transition-all shadow-xl active:scale-95",
                                            plan.name === 'Intelligent' 
                                                ? "bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 text-white shadow-violet-500/20" 
                                                : "bg-slate-900 text-white hover:bg-black shadow-slate-900/10"
                                        )}
                                    >
                                        GET STARTED <Rocket size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Comparison Details / Why Choose Us */}
            <div className="container mx-auto px-4 mt-32 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">Why Invest in a Digital Solution?</h2>
                    <p className="text-slate-500">Traditional websites are expenses. Digital solutions are investments that pay for themselves.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex gap-4">
                        <div className="bg-primary/10 p-3 h-fit rounded-2xl text-primary"><BarChart /></div>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Admission Growth</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">By capturing leads 24/7 through online forms and AI, we ensure no prospective student is ever lost in transition.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-secondary/10 p-3 h-fit rounded-2xl text-secondary"><BellRing /></div>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Instant Communication</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">Our unified notice board and emergency console keep parents informed, building deep trust with the administration.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
