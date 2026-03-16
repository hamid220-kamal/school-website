"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { Users, TrendingUp, Globe, BarChart3, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function ChairmanDashboard() {
    const stats = [
        { label: "Total Admissions", value: "1,284", icon: Users, trend: "+12%", up: true, color: "text-blue-600", bg: "bg-blue-100" },
        { label: "Global Lead Volume", value: "4,592", icon: BarChart3, trend: "+8.4%", up: true, color: "text-emerald-600", bg: "bg-emerald-100" },
        { label: "Avg. Conversion", value: "28.5%", icon: TrendingUp, trend: "-2.1%", up: false, color: "text-orange-600", bg: "bg-orange-100" },
        { label: "Active Campuses", value: "3/3", icon: Globe, trend: "Status: Online", up: true, color: "text-purple-600", bg: "bg-purple-100" },
    ];

    const branchData = [
        { name: "Bright Horizon Main", leads: 1840, conversion: 32, status: "High Growth" },
        { name: "Lotus Veda Academy", leads: 1420, conversion: 24, status: "Stable" },
        { name: "Cherry Blossom Intl.", leads: 1332, conversion: 21, status: "Improving" },
    ];

    return (
        <DashboardLayout userRole="chairman">
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Chairman's Executive Overview</h1>
                    <p className="text-slate-500 font-medium">Consolidated institutional analytics across all active branches.</p>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div 
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className={cn("p-3 rounded-2xl", stat.bg, stat.color)}>
                                        <Icon size={24} />
                                    </div>
                                    <div className={cn(
                                        "flex items-center gap-1 text-xs font-black px-2 py-1 rounded-full",
                                        stat.up ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
                                    )}>
                                        {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                        {stat.trend}
                                    </div>
                                </div>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                                <p className="text-3xl font-black text-slate-900 mt-1">{stat.value}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Branch Performance Table */}
                <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-black text-slate-900 tracking-tight">Cross-Campus Performance</h2>
                        <button className="text-primary font-bold text-sm hover:underline">Download Global Report</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                                    <th className="pb-4">Branch Name</th>
                                    <th className="pb-4">Monthly Leads</th>
                                    <th className="pb-4">Conv. Rate</th>
                                    <th className="pb-4">Performance Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {branchData.map((branch) => (
                                    <tr key={branch.name} className="group hover:bg-slate-50 transition-colors">
                                        <td className="py-6">
                                            <p className="font-bold text-slate-800">{branch.name}</p>
                                            <p className="text-xs text-slate-400">Hyderabad Metropolitan</p>
                                        </td>
                                        <td className="py-6 font-bold text-slate-600">{branch.leads}</td>
                                        <td className="py-6">
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1 h-2 bg-slate-100 rounded-full max-w-[100px] overflow-hidden">
                                                    <div className="h-full bg-primary rounded-full" style={{ width: `${branch.conversion * 2}%` }}></div>
                                                </div>
                                                <span className="text-sm font-bold text-slate-800">{branch.conversion}%</span>
                                            </div>
                                        </td>
                                        <td className="py-6">
                                            <span className={cn(
                                                "px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase border",
                                                branch.status === "High Growth" ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                                                branch.status === "Stable" ? "bg-blue-50 text-blue-600 border-blue-100" :
                                                "bg-slate-50 text-slate-600 border-slate-100"
                                            )}>
                                                {branch.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
