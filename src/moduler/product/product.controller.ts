import { Request, Response } from 'express';
import { ProductService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const formData = req.body;
    const result = await ProductService.createProductIntoDB(formData);
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
export const ProductController = {
  createProduct,
};
