import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <nav id="navbar">
        {isLoggedIn ? (
          <div>
            <Link to="/account">Account</Link>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
            <div id="cart-container">
              <a href="#" id="cart-link">Cart (<span id="cart-count">0</span>)</a>
              <div id="cart-dropdown">
                <ul id="cart-list"></ul>
                <p>Total: $<span id="cart-total">0.00</span></p>
                <button id="empty-cart">Empty Cart</button>
                <button id="checkout">Checkout</button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Link to="/home">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            {/* <div id="cart-container">
              <a href="#" id="cart-link">Cart (<span id="cart-count">0</span>)</a>
              <div id="cart-dropdown">
                <ul id="cart-list"></ul>
                <p>Total: $<span id="cart-total">0.00</span></p>
                <button id="empty-cart">Empty Cart</button>
                <button id="checkout">Checkout</button>
              </div>
            </div> */}
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
