import { Schema, model, models, Model, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

const UserModel: Model<IUser> =
  models?.User || model<IUser>('User', userSchema);

export default UserModel;
