import { motion } from "framer-motion";
import { FileText, Calendar, ChevronRight, Pin, Loader2 } from "lucide-react";
import { getNotices } from "@/actions/notice";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Announcements() {
    const { success, data: notices } = await getNotices();

    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Notice Board</h1>
                    <p className="text-slate-600 text-lg">
                        Stay updated with the latest announcements, circulars, and news from Excellence Academy.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {notices && notices.length > 0 ? (
                        notices.map((notice: any, idx: number) => (
                            <motion.div
                                key={notice._id}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                viewport={{ once: true }}
                                className={`bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group ${notice.category === "Holiday" || notice.category === "Important" ? 'border-l-4 border-l-secondary' : ''}`}
                            >
                                <div className="flex gap-4">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${notice.category === "Holiday" || notice.category === "Important" ? 'bg-secondary/10 text-secondary' : 'bg-slate-100 text-slate-500'}`}>
                                        {notice.category === "Holiday" || notice.category === "Important" ? <Pin size={20} className="rotate-45" /> : <FileText size={20} />}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{notice.category}</span>
                                            {(notice.category === "Holiday" || notice.category === "Important") && <span className="bg-secondary text-white text-[10px] px-2 py-0.5 rounded-full font-bold">IMPORTANT</span>}
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">{notice.title}</h3>
                                        {notice.content && (
                                            <p className="text-slate-500 text-sm mt-1 line-clamp-2">{notice.content}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between md:justify-end gap-6 md:w-auto w-full pl-16 md:pl-0">
                                    <span className="flex items-center gap-1 text-sm text-slate-500 font-medium">
                                        <Calendar size={14} /> {new Date(notice.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                                    </span>
                                    <button className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center py-16 bg-white rounded-xl border border-dashed border-slate-300">
                            <FileText size={48} className="mx-auto text-slate-300 mb-4" />
                            <p className="text-slate-500">No announcements at the moment. Check back later!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
