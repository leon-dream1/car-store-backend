import { model, Schema } from 'mongoose';
import { TCar } from './car.interface';

//create a Schema

export const carSchema = new Schema<TCar>(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true, min: 0 },
    category: {
      type: String,
      enum: {
        values: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
        message: '{VALUE} is not a valid Car category',
      },
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

// create a Model

export const carModel = model<TCar>('Car', carSchema);
