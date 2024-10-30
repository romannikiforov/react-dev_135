import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react'
import * as colors from '@/styles/colors'
import * as mq from '@/styles/mq'
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

export const Title = styled.h1({
    textAlign: "center",
    fontSize: "2rem",
    color: colors.danger,

    [mq.small]: {
        color: colors.primary
    },
    [mq.medium]: {
        color: colors.orange
    },


});


export const WrapDiv = styled.div`
    max-width: 1200px;
    margin-inline: auto;
`;

export const WrapForm = styled.form({
    width: "400px",
    paddingLeft: "1rem"
});

export const FormGroup = styled.div({
    marginBottom: "1rem"
});

export const Label = styled.label({
    display: "block",
    marginBottom: "0.5rem"
});
export const Input = styled.input({
    width: "100%",
    padding: "0.4rem 0",
    border: "1px solid black"
});

export const ButtonGroup = styled.div({
    padding: "0.5rem 0"
});

export const Button = styled.button<{ type: string; mr?: string }>({
    padding: "0.4rem 0.8rem",
    textTransform: "uppercase",
    borderColor: "transparent",
    borderRadius: "6px",
    cursor: "pointer",
    color: "#ffffff",


},
    ({ type, mr = 0 }) => ({
        marginRight: mr,
        backgroundColor: type === "reset" ? colors.gray : colors.red,
        "&:hover": {
            backgroundColor: type === "reset" ? colors.lightGray : colors.green
        }
    })
);
