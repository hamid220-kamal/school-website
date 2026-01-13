import mongoose from "mongoose";

const ChatbotQASchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    keywords: [{ type: String }],
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.ChatbotQA || mongoose.model("ChatbotQA", ChatbotQASchema);
