import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import MoviesList from '@movies/MoviesList'
import { WrapTitle } from '@styles/app'
import MovieDetails from '@movies/MovieDetails'
import { MovieConfigType } from '@movies/types'
import { fetchData } from '@/api'

const CONFIG_URL = "configuration?";

const MoviesPage = () => {
    const [config, setConfig] = useState<MovieConfigType>({} as MovieConfigType);
    const [error, setError] = useState('')

    useEffect(() => {
        async function getConfig() {
            const [result, config] = await fetchData<MovieConfigType>(CONFIG_URL)
            if (result === "error") {
                setError(config)
            } else {
                setConfig(config)
            }
        }
        getConfig();
    }, [])

    return (
        <>
            {error ?
                <h1>Something went wrong</h1>
                : (
                    <>
                        <WrapTitle>Movies</WrapTitle>
                        <Routes>
                            <Route path="list" element={<MoviesList config={config} />} />
                            <Route path="detail/:id" element={<MovieDetails config={config} />} />
                        </Routes>
                    </>
                )}
        </>
    )
}

export default MoviesPage