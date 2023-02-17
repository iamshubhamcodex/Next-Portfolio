import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(
        "mongodb+srv://shubhamcdx:sscodeasexpertformongodball1290@cluster0.soagvli.mongodb.net/ecoaching?retryWrites=true&w=majority"
      )
      .then((mongoose) => {
        return mongoose;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
