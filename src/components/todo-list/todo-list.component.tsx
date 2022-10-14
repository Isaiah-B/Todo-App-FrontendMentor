import { useContext } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { TodoContext } from '../../context/todoContext';
import ListMenu from '../list-menu/list-menu.component';

import TodoItem from '../todo-item/todo-item.component';

import './todo-list.styles.css';
import ListMenuMobile from '../list-menu-mobile/list-menu-mobile.component';

function TodoList() {
  const { filtered, setFilter } = useContext(TodoContext);

  const changeFilter = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <>
      <Droppable droppableId="TodoList">
        {
          (provided) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <div className="todo-list" ref={provided.innerRef} {...provided.droppableProps}>
              {
                filtered.map((todo, index) => (
                  <TodoItem key={todo.id} todo={todo} index={index} />
                ))
              }
              {provided.placeholder}

              <ListMenu onChangeFilter={changeFilter} />
              <ListMenuMobile onChangeFilter={changeFilter} />
            </div>
          )
        }
      </Droppable>
      <span className="instructions">Drag and drop to reorder list</span>
    </>
  );
}

export default TodoList;
