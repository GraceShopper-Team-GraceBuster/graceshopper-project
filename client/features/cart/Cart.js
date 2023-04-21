import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/Footer";
import { fetchCartItems } from "../../app/cartSlice";
import { Link } from "react-router-dom";
import {
  removeItemFromCart,
  updateCartItemQuantity,
} from "../../app/cartSlice";


function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const userId = useSelector((state) => state.auth.me.id);

  useEffect(() => {
    if (userId) {
      dispatch(fetchCartItems(userId));
    }
  }, [dispatch, userId]);

  const totalPrice = cartItems.reduce(
    (acc, item) =>
      item.Movie && item.Movie.Price
        ? acc + item.quantity * item.Movie.Price
        : acc,
    0
  );

  const handleDeleteItem = (movieId) => {
    dispatch(removeItemFromCart({ userId, movieId }));
  };

  const handleQuantityChange = (movieId, newQuantity) => {
    if (!newQuantity) {
      return;
    }
    dispatch(
      updateCartItemQuantity({ userId, movieId, quantity: newQuantity })
    );
  };

  return (
    <>
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
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
            {cartItems.map(
              (item) =>
                item.Movie && (
                  <tr key={item.id}>
                    <td>{item.Movie.Title}</td>
                    <td>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          handleQuantityChange(
                            item.Movie.id,
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </td>
                    <td>${item.Movie.Price * item.quantity}</td>
                    <td>
                      <button onClick={() => handleDeleteItem(item.Movie.id)}>
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                )
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>Total Price:</td>
              <td>${totalPrice}</td>
            </tr>
          </tfoot>
        </table>
      )}
      </div>
      {/* button that links to OrderPlaced component, simulates checkout */}
      <Link to="/orderplaced">Checkout</Link>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Cart;
