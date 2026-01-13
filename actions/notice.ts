"use server";

import connectDB from "@/lib/db";
import Notice from "@/models/Notice";
import { revalidatePath } from "next/cache";

export async function getNotices() {
    try {
        await connectDB();
        const notices = await Notice.find().sort({ createdAt: -1 }).lean();
        return { success: true, data: JSON.parse(JSON.stringify(notices)) };
    } catch (error) {
        console.error("Error fetching notices:", error);
        return { success: false, data: [] };
    }
}

export async function createNotice(formData: any) {
    try {
        await connectDB();
        await Notice.create(formData);
        revalidatePath("/"); // Update home page
        revalidatePath("/notices"); // Update notices page
        return { success: true, message: "Notice created successfully" };
    } catch (error) {
        console.error("Error creating notice:", error);
        return { success: false, message: "Failed to create notice" };
    }
}

export async function deleteNotice(id: string) {
    try {
        await connectDB();
        await Notice.findByIdAndDelete(id);
        revalidatePath("/");
        revalidatePath("/notices");
        return { success: true, message: "Notice deleted successfully" };
    } catch (error) {
        console.error("Error deleting notice:", error);
        return { success: false, message: "Failed to delete notice" };
    }
}
