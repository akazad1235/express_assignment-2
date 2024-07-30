import { TProduct } from './product.interface';
import { Product } from './product.model';

//store product into DB
const createProductIntoDB = async (productData: TProduct) => {
  //create model instance
  const product = new Product(productData);
  const result = await product.save();
  return result;
};
export const ProductService = {
  createProductIntoDB,
};
