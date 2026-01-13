import mongoose from "mongoose";

const GalleryItemSchema = new mongoose.Schema({
    title: { type: String },
    category: { type: String, required: true, enum: ["Campus", "Events", "Sports", "Arts", "Academics"] },
    imageUrl: { type: String, required: true },
    type: { type: String, enum: ["image", "video"], default: "image" },
    size: { type: String, enum: ["small", "large", "tall"], default: "small" },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.GalleryItem || mongoose.model("GalleryItem", GalleryItemSchema);
