import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const selectedMovie = useSelector(store => store.selectedMovie);

    const displayMovie = (movieToDisplay) => {
        dispatch({type: 'display', payload:movieToDisplay})
    }
    

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
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