import { Router } from "express";
import { createBill, getBills } from "../controllers/billController.js";

const router = Router();

router.get("/", getBills);
router.post("/", createBill);

export default router;
