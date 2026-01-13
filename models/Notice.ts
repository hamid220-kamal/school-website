import mongoose, { Schema, model, models } from "mongoose";

const NoticeSchema = new Schema(
    {
        title: { type: String, required: true },
        category: { type: String, required: true }, // e.g., Academic, Event, Holiday
        date: { type: String, required: true }, // Display date
        content: { type: String },
        isImportant: { type: Boolean, default: false },
        attachment: { type: String }, // URL to PDF/Image
    },
    { timestamps: true }
);

const Notice = models.Notice || model("Notice", NoticeSchema);

export default Notice;
