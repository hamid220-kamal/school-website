"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Play, Camera, Sparkles, X } from "lucide-react";

interface GalleryItem {
    _id: string;
    title?: string;
    category: string;
    imageUrl: string;
    type: string;
    size: string;
}

export default function Gallery() {
    const [filter, setFilter] = useState("All");
    const [items, setItems] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const categories = ["All", "Campus", "Events", "Sports", "Arts", "Academics"];

    const fallbackItems: GalleryItem[] = [
        { _id: "1", type: "image", category: "Campus", imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop", size: "large" },
        { _id: "2", type: "image", category: "Sports", imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop", size: "small" },
        { _id: "3", type: "image", category: "Events", imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop", size: "small" },
        { _id: "4", type: "image", category: "Arts", imageUrl: "https://images.unsplash.com/photo-1544531696-6569265f026a?q=80&w=1000&auto=format&fit=crop", size: "tall" },
        { _id: "5", type: "image", category: "Campus", imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop", size: "small" },
        { _id: "6", type: "video", category: "Events", imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop", size: "large" },
        { _id: "7", type: "image", category: "Sports", imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop", size: "small" },
        { _id: "8", type: "image", category: "Arts", imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1000&auto=format&fit=crop", size: "tall" },
    ];

    useEffect(() => {
        async function fetchItems() {
            try {
                const res = await fetch("/api/gallery");
                const data = await res.json();
                if (data.success && data.data.length > 0) {
                    setItems(data.data);
                } else {
                    setItems(fallbackItems);
                }
            } catch {
                setItems(fallbackItems);
            }
            setLoading(false);
        }
        fetchItems();
    }, []);

    const filteredItems = filter === "All" ? items : items.filter(item => item.category === filter);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero" />
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-[80px]" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-flex items-center gap-2 glass px-6 py-2.5 rounded-full text-white text-sm font-bold tracking-wider mb-6">
                            <Camera size={16} />
                            LIFE AT EXCELLENCE
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading text-white mb-6">
                            Our <span className="text-gradient-secondary">Gallery</span>
                        </h1>
                        <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl">
                            Glimpses of our vibrant campus, spirited events, and the everyday moments that define our community.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all ${filter === cat
                                ? "bg-gradient-primary text-white shadow-glow"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[220px]">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                key={item._id}
                                onClick={() => setSelectedImage(item.imageUrl)}
                                className={`relative group rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all ${item.size === "large" ? "md:col-span-2 md:row-span-2" :
                                        item.size === "tall" ? "md:row-span-2" : ""
                                    }`}
                            >
                                <Image
                                    src={item.imageUrl}
                                    alt={`Gallery item ${item.category}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors" />

                                {/* Content */}
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <span className="inline-block bg-gradient-secondary text-xs font-bold px-3 py-1 rounded-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {item.category}
                                    </span>
                                    {item.type === "video" && (
                                        <div className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Play size={16} fill="white" /> Watch Video
                                        </div>
                                    )}
                                </div>

                                {/* Video Play Button */}
                                {item.type === "video" && (
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play size={28} fill="white" className="text-white ml-1" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-6 right-6 text-white/60 hover:text-white p-2">
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="relative max-w-5xl max-h-[80vh] w-full h-full"
                        >
                            <Image
                                src={selectedImage}
                                alt="Gallery"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
