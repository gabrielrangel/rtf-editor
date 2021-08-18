import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const StyledButton = styled.button`
  padding: 5px;
  border: none;
  background-color: transparent;
`

export function ToolbarButton(props) {
    const handleClickButton = () => {
        const selection = window.getSelection()

        if (selection.rangeCount) {
            const range = selection.getRangeAt(0)
            const replacement = document.createElement(props.tagName)
            replacement.innerText = range.toString()
            range.deleteContents()
            range.insertNode(replacement)
        }
    }

    return (
        <StyledButton onClick={handleClickButton}>
            {props.icon && <FontAwesomeIcon icon={props.icon}/>}
            {props.children}
        </StyledButton>
    )
}