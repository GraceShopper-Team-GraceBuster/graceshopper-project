import React from 'react';
import { Link } from 'react-router-dom';

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
                    {/* importing movies into a list? */}
                    <ul>
                        <li><Movies/></li>
                        <li><Movies/></li>
                        <li><Movies/></li>
                        <li><Movies/></li>
                    </ul>
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
        </>
    )
};

export default Shop;