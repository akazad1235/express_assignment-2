import express, { Application } from 'express';
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

app.all('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
