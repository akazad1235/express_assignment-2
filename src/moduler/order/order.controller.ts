import { NextFunction, Request, Response } from 'express';
import { OrderServices } from './order.service';
import { validateOrderSchema } from './order.validate';

// store customer order
const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const formData = req.body;
    const validateData = validateOrderSchema.parse(formData);
    const result = await OrderServices.createOrderIntoDB(validateData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
// get all orders
const getAllOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OrderServices.getAllOrderIntoDB(req.query);
    res.status(200).json({
      success: true,
      message: 'Order fetched successfully!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const OrderController = {
  createOrder,
  getAllOrder,
};
