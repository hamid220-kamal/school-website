"use server";

import connectDB from "@/lib/db";
import Testimonial from "@/models/Testimonial";
import { revalidatePath } from "next/cache";

export async function getAllTestimonials() {
    try {
        await connectDB();
        const testimonials = await Testimonial.find().sort({ featured: -1, createdAt: -1 }).lean();
        return { success: true, data: JSON.parse(JSON.stringify(testimonials)) };
    } catch (error) {
        console.error("Error fetching testimonials:", error);
        return { success: false, data: [] };
    }
}

export async function createTestimonial(data: any) {
    try {
        await connectDB();
        await Testimonial.create(data);
        revalidatePath("/");
        revalidatePath("/admin/testimonials");
        return { success: true, message: "Testimonial added successfully" };
    } catch (error) {
        console.error("Error creating testimonial:", error);
        return { success: false, message: "Failed to add testimonial" };
    }
}

export async function deleteTestimonial(id: string) {
    try {
        await connectDB();
        await Testimonial.findByIdAndDelete(id);
        revalidatePath("/");
        revalidatePath("/admin/testimonials");
        return { success: true, message: "Testimonial removed" };
    } catch (error) {
        console.error("Error deleting testimonial:", error);
        return { success: false, message: "Failed to remove testimonial" };
    }
}
