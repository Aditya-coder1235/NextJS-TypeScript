import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/config/db";
import Blog from "../../../../lib/models/blog.model";

export async function GET() {
    try {
        await connectDB();

        const blogs = await Blog.find();

        return NextResponse.json({ success: true, data: blogs });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}

export async function POST(request: Request) {
    try {
        await connectDB();

        const body = await request.json();

        const blog = await Blog.create(body);

        return NextResponse.json({
            success: true,
            message: "Blog created",
            data: blog,
        });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}

export async function DELETE(request: Request) {
    try {
        await connectDB();

        const { id } = await request.json();

        await Blog.findByIdAndDelete(id);

        return NextResponse.json({
            success: true,
            message: "Blog deleted",
        });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}