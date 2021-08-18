import styled from "styled-components";

import {NavGroup} from "./NavGroup";
import Button from '../Button'
import {Toolbar} from "./Toolbar";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faSearchMinus, faSearchPlus} from '@fortawesome/free-solid-svg-icons'
import {useEditor} from "../../Providers/EditorProvider";


const StyledNav =  styled.nav`
  box-sizing: border-box;
  position: fixed;
  background-color: rgb(255, 255, 255);
  box-shadow: 
    rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, 
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  
  width: calc(100vw - 80px);
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  
  top: 0;
  left: 0;
  z-index: 10;
  
  padding: 10px;
  margin: 20px 40px;
  border-radius: 8px;
  
  strong {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 700;
  }
`

export function NavBar () {
    const {dispatch} = useEditor()

    return(
        <StyledNav>
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