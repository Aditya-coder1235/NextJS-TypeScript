import mongoose from "mongoose";

export const DBConnection=async():Promise<void>=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Connect to DB")
        
    } catch (error) {
        console.log(error);
    }
}