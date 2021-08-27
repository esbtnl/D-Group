import styled from "styled-components";

export const Grid = styled.div`
  margin-top: -5px;
  overflow: hidden;
  background-color: lightpink;
  padding: 2vw;
  //border: 5px solid red;
`;

export const Row = styled.div`
  display: flex;
  padding-top: 2vh;
  //border: 1px solid green;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  padding: 2vw;
  //border: 1px solid blue;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Description = styled.p`
  font-size: 1rem;
`;

export const ÖMSpan = styled.span`
  font-size: 1.5rem;
`;
