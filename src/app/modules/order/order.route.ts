import express from 'express';
import { orderController } from './order.controller';

const router = express.Router();

router.post('/', orderController.orderCar);
router.get('/revenue', orderController.calculateTotalRevenue)

export const orderRouter = router;
