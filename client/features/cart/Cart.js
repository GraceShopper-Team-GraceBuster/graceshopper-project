import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/Footer";
import { fetchCartItems } from "../../app/cartSlice";

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

  return (
    <>
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
            </tr>
          </thead>
          <tbody>
            {cartItems.map(
              (item) =>
                item.Movie && (
                  <tr key={item.id}>
                    <td>{item.Movie.Title}</td>
                    <td>{item.quantity}</td>
                    <td>${item.Movie.Price}</td>
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
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Cart;
