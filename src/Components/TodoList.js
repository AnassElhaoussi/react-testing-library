import React, {useEffect, useState} from 'react'
import { useTodosContext } from '../Contexts/TodosContext'
import Todos from './Todos'

export const TodoList = () => {
    const {todos, setTodos} = useTodosContext()
    const [todo, setTodo] = useState('')
    const addTodo = (e) => {
        e.preventDefault()
        if (todo.trim().length !== 0) setTodos(
            (prevTodos) => [...prevTodos, {
            todo,
            complete: false
        }])
        setTodo('')
    }
    return <div className='todo-list'>
        <form className='header' onSubmit={addTodo}>
            <label className='heading-1'>Add a new todo</label>
            <input type="text" 
            placeholder='Enter a task..'
            value={todo}
            onChange={event => setTodo(event.target.value)}
            />
        </form>
        <div className='todos-container'>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h4>Your current todos :</h4>
                <button onClick={() => setTodos([])}>
                    Clear
                </button>
            </div>
            <Todos />
        </div>
    </div>
        
}