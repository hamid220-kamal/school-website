import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
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
                        return newUser;
                    }
                    return null;
                }

                const isMatch = await bcrypt.compare(credentials.password as string, user.password);
                if (!isMatch) return null;

                return user;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async session({ session, token }: any) {
            if (token?.sub) {
                session.user.id = token.sub;
                session.user.role = token.role;
            }
            return session;
        },
        async jwt({ token, user }: any) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
    },
    trustHost: true,
});
