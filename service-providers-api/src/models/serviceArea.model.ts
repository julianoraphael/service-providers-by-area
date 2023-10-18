import mongoose, { Schema, Document } from 'mongoose';

export interface IServiceArea extends Document {
  providerName: string;
  areaName: string;
  price: number;
  geojson: object;
}

const serviceAreaSchema = new Schema<IServiceArea>({
  providerName: { type: String, required: true },
  areaName: { type: String, required: true },
  price: { type: Number, required: true },
  geojson: { type: Object, required: true },
});

const ServiceArea = mongoose.model<IServiceArea>('ColServiceArea', serviceAreaSchema);

export default ServiceArea;
