import mongoose from "mongoose";

const billSchema = new mongoose.Schema(
  {
    patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
    amount: { type: Number, required: true, min: 0 },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Partially Paid"],
      default: "Pending"
    },
    paymentMethod: {
      type: String,
      enum: ["Cash", "Card", "UPI", "Insurance"],
      default: "Cash"
    },
    description: { type: String, required: true, trim: true },
    issuedOn: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export const Bill = mongoose.model("Bill", billSchema);
