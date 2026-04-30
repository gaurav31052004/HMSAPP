import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true },
    specialization: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    availability: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
