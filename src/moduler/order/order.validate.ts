import { z } from 'zod';

export const validateOrderSchema = z.object({
  email: z.string().email({ message: 'Invalid email address format.' }),
  productId: z.string().nonempty({ message: 'Product ID is required.' }),
  price: z.number().positive({ message: 'Price must be a positive number.' }),
  quantity: z
    .number()
    .int({ message: 'Quantity must be an integer.' })
    .positive({ message: 'Quantity must be a positive integer.' }),
});
