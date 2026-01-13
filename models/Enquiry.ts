import mongoose, { Schema, model, models } from "mongoose";

const EnquirySchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        grade: { type: String, required: true },
        status: {
            type: String,
            enum: ["New", "Reviewing", "Contacted", "Admitted", "Rejected"],
            default: "New"
        },
        parentName: { type: String },
        message: { type: String },
    },
    { timestamps: true }
);

const Enquiry = models.Enquiry || model("Enquiry", EnquirySchema);

export default Enquiry;
