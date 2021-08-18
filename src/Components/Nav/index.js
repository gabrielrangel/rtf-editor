import styled from "styled-components";

import {NavGroup} from "./NavGroup";
import Button from '../Button'
import {Toolbar} from "./Toolbar";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faSearchMinus, faSearchPlus} from '@fortawesome/free-solid-svg-icons'
import {useEditor} from "../../Hooks/useEditor";


const StyledNav =  styled.nav`
  --width: ${({zoom=1}) => 2480*zoom}px;
  --vw: ${()=>document.documentElement.clientWidth}px;
  
  box-sizing: border-box;
  position: fixed;
  background-color: rgba(255, 255, 255,.8);
  box-shadow: 
    rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, 
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  
  min-width: var(--width);
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  
  top: 0;
  left: 0;
  z-index: 10;
  
  padding: 10px;
  margin: 20px calc((var(--vw) - var(--width))/2);
  border-radius: 8px;
  
  strong {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 700;
  }
`

export function NavBar () {
    const {state, dispatch} = useEditor()
    const {zoom} = state

    return(
        <StyledNav zoom={zoom} >
            <strong>rtf editor</strong>
            <NavGroup noBorder>
                <NavGroup>
                    <FontAwesomeIcon icon={faSearchMinus} onClick={() => dispatch({type:'zoom', value:-.1})}/>
                    <FontAwesomeIcon icon={faSearchPlus} onClick={() => dispatch({type:'zoom', value:+.1})}/>
                </NavGroup>
                <Button >Save</Button>
            </NavGroup>

            <Toolbar/>
        </StyledNav>
    )
}