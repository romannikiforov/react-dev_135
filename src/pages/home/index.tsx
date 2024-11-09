import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FullSpinner, GenresLinkOnMainPage, WrapTitle } from '@styles/app'
import { fetchData } from '@/api'

import { GenresResponseType } from '@movies/types'


const URL = `genre/movie/list?`;

const HomePage = () => {
    const [genres, setGenres] = useState<GenresResponseType>();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        async function fetchGenres() {
            setError('');
            setLoading(true)
            const [result, data] = await fetchData<GenresResponseType>(URL)
            if (result === "success") {
                setGenres(data)
            } else {
                setError(data)
            }
            setLoading(false)
        }
        fetchGenres();
    }, [])

    return (
        <>
            {loading && <FullSpinner />}
            {error ? <h1>Error genres</h1>
                : <>
                    <WrapTitle>Genres</WrapTitle>
                    <GenresLinkOnMainPage>
                        {genres && genres.genres.map(g => <Link
                            key={g.id}
                            to={`/movies/genres/${g.id}?gname=${g.name}`}
                        >{g.name}</Link>)}
                    </GenresLinkOnMainPage>
                </>
            }
        </>
    )
}

export default HomePage