import React from 'react'
import './App.css';
import { TodoList } from './Components/TodoList';
import Followers from './Components/Followers';
import {ChakraProvider} from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <ChakraProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<TodoList />} />
              <Route path='/followers' element={<Followers />} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </div>
    </div>
  );
}

export default App;
