"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    MessageSquare,
    Users,
    FileText,
    Settings,
    LogOut,
    Search,
    Bell,
    Menu,
    GraduationCap,
    Image as ImageIcon,
    Quote,
    Mail
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const pathname = usePathname();

    const navItems = [
        { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
        { href: "/admin/admissions", icon: Users, label: "Admissions" },
        { href: "/admin/notices", icon: FileText, label: "Notices" },
        { href: "/admin/faculty", icon: GraduationCap, label: "Faculty" },
        { href: "/admin/gallery", icon: ImageIcon, label: "Gallery" },
        { href: "/admin/testimonials", icon: Quote, label: "Testimonials" },
        { href: "/admin/chatbot", icon: MessageSquare, label: "Chatbot Q&A" },
        { href: "/admin/settings", icon: Settings, label: "Settings" },
    ];

    const getPageTitle = () => {
        if (pathname === "/admin") return "Dashboard";
        if (pathname.includes("notices")) return "Notice Management";
        if (pathname.includes("admissions")) return "Admissions";
        if (pathname.includes("faculty")) return "Faculty Management";
        if (pathname.includes("gallery")) return "Gallery Management";
        if (pathname.includes("testimonials")) return "Testimonials";
        if (pathname.includes("chatbot")) return "Chatbot Knowledge Base";
        if (pathname.includes("settings")) return "Settings";
        return "Admin Portal";
    };

    return (
        <div className="flex h-screen bg-slate-50 transition-all">
            {/* Sidebar */}
            <div className={`bg-slate-900 text-white transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-20"} flex flex-col fixed inset-y-0 left-0 z-30`}>
                <div className="p-6 flex items-center justify-between border-b border-white/10 h-20">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center font-bold text-white shrink-0">
                            E
                        </div>
                        {isSidebarOpen && <span className="font-heading font-bold text-lg animate-fade-in">Excellence<span className="text-secondary">Admin</span></span>}
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {navItems.map((item) => {
                        // Exact match for dashboard, startsWith for others
                        const isActive = item.href === "/admin"
                            ? pathname === "/admin"
                            : pathname.startsWith(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                    ? "bg-primary text-white shadow-lg"
                                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                <item.icon size={20} className="shrink-0" />
                                {isSidebarOpen && <span className="text-sm font-medium animate-fade-in">{item.label}</span>}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-white/5 rounded-lg transition-colors">
                        <LogOut size={20} className="shrink-0" />
                        {isSidebarOpen && <span className="text-sm font-medium animate-fade-in">Logout</span>}
                    </button>
                    <button
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                        className="mt-4 w-full flex items-center justify-center p-2 text-slate-500 hover:text-white transition-colors md:hidden"
                    >
                        <Menu size={20} />
                    </button>
                </div>
            </div>

            {/* Main Content Wrapper */}
            <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-20"}`}>

                {/* Header */}
                <header className="bg-white border-b border-slate-200 h-20 px-8 flex justify-between items-center sticky top-0 z-20 shadow-sm">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 hidden md:block">
                            <Menu size={20} />
                        </button>
                        <h2 className="text-2xl font-bold text-slate-800">{getPageTitle()}</h2>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative hidden md:block">
                            <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-64" />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        </div>
                        <button className="relative text-slate-500 hover:text-primary transition-colors">
                            <Bell size={20} />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                        </button>
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                            A
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-8 overflow-y-auto bg-slate-50">
                    {children}
                </main>
            </div>
        </div>
    );
}
