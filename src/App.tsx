import React, { useContext } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { ThemeContext } from './context/themeContext';

import ThemeButton from './components/theme-button/theme-button.component';
import CreateTodoInput from './components/create-todo-input/create-todo-input.component';
import './App.css';
import TodoList from './components/todo-list/todo-list.component';
import { TodoContext } from './context/todoContext';

function App() {
  const { theme } = useContext(ThemeContext);
  const { todos, updateList } = useContext(TodoContext);

  document.documentElement.className = theme;

  const handleOnDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (destination.index === source.index) {
      return;
    }

    const list = [...todos];
    const [draggedItem] = list.splice(source.index, 1);

    list.splice(destination.index, 0, draggedItem);
    updateList(list);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="header-bg" />
      <div className="container">
        <div className="header">
          <h1>Todo</h1>
          <ThemeButton />
        </div>
        <CreateTodoInput />
        <TodoList />
      </div>
    </DragDropContext>
  );
}

export default App;
