import { useEffect, useState } from 'react';
import MoonIcon from './icons/MoonIcon';
import SunIcon from './icons/SunIcon';

const initialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light')
    }
  },[darkMode])

  return (
    <header className="container x-auto px-4 pt-8" >
      <div className="flex justify-between text-3xl font-bold tracking-[0.3em]">
        <h1 className="uppercase text-white">Todo</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode 
            ? <MoonIcon />
            : <SunIcon />
          }
        </button>
      </div>
    </header>
  );
};

export default Header;
