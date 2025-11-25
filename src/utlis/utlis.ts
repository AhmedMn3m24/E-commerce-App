'use server'

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getMyUserToken() {
    const cookie = await cookies()
    const tokenSession =
        cookie.get('__Secure-next-auth.session-token')?.value || // Production
        cookie.get('next-auth.session-token')?.value;            // Dev
    const decodedToken = await decode({ token: tokenSession, secret: process.env.NEXTAUTH_SECRET! })
    return decodedToken?.credentialToken
}
















//     if (!sessiontoken) {
//         console.log(" No session token found");
//         return null;
//     }

//     if (!process.env.NEXTAUTH_SECRET) {
//         throw new Error(" NEXTAUTH_SECRET is not set!");
//     }

//     const decodedToken = await decode({
//         token: sessiontoken,
//         secret: process.env.NEXTAUTH_SECRET,
//     });

//     console.log("decodedToken:", decodedToken);
//     console.log(" credentialsToken:", decodedToken?.credentialsToken);

//     return decodedToken?.credentialsToken;
// }
