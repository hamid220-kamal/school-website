"use client";

import { useState, useEffect } from "react";
import { getAllTestimonials, createTestimonial, deleteTestimonial } from "@/actions/testimonial";
import { Plus, Trash2, Loader2, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminTestimonialsPage() {
    const [testimonials, setTestimonials] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isCreating, setIsCreating] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        content: "",
        rating: 5,
        image: ""
    });

    const fetchTestimonials = async () => {
        setLoading(true);
        const { data } = await getAllTestimonials();
        setTestimonials(data);
        setLoading(false);
    };

    useEffect(() => { fetchTestimonials(); }, []);

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsCreating(true);
        await createTestimonial(formData);
        setFormData({ name: "", role: "", content: "", rating: 5, image: "" });
        await fetchTestimonials();
        setIsCreating(false);
    };

    const handleDelete = async (id: string) => {
        if (confirm("Delete this testimonial?")) {
            await deleteTestimonial(id);
            await fetchTestimonials();
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 sticky top-24">
                    <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2"><Plus size={20} className="text-secondary" /> Add Testimonial</h3>
                    <form onSubmit={handleCreate} className="space-y-4">
                        <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-200" required />
                        <input type="text" placeholder="Role (e.g., Parent of Grade 5)" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-200" required />
                        <textarea placeholder="Testimonial content..." value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-200 h-24 resize-none" required />
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-bold text-slate-700">Rating:</label>
                            <select value={formData.rating} onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })} className="px-2 py-1 rounded border border-slate-200 bg-white">
                                {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n} Stars</option>)}
                            </select>
                        </div>
                        <input type="url" placeholder="Image URL (Optional)" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-200" />
                        <button type="submit" disabled={isCreating} className="w-full bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
                            {isCreating ? <Loader2 className="animate-spin" size={20} /> : "Add Testimonial"}
                        </button>
                    </form>
                </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
                <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2"><Quote size={20} className="text-secondary" /> Testimonials ({testimonials.length})</h3>
                {loading ? (
                    <div className="flex justify-center py-12"><Loader2 className="animate-spin text-primary" size={40} /></div>
                ) : testimonials.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300"><p className="text-slate-500">No testimonials yet.</p></div>
                ) : (
                    <AnimatePresence>
                        {testimonials.map((item) => (
                            <motion.div key={item._id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white p-6 rounded-xl shadow-sm border flex gap-4 group">
                                <img src={item.image || "https://via.placeholder.com/60"} alt={item.name} className="w-14 h-14 rounded-full object-cover shrink-0" />
                                <div className="flex-1">
                                    <div className="flex items-center gap-1 text-secondary mb-2">
                                        {[...Array(item.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                    </div>
                                    <p className="text-slate-600 text-sm italic mb-3">"{item.content}"</p>
                                    <p className="font-bold text-slate-900">{item.name}</p>
                                    <p className="text-xs text-slate-500">{item.role}</p>
                                </div>
                                <button onClick={() => handleDelete(item._id)} className="p-2 text-slate-400 hover:text-red-500 rounded-lg opacity-0 group-hover:opacity-100 self-start"><Trash2 size={18} /></button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                )}
            </div>
        </div>
    );
}
