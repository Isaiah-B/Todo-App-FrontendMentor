import { useState, useContext } from 'react';

import FilterButton from '../filter-button/filter-button.component';
import { TodoContext } from '../../context/todoContext';

import './list-menu.styles.css';

interface ListMenuProps {
  onChangeFilter: (filter: string) => void;
}

function ListMenu({ onChangeFilter }: ListMenuProps) {
  const [buttonFilter, setButtonFilter] = useState<string>('all');
  const { remainingTodos, clearCompleted } = useContext(TodoContext);

  const handleChangeFilter = (filter: string) => {
    setButtonFilter(filter);
    onChangeFilter(filter);
  };

  return (
    <div className="list-menu">
      <span className="menu-text-light">{`${remainingTodos} items left`}</span>

      <div className="menu-center">
        <FilterButton
          filter="all"
          isSelected={buttonFilter === 'all'}
          handleChangeFilter={handleChangeFilter}
        >
          All
        </FilterButton>

        <FilterButton
          filter="active"
          isSelected={buttonFilter === 'active'}
          handleChangeFilter={handleChangeFilter}
        >
          Active
        </FilterButton>

        <FilterButton
          filter="completed"
          isSelected={buttonFilter === 'completed'}
          handleChangeFilter={handleChangeFilter}
        >
          Completed
        </FilterButton>
      </div>

      <button
        type="button"
        className="menu-text-light menu-button"
        onClick={() => clearCompleted()}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default ListMenu;
