import React,{useState} from 'react'
import { useTodosContext } from '../Contexts/TodosContext'
import { Checkbox } from '@chakra-ui/react'
import { memo } from 'react'

const Todos = ({
  setTodo,
  isUpdateClicked,
  setIsUpdateClicked,
  setTodoId}) => {
  const {todos, setTodos} = useTodosContext()
  const completeTask = (id) => {
    const newTodos = todos.map(
      (todo, key) => {
        return key === id ?  
        {
          ...todo,
          complete: !todo.complete
        } : todo
      }
    )
    setTodos(newTodos)
  }

  const deleteTodo = id => setTodos(
    todos.filter(
      (todo, key) => key !== id
    )
  ) 

  return (
    <div className='todos'>
      {todos.map(({todo, complete}, id) => {
        return <div key={id} className='todo-container'>
          <Checkbox 
            border='gray' 
            size='lg' 
            onChange={() => completeTask(id)} />
          <span 
          className='todo'
          style={{textDecoration: complete && "line-through"}}>{todo}</span>
          <div className="buttons">
            <button onClick={() => deleteTodo(id)}>Delete</button>
            <button onClick={() => {
              setTodo(todo)
              setIsUpdateClicked(!isUpdateClicked)
              setTodoId(id)
            }}>Update</button>
          </div>
        </div>
      })}
    </div>
  )
}

export default Todos

