import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleMovie } from "../../app/singleMovieSlice";
import { addItemToCart } from "../../app/cartSlice";

function SingleMovie() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.singleMovie);
  const userId = useSelector((state) => state.auth.me.id);

  useEffect(
    () => {
      dispatch(fetchSingleMovie(id));
    },
    [dispatch],
    id
  );

  const handleAddToCart = (movieId) => {
    dispatch(addItemToCart({ userId, movieId }));
  };

  return (
    <>
      <div id="single-movie-container">
        <h1 className="single-movie-title">{movie.Title}</h1>
        <img src={movie.ImageUrl} />
        <h3>Description:</h3>
        <p>{movie.Description}</p>
        <h3>Price: ${movie.Price}</h3>
        <button
          onClick={() => {
            handleAddToCart(movie.id);
          }}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default SingleMovie;
