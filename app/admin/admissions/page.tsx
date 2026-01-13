"use client";

import { useState, useEffect } from "react";
import { getAllEnquiries, updateEnquiryStatus } from "@/actions/admin";
import { Search, Filter, Eye, MoreVertical, Loader2 } from "lucide-react";

export default function AdminAdmissionsPage() {
    const [enquiries, setEnquiries] = useState<any[]>([]);
    const [filteredEnquiries, setFilteredEnquiries] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    useEffect(() => {
        fetchEnquiries();
    }, []);

    useEffect(() => {
        let result = enquiries;

        if (statusFilter !== "All") {
            result = result.filter(e => e.status === statusFilter);
        }

        if (search) {
            const lowerSearch = search.toLowerCase();
            result = result.filter(e =>
                e.name.toLowerCase().includes(lowerSearch) ||
                e.email.toLowerCase().includes(lowerSearch) ||
                e.grade.toLowerCase().includes(lowerSearch)
            );
        }

        setFilteredEnquiries(result);
    }, [enquiries, search, statusFilter]);

    const fetchEnquiries = async () => {
        setLoading(true);
        const res = await getAllEnquiries();
        if (res.success) {
            setEnquiries(res.data);
            setFilteredEnquiries(res.data);
        }
        setLoading(false);
    };

    const handleStatusChange = async (id: string, newStatus: string) => {
        await updateEnquiryStatus(id, newStatus);
        fetchEnquiries(); // Refresh to ensure sync
    };

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="relative w-full md:w-96">
                    <input
                        type="text"
                        placeholder="Search by name, email or grade..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto">
                    <Filter size={18} className="text-slate-500" />
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                        <option value="All">All Status</option>
                        <option value="New">New</option>
                        <option value="Reviewing">Reviewing</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Admitted">Admitted</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader2 className="animate-spin text-primary" size={40} />
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-50 text-left">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Applicant</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Parent Details</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Grade</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Date</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredEnquiries.length > 0 ? (
                                    filteredEnquiries.map((enq) => (
                                        <tr key={enq._id} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="font-bold text-slate-900">{enq.name}</div>
                                                <div className="text-xs text-slate-500">{enq.email}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-slate-700">{enq.parentName}</div>
                                                <div className="text-xs text-slate-500">{enq.phone}</div>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-slate-700">{enq.grade}</td>
                                            <td className="px-6 py-4 text-sm text-slate-500">{new Date(enq.createdAt).toLocaleDateString()}</td>
                                            <td className="px-6 py-4">
                                                <select
                                                    value={enq.status}
                                                    onChange={(e) => handleStatusChange(enq._id, e.target.value)}
                                                    className={`px-3 py-1 rounded-full text-xs font-bold border-none focus:ring-2 cursor-pointer ${enq.status === "New" ? "bg-green-100 text-green-700" :
                                                            enq.status === "Reviewing" ? "bg-amber-100 text-amber-700" :
                                                                enq.status === "Contacted" ? "bg-blue-100 text-blue-700" :
                                                                    enq.status === "Admitted" ? "bg-purple-100 text-purple-700" :
                                                                        "bg-red-100 text-red-700"
                                                        }`}
                                                >
                                                    <option value="New">New</option>
                                                    <option value="Reviewing">Reviewing</option>
                                                    <option value="Contacted">Contacted</option>
                                                    <option value="Admitted">Admitted</option>
                                                    <option value="Rejected">Rejected</option>
                                                </select>
                                            </td>
                                            <td className="px-6 py-4 text-right flex justify-end gap-2">
                                                <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-primary">
                                                    <Eye size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={6} className="text-center py-12 text-slate-500">
                                            No enquiries found matching your filter.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
