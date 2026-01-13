import mongoose from "mongoose";

const FacultySchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    qualification: { type: String },
    image: { type: String, default: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" },
    email: { type: String },
    order: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Faculty || mongoose.model("Faculty", FacultySchema);
