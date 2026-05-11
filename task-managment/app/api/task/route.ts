import { ConnectDB } from "@/lib/config/db";
import Task from "@/lib/models/task.model";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        await ConnectDB()
        const tasks=await Task.find()

        return NextResponse.json(tasks)
    
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}

export async function POST(request: Request) {
    try {
        await ConnectDB();

        const body=await request.json()

        await Task.create(body)

        return NextResponse.json({message:"Task create"})

    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}

export async function DELETE(request: Request) {
    try {
        await ConnectDB();


        const {id}=await request.json()

        await Task.findByIdAndDelete(id)


        return NextResponse.json({ message: "Task Deleted" });

    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}