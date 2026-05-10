import mongoose from "mongoose";
import { config } from "dotenv";

config();

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
}
