import React from 'react';
import { deleteTodos } from '../services/indexedDB';

const TodoList = ({ todos, setTodos, setEditIndex, setInput }) => {

  const deleteTodo = async (index) => {
    const todoToDelete = todos[index];
    await deleteTodos(todoToDelete.id);
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
    <div className='list-container'>
      <ul>
        {todos.map((todo, index) => (

          <li key={index}>
            <div className='list-text'>
              {todo.text}
            </div>
            <div className='list-action'>
              <button className='edit-button' onClick={() => editTodo(index)}>Edit</button>
              <button className='delete-button' onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
