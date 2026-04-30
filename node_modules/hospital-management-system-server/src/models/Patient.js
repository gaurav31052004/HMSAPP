import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 0 },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    phone: { type: String, required: true, trim: true },
    bloodGroup: { type: String, required: true, trim: true },
    disease: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    emergencyContact: { type: String, required: true, trim: true },
    admittedOn: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["Admitted", "Under Observation", "Discharged"],
      default: "Admitted"
    }
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
