import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from './context/themeContext';
import './index.css';
import App from './App';
import { TodoProvider } from './context/todoContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <ThemeProvider>
    <TodoProvider>
      <App />
    </TodoProvider>
  </ThemeProvider>,
);
