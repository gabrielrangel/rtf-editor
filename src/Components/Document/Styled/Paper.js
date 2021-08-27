import styled from "styled-components";

import {paperDimensions} from "../constants";

const {width, height} = paperDimensions

export const Paper = styled.div`
  content: '';
  
  margin: 20px;
  padding: 115px 50px 50px 50px;
  
  min-width: ${({zoom=1}) => `${width*zoom}px`};
  min-height: ${({zoom=1}) => `${height*zoom}px`};

  border-radius: 8px;
  
  box-shadow:
    rgba(50, 50, 93, 0.25) 0 50px 100px -20px, 
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  background-color: rgb(255, 255, 255);
  
  :focus-within{
    outline: solid 1px rgba(50, 50, 93, 0.25);
  }
  
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  
  div + div {
    padding-top: 15px;
  }

  @media (max-width: 450px) {
    padding: 50px 50px 115px 50px;
  }
`