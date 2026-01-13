"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, ChevronLeft, Upload, FileText, User, Users, GraduationCap, Loader2, AlertCircle } from "lucide-react";
import { submitEnquiry } from "@/actions/admission";

export function AdmissionForm() {
    const [step, setStep] = useState(1);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    // Form Data State
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        grade: "",
        fatherName: "",
        motherName: "",
        email: "",
        phone: "",
        prevSchool: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => setStep(s => Math.min(s + 1, 4));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    const handleSubmit = async () => {
        setStatus("submitting");
        setErrorMessage("");

        // Combine name for DB
        const payload = {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            grade: formData.grade,
            parentName: `${formData.fatherName} & ${formData.motherName}`,
            message: `Previous School: ${formData.prevSchool}`,
            status: "New"
        };

        const result = await submitEnquiry(payload);

        if (result.success) {
            setStatus("success");
            setStep(5);
        } else {
            setStatus("error");
            setErrorMessage(result.message || "Something went wrong.");
        }
    };

    const steps = [
        { id: 1, title: "Student Details", icon: User },
        { id: 2, title: "Parent Details", icon: Users },
        { id: 3, title: "Academic History", icon: GraduationCap },
        { id: 4, title: "Review", icon: FileText },
    ];

    if (status === "success" || step === 5) {
        return (
            <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-2xl mx-auto border-t-8 border-green-500">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={48} strokeWidth={3} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Application Submitted!</h2>
                <p className="text-lg text-slate-600 mb-8">
                    Thank you for applying to Excellence Academy. We have sent a confirmation email to the registered address.
                </p>
                <button onClick={() => window.location.reload()} className="text-primary font-bold hover:underline">
                    Start New Application
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row min-h-[600px]">
            {/* Sidebar / Progress */}
            <div className="bg-slate-900 text-white p-8 md:w-1/3 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div>
                    <h2 className="text-2xl font-bold font-heading mb-8">Admission Enquiry</h2>
                    <div className="space-y-6 relative z-10">
                        {steps.map((s) => (
                            <div key={s.id} className={`flex items-center gap-4 ${step >= s.id ? "opacity-100" : "opacity-40"} transition-opacity`}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step > s.id ? "bg-green-500 border-green-500 text-white" : step === s.id ? "bg-primary border-primary text-white" : "border-slate-600 text-slate-400"}`}>
                                    {step > s.id ? <Check size={16} /> : <s.icon size={16} />}
                                </div>
                                <span className="font-bold text-sm tracking-wide">{s.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-xs text-slate-400 mt-12">
                    <p>Having trouble?</p>
                    <p className="text-white font-bold">+91 98765 43210</p>
                </div>
            </div>

            {/* Form Area */}
            <div className="p-8 md:p-12 md:w-2/3 flex flex-col bg-slate-50">
                <div className="flex-1">
                    {status === "error" && (
                        <div className="mb-6 bg-red-100 text-red-700 p-4 rounded-lg flex items-center gap-2">
                            <AlertCircle size={20} />
                            <span>{errorMessage}</span>
                        </div>
                    )}

                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-2xl font-bold text-primary mb-6">Student Information</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">First Name</label>
                                        <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary outline-none" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Last Name</label>
                                        <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary outline-none" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Date of Birth</label>
                                    <input name="dob" value={formData.dob} onChange={handleChange} type="date" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Grade Applying For</label>
                                    <select name="grade" value={formData.grade} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary outline-none bg-white">
                                        <option value="">Select Grade</option>
                                        <option value="Grade 1">Grade 1</option>
                                        <option value="Grade 2">Grade 2</option>
                                        <option value="Grade 3">Grade 3</option>
                                        <option value="Grade 4">Grade 4</option>
                                        <option value="Grade 5">Grade 5</option>
                                        <option value="Grade 6">Grade 6</option>
                                        <option value="Grade 7">Grade 7</option>
                                        <option value="Grade 8">Grade 8</option>
                                        <option value="Grade 9">Grade 9</option>
                                        <option value="Grade 11 (Science)">Grade 11 (Science)</option>
                                        <option value="Grade 11 (Commerce)">Grade 11 (Commerce)</option>
                                    </select>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-2xl font-bold text-primary mb-6">Parent Details</h3>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Father's Name</label>
                                    <input name="fatherName" value={formData.fatherName} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Mother's Name</label>
                                    <input name="motherName" value={formData.motherName} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary outline-none" />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Email ID</label>
                                        <input name="email" value={formData.email} onChange={handleChange} type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary outline-none" placeholder="parent@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Phone Number</label>
                                        <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary outline-none" placeholder="+91..." />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-2xl font-bold text-primary mb-6">Previous Academic Details</h3>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Previous School Name</label>
                                    <input name="prevSchool" value={formData.prevSchool} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Upload Report Card (Last Year)</label>
                                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center bg-white hover:bg-slate-50 transition-colors cursor-pointer group">
                                        <Upload className="mx-auto text-slate-400 group-hover:text-primary mb-3" size={32} />
                                        <p className="text-sm text-slate-600">Click to browse or drag file here</p>
                                        <p className="text-xs text-slate-400 mt-1">PDF, JPG up to 5MB</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-2xl font-bold text-primary mb-6">Review Application</h3>
                                <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4 text-sm">
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-slate-500">Student Name</span>
                                        <span className="font-bold text-slate-900">{formData.firstName} {formData.lastName}</span>
                                    </div>
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-slate-500">Applying For</span>
                                        <span className="font-bold text-slate-900">{formData.grade}</span>
                                    </div>
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-slate-500">Parent Email</span>
                                        <span className="font-bold text-slate-900">{formData.email}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-green-600 font-bold pt-2">
                                        <Check size={16} /> All documents ready for submission
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" className="w-5 h-5 text-primary rounded" defaultChecked />
                                    <span className="text-sm text-slate-600">I declare that the information above is true to the best of my knowledge.</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
                    <button
                        onClick={prevStep}
                        disabled={step === 1}
                        className="px-6 py-3 rounded-lg font-bold text-slate-500 hover:bg-slate-200 disabled:opacity-0 transition-all flex items-center gap-2"
                    >
                        <ChevronLeft size={16} /> Back
                    </button>

                    {step < 4 ? (
                        <button
                            onClick={nextStep}
                            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg flex items-center gap-2"
                        >
                            Next Step <ChevronRight size={16} />
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            disabled={status === "submitting"}
                            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg flex items-center gap-2 disabled:opacity-70"
                        >
                            {status === "submitting" ? <Loader2 className="animate-spin" size={20} /> : "Submit Application"}
                            {status !== "submitting" && <Check size={16} />}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
