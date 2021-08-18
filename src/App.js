import styled from "styled-components";

import {EditorProvider} from "./Providers/EditorProvider";

import {NavBar} from "./Components/Nav";
import {Paper} from "./Components/Paper";

const StyledMain = styled.main`
  box-sizing: border-box;
  min-height: 100vh;
  padding-top: 140px;

  background: #ECE9E6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FFFFFF, #ECE9E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
  display: flex;
  flex-direction: column;
  align-items: center;
`

export function App() {
  return (
      <EditorProvider>
          <NavBar/>
          <StyledMain>
              <Paper/>
          </StyledMain>
      </EditorProvider>
  );
}
