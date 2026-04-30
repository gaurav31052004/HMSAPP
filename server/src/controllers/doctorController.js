import { Doctor } from "../models/Doctor.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getDoctors = asyncHandler(async (_req, res) => {
  const doctors = await Doctor.find().sort({ createdAt: -1 });
  res.json(doctors);
});

export const createDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.status(201).json(doctor);
});
