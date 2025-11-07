import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { jwtDecode } from 'jwt-decode';
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
          const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });

          const finalRes = await res.json();
          console.log("finalRes auth", finalRes);

          if (finalRes.message === "success") {
            const decodedToken: { _id: string; email: string; name: string } = jwtDecode(finalRes.token);
            return {
              id: decodedToken._id,
              name: decodedToken.name,
              email: decodedToken.email,
              // credentialsToken: finalRes.token,
              credentialsToken: finalRes.token,
            };
          }

          return null;
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      },
    }),],


  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log("user.credentialsToken ===>", user.credentialsToken);

        const decodedToken: any = jwtDecode(user.credentialsToken);

        token.credentialsToken = user.credentialsToken;
        token.userId = decodedToken.id;
        token.name = decodedToken.name;
      }
      return token;
    },

    async session({ session, token }) {
      if (!session.user) session.user = {};

      session.user.id = token.userId;
      session.user.name = token.name;

      return session;
    }


    // callbacks: {
    //   async jwt(params) {
    //     console.log('JWT Params', params);
    //     if (params.user) {
    //       params.token.credentialsToken = params.user.credentialsToken;
    //       params.token.userId = params.user.id;

    //     }
    //     return params.token;
    //   },

    //   async session(params) {
    //     console.log('Session Params', params);
    //   session.user.id = token.userId;
    //     return params.session;
    //   },
    // }

    // },

  },

  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  }




}


const handler = NextAuth(NextAuthConfig);
export { handler as GET, handler as POST };













