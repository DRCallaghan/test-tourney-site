import NextAuth from "next-auth";
import OsuProvider from "next-auth/providers/osu";

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        OsuProvider({
            clientId: process.env.OSU_CLIENT_ID,
            clientSecret: process.env.OSU_CLIENT_SECRET
        })
    ]
});

export { handler as GET, handler as POST };