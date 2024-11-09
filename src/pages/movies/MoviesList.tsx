import { useState, useEffect } from 'react'
import { MovieResponseType, MovieConfigType } from '@movies/types'
import Movie from '@movies/Movie'
import { FullSpinner, MovieList } from '@styles/app'
import Pagination from '@/components/Pagination'
import { fetchData } from '@/api'

let API_URL = `discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`;

type MoviesListProps = {
    config: MovieConfigType
}


export const MoviesList = ({ config }: MoviesListProps) => {
    const [movies, setMovies] = useState<MovieResponseType>();
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')


    useEffect(() => {
        async function getMovies() {
            setLoading(true);
            const [result, data] = await fetchData<MovieResponseType>(API_URL, `page=${page}`);
            if (result === "success") {
                setMovies(data)
            } else {
                setError(data)
            }
            setLoading(false)

        }
        getMovies();
    }, [page])



    return (
        <>
            {loading && <FullSpinner />}
            {error ? "<h1>Error occurred</h1>" : <>

                <Pagination page={page} setPage={setPage} loading={loading} />

                <MovieList>
                    {config && movies && movies.results && movies.results.map(m => <Movie key={m.id} item={m} config={config} />)}
                </MovieList>
            </>
            }
        </>
    )
}

export default MoviesList