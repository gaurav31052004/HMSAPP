import { Router } from "express";
import {
  createAppointment,
  getAppointments
} from "../controllers/appointmentController.js";

const router = Router();

router.get("/", getAppointments);
router.post("/", createAppointment);

export default router;
