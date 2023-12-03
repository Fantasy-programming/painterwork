import mongoose, { Schema, Model, Document } from "mongoose";

export interface IPosts extends Document {
  name: string;
  imageUrl: string;
}

const postsSchema = new Schema<IPosts>({
  name: { type: String },
  imageUrl: { type: String },
});

const PostModel: Model<IPosts> =
  mongoose.models?.Posts || mongoose.model<IPosts>("Posts", postsSchema);

export default PostModel;
