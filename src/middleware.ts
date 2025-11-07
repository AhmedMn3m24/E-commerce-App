import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const jwt = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    console.log(jwt);

    if (jwt) {
        return NextResponse.next();

    }
    return NextResponse.redirect(new URL('/login', req.url));

}

export const config = {
    matcher: ['/cart', '/wishlist']
};
