import { Request, Response } from 'express';
import { ProductServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const formData = req.body;
    const result = await ProductServices.createProductIntoDB(formData);
    res.status(200).json({
      success: true,
      message: 'Product has been created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: 'Something went wrong!',
      data: err,
    });
  }
};
// get all products
const getAllProducts = async (req: Request, res: Response) => {
  const result = await ProductServices.getAllProductFromDB();
  try {
    res.status(200).json({
      success: true,
      message: 'All Product fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: 'Something went wrong!',
      data: err,
    });
  }
};
// get single product by product id
const getSingleProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await ProductServices.getSingleProductFromDB(productId);
  try {
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: 'Something went wrong!',
      data: err,
    });
  }
};
// update single product
const updateSingleProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const updateData = req.body;
  const result = await ProductServices.updateProductFromDB(productId, updateData);
  try {
    res.status(200).json({
      success: true,
      message: 'Product update successfully!',
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: 'Something went wrong!',
      data: err,
    });
  }
};
export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
};
