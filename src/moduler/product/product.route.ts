import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.get('/', ProductController.getAllProducts);
router.get('/:productId', ProductController.getSingleProduct);
router.post('/create-product', ProductController.createProduct);

export const ProductRoutes = router;
