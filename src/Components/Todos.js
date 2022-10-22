import React from 'react'
import { useTodosContext } from '../Contexts/TodosContext'
import { Checkbox } from '@chakra-ui/react'

const Todos = () => {
  const {todos, setTodos} = useTodosContext()


  const completeTask = (id) => {
    setTodos(
      todos.map(
        (todo, key) => {
          if(key === id) 
          return {
            ...todo,
            complete: !todo.complete
          }
          else return todo
        }
      )
    )
  }

  const deleteTodo = id => setTodos(
    todos.filter(
      (todo, key) => key !== id
    )
  ) 

  return (
    <div className='todos'>
      {todos.map(({todo, complete}, id) => {
        return <div className='todo-container'>
          <Checkbox 
            border='gray' 
            size='lg' 
            onChange={() => completeTask(id)} />
          <span 
          className='todo'
          style={{textDecoration: complete && "line-through"}}>{todo}</span>
          <button onClick={() => deleteTodo(id)}>Delete</button>
        </div>
      })}
    </div>
  )
}

export default Todos

