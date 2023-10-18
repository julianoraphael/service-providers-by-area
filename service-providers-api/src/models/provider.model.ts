import mongoose, { Schema, Document } from 'mongoose';

interface IProvider extends Document {
  name: string;
  email: string;
  phoneNumber: string;
  language: string;
  currency: string;
}

const providerSchema = new Schema<IProvider>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  language: { type: String, required: true },
  currency: { type: String, required: true },
});

const Provider = mongoose.model<IProvider>('ColProvider', providerSchema);

export default Provider;
