import {createContext, useContext, useReducer} from 'react'

const EditorContext = createContext({})

function reducer (state, action) {
    switch (action.type){
        case 'zoom':
            return {...state, zoom: state.zoom + action.value}
        default:
        return state
    }
}

const initialState = {
    zoom: 0.15
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