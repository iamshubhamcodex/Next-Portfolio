import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null, dbName: null };
}

export default async function dbConnect(db) {
  if (cached.dbName !== db) {
    if (cached.conn) {
      cached.conn.disconnect();
      cached.conn = cached.promise = null;
    }
  }
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(
        `mongodb+srv://shubhamcdx:sscodeasexpertformongodball1290@cluster0.soagvli.mongodb.net/${db}?retryWrites=true&w=majority`
      )
      .then((mongoose) => {
        return mongoose;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
