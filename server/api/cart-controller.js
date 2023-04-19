import { ShoppingCart } from '../../public/cart.js';

const cart = new ShoppingCart();

function addToCart(item) {
  cart.addItem(item);
  // ... code to update cart view ...
}

function removeFromCart(itemId) {
  cart.removeItem(itemId);
  // ... code to update cart view ...
}

function updateCartQuantity(itemId, quantity) {
  cart.updateItemQuantity(itemId, quantity);
  // ... code to update cart view ...
}

// add other functions as needed
// ...

export { addToCart, removeFromCart, updateCartQuantity };

