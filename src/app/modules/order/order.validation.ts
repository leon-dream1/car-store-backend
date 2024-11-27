import { z } from 'zod';

export const OrderValidationSchema = z.object({
  email: z.string().email(),
  car: z.string().min(1, 'Car ID is required'),
  quantity: z.number().min(1, 'Quantity must be at least 1'),
  totalPrice: z.number().positive('Total price must be a positive number'),
});
