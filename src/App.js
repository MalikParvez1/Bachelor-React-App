import React, { useState, useEffect } from 'react';
import './styles/styles.css';
import './styles/App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const createTodo = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      if (editIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = { text: input };
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, { text: input }]);
      }
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    const todoToEdit = todos[index];
    setInput(todoToEdit.text);
    setEditIndex(index);
  };

  return (
    <>
          <h1>React App</h1>
          <form className='create-form' onSubmit={createTodo}>
            <input className='create-input'
              placeholder='Add a todo'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className='create-button' type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
          </form>
          <div className='list-container'>
          <ul>
            {todos.map((todo, index) => (

              <li key={index}>
                <div className='list-text'>
                  {todo.text}
                </div>
                <div className='list-action'>
                  <button className='edit-button' onClick={() => editTodo(index)}><i className='fa-solid fa-pen' style={{color: 'white'}}></i></button>
                  <button className='delete-button' onClick={() => deleteTodo(index)}><i className='fa-solid fa-trash' style={{color: 'white'}}></i></button>
                </div>
              </li>
            ))}
          </ul>
          </div>
    </>
  );
}

export default App;
