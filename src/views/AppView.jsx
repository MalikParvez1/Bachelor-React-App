import React, { useState, useEffect } from 'react';
import CreateForm from '../components/CreateForm';
import TodoList from '../components/TodoList';
import { getTodos } from '../services/indexedDB';

const AppView = () => {
    const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const loadTodos = async () => {
      const loadedTodos = await getTodos();
      setTodos(loadedTodos);
    };
    loadTodos();
  }, []);

  return (
     <>
        <h1>React PWA</h1>

        <CreateForm
          editIndex={editIndex} input={input} todos={todos}
          setTodos={setTodos} setEditIndex={setEditIndex} setInput={setInput}
        />

        <TodoList
          todos={todos} setTodos={setTodos}
          setEditIndex={setEditIndex} setInput={setInput}
        />
    </>
  )
}

export default AppView