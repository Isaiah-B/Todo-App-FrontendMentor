import { useContext } from 'react';

import { ThemeContext } from '../../context/themeContext';
import { ReactComponent as MoonIcon } from '../../assets/icons/icon-moon.svg';
import { ReactComponent as SunIcon } from '../../assets/icons/icon-sun.svg';

import './theme-button.styles.css';

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="theme-button"
      type="button"
      onClick={() => toggleTheme()}
      aria-label="toggle theme"
    >
      {
        theme === 'theme-light'
          ? <MoonIcon />
          : <SunIcon />
      }
    </button>
  );
}

export default ThemeButton;
