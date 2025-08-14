import express from 'express';
import { placeOrder, getUserOrders } from './order.controller.js';
import { protect } from '../../middleware/authMiddleware.js';
import { validateRequest } from '../../middleware/validateRequest.js';
import { orderSchema } from './order.validation.js';

const orderRoute = express.Router();

orderRoute.post('/', protect, validateRequest(orderSchema), placeOrder);
orderRoute.get('/', protect, getUserOrders);

export default orderRoute;
