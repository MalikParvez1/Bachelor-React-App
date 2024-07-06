import React from 'react';
import '../styles/styles.css';
import { addTodo, updateTodo } from '../indexedDB';

const CreateForm = ({editIndex, input, todos, setTodos, setEditIndex, setInput}) => {
  
  const createTodo = async (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      if (editIndex !== null) {
        const updatedTodos = [...todos];
        const todoToUpdate = updatedTodos[editIndex];
        todoToUpdate.text = input;
        await updateTodo(todoToUpdate.id, todoToUpdate);
        updatedTodos[editIndex] = todoToUpdate;
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        const newTodo = { text: input };
        const id = await addTodo(newTodo);
        setTodos([...todos, { ...newTodo, id }]);
      }
      setInput('');
    }
  };

  return (
    <form className='create-form' onSubmit={createTodo}>
    <input className='create-input'
      placeholder='Add a todo'
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button className='create-button' type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
  </form>
  );
}

export default CreateForm;
