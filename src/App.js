import React from 'react'
import './App.css';
import { TodoList } from './Components/TodoList';
import {ChakraProvider} from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <ChakraProvider>
          <TodoList />
        </ChakraProvider>
      </div>
    </div>
  );
}

export default App;
