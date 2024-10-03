'use client';

import { useState, useEffect } from 'react';
import TextCompare from './components/TextCompare';
import Link from 'next/link';

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // 初始化主题
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? 'dark' : 'light');

    // 监听系统主题变化
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // 应用主题
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Diffchecker</h1>
            <nav className="ml-10 hidden md:block">
              <ul className="flex space-x-4">
                <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">Text</a></li>
                <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">Images</a></li>
                <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">Documents</a></li>
                <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">Excel</a></li>
                <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">Folders</a></li>
              </ul>
            </nav>
          </div>
          <button
            onClick={toggleTheme}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Compare text</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Find the difference between two text files</p>
          <TextCompare />
        </div>
      </main>
      <footer className="bg-white dark:bg-gray-800 shadow-sm mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400">© 2024 Diffchecker. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">Terms of Service</Link>
              <Link href="/contact-us" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}