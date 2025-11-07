'use server'

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getMyUserToken() {
    const cookie = await cookies();
    const sessiontoken = cookie.get('next-auth.session-token')?.value

    if (!sessiontoken) {
        console.log("❌ No session token found");
        return null;
    }

    const decodedToken = await decode({
        token: sessiontoken,
        secret: process.env.NEXTAUTH_SECRET || "",
    });

    console.log("✅ decodedToken:", decodedToken);

    return decodedToken?.credentialsToken;
}