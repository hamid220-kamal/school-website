"use client";

import { useState, useEffect } from "react";
import { getAllGalleryItems, createGalleryItem, deleteGalleryItem } from "@/actions/gallery";
import { Plus, Trash2, Loader2, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminGalleryPage() {
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isCreating, setIsCreating] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        category: "Campus",
        imageUrl: "",
        type: "image",
        size: "small"
    });

    const categories = ["Campus", "Events", "Sports", "Arts", "Academics"];

    const fetchItems = async () => {
        setLoading(true);
        const { data } = await getAllGalleryItems();
        setItems(data);
        setLoading(false);
    };

    useEffect(() => { fetchItems(); }, []);

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsCreating(true);
        await createGalleryItem(formData);
        setFormData({ title: "", category: "Campus", imageUrl: "", type: "image", size: "small" });
        await fetchItems();
        setIsCreating(false);
    };

    const handleDelete = async (id: string) => {
        if (confirm("Delete this gallery item?")) {
            await deleteGalleryItem(id);
            await fetchItems();
        }
    };

    return (
        <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2"><Plus size={20} className="text-secondary" /> Add Gallery Item</h3>
                <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                    <input type="text" placeholder="Title (Optional)" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="px-4 py-2 rounded-lg border border-slate-200" />
                    <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="px-4 py-2 rounded-lg border border-slate-200 bg-white">
                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <input type="url" placeholder="Image URL" value={formData.imageUrl} onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })} className="px-4 py-2 rounded-lg border border-slate-200" required />
                    <select value={formData.size} onChange={(e) => setFormData({ ...formData, size: e.target.value })} className="px-4 py-2 rounded-lg border border-slate-200 bg-white">
                        <option value="small">Small</option>
                        <option value="large">Large (2x2)</option>
                        <option value="tall">Tall (1x2)</option>
                    </select>
                    <button type="submit" disabled={isCreating} className="bg-primary text-white py-2 rounded-lg font-bold flex items-center justify-center gap-2">
                        {isCreating ? <Loader2 className="animate-spin" size={18} /> : "Add"}
                    </button>
                </form>
            </div>

            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2"><ImageIcon size={20} className="text-secondary" /> Gallery Items ({items.length})</h3>
            {loading ? (
                <div className="flex justify-center py-12"><Loader2 className="animate-spin text-primary" size={40} /></div>
            ) : items.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300"><p className="text-slate-500">No gallery items yet.</p></div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <AnimatePresence>
                        {items.map((item) => (
                            <motion.div key={item._id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="relative group rounded-xl overflow-hidden h-40">
                                <img src={item.imageUrl} alt={item.title || item.category} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button onClick={() => handleDelete(item._id)} className="p-2 bg-white text-red-500 rounded-full"><Trash2 size={18} /></button>
                                </div>
                                <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">{item.category}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
}
