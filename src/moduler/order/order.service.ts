import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (orderData: TOrder) => {
  const { productId } = orderData;
  const product = await Product.findOne({ _id: productId });

  if (!product || product?.available <= 0) {
    throw new Error('Product not available!!');
  }
  const order = new Order(orderData);
  const result = await order.save();
  return result;
};
export const OrderServices = {
  createOrderIntoDB,
};
