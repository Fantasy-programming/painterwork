import { Schema, Model, model, models, Document } from 'mongoose';

export interface IPosts extends Document {
  name: string;
  description: string;
  imageUrl: string;
}

const postsSchema = new Schema<IPosts>({
  name: { type: String },
  description: { type: String },
  imageUrl: { type: String },
});

const PostModel: Model<IPosts> =
  models?.Posts || model<IPosts>('Posts', postsSchema);

export default PostModel;
