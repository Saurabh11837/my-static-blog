import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  // 👇 Optional custom page (keep only if /login exists)
  pages: {
    signIn: "/login",
  },

  callbacks: {
    async redirect({ url, baseUrl }) {
      // Always redirect to your site's base URL (works both local & deployed)
      return baseUrl;
    },
  },
});

export { handler as GET, handler as POST };
