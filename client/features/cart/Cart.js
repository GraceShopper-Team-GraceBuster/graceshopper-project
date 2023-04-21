import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/Footer";
import { fetchCartItems } from "../../app/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const userId = useSelector((state) => state.auth.me.id);
  useEffect(() => {
    dispatch(fetchCartItems(userId));
  }, [dispatch, userId]);

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
        </table>
      )}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Cart;
