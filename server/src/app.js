import cors from "cors";
import express from "express";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import billRoutes from "./routes/billRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";

const app = express();

app.use(
  cors({
    origin: "*"
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ message: "Hospital Management API is running" });
});

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/bills", billRoutes);

app.use((error, _req, res, _next) => {
  res.status(500).json({
    message: error.message || "Something went wrong"
  });
});

export default app;
