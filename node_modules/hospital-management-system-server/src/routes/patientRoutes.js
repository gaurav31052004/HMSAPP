import { Router } from "express";
import { createPatient, getPatients } from "../controllers/patientController.js";

const router = Router();

router.get("/", getPatients);
router.post("/", createPatient);

export default router;
