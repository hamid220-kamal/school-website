import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import ChatbotQA from "@/models/ChatbotQA";

export async function GET() {
    try {
        await connectDB();
        const qa = await ChatbotQA.find({ active: true }).lean();
        return NextResponse.json({ success: true, data: JSON.parse(JSON.stringify(qa)) });
    } catch (error) {
        return NextResponse.json({ success: false, data: [] }, { status: 500 });
    }
}
