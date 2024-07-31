import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './moduler/product/product.route';
import { OrderRouter } from './moduler/order/order.route';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes

//call only product routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRouter);

app.all('*', (req: Request, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({
    success: false,
    message: error.message || 'something working',
  });
});

export default app;
