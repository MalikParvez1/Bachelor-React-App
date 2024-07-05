import React from 'react';
import '../styles/styles.css';

const TodoList = ({todos, setTodos, setEditIndex, setInput}) => {

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
<div className='list-container'>
        <ul>
          {todos.map((todo, index) => (

            <li key={index}>
              <div className='list-text'>
                {todo.text}
              </div>
              <div className='list-action'>
                <button className='edit-button' onClick={() => editTodo(index)}><i className='fa-solid fa-pen' style={{ color: 'white' }}></i></button>
                <button className='delete-button' onClick={() => deleteTodo(index)}><i className='fa-solid fa-trash' style={{ color: 'white' }}></i></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
  );
}

export default TodoList;
