import express, { Application } from 'express';
import cors from 'cors';
import { ProductRoutes } from './moduler/product/product.route';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes

//call only product routes
app.use('/api/products', ProductRoutes);

export default app;
