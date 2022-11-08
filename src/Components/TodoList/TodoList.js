import React, {useState, useRef} from 'react'
import { useTodosContext } from '../../Contexts/TodosContext'
import Todos from '../Todos/Todos'
import Heading from '../Heading/Heading'
import TodosCounter from '../TodosCounter/TodoCounter'

export const TodoList = () => {
    const {todos, setTodos} = useTodosContext()
    const [todo, setTodo] = useState('')
    const [isUpdateClicked, setIsUpdateClicked] = useState(false)
    const [todoId, setTodoId] = useState(null)
    const scroll = useRef()
    const incompleteTodos = useRef(todos.length)

    const addTodo = (e) => {
        e.preventDefault()
        if (todo.trim().length !== 0) setTodos(
            (prevTodos) => [...prevTodos, {
            todo,
            complete: false
        }])
        setTodo('')
        setIsUpdateClicked(false)
        incompleteTodos.current++
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

    return <div className='todo-list'>
    <form className='header' onSubmit={addTodo}>
        <div style={{display: 'flex', justifyContent: "space-between"}}>
            <Heading title='Add a new todo' />
        </div>
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
            <button onClick={() => {
                setTodos([])
                incompleteTodos.current = 0
            }}>
                Clear
            </button>
        </div>
        <Todos 
            setTodo={setTodo} 
            isUpdateClicked={isUpdateClicked} 
            setIsUpdateClicked={setIsUpdateClicked}
            setTodoId={setTodoId}
            scroll={scroll}
            incompleteTodos={incompleteTodos}
            />
    </div> 
    <TodosCounter incompleteTodos={incompleteTodos} />
</div>   
             
}