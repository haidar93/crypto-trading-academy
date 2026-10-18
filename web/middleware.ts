import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Route yang WAJIB login
const PROTECTED_ROUTES = ["/dashboard", "/profile"];

// Route yang CUMA BOLEH diakses kalau BELUM login
const AUTH_ROUTES = ["/login", "/register"];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get("token")?.value;

    // 1. Belum login, tapi maksa buka halaman protected
    const isProtectedRoute = PROTECTED_ROUTES.some((r) => pathname.startsWith(r));
    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // 2. Udah login, tapi buka halaman auth (login/register)
    // const isAuthRoute = AUTH_ROUTES.some((r) => pathname.startsWith(r));
    // if (isAuthRoute && token) {
    //     return NextResponse.redirect(new URL("/dashboard", request.url));
    // }

    // 3. Sisanya, biarin jalan normal
    return NextResponse.next();
}

// Middleware cuma jalan di route ini (biar performa gak berat)
export const config = {
    matcher: ["/dashboard/:path*", "/login", "/register"],
};