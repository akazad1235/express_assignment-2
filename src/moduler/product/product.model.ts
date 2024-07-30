import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

// Sub variant schema
const variantSchema = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

// Sub inventory schema
const inventorySchema = new Schema({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});
// Product schema
const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});

export const Product = model<TProduct>('Product', productSchema);
