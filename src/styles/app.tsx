import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react'
import { FaSpinner } from 'react-icons/fa';


const spin = keyframes({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" }
})

export const Spinner = styled(FaSpinner)({
    display: "inline-block",
    animation: `${spin} 1s linear infinite`
});

export function FullSpinner() {
    return <div css={{
        fontSize: "4rem",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }}><Spinner /></div>
}

export const WrapContainer = styled.div`
 max-width: 1200px;
  width: 1200px;
  margin: auto;`;



export const WrapTitle = styled.h1`
font-size: 2rem;
font-weight: 500;
text-align: center;
`

export const MovieList = styled.div({
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px"
})

export const MovieItem = styled.div({
    padding: "1rem",
    borderRadius: "10px",
    boxShadow: "0 0 8px rgba(0,0,0,.4)"
})


type MovieTitleType = {
    fs?: string;
    fw?: number;
    color?: string;
}


export const MovieTitle = styled.h2<MovieTitleType>({
    marginTop: 0,
    marginBottom: "1rem",

},
    ({ fs = "1.2rem", fw = 500 }) => ({
        fontWeight: fw,
        fontSize: fs
    }),
    ({ color = "black" }) => ({
        color: color
    })
)

export const MovieImg = styled.img({
    width: "100%",
    maxWidth: "100%",
    height: "250px",
    objectFit: "cover",
    marginBottom: "1rem",
})