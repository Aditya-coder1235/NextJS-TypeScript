import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export const middleware = async (request: NextRequest) => {
    const token = await request.cookies.get("token")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);

        await jwtVerify(token, secret);
    } catch (error) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
};


export const config = {
    matcher: ["/dashboard/:path*"],
};