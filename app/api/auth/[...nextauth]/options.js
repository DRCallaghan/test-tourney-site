import OsuProvider from "next-auth/providers/osu";
import GitHubProvider from "next-auth/providers/github";

export const nextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        OsuProvider({
            clientId: process.env.OSU_CLIENT_ID,
            clientSecret: process.env.OSU_CLIENT_SECRET
        })
    ]
};
