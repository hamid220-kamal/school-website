"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
    LayoutDashboard, 
    BarChart3, 
    Users, 
    AlertTriangle, 
    LogOut, 
    Settings, 
    Globe, 
    Bell,
    ChevronRight,
    Search
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
    children: React.ReactNode;
    userRole: string;
}

export default function DashboardLayout({ children, userRole }: DashboardLayoutProps) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const menuItems = [
        { name: "Overview", icon: LayoutDashboard, path: `/dashboard/${userRole}`, roles: ["chairman", "principal", "teacher", "parent"] },
        { name: "Analytics", icon: BarChart3, path: `/dashboard/${userRole}/analytics`, roles: ["chairman", "principal"] },
        { name: "Admissions", icon: Users, path: `/dashboard/${userRole}/admissions`, roles: ["chairman", "principal"] },
        { name: "Emergency", icon: AlertTriangle, path: `/dashboard/teacher`, roles: ["teacher", "chairman"] },
        { name: "My Child", icon: Users, path: `/dashboard/parent`, roles: ["parent"] },
    ];

    const activeMenu = menuItems.filter(item => item.roles.includes(userRole));

    return (
        <div className="min-h-screen bg-slate-50 flex font-sans">
            {/* Sidebar */}
            <motion.aside 
                initial={false}
                animate={{ width: isSidebarOpen ? 280 : 80 }}
                className="bg-slate-900 text-white flex flex-col sticky top-0 h-screen overflow-hidden z-20"
            >
                <div className="p-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
                        <Globe size={24} />
                    </div>
                    {isSidebarOpen && (
                        <motion.span 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="font-black tracking-tighter text-xl uppercase"
                        >
                            Bright Horizon
                        </motion.span>
                    )}
                </div>

                <nav className="flex-1 px-4 py-8 space-y-2">
                    {activeMenu.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.path;
                        return (
                            <Link 
                                key={item.name} 
                                href={item.path}
                                className={cn(
                                    "flex items-center gap-4 px-4 py-3 rounded-xl transition-all group",
                                    isActive ? "bg-primary text-white shadow-lg" : "text-slate-400 hover:bg-white/5 hover:text-white"
                                )}
                            >
                                <Icon size={20} className={cn(isActive ? "text-white" : "group-hover:text-primary transition-colors")} />
                                {isSidebarOpen && <span className="font-bold text-sm tracking-wide">{item.name}</span>}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/5">
                    <button 
                        onClick={() => signOut({ callbackUrl: "/login" })}
                        className="flex items-center gap-4 px-4 py-3 rounded-xl text-red-400 hover:bg-red-400/10 w-full transition-all"
                    >
                        <LogOut size={20} />
                        {isSidebarOpen && <span className="font-bold text-sm">Sign Out</span>}
                    </button>
                </div>
            </motion.aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 bg-slate-50">
                {/* Header */}
                <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
                    <div className="flex items-center gap-4 bg-slate-100 px-4 py-2 rounded-xl text-slate-400 w-full max-w-md">
                        <Search size={18} />
                        <input type="text" placeholder="Search data points..." className="bg-transparent border-none outline-none text-sm font-medium text-slate-600 w-full" />
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="relative cursor-pointer text-slate-400 hover:text-primary transition-colors">
                            <Bell size={20} />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </div>
                        <div className="h-10 w-[1px] bg-slate-200"></div>
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-black text-slate-800 uppercase tracking-tight">{userRole}</p>
                                <p className="text-[10px] font-bold text-slate-400">BH - Institution</p>
                            </div>
                            <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden border-2 border-primary/20">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userRole}`} alt="User" />
                            </div>
                        </div>
                    </div>
                </header>

                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
