import { useParams, Link } from 'react-router-dom'
import { MovieConfigType, MovieDetailType } from '@movies/types'
import { MovieImg, FullSpinner, MovieTitle, MovieDetailsWrap, GenreLink } from '@/styles/app'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const key = import.meta.env.VITE_MOVIE_API
let URL = `https://api.themoviedb.org/3/`


type MovieDetailsProps = {
    config: MovieConfigType
}

const MovieDetails = ({ config }: MovieDetailsProps) => {
    const { id } = useParams();

    URL = URL + `movie/${id}?api_key=${key}&language=en-US`;

    const { data: movie, isPending, isError } = useQuery({
        queryKey: ['movie', `movie_${id}`],
        queryFn: async () => {
            await new Promise(r => setTimeout(r, 3000));
            return axios.get(URL).then(r => r.data)
        }
    });


    return (
        <>
            {isPending && <FullSpinner />}
            {isError ? <h1>Error</h1> :
                <>
                    <MovieDetailsWrap>
                        {movie && config && config.images?.base_url && (
                            <div>
                                <MovieImg
                                    src={config.images.base_url + 'w500' + movie.poster_path}
                                    alt={movie.title + "-poster"}
                                />
                            </div>

                        )}
                        <div>
                            <MovieTitle>{movie?.title}</MovieTitle>
                            <p className='mb-3'>{movie?.overview}</p>
                            {movie?.genres?.map(g => <Link
                                to={`/movies/genres/${g.id}?gname=${g.name}`}
                                key={g.id}
                                className={GenreLink}
                            >{g.name}</Link>)}
                        </div>

                    </MovieDetailsWrap>
                </>

            }
        </>
    )
}

export default MovieDetails