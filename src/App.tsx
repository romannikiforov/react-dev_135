import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Global } from '@emotion/react'
import { GlobalStyles } from '@styles/global'
import { WrapContainer } from '@styles/app'

import Nav from '@/components/Nav'
import HomePage from '@/pages/home'


const MoviesPage = lazy(() => import("@movies/MoviesPage"))
const AboutPage = lazy(() => import("@/pages/about/AboutPage"))
const NotFound = lazy(() => import("@/components/NotFound"))

function App() {
  return <>
    <Global styles={GlobalStyles} />
    <WrapContainer>
      <Nav />
      <Suspense fallback={`<h1>Loading...</h1>`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/*" element={<MoviesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </WrapContainer>

  </>
}
export default App
