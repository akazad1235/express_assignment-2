import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

// store order into db
const createOrderIntoDB = async (orderData: TOrder) => {
  const { productId, quantity } = orderData;
  const product = await Product.findOne({ _id: productId });

  // check product grater than 0
  if (!product || product?.inventory?.quantity <= 0) {
    throw new Error('Product not available!');
  }
  // check product quantity grater than or equal
  if (!product || product?.inventory?.quantity < quantity) {
    throw new Error(`Our Product  available only ${product?.inventory?.quantity}`);
  }
  const order = new Order(orderData);
  const result = await order.save();
  // Update the product
  const updateProduct = await Product.findByIdAndUpdate(
    { _id: productId },
    {
      $inc: { 'inventory.quantity': -quantity }, // Decrement quantity
    },
    { new: true },
  );
  // inventory inStock set false when product quantity will be 0
  if (updateProduct?.inventory?.quantity == 0) {
    await Product.findOne(
      { _id: productId },
      {
        $set: { 'inventory.inStock': false },
      },
    );
  }
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
