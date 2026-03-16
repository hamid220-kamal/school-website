import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Dynamic imports to avoid build-time issues
                const connectDB = (await import("@/lib/db")).default;
                const User = (await import("@/models/User")).default;
                const bcrypt = (await import("bcryptjs")).default;

                await connectDB();
                if (!credentials?.email || !credentials?.password) return null;

                // Hardcoded Demo Credentials for Pitch
                const demoUsers = [
                    { email: "chairman@example.com", password: "Chairman@123", name: "Chairman of Schools", role: "chairman" },
                    { email: "principal@example.com", password: "Principal@123", name: "School Principal", role: "principal" },
                    { email: "teacher@example.com", password: "Teacher@123", name: "Senior Faculty", role: "teacher" },
                    { email: "parent@example.com", password: "Parent@123", name: "Student Parent", role: "parent" },
                ];

                const matchedDemoUser = demoUsers.find(u => u.email === credentials.email && u.password === credentials.password);
                if (matchedDemoUser) {
                    return { id: matchedDemoUser.role, name: matchedDemoUser.name, email: matchedDemoUser.email, role: matchedDemoUser.role };
                }

                // Database check for real users
                const user = await User.findOne({ email: credentials.email });
                if (!user) return null;

                const isMatch = await bcrypt.compare(credentials.password, user.password);
                if (!isMatch) return null;

                return { id: user._id.toString(), name: user.name, email: user.email, role: user.role };
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({ session, token }) {
            if (token?.sub) {
                (session.user as any).id = token.sub;
                (session.user as any).role = token.role;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.role = (user as any).role;
            }
            return token;
        },
    },
    secret: process.env.NEXTAUTH_SECRET || "fallback-secret-for-build",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
export default handler;
