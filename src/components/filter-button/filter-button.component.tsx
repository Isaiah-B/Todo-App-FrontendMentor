interface FilterButtonProps {
  children: React.ReactNode;
  filter: string;
  isSelected: boolean;
  handleChangeFilter: (filter: string) => void;
}

function FilterButton({
  children,
  filter,
  isSelected = false,
  handleChangeFilter,
}: FilterButtonProps) {
  return (
    <button
      type="button"
      className={`menu-text-bold menu-button ${isSelected ? 'selected' : ''}`}
      onClick={() => handleChangeFilter(filter)}
    >
      {children}
    </button>
  );
}

export default FilterButton;
