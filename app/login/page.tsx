"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, AlertCircle, Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res?.error) {
                setError("Invalid credentials. Please try again.");
            } else {
                // Fetch the session to get the role (or just wait for router to catch up)
                // For immediate redirect based on the just-used email (demo hack):
                if (email.includes("chairman")) router.push("/dashboard/chairman");
                else if (email.includes("principal")) router.push("/dashboard/principal");
                else if (email.includes("teacher")) router.push("/dashboard/teacher");
                else router.push("/dashboard/parent");
                
                router.refresh();
            }
        } catch (err) {
            setError("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 bg-[url('/noise.png')]">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md text-center border-4 border-slate-800"
            >
                <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-8 text-white rotate-3 shadow-lg">
                    <Lock size={48} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Access Gateway</h2>
                <p className="text-slate-500 mb-10 font-medium">Verify your institutional identity.</p>

                {error && (
                    <div className="mb-6 bg-red-50 text-red-600 p-4 rounded-2xl text-sm font-bold flex items-center gap-3 border border-red-100">
                        <AlertCircle size={20} /> {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6 text-left">
                    <div>
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-primary focus:bg-white outline-none transition-all font-medium text-slate-800"
                                placeholder="identity@school.com"
                                required
                            />
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Secure Key</label>
                        <div className="relative">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-primary focus:bg-white outline-none transition-all font-medium text-slate-800"
                                placeholder="••••••••"
                                required
                            />
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-slate-900 hover:bg-primary text-white font-black py-4 rounded-2xl transition-all shadow-xl mt-4 flex items-center justify-center gap-3 disabled:opacity-70 group"
                    >
                        {loading ? <Loader2 size={24} className="animate-spin" /> : (
                            <>
                                AUTHENTICATE
                                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </>
                        )}
                    </button>
                    
                    <div className="mt-10 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-2 text-center">Trial Credentials</p>
                        <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-slate-600">
                            <div>Chairman: Chairman@123</div>
                            <div>Principal: Principal@123</div>
                            <div>Teacher: Teacher@123</div>
                            <div>Parent: Parent@123</div>
                        </div>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}

const ChevronRight = ({ className, size }: { className?: string, size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="9 18 15 12 9 6"/></svg>
);
