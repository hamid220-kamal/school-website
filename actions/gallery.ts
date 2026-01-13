"use server";

import connectDB from "@/lib/db";
import GalleryItem from "@/models/GalleryItem";
import { revalidatePath } from "next/cache";

export async function getAllGalleryItems() {
    try {
        await connectDB();
        const items = await GalleryItem.find().sort({ createdAt: -1 }).lean();
        return { success: true, data: JSON.parse(JSON.stringify(items)) };
    } catch (error) {
        console.error("Error fetching gallery:", error);
        return { success: false, data: [] };
    }
}

export async function createGalleryItem(data: any) {
    try {
        await connectDB();
        await GalleryItem.create(data);
        revalidatePath("/gallery");
        revalidatePath("/admin/gallery");
        return { success: true, message: "Gallery item added" };
    } catch (error) {
        console.error("Error creating gallery item:", error);
        return { success: false, message: "Failed to add gallery item" };
    }
}

export async function deleteGalleryItem(id: string) {
    try {
        await connectDB();
        await GalleryItem.findByIdAndDelete(id);
        revalidatePath("/gallery");
        revalidatePath("/admin/gallery");
        return { success: true, message: "Gallery item removed" };
    } catch (error) {
        console.error("Error deleting gallery item:", error);
        return { success: false, message: "Failed to remove gallery item" };
    }
}
