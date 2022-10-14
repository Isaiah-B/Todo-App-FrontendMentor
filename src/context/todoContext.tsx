import {
  useState, createContext, useMemo, useEffect,
} from 'react';
import { Todo } from '../model';

interface ITodoContext {
  todos: Todo[];
  filtered: Todo[];
  remainingTodos: number;
  addTodo: (newTodo: Todo) => void;
  removeTodo: (id: number) => void;
  toggleActive: (id: number) => void;
  filterTodos: (filterString: string) => void;
  clearCompleted: () => void;
  updateList: (newList: Todo[]) => void;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const TodoContext = createContext<ITodoContext>({
  todos: [],
  filtered: [],
  remainingTodos: 0,
  addTodo: () => {},
  removeTodo: () => {},
  toggleActive: () => {},
  filterTodos: () => {},
  clearCompleted: () => {},
  updateList: () => {},
  setFilter: () => {},
});

interface TodoProviderProps {
  children: React.ReactNode;
}

export function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filtered, setFiltered] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>('all');

  const remainingTodos = todos.filter((todo) => todo.isActive).length;

  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleActive = (id: number) => {
    setTodos(todos.map((todo) => (
      todo.id === id
        ? { ...todo, isActive: !todo.isActive }
        : todo
    )));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.isActive));
  };

  const filterTodos = () => {
    if (filter === 'all') {
      setFiltered(todos);
    } else if (filter === 'active') {
      setFiltered(todos.filter((todo) => todo.isActive));
    } else if (filter === 'completed') {
      setFiltered(todos.filter((todo) => !todo.isActive));
    }
  };

  const updateList = (newList: Todo[]) => {
    setTodos(newList);
  };

  useEffect(() => {
    filterTodos();
  }, [todos, filter]);

  const value: ITodoContext = useMemo(
    () => (
      {
        todos,
        filtered,
        remainingTodos,
        addTodo,
        removeTodo,
        toggleActive,
        filterTodos,
        clearCompleted,
        updateList,
        setFilter,
      }
    ),
    [todos, filtered],
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
