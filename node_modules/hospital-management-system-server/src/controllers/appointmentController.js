import { Appointment } from "../models/Appointment.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getAppointments = asyncHandler(async (_req, res) => {
  const appointments = await Appointment.find()
    .populate("patient", "fullName disease status")
    .populate("doctor", "fullName department")
    .sort({ createdAt: -1 });

  res.json(appointments);
});

export const createAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.create(req.body);
  const populated = await appointment.populate([
    { path: "patient", select: "fullName disease status" },
    { path: "doctor", select: "fullName department" }
  ]);

  res.status(201).json(populated);
});
