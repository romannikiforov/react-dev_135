import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MovieConfigType, MovieType, MovieGenreType } from '@movies/types'
import { MovieImg, FullSpinner, MovieTitle, MovieDetailsWrap, GenreLink } from '@/styles/app'
import { fetchData } from '@/api'

type MovieDetailsProps = {
    config: MovieConfigType
}

type MovideDetailType = {
    genres: MovieGenreType[],
    overview: string;
} & MovieType;


const MovieDetails = ({ config }: MovieDetailsProps) => {
    const [movie, setMovie] = useState<MovideDetailType>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { id } = useParams();

    useEffect(() => {
        async function getMovie() {
            if (!id) {
                setError('wrong id');
                return;
            }
            const URL = `movie/${id}?language=en-US`;
            setLoading(true)
            const [result, movie] = await fetchData<MovideDetailType>(URL)
            if (result === "success") {
                setMovie(movie)
            } else {
                setError(movie)
            }
            setLoading(false)
        }
        getMovie();

    }, [id])

    console.log(movie)

    return (
        <>
            {loading && <FullSpinner />}
            {error ? <h1>{error}</h1> :
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