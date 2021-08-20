import styled from "styled-components";

export const Grid = styled.div`
    margin-top: -5px;
    overflow: hidden;
    background-color: lightpink;
`

export const Row = styled.div`
    display: flex;
`

export const Col = styled.div`
    flex: ${(props) => props.size};
`





