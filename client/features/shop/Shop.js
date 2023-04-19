import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../footer/Footer";

const Shop = () => {
    return (
        <>
            <div>
                <div id='shop-title'>
                    <h1>Browse our Titles!</h1>
                    <p>search through many popular movies!</p>
                </div>
                {/* do we want a search bar here or filter? */}
                <div id='movie-list'>
                    {/* importing movies here from a new component */}
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
        </>
    )
};

export default Shop;