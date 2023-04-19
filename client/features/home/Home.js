import React from "react";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Movies from '../../../server/db/models/Movies';

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
                    {/* feature film section, about us, new releases, best of */}
                    <div id="featured-titles">
                        <h2>Our Featured Titles</h2>
                        <div className="featured-movie">
                            <h2>Titanic</h2>
                            <img id="featured-movie-image"/>
                        </div>
                        <div className="featured-movie">
                            <h2>Independence Day</h2>
                            <img id="featured-movie-image"/>
                        </div>
                        <div className="featured-movie">
                            <h2>The Godfather</h2>
                            <img id="featured-movie-image"/>
                        </div>
                        <div className="featured-movie">
                            <h2>The Dark Knight</h2>
                            <img id="featured-movie-image"/>
                        </div>
                    </div>
                    <div id="new-releases">

                    </div>
                    <div id="best-of">

                    </div>
                </div>
                <div>
                    {/* shop section with a few highlighted titles */}
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