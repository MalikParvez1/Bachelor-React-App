import React, { useState } from 'react';
import './styles/styles.css';
import './styles/App.css';
import CreateForm from './components/CreateForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  return (
    <>
      <h1>React App</h1>
      
      <CreateForm 
      editIndex={editIndex} input={input} todos={todos} 
      setTodos={setTodos} setEditIndex={setEditIndex} setInput={setInput}
      />

      <TodoList 
      todos={todos} setTodos={setTodos} 
      setEditIndex={setEditIndex} setInput={setInput}
      />
    </>
  );
}

export default App;
