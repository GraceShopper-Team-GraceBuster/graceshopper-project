import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchMovies } from '../../app/movieSlice'

function Movie() {
    const dispatch = useDispatch()
    const movies = useSelector((state) => state.movies)

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])

    return (
        <>
            <div className="movie-container">
                {movies.map((movie) => (
                    <div className="movies" key={movie.id}>
                        <NavLink to={`/movies/${movie.id}`}>
                            <img
                                className="movie-images"
                                src={movie.ImageUrl}
                            />
                            <h2> {movie.Title}</h2>
                            <h3> Price: ${movie.Price}</h3>
                        </NavLink>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Movie
