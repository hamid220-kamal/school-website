"use client";

import { useState, useEffect } from "react";
import { getAllFaculty, createFaculty, deleteFaculty } from "@/actions/faculty";
import { Plus, Trash2, Loader2, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminFacultyPage() {
    const [faculty, setFaculty] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isCreating, setIsCreating] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        qualification: "",
        image: "",
        email: ""
    });

    const fetchFaculty = async () => {
        setLoading(true);
        const { data } = await getAllFaculty();
        setFaculty(data);
        setLoading(false);
    };

    useEffect(() => { fetchFaculty(); }, []);

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsCreating(true);
        await createFaculty(formData);
        setFormData({ name: "", role: "", qualification: "", image: "", email: "" });
        await fetchFaculty();
        setIsCreating(false);
    };

    const handleDelete = async (id: string) => {
        if (confirm("Remove this faculty member?")) {
            await deleteFaculty(id);
            await fetchFaculty();
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 sticky top-24">
                    <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2">
                        <Plus size={20} className="text-secondary" /> Add Faculty
                    </h3>
                    <form onSubmit={handleCreate} className="space-y-4">
                        <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-200" required />
                        <input type="text" placeholder="Role (e.g., Principal)" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-200" required />
                        <input type="text" placeholder="Qualification" value={formData.qualification} onChange={(e) => setFormData({ ...formData, qualification: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-200" />
                        <input type="url" placeholder="Image URL" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-200" />
                        <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-200" />
                        <button type="submit" disabled={isCreating} className="w-full bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
                            {isCreating ? <Loader2 className="animate-spin" size={20} /> : "Add Member"}
                        </button>
                    </form>
                </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
                <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2"><User size={20} className="text-secondary" /> Faculty Members</h3>
                {loading ? (
                    <div className="flex justify-center py-12"><Loader2 className="animate-spin text-primary" size={40} /></div>
                ) : faculty.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300"><p className="text-slate-500">No faculty added yet.</p></div>
                ) : (
                    <AnimatePresence>
                        {faculty.map((member) => (
                            <motion.div key={member._id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white p-4 rounded-xl shadow-sm border flex items-center gap-4 group">
                                <img src={member.image || "https://via.placeholder.com/80"} alt={member.name} className="w-16 h-16 rounded-full object-cover" />
                                <div className="flex-1">
                                    <h4 className="font-bold text-slate-900">{member.name}</h4>
                                    <p className="text-sm text-secondary">{member.role}</p>
                                    <p className="text-xs text-slate-500">{member.qualification}</p>
                                </div>
                                <button onClick={() => handleDelete(member._id)} className="p-2 text-slate-400 hover:text-red-500 rounded-lg opacity-0 group-hover:opacity-100"><Trash2 size={18} /></button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                )}
            </div>
        </div>
    );
}
