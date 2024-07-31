import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

// store order into db
const createOrderIntoDB = async (orderData: TOrder) => {
  const { productId, quantity } = orderData;
  const product = await Product.findOne({ _id: productId });

  // check product grater than 0
  if (!product || product?.available <= 0) {
    throw new Error('Product not available!');
  }
  // check product available grater than or equal quantity
  if (!product || product?.available <= quantity) {
    throw new Error(`Our Product  available only ${product?.available}`);
  }
  const order = new Order(orderData);
  const result = await order.save();
  // product update available quantity
  await Product.updateOne({ _id: productId }, { $inc: { available: -quantity } }); // Decrease the available quantity by the order quantity
  return result;
};
// get all order into db
const getAllOrderIntoDB = async (payload: Record<string, unknown>) => {
  // Check if queryEmail is provided in the payload
  if (payload?.email) {
    const email = payload.email as string;
    const orders = await Order.find({ email: email });
    return orders;
  } else {
    const orders = await Order.find();
    return orders;
  }
};
export const OrderServices = {
  createOrderIntoDB,
  getAllOrderIntoDB,
};
