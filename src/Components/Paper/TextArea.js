import styled from "styled-components";

const StyledDiv = styled.div`
  padding-top: 20px;
  
  :focus {
    outline: none;
  }
`

export function TextArea(props) {
    return (
        <StyledDiv {...props} contentEditable={true}>{props.children}</StyledDiv>
    )
}