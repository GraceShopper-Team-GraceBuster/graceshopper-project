import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/Footer";
import { fetchCartItems } from "../../app/cartSlice";
import { Link } from "react-router-dom";
import {
  removeItemFromCart,
  updateCartItemQuantity,
} from "../../app/cartSlice";
import {
  getLocalStorageCart,
  updateLocalStorageCartItemQuantity,
  removeLocalStorageCartItem,
} from "../../app/localCartHelpers";

function Cart() {
  const dispatch = useDispatch();
  const loggedInCartItems = useSelector((state) => state.cart);
  const userId = useSelector((state) => state.auth.me.id);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (userId) {

      if (JSON.stringify(loggedInCartItems) !== JSON.stringify(cartItems)) {
        dispatch(fetchCartItems(userId));
        setCartItems((prevCartItems) => {
          if (
            JSON.stringify(loggedInCartItems) !== JSON.stringify(prevCartItems)
          ) {
            return loggedInCartItems;
          }
          return prevCartItems;
        });
      }
    } else {
      const localStorageCart = getLocalStorageCart();
      setCartItems((prevCartItems) => {
        if (
          JSON.stringify(localStorageCart) !== JSON.stringify(prevCartItems)
        ) {
          return localStorageCart;
        }
        return prevCartItems;
      });
    }
  }, [dispatch, userId, loggedInCartItems]);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.Price ? item.quantity * item.Price : 0),
    0
  );

  const handleDeleteItem = (movieId) => {
    if (userId) {
      dispatch(removeItemFromCart({ userId, movieId }));
    } else {
      removeLocalStorageCartItem(movieId);
      setCartItems(getLocalStorageCart());
    }
  };

  const handleQuantityChange = (movieId, newQuantity) => {
    if (!newQuantity) {
      return;
    }
    if (userId) {
      dispatch(
        updateCartItemQuantity({ userId, movieId, quantity: newQuantity })
      );

      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === movieId ? { ...item, quantity: newQuantity } : item
        )
      );
    } else {
      updateLocalStorageCartItemQuantity(movieId, newQuantity);
      setCartItems(getLocalStorageCart());
    }
  };

  return (
    <>
      <div className="cart-container">
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <div>Your cart is empty</div>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => {
                  const movie = userId && item.Movie ? item.Movie : item;
                  return (
                    <tr key={item.id}>
                      <td>{movie.Title}</td>
                      <td>
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          onChange={(e) =>
                            handleQuantityChange(
                              movie.id,
                              parseInt(e.target.value)
                            )
                          }
                        />
                      </td>
                      <td>${movie.Price * item.quantity}</td>
                      <td>
                        <button onClick={() => handleDeleteItem(movie.id)}>
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2}>Total Price:</td>
                  <td>${totalPrice}</td>
                </tr>
              </tfoot>
            </table>
            <Link to="/orderplaced">Checkout</Link>
          </>
        )}
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Cart;
