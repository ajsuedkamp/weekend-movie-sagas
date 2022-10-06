import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


function MovieDetails() {
    const movie = useSelector(store => store.selectedMovie);
    // useEffect and saga to fetch genres
    return (
        <>
            <h2>Movie Details</h2>
            <div key={movie.id} >
                 <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title}/>
                <p>{movie.description}</p>
            </div>
        </>
    )
}

export default MovieDetails;