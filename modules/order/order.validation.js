import Joi from 'joi';

export const orderSchema = Joi.object({
  items: Joi.array().items(
    Joi.object({
      productId: Joi.string().required(),
      name: Joi.string().required(),
      price: Joi.number().required(),
      quantity: Joi.number().integer().min(1).required(),
    })
  ).min(1).required(),
  totalAmount: Joi.number().required(),
  address: Joi.string().min(10).required(),
  paymentMethod: Joi.string().required(),
});
