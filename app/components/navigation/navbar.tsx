'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state of the button

  useEffect(() => {
    const findTheme = () => {
      let storedTheme = localStorage.getItem('theme');

      if (!storedTheme) {
        storedTheme = 'dark';
        localStorage.setItem('theme', storedTheme);
      }

      setTheme(storedTheme);
      setIsLoading(false); // Update loading state once theme is retrieved

      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    findTheme();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  const applyTheme = (selectedTheme: string) => {
    if (selectedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="bg-black dark:bg-stone-100 dark:text-black p-0 text-white flex flex-row w-full justify-between items-center px-4 py-3 sm:px-6 md:px-6">
      <Link href="/" className={`hover:text-blue-500 ${pathname === '/' ? 'text-blue-500' : ''}`}>
        Home
      </Link>
      <div className="flex space-x-4 items-center">
        <Link href="/users" className={`hover:text-blue-500 ${pathname === '/users' ? 'text-blue-500' : ''}`}>
          References
        </Link>
        <Link href="/contact" className={`hover:text-blue-500 ${pathname === '/contact' ? 'text-blue-500' : ''}`}>
          Contact
        </Link>
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
            theme === 'dark' ? 'bg-black text-customGreen hover:bg-gray-800' : 'bg-customGreen text-black hover:bg-green-600'
          }`}
          disabled={isLoading} // Disable button while theme is loading
        >
          {isLoading ? 'Loading...' : `Toggle ${theme === 'dark' ? 'Dark' : 'Light'} Mode`}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
