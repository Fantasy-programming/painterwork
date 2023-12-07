import mongoose, { Schema, Model, Document } from 'mongoose';

export interface IColors extends Document {
  name: string;
  hexCode: string;
}

const colorsSchema = new Schema<IColors>({
  name: { type: String },
  hexCode: { type: String },
});

const ColorModel: Model<IColors> =
  mongoose.models?.Colors || mongoose.model<IColors>('Colors', colorsSchema);

export default ColorModel;
