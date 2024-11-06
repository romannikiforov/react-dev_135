import { MovieItem, MovieTitle } from '@styles/app'
import { MovieType } from '@movies/types'


type MovieProps = {
    item: MovieType
}

const Movie = ({ item }: MovieProps) => {
    return (
        <MovieItem>
            <MovieTitle fs="18px" color="purple">{item.title}</MovieTitle>

        </MovieItem>
    )
}

export default Movie