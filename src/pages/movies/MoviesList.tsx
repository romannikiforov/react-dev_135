import { useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { MovieDetailType, MovieConfigType, MovieResponseType } from '@movies/types'
import Movie from '@movies/Movie'
import { FullSpinner, MovieList, WrapTitle } from '@styles/app'
import Pagination from '@/components/Pagination'

const key = import.meta.env.VITE_MOVIE_API

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`;

type MoviesListProps = {
    config: MovieConfigType
}


export const MoviesList = ({ config }: MoviesListProps) => {
    const [page, setPage] = useState(1)

    const queryClient = useQueryClient();

    const { data: movies, isError, isPending } = useQuery({
        queryKey: ['movies', page],
        queryFn: async () => {
            const URL = API_URL + `&page=${page}`
            const response = axios.get<MovieDetailType>(URL);
            const data: MovieDetailType = (await response).data;
            data.results.map(movie => queryClient.setQueryData(['movie', `movie_${movie.id}`], movie))
            return data;
        }
    })



    return (
        <>
            {isPending && <FullSpinner />}
            {isError ? "<h1>Error occurred</h1>" : <>

                <Pagination page={page} setPage={setPage} loading={isPending} />
                <WrapTitle>Movies</WrapTitle>
                <MovieList>
                    {config && movies && movies.results && movies.results.map(m => <Movie key={m.id} item={m} config={config} />)}
                </MovieList>
            </>
            }
        </>
    )
}

export default MoviesList