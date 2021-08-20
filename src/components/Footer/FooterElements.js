import styled from "styled-components";

export const Grid = styled.div`
    margin-top: -5px;
`

export const Row = styled.div`
    display: flex;
    height: ${(props) => props.height};
    width: 100vw;
`

export const Col = styled.div`
    flex: ${(props) => props.size};
    background-color: ${(props) => props.color};
`