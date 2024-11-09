import { createBrowserRouter, NavLink, Outlet, Link } from 'react-router-dom'
import { Global } from '@emotion/react'
import { GlobalStyles } from '@styles/global'
import { WrapContainer } from '@styles/app'

import HomePage from '@/pages/home'
// import AboutPage from '@/pages/about/AboutPage'
// import MoviesList from '@movies/MoviesList'

export const router = createBrowserRouter([
    {
        path: "/", element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: '/movies',
                async lazy() {
                    const { MoviesList } = await import("@movies/MoviesList")
                    return { Component: MoviesList }
                }


            },
            {
                path: '/about',
                lazy() {
                    return import("@/pages/about/AboutPage")
                }
            },
            { path: '*', element: <NoMatch /> },
        ]

    }
]);


function RootLayout() {
    return <>
        <Global styles={GlobalStyles} />
        <WrapContainer>
            <nav className='nav'>
                <NavLink className="nav__item" to="/">HomePage</NavLink>
                <NavLink className="nav__item" to="/movies">Movies</NavLink>
                <NavLink className="nav__item" to="/about">About us</NavLink>
            </nav>
            <Outlet />
        </WrapContainer>
    </>
}

function NoMatch() {
    return <>
        <h2>Nothing to see here</h2>
        <p><Link to="/">Go to home page</Link></p>
    </>
}