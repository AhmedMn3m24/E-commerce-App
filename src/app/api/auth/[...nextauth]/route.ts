"use server";
import NextAuth, { AuthOptions, DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwtDecode from "jwt-decode"; // ✅ صحّح الاستدعاء

// 🔹 Type augmentation لـ NextAuth
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

// 🔹 NextAuth configuration
export const NextAuthConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const res = await fetch(
            "https://ecommerce.routemisr.com/api/v1/auth/signin",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );

          const finalRes = await res.json();
          console.log("finalRes auth", finalRes);

          if (finalRes.message === "success" && finalRes.token) {
            const decodedToken: { _id: string; email: string; name: string } =
              jwtDecode(finalRes.token);

            return {
              id: decodedToken._id,
              name: decodedToken.name,
              email: decodedToken.email,
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
    signIn: "/register", // صفحة تسجيل الدخول
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user?.credentialsToken) {
        const decodedToken: any = jwtDecode(user.credentialsToken);

        token.credentialsToken = user.credentialsToken;
        token.userId = decodedToken._id;
        token.name = decodedToken.name;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.userId,
        name: token.name,
        credentialsToken: token.credentialsToken,
      };
      return session;
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 3 * 30 * 24 * 60 * 60, // 3 شهور
  },
};

// 🔹 Export handler for Next.js App Router
const handler = NextAuth(NextAuthConfig);
export { handler as GET, handler as POST };
