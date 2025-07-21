import React from 'react';
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';
function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const handleAdd = () => {
    const newTodo = {
      id: uuidv4(),
      text: input.trim()
    }
    setTodos(prev => [...prev, newTodo]);
    setInput('');
  }
  return (
    <section className='w-full h-screen bg-gray-500 flex justify-center items-center'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-gray-200 font-bold'>Todo App</h1>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='border border-gray-200 text-gray-200' />
        <button className='border border-gray-200' onClick={handleAdd}>add</button>
        {
          todos.map((todo) => {
            return (
              <span className='text-gray-200' key={todo.id}>{todo.text}</span>
            )
          })
        }
      </div>
    </section>
  )
}

export default App
