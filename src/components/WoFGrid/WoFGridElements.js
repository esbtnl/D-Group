import styled from "styled-components"

export const Grid = styled.div`
    margin-top: -5px;
    overflow: hidden;
`

export const Row = styled.div`
    display: flex;
`

export const Col = styled.div`
    flex: ${(props) => props.size};
    height: 25vw;
`

export const Card = styled.div`
  position: relative;
  text-align: center;
  color: white;
  white-space: nowrap;
`

export const Name = styled.h1`
  color: white;
  background-color: brown;
  border: white solid 0.1vw ;
  border-radius: 10vw;
  padding: 1vw;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.9vw;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

`
