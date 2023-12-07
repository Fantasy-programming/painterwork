import mongoose, { Connection, mongo } from 'mongoose';
import { mongokey } from '@/lib/env';

let client: Connection | null = null;
let bucket: mongo.GridFSBucket | null = null;

const MONGODB_URI: string | undefined = mongokey;

async function connectDB(): Promise<{
  client: Connection;
  bucket: mongo.GridFSBucket;
}> {
  if (client && bucket) {
    return { client, bucket };
  }

  if (!MONGODB_URI) {
    throw new Error('MongoDB URI not provided');
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      maxPoolSize: 1,
      minPoolSize: 1,
      socketTimeoutMS: 10000,
      serverSelectionTimeoutMS: 10000,
      maxIdleTimeMS: 10000,
    });

    client = mongoose.connection;

    bucket = new mongoose.mongo.GridFSBucket(client.db, {
      bucketName: 'images',
    });

    console.log('Connected to the Database');
    return { client, bucket };
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

export default connectDB;
