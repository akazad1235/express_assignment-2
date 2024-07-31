import { z } from 'zod';

//  variant sub schema
const validateVariantSchema = z.object({
  type: z.string().nonempty({ message: 'Variant type is required.' }),
  value: z.string().nonempty({ message: 'Variant value is required.' }),
});

//  inventory sub schema
const validateInventorySchema = z.object({
  quantity: z.number().int().nonnegative({ message: 'Quantity must be a non-negative integer.' }),
  inStock: z.boolean({ message: 'InStock must be a boolean value.' }),
});

// the product validate schema
export const validateProductSchema = z.object({
  name: z.string().nonempty({ message: 'Product name is required.' }),
  description: z.string().nonempty({ message: 'Product description is required.' }),
  price: z.number().positive({ message: 'Price must be a positive number.' }),
  category: z.string().nonempty({ message: 'Product category is required.' }),
  tags: z.array(z.string()).nonempty({ message: 'At least one tag is required.' }),
  variants: z
    .array(validateVariantSchema)
    .nonempty({ message: 'At least one variant is required.' }),
  inventory: validateInventorySchema,
  available: z
    .number()
    .int()
    .nonnegative({ message: 'Available must be a non-negative integer.' })
    .default(0),
  isAvailable: z.boolean().default(false),
  isDeleted: z.boolean().default(false),
});
