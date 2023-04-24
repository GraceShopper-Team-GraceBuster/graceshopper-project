import React from "react";
import { useSelector } from "react-redux";
import Footer from "../footer/Footer";

/**
 * COMPONENT
 */
const Account = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <>
      <div className="account-container">
        <h3>Welcome, {username}</h3>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Account;
