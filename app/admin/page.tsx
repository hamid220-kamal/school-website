"use client";

import { useEffect, useState } from "react";
import { MoreVertical, Loader2 } from "lucide-react";
import { getDashboardStats, getRecentEnquiries } from "@/actions/admin";

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        totalStudents: 0,
        newAdmissions: 0,
        pendingEnquiries: 0,
        activeNotices: 0
    });
    const [enquiries, setEnquiries] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const statsRes = await getDashboardStats();
            const enquiriesRes = await getRecentEnquiries();

            if (statsRes.success && statsRes.data) setStats(statsRes.data);
            if (enquiriesRes.success) setEnquiries(enquiriesRes.data);
            setLoading(false);
        }
        fetchData();
    }, []);

    const statCards = [
        { label: "Total Students", value: stats.totalStudents.toLocaleString(), change: "+12%", color: "bg-blue-500" },
        { label: "New Enquiries", value: stats.newAdmissions, change: "New", color: "bg-green-500" },
        { label: "Pending Reviews", value: stats.pendingEnquiries, change: "Action Needed", color: "bg-amber-500" },
        { label: "Active Notices", value: stats.activeNotices, change: "Live", color: "bg-purple-500" },
    ];

    if (loading) {
        return (
            <div className="flex h-[50vh] items-center justify-center">
                <Loader2 className="animate-spin text-primary" size={40} />
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-500 mb-1">{stat.label}</p>
                            <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
                        </div>
                        <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10 text-${stat.color.split('-')[1]}-600`}>
                            <span className="text-xs font-bold whitespace-nowrap">{stat.change}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Enquiries */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-slate-800">Recent Applications</h3>
                    <button className="text-sm text-primary font-bold hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50 text-left">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Applicant</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Grade</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Date</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {enquiries.length > 0 ? (
                                enquiries.map((enq) => (
                                    <tr key={enq._id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900">{enq.name}</td>
                                        <td className="px-6 py-4 text-slate-600">{enq.grade}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${enq.status === "New" ? "bg-green-100 text-green-700" :
                                                    enq.status === "Reviewing" ? "bg-amber-100 text-amber-700" :
                                                        enq.status === "Rejected" ? "bg-red-100 text-red-700" :
                                                            "bg-blue-100 text-blue-700"
                                                }`}>
                                                {enq.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-slate-500 text-sm">
                                            {new Date(enq.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-400 hover:text-slate-600">
                                                <MoreVertical size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="text-center py-8 text-slate-500">
                                        No recent enquiries found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
