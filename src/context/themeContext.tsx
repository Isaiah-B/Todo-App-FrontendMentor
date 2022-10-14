/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useEffect, useState } from 'react';

interface ThemeContextInterface {
  theme: string;
  toggleTheme: () => void;
}

interface Props {
  children: JSX.Element,
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: 'theme-dark',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<string>('theme-dark');

  useEffect(() => {
    if (localStorage.getItem('todo-theme')) {
      setTheme(`${localStorage.getItem('todo-theme')}`);
    } else {
      localStorage.setItem('todo-theme', 'theme-dark');
    }
  });

  const toggleTheme = () => {
    const newTheme = theme === 'theme-dark' ? 'theme-light' : 'theme-dark';

    localStorage.setItem('todo-theme', newTheme);
    setTheme(newTheme);
  };

  const value: ThemeContextInterface = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
