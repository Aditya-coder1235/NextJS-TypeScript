"use server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "@/lib/models/user.model";
import { redirect } from "next/navigation";
import { ConnectDB } from "@/lib/config/db";
import { cookies } from "next/headers";

export const signup = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await ConnectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists!");
    }

    const hashPassword = await bcrypt.hash(password, 13);

    await User.create({ name, email, password: hashPassword });

    redirect("/login");
};

export const login = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await ConnectDB();

    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
        throw new Error("Invalid credentials!");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
        expiresIn: "7d",
    });

    const cookieStore = await cookies();

    cookieStore.set("token", token, {
        httpOnly: true,
        secure: false,
        path: "/",
    });

    redirect("/dashboard");
};

export const logout = async () => {
    const cookieStore = await cookies();
    cookieStore.delete("token");
    redirect("/login");
};
