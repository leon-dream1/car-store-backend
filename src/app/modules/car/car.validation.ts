import { z } from 'zod';

export const carValidationSchema = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.number(),
  price: z.number(),
  category: z.enum(['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible']),
  description: z.string(),
  quantity: z.number(),
  inStock: z.boolean(),
});
