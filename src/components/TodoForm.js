import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function TodoForm(props) {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: uuid(),
      text: input,
    });

    setInput('');
  };

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        />
        <button className="todo-buton">Add todo</button>
      </form>
    </>
  );
}

export default TodoForm;
