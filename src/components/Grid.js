import styled from "styled-components"

export default styled.div`
  margin: 1em 0;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${props => props.minWidth || `5em`}, 1fr)
  );
  grid-gap: ${props => props.gap || `calc(1em + 2vh) calc(1em + 2vw)`};
  text-align: ${props => props.align};
  max-width: ${props => props.children.length === 1 && props.maxWidth};
`
