"use server";

import connectDB from "@/lib/db";
import ChatbotQA from "@/models/ChatbotQA";
import { revalidatePath } from "next/cache";

export async function getAllQA() {
    try {
        await connectDB();
        const qa = await ChatbotQA.find().sort({ createdAt: -1 }).lean();
        return { success: true, data: JSON.parse(JSON.stringify(qa)) };
    } catch (error) {
        console.error("Error fetching Q&A:", error);
        return { success: false, data: [] };
    }
}

export async function createQA(data: { question: string; answer: string; keywords?: string[] }) {
    try {
        await connectDB();
        await ChatbotQA.create(data);
        revalidatePath("/admin/chatbot");
        return { success: true, message: "Q&A added successfully" };
    } catch (error) {
        console.error("Error creating Q&A:", error);
        return { success: false, message: "Failed to add Q&A" };
    }
}

export async function deleteQA(id: string) {
    try {
        await connectDB();
        await ChatbotQA.findByIdAndDelete(id);
        revalidatePath("/admin/chatbot");
        return { success: true, message: "Q&A removed" };
    } catch (error) {
        console.error("Error deleting Q&A:", error);
        return { success: false, message: "Failed to remove Q&A" };
    }
}
