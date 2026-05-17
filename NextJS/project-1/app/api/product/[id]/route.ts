import { DBConnection } from "@/lib/db/db";
import Product from "@/lib/models/product.model";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } },
) {
    try {
        await DBConnection();
        const product = await Product.findById(params.id);

        if (!product) {
            return NextResponse.json(
                { message: "Product not found" },
                { status: 404 },
            );
        }

        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json(
            { error: "Error fetching product" },
            { status: 500 },
        );
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } },
) {
    try {
        await DBConnection();

        const body = await request.json();

        const updatedProduct = await Product.findByIdAndUpdate(
            params.id,
            body,
            { new: true },
        );

        return NextResponse.json(updatedProduct);
    } catch (error) {
        return NextResponse.json(
            { error: "Error updating product" },
            { status: 500 },
        );
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } },
) {
    try {
        await DBConnection();

        const id = params.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json(
                { message: "Invalid ID" },
                { status: 400 },
            );
        }

        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return NextResponse.json(
                { message: "Product not found" },
                { status: 404 },
            );
        }

        return NextResponse.json({
            message: "Product deleted",
            deletedProduct,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Error deleting product" },
            { status: 500 },
        );
    }
}