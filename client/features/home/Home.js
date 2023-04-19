import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Featured from "./Featured";
import Footer from "../footer/Footer";

// homepage component

const Home = () => {
  return (
    <>
      <div>
        <div id="homepage-title">
          <h1>Welcome to GraceBuster!</h1>
          <h3>Browse our selection of new and classic movies!</h3>
        </div>
        <Featured movieIds={[1, 2, 3]} />
        <div>{/* shop section with a few highlighted titles */}</div>
      </div>
      <footer>
        {/* add footer here */}
        <Footer />
      </footer>
    </>
  );
};

export default Home;
