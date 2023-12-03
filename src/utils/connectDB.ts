import mongoose, { Connection, mongo } from "mongoose";

let client: Connection | null = null;
let bucket: mongo.GridFSBucket | null = null;

const MONGODB_URI: string | undefined = process.env.MONGODB_URI;

async function connectDB(): Promise<{
  client: Connection;
  bucket: mongo.GridFSBucket;
}> {
  if (client && bucket) {
    return { client, bucket };
  }

  if (!MONGODB_URI) {
    throw new Error("MongoDB URI not provided");
  }

  try {
    await mongoose.connect(MONGODB_URI);

    client = mongoose.connection;
    // const db = mongoose.connection; // Use mongoose.connection directly

    bucket = new mongoose.mongo.GridFSBucket(client.db, {
      bucketName: "images",
    });

    console.log("Connected to the Database");
    return { client, bucket };
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}

export default connectDB;
