import dotenv from "dotenv";
import { connectDatabase } from "../config/db.js";
import { Appointment } from "../models/Appointment.js";
import { Bill } from "../models/Bill.js";
import { Doctor } from "../models/Doctor.js";
import { Patient } from "../models/Patient.js";

dotenv.config();

const seed = async () => {
  await connectDatabase();

  await Promise.all([
    Appointment.deleteMany({}),
    Bill.deleteMany({}),
    Doctor.deleteMany({}),
    Patient.deleteMany({})
  ]);

  const doctors = await Doctor.insertMany([
    {
      fullName: "Dr. Anjali Mehta",
      department: "Cardiology",
      specialization: "Heart Specialist",
      phone: "9876543210",
      email: "anjali.mehta@hospital.com",
      availability: "Mon-Fri, 10:00 AM - 4:00 PM"
    },
    {
      fullName: "Dr. Rahul Verma",
      department: "Neurology",
      specialization: "Neuro Physician",
      phone: "9123456780",
      email: "rahul.verma@hospital.com",
      availability: "Mon-Sat, 9:00 AM - 2:00 PM"
    },
    {
      fullName: "Dr. Sana Khan",
      department: "Orthopedics",
      specialization: "Bone and Joint Specialist",
      phone: "9988776655",
      email: "sana.khan@hospital.com",
      availability: "Tue-Sun, 11:00 AM - 5:00 PM"
    }
  ]);

  const patients = await Patient.insertMany([
    {
      fullName: "Aarav Sharma",
      age: 34,
      gender: "Male",
      phone: "9000011111",
      bloodGroup: "B+",
      disease: "Hypertension",
      address: "Pune, Maharashtra",
      emergencyContact: "Riya Sharma - 9000022222",
      status: "Under Observation"
    },
    {
      fullName: "Meera Iyer",
      age: 27,
      gender: "Female",
      phone: "9333344444",
      bloodGroup: "O+",
      disease: "Migraine",
      address: "Chennai, Tamil Nadu",
      emergencyContact: "Arjun Iyer - 9333355555",
      status: "Admitted"
    },
    {
      fullName: "Kabir Singh",
      age: 52,
      gender: "Male",
      phone: "9555566666",
      bloodGroup: "A-",
      disease: "Knee Pain",
      address: "Jaipur, Rajasthan",
      emergencyContact: "Neha Singh - 9555577777",
      status: "Discharged"
    }
  ]);

  await Appointment.insertMany([
    {
      patient: patients[0]._id,
      doctor: doctors[0]._id,
      date: "2026-04-15",
      time: "10:30 AM",
      purpose: "Routine cardiac checkup",
      status: "Scheduled"
    },
    {
      patient: patients[1]._id,
      doctor: doctors[1]._id,
      date: "2026-04-15",
      time: "12:00 PM",
      purpose: "Neurology consultation",
      status: "Scheduled"
    }
  ]);

  await Bill.insertMany([
    {
      patient: patients[0]._id,
      amount: 12000,
      paymentStatus: "Partially Paid",
      paymentMethod: "Insurance",
      description: "Cardiology tests and consultation"
    },
    {
      patient: patients[1]._id,
      amount: 4500,
      paymentStatus: "Pending",
      paymentMethod: "UPI",
      description: "MRI scan and medicines"
    },
    {
      patient: patients[2]._id,
      amount: 8000,
      paymentStatus: "Paid",
      paymentMethod: "Card",
      description: "Orthopedic consultation package"
    }
  ]);

  console.log("Sample hospital data seeded");
  process.exit(0);
};

seed().catch((error) => {
  console.error("Seed failed", error.message);
  process.exit(1);
});
