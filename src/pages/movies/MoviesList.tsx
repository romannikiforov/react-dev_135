import { useState, useEffect } from 'react'
import { MovieResponseType, MovieConfigType } from '@movies/types'
import Movie from '@movies/Movie'
import { MovieList } from '@styles/app'


const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const CONFIG_URL = `https://api.themoviedb.org/3/configuration?api_key=65e043c24785898be00b4abc12fcdaae`;


export const MoviesList = () => {
    const [movies, setMovies] = useState<MovieResponseType>();
    const [config, setConfig] = useState({})

    const getMovies = async () => {
        try {
            const res = await fetch(API_URL);
            const movies: MovieResponseType = await res.json();
            setMovies(movies)
        } catch (e) {
            console.log(e)
        }
    }

    const getConfig = async () => {
        try {
            const res = await fetch(CONFIG_URL);
            const config: MovieConfigType = await res.json();
            setConfig(config)
            console.log(config)
        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        getMovies();
        getConfig();
    }, [])

    return (
        <MovieList>
            {movies && movies.results && movies.results.map(m => <Movie key={m.id} item={m} config={config} />)}
        </MovieList>
    )
}

export default MoviesList