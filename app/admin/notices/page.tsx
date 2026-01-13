"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Calendar, FileText, Loader2 } from "lucide-react";
import { getNotices, createNotice, deleteNotice } from "@/actions/notice";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminNoticesPage() {
    const [notices, setNotices] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isCreating, setIsCreating] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        category: "General",
        date: new Date().toISOString().split('T')[0],
        content: ""
    });

    const categories = ["General", "Academic", "Event", "Holiday", "Sports"];

    const fetchNotices = async () => {
        setIsLoading(true);
        const { success, data } = await getNotices();
        if (success) {
            setNotices(data);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchNotices();
    }, []);

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsCreating(true);
        const res = await createNotice(formData);
        if (res.success) {
            setFormData({ title: "", category: "General", date: new Date().toISOString().split('T')[0], content: "" });
            await fetchNotices();
        }
        setIsCreating(false);
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this notice?")) {
            await deleteNotice(id);
            await fetchNotices();
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Create Notice Form */}
            <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 sticky top-24">
                    <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2">
                        <Plus size={20} className="text-secondary" /> Create Notice
                    </h3>
                    <form onSubmit={handleCreate} className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Title</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary outline-none"
                                placeholder="e.g. Annual Sports Day"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Category</label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary outline-none bg-white"
                                >
                                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Date</label>
                                <input
                                    type="date"
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary outline-none"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Content</label>
                            <textarea
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary outline-none h-32 resize-none"
                                placeholder="Details about the notice..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isCreating}
                            className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
                        >
                            {isCreating ? <Loader2 className="animate-spin" size={20} /> : "Publish Notice"}
                        </button>
                    </form>
                </div>
            </div>

            {/* Notices List */}
            <div className="lg:col-span-2 space-y-4">
                <h3 className="font-bold text-lg text-slate-800 mb-2 flex items-center gap-2">
                    <FileText size={20} className="text-secondary" /> Existing Notices
                </h3>

                {isLoading ? (
                    <div className="flex justify-center py-12">
                        <Loader2 className="animate-spin text-primary" size={40} />
                    </div>
                ) : notices.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
                        <p className="text-slate-500">No notices found. Create one to get started.</p>
                    </div>
                ) : (
                    <AnimatePresence>
                        {notices.map((notice) => (
                            <motion.div
                                key={notice._id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, height: 0 }}
                                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start justify-between group hover:border-primary/50 transition-colors"
                            >
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${notice.category === 'Holiday' ? 'bg-red-100 text-red-700' :
                                                notice.category === 'Academic' ? 'bg-blue-100 text-blue-700' :
                                                    'bg-slate-100 text-slate-700'
                                            }`}>
                                            {notice.category}
                                        </span>
                                        <span className="text-xs text-slate-400 flex items-center gap-1">
                                            <Calendar size={12} /> {new Date(notice.date).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-lg mb-2">{notice.title}</h4>
                                    <p className="text-slate-600 text-sm line-clamp-2">{notice.content}</p>
                                </div>
                                <button
                                    onClick={() => handleDelete(notice._id)}
                                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                    title="Delete Notice"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                )}
            </div>
        </div>
    );
}
