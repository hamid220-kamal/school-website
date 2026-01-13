"use server";

import connectDB from "@/lib/db";
import ContactMessage from "@/models/ContactMessage";

export async function submitContactMessage(formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) {
    try {
        await connectDB();

        if (!formData.name || !formData.email || !formData.message) {
            return { success: false, message: "Please fill in all required fields." };
        }

        await ContactMessage.create(formData);

        return { success: true, message: "Your message has been sent successfully! We'll get back to you soon." };
    } catch (error) {
        console.error("Contact form error:", error);
        return { success: false, message: "Failed to send message. Please try again later." };
    }
}

export async function getContactMessages() {
    try {
        await connectDB();
        const messages = await ContactMessage.find().sort({ createdAt: -1 }).lean();
        return { success: true, data: JSON.parse(JSON.stringify(messages)) };
    } catch (error) {
        console.error("Error fetching messages:", error);
        return { success: false, data: [] };
    }
}
