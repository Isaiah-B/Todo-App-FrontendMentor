import React, { useContext, useState } from 'react';
import { TodoContext } from '../../context/todoContext';

import './create-todo-input.styles.css';

function CreateTodoInput() {
  const [input, setInput] = useState<string>('');
  const { addTodo } = useContext(TodoContext);

  const handleCreateTodo = (event: React.FormEvent) => {
    event.preventDefault();

    if (!input) return;

    addTodo({ id: Date.now(), content: input, isActive: true });
    setInput('');
  };

  return (
    <form
      className="todo-container"
      onSubmit={(event) => handleCreateTodo(event)}
    >
      <div className="radio-circle" />
      <input
        type="text"
        value={input}
        placeholder="Create a new todo..."
        onChange={({ target }) => setInput(target.value)}
      />
    </form>
  );
}

export default CreateTodoInput;
