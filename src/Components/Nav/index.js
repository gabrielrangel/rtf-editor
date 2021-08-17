import styled from "styled-components";

import {NavGroup} from "./NavGroup";
import Button from '../Button'

const StyledNav =  styled.nav`
  grid-area: nav;
  background-color: rgb(255, 255, 255);
  border-bottom: solid 1px rgb(235, 235, 237);
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 10px;
  
  strong {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 700;
  }
  
  ul {
    display: flex;
    gap: 10px;
  }
`

export const NavItem = styled.li`
  display: block;
`

export function NavBar (props) {
    return(
        <StyledNav>
            <strong>rtf editor</strong>

            <NavGroup>
                <Button >Save</Button>
            </NavGroup>
        </StyledNav>
    )
}