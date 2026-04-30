import { Patient } from "../models/Patient.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getPatients = asyncHandler(async (_req, res) => {
  const patients = await Patient.find().sort({ createdAt: -1 });
  res.json(patients);
});

export const createPatient = asyncHandler(async (req, res) => {
  const patient = await Patient.create(req.body);
  res.status(201).json(patient);
});
