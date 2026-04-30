import { Appointment } from "../models/Appointment.js";
import { Bill } from "../models/Bill.js";
import { Doctor } from "../models/Doctor.js";
import { Patient } from "../models/Patient.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getDashboardSummary = asyncHandler(async (_req, res) => {
  const [patients, doctors, appointments, pendingBills, revenue, recentPatients] =
    await Promise.all([
      Patient.countDocuments(),
      Doctor.countDocuments(),
      Appointment.countDocuments(),
      Bill.countDocuments({ paymentStatus: { $ne: "Paid" } }),
      Bill.aggregate([{ $group: { _id: null, total: { $sum: "$amount" } } }]),
      Patient.find().sort({ createdAt: -1 }).limit(5)
    ]);

  res.json({
    stats: {
      patients,
      doctors,
      appointments,
      pendingBills,
      revenue: revenue[0]?.total || 0
    },
    recentPatients
  });
});
