import React from "react";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// homepage component

const Home = () => {
    return (
        <>
            <div>
                <div id="homepage-title">
                    <h1>Welcome to GraceBuster!</h1>
                    <h3>Browse our selection of new and classic movies!</h3>
                </div>
                <div>
                    {/* add movie cards here of items in the shop, will link to individual movie shop page */}
                </div>
            </div>
            <footer>
                {/* add footer here */}
                <Footer/>
            </footer>
        </>
    )
};

export default Home;