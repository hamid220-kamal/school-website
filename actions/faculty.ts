"use server";

import connectDB from "@/lib/db";
import Faculty from "@/models/Faculty";
import { revalidatePath } from "next/cache";

export async function getAllFaculty() {
    try {
        await connectDB();
        const faculty = await Faculty.find().sort({ order: 1, createdAt: -1 }).lean();
        return { success: true, data: JSON.parse(JSON.stringify(faculty)) };
    } catch (error) {
        console.error("Error fetching faculty:", error);
        return { success: false, data: [] };
    }
}

export async function createFaculty(data: any) {
    try {
        await connectDB();
        await Faculty.create(data);
        revalidatePath("/faculty");
        revalidatePath("/admin/faculty");
        return { success: true, message: "Faculty member added successfully" };
    } catch (error) {
        console.error("Error creating faculty:", error);
        return { success: false, message: "Failed to add faculty member" };
    }
}

export async function deleteFaculty(id: string) {
    try {
        await connectDB();
        await Faculty.findByIdAndDelete(id);
        revalidatePath("/faculty");
        revalidatePath("/admin/faculty");
        return { success: true, message: "Faculty member removed" };
    } catch (error) {
        console.error("Error deleting faculty:", error);
        return { success: false, message: "Failed to remove faculty member" };
    }
}
