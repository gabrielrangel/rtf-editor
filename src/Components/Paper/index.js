import styled from "styled-components";

const StyledDiv = styled.div`
  content: '';
  
  margin: 20px;
  padding: 20px;
  
  min-width: ${({zoom=1}) => `${2480*zoom}px`};
  min-height: ${({zoom=1}) => `${3508*zoom}px`};

  border-radius: 8px;
  
  box-shadow:
    rgba(50, 50, 93, 0.25) 0 50px 100px -20px, 
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  background-color: rgb(255, 255, 255);
  
  :focus-within{
    outline: solid 1px rgba(50, 50, 93, 0.25);
  }
`

export function Paper () {
    return (
        <StyledDiv contentEditable={true}  zoom={0.15}/>
    )
}