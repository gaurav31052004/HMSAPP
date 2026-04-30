import mongoose from "mongoose";

export const connectDatabase = async () => {
  const mongoUri =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/hospital_management";

  try {
    await mongoose.connect(mongoUri);
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed", error.message);
    process.exit(1);
  }
};
