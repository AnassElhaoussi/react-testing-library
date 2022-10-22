import React, {useState, useContext, createContext} from 'react'

const TodosContext = createContext()

export const useTodosContext = () => useContext(TodosContext)

export const TodosContextProvider = (props) => {
    const [todos, setTodos] = useState([])
    return (
        <TodosContext.Provider value={{todos, setTodos}}>
            {props.children}
        </TodosContext.Provider>
    )

}