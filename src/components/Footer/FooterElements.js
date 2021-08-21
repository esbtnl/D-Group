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
    padding: 2vw;
`

export const Title = styled.h1`
    color: #E5398D;
    text-align: center;
`

export const Info = styled.p`
    color: white;
    font-size: 2vw;

`