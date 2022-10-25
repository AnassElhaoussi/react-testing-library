import React, {useEffect, useState, useRef} from 'react'
import { useTodosContext } from '../Contexts/TodosContext'
import Followers from './Followers'
import Todos from './Todos'

export const TodoList = () => {
    const {todos, setTodos} = useTodosContext()
    const [todo, setTodo] = useState('')
    const [isUpdateClicked, setIsUpdateClicked] = useState(false)
    const [todoId, setTodoId] = useState(null)
    const scroll = useRef()
    const [followersShown, setFollowersShown] = useState(false)

    const addTodo = (e) => {
        e.preventDefault()
        if (todo.trim().length !== 0) setTodos(
            (prevTodos) => [...prevTodos, {
            todo,
            complete: false
        }])
        setTodo('')
        setIsUpdateClicked(false)
    }


    const saveUpdatedTodo = () => {
        const updated = todos.map((task, id) => {
            return id !== todoId ? task : {
                ...task,
                todo: todo
            } 
        })

        setTodos(updated)
        setIsUpdateClicked(false)
        setTodo('')
    }


    const todoList = <div className='todo-list'>
    <form className='header' onSubmit={addTodo}>
        <label className='heading-1'>Add a new todo</label>
        <input type="text" 
            placeholder='Enter a task..'
            value={todo}
            onChange={event => setTodo(event.target.value)}
            ref={scroll}
        />
        <span 
        className='save' 
        style={{cursor: 'pointer'}}
        onClick={saveUpdatedTodo}
        >{isUpdateClicked && "Save"}</span>
    </form>
    <div className='todos-container'>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h4>Your current todos :</h4>
            <button onClick={() => setTodos([])}>
                Clear
            </button>
        </div>
        <Todos 
            setTodo={setTodo} 
            isUpdateClicked={isUpdateClicked} 
            setIsUpdateClicked={setIsUpdateClicked}
            setTodoId={setTodoId}
            scroll={scroll}
            />
    </div> 
        <span onClick={() => setFollowersShown(true)}>
            Browse your followers
        </span>
</div>

if(followersShown) {
    return <h1 onClick={() => setFollowersShown(false)}>See your followers</h1>
} else {
    return todoList
}
        
             
}