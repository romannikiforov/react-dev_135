import { Global } from '@emotion/react'
import { GlobalStyles } from '@styles/global'
import { WrapContainer, WrapTitle } from '@styles/app'

import MoviesList from '@movies/MoviesList'

function App() {
  return <>
    <Global styles={GlobalStyles} />
    <WrapContainer>
      <WrapTitle>Movies</WrapTitle>
      <MoviesList />
    </WrapContainer>

  </>
}
export default App
