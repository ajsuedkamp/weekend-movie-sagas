import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from '../MovieList/MovieList';


function MovieDetails() {
    const selectedMovie = useSelector(store => store.selectedMovie);

    return (
        <>
            <h2>Movie Details</h2>
            <div>
                
            </div>
        </>
    )
}

export default MovieDetails;