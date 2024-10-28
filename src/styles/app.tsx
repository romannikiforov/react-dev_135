import styled from '@emotion/styled/macro';
import * as colors from '@/styles/colors'


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
