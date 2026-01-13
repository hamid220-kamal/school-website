"use client";

import { Save } from "lucide-react";

export default function AdminSettingsPage() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 max-w-2xl">
            <h3 className="text-xl font-bold text-slate-900 mb-6">General Settings</h3>

            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">School Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary outline-none" defaultValue="Excellence Academy" />
                </div>

                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Current Academic Year</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary outline-none" defaultValue="2025-2026" />
                </div>

                <div className="pt-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 text-primary rounded" defaultChecked />
                        <span className="text-sm text-slate-700 font-medium">Enable Admissions Portal</span>
                    </label>
                    <p className="text-xs text-slate-500 mt-1 ml-7">If unchecked, the admission form will be disabled for public.</p>
                </div>

                <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-primary/90 transition-all flex items-center gap-2 mt-4">
                    <Save size={18} /> Save Changes
                </button>
            </form>
        </div>
    );
}
