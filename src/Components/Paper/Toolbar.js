import styled from "styled-components";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {
    faBold, faItalic, faUnderline,
    faList, faAlignCenter, faAlignJustify,
    faAlignLeft, faAlignRight, faLink
} from '@fortawesome/free-solid-svg-icons'

import {NavGroup} from "../Nav/NavGroup";

const StyledToolBar = styled.div`
  border-bottom: solid 1px rgb(235, 235, 237);
  padding: 10px;
  
  display: flex;
  align-items: center;
  gap: 5px; 
  
  svg {
    height: 15px;
  }

  *{
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
}
`

export function Toolbar () {
    return (
        <StyledToolBar content>
            <NavGroup>
                <FontAwesomeIcon icon={faBold}/>
                <FontAwesomeIcon icon={faItalic}/>
                <FontAwesomeIcon icon={faUnderline}/>
            </NavGroup>

            <NavGroup>
                <FontAwesomeIcon icon={faList}/>
                <FontAwesomeIcon icon={faAlignCenter}/>
            </NavGroup>

            <NavGroup>
                <FontAwesomeIcon icon={faLink}/>
            </NavGroup>
        </StyledToolBar>
    )
}