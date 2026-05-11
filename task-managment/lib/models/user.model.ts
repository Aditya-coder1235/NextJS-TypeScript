import mongoose from "mongoose";

type User={
    name:string;
    email:string;
    password:string
}

const userSchema = new mongoose.Schema<User>({
    name: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    },
});

const User=mongoose.models.User || mongoose.model<User>("User",userSchema);

export default User;