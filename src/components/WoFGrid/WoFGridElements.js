import styled from "styled-components"

export const Grid = styled.div`
`

export const Row = styled.div`
    display: flex;
    margin-top: -0.7vh;
`

const media = {
    xs : (styles) => `
        @media only screen and (max-width: 768px){
            ${styles}
        }
    `
}

export const Col = styled.div`
    flex: ${(props) => props.size};
    ${(props) => props.collapse && media[props.collapse](`
        display: none;
    `)};
`