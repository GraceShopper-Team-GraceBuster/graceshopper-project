import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Featured = ({ movieIds }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchFeatured = async () => {
            try {
                const fetchedMovies = []
                for (const id of movieIds) {
                    const { data } = await axios.get(`/api/movies/${id}`)
                    fetchedMovies.push(data)
                }
                setMovies(fetchedMovies)
            } catch (error) {
                next(error)
            }
        }
        fetchFeatured()
    }, [movieIds])

    return (
        <div className="movie-container">
            {movies.map((movie) => (
                <div key={movie.id} className="movies">
                    <NavLink to={`/movies/${movie.id}`}>
                        <img src={movie.ImageUrl} />
                        <h2>{movie.Title}</h2>
                        <h3>Price: ${movie.Price}</h3>
                    </NavLink>
                </div>
            ))}
        </div>
    )
}

export default Featured
