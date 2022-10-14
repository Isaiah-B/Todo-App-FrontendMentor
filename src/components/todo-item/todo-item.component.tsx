/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ReactComponent as CrossIcon } from '../../assets/icons/icon-cross.svg';
import { TodoContext } from '../../context/todoContext';

import { Todo } from '../../model';
import './todo-item.styles.css';

interface TodoItemProps {
  todo: Todo;
  index: number;
}

function TodoItem({ todo, index }: TodoItemProps) {
  const { removeTodo, toggleActive } = useContext(TodoContext);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {
        (provided) => (
          <div
            className={`item-container ${index === 0 ? 'first' : ''} ${todo.isActive ? '' : 'completed'}`}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="container-left">
              <button
                className="check-button"
                type="button"
                onClick={() => toggleActive(todo.id)}
                aria-label="mark completed"
              />
              <p className="content">{todo.content}</p>
            </div>
            <button
              className="remove-button"
              type="button"
              onClick={() => removeTodo(todo.id)}
            >
              <CrossIcon />
            </button>
          </div>
        )
      }
    </Draggable>
  );
}

export default TodoItem;
