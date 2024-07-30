import { TProduct } from './product.interface';
import { Product } from './product.model';

// store product into DB
const createProductIntoDB = async (productData: TProduct) => {
  //create model instance
  const product = new Product(productData);
  const result = await product.save();
  return result;
};
// get all products
const getAllProductFromDB = async () => {
  const products = await Product.find();
  return products;
};
// get single product
const getSingleProductFromDB = async (productId: string) => {
  const product = await Product.findOne({ _id: Object(productId) });
  return product;
};
// expert all service method
export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
};
