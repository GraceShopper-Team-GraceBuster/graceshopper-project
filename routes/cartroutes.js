import express from 'express';
import { ShoppingCart } from './cart.js';

const router = express.Router();
const cart = new ShoppingCart();

router.post('/add-to-cart', (req, res) => {
  const item = req.body;
  cart.addItem(item);
  res.redirect('/cart');
});

router.post('/remove-from-cart', (req, res) => {
  const itemId = req.body.itemId;
  cart.removeItem(itemId);
  res.redirect('/cart');
});

router.post('/update-cart-quantity', (req, res) => {
  const itemId = req.body.itemId;
  const quantity = req.body.quantity;
  cart.updateItemQuantity(itemId, quantity);
  res.redirect('/cart');
});

// other routes and handlers as needed 

export default router;
