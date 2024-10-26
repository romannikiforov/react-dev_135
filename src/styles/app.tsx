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
