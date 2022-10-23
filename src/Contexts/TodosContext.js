import React, {useState, useContext, createContext} from 'react'
import { useLocalStorage } from '../hooks/localstorage'

const TodosContext = createContext()

export const useTodosContext = () => useContext(TodosContext)

export const TodosContextProvider = (props) => {
    const [todos, setTodos] = useLocalStorage([], 'TODOS_STATE')
    return (
        <TodosContext.Provider value={{todos, setTodos}}>
            {props.children}
        </TodosContext.Provider>
    )

}