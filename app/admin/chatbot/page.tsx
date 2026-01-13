"use client";

import { useState, useEffect } from "react";
import { getAllQA, createQA, deleteQA } from "@/actions/chatbot";
import { Plus, Trash2, Loader2, MessageCircle, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminChatbotPage() {
    const [qaList, setQaList] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isCreating, setIsCreating] = useState(false);
    const [formData, setFormData] = useState({
        question: "",
        answer: "",
        keywords: ""
    });

    const fetchQA = async () => {
        setLoading(true);
        const { data } = await getAllQA();
        setQaList(data);
        setLoading(false);
    };

    useEffect(() => { fetchQA(); }, []);

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsCreating(true);
        const keywords = formData.keywords.split(",").map(k => k.trim()).filter(Boolean);
        await createQA({ question: formData.question, answer: formData.answer, keywords });
        setFormData({ question: "", answer: "", keywords: "" });
        await fetchQA();
        setIsCreating(false);
    };

    const handleDelete = async (id: string) => {
        if (confirm("Delete this Q&A pair?")) {
            await deleteQA(id);
            await fetchQA();
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 sticky top-24">
                    <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2">
                        <Plus size={20} className="text-secondary" /> Add Q&A Pair
                    </h3>
                    <form onSubmit={handleCreate} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Question (e.g., What are school timings?)"
                            value={formData.question}
                            onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-slate-200"
                            required
                        />
                        <textarea
                            placeholder="Answer..."
                            value={formData.answer}
                            onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-slate-200 h-24 resize-none"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Keywords (comma-separated, e.g., timing, schedule)"
                            value={formData.keywords}
                            onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-slate-200"
                        />
                        <button
                            type="submit"
                            disabled={isCreating}
                            className="w-full bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                        >
                            {isCreating ? <Loader2 className="animate-spin" size={20} /> : "Add Q&A"}
                        </button>
                    </form>
                </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
                <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                    <MessageCircle size={20} className="text-secondary" /> Knowledge Base ({qaList.length})
                </h3>
                {loading ? (
                    <div className="flex justify-center py-12"><Loader2 className="animate-spin text-primary" size={40} /></div>
                ) : qaList.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
                        <p className="text-slate-500">No Q&A pairs yet. Add some above!</p>
                    </div>
                ) : (
                    <AnimatePresence>
                        {qaList.map((item) => (
                            <motion.div
                                key={item._id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 group hover:border-primary transition-colors"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <p className="font-bold text-slate-800">Q: {item.question}</p>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="p-2 text-slate-400 hover:text-red-500 rounded-lg opacity-0 group-hover:opacity-100"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                                <p className="text-slate-600 text-sm mb-3">A: {item.answer}</p>
                                {item.keywords && item.keywords.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {item.keywords.map((kw: string, i: number) => (
                                            <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{kw}</span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                )}
            </div>
        </div>
    );
}
