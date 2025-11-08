import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  // 👇 yeh part add karo
  pages: {
    signIn: "/login", // custom login page
  },

  callbacks: {
    async redirect({ url, baseUrl }) {
      // Login hone ke baad redirect home page par
      return baseUrl; // i.e. http://localhost:3000
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
