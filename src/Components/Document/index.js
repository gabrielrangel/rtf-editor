import {useRef} from "react";

import {useEditor} from "../../Hooks/useEditor";

import {Paper} from "./Styled/Paper";
import {useAutoResizer} from "./Hooks/useAutoResizer";

export function Document () {
    const pageRef = useRef()
    const {state} = useEditor()
    const {zoom} = state

    useAutoResizer()

    return (
        <Paper
            ref={pageRef}
            zoom={zoom}
            contentEditable={true}
        />
    )
}