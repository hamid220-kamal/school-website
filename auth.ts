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

                const user = await User.findOne({ email: credentials.email });

                if (!user) {
                    // For demo purposes, create a default admin if none exists
                    if (credentials.email === "admin@school.com" && credentials.password === "admin123") {
                        const hashedPassword = await bcrypt.hash("admin123", 10);
                        const newUser = await User.create({
                            name: "Admin User",
                            email: "admin@school.com",
                            password: hashedPassword,
                            role: "admin",
                        });
                        return { id: newUser._id.toString(), name: newUser.name, email: newUser.email, role: newUser.role };
                    }
                    return null;
                }

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
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
export default handler;
