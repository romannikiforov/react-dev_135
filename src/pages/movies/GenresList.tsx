import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { MovieConfigType, MovieResponseType } from '@movies/types'
import Pagination from '@/components/Pagination'
import Movie from '@movies/Movie'
import { FullSpinner, MovieList, MovieTitle } from '@styles/app'
import { fetchData } from '@/api'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}


const GENRES_URL = `discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`;

type GenresListProps = {
    config: MovieConfigType
}

const GenresList = ({ config }: GenresListProps) => {
    const [movies, setMovies] = useState<MovieResponseType>();
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const { id } = useParams();

    const query = useQuery();
    console.log(query)
    const gname = query.get('gname') ?? null


    useEffect(() => {
        if (!id) {
            return;
        }
        const URL = GENRES_URL + `with_genres=${id}&page=${page}`;
        async function getData() {
            setLoading(true)
            const [result, data] = await fetchData<MovieResponseType>(URL)
            if (result === "error") {
                setError(data)
            } else {
                setMovies(data)
            }
            setLoading(false)
        }
        getData();
    }, [id, page])


    return (
        <>
            {loading && <FullSpinner />}
            {error ? "<h1>Error occurred</h1>" : <>

                <Pagination page={page} setPage={setPage} loading={loading} />
                <MovieTitle>{gname}</MovieTitle>
                <MovieList>
                    {config && movies && movies.results && movies.results.map(m => <Movie key={m.id} item={m} config={config} />)}
                </MovieList>
            </>
            }
        </>
    )
}

export default GenresList