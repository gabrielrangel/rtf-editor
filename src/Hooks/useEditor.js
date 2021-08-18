import {createContext, useContext, useReducer} from 'react'

const EditorContext = createContext({})

function reducer (state, action) {
    switch (action.type){
        case 'zoom':
            let zoom = state.zoom + action.value
            zoom = zoom > 0.1 ? zoom : 0.1
            return {...state, zoom}
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

export function UseEditor(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <EditorContext.Provider value={{state, dispatch}}>
            {props.children}
        </EditorContext.Provider>
    )
}

export const useEditor = () => useContext(EditorContext)