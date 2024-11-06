import { useState, useEffect } from 'react'
import { MovieResponseType, MovieConfigType } from '@movies/types'
import Movie from '@movies/Movie'
import { MovieList } from '@styles/app'
import Pagination from '@/components/Pagination'

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`;
const CONFIG_URL = `https://api.themoviedb.org/3/configuration?api_key=65e043c24785898be00b4abc12fcdaae`;

const fetchMovies = async (page: number) => {
    const res = await fetch(API_URL + `&page=${page}`);
    const data: MovieResponseType = await res.json();
    return data;
}


export const MoviesList = () => {
    const [movies, setMovies] = useState<MovieResponseType>();
    const [config, setConfig] = useState<MovieConfigType | null>(null)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        async function getMovies() {
            setLoading(true);
            try {
                const movies = await fetchMovies(page);
                setMovies(movies)
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }
        getMovies();
    }, [page])


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
        getConfig();
    }, [])

    return (
        <>
            <Pagination page={page} setPage={setPage} loading={loading} />

            <MovieList>
                {config && movies && movies.results && movies.results.map(m => <Movie key={m.id} item={m} config={config} />)}
            </MovieList>
        </>

    )
}

export default MoviesList