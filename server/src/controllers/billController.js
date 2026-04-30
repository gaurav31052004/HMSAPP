import { Bill } from "../models/Bill.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getBills = asyncHandler(async (_req, res) => {
  const bills = await Bill.find().populate("patient", "fullName phone").sort({ createdAt: -1 });
  res.json(bills);
});

export const createBill = asyncHandler(async (req, res) => {
  const bill = await Bill.create(req.body);
  const populated = await bill.populate("patient", "fullName phone");
  res.status(201).json(populated);
});
