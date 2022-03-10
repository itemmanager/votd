import styled from "styled-components";

export const SymbolsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  gap: 1em;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1em;
  
  > * {
    max-width: 180px;
    aspect-ratio: 1;
  }

  @media only screen and (min-width: 600px) {
    & {
      grid-template-columns: repeat(7, 1fr);
    }
  }
`
