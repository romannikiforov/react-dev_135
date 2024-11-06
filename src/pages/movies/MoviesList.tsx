import { useState, useEffect } from 'react'
import { MovieResponseType } from '@movies/types'
import Movie from '@movies/Movie'
import { MovieList } from '@styles/app'


const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

export const MoviesList = () => {
    const [movies, setMovies] = useState<MovieResponseType>();

    const getMovies = async () => {
        try {
            const res = await fetch(API_URL);
            const movies: MovieResponseType = await res.json();
            setMovies(movies)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <MovieList>
            {movies && movies.results && movies.results.map(m => <Movie key={m.id} item={m} />)}
        </MovieList>
    )
}

export default MoviesList