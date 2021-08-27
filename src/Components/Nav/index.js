import {Button} from '../Button'
import { StyledNav } from "./Styled/StyledNav";
import {NavGroup} from "./Styled/NavGroup";
import {Toolbar} from "./Components/Toolbar";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faSearchMinus, faSearchPlus} from '@fortawesome/free-solid-svg-icons'
import {useEditor} from "../../Hooks/useEditor";
import { Container } from "./Styled/Container";

export function NavBar () {
    const {state, dispatch} = useEditor()
    const {zoom} = state

    return(
      <Container>
        <StyledNav zoom={zoom} >
            <strong>rtf editor</strong>
            <NavGroup noBorder>
                <NavGroup>
                    <FontAwesomeIcon icon={faSearchMinus} onClick={() => dispatch({type:'zoom', step:-.1})}/>
                    <FontAwesomeIcon icon={faSearchPlus} onClick={() => dispatch({type:'zoom', step:+.1})}/>
                </NavGroup>
                <Button >Save</Button>
            </NavGroup>

            <Toolbar/>
        </StyledNav>
      </Container>
    )
}