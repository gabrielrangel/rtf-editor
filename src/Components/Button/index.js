import styled from "styled-components";

export default styled.button`
  background-color: ${ ( {filled}) => filled ? 'rgb(110, 66, 198)' : 'rgba(1, 1, 1, 0)'};
  border: solid 1px rgb(235, 235, 237);
  border-radius: 8px;
  padding: 10px;
  color: ${({filled}) => filled ? 'white' : 'black'};
  font-family: 'Poppins',sans-serif;
`

