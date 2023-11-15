import Link from 'next/link';
import useDarkMode from '../useDarkMode';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useEffect, useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();


  return (
    <nav className={`bg-${colorTheme === 'light' ? 'blue-900' : 'green-600'} text-black dark:text-[#CBD7F6] w-screen bg-[#CBD7F6] dark:bg-[#070F21]`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center space-x-2">
              <img src="icon-tekyvil.png" className="w-12 h-12" alt="Tekyville Logo" />
              <span className="text-2xl font-bold">Tekyville</span>
            </a>
          </Link>
          <div className="hidden lg:flex space-x-8" style={{fontSize:'16px'}}>
            <Link href="/product">
              <a className="hover:text-teal-400" style={{fontSize:'16px'}}>Product</a>
            </Link>
            <Link href="/features">
              <a className="hover:text-teal-400" style={{fontSize:'16px'}}>Features</a>
            </Link>
            <Link href="/pricing">
              <a className="hover:text-teal-400" style={{fontSize:'16px'}}>Pricing</a>
            </Link>
            <Link href="/about">
              <a className="hover:text-teal-400" style={{fontSize:'16px'}}>About us</a>
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl focus:outline-none"
            >
              ☰
            </button>
          {/* </div>
        <div className="cursor-pointer rounded-full bg-gray-200 p-5">
        {colorTheme === "light" ? (
          <SunIcon onClick={useDarkMode} className="h-6 text-yellow-500 text-gray-500" />
        ) : (
          <MoonIcon onClick={useDarkMode} className="h-6 text-gray-500" />
        )} */}
        
      </div>
      
        <div className="cursor-pointer rounded-full bg-black dark:bg-[#00FF00] p-2">
          {colorTheme === "light" ? (
            <MoonIcon  onClick={() => setTheme("light")} className="h-5  text-gray-500" />
          ) : (
            <SunIcon onClick={() => setTheme("dark")} className="h-5 text-[#CBD7F6] dark:text-gray-400" />
          )}
        </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className={`bg-${colorTheme === 'light' ? 'blue-900' : 'red-600'} py-4`}>
              <div className="flex items-center justify-between">
                <Link href="/">
                  <a className="flex items-center space-x-2">
                    <img src="icon-tekyvil.png" className="w-10 h-10" alt="Tekyville Logo" />
                    <span className="text-xl font-bold">Tekyville</span>
                  </a>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl focus:outline-none"
                >
                  ✕
                </button>
              </div>
              <ul className="mt-6 space-y-6">
                <li>
                  <Link href="/product">
                    <a className="block text-xl hover:text-teal-400">Product</a>
                  </Link>
                </li>
                <li>
                  <Link href="/features">
                    <a className="block text-xl hover:text-teal-400">Features</a>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing">
                    <a className="block text-xl hover:text-teal-400">Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="block text-xl hover:text-teal-400">About us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
