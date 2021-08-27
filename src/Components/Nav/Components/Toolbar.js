import styled from "styled-components";

import {ToolbarButton} from "./ToolbarButton";
import {NavGroup} from "../Styled/NavGroup";
import {buttons} from "../Constants/buttons";

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