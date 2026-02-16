import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://fallback-for-build:27017/school";

if (!MONGODB_URI) {
    // This block is now effectively unreachable but kept for safety structure
    console.warn("MONGODB_URI is not defined. Database connection will fail at runtime.");
}

interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

// Global scope to preserve connection across hot reloads in dev
let cached: MongooseCache = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default dbConnect;
