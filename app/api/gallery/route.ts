import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import GalleryItem from "@/models/GalleryItem";

export async function GET() {
    try {
        await connectDB();
        const items = await GalleryItem.find().sort({ createdAt: -1 }).lean();
        return NextResponse.json({ success: true, data: JSON.parse(JSON.stringify(items)) });
    } catch (error) {
        return NextResponse.json({ success: false, data: [] }, { status: 500 });
    }
}
