"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Message = {
    id: number;
    text: string;
    sender: "user" | "bot";
};

type QAPair = {
    _id: string;
    question: string;
    answer: string;
    keywords: string[];
};

const INITIAL_MESSAGE: Message = {
    id: 0,
    text: "Hello! I'm the Excellence Academy Assistant. Ask me about admissions, fees, timings, or facilities.",
    sender: "bot",
};

// Default fallback Q&A
const FALLBACK_QA: QAPair[] = [
    { _id: "1", question: "admission", answer: "Admissions are open for 2026-27! You can apply online via the 'Admissions' page. We offer grades from Nursery to 12.", keywords: ["admission", "apply", "join", "enroll"] },
    { _id: "2", question: "fees", answer: "The annual fee structure varies by grade. Primary is approx ₹50,000 and Secondary is ₹70,000. Scholarships are available for meritorious students.", keywords: ["fee", "cost", "price", "payment"] },
    { _id: "3", question: "timings", answer: "School timings are 8:00 AM to 2:00 PM (Summer) and 8:30 AM to 2:30 PM (Winter). Office hours are 9:00 AM to 3:00 PM.", keywords: ["time", "timing", "schedule", "hours"] },
    { _id: "4", question: "facilities", answer: "We have state-of-the-art Science Labs, a Digital Library, a Swimming Pool, and a vast Sports Complex including Football, Basketball, and Cricket grounds.", keywords: ["facility", "lab", "sport", "library", "pool"] },
    { _id: "5", question: "contact", answer: "You can reach us at +91 98765 43210 or admissions@excellence.edu. Visit our Contact page for more location details.", keywords: ["contact", "phone", "email", "call"] },
    { _id: "6", question: "principal", answer: "Our Principal is Dr. N. Venkateswara Rao, a visionary leader with over 35 years of experience in education.", keywords: ["principal", "head", "director"] },
];

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [qaData, setQaData] = useState<QAPair[]>(FALLBACK_QA);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Fetch Q&A from API on mount
        async function loadQA() {
            try {
                const res = await fetch("/api/chatbot");
                const data = await res.json();
                if (data.success && data.data.length > 0) {
                    setQaData([...data.data, ...FALLBACK_QA]); // Merge DB data with fallback
                }
            } catch (error) {
                console.log("Using fallback Q&A");
            }
        }
        loadQA();
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const findAnswer = (userInput: string): string => {
        const lowerInput = userInput.toLowerCase();

        // Greetings check
        if (["hello", "hi", "hey", "good morning", "good afternoon"].some(g => lowerInput.includes(g))) {
            return "Hello! Welcome to Excellence Academy. How can I assist you today?";
        }

        // Search through Q&A pairs
        for (const qa of qaData) {
            // Check keywords
            if (qa.keywords && qa.keywords.some(kw => lowerInput.includes(kw.toLowerCase()))) {
                return qa.answer;
            }
            // Check question text
            if (lowerInput.includes(qa.question.toLowerCase())) {
                return qa.answer;
            }
        }

        return "I'm not sure about that. Please contact the office at +91 98765 43210 or email info@excellence.edu for more details.";
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg: Message = { id: Date.now(), text: input, sender: "user" };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        setTimeout(() => {
            const botResponse = findAnswer(userMsg.text);
            setMessages((prev) => [...prev, { id: Date.now() + 1, text: botResponse, sender: "bot" }]);
            setIsTyping(false);
        }, 800);
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 flex flex-col overflow-hidden"
                        style={{ height: '500px', maxHeight: '80vh' }}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary to-blue-800 p-4 flex items-center justify-between text-white shadow-md">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <span className="font-bold block text-sm">School Assistant</span>
                                    <span className="text-xs opacity-80 flex items-center gap-1"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Online</span>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-4">
                            {messages.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={msg.id}
                                    className={cn(
                                        "flex w-full",
                                        msg.sender === "user" ? "justify-end" : "justify-start"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "max-w-[85%] p-3.5 px-5 rounded-2xl text-sm shadow-sm",
                                            msg.sender === "user"
                                                ? "bg-secondary text-white rounded-br-none"
                                                : "bg-white text-slate-700 border border-slate-100 rounded-bl-none"
                                        )}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start w-full">
                                    <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-slate-100 shadow-sm flex gap-1 items-center">
                                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-3 bg-white border-t border-slate-100">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex gap-2 items-center"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your question..."
                                    className="flex-1 px-4 py-3 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 text-slate-800 placeholder:text-slate-400"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim()}
                                    className="p-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all disabled:opacity-50 disabled:scale-95 shadow-md hover:shadow-lg active:scale-90"
                                >
                                    <Send size={18} className={input.trim() ? "translate-x-0.5" : ""} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-4 md:right-8 w-16 h-16 bg-primary text-white rounded-full shadow-xl shadow-primary/30 flex items-center justify-center z-50 transition-shadow overflow-hidden group"
            >
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
            </motion.button>
        </>
    );
}
