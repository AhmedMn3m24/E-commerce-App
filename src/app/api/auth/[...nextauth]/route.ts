
"use server";

import NextAuth, { AuthOptions, DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

// -------- Type Augmentation --------
declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      credentialsToken?: string;
    } & DefaultSession["user"];
  }

  interface User {
    id?: string;
    credentialsToken?: string;
  }

  interface JWT {
    credentialsToken?: string;
    userId?: string;
    name?: string;
  }
}

// -------- NextAuth Config --------
export const NextAuthConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          const res = await fetch(
            "https://ecommerce.routemisr.com/api/v1/auth/signin",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            }
          );

          const finalRes = await res.json();
          console.log("finalRes auth", finalRes);

          if (finalRes.message === "success" && finalRes.token) {
            const decoded = jwtDecode<{
              _id: string;
              email: string;
              name: string;
            }>(finalRes.token);

            return {
              id: decoded._id,
              name: decoded.name,
              email: decoded.email,
              credentialsToken: finalRes.token,
            };
          }

          return null;
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user?.credentialsToken) {
        token.credentialsToken = user.credentialsToken;
        token.userId = user.id;
        token.name = user.name;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = session.user || {} as any;

      session.user.id = token.userId as string | undefined;
      session.user.name = token.name as string | undefined;
      session.user.credentialsToken = token.credentialsToken as string | undefined;

      return session;
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 3 * 30 * 24 * 60 * 60,
  },
};

// Export handler for App Router
const handler = NextAuth(NextAuthConfig);
export { handler as GET, handler as POST };
