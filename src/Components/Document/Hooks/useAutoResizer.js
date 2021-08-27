import {useEditor} from "../../../Hooks/useEditor";
import {useEffect} from "react";

import {paperDimensions} from "../constants";
const {width} = paperDimensions

export function  useAutoResizer(){
    const {dispatch} = useEditor()

    useEffect(()=>{
        window.onresize = () => {
            const value = window.innerWidth*.8/width
            dispatch({type:"zoom", value})
        }
    }, [dispatch])
}