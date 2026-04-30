import { Router } from "express";
import { createDoctor, getDoctors } from "../controllers/doctorController.js";

const router = Router();

router.get("/", getDoctors);
router.post("/", createDoctor);

export default router;
