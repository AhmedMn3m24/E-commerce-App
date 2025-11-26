'use server'

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getMyUserToken() {
    const cookie = await cookies();

    const tokenSession =
        cookie.get('__Secure-next-auth.session-token')?.value ||
        cookie.get('next-auth.session-token')?.value;

    if (!tokenSession) {
        console.log("No session token found");
        return null;
    }

    if (!process.env.NEXTAUTH_SECRET) {
        throw new Error("NEXTAUTH_SECRET is not set!");
    }

    const decodedToken = await decode({
        token: tokenSession,
        secret: process.env.NEXTAUTH_SECRET,
    });

    console.log("decodedToken:", decodedToken);
    console.log("credentialsToken:", decodedToken?.credentialsToken);

    return decodedToken?.credentialsToken;
}
