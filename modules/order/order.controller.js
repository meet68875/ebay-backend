import generateOrderId from '../../utils/generateOrderId.js';
import Order from './order.model.js';

// POST /api/orders
export const placeOrder = async (req, res, next) => {
  try {
      const orderId = generateOrderId();
    const { items, totalAmount, address, paymentMethod } = req.body;
    const order = await Order.create({
      user: req.userId,
      orderId,
      items,
      totalAmount,
      address,
      paymentMethod,
    });

    res.status(201).json({ success: true, data: order });
  } catch (err) {
    next(err);
  }
};

// GET /api/orders
export const getUserOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.userId }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: orders });
  } catch (err) {
    next(err);
  }
};
