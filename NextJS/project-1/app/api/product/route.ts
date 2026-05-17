import { DBConnection } from "@/lib/db/db";
import Product from "@/lib/models/product.model";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    try {
        await DBConnection();

        const products = await Product.find();

        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json(
            { error: "Error fetching products" },
            { status: 500 },
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        await DBConnection();

        const body = await request.json();

        const product = await Product.create(body);

        return NextResponse.json(product, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Error creating product" },
            { status: 500 },
        );
    }
}
