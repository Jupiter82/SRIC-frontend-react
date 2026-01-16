// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
    const token = request.cookies.get("token")?.value;
    const { pathname } = request.nextUrl;

    if (!token && pathname.startsWith("/profile")) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (token && pathname === "/login") {
        return NextResponse.redirect(new URL("/profile", request.url));
    }
}
// Run this middleware ONLY for these routes
export const config = {
    matcher: ["/login", "/profile/:path*"],
};
