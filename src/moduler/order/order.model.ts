import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

export const orderSchema = new Schema<TOrder>({
  email: { type: String, require: true },
  productId: { type: String, require: true },
  price: { type: Number, require: true },
  quantity: { type: Number, require: true },
});

export const Order = model<TOrder>('Order', orderSchema);
