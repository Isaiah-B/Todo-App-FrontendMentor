import { useState, useContext } from 'react';

import FilterButton from '../filter-button/filter-button.component';
import { TodoContext } from '../../context/todoContext';

import './list-menu-mobile.styles.css';
import '../list-menu/list-menu.styles.css';

interface ListMenuMobileProps {
  onChangeFilter: (filter: string) => void;
}

function ListMenuMobile({ onChangeFilter }: ListMenuMobileProps) {
  const { remainingTodos, clearCompleted } = useContext(TodoContext);
  const [buttonFilter, setButtonFilter] = useState<string>('all');

  const handleChangeFilter = (filter: string) => {
    setButtonFilter(filter);
    onChangeFilter(filter);
  };

  return (
    <>
      <div className="list-menu-mobile">
        <span className="menu-text-light">{`${remainingTodos} items left`}</span>
        <button
          type="button"
          className="menu-text-light menu-button"
          onClick={() => clearCompleted()}
        >
          Clear Completed
        </button>
      </div>

      <div className="list-filter-menu-mobile">
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
    </>
  );
}

export default ListMenuMobile;
