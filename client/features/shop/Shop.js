import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Movies from "../movies/Movies";

const Shop = () => {
  return (
    <>
      <div>
        <div id="shop-title">
          <h1>Browse our Titles!</h1>
          <p>search through many popular movies!</p>
        </div>
        {/* do we want a search bar here or filter? */}
        <Movies />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Shop;
