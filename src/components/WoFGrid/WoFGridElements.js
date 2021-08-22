import styled from "styled-components"

export const Grid = styled.div`
    margin-top: -5px;
    overflow: hidden;
    margin-bottom: 5px ;
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
  background-color: #754022;
  border: white solid 0.1vw ;
  border-radius: ;
  padding: 0.5vw;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.9vw;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

`
