import styled from "styled-components";

import {
    faBold, faItalic, faUnderline,
    faListOl, faListUl, faAlignCenter, faAlignJustify,
    faAlignLeft, faAlignRight, faLink
} from '@fortawesome/free-solid-svg-icons'

import {NavGroup} from "./NavGroup";
import {ToolbarButton} from "./ToolbarButton";

const buttons = [
    [
        {icon: faBold, tagName: 'strong'},
        {icon: faItalic, tagName: 'i'},
        {icon: faUnderline, tagName: 'u'}
    ],

    [
        {icon: faListUl},
        {icon: faListOl},
    ],

    [
        {icon: faLink}
    ],

    [
        {icon: faAlignRight},
        {icon: faAlignCenter},
        {icon: faAlignLeft},
        {icon: faAlignJustify}
    ],

]

const StyledToolBar = styled.div`
  padding: 10px;

  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 15px;

  svg {
    height: 15px;
  }

  * {
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
  }
`

export function Toolbar() {
    return (
        <StyledToolBar>
            {buttons.map(group =>
                <NavGroup> {group.map(icon => <ToolbarButton {...icon}/>)} </NavGroup>
            )}
        </StyledToolBar>
    )
}