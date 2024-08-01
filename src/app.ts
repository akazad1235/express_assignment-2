import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './moduler/product/product.route';
import { OrderRouter } from './moduler/order/order.route';
import z from 'zod';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes

//call only product routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRouter);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof z.ZodError) {
    // If it's a Zod validation error
    res.status(400).json({
      success: false,
      message: error.errors, // Detailed validation errors
    });
  } else {
    res.status(400).json({
      success: false,
      message: error.message || 'something working',
    });
  }
  next();
});

export default app;
