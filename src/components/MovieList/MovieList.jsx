import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const displayMovie = (movieToDisplay) => {
        console.log(movieToDisplay);
        // Dispatch sends data to redux & sagas
        // Make sure actions are *unique* between sagas and redux so they don't run both
        dispatch({ type: 'SET_MOVIE_DETAILS', payload: movieToDisplay });

    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {/* Movies is an Array */}
                {movies.map(movie => {
                    // For each movie in the array, display it on the DOM
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}
                                onClick={() => displayMovie(movie)}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;