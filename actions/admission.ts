"use server";

import connectDB from "@/lib/db";
import Enquiry from "@/models/Enquiry";

export async function submitEnquiry(formData: any) {
    try {
        await connectDB();

        // Validation (Basic)
        if (!formData.name || !formData.email || !formData.phone) {
            return { success: false, message: "Missing required fields" };
        }

        const newEnquiry = await Enquiry.create(formData);

        // TODO: Send Email Notification via Nodemailer (Phase 3)

        return { success: true, message: "Application submitted successfully!", id: newEnquiry._id.toString() };
    } catch (error) {
        console.error("Submission Error:", error);
        return { success: false, message: "Failed to submit application. Please try again." };
    }
}
