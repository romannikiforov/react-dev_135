import { useState, useEffect, useCallback } from 'react'
import { MovieResponseType, MovieConfigType } from '@movies/types'
import Movie from '@movies/Movie'
import { MovieList, Pagination } from '@styles/app'


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


    useEffect(() => {
        async function getMovies() {
            try {
                const movies = await fetchMovies(page);
                setMovies(movies)
            } catch (e) {
                console.log(e)
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
            <div className={Pagination}>
                <span className='p-title'>
                    Page: <span className='p-page'>{page}</span>
                </span>
                <button onClick={() => setPage(1)} disabled={page <= 1} className="button">First page</button>
                <button onClick={() => setPage(p => p - 1)} disabled={page <= 1} className="button">Prev</button>
                <button onClick={() => setPage(p => p + 1)} disabled={page >= 500} className="button">Next</button>
                <button onClick={() => setPage(500)} disabled={page >= 500} className="button">Last Page</button>

            </div>
            <MovieList>
                {config && movies && movies.results && movies.results.map(m => <Movie key={m.id} item={m} config={config} />)}
            </MovieList>
        </>

    )
}

export default MoviesList