import styled from "styled-components";
import {Toolbar} from "./Toolbar";
import {TextArea} from "./TextArea";

const StyledDiv = styled.div`
  grid-area: paper;
  
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  
  margin: 0 20px;
  padding: 20px;
  
  overflow: hidden;
  
  :focus-within{
    outline: solid 1px rgba(50, 50, 93, 0.25);
  }
`

export function Paper () {
    return (
        <StyledDiv>
            <Toolbar/>
            <TextArea/>
        </StyledDiv>
    )
}