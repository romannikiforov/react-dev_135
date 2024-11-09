import { Routes, Route } from 'react-router-dom'
import MoviesList from '@movies/MoviesList'
import { WrapTitle } from '@styles/app'

const MoviesPage = () => {
    return (
        <>
            <WrapTitle>Movies</WrapTitle>
            <Routes>
                <Route path="list" element={<MoviesList />} />
            </Routes>
        </>
    )
}

export default MoviesPage