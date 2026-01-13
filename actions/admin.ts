"use server";

import connectDB from "@/lib/db";
import Enquiry from "@/models/Enquiry";
import Notice from "@/models/Notice";
import { revalidatePath } from "next/cache";

export async function getDashboardStats() {
    try {
        await connectDB();

        // Mocking Total Students as we don't have a Student model populated yet
        const totalStudents = 1240;

        const newAdmissions = await Enquiry.countDocuments({ status: "New" });
        const pendingEnquiries = await Enquiry.countDocuments({ status: { $in: ["New", "Reviewing"] } });
        const activeNotices = await Notice.countDocuments({});

        return {
            success: true,
            data: {
                totalStudents,
                newAdmissions,
                pendingEnquiries,
                activeNotices
            }
        };
    } catch (error) {
        console.error("Error fetching stats:", error);
        return { success: false, data: null };
    }
}

export async function getRecentEnquiries() {
    try {
        await connectDB();
        const enquiries = await Enquiry.find().sort({ createdAt: -1 }).limit(5).lean();
        return { success: true, data: JSON.parse(JSON.stringify(enquiries)) };
    } catch (error) {
        console.error("Error fetching enquiries:", error);
        return { success: false, data: [] };
    }
}

export async function getAllEnquiries() {
    try {
        await connectDB();
        const enquiries = await Enquiry.find().sort({ createdAt: -1 }).lean();
        return { success: true, data: JSON.parse(JSON.stringify(enquiries)) };
    } catch (error) {
        console.error("Error fetching all enquiries:", error);
        return { success: false, data: [] };
    }
}

export async function updateEnquiryStatus(id: string, status: string) {
    try {
        await connectDB();
        await Enquiry.findByIdAndUpdate(id, { status });
        revalidatePath("/admin/admissions");
        revalidatePath("/admin");
        return { success: true, message: "Status updated successfully" };
    } catch (error) {
        console.error("Error updating enquiry status:", error);
        return { success: false, message: "Failed to update status" };
    }
}
