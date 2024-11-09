import { Link } from 'react-router-dom'
import { MovieItem, MovieTitle, MovieImg } from '@styles/app'
import { MovieType, MovieConfigType } from '@movies/types'


type MovieProps = {
    item: MovieType;
    config: MovieConfigType
}

const Movie = ({ item, config }: MovieProps) => {
    return (
        <MovieItem>
            <Link to={`/movies/detail/${item.id}`}>
                {config.images?.base_url && (
                    <>
                        <MovieImg src={config.images.base_url + 'w500' + item.poster_path}
                            alt={item.title + "poster"}
                        />
                        <MovieTitle fs="18px" color="purple">{item.title}</MovieTitle>
                    </>
                )
                }
            </Link>
        </MovieItem>
    )
}

export default Movie