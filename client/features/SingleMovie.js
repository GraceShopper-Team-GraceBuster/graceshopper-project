import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSingleMovie } from '../app/singleMovieSlice'

function SingleMovie() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const movie = useSelector((state) => state.singleMovie)

    useEffect(
        () => {
            dispatch(fetchSingleMovie(id))
        },
        [dispatch],
        id
    )

    return (
        <div>
            <h1>{movie.Title}</h1>
            <img src={movie.ImageUrl} />
            <p>{movie.Description}</p>
            <h3>Price: ${movie.Price}</h3>
            <button> + </button>
        </div>
    )
}

export default SingleMovie
