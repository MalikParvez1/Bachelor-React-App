import React from 'react';
import '../styles/styles.css';

const CreateForm = ({editIndex, input, todos, setTodos, setEditIndex, setInput}) => {


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
