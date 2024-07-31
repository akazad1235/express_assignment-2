import { NextFunction, Request, Response } from 'express';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const formData = req.body;
    const result = await OrderServices.createOrderIntoDB(formData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const OrderController = {
  createOrder,
};
