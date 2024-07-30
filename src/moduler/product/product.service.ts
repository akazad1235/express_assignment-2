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

// update product information
const updateProductFromDB = async (productId: string, updateData: object) => {
  const product = await Product.findByIdAndUpdate(
    { _id: Object(productId) },
    { $set: updateData },
    { new: true },
  );
  return product;
};

//delete product
const deleteProductFromDB = async (productId: string) => {
  const product = await Product.updateOne({ _id: Object(productId) }, { isDeleted: true });
  return product;
};

//search product
const searchProductFromDB = async (name: string) => {
  const products = await Product.find({ name: new RegExp(name, 'i') }); // Case-insensitive search
  return products;
};

// expert all service method
export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
  searchProductFromDB,
};
