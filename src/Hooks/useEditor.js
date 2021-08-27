import {createContext, useContext, useReducer} from 'react'

const EditorContext = createContext({})

function reducer (state, action) {
    switch (action.type){
        case 'zoom':
            const {value, step} = action
            const zoom = value ? value : state.zoom + step
            console.log({value, step})
            return isNaN(zoom)||zoom<.1 ? state : {...state, zoom}
        case 'content':
            return {...state, content: action.value}
        default:
            return state
    }
}

const initialState = {
    zoom: 0.2,
    content: ''
}

export function EditorProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <EditorContext.Provider value={{state, dispatch}}>
            {props.children}
        </EditorContext.Provider>
    )
}

export const useEditor = () => useContext(EditorContext)