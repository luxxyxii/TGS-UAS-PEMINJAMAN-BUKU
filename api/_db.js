import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined");
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
   cached.promise = mongoose.connect(MONGO_URI, {
  bufferCommands: false,
  serverSelectionTimeoutMS: 30000,  // Ubah dari 5000 ke 30000
  socketTimeoutMS: 45000,           // Opsional: tambah ini biar lebih stabil
  maxPoolSize: 10,                  // Opsional: batasi pool size
});
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
